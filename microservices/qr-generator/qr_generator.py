import qrcode
from qrcode.constants import ERROR_CORRECT_H
from qrcode.image.pil import PilImage
from PIL import Image, ImageDraw, ImageFont
import json
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
json_path = os.path.join(BASE_DIR, "datos.json")
#gers_path = os.path.join(BASE_DIR, "logos/gers.png")               # GERS
gers_path = os.path.join(BASE_DIR, "logos/logo_qdl_SAdeCV.png")     # QDL
ti_path = os.path.join(BASE_DIR, "logos/logo sistemas.png")
output_dir = os.path.join(BASE_DIR, "etiquetas")

# --- Dibujar borde redondeado punteado ---
grosor_borde = 1
radio_esquinas = 30
dash_length = 10   # largo del trazo
gap_length = 5     # espacio entre trazos

def draw_dashed_rounded_rectangle(draw, box, radius, outline, width, dash_length, gap_length, offset=5):
    import math

    x0, y0, x1, y1 = box

    x1 -= 1
    y1 -= 1

    # recta superior
    for i in range(x0 + radius, x1 - radius, dash_length + gap_length):
        draw.line([(i, y0), (min(i + dash_length, x1 - radius), y0)], fill=outline, width=width)

    # recta inferior
    for i in range(x0 + radius, x1 - radius, dash_length + gap_length):
        draw.line([(i, y1), (min(i + dash_length, x1 - radius), y1)], fill=outline, width=width)

    # recta izquierda
    for i in range(y0 + radius, y1 - radius, dash_length + gap_length):
        draw.line([(x0, i), (x0, min(i + dash_length, y1 - radius))], fill=outline, width=width)

    # recta derecha
    for i in range(y0 + radius, y1 - radius, dash_length + gap_length):
        draw.line([(x1, i), (x1, min(i + dash_length, y1 - radius))], fill=outline, width=width)

    # esquinas → aproximación con pequeños arcos
    for corner, start in [((x0+radius, y0+radius), 180),
                          ((x1-radius, y0+radius), 270),
                          ((x1-radius, y1-radius),   0),
                          ((x0+radius, y1-radius),  90)]:
        cx, cy = corner
        circumference = 2 * math.pi * radius / 4
        steps = int(circumference / (dash_length + gap_length))
        for i in range(steps):
            angle_start = math.radians(start + i * (90 / steps))
            angle_end   = math.radians(start + i * (90 / steps) + (dash_length / circumference) * 90)
            x_start = cx + radius * math.cos(angle_start)
            y_start = cy + radius * math.sin(angle_start)
            x_end   = cx + radius * math.cos(angle_end)
            y_end   = cy + radius * math.sin(angle_end)
            draw.line([(x_start, y_start), (x_end, y_end)], fill=outline, width=width)

def generar_etiqueta_reorganizada(numero_serie: str, contador: int, logo1_path=gers_path, logo2_path=ti_path):

    # --- Datos para QR ---
    id_custom = contador
    numero_serie_str = f"{numero_serie}"
    data = json.dumps({"id": id_custom, "numero_serie": numero_serie_str})
    try:
        font = ImageFont.truetype("arial.ttf", 72)
    except:
        font = ImageFont.load_default()

    # --- Generar QR de alta calidad ---
    qr = qrcode.QRCode(
        version=10,
        error_correction=ERROR_CORRECT_H,
        box_size=12,
        border=4
    )
    qr.add_data(data)
    qr.make(fit=True)
    qr_img = qr.make_image(fill_color="black", back_color="white", image_factory=PilImage).convert("RGB")

    # --- Crear lienzo 4x4 cm a 300 dpi ---
    etiqueta_width = 472
    etiqueta_heigth = 392
    etiqueta = Image.new("RGB", (etiqueta_width, etiqueta_heigth), "white")
    draw = ImageDraw.Draw(etiqueta)

    # --- Colocar Logo1 centrado arriba ---
    try:
        if os.path.exists(logo1_path):
            logo1 = Image.open(logo1_path).convert("RGBA")
            #logo1 = logo1.resize((300, 75), Image.Resampling.LANCZOS) # GERS
            logo1 = logo1.resize((240, 100), Image.Resampling.LANCZOS) # QDL
            x_logo1 = (etiqueta_width - logo1.width)//2
            #y_logo1 = 35  # GERS
            y_logo1 = 20  # QDL
            etiqueta.paste(logo1, (x_logo1, y_logo1), mask=logo1.split()[3])

    except Exception as e:
        print("⚠️ Error logo1:", e)

    # --- Colocar QR en el centro vertical, ajustado ---
    qr_size = 250
    qr_img = qr_img.resize((qr_size, qr_size), Image.Resampling.LANCZOS)
    x_qr = (etiqueta_width - qr_size)//2
    y_qr = 120  # dejar espacio arriba para logo1
    etiqueta.paste(qr_img, (x_qr, y_qr))

   # --- Colocar Logo2 a la izquierda del QR y girado 90° ---
    try:
        if os.path.exists(logo2_path):
            logo2 = Image.open(logo2_path).convert("RGBA")
            logo2 = logo2.resize((200, 64), Image.Resampling.LANCZOS)
            logo2 = logo2.rotate(90, expand=True)
            x_logo2 = x_qr - logo2.width - 10
            y_logo2 = y_qr + (qr_size - logo2.height)//2
            etiqueta.paste(logo2, (x_logo2, y_logo2), mask=logo2.split()[3])

    except Exception as e:
        print("⚠️ Error logo2:", e)
    
    # --- Colocar texto a la derecha del QR y girado 90° ---
    try:
        text = f"P{id_custom:03d}"
        bbox = draw.textbbox((0,0), text, font=font)
        text_width = bbox[2] - bbox[0]
        text_height = bbox[3] - bbox[1]
    
        # Crear imagen temporal para el texto
        padding = 40  # píxeles de margen alrededor del texto
        text_img = Image.new(
            "RGBA",
            (int(text_width) + padding, int(text_height) + padding),
            (255, 255, 255, 0)
        )
        text_draw = ImageDraw.Draw(text_img)
        text_draw.text((padding//2, padding//2), text, font=font, fill="black")

        # Girar 90°
        text_img_rot = text_img.rotate(90, expand=True)

        # Posicionar
        x_text = x_qr + qr_size - 10
        y_text = y_qr + (qr_size - text_img_rot.height)//2
        etiqueta.paste(text_img_rot, (x_text, y_text), mask=text_img_rot.split()[3])
    except Exception as e:
        print("⚠️ Error texto:", e)
        
    # Usar la función
    draw_dashed_rounded_rectangle(
        draw,
        [grosor_borde//2, grosor_borde//2, etiqueta_width - grosor_borde//2, etiqueta_heigth - grosor_borde//2],
        radius=radio_esquinas,
        outline="black",
        width=grosor_borde,
        dash_length=5,
        gap_length=5
    )
    # --- Guardar archivo con contador ---
    #nombre_archivo = f"GERS_P{contador:03d}_{numero_serie_str}.png"
    nombre_archivo = f"QDL_Cargador_P{contador:03d}_{numero_serie_str}.png"
    ruta_completa = os.path.join(output_dir, nombre_archivo)
    etiqueta.save(ruta_completa, dpi=(300,300))
    print(f"✅ Generada: {nombre_archivo} | ID: {id_custom} | Serie: {numero_serie_str}")


# --- Generar lote ejemplo ---
with open(json_path, "r", encoding="utf-8") as f:
    datos = json.load(f)

    for item in datos:
        numero_serie = item["numero_serie"]
        id = item["id"]

        generar_etiqueta_reorganizada(numero_serie, id)
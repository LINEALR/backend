from reportlab.lib.pagesizes import A4, landscape
from reportlab.pdfgen import canvas
from reportlab.lib.units import mm
import os
from PIL import Image

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
output_dir = os.path.join(BASE_DIR, "etiquetas")
pdf_path = os.path.join(BASE_DIR, "etiquetas.pdf")

def generar_pdf():
    #Pagina horizontal para más espacio
    page_width, page_height = A4 #landscape(A4) para que sea horizontal

    #Crear PDF
    c = canvas.Canvas(pdf_path, pagesize=(page_width, page_height))

    #Configuraión de cuadrícula
    etiquetas_por_fila = 5
    margen_x =   0       #5 * mm
    margen_y =   0       #5 * mm
    espacio_x =  0       #5 * mm
    espacio_y =  0       #5 * mm

    #Tamaño de etiqueta en píxeles convertidos a mm
    etiqueta_width_px, etiqueta_height_px =(472, 392)
    dpi = 300
    etiqueta_width = (etiqueta_width_px / dpi) * 25.4 * mm
    etiqueta_height = (etiqueta_height_px / dpi) * 25.4 * mm

    x = margen_x
    y = page_height - margen_y - etiqueta_height

    count = 0

    #Recorrer todas las imágenes de la carpeta
    for filename in sorted(os.listdir(output_dir)):
        if filename.endswith(".png"):
            img_path = os.path.join(output_dir, filename)

            #Dibujar imagen
            c.drawImage(img_path, x, y, width=etiqueta_width, height=etiqueta_height)

            count += 1
            x += etiqueta_width + espacio_x

            #Pasar a la siguiente fila
            if count % etiquetas_por_fila == 0:
                x = margen_x
                y -= etiqueta_height + espacio_y

                #Si ya no cabe en la página, crear una nueva
                if y < margen_y:
                    c.showPage()
                    y = page_height - margen_y - etiqueta_height
    c.save()    
    print(f"📄 PDF generado en: {pdf_path}")
generar_pdf()
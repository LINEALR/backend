from reportlab.lib.pagesizes import A4, landscape
from reportlab.pdfgen import canvas
from reportlab.lib.units import mm
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
output_dir = os.path.join(BASE_DIR, "etiquetas")
pdf_path = os.path.join(BASE_DIR, "etiquetas.pdf")

def generar_pdf():
    page_width, page_height = landscape(A4)  # horizontal
    c = canvas.Canvas(pdf_path, pagesize=(page_width, page_height))

    # Configuración de cuadrícula
    etiquetas_por_fila = 7
    espacio_x = 0
    espacio_y = 0

    # Tamaño de etiqueta
    etiqueta_width_px, etiqueta_height_px = (472, 392)
    dpi = 300
    etiqueta_width = (etiqueta_width_px / dpi) * 25.4 * mm
    etiqueta_height = (etiqueta_height_px / dpi) * 25.4 * mm

    # Listar imágenes
    imagenes = [f for f in sorted(os.listdir(output_dir)) if f.endswith(".png")]

    count = 0
    total_images = len(imagenes)

    while count < total_images:
        # Cuántas etiquetas caben en esta página
        etiquetas_en_pagina = min(etiquetas_por_fila * int(page_height // (etiqueta_height + espacio_y)), total_images - count)
        
        # Cuántas filas en esta página
        filas = (etiquetas_en_pagina + etiquetas_por_fila - 1) // etiquetas_por_fila

        # Altura total ocupada por las filas
        total_grid_height = filas * etiqueta_height + (filas - 1) * espacio_y
        y_start = (page_height - total_grid_height) / 2 + total_grid_height - etiqueta_height  # empezamos desde arriba de la cuadrícula

        row_index = 0
        while row_index < filas:
            remaining = total_images - count
            etiquetas_en_fila = min(etiquetas_por_fila, remaining)

            # Calcular margen para centrar horizontalmente
            total_row_width = etiquetas_en_fila * etiqueta_width + (etiquetas_en_fila - 1) * espacio_x
            x = (page_width - total_row_width) / 2

            # Calcular coordenada y para esta fila
            y = y_start - row_index * (etiqueta_height + espacio_y)

            # Dibujar fila
            for i in range(etiquetas_en_fila):
                img_path = os.path.join(output_dir, imagenes[count])
                c.drawImage(img_path, x, y, width=etiqueta_width, height=etiqueta_height)
                x += etiqueta_width + espacio_x
                count += 1

            row_index += 1

        # Crear nueva página si quedan imágenes
        if count < total_images:
            c.showPage()

    c.save()
    print(f"📄 PDF generado en: {pdf_path}")

generar_pdf()

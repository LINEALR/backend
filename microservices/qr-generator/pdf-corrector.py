import fitz  # PyMuPDF

# Ruta del PDF
pdf_path = "Prisma.pdf"
doc = fitz.open(pdf_path)

# Color de fondo (RGB, valores de 0 a 1)
bg_color = (0, 0, 0)  # Azul claro

for page in doc:
    rect = page.rect
    shape = page.new_shape()
    shape.draw_rect(rect)
    # Crea un rectángulo sin borde y relleno del color deseado
    shape.finish(color=None, fill=bg_color)
    # Inserta el fondo detrás del contenido existente
    shape.commit(overlay=False)

# Guarda el nuevo PDF
doc.save("documento_con_fondo.pdf")

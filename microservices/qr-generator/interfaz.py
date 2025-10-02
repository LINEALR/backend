import tkinter as tk
from tkinter import messagebox
import json
import os

# Nombre del archivo donde guardaremos los datos
FILENAME = "datos.json"

# Cargar datos existentes
def cargar_datos():
    if os.path.exists(FILENAME):
        with open(FILENAME, "r", encoding="utf-8") as f:
            return json.load(f)
    return []

# Guardar datos en archivo
def guardar_datos(data):
    with open(FILENAME, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=4, ensure_ascii=False)

# Función para agregar un nuevo registro
def agregar_dato():
    numero_serie = entry_numero.get().strip()

    if not numero_serie:
        messagebox.showwarning("Campo vacío", "Debes ingresar un número de serie.")
        return

    datos = cargar_datos()
    nuevo_id = len(datos) + 1

    datos.append({
        "id": nuevo_id,
        "numero_serie": numero_serie
    })

    guardar_datos(datos)
    messagebox.showinfo("Guardado", f"Se agregó el registro con id {nuevo_id}")
    
    entry_numero.delete(0, tk.END)  # Limpiar campo

# Crear ventana
root = tk.Tk()
root.title("Registro de Números de Serie")
root.geometry("400x200")

# Etiqueta y campo de entrada
label_numero = tk.Label(root, text="Número de Serie:")
label_numero.pack(pady=5)
entry_numero = tk.Entry(root, width=40)
entry_numero.pack(pady=5)

# Botón
btn_guardar = tk.Button(root, text="Guardar", command=agregar_dato)
btn_guardar.pack(pady=20)

root.mainloop()

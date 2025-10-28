from difflib import SequenceMatcher

def verificar_similitud(cadena1, cadena2, umbral=0.9):
    ratio = SequenceMatcher(None, cadena1, cadena2).ratio()
    print(f"Similitud: {ratio*100:.2f}%")
    return ratio >= umbral

texto1 = "PF488KY6"
texto2 = "SSF488KY6"

if verificar_similitud(texto1, texto2):
    print("Las cadenas son muy similares (>=90%)")
else:
    print("Las cadenas no son suficientemente similares")

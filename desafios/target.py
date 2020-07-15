
def Target():
    listaTemp = []
    resultado = []

    target = int(input("Digite o Target: "))

    nums = []
    total = int(input("Digite o tamanho do array: "))
    print("Digite os números: ")

    for _ in range(total):
        numero = int(input("Numero: "))
        listaTemp.append(numero)

    listaTemp.sort()

    for i in range(len(listaTemp)):
        if (listaTemp[i] + listaTemp[i + 1] == target):
            resultado.append(i)
            resultado.append(i + 1)
            print(f"[{i},{i + 1}]")
            break

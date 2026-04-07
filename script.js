function calcularMedia() {

    // Pegando valores dos inputs
    var valor1 = document.getElementById("numero1").value;
    var valor2 = document.getElementById("numero2").value;

    // Convertendo para número
    var numero1 = Number(valor1);
    var numero2 = Number(valor2);

    // Calculando soma
    var soma = numero1 + numero2;

    // Calculando média
    var media = soma / 2;

    // Mostrando resultado na tela
    document.getElementById("resultado").innerHTML = "Média: " + media;
}
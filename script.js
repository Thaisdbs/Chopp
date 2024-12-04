document.getElementById("vendaForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const quantidade = parseFloat(document.getElementById("quantidade").value);
    const precoUnitario = parseFloat(document.getElementById("precoUnitario").value);

    if (!isNaN(quantidade) && !isNaN(precoUnitario)) {
        const total = quantidade * precoUnitario;
        document.getElementById("totalVenda").textContent = total.toFixed(2);
    } else {
        alert("Por favor, insira valores válidos.");
    }
});


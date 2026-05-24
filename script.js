function calcularProducao() {
    // 1. Captura os valores que o utilizador digitou no formulário
    const area = parseFloat(document.getElementById('area').value);
    const produtividade = parseFloat(document.getElementById('produtividade').value);
    const cultura = document.getElementById('cultura').value;

    // 2. Validação: Verifica se os campos estão em branco ou com números negativos
    if (isNaN(area) || isNaN(produtividade) || area <= 0 || produtividade <= 0) {
        alert("Por favor, insira valores válidos e maiores do que zero.");
        return;
    }

    // 3. Executa a lógica matemática (Fórmula: Área versus Produtividade)
    const totalSacas = area * produtividade;

    // 4. Formata o número para exibição com separador de milhares (Ex: 12.500 em vez de 12500)
    const totalFormatado = totalSacas.toLocaleString('pt-BR', { maximumFractionDigits: 2 });

    // 5. Manipula o HTML para mostrar o resultado no ecrã
    const campoResultado = document.getElementById('resultado');
    const textoResultado = document.getElementById('resultado-texto');
    
    // Constrói a mensagem final
    textoResultado.innerHTML = `A sua propriedade de <strong>${area} ha</strong> produzirá aproximadamente <strong>${totalFormatado} sacas</strong> de ${cultura}.`;
    
    // Altera o estilo CSS para tornar a caixa de resultado visível
    campoResultado.style.display = 'block';
}

export function calculatePercentage(gas, ethanol) {
    // Formata tirando todo os caracteres que não são números e deixando apenas o primeiro ponto ('.')
    let formattedEthanol = ethanol.replace(',', '.');
    formattedEthanol = formattedEthanol.replace('.', '/');
    formattedEthanol = formattedEthanol.replaceAll(',', '').replaceAll('.', '').replaceAll('-', '');
    formattedEthanol = formattedEthanol.replace('/', '.');
    formattedEthanol = Number(formattedEthanol);
    let formattedGas = gas.replace(',', '.');
    formattedGas = formattedGas.replace('.', '/');
    formattedGas = formattedGas.replaceAll(',', '').replaceAll('.', '').replaceAll('-', '');
    formattedGas = formattedGas.replace('/', '.');
    formattedGas = Number(formattedGas);

    const ethanolPercentage = (formattedEthanol * 100) / formattedGas;

    return ethanolPercentage.toFixed(2);
}

export function worthEthanol(ethanol) {
    // Se for menor que 70%, retorna que vale a pena (true)
    if (Number(ethanol) < 70) {
        return true;
    } else { // Se não...
        return false; //... retorna que não vale a pena (false)
    }
}
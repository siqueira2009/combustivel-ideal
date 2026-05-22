export function CalculatePercentage(gas, ethanol) {
    const formattedEthanol = Number(ethanol.replace(',', '.'));
    const formattedGas = Number(gas.replace(',', '.'));

    const ethanolPercentage = (formattedEthanol * 100) / formattedGas;

    return ethanolPercentage.toFixed(2);
}

export function worthEthanol(ethanol) {
    if (Number(ethanol) < 70) {
        return true;
    } else {
        return false;
    }
}
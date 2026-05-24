export function getFullDate() {
    // Cria a data atual
    const date = new Date();
    const formattedDate = String(date.getDate()).padStart(2, 0) + '/' + String(date.getMonth() + 1).padStart(2, 0) + '/' + date.getFullYear();
    const formattedHour = String(date.getHours()).padStart(2, 0) + ':' + String(date.getMinutes()).padStart(2, 0);

    // Retorna tudo formatado com texto
    return formattedDate + " às " + formattedHour;
}
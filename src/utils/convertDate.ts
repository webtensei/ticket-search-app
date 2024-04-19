export const formateDate = (date: string) => {
    const dateParts = date.split('.').map(part => parseInt(part));

    return new Date(2000 + dateParts[2], dateParts[1] - 1, dateParts[0]).toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        weekday: 'long'
    });
}
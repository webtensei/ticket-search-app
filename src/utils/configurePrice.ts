export const configurePrice = (price:number, currency?:string) => {
  let convertedPrice = price;
  let options = {};
  let locales = ''

  switch(currency) {
    case 'RUB':
      options = { style: 'currency', currency: 'RUB' };
      locales = 'ru-RU';
      break;
    case 'EUR':
      options = { style: 'currency', currency: 'EUR' };
      locales = 'de-DE';
      convertedPrice = price / 99.75
      break;
    case 'USD':
      options = { style: 'currency', currency: 'USD' };
      locales = 'en-US';
      convertedPrice = price / 94.15
      break;
    default:
      options = { style: 'currency', currency: 'RUB' };
      locales = 'ru-RU';
  }

  return new Intl.NumberFormat(locales, options).format(convertedPrice)
}
export const formatPrice = price => {
  const currencySymbol = '₺';
  const formattedOutput = new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    minimumFractionDigits: 2,
  });
  return formattedOutput.format(price).replace(currencySymbol, '');
};

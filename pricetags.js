let decimals = [1.99, 2.49, 3.5, 4.75];
const priceTags = decimals.map(price => `$${price.toFixed(2)}`);
console.log(priceTags);
const getGcd = (num1, num2) => (num1 !== 0 ? getGcd(num2 % num1, num1) : String(num2));

export default getGcd;

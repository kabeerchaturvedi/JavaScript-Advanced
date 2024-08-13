const upperCase = (str) => {
  return str.toUpperCase();
};

const reverse = (str) => {
  return str.split("").reverse().join("");
};

const append = (str) => {
  return "Hello" + str;
};

const arr = [upperCase, reverse, append];

const initialValue = "learnersbucket";

const finalValue = arr.reduce((previousValue, currentElement) => {
  console.log(previousValue, "####");
  const newValue = currentElement(previousValue);
  return newValue;
}, initialValue);

console.log(finalValue);

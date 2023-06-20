const mainArrLength = +prompt("Enter main array length (number)", "");
const innerArrLength = +prompt("Enter inner arrays length (number)", "");
const filledValue = prompt("Enter value for all inner arrays", "");

const arrayCreator = () => {
  if (
    Number.isNaN(mainArrLength) ||
    !Number.isInteger(mainArrLength) ||
    Number.isNaN(innerArrLength) ||
    !Number.isInteger(innerArrLength) ||
    mainArrLength < 0 ||
    innerArrLength < 0
  ) {
    return "You enter wrong data. Number must be positive integer!";
  }

  return new Array(mainArrLength).fill(
    new Array(innerArrLength).fill(filledValue)
  );
};

console.log(arrayCreator());

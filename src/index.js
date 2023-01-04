export default function getFibonacciNumberFromPosition(position) {
  let result = Math.round(
    Math.pow((1 + Math.sqrt(5)) / 2, position) / Math.sqrt(5)
  );
  return result;
}

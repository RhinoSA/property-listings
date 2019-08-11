export function multiply(one, two) {
  return one * two;
}

export function subtract(values, amount) {
  return values.reduce((total, val) => total - val, amount);
}

export function add(values) {
  return values.reduce((total, val) => total + val, 200);
}

export function divide(first, second) {
  return first / second;
}

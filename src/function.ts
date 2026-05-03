// Function
// arrow function ,normal Functon

// use normal function and assign it to a variable
function func(num1: number, num2: number): number {
  return num1 + num2;
}

// arrow function

const arr = (n: number, n2: number): number => {
  return n + n2;
};

//object in function method;

const poorUser = {
  name: 'hakim',
  balance: 0,
  addBalance(value: number): number {
    return this.balance + value;
  },
};
poorUser.addBalance(10000);

const arrtyr: number[] = [1, 2, 3, 4, 5];

const sqrArry = arrtyr.map((num: number): number => num * num);
// console.log(sqrArry);

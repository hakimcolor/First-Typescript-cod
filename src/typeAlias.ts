//this is a object type alias
type user = {
  id: number;
  name: {
    firstname: string;
    lastName: string;
  };
  gender: 'mail' | 'female';
  contact: string;
  city: string;
};

const user1: user = {
  id: 5274,
  name: {
    firstname: 'hakim',
    lastName: 'ali',
  },
  gender: 'mail',
  contact: 'ksdkfkdkf',
  city: 'sdlkfsd',
};

// function type alias
type addFunc = (num1: number, num2: number) => number;
const add: addFunc = (num1, num2) => num1 + num2;

// console.log(add(10,20));
// Object Type Alias
type Product = {
  id: number;
  name: string;
  price: number;
  category: 'electronics' | 'fashion' | 'food';
  stock: number;
};

const product1: Product = {
  id: 101,
  name: 'Laptop',
  price: 800,
  category: 'electronics',
  stock: 15,
};

// Function Type Alias
type DiscountFunc = (price: number, discount: number) => number;

const calculateDiscount: DiscountFunc = (price, discount) => price - discount;

// console.log(calculateDiscount(800, 100)); // 700
// Object Type Alias
type Employee = {
  id: number;
  name: string;
  department: 'HR' | 'Developer' | 'Designer';
  salary: number;
  isActive: boolean;
};

const employee1: Employee = {
  id: 1,
  name: 'Hakim',
  department: 'Developer',
  salary: 50000,
  isActive: true,
};

// Function Type Alias
type SalaryIncrementFunc = (salary: number, increment: number) => number;

const increaseSalary: SalaryIncrementFunc = (salary, increment) =>
  salary + increment;

// console.log(increaseSalary(50000, 5000)); // 55000
type Student = {
  id: number;
  name: string;
  isPassed: boolean;
};

const student1: Student = {
  id: 1,
  name: 'Hakim',
  isPassed: true,
};
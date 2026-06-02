// Union Type
type UserRole = 'admin' | 'editor';

const getDashboard = (role: UserRole): string => {
  if (role === 'admin') {
    return 'Admin Dashboard';
  } else if (role === 'editor') {
    return 'Editor Dashboard';
  }
  return 'No Dashboard';
};

// Intersection Type
type Employee = {
  id: number;
  name: string;
  phone: string;
};

type Manager = {
  designation: string;
  teamSize: number;
};

type EmployeeManager = Employee & Manager;

const empl: EmployeeManager = {
  id: 122,
  name: 'Hakim',
  phone: '222',
  designation: 'Manager',
  teamSize: 10,
};

// Optional Property Example
type EmployeeInfo = {
  id: number;
  name: string;
  phone?: string;
};

const emps: EmployeeInfo = {
  id: 1,
  name: 'Hakim',
};

// Union Literal Type
type Answer = 'yes' | 'no';

let result: Answer = 'yes';

// Interface
interface Student {
  id: number;
  name: string;
  department?: string;
}

const student1: Student = {
  id: 101,
  name: 'Hakim',
};

const student2: Student = {
  id: 102,
  name: 'Rahim',
  department: 'CSE',
};

// Status Example
type Status = 'success' | 'error';

const showMessage = (status: Status): string => {
  if (status === 'success') {
    return 'Operation Successful';
  }

  return 'Something went wrong';
};

// Array of Objects
type Product = {
  id: number;
  name: string;
  price: number;
};

const products: Product[] = [
  {
    id: 1,
    name: 'Laptop',
    price: 50000,
  },
  {
    id: 2,
    name: 'Phone',
    price: 20000,
  },
];

// Output
// console.log(getDashboard('admin'));
// console.log(empl);
// console.log(emps);
// console.log(result);
// console.log(student1);
// console.log(student2);
// console.log(showMessage('success'));
// console.log(products);

type UserRole = 'admin' | 'editor';
const getDashboard = (role: UserRole) => {
  if (role === 'admin') {
    return 'admin dashbord';
  } else if (role === 'editor') {
    return 'editor dashboard';
  } else {
    return 'no dashobord ';
  }
};

//intersecton type for user and user role
type Employee = {
  id: number;
  name: string;
  phone: string;
};
type manager = {
  designation: string;
  teamsize: number;
};

type EmployeeManager = Employee & manager;
const empl: EmployeeManager = {
  id: 122,
  name: 'hakeim',
  phone: '222',
  designation: 'manager',
  teamsize: 10,
};
// console.log(empl);

type Employees = {
  id: number;
  name: string;
  phone?: string;
};

const emps: Employee = {
  id: 1,
  name: 'Hakim',
};

// console.log(emps);
type Answer = 'yes' | 'no';

let result: Answer = 'yes';
// console.log(result);
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

console.log(student1);
console.log(student2);
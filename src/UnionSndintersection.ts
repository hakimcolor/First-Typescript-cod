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
}
type manager = {
  designation: string;
  teamsize: number;
 }

type EmployeeManager = Employee & manager;
const empl: EmployeeManager = {
  id: 122,
  name: 'hakeim',
  phone: '222',
  designation: 'manager',
teamsize:10
}

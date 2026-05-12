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

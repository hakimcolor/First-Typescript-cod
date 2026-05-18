// ?: ternary opearator   :decision making
// ?? : nullish coalescing operator
// ?. optinal chaining oprator

const mage = (age: number) => {
  if (age >= 21) {
    console.log('your are eligible');
  } else {
    console.log('your are not eligible');
  }
};
// mage(21)

//ternary operator
const isEligible = (age: number) => {
  const result = age >= 21 ? 'eligible' : 'not eligible';
  console.log(result);
};
// isEligible(18)

// nullish coalescing operator
const userThem = undefined;
const theme = userThem ?? 'light ';
// console.log(theme);

//optional chaining operator
const userss: {
  address: {
    City: string;
    town: string;
    postalcode?: number;
  };
} = {
  address: {
    City: 'dhaka',
    town: 'banani',
  },
};
console.log(userss?.address?.postalcode ?? 'enteryour postcode');

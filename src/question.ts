// ?: ternary opearator   :decision making              
// ?? : nullish coalescing operator
// ?. optinal chaining oprator



const mage = (age: number) => {
  if (age >= 21) {
  console.log('your are eligible');
  
  } else {
    console.log('your are not eligible');
    
}
}
// mage(21)

//ternary operator
const isEligible = (age: number) => {
  const result = age >= 21 ? 'eligible' : 'not eligible';
  console.log(result);
  
}
// isEligible(18)


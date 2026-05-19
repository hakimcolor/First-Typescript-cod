// Javascript
//  array , object, function

let list: string[] = ['milk ', 'bread', 'eggs'];
list.push('food');
// list.push(123)
// number is not assignable to string
// console.log(list);

// but when you use any type of array you can push any type of value to it
let shopinglists: any[] = ['milk', 12, 'egges', 'tee', 255];
shopinglists.push(54);
// console.log(shopinglists);

// but it is not recommended to use any type of array because it can lead to bugs and errors in your code

let shopinglist: (string | number)[] = ['milk', 12, 'egges', 'tee', 255];
shopinglist.push(656546654);
// console.log(shopinglist);



// when you want to use tuple type of array you can use it like this
let coordinates: [number, number] = [10, 20];
// console.log(coordinates);


let nameAndRooll: [string, number] = ['hakim', 1444];
//  console.log(nameAndRooll);
 


// Reference Type :  Object

const user: {
  companyName:'hakimcolor' //fixed value  name .. if need fixed value of name then we can use literal type of string 
  fname: string,
  mname?: string, //optinal proparty...... 
  lName: string,
  age:number, // when i use number type of age then i can not assign string value to it 
} = {
  companyName:'hakimcolor', //when i use string type of companyName then i can not assign number value to it 
  fname: 'md',
  mname: 'Azizul ',
  lName: 'Hakim',
  age:21, // when i use number type of age theni can nto assign string value to it 
}
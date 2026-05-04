// object destructuring

const user = {
  id: '123',
  name: {
    fname: 'md',
    mName: 'Azizul',
    LName: 'hakim'
  },
  gender: 'mail',
  age:21
}
// in js
// const mNames = user.name.mName;
//in ts
const { name: { mName: M } } = user;// in the cod  the mName I replace wiht M  , now we can consol M ,, 

// for changing the name of the varible we can do like this in ts  

// console.log(M);

// when we want to change the name of the variable we can do like this . in ts ok .....
const friends = ['karim', 'Rahim', 'Atul '];
// in js
const myfd = friends[2];
console.log(myfd);

// in ts
const [, , t] = friends;
// console.log(t);



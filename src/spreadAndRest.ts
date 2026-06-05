// Spread and Rest Operator in TypeScript 
const frd = ['a', 'b', 'c'];
const NewFd = ['abul', 'babul ', 'cabul'];
const otherfFD = ['Rohim', 'Karim', 'Atul']
frd.push(...NewFd);
frd.push(...otherfFD);
// console.log(frd);


// Rest operator
const sendInvite = (...friend: string[]) => {
  friend.forEach((frd: string) => {
    console.log(`send invition to ${
    frd}`);
    
  })
  
}
sendInvite('abbul', 'bulbul', 'chulbul', 'Rahim')

// Spread Operator

const oldCommits = ['Initial commit', 'Add login'];
const newCommits = ['Fix bug', 'Update UI'];

const allCommits = [...oldCommits, ...newCommits];

console.log(allCommits);


// Rest Operator

const showCommits = (...commits: string[]) => {
  console.log('Commit List:');

  commits.forEach((commit) => {
    console.log(commit);
  });
};

showCommits(
  'Initial commit',
  'Add login',
  'Fix bug',
  'Update UI'
);
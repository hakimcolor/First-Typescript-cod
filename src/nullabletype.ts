const discound = (input: unknown) => {
  if (typeof input === 'number') {
    // console.log(input*0.1);
  } else if (typeof input === 'string') {
    const [discound] = input.split('-');
    console.log(Number(discound) * 0.1);
  } else {
    console.log('worng input');
  }
};
discound(100);
discound('200');
discound(null);

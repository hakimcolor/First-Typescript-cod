// type assertions
const discound = (input: unknown) => {
  if (typeof input === 'string' || typeof input === 'number') {
    const value = input as string;

    console.log(Number(value) * 0.2);
  }
};

discound(100);

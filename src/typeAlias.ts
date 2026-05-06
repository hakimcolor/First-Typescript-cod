//this is a object type alias 
type user = {
  id: number;
  name: {
    firstname: string;
    lastName: string;
  };
  gender: 'mail' | 'female';
  contact: string;
  city: string;
};

const user1: user = {
  id: 5274,
  name: {
    firstname: 'hakim',
    lastName: 'ali',
  },
  gender: 'mail',
  contact: 'ksdkfkdkf',
  city: 'sdlkfsd',
};


type APIUser = {
  first_name: string;
  last_name: string;
  // age: number;
};

type User = {
  firstName: string;
  lastName: string;
  // age: number;
};

const deserializeUser = (user: APIUser): User => {
  return {
    firstName: user.first_name,
    lastName: user.last_name,
    // age: user.age
  };
};

export {};

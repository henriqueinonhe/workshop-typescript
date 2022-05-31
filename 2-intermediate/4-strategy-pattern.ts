const enum Error {
  ErrorA = "ErrorA",
  ErrorB = "ErrorB",
  ErrorC = "ErrorC",
  ErrorD = "ErrorD",
  // ErrorE = "ErrorE"
}

type ErrorHandler = () => void;

const errorProneHandleError = (error: Error): void => {
  switch (error) {
    case "ErrorA":
      //...
      break;
  }

  if (error === Error.ErrorA) {
    //...
  }
};

const handleError = (error: Error): void => {
  const errorHandlerMatrix: Record<Error, ErrorHandler> = {
    ErrorA: () => {
      //...
    },
    ErrorB: () => {
      //...
    },
    ErrorC: () => {
      //...
    },
    ErrorD: () => {
      //...
    },
  };

  const handler = errorHandlerMatrix[error];
  handler();
};

export {};

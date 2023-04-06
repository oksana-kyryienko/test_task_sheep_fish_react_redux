import React from 'react';

type Error = {
  error: string;
}

const ErrorMessage: React.FC<Error> = ({error}) => {
  return (
    <div>
      <p className="error">{error}</p>
    </div>
  );
};

export default ErrorMessage;
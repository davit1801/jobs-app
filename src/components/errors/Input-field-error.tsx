import React from 'react';

type PropsType = {
  message: string;
};

const InputFieldError: React.FC<PropsType> = ({ message }) => {
  return <p className="text-sm text-destructive">{message}</p>;
};

export default InputFieldError;

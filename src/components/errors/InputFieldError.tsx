import React from 'react';

type PropsType = {
  message: string;
};

const InputFieldError: React.FC<PropsType> = ({ message }) => {
  return <p className="text-sm font-semibold text-red-500">{message}</p>;
};

export default InputFieldError;

import React from 'react';
import './input.css';


interface InputProps {
  label: string;
  type: 'text' | 'email' | 'password';
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, type, name, value, onChange, error }) => {
  return (
    <div className="input">
      <label className="input__label" htmlFor={name}>
        {label}
      </label>
      <input
        className={`input__field ${error ? 'input__field--error' : ''}`}
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error && <span className="input__error" id={`${name}-error`}>{error}</span>}
    </div>
  );
};

export default Input;

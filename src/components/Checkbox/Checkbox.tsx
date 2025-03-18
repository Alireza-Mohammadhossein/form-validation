import React from 'react';
import './checkbox.css';
import { useId } from 'react';


interface CheckboxProps {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, name, value, checked, onChange }) => {
  const id = useId();


  return (
    <label htmlFor={id} className="checkbox">
      <input
        className="checkbox__input"
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        id={id}
      />
      <span className="checkbox__label">{label}</span>
    </label>
  );
};

export default Checkbox;

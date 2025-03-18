import React, { useState } from 'react';
import Input from '../Input/Input';
import Checkbox from '../Checkbox/Checkbox';
import './form.css';


const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    color: '',
    animals: [] as string[],
    tigerType: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    tigerType: '',
  });

  const validate = () => {
    let valid = true;
    let newErrors = { email: '', password: '', tigerType: '' };

    if (!formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      newErrors.email = 'Invalid email address';
      valid = false;
    }

    if (formData.password.length <= 8) {
      newErrors.password = 'Password must be longer than 8 characters';
      valid = false;
    }

    if (formData.animals.includes('Tiger') && formData.tigerType.trim() === '') {
      newErrors.tigerType = 'Type of tiger is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully');

      window.location.reload();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        animals: checked
          ? [...prev.animals, value]
          : prev.animals.filter((animal) => animal !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className='form-container'>
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form__title">Form Validation</h2>

        <Input label="Email:" type="email" name="email" value={formData.email} onChange={handleChange} error={errors.email} />
        <Input label="Password:" type="password" name="password" value={formData.password} onChange={handleChange} error={errors.password} />

        <fieldset className="form__fieldset">
          <legend className="form__legend">Select a color:</legend>
          {['Blue', 'Green', 'Red', 'Black', 'Brown'].map((color) => (
            <label key={color} className="form__radio-label">
              <input className="form__radio" type="radio" name="color" value={color} onChange={handleChange} />
              {color}
            </label>
          ))}
        </fieldset>

        <fieldset className="form__fieldset">
          <legend className="form__legend">Select animals:</legend>
          {['Bear', 'Tiger', 'Snake', 'Donkey'].map((animal) => (
            <Checkbox key={animal} label={animal} name="animals" value={animal} checked={formData.animals.includes(animal)} onChange={handleChange} />
          ))}
        </fieldset>

        {formData.animals.includes('Tiger') && (
          <Input label="Type of Tiger" type="text" name="tigerType" value={formData.tigerType} onChange={handleChange} error={errors.tigerType} />
        )}

        <button className="form__button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;

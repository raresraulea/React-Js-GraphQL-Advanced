import { useState } from 'react';

export default function useForm(initial = {}) {
  const [inputs, setInputs] = useState(initial);

  const handleChange = (e) => {
    let { value, name, type } = e.target;

    if (type === 'number') {
      value = parseInt(value);
    }
    if (type === 'file') {
      [value] = e.target.files;
    }

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const resetForm = () => {
    setInputs(initial);
  };

  const clearForm = () => {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );

    setInputs(blankState);
  };

  return {
    inputs,
    clearForm,
    resetForm,
    handleChange,
  };
}

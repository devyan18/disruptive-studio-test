import { useState } from "react";

export const useForm = <T>(initialValues: T) => {
  const [values, setValues] = useState<T>(initialValues);

  const handleSetValues = (key: keyof T, value: string) => {
    setValues((prev) => ({
      ...prev,
      [key]: value
    }));
  };

  const handleReset = () => {
    setValues(initialValues);
  };

  return { values, handleSetValues, handleReset };
};

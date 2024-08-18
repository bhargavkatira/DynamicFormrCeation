// src/hooks/useFormBuilder.js
import { useState } from "react";

export const useFormBuilder = () => {
  const [formFields, setFormFields] = useState([]);
  const [error, setError] = useState(null);

  const handleAddField = (field) => {
    setFormFields([...formFields, field]);
  };

  const handleRemoveField = (index) => {
    setFormFields(formFields.filter((_, i) => i !== index));
  };

  const handleAddOption = (fieldIndex, option) => {
    setFormFields(
      formFields.map((field, index) => {
        if (index === fieldIndex) {
          return {
            ...field,
            options: [...(field.options || []), option],
          };
        }
        return field;
      })
    );
  };

  const handleSaveConfiguration = () => {
    // Implement your save logic
    console.log("Configuration saved:", formFields);
  };

  const handleLoadConfiguration = (config) => {
    if (Array.isArray(config)) {
      setFormFields(config);
      setError(""); // Clear error message if loading is successful
    } else {
      setError("Invalid configuration format. Expected an array of fields.");
    }
  };

  const handleRemoveOption = (fieldIndex, optionIndex) => {
    setFormFields((prev) =>
      prev.map((field, i) =>
        i === fieldIndex
          ? {
              ...field,
              options: field.options.filter((_, j) => j !== optionIndex),
            }
          : field
      )
    );
  };

  return {
    formFields,
    error,
    handleAddField,
    handleRemoveField,
    handleAddOption,
    handleRemoveOption,
    handleSaveConfiguration,
    handleLoadConfiguration,
  };
};

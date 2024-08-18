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

  const handleLoadConfiguration = (configJson) => {
    try {
      const config = JSON.parse(configJson);
      if (Array.isArray(config.formFields)) {
        setFormFields(config.formFields);
      } else {
        throw new Error("Invalid configuration format.");
      }
    } catch (e) {
      setError("Failed to load configuration. " + e.message);
    }
  };

  return {
    formFields,
    error,
    handleAddField,
    handleRemoveField,
    handleAddOption,
    handleSaveConfiguration,
    handleLoadConfiguration,
  };
};

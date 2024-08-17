import { useState } from "react";

export const useFormBuilder = () => {
  const [formFields, setFormFields] = useState([]);
  const [error, setError] = useState("");

  const handleAddField = (newField) => {
    setFormFields([...formFields, newField]);
  };

  const handleRemoveField = (index) => {
    setFormFields(formFields.filter((_, i) => i !== index));
  };

  const handleLoadConfiguration = (configJson) => {
    try {
      const parsedConfig = JSON.parse(configJson);

      const isValid =
        Array.isArray(parsedConfig) &&
        parsedConfig.every(
          (field) =>
            field.hasOwnProperty("name") &&
            field.hasOwnProperty("label") &&
            field.hasOwnProperty("type")
        );

      if (!isValid) {
        throw new Error(
          'Invalid JSON structure. Each field must have "name", "label", and "type" properties.'
        );
      }

      setFormFields(parsedConfig);
      setError("");
    } catch (err) {
      setError(`Error loading configuration: ${err.message}`);
    }
  };

  const handleSaveConfiguration = () => {
    const blob = new Blob([JSON.stringify(formFields, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "form-config.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const onSubmit = (data) => {
    console.log("Form data:", data);
  };

  return {
    formFields,
    error,
    handleAddField,
    handleRemoveField,
    handleLoadConfiguration,
    handleSaveConfiguration,
    onSubmit,
  };
};

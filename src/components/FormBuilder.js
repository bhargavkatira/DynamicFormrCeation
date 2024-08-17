import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import FieldComponent from "./FieldComponent";
import "./styles.css"; // Ensure you import the CSS file
import { useFormBuilder } from "../hooks/useFormBuilder";

const FormBuilder = () => {
  const {
    formFields,
    error,
    handleAddField,
    handleRemoveField: removeFieldFromBuilder, // Rename here
    handleLoadConfiguration,
    handleSaveConfiguration,
  } = useFormBuilder();

  const methods = useForm();
  const { handleSubmit, reset } = methods;

  const [newField, setNewField] = useState({
    name: "",
    label: "",
    type: "text",
    options: [],
    validation: {},
  });
  const [configJson, setConfigJson] = useState("");
  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setNewField((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddNewField = () => {
    if (newField.name && newField.label) {
      handleAddField(newField);
      setNewField({
        name: "",
        label: "",
        type: "text",
        options: [],
        validation: {},
      });
      setSubmissionMessage(""); // Clear success message when adding a new field
    } else {
      alert("Name and label are required.");
    }
  };

  const handleConfigChange = (event) => {
    setConfigJson(event.target.value);
  };

  const handleLoad = () => {
    handleLoadConfiguration(configJson);
    setSubmissionMessage(""); // Clear success message when loading configuration
  };

  const handleSave = () => {
    handleSaveConfiguration();
  };

  const onSubmit = (data) => {
    console.log("Form data:", data);
    setSubmissionMessage("Form submitted successfully!");
    reset();
  };

  // Rename this function to avoid conflict
  const handleRemoveField = (index) => {
    removeFieldFromBuilder(index);
    setSubmissionMessage(""); // Clear success message when removing a field
  };

  return (
    <div className="container">
      <h2>Dynamic Form Builder</h2>
      <div>
        <h3>Add New Field</h3>
        <input
          type="text"
          name="name"
          placeholder="Field Name"
          value={newField.name}
          onChange={handleFieldChange}
        />
        <input
          type="text"
          name="label"
          placeholder="Field Label"
          value={newField.label}
          onChange={handleFieldChange}
        />
        <select name="type" value={newField.type} onChange={handleFieldChange}>
          <option value="text">Text</option>
          <option value="textarea">Textarea</option>
          <option value="dropdown">Dropdown</option>
          <option value="checkbox">Checkbox</option>
          <option value="radio">Radio</option>
          <option value="file">File</option>
        </select>
        <button className="primary" onClick={handleAddNewField}>
          Add Field
        </button>
        <button className="secondary" onClick={handleSave}>
          Save Configuration
        </button>
      </div>
      <div>
        <textarea
          rows="10"
          value={configJson}
          onChange={handleConfigChange}
          placeholder="Paste JSON configuration here"
        />
        <button className="primary" onClick={handleLoad}>
          Load Configuration
        </button>
        {error && <p className="notification error">{error}</p>}
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormProvider {...methods}>
          {formFields.map((field, index) => (
            <div className="field-container" key={index}>
              <FieldComponent field={field} />
              <button
                type="button"
                className="delete"
                onClick={() => handleRemoveField(index)}
              >
                Delete
              </button>
            </div>
          ))}
        </FormProvider>
        <button type="submit" className="primary">
          Submit
        </button>
      </form>
      {submissionMessage && (
        <p className={`notification success`}>{submissionMessage}</p>
      )}
    </div>
  );
};

export default FormBuilder;

import React from "react";
import { useFormContext } from "react-hook-form";

const FieldComponent = ({ field }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const renderField = () => {
    switch (field.type) {
      case "text":
      case "textarea":
        return (
          <input
            type={field.type}
            {...register(field.name, {
              required: field.validation?.required,
              ...field.validation,
            })}
            placeholder={field.label}
          />
        );
      case "dropdown":
        return (
          <select
            {...register(field.name, { required: field.validation?.required })}
          >
            {field.options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      case "checkbox":
        return (
          <input
            type="checkbox"
            {...register(field.name, { required: field.validation?.required })}
          />
        );
      case "radio":
        return field.options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              value={option.value}
              {...register(field.name, {
                required: field.validation?.required,
              })}
            />
            {option.label}
          </label>
        ));
      case "file":
        return (
          <input
            type="file"
            {...register(field.name, { required: field.validation?.required })}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="field-container">
      <label>{field.label}</label>
      {renderField()}
      {errors[field.name] && (
        <p style={{ color: "red" }}>{errors[field.name]?.message}</p>
      )}
    </div>
  );
};

export default FieldComponent;

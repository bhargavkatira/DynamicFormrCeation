import React from "react";

const FieldComponent = ({ field }) => {
  switch (field.type) {
    case "text":
    case "textarea":
      return (
        <div className="field">
          <label>{field.label}</label>
          {field.type === "text" && <input type="text" name={field.name} />}
          {field.type === "textarea" && <textarea name={field.name} />}
        </div>
      );

    case "dropdown":
      return (
        <div className="field">
          <label>{field.label}</label>
          <select name={field.name}>
            {field.options.map((opt, index) => (
              <option key={index} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      );

    case "checkbox":
      return (
        <div className="field">
          <label>{field.label}</label>
          {field.options.map((opt, index) => (
            <div key={index} className="checkbox-option">
              <input type="checkbox" name={field.name} value={opt.value} />
              <label>{opt.label}</label>
            </div>
          ))}
        </div>
      );

    case "radio":
      return (
        <div className="field">
          <label>{field.label}</label>
          {field.options.map((opt, index) => (
            <div key={index} className="radio-option">
              <input type="radio" name={field.name} value={opt.value} />
              <label>{opt.label}</label>
            </div>
          ))}
        </div>
      );

    case "file":
      return (
        <div className="field">
          <label>{field.label}</label>
          <input type="file" name={field.name} />
        </div>
      );

    default:
      return null;
  }
};

export default FieldComponent;

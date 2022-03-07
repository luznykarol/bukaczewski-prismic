import React from "react";

const InputField = (props) => {
  const {
    label,
    name,
    error,
    type,
    placeholder,
    required,
    onChange,
    errorMessage,
    register,
    value,
    className,
    errorLeft,
  } = props;

  const inputError = error && (
    <span
      className={
        errorLeft ? "field__error field__error--left" : "field__error"
      }>
      {errorMessage}
    </span>
  );
  return (
    <div className={className ? `field ${className}` : "field"}>
      <label className="field__label" htmlFor={name}>
        {label}
      </label>
      <input
        className={
          !error
            ? "field__input border-input "
            : "field__input field__input__error"
        }
        onChange={onChange}
        type={type}
        name={name}
        id={name}
        defaultValue={value}
        placeholder={placeholder}
        required={required}
      />
      {inputError}
    </div>
  );
};

export default InputField;

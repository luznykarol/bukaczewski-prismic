import React from "react";

export default function TextField(props) {
  const {
    label,
    name,
    error,
    required,
    onChange,
    errorMessage,
    register,
    className,
    placeholder,
  } = props;

  const inputError = error && (
    <span className="field__error">{errorMessage}</span>
  );

  return (
    <div className={className ? `field ${className}` : "field"}>
      <label className="field__label" htmlFor={name}>
        {label}
      </label>
      <textarea
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        id={name}
        ref={register}
        className={
          !error
            ? "field__textarea border-input"
            : "field__textarea field__textarea__error"
        }
        required={required}
      />
      {inputError}
    </div>
  );
}

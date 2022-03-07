import React, { useState, useRef } from "react";
import { graphql } from "gatsby";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { CSSTransition } from "react-transition-group";
import Icon from "./Icon";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import InputField from "./InputField";
import TextField from "./TextField";

const ContactForm = ({ title }) => {
  // const { register, handleSubmit, reset, errors } = useForm({
  //   mode: "onBlur",
  // });

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    // lastName: Yup.string().required("Last name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    // acceptTerms: Yup.bool().oneOf([true], "Accept Ts & Cs is required"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(formOptions, { mode: "onChange" });

  const [sent, setSent] = useState(false);
  const [isSending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formError, setFormError] = useState(true);

  const onSubmit = (data, e) => {
    e.preventDefault();

    if (!isSending) {
      setSending(true);
      emailjs
        .sendForm(
          "gmail",
          "template_74ncgko",
          e.target,
          "user_UOTM2GzZ3z02MYUVNGngq"
        )
        .then(
          (res) => {
            setSending(false);
            setSent(!sent);
            setSuccess(!success);
            reset();
            setTimeout(() => {
              setSuccess(false);
            }, 3000);
          },
          (error) => {
            setSending(false);
            setFormError(true);
          }
        );
    }
  };

  const handleClick = () => {
    setSent(!sent);
  };

  // const firstName = register("firstName", { minLength: 4 });
  const firstName = register("firstName");
  // const email = register("email", {
  //   pattern: {
  //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  //     message: "aaaaa",
  //   },
  // });
  const email = register("email");

  // const emailValidation = {
  //   ...register("email", {
  //     required: true,
  //     pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  //   }),
  // };

  // const phoneValidation = {
  //   ...register("phone", {
  //     required: true,
  //     pattern: /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
  //   }),
  // };

  return (
    <form
      id="form_1"
      className="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      method="POST">
      <InputField
        inputRef={firstName.ref}
        type="text"
        placeholder="Imię"
        error={errors.firstName}
        errorMessage={
          (errors.firstName &&
            errors.firstName.type === "required" &&
            "Pole wymagane") ||
          (errors.firstName &&
            errors.firstName.type === "minLength" &&
            "Wpisane imię jest za krótkie")
        }
      />
      {/* <InputField
        type="text"
        // name="lastName"
        placeholder="Nazwisko"
        id="lastName"
        className="mt-6 rounded-lg"
        // requiredOnly
        // {...register("lastName", {
        //   required: "Required",
        // })}
        error={errors.lastName}
        errorMessage={
          (errors.lastName &&
            errors.lastName.type === "required" &&
            "Pole wymagane") ||
          (errors.lastName &&
            errors.lastName.type === "minLength" &&
            "Wpisane imię jest za krótkie")
        }
      /> */}
      <InputField
        type="email"
        name="email"
        inputRef={email.ref}
        id="email"
        // name="email"
        placeholder="Email"
        className="mt-6"
        // register={emailValidation}
        // {...register("email", {
        //   required: "Required",
        // })}
        error={errors.email}
        errorMessage={
          (errors.email &&
            errors.email.type === "required" &&
            "Pole wymagane") ||
          (errors.email &&
            errors.email.type === "minLength" &&
            "Wpisane imię jest za krótkie")
        }
        // errorMessage="Proszę wpisać poprawny adres email"
      />
      <TextField
        id="message"
        name="message"
        placeholder="Wiadomość"
        className="mt-6"
        // register={emailValidation}
        // {...register("message", {
        //   required: "Required",
        // })}
        error={errors.message}
        errorMessage="Proszę wpisać treść wiadomości"
      />

      <CSSTransition
        in={success}
        timeout={400}
        classNames="contact-slide"
        unmountOnExit>
        <div className="rounded-lg mt-8 contact-badge flex justify-between items-center bg-white  border border-green border-1">
          <div className="p-4 border-r-1 border border-green">
            {/* <Icon icon="check" /> */}
          </div>
          <p className="p-4 text-green font-bold ">
            Dzięki za zgłoszenie, odezwiemy się jak najszybciej!
          </p>
        </div>
      </CSSTransition>
      <button
        className="button button--black"
        type="submit"
        disabled={isSending}>
        {!isSending ? "Wyślij" : "Wysyłam wiadomość..."}
      </button>
    </form>
  );
};
export default ContactForm;

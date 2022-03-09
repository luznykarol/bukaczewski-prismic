// import React, { useState, useRef } from "react";
// import { graphql } from "gatsby";
// import { useForm } from "react-hook-form";
// import emailjs from "@emailjs/browser";
// import { CSSTransition } from "react-transition-group";
// import Icon from "./Icon";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";

// import InputField from "./InputField";
// import TextField from "./TextField";

// const ContactForm = ({ title }) => {
//   const [sent, setSent] = useState(false);
//   const [isSending, setSending] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [formError, setFormError] = useState(true);

//   const [values, setValues] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const inputs = [
//     {
//       id: 1,
//       name: "name",
//       type: "text",
//       placeholder: "Imię",
//       errorMessage: "Wpisane imię jest za krótkie ",
//       label: "Imię",
//       pattern: "^[A-Za-z0-9]{2,32}$",
//       required: true,
//     },
//     {
//       id: 2,
//       name: "email",
//       type: "email",
//       placeholder: "Email",
//       errorMessage: "Proszę wpisać poprawny adres email",
//       label: "Email",
//       required: true,
//     },
//   ];
//   const text = [
//     {
//       name: "message",

//       placeholder: "Wiadomość",
//       errorMessage:
//         "Username should be 2-16 characters and shouldn't include any special character!",
//       required: true,
//     },
//   ];

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!isSending) {
//       setSending(true);
//       emailjs
//         .sendForm(
//           "gmail",
//           "template_74ncgko",
//           e.target,
//           "user_UOTM2GzZ3z02MYUVNGngq"
//         )
//         .then(
//           (res) => {
//             setSending(false);
//             setSent(!sent);
//             setSuccess(!success);

//             // reset();
//             setTimeout(() => {
//               setSuccess(false);
//             }, 3000);
//           },
//           (error) => {
//             console.log(error);
//             setSending(false);
//             setFormError(true);
//           }
//         );
//     }
//   };

//   const onChange = (e) => {
//     setValues({ ...values, [e.target.name]: e.target.value });
//   };

//   return (
//     <form id="form_1" className="form" onSubmit={handleSubmit}>
//       {inputs.map((input) => (
//         <InputField
//           key={input.id}
//           {...input}
//           value={values[input.name]}
//           onChange={onChange}
//         />
//       ))}
//       {text.map((input) => (
//         <TextField
//           key={input.id}
//           {...input}
//           value={values[input.name]}
//           onChange={onChange}
//         />
//       ))}

//       <CSSTransition
//         in={success}
//         timeout={400}
//         classNames="contact-slide"
//         unmountOnExit>
//         <div className="rounded-lg mt-8 contact-badge flex justify-between items-center bg-white  border border-green border-1">
//           <p className="success">
//             Dziękujemy za wiadomość. Proszę oczekiwać odpowiedzi w przeciągu 5
//             dni roboczych.
//           </p>
//         </div>
//       </CSSTransition>
//       <button
//         className="button button--black"
//         type="submit"
//         disabled={isSending}>
//         {!isSending ? "Wyślij" : "Wysyłam wiadomość..."}
//       </button>
//     </form>
//   );
// };
// export default ContactForm;

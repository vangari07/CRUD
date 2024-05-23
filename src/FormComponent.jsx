import { useState } from "react";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [validationError, setValidationError] = useState({
    errName: "",
    errEmail: "",
    errPassword: "",
  });

  const validateFields = (fields) => {
    const newValidationError = { ...validationError };

    if (fields.name === "") {
      newValidationError.errName = "Name is required";
    } else if (fields.name.length < 3) {
      newValidationError.errName = "Name should be at least 3 characters long";
    } else {
      newValidationError.errName = "";
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(fields.email)) {
      newValidationError.errEmail =
        "Email is required and should be a valid email address";
    } else {
      newValidationError.errEmail = "";
    }

    if (!/(?=.*[a-z])(?=.*[A-Z])/.test(fields.password)) {
      newValidationError.errPassword =
        "Password should contain at least one uppercase, one lowercase letter";
    } else if (fields.password.length < 8) {
      newValidationError.errPassword =
        "Password should be at least 8 characters long";
    } else {
      newValidationError.errPassword = "";
    }

    setValidationError(newValidationError);
    return newValidationError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateFields(formData);

    if (!errors.errName && !errors.errEmail && !errors.errPassword) {
      console.log("formData", formData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      const newFormData = { ...prevData, [name]: value };
      validateFields(newFormData);
      return newFormData;
    });
  };

  return (
    <form
      noValidate
      className="w-1/2 m-auto border-2 border-black rounded-lg mb-4 p-8 flex flex-col"
      onSubmit={handleSubmit}
    >
      <h1 className="mb-4 text-center font-bold text-2xl mt-[-10px] text-cyan-600">
        User Details
      </h1>
      <div className="flex flex-col mb-5">
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          className="border-2 border-slate-500 pl-2 rounded"
          value={formData.name}
          onChange={handleChange}
        />
        {validationError.errName && (
          <span className="text-red-700">{validationError.errName}</span>
        )}
      </div>
      <div className="flex flex-col mb-5">
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          className="border-2 border-slate-500 pl-2 rounded"
          value={formData.email}
          onChange={handleChange}
        />
        {validationError.errEmail && (
          <span className="text-red-700">{validationError.errEmail}</span>
        )}
      </div>
      <div className="flex flex-col mb-5">
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          className="border-2 border-slate-500 pl-2 rounded"
          value={formData.password}
          onChange={handleChange}
        />
        {validationError.errPassword && (
          <span className="text-red-700">{validationError.errPassword}</span>
        )}
      </div>
      <button type="submit" className="border-2 border-yellow-500 w-1/4 m-auto">
        Submit
      </button>
    </form>
  );
};

export default FormComponent;

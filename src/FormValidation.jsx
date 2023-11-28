import React, {useState} from "react";
import './App.css'

const FormValidation = () => {

  const [formData, setFormData] = useState ({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData ({
      ...formData, [name] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErorrs = {}
    if (!formData.username.trim()){
      validationErorrs.username = "Username is required"
    }

    if (!formData.email.trim()){
      validationErorrs.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        validationErorrs.email = "Email is not valid"
    }

    if (!formData.password.trim()){
      validationErorrs.password = "Password is required"
    } else if (formData.password.length < 6) {
        validationErorrs.password = "Password should be at least 6 char"
    }

    if (formData.confirmPassword  !== formData.password){
      validationErorrs.confirmPassword = "Password Not Matched"
    }
    setErrors(validationErorrs)

    if(Object.keys(validationErorrs).length === 0) {
      alert("Form Submitted Successfully")
    }
  }

  return (
    <form onSubmit = {handleSubmit}>
      <div>
        <label>Username: </label>
        <input 
          type = "text"
          name = "username"
          placeholder="username"
          autoComplete="off"
          onChange={handleChange}
        />
        {errors.username && <span>{errors.username}</span>}
      </div>
      <div>
        <label>Email: </label>
        <input 
          type = "email"
          name = "email"
          placeholder="example@gmail.com"
          autoComplete="off"
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Password: </label>
        <input 
          type = "password"
          name = "password"
          placeholder="******"
          onChange={handleChange}
        />
        {errors.password && <span>{errors.password}</span>}
      </div>
      <div>
        <label>Confirm Password: </label>
        <input 
          type = "password"
          name = "confirmPassword"
          placeholder="******"
          onChange={handleChange}
        />
        {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormValidation;
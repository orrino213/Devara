import { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    passwordConfirm: "",
  });

  const onFormFieldChange = (e) => {
    console.log("onChange", { syntheticEvent: e });
    const target = e.target;
    const newUserValue = target.value;
    const nameOfField = target.name;
    console.log({ nameOfField, newUserValue });
    setFormData((prevState) => {
      console.log("update onChange");
      const newUserObject = {
        ...prevState,
      };
      newUserObject[nameOfField] = newUserValue;
      return newUserObject;
    });
    console.log("end onChange");
  };
  return (
    <main>
      <h1>Register</h1>
    </main>
  );
}

export default Register;

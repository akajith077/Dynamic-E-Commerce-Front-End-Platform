import React, { useState } from "react";
import { Paper, TextField, Typography, Button } from "@mui/material";
import { useForm } from "react-hook-form";

// these 2 are for creating schemas for error handling(blank field handling)
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

let renderCount = 0;

let schema = Yup.object().shape({
  name: Yup.string()
    .required("Name is Required")
    .matches(/^[A-Z][a-z]{1,}(\s[A-Z][a-z]{1,})+$/, "Enter Your Fullname"),
  email: Yup.string()
    .email()
    .required("Email is Required")
    .matches(/^[a-z0-9]+@[a-z]{3,5}.[a-z]{2,4}$/, "Enter Your Fullname"),
  age: Yup.number()
    .positive()
    .required("enter your age")
    .min(18, "enter your age between 18 to 30")
    .max(30, "enter age between 18 to 30"),
  password: Yup.string().required("Password is required"),
  cPassword: Yup.string().oneOf([Yup.ref("password"),null], "password must match")
});

const SignUp = () => {
  let paperStyle = {
    width: 400,
    margin: "20px auto",
    padding: "20px",
    display: "grid",
    gap: "20px",
  };
  renderCount++;

  // let [input, setInput] = useState(""); // it returns an array

  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

  let handleData = (data) => {
    console.log(data);
  };

  return (
    <Paper
      elevation={20}
      style={paperStyle}
      component="form"
      onSubmit={handleSubmit(handleData)}
    >
      <Typography textAlign="center">
        Create Account - {renderCount}{" "}
      </Typography>
      <TextField
        label="Name"
        {...register("name")}
        error={!!errors.name} // this is for red alert
        helperText={errors.name?.message} // this is for required message
      />
      <TextField
        label="Email"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        label="Age"
        {...register("age")}
        error={!!errors.age}
        helperText={errors.age?.message}
      />
      <TextField
        label="Password"
        {...register("password")}
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <TextField
        label="Confirm Password"
        {...register("cPassword")}
        error={!!errors.cPassword}
        helperText={errors.cPassword?.message}
      />
      <Button variant="contained" type="submit">
        SignUp
      </Button>
    </Paper>
  );
};

export default SignUp;

import React from 'react'
import "./LoginForm.css";
import { useForm } from "react-hook-form";


export const LoginForm = () => {
  
const { register, handleSubmit } = useForm();
const onSubmit = data => console.log(data);

  return (
    <div className='login-container'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
      <input {...register("userName")} />
      <label>Senha</label>
      <input {...register("password")} />
      <input type="submit" />
      </form>
    </div>
  )
}

"use client"

import { FormEvent, useState } from "react";
import { $api } from "../http/axios";

const Home = () => {
  const [loginData, setLoginData] = useState({email: '', password: ''})

  const emailInputHandler = (email: string, password: string) => {
    setLoginData({email, password })
  }

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const { data } = await $api.post('/api/registration', loginData)
      console.log(data)
    } catch (e) {
      console.log(e)
    }

  }

  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <input onChange={(e) => emailInputHandler(e.currentTarget.value, loginData.password)} type='text'/>
      <input onChange={(e) => emailInputHandler(loginData.email, e.currentTarget.value)} type='password'/>
      <button type='submit'>submit</button>
    </form>
    )
}

export default Home

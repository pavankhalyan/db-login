import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
const[email,setEmail] = useState()
const[password,setPassword] = useState()
const Navigate = useNavigate()

const handleSubmit =(e) => {
  e.preventDefault()
  axios.post('http://localhost:3001/login',{email,password})
  .then(result=> {console.log(result)
    if(result.data==="success"){
       Navigate('/home')
    }
  })
  .catch(err => console.log(err))
}

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100"> 
    <div className="bg-white p-3 rounded w-25">
      <h2>login</h2>
      <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>email</strong>
            </label>
            <input type="email" placeholder="enter your email" autoComplete="off" className="form-control rounded-0" 
            onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>password</strong>
              </label>
            <input type="password" placeholder="enter password" name="password" className="form-control rounded-0"
             onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-sucess w-100 rounded-0">
            login
          </button>
      </form>
          <p>already have an account</p>
          <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
            Signup
          </Link>
    </div>
    </div>
  )
}

export default Login;
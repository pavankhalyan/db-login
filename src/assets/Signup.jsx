import { useState } from "react"
import { Link } from "react-router-dom" 
import axios from "axios" 
import { useNavigate } from "react-router-dom"

const Signup = () => {
     const[name, setName] = useState()
     const[email,setEmail] = useState()
     const[password,setPassword]= useState()
     const Navigate = useNavigate()

    const handleSubmit =(e) => {
      e.preventDefault()
      axios.post('http://localhost:3001/register', {name,email,password})
      .then(result => {console.log(result)
        Navigate('/login')
      })
      .catch(err => console.log(err))
    }

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100"> 
    <div className="bg-white p-3 rounded w-25">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email">
            <strong>Name</strong>
          </label>
          <input type="text" placeholder=" enter your name" autoComplete="off" className="form-control rounded-0 "
          onChange={(e) => setName(e.target.value)}/>
        </div>
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
            Register
          </button>
      </form>
          <p>already have an account</p>
          <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
            login
          </Link>
    </div>
    </div>
  )
}

export default Signup
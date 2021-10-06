import React,{useState } from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

function Register() {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const history = useHistory()

  const handleOnSubmit = (e) => {
    e.preventDefault()
    if(confirmPassword !== password) {
      alert('Please check your Confirm password..')
      return
    }
    axios.post('http://localhost:8080/register', {username, email, password})
    .then( ()=> {
      console.log('Register successful..')
      history.push('/login')
    })
  };

  // const handleOnChange = (e) => {};
  
  return (
    <div className="row">
      <form
        className="my-4 col-8 offset-2 border rounded p-5"
        onSubmit={(e) => handleOnSubmit(e)}
        autoComplete="off"
      >
        <p className="display-4 mb-5">Register</p>
        <div className="form-group row mb-3">
          <label className="col-sm-3 col-form-label">Username</label>
          <div className="col-sm-9">
            <input
              type="text"
              name="username"
              className="form-control form-control-lg"
              value={username}
              onChange={e=>setUsername(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group row mb-3">
          <label className="col-sm-3 col-form-label">E-Mail</label>
          <div className="col-sm-9">
            <input
              type="text"
              name="email"
              className="form-control form-control-lg"
              value={email}
              onChange={e=>setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group row mb-3">
          <label className="col-sm-3 col-form-label">Password</label>
          <div className="col-sm-9">
            <input
              type="password"
              name="password"
              className="form-control form-control-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group row mb-3">
          <label className="col-sm-3 col-form-label">Confirm Password</label>
          <div className="col-sm-9">
            <input
              type="password"
              name="confirmPassword"
              className="form-control form-control-lg"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="d-flex justify-content-end mt-4">
          <button type="submit" className="btn btn-primary btn-lg">
            Register
          </button>
          <button
            type="reset"
            className="btn btn-outline-secondary btn-lg ms-3"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register

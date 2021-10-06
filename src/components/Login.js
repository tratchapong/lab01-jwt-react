import {useState} from "react";

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleOnSubmit = (e) => {};

  return (
    <div className="row">
      <form
        className="my-4 col-8 offset-2 border rounded p-5"
        onSubmit={(e) => handleOnSubmit(e)}
      >
        <p className="display-4 mb-5">Login</p>
        <div className="form-group row mb-3">
          <label className="col-sm-2 col-form-label">Username</label>
          <div className="col-sm-10">
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
          <label className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input
              type="password"
              name="password"
              className="form-control form-control-lg"
              value={password}
              onChange={e=>setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="d-flex justify-content-end mt-4">
          <button type="submit" className="btn btn-primary btn-lg">
            Login
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

export default Login;

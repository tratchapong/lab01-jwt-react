import React from 'react'

function Register() {
  const handleOnSubmit = (e) => {};

  const handleOnChange = (e) => {};
  return (
    <div className="row">
      <form
        className="my-4 col-8 offset-2 border rounded p-5"
        onSubmit={(e) => handleOnSubmit(e)}
      >
        <p className="display-4 mb-5">Register</p>
        <div className="form-group row mb-3">
          <label className="col-sm-2 col-form-label">Username</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="username"
              className="form-control form-control-lg"
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="form-group row mb-3">
          <label className="col-sm-2 col-form-label">E-Mail</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="email"
              className="form-control form-control-lg"
              onChange={handleOnChange}
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
              onChange={(e) => handleOnChange(e)}
            />
          </div>
        </div>
        <div className="form-group row mb-3">
          <label className="col-sm-2 col-form-label">Confirm Password</label>
          <div className="col-sm-10">
            <input
              type="password"
              name="confirmPassword"
              className="form-control form-control-lg"
              onChange={(e) => handleOnChange(e)}
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

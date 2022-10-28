import React, { Component } from 'react';

export class UserForm extends Component {
  state = {
    Name: '',
    Email: '',
    Password: '',
    Gender:'',
  };
  nameChangeHandler = (event) => {
    this.setState({
      Name: event.target.value,
    });
  };
  emailChangeHandler = (event) => {
    this.setState({
      Email: event.target.value,
    });
  };
  passwordChangeHandler = (event) => {
    this.setState({
      Password: event.target.value,
    });
  };
  saveStudent = (event) => {
    event.preventDefault();
    let student = {
      Name: this.state.Name,
      Email: this.state.Email,
      Password: this.state.Password,
      Gender: this.state.Gender,
    };
    console.log(JSON.stringify(student));
  };
  genderHandler = (event) =>{
    this.setState({
      Gender:event.target.value,
    })
  }
  reset = () => {
    this.setState({
      Name: '',
      Email: '',
      Password: '',
      Gender:'',
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <h1 className="text-center">Student Registration Form</h1>
          <div className="row">
            <br />
            <div className="col-md-6 offset-md-3 offset-md-3">
              <br />
              <div className="card text-bg-light mb-3 border-dark mb-3">
                <div className="card-body text-dark">
                  <form>
                    <div className="form-group">
                      <label>Name:</label>
                      <input
                        type="text"
                        placeholder="Name"
                        className="form-control"
                        value={this.state.Name}
                        onChange={this.nameChangeHandler}
                      />
                    </div>
                    <div className="form-group">
                      <label>Email:</label>
                      <input
                        type="text"
                        placeholder="Email"
                        className="form-control"
                        value={this.state.Email}
                        onChange={this.emailChangeHandler}
                      />
                    </div>
                    <div className="form-group">
                      <label>Password:</label>
                      <input
                        type="password"
                        placeholder="Password"
                        className="form-control"
                        value={this.state.Password}
                        onChange={this.passwordChangeHandler}
                      />
                    </div>
                    <div className="form-group">
                      <label>Gender:</label>
                      <div className="col-sm-10">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gridRadios"
                            id="gridRadios1"
                            value="Male"
                            onChange={this.genderHandler}
                          />
                          <label className="form-check-label" htmlFor="gridRadios1">
                            Male
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gridRadios"
                            id="gridRadios2"
                            value="Female"
                            onChange={this.genderHandler}
                          />
                          <label className="form-check-label" htmlFor="gridRadios2">
                            Female
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gridRadios"
                            id="gridRadios3"
                            value="Others"
                            onChange={this.genderHandler}
                          />
                          <label className="form-check-label" htmlFor="gridRadios3">
                            Others
                          </label>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-success"
                      onClick={this.saveStudent}
                    >
                      Submit
                    </button>
                    <button
                      type="reset"
                      className="btn btn-danger ml-5"
                      onClick={this.reset}
                    >
                      Reset
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserForm;

import React, { Component } from 'react';

class AddUser extends Component {
    state = { 
        name: null,
        age: null,
        job: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state);
    }

    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input className="form-control mb-2" type="text" id="name" onChange={this.handleChange} />
                <label htmlFor="name">Age:</label>
                <input className="form-control mb-2" type="text" id="age" onChange={this.handleChange} />
                <label htmlFor="job">Job:</label>
                <input className="form-control mb-2" type="text" id="job" onChange={this.handleChange} />
                <button className="btn btn-secondary mt-2 mb-3">Add User</button>
            </form>
         );
    }
}
 
export default AddUser;
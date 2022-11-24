import React, { Component } from 'react'

export default class Apr extends Component {
    state = {
        name: "",
        email: "",
        password: "aasff",
        ischecked:false
    }
    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
     handleCheckboxChange=(e)=>{
        this.setState({ ischecked:!this.state.ischecked});
     }

    render() {
        return (
            <div className="App">
                <label htmlFor="">Name</label>
                <input value={this.state.name} type="text" id="name" name="name" onChange={this.handleInput} />
                <button onClick={() => this.setState({ name: "" })}>x</button>
                <label htmlFor="">Email</label>
                <input value={this.state.email} type="text" id="email" name="email" onChange={this.handleInput} />
                <button onClick={() => this.setState({ email: "" })}>x</button>
                <label htmlFor="">Password</label>
                <input value={this.state.password} type={this.state.ischecked?"text":"password"} id="password" name="password" onChange={this.handleInput} />
                <button onClick={() => this.setState({ password: "" })}>x</button>
                <label>Show password
                    <input
                        type="checkbox" checked={this.state.ischecked} onChange={this.handleCheckboxChange} />

                </label>



            </div>
        )
    }
}





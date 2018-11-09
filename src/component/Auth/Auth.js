import React, { Component } from 'react';
import axios from 'axios';

class Auth extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        }
    }

    handleUserInput(val) {
        this.setState({ username: val })
    }

    handlePassInput(val) {
        this.setState({ password: val })
    }

    createUser(){
        let newUser = {
            username: this.state.username,
            password: this.state.password
        }
        axios.post('/auth/register', newUser).then(users => console.log(users) || (this.setState({users: users.data})));

        this.props.history.push('/dashboard');
    }

    login(){
        let user = {
            username: this.state.username,
            password: this.state.password
        }

        axios.post('/auth/login', user).then(users => console.log(users) || (this.setState({users: users.data})));

        this.props.history.push('/dashboard');
    }
    render() {
        return (
            <div style={{height: '100vh', width: '80vw', display:'flex', justifyContent: 'center', alignContent: 'center'}} >

                <div className='login' style={{ 
                        width: '200px',
                        height: '300px',
                        alignContent: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                }}>

                <h2>Auth</h2>
                <h4>Username</h4>
                <input onChange={(e) => this.handleUserInput(e.target.value)} type="text" />
                <h4>Password</h4>
                <input onChange={(e) => this.handlePassInput(e.target.value)} type="text" />
                <button onClick={()=> this.createUser()}>Register</button>
                <button onClick={()=> this.login()}>Login</button>
            </div>

            </div >
        )
    }

}

export default Auth;
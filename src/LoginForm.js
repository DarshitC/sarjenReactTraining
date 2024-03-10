import React from 'react';

class LoginForm extends React.Component {
    state = {
        email: '',
        password: '',
        currentUser: null,
        loginFailed: false,
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            this.setState({ currentUser: user, loginFailed: false });
            alert('Login Successful!');
        } else {
            this.setState({ loginFailed: true });
            alert('Login Failed! Please Check Your Credentials.');
        }
    };

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        const { email, password, currentUser, loginFailed } = this.state;

        return (
            <>
            <h1>Login Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="email" name="email" value={email} onChange={this.handleInputChange} placeholder="Email" required /><br />
                    <input type="password" name="password" value={password} onChange={this.handleInputChange} placeholder="Password" required /><br />
                    <button type="submit">Login</button>
                </form>
                {currentUser ? (
                    <div>Welcome, {currentUser.name}!</div>
                ) : loginFailed ? (
                    <div>Login Failed. Please try again.</div>
                ) : null}
            </>
        );
    }
}

export default LoginForm;
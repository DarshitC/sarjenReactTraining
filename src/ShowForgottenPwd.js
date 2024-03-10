import React from 'react';

class ShowForgottenPwd extends React.Component {
    state = {
        userInput: '',
        password: ''
    };

    handleChange = (e) => {
        this.setState({
            userInput: e.target.value
        });
    };

    handleCheckPassword = (e) => {
        e.preventDefault();
        const { userInput } = this.state;
        const users = JSON.parse(localStorage.getItem('users')) || [];

        const foundUser = users.find(user => user.email === userInput || user.mobile === userInput);

        if (foundUser) {
            this.setState({
                password: foundUser.password
            });
        } else {
            this.setState({
                password: 'Password Not Found For The Provided Email or Mobile Number.'
            });
        }
    };

    render() {
        const { userInput, password } = this.state;

        return (
        <>
        <h1>Show Forgotten Password Form</h1>
            <form onSubmit={this.handleCheckPassword}>
                <input type="text" value={userInput} onChange={this.handleChange} placeholder="Enter Email or Mobile Number" required /><br />
                <button type="submit">Check Password</button>
                <div>
                    <p>{password}</p>
                </div>
            </form>
            </>
        );
    }
}

export default ShowForgottenPwd;
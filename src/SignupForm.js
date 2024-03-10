import React from 'react';

class SignupForm extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, mobile } = e.target.elements;
        
        const newUser = {
            id: Date.now(),
            name: name.value,
            email: email.value,
            password: password.value,
            mobile: mobile.value,
        };

        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        alert('Data Added Successfull!');
    };
    render() {
        
        return (
            <>
            <h1>Signup Form</h1>
                { (
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="name" placeholder="Name" required /><br />
                        <input type="email" name="email" placeholder="Email" required /><br />
                        <input type="password" name="password" placeholder="Password" required /><br />
                        <input type="tel" name="mobile" placeholder="Mobile Number" required /><br />
                        <button type="submit">Sign Up</button>
                    </form>
                )}
            </>
        );
    }
}

export default SignupForm;
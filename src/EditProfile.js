import React from 'react';

class EditProfile extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        mobile: ''
    };

    componentDidMount() {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.length > 0) {
            const currentUser = users[users.length - 1];
            this.setState({
                name: currentUser.name,
                email: currentUser.email,
                password: currentUser.password,
                mobile: currentUser.mobile
            });
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, mobile } = this.state;
        const updatedUser = { name, email, password, mobile };

        let users = JSON.parse(localStorage.getItem('users')) || [];
        users[users.length - 1] = updatedUser;

        localStorage.setItem('users', JSON.stringify(users));
        alert('Data Updated Successfully!');
    };

    render() {
        const { name, email, password, mobile } = this.state;
        
        return (
        <>
            <h1>Edit Profile Form</h1>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" value={name} onChange={this.handleChange} placeholder="Name" required /><br />
                <input type="email" name="email" value={email} onChange={this.handleChange} placeholder="Email" required /><br />
                <input type="password" name="password" value={password} onChange={this.handleChange} placeholder="Password" required /><br />
                <input type="tel" name="mobile" value={mobile} onChange={this.handleChange} placeholder="Mobile Number" required /><br />
                <button type="submit">Update Profile</button>
            </form>
            </>
        );
    }
}

export default EditProfile;
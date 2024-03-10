import React from 'react';

class ChangePwd extends React.Component {
    state = {
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
        message: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        
        const { oldPassword, newPassword, confirmPassword } = this.state;
        
        const storedPassword = localStorage.getItem('password');
        
        if (oldPassword !== storedPassword) {
            this.setState({ message: 'Old password does not match.' });
            return;
        }
        
        if (newPassword !== confirmPassword) {
            this.setState({ message: 'New password and confirm password do not match.' });
            return;
        }
        
        localStorage.setItem('password', newPassword);
        
        this.setState({
            oldPassword: '',
            newPassword: '',
            confirmPassword: '',
            message: 'Password changed successfully!'
        });
    };

    render() {
        const { oldPassword, newPassword, confirmPassword, message } = this.state;

        return (
            <>
            <h1>Change Password Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="password" name="oldPassword" value={oldPassword} onChange={this.handleChange} placeholder="Old Password" required /><br />
                    <input type="password" name="newPassword" value={newPassword} onChange={this.handleChange} placeholder="New Password" required /><br />
                    <input type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} placeholder="Confirm Password" required /><br />
                    <button type="submit">Change Password</button>
                </form>
                {message && <p>{message}</p>}
            </>
        );
    }
}

export default ChangePwd;
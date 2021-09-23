import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            password2: '',
            first_name: '',
            last_name: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    } 

    componentDidMount() {
        this.props.clearErrors();
    }
    
    componentDidUpdate() {
        if (this.props.loggedIn) {
            this.props.history.push('/home');
            this.props.closeModal();
        }
    }


    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            username: this.state.username,
            password: this.state.password,
            password2: this.state.password2,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
        };

        this.props.signup(user).then(() => this.props.login(user));
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.props.errors).map((error, i) => (
                    <li className="session-errors" key={`error-${i}`}>
                        {this.props.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="signup-form-container">
                <form onSubmit={this.handleSubmit}>
                    <span onClick={this.props.closeModal} className="close-x">X</span>

                    <div className="signup-form">
                        <br />
                        <input type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            placeholder="Username"
                        />
                        <br />
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                        />
                        <br />
                        <input type="password"
                            value={this.state.password2}
                            onChange={this.update('password2')}
                            placeholder="Confirm Password"
                        />
                        <br />
                        <input type="text"
                            value={this.state.first_name}
                            onChange={this.update('first_name')}
                            placeholder="First Name"
                        />
                        <br />
                        <input type="text"
                            value={this.state.last_name}
                            onChange={this.update('last_name')}
                            placeholder="Last Name"
                        />
                        <br />
                        <input type="submit" value="Submit" />
                        {this.renderErrors()}
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SignupForm);
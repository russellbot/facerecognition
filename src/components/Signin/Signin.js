import React from 'react';
import './Signin.css';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }

    saveAuthTokenInSession = (token) => {
        window.sessionStorage.setItem('token', token);
    }

    onSubmitSignIn = (demo) => {
        fetch('https://protected-bayou-29814.herokuapp.com/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: (demo === 'demo') ? 'demo@gmail.com' : this.state.signInEmail,
                password: (demo === 'demo') ? 'demo' : this.state.signInPassword
            })
        })
            .then(response => response.json())
            .then(data => {
                if(data.userId && data.success === 'true') {
                    this.saveAuthTokenInSession(data.token)
                        fetch(`https://protected-bayou-29814.herokuapp.com/profile/${data.userId}`, {
                          method: 'get',
                          headers: {
                            'Content-Type': 'application/json',
                            'Authorization': data.token
                          }
                        })
                        .then(resp => resp.json())
                        .then(user => {
                        if(user && user.email) {
                            this.props.loadUser(user);
                            this.props.onRouteChange('home');
                            }
                        })
                    .catch(console.log) 
                }
            })
    }

    render() {
        const { onRouteChange } = this.props;
        return (
            <article className="br3 ba white b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input 
                                    className="pa2 input-reset ba b--white bg-transparent hover-bg-black hover-white w-100 hover-black white" 
                                    type="email" 
                                    name="email-address"  
                                    id="email-address" 
                                    onChange={this.onEmailChange}
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input 
                                    className="b pa2 input-reset ba b--white bg-transparent hover-bg-black hover-white w-100 hover-black white" 
                                    type="password" 
                                    name="password"  
                                    id="password" 
                                    onChange={this.onPasswordChange} 
                                />
                            </div>
                        </fieldset>
                        <div className="">
                            <input 
                                onClick={this.onSubmitSignIn}
                                className="b ph3 pv2 input-reset ba b--white white bg-transparent grow pointer f6 dib" 
                                type="submit" 
                                value="Sign in" 
                            />
                        </div>
                        <div className="lh-copy mt3">
                            <p onClick={() => onRouteChange('register')} href="#0" className="b ph3 pv2 input-reset ba b--white white bg-transparent grow pointer f6 dib mr1">Register</p>
                            <p onClick={() => this.onSubmitSignIn('demo')} href="#0" className="b ph3 pv2 input-reset ba b--white white bg-transparent grow pointer f6 dib ml1">Demo</p>
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default Signin;
import React, { Fragment } from 'react'

export const Login = () => {
    return (
            <Fragment>
                <div className='body'>
                    <div className="login-box">
                        <img src='https://www.imbanaco.com/wp-content/themes/imbanaco/assets/img/favicon-01.svg' className="avatar" alt="Logo"/>
                        <h1>Login Here</h1>
                        <form>
                            {/* USERNAME INPUT */}
                            <label for="username">Username</label>
                            <input type="text" placeholder="Enter Username" />
                            {/* PASSWORD INPUT */}
                            <label for="password">Password</label>
                            <input type="password" placeholder="Enter Password" />
                            <input type="submit" value="Log In" />
                            <a href="/">Lost your Password?</a><br/>
                            <a href="/">Don't have An account?</a>
                        </form>
                    </div>
                </div>
            </Fragment>
    )
}
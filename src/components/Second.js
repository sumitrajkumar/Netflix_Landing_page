import React from 'react'
import './Second.css';
function Second() {
    return (
        <>
            <div className='new_box'>
                <img src="netflix_logo4.png" className='photo' />
                <div className="main_content">
                    <div className="inside_content">
                        <h2 class="sign_in">Sign In</h2>
                        <input type="text" placeholder='Email or phone number' className='input_content' />
                        <input type="password" placeholder='Password' className='input_content' />
                        <button class="button_sign_in">Sign In</button><br />
                        <div class="test">
                        <input type="checkbox" />
                        <div class="checkbox">Remember me</div>
                        <div class="help">Need help?</div>
                        </div>
                        <span class="new">New to Netflix?</span>
                        <span class="sign_up"> Sign up now</span>
                        <p class="last">This page is protected by Google reCAPTCHA to<br/>
                        ensure you're not a bot. 
                        <a href="https://www.youtube.com/watch?v=iWomYr2dlsM"  class="link"> Learn more.</a>
                        </p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Second

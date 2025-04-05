import './LoginSignup.css'
import { useState } from 'react'

function LoginSignup() {

    const [action, setAction] = useState('SignUp');
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>
                {action}
            </div>
        </div>

        <div className='inputs'>
            {action==='Login'?<div></div>:<div className='input'>
                <input type='text' placeholder='Name'>

                </input>
            </div>}
            
            <div className='input'>
                <input type='email' placeholder='Email'>
                    
                </input>
            </div>
            <div className='input'>
                <input type='password' placeholder='Password'>
                    
                </input>
            </div>

        </div>
        
        {action==='SignUp'?<div className='google-auth'><span>Authenticate via Google</span></div>:<div className='forgot-password'>Forgot Password? <span>Click Here</span></div>}
        

        <div className='submit-container'>
            <div className={`sign-up submit ${action === 'SignUp' ? 'active' : ''}`} onClick={() => setAction('SignUp')}>SignUp</div>
            <div className={`login submit ${action === 'Login' ? 'active' : ''}`} onClick={() => setAction('Login')}>Log In</div>

        </div>
    </div>
  );
}

export default LoginSignup;
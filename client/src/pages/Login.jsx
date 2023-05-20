import React from 'react'

const Login = () => {
  return (
    <div className='auth'>
      
     <h1> Login</h1>
     <form action="">
      <input type="text" placeholder='username' />
      <input type="password" placeholder='password' />
      <button> Log in</button>
      <p> This is an error!</p>
      <span> Don't have an account? Got to Register</span>
     </form>

    </div>
  )
}

export default Login
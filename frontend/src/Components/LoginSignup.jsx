import { useState } from 'react'

function LoginSignup() {
  const [action, setAction] = useState('Sign Up');
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8 border border-gray-100">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            {action === 'Sign Up' ? 'Create Account' : 'Welcome Back'}
          </h1>
          <p className="mt-2 text-gray-600">
            {action === 'Sign Up' ? 'Join our community today' : 'Sign in to your account'}
          </p>
        </div>

        <div className="space-y-5">
          {action === 'Sign Up' && (
            <div>
              <label htmlFor="name" className="text-sm font-medium text-gray-700 block mb-1 ">Name</label>
              <input 
                id="name"
                type="text" 
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
              />
            </div>
          )}
          
          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-700 block mb-1">Email Address</label>
            <input 
              id="email"
              type="email" 
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-700 block mb-1">Password</label>
            <input 
              id="password"
              type="password" 
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
            />
          </div>
        </div>
        
        {action === 'Sign Up' ? (
          <div className="mt-6">
            <button className="flex items-center justify-center w-full py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors font-medium">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.545 10.239v3.821h5.445c-0.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866 0.549 3.921 1.453l2.814-2.814c-1.871-1.742-4.373-2.815-7.035-2.815-5.747 0-10.404 4.657-10.404 10.404s4.657 10.404 10.404 10.404c8.106 0 9.886-7.766 9.073-12.361h-8.773z" fill="#dddddd"/>
              </svg>
              Continue with Google
            </button>
          </div>
        ) : (
          <div className="mt-4 text-sm text-center">
            <span className="text-gray-600">Forgot Password? </span>
            <span className="text-blue-600 cursor-pointer hover:underline font-medium">Reset it here</span>
          </div>
        )}
        
        <div className="mt-8">
          <button 
            className="w-full py-3 px-4 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-md"
          >
            {action === 'Sign Up' ? 'Create Account' : 'Sign In'}
          </button>
        </div>
        
        <div className="mt-6 text-center text-sm">
          {action === 'Sign Up' ? (
            <p className="text-gray-600">
              Already have an account?{' '}
              <span 
                className="text-blue-600 font-medium cursor-pointer hover:underline"
                onClick={() => setAction('Log In')}
              >
                Sign In
              </span>
            </p>
          ) : (
            <p className="text-gray-600">
              Don't have an account?{' '}
              <span 
                className="text-blue-600 font-medium cursor-pointer hover:underline"
                onClick={() => setAction('Sign Up')}
              >
                Create one
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
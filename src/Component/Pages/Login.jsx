import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useContext, useRef,useState } from 'react'
import Swal from 'sweetalert2'
import { AuthContext } from '../providers/AuthProvider'
import SocialLogin from './SocialLogin/SocialLogin'

const Login = () => {

  const { loading, setLoading, signIn,resetPassword } =
    useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  const emailRef = useRef()
  // Handle submit
  const handleSubmit = event => {
    event.preventDefault()
    const email = event.target.email.value
    const password = event.target.password.value
    signIn(email, password)
      .then(result => {
        console.log(result.user)
        navigate(from, { replace: true })
      })
      .catch(err => {
        setLoading(false)
        console.log(err.message)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })      })
  }

  // Handle google signin

  const handleReset = () => {
    const email = emailRef.current.value

    resetPassword(email)
      .then(() => {

        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Please check your email for reset link',
          showConfirmButton: false,
          timer: 1500
      });                navigate(from, { replace: true })
        setLoading(false)
      })
      .catch(err => {
        setLoading(false)
        console.log(err.message)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })        })
  }

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Log In</h1>
          <p className='text-sm text-gray-400'>
            Sign in to access your account
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
          <div className='flex justify-between'>
                <label htmlFor='email' className='text-sm mb-2'>
                  Email
                </label>
              </div>
              <input
                ref={emailRef}
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue-900 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password' 
                id='password'
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue-900 bg-gray-200 text-gray-900'
              />
                
            </div>
          </div>

          <div>
            <button
              className='bg-blue-900 w-full rounded-md py-3 text-white'
            >
             Submit
            </button>
          </div>
        </form>
        <div className='space-y-1'>
          <button
            onClick={handleReset}
            className='text-xs hover:underline hover:text-blue-900 text-gray-400'
          >
            Forgot password?
          </button>
        </div>
    
        <SocialLogin></SocialLogin>
        <p className='px-6 text-sm text-center text-gray-400'>
          Don't have an account yet?{' '}
          <Link
            to='/register'
            className='hover:underline hover:text-blue-950 text-gray-600'
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
import React from 'react';
import { useState } from 'react';
import { signUpUser } from '../redux/auth/SignUp';
import { useDispatch } from 'react-redux';

const Registration = () => {

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [username, setUser_name] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfo = {
      name: name,
      user_name:username,
      password:password,
      role:"",
      email: email,
      profile_picture: "profile not exist"
    };
    dispatch(signUpUser(userInfo));
  };

  return (
    <section className="relative bg-white overflow-hidden">
      <img className="absolute left-0 top-0" src="flaro-assets/images/sign-in/gradient.svg" alt="" />
      <div className="relative z-10 flex flex-wrap -m-8">
        <div className="w-full md:w-1/2 hidden md:block p-8 bg-no-repeat ">
        </div>
        <div className="w-full md:w-1/2 p-8">
          <div className="p-4 py-16 flex flex-col justify-center bg-blueGray-100 h-full">
            <form onSubmit={(e) => handleSubmit(e)} className="md:max-w-lg mx-auto">
            <label className="block mb-4">
                <p className="mb-2 text-gray-900 font-semibold leading-normal">Name *</p>
                <input onChange={(e) => setName(e.target.value)} value={name} className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300" id="signInInput1-1" type="text" placeholder="Enter Name" />
              </label>
              <label className="block mb-4">
                <p className="mb-2 text-gray-900 font-semibold leading-normal">Username *</p>
                <input onChange={(e) => setUser_name(e.target.value)} value={username} className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300" id="signInInput1-2" type="text" placeholder="Enter Username" />
              </label>
              <label className="block mb-4">
                <p className="mb-2 text-gray-900 font-semibold leading-normal">Email Address *</p>
                <input onChange={(e) => setEmail(e.target.value)} value={email} className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300" id="signInInput1-3" type="text" name="email" placeholder="Enter email address" />
              </label>
              <label className="block mb-4">
                <p className="mb-2 text-gray-900 font-semibold leading-normal">Password *</p>
                <input onChange={(e) => setPassword(e.target.value)} value={password} className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300" id="signInInput1-4" type="password" placeholder="Enter Password" />
              </label>
              <label className="block mb-4">
                <p className="mb-2 text-gray-900 font-semibold leading-normal">Confirm Password *</p>
                <input onChange={(e) => setPasswordConfirmation(e.target.value)} value={password_confirmation} className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300" id="signInInput1-5" type="password" placeholder="Confim Password" />
              </label>
              <button className="mb-9 py-4 px-9 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="submit">Sign Up</button>
              <p className="mb-5 text-sm text-gray-500 font-medium text-center">Or continue with</p>
              <div className="flex flex-wrap justify-center -m-2">
                <div className="w-auto p-2">
                  <button className="flex items-center p-4 bg-white hover:bg-gray-50 border rounded-lg transition ease-in-out duration-200">
                    <img className="mr-3" src="flaro-assets/logos/brands/google.svg" alt="" />
                    <span className="font-semibold leading-normal">Sign up with Google</span>
                  </button>
                </div>
                <div className="w-auto p-2">
                  <button className="flex items-center p-4 bg-white hover:bg-gray-50 border rounded-lg transition ease-in-out duration-200">
                    <img className="mr-3" src="flaro-assets/logos/brands/fb.svg" alt="" />
                    <span className="font-semibold leading-normal">Sign up with Facebook</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Registration;
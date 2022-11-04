const SessionAndRegistration = () => {
  return (
    <section class="relative bg-white overflow-hidden">
  <img class="absolute left-0 top-0" src="flaro-assets/images/sign-in/gradient.svg" alt="" />
  <div class="relative z-10 flex flex-wrap -m-8">
    <div class="w-full md:w-1/2 p-8">
      <div class="container px-4 mx-auto">
        <div class="flex flex-wrap">
          <div class="w-full">
            <div class="md:max-w-lg mx-auto pt-16 md:pb-32">
              <a class="mb-28 inline-block" href="#">
                <img src="flaro-assets/logos/flaro-logo-black-xl.svg" alt="" />
              </a>
              <h2 class="mb-32 text-6xl md:text-7xl font-bold font-heading tracking-px-n leading-tight">Sign in and start saving time today.</h2>
              <h3 class="mb-9 text-xl font-bold font-heading leading-normal">Why should you join us?</h3>
              <ul class="md:max-w-xs">
                <li class="mb-5 flex flex-wrap">
                  <svg class="mr-2" width="25" height="26" viewbox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 23C18.0228 23 22.5 18.5228 22.5 13C22.5 7.47715 18.0228 3 12.5 3C6.97715 3 2.5 7.47715 2.5 13C2.5 18.5228 6.97715 23 12.5 23ZM17.1339 11.3839C17.622 10.8957 17.622 10.1043 17.1339 9.61612C16.6457 9.12796 15.8543 9.12796 15.3661 9.61612L11.25 13.7322L9.63388 12.1161C9.14573 11.628 8.35427 11.628 7.86612 12.1161C7.37796 12.6043 7.37796 13.3957 7.86612 13.8839L10.3661 16.3839C10.8543 16.872 11.6457 16.872 12.1339 16.3839L17.1339 11.3839Z" fill="#4F46E5"></path>
                  </svg>
                  <span class="flex-1 font-medium leading-relaxed">The best you can do in no time at all, amazing feature goes here</span>
                </li>
                <li class="mb-5 flex flex-wrap">
                  <svg class="mr-2" width="25" height="26" viewbox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 23C18.0228 23 22.5 18.5228 22.5 13C22.5 7.47715 18.0228 3 12.5 3C6.97715 3 2.5 7.47715 2.5 13C2.5 18.5228 6.97715 23 12.5 23ZM17.1339 11.3839C17.622 10.8957 17.622 10.1043 17.1339 9.61612C16.6457 9.12796 15.8543 9.12796 15.3661 9.61612L11.25 13.7322L9.63388 12.1161C9.14573 11.628 8.35427 11.628 7.86612 12.1161C7.37796 12.6043 7.37796 13.3957 7.86612 13.8839L10.3661 16.3839C10.8543 16.872 11.6457 16.872 12.1339 16.3839L17.1339 11.3839Z" fill="#4F46E5"></path>
                  </svg>
                  <span class="flex-1 font-medium leading-relaxed">24/7 Support of our dedicated, highly professional team</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/2 p-8">
      <div class="p-4 py-16 flex flex-col justify-center bg-blueGray-100 h-full">
        <form class="md:max-w-lg mx-auto">
          <label class="block mb-4">
            <p class="mb-2 text-gray-900 font-semibold leading-normal">Email Address *</p>
            <input class="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300" id="signInInput1-1" type="text" placeholder="Enter email address" />
          </label>
          <label class="block mb-5">
            <p class="mb-2 text-gray-900 font-semibold leading-normal">Password *</p>
            <input class="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300" id="signInInput1-2" type="password" placeholder="********" />
          </label>
          <div class="flex flex-wrap justify-between -m-2 mb-4">
            <div class="w-auto p-2">
              <div class="flex items-center">
                <input class="w-4 h-4" id="default-checkbox" type="checkbox" value="" />
                <label class="ml-2 text-sm text-gray-900 font-medium" for="default-checkbox">Remember Me</label>
              </div>
            </div>
            <div class="w-auto p-2"><a class="text-sm text-indigo-600 hover:text-indigo-700 font-medium" href="#">Forgot Password?</a></div>
          </div>
          <button class="mb-9 py-4 px-9 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button">Sign In</button>
          <p class="mb-5 text-sm text-gray-500 font-medium text-center">Or continue with</p>
          <div class="flex flex-wrap justify-center -m-2">
            <div class="w-auto p-2">
              <button class="flex items-center p-4 bg-white hover:bg-gray-50 border rounded-lg transition ease-in-out duration-200">
                <img class="mr-3" src="flaro-assets/logos/brands/google.svg" alt="" />
                <span class="font-semibold leading-normal">Sign in with Google</span>
              </button>
            </div>
            <div class="w-auto p-2">
              <button class="flex items-center p-4 bg-white hover:bg-gray-50 border rounded-lg transition ease-in-out duration-200">
                <img class="mr-3" src="flaro-assets/logos/brands/fb.svg" alt="" />
                <span class="font-semibold leading-normal">Sign in with Facebook</span>
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
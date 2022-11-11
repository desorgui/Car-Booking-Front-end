const page404 = () => (
  <section className="pt-32 pb-36 bg-white overflow-hidden">
    <div className="container px-4 mx-auto">
      <div className="flex flex-wrap -m-8">
        <div className="w-full md:w-1/2 p-8">
          <div className="flex flex-col justify-between h-full">
            <div className="mb-8">
              <h2 className="mb-6 text-16xl text-indigo-600 font-bold tracking-px-2n leading-none">404</h2>
              <h3 className="mb-4 text-3xl font-bold font-heading leading-snug">Something is wrong!</h3>
              <p className="text-lg text-gray-600 font-medium leading-normal md:max-w-md">The page you are looking for is not found! Try something else or go back to homepage.</p>
            </div>
            <div>
              <a className="inline-flex items-center text-center font-semibold text-indigo-600 hover:text-indigo-700 leading-normal" href="nothing.com">
                <svg className="mr-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.66667 12.6667L2 8.00004M2 8.00004L6.66667 3.33337M2 8.00004L14 8.00004" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Go Back to Homepage</span>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-8 self-end">
          <img className="mx-auto transform hover:-translate-x-4 transition ease-in-out duration-1000" src="flaro-assets/images/http-codes/illustration.png" alt="" />
        </div>
      </div>
    </div>
  </section>
);

export default page404;

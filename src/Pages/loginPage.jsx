const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-slate-600 w-4/12 p-8 rounded">
        <h1 className="text-white text-3xl">Login</h1>
        <form method="post">
          <div className="flex flex-col mt-3">
            <label htmlFor="email" className="text-white">
              Email
            </label>
            <input className="leading-6 py-2 pl-2 ring-2 appearance-none text-sm shadow-sm rounded mt-2 focus:ring-2 focus:ring-blue-600 focus:outline-none" type="email" name="email" id="email" placeholder="your email..." />
          </div>
          <div className="flex flex-col mt-3">
            <label htmlFor="password" className="text-white">
              Password
            </label>
            <input className="leading-6 py-2 pl-2 ring-2 appearance-none text-sm shadow-sm rounded mt-2 focus:ring-2 focus:ring-blue-600 focus:outline-none" type="password" name="password" id="password" placeholder="your password..." />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-green-600 px-5 py-1 rounded mt-12 text-white">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

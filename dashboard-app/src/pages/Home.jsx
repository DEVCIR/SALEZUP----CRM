export default function My_Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200 basis-full">
      <div className="container">
        <div className="p-5 mx-2 bg-white rounded-lg shadow-lg md:p-20">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
              CRM<span className="text-indigo-600">&nbsp;Tool</span>
            </h2>
            <p className="mt-10 font-semibold text-black text-md md:text-xl">This is a CRM tool created for Admin, Sales Agent and Sales Officer Registration and Logins.</p>
          </div>
          <div className="flex flex-wrap justify-center mt-10">
            <div className="m-3">
              <a href="/sales_off_log" title="User and Manager Registration"
                className="inline-flex items-center px-6 py-2 font-bold tracking-wide text-center text-gray-800 bg-white border-2 border-blue-500 rounded shadow-md md:w-56 hover:border-blue-500 hover:bg-blue-500 hover:text-white">
                <span className="mx-auto">Sales Officer Registration</span>
              </a>
            </div>
            <div className="m-3">
              <a href="/sales_agent_log" title="Quicktoolz On Facebook"
                className="inline-flex items-center h-16 px-6 py-2 mt-0 font-bold tracking-wide text-center text-gray-800 bg-white border-2 border-orange-500 rounded shadow-md md:w-42 hover:border-orange-500 hover:bg-orange-500 hover:text-white">
                <span className="mx-auto">Sales Agent Registration</span>
              </a>
            </div>
            <div className="m-3">
              <a href="/admin_login" title="Admin Registration"
                className="inline-flex items-center px-6 py-2 font-bold tracking-wide text-center text-gray-800 bg-white border-2 border-red-600 rounded shadow-md md:w-56 hover:border-red-600 hover:bg-red-600 hover:text-white">
                <span className="mx-auto">Admin / Manager Registration</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
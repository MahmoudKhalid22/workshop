function Header() {
  return (
    <div className="my-4">
      <h2 className="text-md md:text-2xl font-normal my-2 md:my-8">
        TODO LIST
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-4 justify-center w-full">
        <form className="w-full">
          <div className="relative overflow-hidden border border-blue-600 rounded-lg px-2 md:px-4 py-2 flex items-center gap-6 justify-between">
            <input
              placeholder="Search Todo"
              className="border-none outline-none text-md md:text-2xl w-full"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="absolute right-0  md:text-2xl text-sm h-12 w-8 bg-blue-600 hover:bg-blue-800 transition-colors text-[#ececec] cursor-pointer px-2"
            >
              <path
                fill="currentColor"
                d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396l1.414-1.414l-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8s3.589 8 8 8m0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6s-6-2.691-6-6s2.691-6 6-6"
              />
            </svg>
          </div>
        </form>
        <button>
          <span>All</span>
          <span>🔻</span>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 21q-3.75 0-6.375-2.625T3 12t2.625-6.375T12 3q.35 0 .688.025t.662.075q-1.025.725-1.638 1.888T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q1.375 0 2.525-.613T20.9 10.65q.05.325.075.662T21 12q0 3.75-2.625 6.375T12 21m0-2q2.2 0 3.95-1.213t2.55-3.162q-.5.125-1 .2t-1 .075q-3.075 0-5.238-2.163T9.1 7.5q0-.5.075-1t.2-1q-1.95.8-3.163 2.55T5 12q0 2.9 2.05 4.95T12 19m-.25-6.75"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Header;

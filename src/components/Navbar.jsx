function Navbar({ onIconClick }) {
  return (
    <>
      <div className="navbar bg-indigo-500">
        <div className="flex-1">
          <p className="text-2xl font-bold text-white pl-5"> SPN </p>
        </div>
        <div className="flex-none">
          {/* Button that triggers the NotAllowedCapturePage */}
          <button className="btn btn-square btn-ghost" onClick={onIconClick}>
            <svg
              data-slot="icon"
              fill="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              width="30"
              height="30"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
export default Navbar;

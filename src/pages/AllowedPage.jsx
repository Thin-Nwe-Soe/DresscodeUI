import Navbar from "../components/Navbar";

function AllowedPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-800">
        <div className="bg-green-500 w-full h-12 flex justify-center items-center">
          <p className="text-white font-bold text-xl">Allowed</p>
          <span className="ml-2">
            <svg
              data-slot="icon"
              fill="none"
              stroke-width="1.5"
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              ></path>
            </svg>
          </span>
        </div>
        <div class="mt-6  w-[80%] aspect-video mx-auto">
          <iframe
            class="w-full h-full"
            src="https://www.youtube.com/embed/3zIiEygxz14"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
export default AllowedPage;

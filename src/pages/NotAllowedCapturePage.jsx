import Navbar from "../components/Navbar";
import CaptureCard from "../components/CaptureCard";

function NotAllowedCapturePage({ isVisible }) {
  const images = [
    {
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      timestamp: "2024-09-29 19:43:35",
    },
    {
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      timestamp: "2024-09-29 19:44:35",
    },
    {
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      timestamp: "2024-09-29 19:45:35",
    },
    {
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      timestamp: "2024-09-29 19:43:35",
    },
    {
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      timestamp: "2024-09-29 19:44:35",
    },
    {
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      timestamp: "2024-09-29 19:45:35",
    },
    {
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      timestamp: "2024-09-29 19:43:35",
    },
    {
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      timestamp: "2024-09-29 19:44:35",
    },
    {
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      timestamp: "2024-09-29 19:45:35",
    },
  ];

  return (
    <>
      {/* Navbar remains on top */}
      <Navbar />

      {/* NotAllowedCapturePage appears below the navbar */}
      <div
        className={`fixed top-16 right-0 h-full bg-gray-800 transition-transform duration-300 ease-in-out transform ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: "80%" }}
      >
        <div className="bg-red-700 w-full h-12 flex justify-center items-center">
          <p className="text-white font-bold text-xl">Not Allowed Captures</p>
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
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              ></path>
            </svg>
          </span>
        </div>

        <div className="pt-10 px-10 md:px-16 lg:px-28 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-auto h-[calc(100vh-5rem)]">
          {images.map((img, index) => (
            <CaptureCard
              key={index}
              imageUrl={img.imageUrl}
              timestamp={img.timestamp}
              className="mb-6"
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default NotAllowedCapturePage;

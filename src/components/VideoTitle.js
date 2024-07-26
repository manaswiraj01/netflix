const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-20 absolute bg-gradient-to-r from-black text-white">
      <h1 className="font-bold text-5xl py-4">{title}</h1>
      <p className="py-4 text-lg w-1/3">{overview}</p>
      <div>
        <button className="bg-white py-2 px-6 text-2xl rounded-md text-black hover:bg-opacity-80">
          <i className="fa-solid fa-play mr-2"></i>
          <span className="">Play</span>
        </button>
        <button className="bg-gray-500 py-2 mx-2 px-4 rounded-md text-2xl text-white bg-opacity-70 hover:bg-opacity-50">
        <i className="fa-solid fa-circle-info mr-2"></i>
        <span>More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

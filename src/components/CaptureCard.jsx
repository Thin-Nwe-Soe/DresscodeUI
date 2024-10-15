function CaptureCard({ imageUrl, timestamp, className }) {
  return (
    <>
      <div className={`p-2 ${className}`}>
      <img
        className="w-full h-full"
        src={imageUrl}
        alt="Capture"
      />
      <p className="text-white text-center mt-2 text-sm">{timestamp}</p>
    </div>
    </>
  );
}
export default CaptureCard;
  
export default function VideoFrame() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      <div className="w-full max-w-4xl">
        {/* Video Frame with Split Border */}
        <div className="relative">
          {/* Split Border Container */}
          <div 
            className="relative rounded-3xl overflow-hidden"
            style={{
              aspectRatio: '16/9',
              background: 'linear-gradient(90deg, #9ca85c 0%, #9ca85c 50%, #000000 50%, #000000 100%)',
              padding: '4px',
            }}
          >
            {/* Inner Video Container */}
            <div className="w-full h-full bg-black rounded-2xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Video Frame"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

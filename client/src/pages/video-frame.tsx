export default function VideoFrame() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8" style={{ background: 'linear-gradient(135deg, #9ca85c 0%, #b8c47a 100%)' }}>
      <div className="w-full max-w-4xl">
        {/* Video Frame with Right and Bottom Border */}
        <div 
          className="relative rounded-2xl overflow-hidden"
          style={{
            aspectRatio: '16/9',
            boxShadow: '12px 12px 0px 0px rgba(0, 0, 0, 0.3), 15px 0px 0px 0px #9ca85c, 0px 15px 0px 0px #9ca85c',
            background: 'black',
          }}
        >
          {/* Video Container */}
          <div className="w-full h-full overflow-hidden">
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
  );
}

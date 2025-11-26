export default function VideoFrame() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8" style={{ background: 'linear-gradient(135deg, #8b9f52 0%, #d4e595 100%)' }}>
      <div className="w-full max-w-3xl relative">
        {/* Outer container for border effect */}
        <div style={{ position: 'relative', aspectRatio: '16/9' }}>
          {/* Right border */}
          <div style={{
            position: 'absolute',
            right: 0,
            top: 0,
            width: '8px',
            height: '100%',
            background: '#9ca85c',
            borderRadius: '0 20px 20px 0',
            zIndex: 10
          }}></div>
          
          {/* Bottom border */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '8px',
            background: '#9ca85c',
            borderRadius: '0 0 20px 20px',
            zIndex: 10
          }}></div>

          {/* Video container */}
          <div className="w-full h-full rounded-3xl overflow-hidden bg-black">
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

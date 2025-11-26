export default function VideoFrame() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(180deg, #c4d97a 0%, #9ca85c 50%, #7a8c45 100%)' }}>
      <div className="w-full max-w-3xl px-8">
        {/* Outer container for border effect */}
        <div style={{ position: 'relative', aspectRatio: '16/9' }}>
          {/* Video container with rounded corners */}
          <div className="w-full h-full rounded-3xl overflow-hidden bg-black relative">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Video Frame"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Right border */}
          <div style={{
            position: 'absolute',
            right: -12px,
            top: 0,
            width: '12px',
            height: '100%',
            background: '#9ca85c',
            borderRadius: '0 24px 24px 0',
          }}></div>
          
          {/* Bottom border */}
          <div style={{
            position: 'absolute',
            bottom: -12px,
            left: 0,
            width: '100%',
            height: '12px',
            background: '#9ca85c',
            borderRadius: '0 0 24px 24px',
          }}></div>
        </div>
      </div>
    </div>
  );
}

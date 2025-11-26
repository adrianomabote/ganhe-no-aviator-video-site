export default function VideoFrame() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(180deg, #c4d97a 0%, #9ca85c 50%, #7a8c45 100%)' }}>
      <div className="w-full max-w-3xl px-8">
        {/* Video container */}
        <div style={{
          position: 'relative',
          aspectRatio: '16/9',
          borderRadius: '28px',
          overflow: 'hidden',
          background: '#000',
          border: '5px solid #9ca85c',
        }}>
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
  );
}

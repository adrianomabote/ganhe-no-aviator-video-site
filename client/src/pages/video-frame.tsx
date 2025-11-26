export default function VideoFrame() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(180deg, #d4e595 0%, #c4d97a 30%, #9ca85c 60%, #8a9a45 100%)' }}>
      <div style={{
        position: 'relative',
        width: '320px',
        height: '540px',
      }}>
        {/* Video Frame - Vertical Format */}
        <div style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#000',
          borderRadius: '28px',
          overflow: 'hidden',
          boxShadow: '12px 12px 0 0 #9ca85c',
          position: 'relative',
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

const heartbeatStyle = `
  @keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    14% { transform: scale(1.1); }
    28% { transform: scale(1); }
    42% { transform: scale(1.1); }
    56% { transform: scale(1); }
  }
`;

export default function VideoFrame() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: '#000000' }}>
      <style>{heartbeatStyle}</style>
      <div className="w-full px-8 flex flex-col items-center">
        {/* Catchy Heading */}
        <h1 className="text-white text-2xl font-bold mb-0 text-center" style={{ fontFamily: 'Georgia, serif', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
          Ganhe no Aviator
        </h1>
        <p className="text-white text-sm mb-1 text-center" style={{ fontFamily: 'Arial, sans-serif', opacity: 0.95 }}>
          Com o sistema inteligente que funciona
        </p>

        {/* Video container */}
        <div style={{
          position: 'relative',
          aspectRatio: '9/16',
          width: '100%',
          maxWidth: '250px',
          marginTop: '8px',
          borderRadius: '12px',
          overflow: 'hidden',
          background: '#000',
          border: '4px solid #ffd700',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
        }}>
          <iframe
            src="https://www.youtube.com/embed/VgsrvceLFiw"
            title="Video Frame"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Text and Button Section */}
        <div className="mt-2 text-center max-w-xs">
          <p className="mb-3" style={{ fontFamily: 'Arial, sans-serif', fontSize: '11px', color: '#e0e0e0', lineHeight: '1.5', opacity: 0.85 }}>
            Veja no vídeo como funciona o sistema que está mudando a vida de muitos jogadores. Aprenda a ganhar no Aviator de maneira inteligente e segura!
          </p>
          <button
            data-testid="button-get-system"
            className="px-6 py-2 font-semibold"
            style={{
              background: '#ff0000',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              animation: 'heartbeat 1.3s ease-in-out infinite'
            }}
          >
            OBTER O SISTEMA AGORA
          </button>
        </div>
      </div>
    </div>
  );
}

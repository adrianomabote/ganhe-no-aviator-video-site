export default function VideoFrame() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: 'linear-gradient(180deg, #c4d97a 0%, #9ca85c 50%, #7a8c45 100%)' }}>
      <div className="w-full px-8 flex flex-col items-center">
        {/* Catchy Heading */}
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-2 text-center" style={{ fontFamily: 'Georgia, serif', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
          Ganhe no Aviator
        </h1>
        <p className="text-white text-lg mb-8 text-center" style={{ fontFamily: 'Arial, sans-serif', opacity: 0.95 }}>
          Com o sistema inteligente que funciona
        </p>

        {/* Video container */}
        <div style={{
          position: 'relative',
          aspectRatio: '9/16',
          width: '100%',
          maxWidth: '300px',
          borderRadius: '12px',
          overflow: 'hidden',
          background: '#000',
          border: '4px solid #3d4f1f',
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
        <div className="mt-10 text-center max-w-sm">
          <p className="text-white text-base mb-8" style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.8', opacity: 0.9 }}>
            Veja no vídeo como funciona o sistema que está mudando a vida de muitos. Aprenda a ganhar no Aviator de uma forma inteligente e segura.
          </p>
          <button
            data-testid="button-get-system"
            className="px-10 py-4 font-bold text-lg transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #b0c860 0%, #9ca85c 100%)',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              boxShadow: '0 6px 20px rgba(61, 79, 31, 0.4)',
              transform: 'translateY(0)',
              letterSpacing: '0.5px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(61, 79, 31, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(61, 79, 31, 0.4)';
            }}
          >
            Obter o sistema
          </button>
        </div>
      </div>
    </div>
  );
}

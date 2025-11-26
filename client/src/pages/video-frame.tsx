export default function VideoFrame() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: 'linear-gradient(180deg, #c4d97a 0%, #9ca85c 50%, #7a8c45 100%)' }}>
      <div className="w-full px-8 flex flex-col items-center">
        {/* Video container */}
        <div style={{
          position: 'relative',
          aspectRatio: '9/16',
          width: '100%',
          maxWidth: '360px',
          borderRadius: '12px',
          overflow: 'hidden',
          background: '#000',
          border: '4px solid #3d4f1f',
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
        <div className="mt-8 text-center">
          <p className="text-white text-lg mb-6" style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
            O vídeo acima e veja como funciona o sistema que esta mudar vida de muitos jogar a ganhar no Aviator duma forma inteligente....
          </p>
          <button
            data-testid="button-get-system"
            className="px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
            style={{
              background: '#3d4f1f',
              color: '#fff',
              border: '2px solid #3d4f1f',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Obter o sistema
          </button>
        </div>
      </div>
    </div>
  );
}

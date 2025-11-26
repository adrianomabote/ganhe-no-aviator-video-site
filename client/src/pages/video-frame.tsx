import { useState, useEffect } from 'react';

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
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Ganhe no Aviator';

  useEffect(() => {
    let index = 0;
    let phase = 'writing'; // 'writing', 'paused', 'deleting'
    let pauseCounter = 0;

    const interval = setInterval(() => {
      if (phase === 'writing') {
        // Escrevendo letra por letra
        if (index < fullText.length) {
          setDisplayedText(fullText.slice(0, index + 1));
          index++;
        } else {
          // Terminou de escrever, vai para pausa
          phase = 'paused';
          pauseCounter = 0;
        }
      } else if (phase === 'paused') {
        // Pausando por 1.5 segundos (6 ciclos de 250ms)
        pauseCounter++;
        if (pauseCounter >= 6) {
          // Terminou a pausa, vai apagar
          phase = 'deleting';
          setDisplayedText('');
          index = 0;
          phase = 'writing';
          pauseCounter = 0;
        }
      }
    }, 250);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: '#0A2342' }}>
      <style>{heartbeatStyle}</style>
      <div className="w-full px-8 flex flex-col items-center">
        {/* Catchy Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center whitespace-nowrap" style={{ fontFamily: 'Georgia, serif', color: '#ffffff', fontWeight: '900', minHeight: '60px', letterSpacing: '1px' }}>
          {displayedText}
        </h1>
        <p className="mb-4 text-center" style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#e0e0e0', lineHeight: '1.6', opacity: 0.85 }}>
          Veja no vídeo como funciona o sistema que está mudando a vida de muitos jogadores. Aprenda a ganhar no Aviator de maneira inteligente e segura!
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
          border: '2px solid #1a1a1a',
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

        {/* Button Section */}
        <div className="mt-4 text-center max-w-sm">
          <p className="mb-3 text-center" style={{ fontFamily: 'Arial, sans-serif', fontSize: '11px', color: '#b0b0b0', lineHeight: '1.4' }}>
            Depois de assistir o vídeo, clique no botão abaixo.
          </p>
          <button
            data-testid="button-get-system"
            className="px-6 py-1 font-semibold text-base"
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

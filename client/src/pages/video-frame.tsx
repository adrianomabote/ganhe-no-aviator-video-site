import { useState } from 'react';

export default function VideoFrame() {
  const [videoUrl, setVideoUrl] = useState('https://www.youtube.com/embed/dQw4w9WgXcQ');
  const [inputUrl, setInputUrl] = useState('');

  const handleUpdateVideo = () => {
    if (inputUrl.trim()) {
      setVideoUrl(inputUrl);
      setInputUrl('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 flex items-center justify-center">
      <div className="w-full max-w-4xl">
        {/* Video Frame with Glowing Border Effect */}
        <div className="relative group">
          {/* Outer glow layer */}
          <div className="absolute -inset-1 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
               style={{
                 background: 'linear-gradient(135deg, rgba(156, 168, 92, 0.5) 0%, rgba(139, 156, 73, 0.5) 100%)'
               }}></div>
          
          {/* Inner shadow/depth effect */}
          <div className="relative rounded-3xl overflow-hidden border-4 border-gradient shadow-2xl" 
               style={{
                 backgroundImage: 'linear-gradient(135deg, rgba(156, 168, 92, 0.3) 0%, rgba(139, 156, 73, 0.2) 50%, rgba(128, 146, 62, 0.3) 100%)',
                 border: '4px solid transparent',
                 backgroundClip: 'padding-box',
                 boxShadow: `
                   0 0 30px rgba(156, 168, 92, 0.4),
                   0 0 60px rgba(139, 156, 73, 0.2),
                   inset 0 1px 0 rgba(255, 255, 255, 0.1),
                   inset 0 -1px 0 rgba(0, 0, 0, 0.5)
                 `
               }}>
            {/* Gradient Border Background */}
            <div 
              className="absolute inset-0 rounded-3xl -z-10"
              style={{
                background: 'linear-gradient(135deg, #9ca85c 0%, #8b9c49 50%, #80923e 100%)',
              }}
            ></div>

            {/* White inner border */}
            <div className="absolute inset-1 rounded-2xl bg-slate-900 -z-10"></div>

            {/* Video Container */}
            <div className="aspect-video bg-black rounded-2xl overflow-hidden">
              <iframe
                src={videoUrl}
                title="Video Frame"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* URL Input Section */}
        <div className="mt-8 space-y-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              placeholder="Paste YouTube embed URL here..."
              className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border text-white placeholder-slate-400 focus:outline-none transition-all"
              style={{
                borderColor: inputUrl ? '#9ca85c' : '#334155',
                boxShadow: inputUrl ? '0 0 15px rgba(156, 168, 92, 0.3)' : 'none'
              }}
              data-testid="input-video-url"
              onKeyPress={(e) => e.key === 'Enter' && handleUpdateVideo()}
            />
            <button
              style={{
                background: 'linear-gradient(135deg, #9ca85c 0%, #8b9c49 100%)',
                boxShadow: '0 0 20px rgba(156, 168, 92, 0.3)'
              }}
              className="px-6 py-3 rounded-lg text-white font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105"
              data-testid="button-update-video"
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 30px rgba(156, 168, 92, 0.6)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(156, 168, 92, 0.3)'}
              onClick={handleUpdateVideo}
            >
              Load
            </button>
          </div>
          <p className="text-slate-400 text-sm">
            Example: https://www.youtube.com/embed/VIDEO_ID
          </p>
        </div>
      </div>
    </div>
  );
}

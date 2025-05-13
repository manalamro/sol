import React from 'react';

const SideNavigation = ({ itemId, onClose, items }) => {
  const item = items.find(item => item.id === itemId);

  if (!item) return null;

  return (
    <div 
      className="fixed inset-y-0 right-0 w-96 bg-white z-50 p-8 overflow-y-auto"
      style={{
        fontFamily: '"SF Pro Display Medium", -apple-system, BlinkMacSystemFont, sans-serif',
        borderLeft: '1px solid rgba(238, 238, 238, 0.5)'
      }}
    >
      <button
        onClick={onClose}
        className="absolute top-8 right-8 text-black hover:opacity-70 transition-opacity"
        style={{ 
          fontSize: '24px', 
          lineHeight: '80%',
          letterSpacing: '-0.02em'
        }}
      >
        ✕
      </button>

      <div className="space-y-6 mt-4">
        {/* Header Section */}
        <div className="space-y-4">
          <h1 
            className="text-4xl font-bold leading-tight"
            style={{ 
              letterSpacing: '-0.02em',
              color: 'rgb(16, 18, 20)'
            }}
          >
            {item.title}
          </h1>
          
          <p 
            className="text-lg opacity-80"
            style={{ 
              letterSpacing: '-0.02em',
              color: 'rgb(16, 18, 20)'
            }}
          >
            {item.description}
          </p>
        </div>

        {/* Mission Statement */}
        {item.mission && (
          <div className="space-y-2">
            <h3 
              className="text-sm font-bold opacity-80"
              style={{ 
                letterSpacing: '-0.02em',
                lineHeight: '80%',
                color: 'rgb(16, 18, 20)'
              }}
            >
              MISSION
            </h3>
            <p 
              className="text-base leading-relaxed opacity-80"
              style={{ 
                letterSpacing: '-0.02em',
                color: 'rgb(16, 18, 20)',
                maxWidth: '600px'
              }}
            >
              {item.mission}
            </p>
          </div>
        )}

        {/* Categories */}
        {item.categories && item.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {item.categories.map((category, index) => (
              <span 
                key={index}
                className="px-3 py-1 text-xs rounded-full"
                style={{ 
                  backgroundColor: 'rgba(235, 235, 235, 0.5)',
                  letterSpacing: '-0.02em',
                  lineHeight: '80%',
                  color: 'rgb(16, 18, 20)'
                }}
              >
                {category}
              </span>
            ))}
          </div>
        )}

        {/* Partnership Description */}
        {item.partnershipDescription && (
          <div className="space-y-2">
            <h3 
              className="text-sm font-bold opacity-80"
              style={{ 
                letterSpacing: '-0.02em',
                lineHeight: '80%',
                color: 'rgb(16, 18, 20)'
              }}
            >
              PARTNERSHIP
            </h3>
            <p 
              className="text-base leading-relaxed opacity-80"
              style={{ 
                letterSpacing: '-0.02em',
                color: 'rgb(16, 18, 20)',
                maxWidth: '600px'
              }}
            >
              {item.partnershipDescription}
            </p>
          </div>
        )}

        {/* Main Media (Image or Video) */}
        {item.image && (
          <div className="overflow-hidden mt-6">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto"
              style={{ 
                borderRadius: '8px',
                ...(item.objectPosition ? { objectPosition: item.objectPosition } : {})
              }}
            />
          </div>
        )}

        {item.video && (
          <div className="overflow-hidden mt-6" style={{ borderRadius: '8px' }}>
            <video
              src={item.video}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto"
              style={{ borderRadius: '8px' }}
            />
          </div>
        )}

        {/* Additional Media Gallery */}
        {item.media && item.media.length > 0 && (
          <div className="space-y-4 mt-6">
            <h3 
              className="text-sm font-bold opacity-80"
              style={{ 
                letterSpacing: '-0.02em',
                lineHeight: '80%',
                color: 'rgb(16, 18, 20)'
              }}
            >
              GALLERY
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {item.media.map((mediaItem, index) => {
                if (mediaItem.type === 'image') {
                  return (
                    <div 
                      key={index} 
                      className="overflow-hidden"
                      style={{ borderRadius: '8px' }}
                    >
                      <img
                        src={mediaItem.url}
                        alt={`Media ${index + 1}`}
                        className="w-full h-auto object-cover"
                        style={{ borderRadius: '8px' }}
                      />
                    </div>
                  );
                } else if (mediaItem.type === 'video') {
                  return (
                    <div 
                      key={index} 
                      className="overflow-hidden"
                      style={{ borderRadius: '8px' }}
                    >
                      <video
                        src={mediaItem.url}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-auto"
                        style={{ borderRadius: '8px' }}
                      />
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideNavigation;
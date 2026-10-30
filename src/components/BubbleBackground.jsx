import React, { useEffect, useState } from 'react';

export default function BubbleBackground() {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    // Generate a fixed set of subtle floating bubbles to avoid excessive DOM creation
    const generated = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      size: Math.floor(Math.random() * 35) + 15,
      left: Math.random() * 100,
      duration: Math.random() * 8 + 7,
      delay: Math.random() * 6
    }));
    setBubbles(generated);
  }, []);

  return (
    <div className="ambient-bg" aria-hidden="true">
      <div className="ambient-blob blob-1"></div>
      <div className="ambient-blob blob-2"></div>
      <div className="bubble-canvas">
        {bubbles.map((b) => (
          <div
            key={b.id}
            className="bubble"
            style={{
              width: `${b.size}px`,
              height: `${b.size}px`,
              left: `${b.left}%`,
              '--anim-duration': `${b.duration}s`,
              animationDelay: `${b.delay}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}


import React, { useState, useEffect } from 'react';

export default function Typewriter({ words = [], typingSpeed = 90, deletingSpeed = 45, pauseTime = 1800 }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[wordIndex % words.length];

    let timer;
    if (!isDeleting) {
      if (text.length < currentWord.length) {
        timer = setTimeout(() => {
          setText(currentWord.slice(0, text.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => {
          setText(currentWord.slice(0, text.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => prev + 1);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', flexWrap: 'wrap' }}>
      <span className="gradient-text" style={{ fontWeight: 700, wordBreak: 'break-word' }}>
        {text}
      </span>
      <span
        className="typewriter-cursor"
        style={{
          display: 'inline-block',
          marginLeft: '2px',
          color: 'var(--accent-cyan)',
          fontWeight: 400,
          animation: 'cursorBlink 1s infinite'
        }}
      >
        |
      </span>
    </span>
  );
}

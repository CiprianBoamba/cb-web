import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const texts = ['Ciprian', 'Web Developer'];

  useEffect(() => {
    const targetText = texts[currentTextIndex];

    let timeout;
    if (isDeleting) {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(text.slice(0, -1));
        }, 100);
      } else {
        setIsDeleting(false);
        setCurrentTextIndex((currentTextIndex + 1) % texts.length);
      }
    } else {
      if (text.length < targetText.length) {
        timeout = setTimeout(() => {
          setText(targetText.slice(0, text.length + 1));
        }, 200);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentTextIndex]);

  const textClass =
    texts[currentTextIndex] === 'Ciprian'
      ? 'text-ciprian'
      : 'text-webdeveloper';

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hello, I'm</h1>

          <h1 className={`${styles.heroHeadWords} ${textClass}`}>
            {text}
            <span className="inline-block bg-primary text-white w-2 ml-1 animate-blink">
              |
            </span>
          </h1>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  );
};

export default Hero;

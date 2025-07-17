import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './consoleText.module.scss';

const WRITE_SPEED_IN_MS = 60;
const DELETE_SPEED_IN_MS = 60;
const DISPLAY_TIME_TITLE_IN_MS = 5000;
const SPACE = '\u00A0';
export default function ConsoleText({ words }) {
  const consoleTextRef = useRef(null);
  useEffect(() => {
    if (!words || words.length === 0) return;

    let textIndex = 0;
    let currentText = `${SPACE}${words[textIndex]}`;
    let index = currentText.length;

    const deleteText = () => {
      if (!consoleTextRef.current) return;

      if (index >= 1) {
        consoleTextRef.current.innerText = currentText.slice(0, index--);
        setTimeout(deleteText, DELETE_SPEED_IN_MS);
      } else {
        textIndex = (textIndex + 1) % words.length;
        currentText = `${SPACE}${words[textIndex]}`;
        setTimeout(typeNewText, WRITE_SPEED_IN_MS);
      }
    };

    const typeNewText = () => {
      if (!consoleTextRef.current) return;

      const newText = `${SPACE}${words[textIndex]}`;
      index = 1;

      const type = () => {
        if (!consoleTextRef.current) return;


        if (index <= newText.length) {
          consoleTextRef.current.innerText = newText.slice(0, index++);
          setTimeout(type, DELETE_SPEED_IN_MS);
        } else {
          setTimeout(deleteText, DISPLAY_TIME_TITLE_IN_MS);
        }
      };

      type();
    };

    typeNewText();
  }, [words]);

  return (<span ref={consoleTextRef} className={styles.blinkingText} />);
}

ConsoleText.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
};
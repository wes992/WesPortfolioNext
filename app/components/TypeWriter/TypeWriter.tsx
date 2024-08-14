import { useEffect, useRef, useState } from "react";
import { Cursor } from "../Cursor";
import { Character } from "../Character/Character";

interface TypeWriterOptions {
  text: string;
  delay?: number;
  secondaryDelay?: number;
  delayChars?: string[];
  cursor?: boolean;
  forceHideCursor?: boolean;
}

const TypeWriter = (options: TypeWriterOptions) => {
  const {
    delay = 50,
    secondaryDelay = 500,
    text = "",
    delayChars = [],
    cursor = true,
  } = options;
  const index = useRef(0);
  const delayIndexes = useRef([] as number[]);

  const [currentText, setCurrentText] = useState<any[]>([]);
  const [hideCursor, setHideCursor] = useState(!cursor);

  useEffect(() => {
    index.current = 0;
    delayIndexes.current = [];
    setCurrentText([]);
    setHideCursor(!cursor);
  }, [text, cursor]);

  Array.from(text).forEach((currentChar, index: number) => {
    if (delayChars.includes(currentChar)) {
      delayIndexes.current.push(index + 1);
    }
  });

  const char = text.charAt(index.current);
  const currentDelay = delayIndexes.current.includes(index.current)
    ? secondaryDelay
    : delay;

  useEffect(() => {
    if (index.current <= text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((val) => [
          ...val,
          <Character key={char + index.current} character={char} />,
        ]);
        index.current += 1;
        if (index.current > text.length) setHideCursor(true);
      }, currentDelay);

      return () => clearTimeout(timeout);
    }
  }, [currentText, char, currentDelay, text.length]);

  return (
    <>
      {currentText}
      <span>
        <Cursor hidden={hideCursor} />
      </span>
    </>
  );
};

export { TypeWriter };

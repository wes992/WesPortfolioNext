import "./styles.css";

const Cursor = ({ hidden = false, cursor = "|" }) => {
  return (
    <span className={`cursorBlink ${hidden ? "hidden" : ""}`}>{cursor}</span>
  );
};

export { Cursor };

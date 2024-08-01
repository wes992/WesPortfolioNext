import { isSpecialCharacter } from "@/app/utils";
import React from "react";
import classes from "./Character.module.css";

const Character = ({ character }: { character: string }) => {
  return (
    <span className={isSpecialCharacter(character) ? classes.specialChar : ""}>
      {character}
    </span>
  );
};

export { Character };

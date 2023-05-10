import React from "react";
import { ROWPOINTS } from "../setup";

export const useGameStatus = (rowsCleared: number, gameOver: boolean) => {
  const [score, setScore] = React.useState(0);
  const [rows, setRows] = React.useState(0);
  const [level, setLevel] = React.useState(1);
  const [highScores, setHighScores] = React.useState<number[]>([]);

  React.useEffect(() => {
    if (rowsCleared > 0) {
      const rowPoints = ROWPOINTS[rowsCleared - 1] * level;
      setScore((prevScore) => prevScore + rowPoints);
      setRows((prevRows) => prevRows + rowsCleared);
    }
  }, [rowsCleared, level]);

  React.useEffect(() => {
    if (gameOver) {
      const newScore = score;
      if (newScore > 0) {
        const newHighScores = [...highScores, newScore]
          .sort((a, b) => b - a)
          .slice(0, 10);
        setHighScores(newHighScores);
      }
    }
  }, [gameOver]);

  return {
    score,
    setScore,
    rows,
    setRows,
    level,
    setLevel,
    highScores,
    setHighScores,
  };
};

export default useGameStatus;

// high scores of levels reached
// import React from "react";
// import { ROWPOINTS } from "../setup";

// export const useGameStatus = (rowsCleared: number) => {
//   const [score, setScore] = React.useState(0);
//   const [rows, setRows] = React.useState(0);
//   const [level, setLevel] = React.useState(1);
//   const [highScores, setHighScores] = React.useState<number[]>([]);

//   React.useEffect(() => {
//     if (rowsCleared > 0) {
//       const rowPoints = ROWPOINTS[rowsCleared - 1] * level;
//       setScore((prevScore) => prevScore + rowPoints);
//       setRows((prevRows) => prevRows + rowsCleared);

//       const newScore = score + rowPoints;
//       if (newScore > 0) {
//         const newHighScores = [...highScores, newScore]
//           .sort((a, b) => b - a)
//           .slice(0, 10);
//         setHighScores(newHighScores);
//       }
//     }
//   }, [rowsCleared]);

//   return {
//     score,
//     setScore,
//     rows,
//     setRows,
//     level,
//     setLevel,
//     highScores,
//     setHighScores,
//   };
// };

// export default useGameStatus;

// original

// import React from "react";
// import { ROWPOINTS } from "../setup";

// export const useGameStatus = (rowsCleared: number) => {
//   const [score, setScore] = React.useState(0);
//   const [rows, setRows] = React.useState(0);
//   const [level, setLevel] = React.useState(1);

//   React.useEffect(() => {
//     if (rowsCleared > 0) {
//       setScore((prev) => prev + ROWPOINTS[rowsCleared - 1] * level);
//       setRows((prev) => prev + rowsCleared);
//     }
//   }, [rowsCleared]);

//   return { score, setScore, rows, setRows, level, setLevel };
// };

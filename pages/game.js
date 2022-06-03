import styled from "styled-components";
import Piece from "../components/piece";
import { useState, useEffect } from "react";
import shuffle from "../lib/shuffle";
import { numsSmall, numsLarge, iconsSmall, iconsLarge } from "../lib/content";

const BoardContainerStyles = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(6, auto);
  grid-gap: 2rem;
`;

export default function IndexPage() {
  const boardSize = 36;

  function createBoard(size) {
    const board = [];
    for (let i = 1, j = 1; i <= size; i += 2, j++) {
      // i = id
      // j = contentId
      board.push({
        id: i,
        contentId: j,
        clicked: false,
        matchingPiece: i + 1,
        matchFound: false,
        user: null,
      });
      board.push({
        id: i + 1,
        contentId: j,
        clicked: false,
        matchingPiece: i,
        matchFound: false,
        user: null,
      });
    }

    const shuffledBoard = shuffle(board);
    return shuffledBoard;
  }

  const [board, setBoard] = useState(createBoard(boardSize));
  const [guesses, setGuesses] = useState([]);

  // ================= HELPER FUNCTIONS =================
  function updateIsClicked(id) {
    setBoard(current =>
      current.map(obj => {
        if (obj.id === id) {
          return { ...obj, clicked: !obj.clicked };
        }
        return obj;
      })
    );
  }

  function handleMatch(matchId) {
    board.map(piece => {
      if (piece.contentId === matchId) {
        piece.matchFound = true;
      }
    });
  }

  function handleGuess(id) {
    setGuesses([...guesses, id]);
    // if (guesses.length === 2 && guesses[0] !== guesses[1]) {
    //   setGuesses([]);
    // }

    // if (guesses.length === 2 && guesses[0].content !== guesses[1].content) {
    //   setGuesses([]);
    // }
  }

  useEffect(() => {
    console.log(guesses);
  }, [guesses]);

  const renderedPieces = board.map(item => {
    return (
      <Piece
        key={item.id}
        content={iconsLarge[item.contentId]}
        contentId={item.contentId}
        id={item.id}
        isClicked={item.clicked}
        handleGuess={handleGuess}
        updateIsClicked={updateIsClicked}
      />
    );
  });

  return <BoardContainerStyles>{renderedPieces}</BoardContainerStyles>;
}

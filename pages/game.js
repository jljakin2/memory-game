import styled from "styled-components";
import Piece from "../components/piece";
import { useState } from "react";

const BoardContainerStyles = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 2rem;
`;

export default function IndexPage() {
  const boardSize = 16;

  // fisher-yates shuffle helper algorithm
  function shuffle(array) {
    let currentIndex = array.length;
    let randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  function createBoard(size) {
    const board = [];
    for (let i = 1; i <= size; i += 2) {
      board.push({
        id: i,
        content: i,
        clicked: false,
        matchingPiece: i + 1,
        matchFound: false,
        user: null,
      });
      board.push({
        id: i + 1,
        content: i,
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
  const renderedPieces = board.map(item => {
    return <Piece key={item.id} content={item.content} />;
  });

  return <BoardContainerStyles>{renderedPieces}</BoardContainerStyles>;
}

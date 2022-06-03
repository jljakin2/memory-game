import styled from "styled-components";
import { useState } from "react";

const PieceStyles = styled.div`
  background: blue;
  border-radius: 50%;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 3rem;
  height: 3rem;
`;

export default function Piece({
  id,
  content,
  handleGuess,
  isClicked,
  updateIsClicked,
  contentId,
}) {
  // const [pieceStatus, setPieceStatus] = useState({
  //   id,
  //   clicked: false,
  //   matchFound: false,
  //   user: null,
  // });

  function handleClick(e) {
    handleGuess(e.target.getAttribute("data-content"));
    updateIsClicked(id);
  }

  return (
    <PieceStyles onClick={handleClick} data-content={contentId}>
      {isClicked ? content : ""}
    </PieceStyles>
  );
}

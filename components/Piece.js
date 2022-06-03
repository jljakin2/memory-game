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

export default function Piece({ id, content }) {
  const [pieceStatus, setPieceStatus] = useState({
    id,
    clicked: false,
    matchFound: false,
    user: null,
  });

  return (
    <PieceStyles
      onClick={() =>
        setPieceStatus({ ...setPieceStatus, clicked: !pieceStatus.clicked })
      }>
      {pieceStatus.clicked ? content : ""}
    </PieceStyles>
  );
}

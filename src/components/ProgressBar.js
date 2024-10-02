import React from "react";
import styled from "styled-components";

const ProgressContainer = styled.div`
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  margin: 20px 0;
`;

const ProgressFill = styled.div`
  width: ${({ progress }) => progress}%;
  height: 20px;
  background-color: coral; /* Cor da barra de progresso */
  transition: width 0.3s ease;
`;

const ProgressBar = ({ progress }) => {
  return (
    <ProgressContainer>
      <ProgressFill progress={progress} />
    </ProgressContainer>
  );
};

export default ProgressBar;

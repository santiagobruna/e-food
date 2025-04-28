import styled from "styled-components";
import fundo from '../../assets/fundo-eFood.png'; // já puxa aqui

export const Imagem = styled.header`
  width: 100%;
  height: 384px;
  background-image: url(${fundo});
  background-repeat: repeat;
  background-size: contain;
  font-weight: bold;
  padding: 16px 0;
  position: relative;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const Logo = styled.img`
    max-width: 124px;
    padding-top: 64px;

    @media (max-width: 768px) {
    max-width: 100px;
    padding-top: 32px;
  }

  @media (max-width: 480px) {
    max-width: 80px;
    padding-top: 24px;
  }
`;

export const Title = styled.h1`
  max-width: 538px;
  width: 100%;
  text-align: center;
  color: #E66767;
  font-size: 36px;
  font-weight: bold;
  line-height: 1.4;
  padding-top: 138px;

  
  @media (max-width: 768px) {
    font-size: 28px;
    padding-top: 80px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
    padding-top: 40px;
  }
`;

import styled from 'styled-components'
import { Imagem as BaseImagem } from '../../components/Header/style'
import { Logo, cores } from '../../styles'

export const Imagem = styled(BaseImagem)`
  height: 186px;
  padding: 16px 0;

  p {
    font-weight: bold;
    color: #E66767;
  }
`
export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1240px;
    margin: 0 auto;
    padding: 62px 16px 66px 16px;
    a{
      text-decoration: none;
      color: ${cores.pink};
    }
    ${Logo}{
        padding: 0;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 16px;
      padding: 16px 0;

      ${Logo} {
        padding: 0;
      }
    }
`
export const Banner = styled.div`
  width: 100%;
  height: 280px;
  background-size: cover;
  background-position: center;
  position: relative; 
  color: ${cores.white};
  img {
    object-fit: cover;
  }
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4); 
    z-index: 1;
  }
 
`
export const BannerContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 25px 16px 32px 16px;
  position: relative;
  z-index: 2;

`
export const Title = styled.h2`
    font-size: 32px;
    font-weight: 100;
    margin-bottom: 156px;

    @media (max-width: 768px) {
      margin-bottom: 80px;
    }
`
export const SubTitle = styled.p`
    font-size: 32px;
    font-weight: 900;
`
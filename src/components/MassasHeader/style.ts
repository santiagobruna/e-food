import styled from 'styled-components'
import { Imagem as BaseImagem } from '../../components/Header/style'
import { Logo, cores } from '../../styles'
import fundo from '../../assets/fundo.png'

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
  background-image: url(${fundo});
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  padding: 16px 0;
  position: relative;
  color: #fff;

`
export const BannerContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 25px 16px 32px 16px;


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
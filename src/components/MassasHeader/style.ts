// MassasHeader/style.ts
import styled from 'styled-components'
import { Imagem as BaseImagem } from '../../components/Header/style'
import { Logo } from '../../styles'

// reaproveita tudo do Header original, só muda altura e padding
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

    ${Logo}{
        padding: 0;
    }

    @media (max-width: 768px) {
        display: block;
        text-align: center;
        padding: 0;
        ${Logo}{
        padding: 20px 0;
        }
    }
`
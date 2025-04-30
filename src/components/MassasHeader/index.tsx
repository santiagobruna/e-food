import { Banner, BannerContainer, Container, Imagem, SubTitle, Title } from './style'
import { Logo } from '../../styles'
import logo from '../../assets/logo-eFood.png'
import { Link } from 'react-router-dom'

const MassasHeader = () => {
  return (
    <div>
        <Imagem>
          <Container>
            <Link to='/'>Restaurantes</Link>
            <Logo src={logo} alt="Logo E-food" />
            <p>0 produto(s) no carrinho</p>
          </Container>
        </Imagem>
        <Banner>
              <BannerContainer>
                  <Title>Italiana</Title>
                  <SubTitle>
                    La Dolce Vita Trattoria
                  </SubTitle>
              </BannerContainer>
        </Banner>
    </div>
  )
}

export default MassasHeader

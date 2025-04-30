import { Banner, BannerContainer, Container, Imagem, SubTitle, Title } from './style'
import { Logo } from '../../styles'
import logo from '../../assets/logo-eFood.png'

const MassasHeader = () => {
  return (
    <div>
        <Imagem>
          <Container>
            <a href='/'>Restaurantes</a>
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

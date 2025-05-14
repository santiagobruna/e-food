import { Banner, BannerContainer, Container, Imagem, SubTitle, Title } from './style'
import { Logo } from '../../styles'
import logo from '../../assets/logo-eFood.png'
import { Link } from 'react-router-dom'

type MassasHeaderProps = {
  title: string
  subtitle: string
  backgroundImage: string
}


const MassasHeader = ({ title, subtitle, backgroundImage }: MassasHeaderProps) => {
  return (
    <div>
        <Imagem>
          <Container>
            <Link to='/'>Restaurantes</Link>
            <Logo src={logo} alt="Logo E-food" />
            <p>0 produto(s) no carrinho</p>
          </Container>
        </Imagem>
        <Banner style={{ backgroundImage: `url(${backgroundImage})` }}>
              <BannerContainer>
                  <Title>{title}</Title>
                  <SubTitle>
                    {subtitle}
                  </SubTitle>
              </BannerContainer>
        </Banner>
    </div>
  )
}

export default MassasHeader

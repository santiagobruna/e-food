import { Container, Imagem } from './style'
import { Logo } from '../../styles'
import logo from '../../assets/logo-eFood.png'

const MassasHeader = () => {
  return (
    <Imagem>
      <Container>
        <p>Restaurantes</p>
        <Logo src={logo} alt="Logo E-food" />
        <p>0 produto(s) no carrinho</p>
      </Container>
    </Imagem>
  )
}

export default MassasHeader

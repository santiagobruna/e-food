import { Banner, BannerContainer, Container, Imagem, SubTitle, Title } from './style';
import { Logo } from '../../styles';
import logo from '../../assets/logo-eFood.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../store';
import { openCart } from '../../store/reducers/cart';

type MassasHeaderProps = {
  title: string;
  subtitle: string;
  backgroundImage: string;
};

const MassasHeader = ({ title, subtitle, backgroundImage }: MassasHeaderProps) => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootReducer) => state.cart.items);

  const handleOpenCart = () => {
    dispatch(openCart());
  };

  return (
    <div>
      <Imagem>
        <Container>
          <Link to="/">Restaurantes</Link>
          <Logo src={logo} alt="Logo E-food" />
          {/* Tornando o texto clicável e acessível */}
          <p
            onClick={handleOpenCart}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleOpenCart();
              }
            }}
            style={{ cursor: 'pointer' }}
            aria-label="Abrir carrinho"
          >
            {items.length} produto(s) no carrinho
          </p>
        </Container>
      </Imagem>

      <Banner style={{ backgroundImage: `url(${backgroundImage})` }}>
        <BannerContainer>
          <Title>{title}</Title>
          <SubTitle>{subtitle}</SubTitle>
        </BannerContainer>
      </Banner>
    </div>
  );
};

export default MassasHeader;

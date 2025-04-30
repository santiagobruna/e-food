import logo from '../../assets/logo-eFood.png';
import { Imagem, Title } from './style';
import { Logo } from '../../styles';

const Header = () => {
    return (
        <Imagem>
            <div className='container'>
                <Logo src={logo} alt="Logo E-food" />
                <Title>
                    Viva experiências gastronômicas no conforto da sua casa
                </Title>
            </div>
        </Imagem>
    )
}

export default Header;
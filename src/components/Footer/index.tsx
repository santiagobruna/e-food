import logo from '../../assets/logo-eFood.png';
import instagram from '../../assets/instagram.png';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import { Content, Description, Link, List } from './style';
import { Logo } from '../../styles';
const Footer = () => {
    return(
            <Content className='container'>
                <Logo  src={logo} alt="Logo E-food" />
                <List>
                    <li>
                        <Link href="#">
                            <img src={instagram} alt="Ícone instagram" />
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <img src={facebook} alt="Ícone facebook" />
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <img src={twitter} alt="Ícone twitter" />
                        </Link>
                    </li>
                </List>
                <Description>
                A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. 
                </Description>
                </Content>
    )
}

export default Footer;
import { CardProduct, Container, Image, TitleFood, Description, StyledLink, Infos } from "./style";
import Tag from "../Tag";
import estrela from '../../assets/estrela.png'
import { Link } from "react-router-dom";

type Props = {
    id: number;
    titulo: string;
    destacado?: boolean;
    tipo?: string;
    avaliacao?: string;
    descricao: string;
    capa: string;
    variant?: 'default' | 'large';
    link: string;
    usarLink?: boolean;
    onClick?: () => void
}

const Product = ({ id, titulo, destacado, tipo, avaliacao, descricao, capa, variant= 'large', link, onClick, usarLink}: Props) => {
    const getDescription = (description: string) => {
        if(description.length > 130){
            return description.slice(0, 125) + '...'
        }
        return description
    }
    const infos = destacado ? ["Destaque da semana", tipo] : [tipo];
    return (
        <Container>
            <CardProduct variant={variant}>
                <Image src={capa} alt={titulo} />
                <div className="content">
                    <div className="content-text">
                        <TitleFood>{titulo}</TitleFood>
                        {avaliacao && (
                            <div className="assessment">
                                <span>{avaliacao}</span>
                                <img src={estrela} alt="Avaliação" />
                            </div>
                        )}
                    </div>
                    {infos && infos.length > 0 && (
                        <Infos>
                            {infos.map((info, index) => (
                            <Tag key={`${info}-${index}`} size={infos.length === 1 ? 'small' : (index === 0 ? 'big' : 'small')}>
                            {info}
                            </Tag>
                            ))}
                        </Infos>
                    )}
                    <Description> 
                        {getDescription(descricao)}
                    </Description>
                    {usarLink ? (
                        <StyledLink as={Link} to={`/product/${id}`}>
                            {link}
                        </StyledLink>
                        ) : (
                        <StyledLink as="button" onClick={onClick}>
                            {link}
                        </StyledLink>
                    )}
                </div>
            </CardProduct>
        </Container>
    )
}
export default Product;
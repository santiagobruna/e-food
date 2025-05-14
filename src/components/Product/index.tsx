import { CardProduct, Container, Image, TitleFood, Description, StyledLink, Infos } from "./style";
import Tag from "../Tag";
import estrela from '../../assets/estrela.png'

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
}

const Product = ({ id, titulo, destacado, tipo, avaliacao, descricao, capa, variant= 'large', link}: Props) => {
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
                            <Tag key={info} size={infos.length === 1 ? 'small' : (index === 0 ? 'big' : 'small')}>
                                {info}
                            </Tag>
                            ))}
                        </Infos>
                    )}
                    <Description> 
                        {getDescription(descricao)}
                    </Description>
                    <StyledLink to={`/product/${id}`}>{link}</StyledLink>
                </div>
            </CardProduct>
        </Container>
    )
}
export default Product;
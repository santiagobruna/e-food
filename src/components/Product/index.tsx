import { CardProduct, Container, Image, TitleFood, Description, Link, Infos } from "./style";
import Tag from "../Tag";
import estrela from '../../assets/estrela.png'

type Props = {
    title: string;
    description: string;
    infos?: string[];
    image: string;
    assessment?: string;
    link: string;
    variant?: 'default' | 'large';
}

const Product = ({title, assessment,link,description, infos, image, variant= 'large'}: Props) => {
    return (
        <Container>
            <CardProduct variant={variant}>
                <Image src={image} alt={title} />
                <div className="content">
                    <div className="content-text">
                        <TitleFood>{title}</TitleFood>
                        {assessment && (
                            <div className="assessment">
                                <span>{assessment}</span>
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
                        {description}
                    </Description>
                    <Link href="/profile">{link}</Link>
                </div>
            </CardProduct>
        </Container>
    )
}
export default Product;
import Food from "../../models/Food";
import Product from "../Product";
import { Container } from "../Product/style";

export type Props = {
    food: Food[];
}

const ProductList = ({food}: Props) => {
    return (
        <Container>
            {food.map(f => (
                <Product
                key={f.id}
                title={f.title}
                description={f.description}
                infos={f.infos}
                image={f.image}
                link={f.link}
                assessment={f.assessment}
                />
            ))}
            
        </Container>
    )
}

export default ProductList;
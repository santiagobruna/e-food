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
                description={f.descrption}
                infos={f.infos}
                image={f.image}
                assessment={f.assessment}
                />
            ))}
            
        </Container>
    )
}

export default ProductList;
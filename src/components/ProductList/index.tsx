
import { Food } from "../../pages/Home";
import Product from "../Product";
import { Container } from "../Product/style";

export type Props = {
    food: Food[];
}

const ProductList = ({food}: Props) => {
    return (
        <Container>
            {food.map(f => (
                <li key={f.id}>
                    <Product
                    id={f.id}
                    titulo={f.titulo}
                    descricao={f.descricao}
                    tipo={f.tipo}
                    link="Saiba mais"
                    usarLink={true}
                    capa={f.capa}
                    avaliacao={f.avaliacao}
                    destacado={f.destacado}
                    />
                </li>
            ))}
            
        </Container>
    )
}

export default ProductList;
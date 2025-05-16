import { Food } from "../../pages/Home";
import Product from "../Product";
import { Container } from "./style";

type Props = {
    massa: Food['cardapio'];
}

const MassasList  = ({massa} : Props) => {
    return(
        <Container>
            {massa.map((item) => (
                <Product
                    id={item.id}
                    titulo={item.nome}
                    capa={item.foto}
                    descricao={item.descricao}
                    link='Mais detalhes'
                    variant="default"                
                    />
            ))}
        </Container>
    )
}
export default MassasList ;
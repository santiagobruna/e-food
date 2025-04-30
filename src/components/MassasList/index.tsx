import Product from "../Product";
import Food from "../../models/Food";
import { Container } from "./style";

export type Props = {
    massa: Food[];
}

const MassasList  = ({massa} : Props) => {
    return(
        <Container>
            {massa.map((item) => (
                <Product
                    key={item.id}
                    title={item.title}
                    image={item.image}
                    description={item.description}
                    link={item.link}
                    assessment={item.assessment}
                    infos={item.infos}
                    variant="default"
                />
            ))}
        </Container>
    )
}
export default MassasList ;
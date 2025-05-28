import { useState } from "react";
import { Food } from "../../pages/Home";
import Modal from "../Modal";
import Product from "../Product";
import { Container } from "./style";

type Props = {
    massa: Food['cardapio'];
}

const MassasList  = ({massa} : Props) => {
    const [modalAberto, setModalAberto] = useState(false)
    const [produtoIdSelecionado, setProdutoIdSelecionado] = useState<number | null>(null)
    const abrirModal = (id: number) => {
        setProdutoIdSelecionado(id)
        setModalAberto(true)
    }

    const fecharModal = () => {
        setProdutoIdSelecionado(null)
        setModalAberto(false)
    }
    return(
        <Container>
            {massa.map((item) => (
                <Product
                    key={item.id}
                    id={item.id}
                    titulo={item.nome}
                    capa={item.foto}
                    descricao={item.descricao}
                    link='Mais detalhes'
                    variant="default"  
                    usarLink={false}  
                    onClick={() => abrirModal(item.id)}            
                    />
            ))}
            {modalAberto && produtoIdSelecionado !== null && (
                <Modal
                    id={produtoIdSelecionado} // Passa apenas o ID para o modal
                    onClose={fecharModal} food={{
                        id: 0,
                        titulo: "",
                        destacado: false,
                        tipo: "",
                        avaliacao: "",
                        descricao: "",
                        capa: "",
                        cardapio: []
                    }}                />
            )}
        </Container>
    )
}
export default MassasList ;
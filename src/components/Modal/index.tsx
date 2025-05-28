import { useEffect, useState } from 'react'
import {
  Overlay,
  Content,
  Image,
  Details,
  Title,
  Description,
  Portion,
  AddButton,
  CloseButton
} from './style'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import { Food } from '../../pages/Home'

export type ProdutoAPI = {
  id: number
  nome: string
  descricao: string
  foto: string
  porcao: string
  preco: number
}

type ModalProps = {
  id: number
  onClose: () => void
  food: Food
}
const Modal = ({ id, onClose }: ModalProps) => {
  const [produto, setProduto] = useState<ProdutoAPI | null>(null)
  const dispatch = useDispatch();
  const addToCart = () => {
    console.log('Produto para adicionar:', produto)
    if (produto) {
      dispatch(add(produto))
      dispatch(open())
    }
  }
  useEffect(() => {
    const buscarProduto = async () => {
      try {
        const resposta = await fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
        const restaurantes = await resposta.json()

        // Procura o produto pelo ID em todos os cardápios
        let encontrado = null
        for (const restaurante of restaurantes) {
          encontrado = restaurante.cardapio.find((item: ProdutoAPI) => item.id === id)
          if (encontrado) break
        }

        if (encontrado) {
          setProduto(encontrado)
        } else {
          console.warn('Produto não encontrado.')
        }
      } catch (erro) {
        console.error('Erro ao buscar produto:', erro)
      }
    }
    buscarProduto();
  }, [id])

  if (!produto) return null 

  return (
    <Overlay onClick={onClose}>
      <Content onClick={(e) => e.stopPropagation()}>
        <Image src={produto.foto} alt={produto.nome} />
        <Details>
          <div>
            <Title>{produto.nome}</Title>
            <Description>{produto.descricao}</Description>
            <Portion>Serve: {produto.porcao}</Portion>
          </div>
          <AddButton onClick={addToCart}>
            Adicionar ao carrinho - R$ {produto.preco.toFixed(2).replace('.', ',')}
          </AddButton>
        </Details>
        <CloseButton onClick={onClose}>×</CloseButton>
      </Content>
    </Overlay>
  )
}

export default Modal

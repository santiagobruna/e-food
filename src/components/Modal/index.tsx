import { useEffect, useState } from 'react';
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
} from './style';
import { useDispatch } from 'react-redux';
import { addItem, openCart } from '../../store/reducers/cart';
import { Food } from '../../pages/Home';

export type ProdutoAPI = {
  prices?: any; 
  id: number;
  nome: string;
  descricao: string;
  foto: string;
  porcao: string;
  preco: number;
};

type ModalProps = {
  id: number;
  onClose: () => void;
  food?: Food;
};

const Modal = ({ id, onClose }: ModalProps) => {
  const [produto, setProduto] = useState<ProdutoAPI | null>(null);
  const dispatch = useDispatch();

  const addToCart = () => {
    if (!produto) return;

    dispatch(addItem(produto));
    dispatch(openCart());
  };

  useEffect(() => {
    async function fetchProduto() {
      try {
        const res = await fetch('https://ebac-fake-api.vercel.app/api/efood/restaurantes');
        const restaurantes = await res.json();

        let encontrado: ProdutoAPI | null = null;

        for (const restaurante of restaurantes) {
          encontrado = restaurante.cardapio.find((item: ProdutoAPI) => item.id === id);
          if (encontrado) break;
        }

        if (encontrado) {
          setProduto(encontrado);
        } else {
          console.warn('Produto não encontrado.');
        }
      } catch (error) {
        console.error('Erro ao buscar produto:', error);
      }
    }
    fetchProduto();
  }, [id]);

  if (!produto) return null;

  const precoFormatado = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(produto.preco);

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
            Adicionar ao carrinho - {precoFormatado}
          </AddButton>
        </Details>
        <CloseButton onClick={onClose} aria-label="Fechar modal">×</CloseButton>
      </Content>
    </Overlay>
  );
};

export default Modal;

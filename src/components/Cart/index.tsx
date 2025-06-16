import { useDispatch, useSelector } from 'react-redux';
import { Button, CartContainer, CartItem, Overlay, Prices, SideBar } from './style';
import { RootReducer } from '../../store';
import { closeCart, removeItem, showCheckout } from '../../store/reducers/cart';

// eslint-disable-next-line react-refresh/only-export-components
export const formatPrice = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(preco);
};

const Cart = () => {
    const { isCartOpen, items } = useSelector((state: RootReducer) => state.cart);
    const dispatch = useDispatch();

    const close = () => {
        dispatch(closeCart());
    };

    const getTotalPrice = () => {
        return items.reduce((acc, item) => acc + item.preco, 0);
    };

    const handleContinueDelivery = () => {
        dispatch(showCheckout());
    };

    return (
        <CartContainer className={isCartOpen ? 'is-open' : ''}>
        <Overlay onClick={close} />
        <SideBar>
            <button className="btn-close" onClick={close}>
            Fechar
            </button>
            <ul>
            {items.map((item) => (
                <CartItem key={item.id}>
                <img src={item.foto} alt={item.nome} />
                <div>
                    <h3>{item.nome}</h3>
                    <span>{formatPrice(item.preco)}</span>
                </div>
                <button aria-label={`Remover ${item.nome}`} onClick={() => dispatch(removeItem(item.id))}>
                    &times;
                </button>
                </CartItem>
            ))}
            </ul>
            <Prices>
            <span>Valor total</span>
            <span>{formatPrice(getTotalPrice())}</span>
            </Prices>
            <Button type="button" onClick={handleContinueDelivery}>
            Continuar com a entrega
            </Button>
        </SideBar>
        </CartContainer>
    );
};

export default Cart;

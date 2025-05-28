import { useDispatch, useSelector } from 'react-redux';
import { Button, CartContainer, CartItem, Overlay, Prices, SideBar } from './style';
import { RootReducer } from '../../store';
import { close, remove } from '../../store/reducers/cart';

export const formatPrice = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(preco)
}
const Cart = () => {
    const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
    const dispatch = useDispatch();
    const closeCart = () => {
        dispatch(close())
    }
    const getTotalPrice = () => {
        return items.reduce((acc, item) => acc + item.preco, 0)
    }

    return (
        <>
            <CartContainer className={isOpen ? 'is-open' : ''}>
                <Overlay onClick={closeCart}/>
                <SideBar>
                    <button className='btn-close' onClick={closeCart}>Fechar</button>
                        <ul>
                            {items.map((item) => (
                            <CartItem key={item.id}>
                                <img src={item.foto} alt={item.nome} />
                                <div>
                                    <h3>{item.nome}</h3>
                                    <span>{formatPrice(item.preco)}</span>
                                </div>
                                <button onClick={() => dispatch(remove(item.id))} />
                            </CartItem>
                            ))}
                        </ul>
                            <Prices>
                                <span>Valor total</span>
                                <span>{formatPrice(getTotalPrice())} {''}</span>
                            </Prices>
                            <Button type="button">
                                Continuar com a entrega
                            </Button>
                    </SideBar>
                </CartContainer>
        </>
    )
}
export default Cart;
import { useSelector } from "react-redux";
import { RootReducer } from "../store";
import Cart from "../components/Cart";
import Checkout from "../components/Checkout";
import Payment from "../components/Payment";
import { Mensagem } from "../components/OrderConfirmation";

const CartModalManager: React.FC = () => {
    const { isCartOpen, isCheckoutOpen, isPaymentOpen, isConfirmOpen } = useSelector(
        (state: RootReducer) => state.cart
    );

    return (
        <>
        {/* Se chegou no final, só renderiza Mensagem */}
        {isConfirmOpen && <Mensagem />}

        {/* Fluxo normal */}
        {!isConfirmOpen && isPaymentOpen && <Payment />}
        {!isConfirmOpen && isCheckoutOpen && <Checkout />}
        {!isConfirmOpen && isCartOpen && <Cart />}
        </>
    );
};

export default CartModalManager;

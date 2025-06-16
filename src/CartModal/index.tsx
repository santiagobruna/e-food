import { useSelector } from "react-redux";
import { RootReducer } from "../store";
import Cart from "../components/Cart";
import Checkout from "../components/Checkout";
import Payment from "../components/Payment";

const CartModalManager: React.FC = () => {
    const { isCartOpen, isCheckoutOpen, isPaymentOpen, isConfirmOpen } = useSelector(
        (state: RootReducer) => state.cart
    );

    return (
        <>
        {/* Mostra o Cart se estiver aberto e as outras telas fechadas */}
        {isCartOpen && !isCheckoutOpen && !isPaymentOpen && !isConfirmOpen && <Cart />}

        {/* Mostra o Checkout se estiver aberto */}
        {isCheckoutOpen && !isPaymentOpen && !isConfirmOpen && <Checkout />}

        {/* Mostra o Payment se estiver aberto */}
        {isPaymentOpen && !isConfirmOpen && <Payment />}

        {/* Pode incluir o Confirm se tiver esse componente */}
        {/* {isConfirmOpen && <ConfirmComponent />} */}
        </>
    );
};

export default CartModalManager;

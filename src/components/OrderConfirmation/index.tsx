import { useDispatch, useSelector } from "react-redux";
import { closeConfirmAndClearCart } from "../../store/reducers/cart"; // importa sua action certinha
import { RootReducer } from "../../store";
import { Button } from "../Cart/style";
import { ButtonContainer } from "../Checkout/style";
import { Title } from "./style";
import styled from "styled-components";
import { CartContainerMensagem, OverlayMensagem, SideBarMensagem } from "./style";

const Text = styled.p`
    margin-bottom: 12px;
`;

export const Mensagem = () => {
    const dispatch = useDispatch();
    const { isConfirmOpen, orderId } = useSelector((state: RootReducer) => state.cart);

    const handleCloseConfirm = () => {
        dispatch(closeConfirmAndClearCart());
    };

    return (
        <CartContainerMensagem className={isConfirmOpen ? "is-open" : ""}>
            <OverlayMensagem  />
            <SideBarMensagem  className={isConfirmOpen ? "is-open" : ""}>
                <Title>
                    Pedido realizado - <span>{orderId ?? '----'}</span>
                </Title>
                <Text>
                    Estamos felizes em informar que seu pedido já está em processo de preparação e, em
                    breve, será entregue no endereço fornecido.
                </Text>
                <Text>
                    Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar
                    cobranças extras.
                </Text>
                <Text>
                    Lembre-se da importância de higienizar as mãos após o recebimento do pedido,
                    garantindo assim sua segurança e bem-estar durante a refeição.
                </Text>
                <Text>
                    Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom
                    apetite!
                </Text>
                <ButtonContainer>
                    <Button type="button" onClick={handleCloseConfirm}>
                        Concluir
                    </Button>
                </ButtonContainer>
            </SideBarMensagem>
        </CartContainerMensagem>
    );
};

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Button, CartContainer, Overlay, SideBar } from "../../components/Cart/style";
import { ButtonContainer, Group, Row, Title } from "../Checkout/style";
import { RootReducer } from "../../store";
import { backToCheckoutFromPayment, closeConfirmation , confirmPaymentSuccess} from "../../store/reducers/cart";
import { formatPrice } from "../Cart";
import styled from "styled-components";
import { usePurchaseMutation } from "../../services/api";

const Text = styled.p`
    margin-bottom: 12px;
`;

const Payment = () => {
    const dispatch = useDispatch();
    const { isPaymentOpen, items, isSuccess } = useSelector((state: RootReducer) => state.cart);
    const [purchase] = usePurchaseMutation();

    const [paymentData, setPaymentData] = useState({
        nome: '',
        numeros: '',
        cvv: '',
        mes: '',
        ano: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setPaymentData((prev) => ({
        ...prev,
        [id]: value,
        }));
    };

    const handleBackToCheckout = () => {
        dispatch(backToCheckoutFromPayment());
    };

    const handleCloseConfirm = () => {
        dispatch(closeConfirmation());
    };

    const getTotalPrice = () => {
        return items.reduce((acc, item) => acc + item.preco, 0);
    };

    const handleToConfirm = async () => {
        try {
        await purchase({
            products: items.map((item) => ({
            id: item.id,
            price: item.preco,
            })),
            delivery: {
            receiver: 'Cliente Genérico',
            address: {
                description: 'Rua Exemplo',
                city: 'Rio de Janeiro',
                zipCode: '12345-678',
                number: 123,
                complement: 'Apto 101',
            },
            },
            payment: {
            card: {
                name: paymentData.nome,
                number: paymentData.numeros,
                code: Number(paymentData.cvv),
                expires: {
                month: Number(paymentData.mes),
                year: Number(paymentData.ano),
                },
            },
            },
        }).unwrap();

        dispatch(confirmPaymentSuccess());
        } catch (error) {
        console.error("Erro ao finalizar pagamento:", error);
        alert("Erro ao finalizar o pagamento. Tente novamente.");
        }
    };

    return (
        <>
        {isSuccess ? (
            <CartContainer className="is-open">
            <Overlay />
            <SideBar className="is-open">
                <Title>
                Pedido realizado - <span>#21232</span>
                </Title>
                <p>
                Estamos felizes em informar que seu pedido já está em processo de preparação e,
                em breve, será entregue no endereço fornecido.
                </p>
                <Text>
                Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar
                cobranças extras.
                </Text>
                <Text>
                Lembre-se da importância de higienizar as mãos após o recebimento do pedido,
                garantindo assim sua segurança e bem-estar durante a refeição.
                </Text>
                <Text>
                Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica.
                Bom apetite!
                </Text>
                <ButtonContainer>
                <Button type="button" onClick={handleCloseConfirm}>
                    Concluir
                </Button>
                </ButtonContainer>
            </SideBar>
            </CartContainer>
        ) : (
            <CartContainer className={isPaymentOpen ? "is-open" : ""}>
            <Overlay />
            <SideBar>
                <button className="btn-close" onClick={handleBackToCheckout}>
                Fechar
                </button>
                <Title>
                Pagamento <span>- Valor a pagar {formatPrice(getTotalPrice())}</span>
                </Title>
                <form>
                <Group maxWidth="100%">
                    <label htmlFor="nome">Nome no Cartão</label>
                    <input
                    type="text"
                    id="nome"
                    value={paymentData.nome}
                    onChange={handleChange}
                    />
                </Group>
                <Row marginTop="8px">
                    <Group maxWidth="228px">
                    <label htmlFor="numeros">Número do cartão</label>
                    <input
                        type="text"
                        id="numeros"
                        value={paymentData.numeros}
                        onChange={handleChange}
                    />
                    </Group>
                    <Group maxWidth="87px">
                    <label htmlFor="cvv">CVV</label>
                    <input
                        type="text"
                        id="cvv"
                        value={paymentData.cvv}
                        onChange={handleChange}
                    />
                    </Group>
                </Row>
                <Row marginTop="8px">
                    <Group maxWidth="156px">
                    <label htmlFor="mes">Mês de vencimento</label>
                    <input
                        type="text"
                        id="mes"
                        value={paymentData.mes}
                        onChange={handleChange}
                    />
                    </Group>
                    <Group maxWidth="156px">
                    <label htmlFor="ano">Ano de vencimento</label>
                    <input
                        type="text"
                        id="ano"
                        value={paymentData.ano}
                        onChange={handleChange}
                    />
                    </Group>
                </Row>
                </form>

                <ButtonContainer>
                <Button type="button" onClick={handleToConfirm}>
                    Finalizar pagamento
                </Button>
                <Button type="button" onClick={handleBackToCheckout}>
                    Voltar para a edição de endereço
                </Button>
                </ButtonContainer>
            </SideBar>
            </CartContainer>
        )}
        </>
    );
};

export default Payment;

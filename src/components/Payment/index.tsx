import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { usePurchaseMutation } from "../../services/api";
import { RootReducer } from "../../store";
import {
    backToCheckoutFromPayment,
    confirmPaymentSuccess,
    setOrderId,
} from "../../store/reducers/cart";
import { formatPrice } from "../Cart";
import { Button, CartContainer, Overlay, SideBar } from "../../components/Cart/style";
import { ButtonContainer, Group, Row, Title } from "../Checkout/style";
import * as Yup from "yup";

const Payment = () => {
    const dispatch = useDispatch();
    const { isPaymentOpen, items } = useSelector(
        (state: RootReducer) => state.cart
    );
    const [purchase, { isLoading }] = usePurchaseMutation();

    const getTotalPrice = () => {
        return items.reduce((acc, item) => acc + item.preco, 0);
    };

    const form = useFormik({
        initialValues: {
            nome: "",
            numeros: "",
            cvv: "",
            mes: "",
            ano: ""
        },
        validationSchema: Yup.object({
            nome: Yup.string().min(5, "Nome deve ter no mínimo 5 caracteres").required("Obrigatório"),
            numeros: Yup.string().matches(/^\d{16}$/, "Número do cartão inválido").required("Obrigatório"),
            cvv: Yup.string().matches(/^\d{3,4}$/, "CVV inválido").required("Obrigatório"),
            mes: Yup.number()
                .min(1, "Mês inválido")
                .max(12, "Mês inválido")
                .required("Obrigatório"),
            ano: Yup.number()
                .min(new Date().getFullYear(), "Ano inválido")
                .max(new Date().getFullYear() + 10, "Ano inválido")
                .required("Obrigatório")
        }),
        onSubmit: async (values) => {
            try {
                const payload = {
                    products: items.map((item) => ({
                        id: item.id,
                        price: item.preco
                    })),
                    delivery: {
                        receiver: 'Nome Fictício',
                        address: {
                            description: 'Rua Fictícia',
                            number: 123,
                            zipCode: '00000-000',
                            city: 'Cidade Exemplo',
                            complement: ''
                        }
                    },
                    payment: {
                        card: {
                            name: values.nome,
                            number: values.numeros,
                            code: Number(values.cvv),
                            expires: {
                                month: Number(values.mes),
                                year: Number(values.ano)
                            }
                        }
                    }
                };

                const response = await purchase(payload).unwrap();
                dispatch(setOrderId(response.orderId));
                dispatch(confirmPaymentSuccess());
            } catch (error) {
                console.log(error)
                alert("Erro ao processar pagamento. Tente novamente.");
            }
        }
    });

    const handleBackToCheckout = () => {
        dispatch(backToCheckoutFromPayment());
    };

    return (
        <>
            <CartContainer  className={isPaymentOpen ? "is-open" : ""}>
                    <Overlay />
                    <SideBar className="is-open">
                        <button className="btn-close" onClick={handleBackToCheckout}>
                            Fechar
                        </button>
                        <Title>
                            Pagamento <span>- Valor a pagar {formatPrice(getTotalPrice())}</span>
                        </Title>

                        <form onSubmit={form.handleSubmit}>
                            <Group maxwidth="100%">
                                <label htmlFor="nome">Nome no Cartão</label>
                                <input
                                    type="text"
                                    id="nome"
                                    name="nome"
                                    value={form.values.nome}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    className={form.touched.nome && form.errors.nome ? "error" : ""}
                                />
                                {form.touched.nome && form.errors.nome && (
                                    <span className="error-message">{form.errors.nome}</span>
                                )}
                            </Group>

                            <Row margintop="8px">
                                <Group maxwidth="228px">
                                    <label htmlFor="numeros">Número do cartão</label>
                                    <input
                                        type="text"
                                        id="numeros"
                                        name="numeros"
                                        value={form.values.numeros}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        className={form.touched.numeros && form.errors.numeros ? "error" : ""}
                                        placeholder="1234 5678 9012 3456"
                                    />
                                    {form.touched.numeros && form.errors.numeros && (
                                        <span className="error-message">{form.errors.numeros}</span>
                                    )}
                                </Group>

                                <Group maxwidth="87px">
                                    <label htmlFor="cvv">CVV</label>
                                    <input
                                        type="text"
                                        id="cvv"
                                        name="cvv"
                                        value={form.values.cvv}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        className={form.touched.cvv && form.errors.cvv ? "error" : ""}
                                        placeholder="123"
                                    />
                                    {form.touched.cvv && form.errors.cvv && (
                                        <span className="error-message">{form.errors.cvv}</span>
                                    )}
                                </Group>
                            </Row>

                            <Row margintop="8px">
                                <Group maxwidth="156px">
                                    <label htmlFor="mes">Mês de vencimento</label>
                                    <input
                                        type="text"
                                        id="mes"
                                        name="mes"
                                        value={form.values.mes}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        className={form.touched.mes && form.errors.mes ? "error" : ""}
                                        placeholder="02"
                                    />
                                    {form.touched.mes && form.errors.mes && (
                                        <span className="error-message">{form.errors.mes}</span>
                                    )}
                                </Group>

                                <Group maxwidth="156px">
                                    <label htmlFor="ano">Ano de vencimento</label>
                                    <input
                                        type="text"
                                        id="ano"
                                        name="ano"
                                        value={form.values.ano}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        className={form.touched.ano && form.errors.ano ? "error" : ""}
                                        placeholder="2025"
                                    />
                                    {form.touched.ano && form.errors.ano && (
                                        <span className="error-message">{form.errors.ano}</span>
                                    )}
                                </Group>
                            </Row>

                            <ButtonContainer>
                                <Button type="submit" disabled={isLoading}>
                                    Finalizar pagamento
                                </Button>
                                <Button type="button" onClick={handleBackToCheckout}>
                                    Voltar para a edição de endereço
                                </Button>
                            </ButtonContainer>
                        </form>
                    </SideBar>
            </CartContainer> 
        </>
    );
};

export default Payment;
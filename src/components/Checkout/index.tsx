/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { CartContainer, Overlay, SideBar } from "../Cart/style";
import { ButtonContainer, CheckoutButton, Group, Row, Title } from "./style";
import { backToCartFromCheckout, closeCheckout, proceedToPayment } from "../../store/reducers/cart";
import { RootReducer } from "../../store";
import * as Yup from 'yup'
// import InputMask from 'react-input-mask'
import { useFormik } from "formik";
import { usePurchaseMutation } from "../../services/api";


const Checkout = () => {
    const dispatch = useDispatch();
    const { isCheckoutOpen, items } = useSelector((state: RootReducer) => state.cart)
    const [, { isLoading }] = usePurchaseMutation();

    
    const form = useFormik({
        initialValues: {
            fullName: '',
            addressDescription: '',
            city: '',
            zipCode: '',
            addressNumber: '',
            complement: '',
        },
        validationSchema: Yup.object({
            fullName: Yup.string().min(5, 'O nome deve ter pelo menos 5 caracteres').required('Campo obrigatório'),
            addressDescription: Yup.string().min(5, 'O endereço deve ter pelo menos 5 caracteres').required('Campo obrigatório'),
            city: Yup.string().min(3, 'A cidade deve ter pelo menos 3 caracteres').required('Campo obrigatório'),
            zipCode: Yup.string().matches(/^\d{5}-\d{3}$/, 'CEP inválido').required('Campo obrigatório'),
            addressNumber: Yup.number().typeError('O número deve ser um valor numérico').required('Campo obrigatório'),
            complement: Yup.string().optional(),
        }),
        onSubmit: async (values) => {
            console.log("Submit disparado com valores:", values);
            try {
                    const payload = {
                        products: items.map((item) => ({
                        id: item.id,
                        price: item.preco,
                        })),
                        delivery: {
                        receiver: values.fullName,
                        address: {
                            description: values.addressDescription,
                            number: Number(values.addressNumber),
                            zipCode: values.zipCode,
                            city: values.city,
                            complement: values.complement,
                        },
                        },
                        payment: { 
                            card: {
                                name: "Teste Teste",
                                number: "1234567812345678",
                                code: 123,
                                expires: {
                                    month: 12,
                                    year: 2025
                                }
                            }
                        }
                    };

                dispatch(proceedToPayment());
            } catch (error) {
                alert("Ocorreu um erro ao finalizar a compra. Tente novamente.");
                console.error("Erro ao finalizar compra:", error);
            }
            },
    });
    const handleCloseCheckout = () => {
        dispatch(closeCheckout()); 
    };

    // Função para voltar para o carrinho
    const handleBackToCart = () => {
        dispatch(backToCartFromCheckout()); 
    };
    return (
        <CartContainer className={isCheckoutOpen ? 'is-open' : ''}>
            <Overlay onClick={handleBackToCart} />
            <SideBar>
                <button className="btn-close" onClick={handleCloseCheckout}>Fechar</button>
                <Title>Entrega</Title>
                <form onSubmit={form.handleSubmit}>
                    <Group maxwidth="100%">
                        <label htmlFor="fullName">Quem irá receber</label>
                        <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={form.values.fullName}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={form.touched.fullName && form.errors.fullName ? 'error' : ''}
                        />
                            {form.touched.fullName && form.errors.fullName && (
                                <span className="error-message">{form.errors.fullName}</span>
                            )}
                        </Group>

                        <Group maxwidth="100%">
                            <label htmlFor="addressDescription">Endereço</label>
                            <input
                            type="text"
                            id="addressDescription"
                            name="addressDescription"
                            value={form.values.addressDescription}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={form.touched.addressDescription && form.errors.addressDescription ? 'error' : ''}
                            />
                            {form.touched.addressDescription && form.errors.addressDescription && (
                            <span className="error-message">{form.errors.addressDescription}</span>
                            )}
                        </Group>

                        <Group maxwidth="100%">
                            <label htmlFor="city">Cidade</label>
                            <input
                            type="text"
                            id="city"
                            name="city"
                            value={form.values.city}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={form.touched.city && form.errors.city ? 'error' : ''}
                            />
                            {form.touched.city && form.errors.city && (
                            <span className="error-message">{form.errors.city}</span>
                            )}
                        </Group>

                        <Row margintop="8px">
                            <Group maxwidth="156px">
                            <label htmlFor="zipCode">CEP</label>
                            <input
                                type="text"  // NÃO number
                                id="zipCode"
                                name="zipCode"
                                value={form.values.zipCode}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                className={form.touched.zipCode && form.errors.zipCode ? 'error' : ''}
                                placeholder="00000-000"
                            />
                            {form.touched.zipCode && form.errors.zipCode && (
                                <span className="error-message">{form.errors.zipCode}</span>
                            )}
                            </Group>

                            <Group maxwidth="156px">
                            <label htmlFor="addressNumber">Número</label>
                            <input
                                type="number"
                                id="addressNumber"
                                name="addressNumber"
                                value={form.values.addressNumber}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                className={form.touched.addressNumber && form.errors.addressNumber ? 'error' : ''}
                            />
                            {form.touched.addressNumber && form.errors.addressNumber && (
                                <span className="error-message">{form.errors.addressNumber}</span>
                            )}
                            </Group>
                        </Row>

                        <Group maxwidth="100%">
                            <label htmlFor="complement">Complemento (opcional)</label>
                            <input
                            type="text"
                            id="complement"
                            name="complement"
                            value={form.values.complement}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            />
                        </Group>

                            <ButtonContainer>
                                <CheckoutButton
                                type="submit"
                                disabled={isLoading}
                                title="Clique aqui para continuar com o pagamento"
                                >
                                Continuar com o pagamento
                                </CheckoutButton>
                                <CheckoutButton type="button" onClick={handleBackToCart}>
                                Voltar para o carrinho
                                </CheckoutButton>
                            </ButtonContainer>
                        </form>
                    </SideBar>
            </CartContainer>
                    );
};

export default Checkout;

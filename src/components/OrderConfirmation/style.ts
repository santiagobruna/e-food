import styled from "styled-components";
import { Overlay as BaseOverlay, SideBar as BaseSideBar, CartContainer as BaseCartContainer } from "../Cart/style";

// Aumenta o z-index geral do container para ficar na frente
export const CartContainerMensagem = styled(BaseCartContainer)`
    z-index: 1500;
`;

// Overlay com z-index menor que o sidebar, mas maior que o fundo da aplicação
export const OverlayMensagem = styled(BaseOverlay)`
    z-index: 1500;
`;

// Sidebar precisa ficar acima do overlay
export const SideBarMensagem = styled(BaseSideBar)`
    z-index: 1600;
`;
export const Title = styled.h2`
    margin-bottom: 16px;
    font-weight: 700;
    font-size: 16px;
`
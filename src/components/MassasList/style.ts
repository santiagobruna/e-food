import styled from "styled-components";
import { CardProduct, Description, Image, StyledLink, TitleFood } from "../Product/style";
import { cores } from "../../styles";
import { Container as BaseContainer } from "../Product/style";
import { TagContainer } from "../Tag/style";

export const Container = styled(BaseContainer)`
    grid-template-columns: repeat(3, 1fr);
    ${CardProduct}{
        color: #fff;
        background-color: ${cores.pink};
        padding: 8px;
    }
    ${Image}{
        width: 304px;
        height: 167px;
        max-width: 100%;
        object-fit: cover;
    }
    ${TagContainer}{
        display: none;
    }
    ${TitleFood}{
        font-size: 16px;
        font-weight: 900;
    }
    ${Description}{
        font-size: 14px;
        padding: 0;
        margin: 8px 0;
    }
    ${StyledLink}{
        display: block;
        text-align: center;
        background-color: ${cores.ligthPink};
        color: ${cores.pink};
        font-weight: bold;
    }
`
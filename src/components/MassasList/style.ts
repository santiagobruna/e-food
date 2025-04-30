import styled from "styled-components";
import { CardProduct, Description, Link, TitleFood } from "../Product/style";
import { cores } from "../../styles";
import { Container as BaseContainer } from "../Product/style";

export const Container = styled(BaseContainer)`
    grid-template-columns: repeat(3, 1fr);
    ${CardProduct}{
        color: #fff;
        background-color: ${cores.pink};
        padding: 8px;
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
    ${Link}{
        display: block;
        text-align: center;
        background-color: ${cores.ligthPink};
        color: ${cores.pink};
        font-weight: bold;
    }
`
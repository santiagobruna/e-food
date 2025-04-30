import styled from "styled-components";
import { cores } from "../../styles";

export const Content = styled.div`
    background-color: ${cores.ligthPink};
    padding: 130px;
`
export const List = styled.ul`
    display: flex;
    gap: 8px;
    margin-top: 32px;
    margin-bottom: 80px;
`
export const Link = styled.a`
    img{
        width: 24px;
    }
`

export const Description = styled.p`
    max-width: 480px;
    width: 100%;
    font-size: 10px;
    font-weight: 400;
    text-align: center;
    line-height: 100%;
`
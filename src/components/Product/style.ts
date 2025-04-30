import styled from "styled-components";
import { cores } from "../../styles";
import { TagContainer } from "../Tag/style";

interface CardProductProps {
    variant?: 'default' | 'large';
}

export const Container = styled.div`
    max-width: 1240px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
    padding: 80px 20px 48px 20px;
    font-size: 14px;

    @media (max-width: 1038px) {
        display: block;
        margin-bottom: 0 auto;
        padding: 80px 6px; 
    }
`

export const CardProduct = styled.div<CardProductProps>`
    width: ${({ variant }) => (variant === 'large' ? '472px' : '320px')};
    height:  ${({ variant }) => (variant === 'large' ? ' 398px' : '338px')} ;
    max-width: 100%;
    border: 1px solid ${cores.pink};
    position: relative;
    margin: 0 auto;

    .content {
        padding-left: 8px;
        .content-text {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .assessment{
                display: flex;
                align-items: center;
                gap: 8px;

                img{
                    width: 21px;
                    padding-right: 8px;
                }
            }
        }
    }
    ${TagContainer} {
        margin-right: 8px;
    }
`  
export const Image = styled.img`
    width: 100%;
`
export const TitleFood = styled.h2`
    font-weight: bold;
    font-size: 18px;
`
export const Description = styled.p`
    max-width: 456px;
    width: 100%;
    font-weight: 400;
    padding: 16px 0;
`
export const Link = styled.a`
    background-color: ${cores.pink};
    color: #fff;
    font-weight: bold;
    padding: 4px 6px;
    text-decoration: none;
`
export const Infos = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
`
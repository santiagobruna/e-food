import styled from "styled-components";
import { cores } from "../../styles";

import close from '../../assets/lixeira.png'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const SideBar = styled.aside`
    max-width: 360px;
    width: 100%;
    background-color: ${cores.pink};
    z-index: 1;
    color: ${cores.white};
    position: relative;
    padding: 32px 8px 0 8px;

    .btn-close {
    position: absolute;
    top: 5px;
    right: 10px;
    border: none;
    cursor: pointer;
    background-color: ${cores.ligthPink};
    color: ${cores.pink};
    font-weight: bold;
    padding: 5px 10px;
    border-radius: 6px;
    }
`
export const CartItem = styled.li`
    display: flex;
    margin-top: 20px;
    padding: 8px 8px 12px 8px;
    position: relative;
    color: ${cores.pink};
    background-color: ${cores.ligthPink};
    img{
        width: 80px;
        height: 80px;
        object-fit: cover;
        margin-right: 8px;
    }
    h3{
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 16px;
    }
    span{
        font-size: 14px;
        font-weight: 400;
    }
    button {
    background-image: url(${close});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
    }
`
export const Prices = styled.p`
    font-weight: bold;
    font-size: 14px;
    color: ${cores.ligthPink};
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    span {
        font-size: 12px;
        color: ${cores.ligthPink};
    }
`
export const Button = styled.button`
    max-width: 100%;
    width: 100%;
    padding: 4px;
    cursor: pointer;
    border: none;
    color: ${cores.pink};
    background-color: ${cores.ligthPink};
    font-size: 14px;
    font-weight: bold;

`
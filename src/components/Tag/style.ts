import styled from "styled-components";

import { Props } from ".";
import { cores } from "../../styles";

export const TagContainer = styled.div<Props>`
    background-color: ${cores.pink};
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    padding: 6px 4px;
    width: ${props => props.size === 'big' ? '126px' : '66px'};
    height: 26px;
    display: inline-block;
    cursor: pointer;
    text-align: center;
`
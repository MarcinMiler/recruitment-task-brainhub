import styled from 'styled-components'

import { colors } from 'theme/variables'

export const Button = styled.button`
    width: 100%;
    height: 50px;
    margin: 20px 0;
    border-radius: 4px;
    border: none;
    background: ${colors.orangeGradient};
    font-size: 18px;
    color: ${colors.white};
    cursor: pointer;
`

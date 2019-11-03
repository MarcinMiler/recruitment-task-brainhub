import styled from 'styled-components'

import { colors } from 'theme/variables'

interface InputProps {
    error: boolean
}

export const Wrapper = styled.div`
    height: 105px;
`
export const Label = styled.p`
    margin: 0;
`
export const StyledInput = styled.input<InputProps>`
    width: 100%;
    height: 50px;
    margin-top: 10px;
    padding: 15px;
    border-radius: 4px;
    border: ${({ error }) =>
        error ? `1px solid ${colors.red}` : `1px solid ${colors.lightGray}`};
    font-size: 16px;
`
export const ErrorMessage = styled.p`
    margin-top: 5px;
    font-size: 12px;
    color: ${colors.red};
`

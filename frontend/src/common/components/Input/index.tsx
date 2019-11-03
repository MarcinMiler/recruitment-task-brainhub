import * as React from 'react'

import { Wrapper, StyledInput, Label, ErrorMessage } from './style'

interface Props {
    label: string
    errorMsg: string | null
}

export const Input: React.FC<Props> = ({ label, errorMsg, ...props }) => (
    <Wrapper>
        <Label>{label}</Label>
        <StyledInput error={!!errorMsg} {...props} />
        <ErrorMessage>{errorMsg}</ErrorMessage>
    </Wrapper>
)

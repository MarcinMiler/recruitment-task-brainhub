import * as React from 'react'

import { StyledInput, Label } from './style'

interface Props {
    label: string
    type?: string
}

export const Input: React.FC<Props> = ({ label, ...props }) => (
    <>
        <Label>{label}</Label>
        <StyledInput {...props} />
    </>
)

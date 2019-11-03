import * as React from 'react'
import { FieldProps } from 'formik'

import { Input } from '../Input'

interface Props {
    label: string
}

type ErrorMessage = string | null

export const FormikInput: React.FC<Props & FieldProps> = ({
    field,
    form: { errors, touched },
    ...props
}) => {
    const errorMsg = (touched[field.name] && errors[field.name]) as ErrorMessage

    return <Input errorMsg={errorMsg} {...field} {...props} />
}

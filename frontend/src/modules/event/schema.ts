import * as yup from 'yup'

import { requiredError, invalidEmail } from 'common/constans/errors'

export const eventInitialValues = {
    firstName: '',
    lastName: '',
    email: '',
    date: ''
}

export const eventSchema = yup.object().shape({
    firstName: yup.string().required(requiredError('First name')),
    lastName: yup.string().required(requiredError('Last name')),
    email: yup
        .string()
        .email(invalidEmail('Email'))
        .required(requiredError('Email')),
    date: yup.date().required(requiredError('Date'))
})

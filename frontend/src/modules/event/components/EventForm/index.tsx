import * as React from 'react'
import { Formik, Form, Field } from 'formik'

import { Button } from 'common/components/button'
import { FormikInput } from 'common/components/formikInput'
import { eventInitialValues, eventSchema } from 'modules/event/schema'
import { newEventAsync } from '../../event.actions'
import { FormWrapper, Header } from './style'

const form = [
    {
        name: 'firstName',
        label: 'First name',
        'data-testid': 'first-name'
    },
    {
        name: 'lastName',
        label: 'Last name',
        'data-testid': 'last-name'
    },
    {
        name: 'email',
        label: 'Email',
        'data-testid': 'email'
    },
    {
        name: 'date',
        label: 'Date',
        type: 'date',
        'data-testid': 'date'
    }
]

interface Props {
    newEvent: typeof newEventAsync.request
}

export const EventForm: React.FC<Props> = ({ newEvent }) => (
    <Formik
        initialValues={eventInitialValues}
        validationSchema={eventSchema}
        onSubmit={(values, { resetForm }) => newEvent(values) && resetForm()}
    >
        <Form data-testid="form">
            <FormWrapper>
                <Header>Event Form</Header>

                {form.map(item => (
                    <Field key={item.name} {...item} component={FormikInput} />
                ))}

                <Button onClick={() => console.log('lol')} type="submit">
                    Save
                </Button>
            </FormWrapper>
        </Form>
    </Formik>
)

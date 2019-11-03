import * as React from 'react'
import { Formik, Form, Field } from 'formik'

import { Button } from 'common/components/button'
import { FormikInput } from 'common/components/formikInput'
import { eventInitialValues, eventSchema } from 'modules/event/schema'
import { FormWrapper, Header } from './style'

const form = [
    {
        name: 'firstName',
        label: 'First name'
    },
    {
        name: 'lastName',
        label: 'Last name'
    },
    {
        name: 'email',
        label: 'Email'
    },
    {
        name: 'date',
        label: 'Date',
        type: 'date'
    }
]

export const EventForm = () => (
    <Formik
        initialValues={eventInitialValues}
        validationSchema={eventSchema}
        onSubmit={v => console.log(v)}
    >
        <Form>
            <FormWrapper>
                <Header>Event Form</Header>

                {form.map(item => (
                    <Field key={item.name} {...item} component={FormikInput} />
                ))}

                <Button type="submit">Save</Button>
            </FormWrapper>
        </Form>
    </Formik>
)

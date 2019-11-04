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

interface Props {
    newEvent: typeof newEventAsync.request
}

export const EventForm: React.FC<Props> = ({ newEvent }) => (
    <Formik
        initialValues={eventInitialValues}
        validationSchema={eventSchema}
        onSubmit={newEvent}
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

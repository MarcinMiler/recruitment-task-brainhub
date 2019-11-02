import * as React from 'react'

import { Input } from 'common/components/Input'
import { Button } from 'common/components/button'
import { FormWrapper, Header } from './style'

export const EventForm = () => (
    <FormWrapper>
        <Header>Event Form</Header>

        <Input label="First name" />

        <Input label="Last name" />

        <Input label="Email" />

        <Input label="Date" type="date" />

        <Button>Save</Button>
    </FormWrapper>
)

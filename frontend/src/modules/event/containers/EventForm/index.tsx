import * as React from 'react'
import { connect } from 'react-redux'

import { EventForm } from 'modules/event/components/EventForm'
import { newEventAsync } from 'modules/event/event.actions'

type Props = typeof mapDispatchToProps

export const EventFormComponent: React.FC<Props> = props => (
    <EventForm {...props} />
)

const mapDispatchToProps = {
    newEvent: newEventAsync.request
}

export const EventFormContainer = connect(
    null,
    mapDispatchToProps
)(EventFormComponent)

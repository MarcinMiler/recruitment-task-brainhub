import * as React from 'react'
import { connect } from 'react-redux'

import { AppState } from 'config/rootReducer'
import { NotificationsList } from '../../components/NotificationList'
import { closeNotification } from '../../notification.actions'

type Props = typeof mapDispatchToProps & ReturnType<typeof mapStateToProps>

export const NotificationsContainerComponent: React.FC<Props> = props => (
    <NotificationsList {...props} />
)

const mapDispatchToProps = {
    closeNotification
}

const mapStateToProps = (state: AppState) => ({
    notifications: state.notification.notifications
})

export const NotificationsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NotificationsContainerComponent)

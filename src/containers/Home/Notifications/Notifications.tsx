import * as React from 'react';

export interface NotificationsProps {
}

export interface NotificationsState {
}

export default class NotificationsComponent extends React.Component<NotificationsProps, NotificationsState> {
  constructor(props: NotificationsProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
        <div>Notify</div>
        );
  }
}

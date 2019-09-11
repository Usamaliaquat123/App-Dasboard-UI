import * as React from 'react';

export interface NewNotifyProps {
}

export interface NewNotifyState {
}

export default class NewNotifyComponent extends React.Component<NewNotifyProps, NewNotifyState> {
  constructor(props: NewNotifyProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
      <div>New Notifications</div>
      );
  }
}

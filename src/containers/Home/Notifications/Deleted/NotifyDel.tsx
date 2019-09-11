import * as React from 'react';
import './NotidyDelStyles.css'
export interface NotifyDelProps {
}

export interface NotifyDelState {
}

export default class NotifyDelComponent extends React.Component<NotifyDelProps, NotifyDelState> {
  constructor(props: NotifyDelProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
        <div>Deleted Notify</div>
        );
  }
}

import * as React from 'react';

export interface DashboardProps {
}

export interface DashboardState {
}

export default class DashboardComponent extends React.Component<DashboardProps, DashboardState> {
  constructor(props: DashboardProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
        <div> Dashboard content</div>
    );
  }
}

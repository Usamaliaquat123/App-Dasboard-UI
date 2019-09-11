import * as React from 'react';

export interface ForgotProps {
}

export interface ForgotState {
}

export default class ForgotComponent extends React.Component<ForgotProps, ForgotState> {
  constructor(props: ForgotProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
        <div>Forgot Container</div>
        );
  }
}

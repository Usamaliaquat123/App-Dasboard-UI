import * as React from 'react';
import './RegisterStyles.css'
export interface RegisterProps {
}

export interface RegisterState {
}

export default class RegisterComponent extends React.Component<RegisterProps, RegisterState> {
  constructor(props: RegisterProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
        <div>
            Register container
        </div>
        );
  }
}

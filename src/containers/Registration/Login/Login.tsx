import * as React from 'react';
import './LoginStyles.css'
export interface LoginProps {
}

export interface LoginState {
}

export default class LoginComponent extends React.Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
        <div>
            Login Form
        </div>
        );
  }
}

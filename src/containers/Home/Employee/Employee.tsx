import * as React from 'react';

export interface EmployeeProps {
}

export interface EmployeeState {
}

export default class EmployeeComponent extends React.Component<EmployeeProps, EmployeeState> {
  constructor(props: EmployeeProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
        <div>
            Employee username
        </div>
        );
  }
}

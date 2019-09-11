import * as React from 'react';
import './SocialStyles.css'
export interface SocialProps {
}

export interface SocialState {
}

export default class SocialComponent extends React.Component<SocialProps, SocialState> {
  constructor(props: SocialProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
        <div>Social Container</div>
        );
  }
}

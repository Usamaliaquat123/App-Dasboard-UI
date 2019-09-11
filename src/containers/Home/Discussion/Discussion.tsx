import * as React from 'react';

export interface DiscussionProps {
}

export interface DiscussionState {
}

export default class DiscussionComponent extends React.Component<DiscussionProps, DiscussionState> {
  constructor(props: DiscussionProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
        <div> Discussion cONTAINER</div>
        );
  }
}

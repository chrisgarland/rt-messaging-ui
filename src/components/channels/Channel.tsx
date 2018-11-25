import React, { Component } from 'react';

interface Props {
    channelName: string
    setChannel(activeChannel: string): void
}

export class Channel extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    onClick(): void {
        this.props.setChannel(this.props.channelName);
    }

    render(): React.ReactNode {
        return <ul onClick={this.onClick.bind(this)}>{`# ${this.props.channelName}`}</ul>;
    }
}

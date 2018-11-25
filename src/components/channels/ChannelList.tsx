import React, { Component } from 'react';
import { ChannelType } from '../../react-app-env';
import { Channel } from './Channel';

interface Props {
    channels: ChannelType[],
    setChannel(activeChannel: string): void
}

interface State {
    currentChannels: JSX.Element[]
}

export class ChannelList extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {currentChannels: this.getChannelElements(this.props.channels)};
    }

    getChannelElements(channelNames: ChannelType[]): JSX.Element[] {
        return (
            channelNames.map(channel => {
                return <Channel key={channel.id}
                                channelName={channel.name}
                                setChannel={this.props.setChannel}/>;
            })
        );
    }

    componentWillReceiveProps(nextProps: Readonly<Props>, nextContext: any): void {
        this.setState({currentChannels: this.getChannelElements(nextProps.channels)});
    }

    render(): React.ReactNode {
        return (
            <div>
                <ul>{this.state.currentChannels}</ul>
            </div>
        );
    }
}

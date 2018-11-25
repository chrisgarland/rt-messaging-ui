import React, { Component } from 'react';
import { ChannelType } from '../react-app-env';
import { ChannelSection } from './channels/ChannelSection';
// import './ChannelSection.scss';

interface State {
    channels: ChannelType[]
    activeChannel: ChannelType | undefined
}

class App extends Component<{}, State> {
    constructor(props: any) {
        super(props);
        this.state = {channels: [], activeChannel: {id: -1, name: ''}};
    }

    addChannel(channelName: string): void {
        const {channels} = this.state;
        const channel: ChannelType = {
            id: channels.length,
            name: channelName,
        };
        channels.push(channel);
        this.setState({channels});
        // TODO: send to server
    }

    setChannel(activeChannelName: string): void {
        const activeChannel: ChannelType | undefined =
            this.state.channels.filter(item => item.name === activeChannelName)[0];
        this.setState({activeChannel}, () => {
            console.log(`Active Channel: ${JSON.stringify(this.state.activeChannel)}`);
            // TODO: get channel messages from server
        });
    }

    render() {
        return (
            <div className='slack'>
                <ChannelSection
                    channels={this.state.channels}
                    addChannel={this.addChannel.bind(this)}
                    setChannel={this.setChannel.bind(this)}/>
            </div>
        );
    }
}

export default App;

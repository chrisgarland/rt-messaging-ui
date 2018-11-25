import React, {Component} from 'react';
import {ChannelType} from '../../react-app-env';
import {ChannelList} from './ChannelList';
// import './ChannelSection.scss';
import {CreateChannelForm} from './CreateChannelForm';

interface Props {
    channels: ChannelType[],
    addChannel(channelName: string): void
    setChannel(activeChannel: string): void
}

export class ChannelSection extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div className='sidebar'>
                <ChannelList {...this.props} />
                <CreateChannelForm {...this.props} />
            </div>
        );
    }
}

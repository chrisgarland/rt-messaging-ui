import React, { Component } from 'react';

interface State {
    channelName: string
}

interface Props {
    addChannel(channelName: string): void
}

type HTMLElementEvent<T extends HTMLElement> = Event & {
    Target: T;
};

export class CreateChannelForm extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {channelName: ''};
    }

    onChange(event: HTMLElementEvent<HTMLTextAreaElement>): void {
        // @ts-ignore
        this.setState({channelName: event.target.value});
    }

    onSubmit(event: HTMLElementEvent<HTMLTextAreaElement>): void {
        event.preventDefault();
        const {channelName} = this.state;
        this.props.addChannel(channelName);
        this.clearState();
    }

    clearState(): void {
        this.setState({channelName: ''});
    }

    render(): React.ReactNode {
        return (
            <ul>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input
                        type='text' onChange={this.onChange.bind(this)}
                        value={this.state.channelName}/>
                </form>
            </ul>
        );
    }
}

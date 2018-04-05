import React from 'react';
import { KeepAliveModule } from '../../utils/modules';

export default class KeepAlive extends React.Component {
    componentDidMount() {
        KeepAliveModule.activate();
    }

    componentWillUnmount() {
        KeepAliveModule.deactivate();
    }

    render() {
        return null;
    }
}

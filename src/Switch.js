import React from 'react';
import ReactDOM from 'react-dom';

var Switch = React.createClass({
    getInitialState: function() {
        return ({
            time: 'night'
        });
    },
    handleClick: function() {
        if(this.state.time === 'night') {
            this.setState({time: 'day'});
        } else {
            this.setState({time: 'night'});
        }
    },
    render: function() {
        return (
            <div className="Switch" data-time={this.state.time}>
                <Toggle onClick={this.handleClick} time={this.state.time} />
            </div>
        )   
    }
});

var Toggle = React.createClass({
    render: function() {
        return (
            <div onClick={this.props.onClick} data-time={this.props.time} className="Toggle">
                <Button />
            </div>
        )
    }
});

var Button = React.createClass({
    render: function() {
        return <div className="Button"></div>
    }
});

ReactDOM.render(
    <Switch />,
    document.getElementById('switch')
);
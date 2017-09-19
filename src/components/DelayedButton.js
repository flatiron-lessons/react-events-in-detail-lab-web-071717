import React from 'react'

class DelayedButton extends React.Component {

	handleClick = (event) => {
		event.persist() // we want to persist the event
		setTimeout((/*timeout takes callback*/) => {
			this.props.onDelayedClick(event) // how do we call onDelayedClick without defining?
		}, this.props.delay) // how do we call .delay without defining?
	}

	render() {
		return (
			<button onClick={this.handleClick}></button>
		)
	}
}

export default DelayedButton
import React, {Component} from 'react'

class Component1 extends Component {
    render() {
        return (
            <p key={this.props.chiave} className="text-3xl ">{this.props.content}</p>
        )
    }
}

export default Component1
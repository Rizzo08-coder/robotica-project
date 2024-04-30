import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Root extends Component {
    render() {
        return (
             <div>
                <Link to={this.props.link}>
                   <button className="bg-red-500 font-white">{this.props.buttonText}</button>
                </Link>
             </div>
        )
    }
}

export default Root
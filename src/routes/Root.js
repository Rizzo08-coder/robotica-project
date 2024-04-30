import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import { Button } from "flowbite-react";

class Root extends Component {
    render() {
        return (
             <>
                 <Link to={this.props.link}>
                     <Button>
                         {this.props.buttonText}
                     </Button>
                 </Link>
             </>
        )
    }
}

export default Root
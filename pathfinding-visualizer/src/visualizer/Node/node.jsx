import React from "react";
import "./node.scss"


class Node extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return ( 
            <div className = "node"></div>
         );
    }
}
 
export default Node;
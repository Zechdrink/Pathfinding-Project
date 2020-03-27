import React from "react";
import "./node.scss"


class Node extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }


    render() {  
        
        let { start, end, selected } = this.props

        let specialClass = start ? 'start-node': end ? 'end-node': selected ? 'selected-node': '';

        return ( 
            <div className = {`node ${specialClass}`}
                 id = {`node-${this.props.row}-${this.props.col}`}
                 >
                 </div>
         );
    }
}
 
export default Node;
import React from "react";
import "./node.scss"


class Node extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }


    render() {  
        
        let { start, end, selected, row, col} = this.props

        let specialClass = start ? 'start-node': end ? 'end-node': selected ? 'selected-node': '';

        return ( 
            <div className = {`node ${specialClass}`}
                 id = {`${row}-${col}`}
                 selected = {selected}
                 onMouseDown = {() => {this.props.onMouseDown(row, col)}}
                 onMouseUp = {() => {this.props.onMouseUp()}}
                 onMouseEnter = {() => {this.props.onMouseEnter(row, col)}}
                 >
                 </div>
         );
    }
}
 
export default Node;
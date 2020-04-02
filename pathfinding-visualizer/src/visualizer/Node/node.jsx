import React from "react";
import "./node.scss"


class Node extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }


    render() {  
        
        let { start, end, selected, row, col, gridLines} = this.props

        let specialClass = start ? 'start-node': end ? 'end-node': selected ? 'selected-node': '';
        let lines = gridLines ? '': 'border-off';

        return ( 
            <div className = {`node ${specialClass} ${lines}`}
                 id = {`${row}-${col}`}
                 onMouseDown = {() => {this.props.onMouseDown(row, col)}}
                 onMouseUp = {() => {this.props.onMouseUp()}}
                 onMouseEnter = {() => {this.props.onMouseEnter(row, col)}}
                 >
                 </div>
         );
    }
}
 
export default Node;
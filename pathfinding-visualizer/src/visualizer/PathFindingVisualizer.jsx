import React from 'react'
import Node from "./Node/Node"
import "./PFV.scss"

class PathFindingVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            nodes: [],
         }
        }

        componentDidMount(){
            this.drawGrid()
        }
         
        drawGrid = () => {
             let nodes = []
             for(let row = 0; row < 60; row++){
                 let newRow = [];
                 for(let col = 0; col < 25; col++){
                     newRow.push([])
                 }
                 nodes.push(newRow)
            }
            this.setState({nodes})
         }

    render() { 
        const {nodes} = this.state;

        return ( 
            <div className = "board">
                {nodes.map((row, ind) => {
                    return <div>
                        {
                        row.map((node, nodeInd) => <Node/>
                        )}
                    </div>
                })}
            </div>
         );
    }
}
 
export default PathFindingVisualizer;
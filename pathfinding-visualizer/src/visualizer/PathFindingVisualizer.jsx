import React from 'react'
import Node from "./Node/Node"
import "./PFV.scss"

class PathFindingVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            nodes: [],
            startRow: 5,
            startCol: 7,
            endRow: 18,
            endCol: 40,
         }
        }

        componentDidMount(){
            this.drawGrid()
        }

        makeNode = (col, row) => {
            return {
              col,
              row,
              start: row === this.state.startRow && col === this.state.startCol,
              end: row === this.state.endRow && col === this.state.endCol,
            };
          };
         
        drawGrid = () => {
             let nodes = []
             for(let row = 0; row < 61; row++){
                 let newRow = [];
                 for(let col = 0; col < 25; col++){
                     newRow.push(this.makeNode(row, col))
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
                        row.map((node, nodeInd) => {
                        return(
                        <Node key = {nodeInd}
                              col = {node.col}
                              row = {row.col}
                              start = {node.start}
                              end = {node.end}
                              selected = {node.selected}
                               />
                        )
                        }
                        )}
                    </div>
                })}
            </div>
         );
    }
}
 
export default PathFindingVisualizer;
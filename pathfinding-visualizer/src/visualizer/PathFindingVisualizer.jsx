import React from 'react'
import Node from "./Node/Node"
import NavBar from "./NavBar"
import "./PFV.scss"

class PathFindingVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            nodes: [],
            startRow: 10,
            startCol: 29,
            endRow: 18,
            endCol: 40,
            mouseIsPressed: false
         }
        }

        componentDidMount(){
            this.drawGrid()
        }

        makeNode = (row, col) => {
            return {
              row: row,
              col: col,
              start: row === this.state.startRow && col === this.state.startCol,
              end: row === this.state.endRow && col === this.state.endCol,
              selected: false,
            };
          };

        nodeSelector = (row, col) => {

            let newNodes = this.state.nodes
            let targetNode = newNodes[col][row]
            let updateNode = {
                ...targetNode, 
                selected: !targetNode.selected
            }

            newNodes[col][row] = updateNode;
            
            return newNodes;
            
        }

        handleMouseDown(row, col) {
            console.log(typeof row,typeof col)
            const newNodes = this.nodeSelector(row, col);
            this.setState({nodes: newNodes, mouseIsPressed: true});
          }

        handleMouseUp() {
            this.setState({mouseIsPressed: false});
        }
        
        handleMouseEnter(row, col) {
            if (!this.state.mouseIsPressed) return;
            const newNodes= this.nodeSelector(row, col);
            this.setState({nodes: newNodes});
          }
    
        
         
        drawGrid = () => {
             let nodes = []
             for(let col = 0; col < 61; col++){
                 let newRow = [];
                 for(let row = 0; row < 25; row++){
                     newRow.push(this.makeNode(row, col))
                 }
                 nodes.push(newRow)
            }
            this.setState({nodes})
         }

    render() { 
        const {nodes} = this.state;

        return ( 
            <>
            <NavBar clear = {this.drawGrid}/>
            <div className = "board">
                {nodes.map((row, ind) => {
                    return <div>
                        {
                        row.map((node, nodeInd) => {
                        return(
                        <Node key = {nodeInd}
                              col = {node.col}
                              row = {node.row}
                              start = {node.start}
                              end = {node.end}
                              selected = {node.selected}
                              nodeSelector = {this.nodeSelector}
                              onMouseDown = {(row, col) => {this.handleMouseDown(node.row, node.col)}}
                              onMouseEnter = {(row, col) => {this.handleMouseEnter(node.row, node.col)}}
                              onMouseUp = {() => {this.handleMouseUp()}}
                               />
                        )
                        }
                        )}
                    </div>
                })}
            </div>
            </>
         );
    }
}
 
export default PathFindingVisualizer;
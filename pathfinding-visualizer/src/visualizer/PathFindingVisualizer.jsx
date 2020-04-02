import React from 'react'
import Node from "./Node/Node"
import NavBar from "./NavBar"
import "./PFV.scss"

var mouse = 0;


class PathFindingVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            nodes: [],

            startRow: 10,
            startCol: 29,
            endRow: 18,
            endCol: 40,

            mouseIsPressed: false,
            gridLines: true
         }
        }

        componentWillMount(){
            const nodes = this.drawGrid()
            this.setState({nodes})
        }

        removeGridLines = (e) => {
            if(this.state.gridLines){
                this.setState({
                    gridLines: false
                })
            } else if(!this.state.gridLines){
                this.setState({
                    gridLines: true
                })
            }
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
        
        drawGrid = () => {
             let nodes = []
             for(let col = 0; col < 61; col++){
                 let newRow = [];
                 for(let row = 0; row < 25; row++){
                     newRow.push(this.makeNode(row, col))
                 }
                 nodes.push(newRow)
            }

            return nodes
         }

    
        handleMouseDown(row, col) {
            mouse = 1
            if(mouse === 1){
                if(document.getElementById(`${row}-${col}`).className.includes('selected-node')){
                    document.getElementById(`${row}-${col}`).className = "node"
                } 
                else {
                    document.getElementById(`${row}-${col}`).className = "node selected-node"
                 }
            }
            const newNodes = this.nodeSelector(row, col);
            this.setState({nodes: newNodes, mouseIsPressed: true});
        }

    //     mouse = 1
    //     if(mouse === 1){
    //         if(document.getElementById(`${row}-${col}`).className.includes('selected-node')){
    //             document.getElementById(`${row}-${col}`).className = "node"
    //         } else {
    //             document.getElementById(`${row}-${col}`).className = "node selected-node"
    //     }
    //   }

        handleMouseUp() {
            mouse = 0;
            this.setState({mouseIsPressed: false})
        }
        
        handleMouseEnter(row, col) {
        if(mouse === 1){
            if(document.getElementById(`${row}-${col}`).className.includes('selected-node')){
                document.getElementById(`${row}-${col}`).className = "node"
             } 
            else {
                document.getElementById(`${row}-${col}`).className = "node selected-node"
              }
            }           
         if(!this.state.mouseIsPressed) return ;
         const newNodes = this.nodeSelector(row, col);
         this.setState({nodes: newNodes, mouseIsPressed: true});
          }
    

    render() { 
        const {nodes} = this.state;

        return ( 
            <>
            <NavBar clear = {this.drawGrid} removeGridLines = {this.removeGridLines}/>
            <div className = "board">
                {nodes.map((row, ind) => {
                    return <div key = {ind}>
                        {
                        row.map((node, nodeInd) => {
                        return(
                        <Node key = {nodeInd}
                              col = {node.col}
                              row = {node.row}
                              start = {node.start}
                              end = {node.end}
                              selected = {node.selected}
                            //   nodeSelector = {this.nodeSelector}
                              onMouseDown = {(row, col) => {this.handleMouseDown(node.row, node.col)}}
                              onMouseEnter = {(row, col) => {this.handleMouseEnter(node.row, node.col)}}
                              onMouseUp = {() => {this.handleMouseUp()}}
                              gridLines = {this.state.gridLines}
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
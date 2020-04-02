import React from 'react';
import "./navbar.scss"


class NavBar extends React.Component {

    render() { 
        return ( 
            <section>
                <p> Algorithms </p>
                <p> Run Algo </p>
                <p onClick = {this.props.clear}> Clear </p>
                <p> Speed </p>
                <p onClick = {this.props.removeGridLines}> Toggle Lines </p>
                <p> Themes </p>
            </section>
         );
    }
}
 
export default NavBar;
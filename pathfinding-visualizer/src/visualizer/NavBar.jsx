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
                <p> Toggle Lines </p>
                <p> Dark Theme </p>
            </section>
         );
    }
}
 
export default NavBar;
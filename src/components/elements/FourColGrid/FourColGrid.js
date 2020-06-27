import React from 'react';
import './FourColGrid.css';



const FourColGrid = (props) => {

    const renderElements = () =>{
        const gridElements = props.children.map((element,i)=>(
            
                <div key={i} className="rmdb-grid-element">
                    {element}
                </div>
            
        ))
        return gridElements;
    }
    

    return(
    <div className="rmdb-grid">
        {props.header  ? <h1>{props.header}</h1>:null}
        <div className="rmdb-grid-content">
            {renderElements()}
        </div>
    </div>
    )
}


export default FourColGrid;

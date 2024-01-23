import React, { Component } from "react";
import './card-component.style.css'

class CardComponent extends Component{
    render(){
        const {name, id, email}=this.props.monster;
        return(
            <div className="card-container" key={id}>
               <img alt={"Poza Monster"} src={`https://robohash.org/${id}set=set2`}/>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        )
    }
}

export default CardComponent
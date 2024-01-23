import { Component } from "react";
import './searchbox.style.css'

class SearchBox extends Component{

    render(){
        const {onChangeHandler}=this.props;
        return(
            <input 
                className='monsters-search-box'
                type='search'
                placeholder='search monsters' 
                onChange={onChangeHandler}
            />
        )
    }
}

export default SearchBox;
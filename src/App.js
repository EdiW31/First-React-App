import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import CardList from './Components/card-list/card-list.component';
import SearchBox from './Components/search-box/searchbox.component.jsx'

class App extends Component {
  //constructor
  constructor(){
    console.log("constructor")
    super()
    //declaram state ul gol ca sa poata fii umplut de sursa, de api
    this.state = {
      monsters:[],
      searchField: ""
    }
  }

  //did mount este pentru fetching de pe un site sau ceva
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      //convertim datele in date json prin nume.json()
      .then((response)=> response.json())
      //setam state ul cu noile lucruri din api
      .then((users)=> this.setState(
        ()=>{
        return{monsters: users}
        }
      ))
  }
  

  //metoda clasei
  onSeachChange = (event)=> {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(()=>{
      return {searchField}
    }) 
  }

  //ce scoatem ca sa fie afisat pe
  render(){

    const{monsters, searchField}=this.state;
    const{onSeachChange}=this;

    const filteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField)
    })
    
    return (
      <div className="App">
        <h1 className='app-title'>My first React App</h1>
        <SearchBox onChangeHandler={onSeachChange}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;

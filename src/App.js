import React,{Component} from 'react';

import './App.css';
import MovieName from './MovieName';
import Logo1 from './showshank.jpg';
import Logo2 from './bladerunner.gif';
import MovieCardList from './MovieCardList';
import Logo from './inception.jpg';
import Logo3 from './A_Simple_Favor.png';
import Logo4 from './ASingleShotPoster.png';
import Logo5 from './The_Spy_Who_Dumped_Me.png';
import StarRatingComponent from 'react-star-rating-component';

const tablist=[{id:'inception',rating:'4' ,image:Logo ,title:'Inception-2010'},{id:'inception', rating:'3',image:Logo1 ,title:'showshank'},{id:'inception', rating:'1',image:Logo2 ,title:'bladerunner'},
               {id:'inception', rating:'2',image:Logo3,title:'A_Simple_Favor'},{id:'inception', rating:'4',image:Logo4,title:'ASingleShotPoster'},{id:'inception', rating:'5',image:Logo5,title:'The_Spy_Who_Dumped_Me'}]

class App extends Component {
  constructor(props){
  super(props);
  this.state={
    movies:tablist,
    titleFilter:'',
    minRating: 2

  }
}

   onStarClick(nextValue, prevValue, name) {
    this.setState({minRating: nextValue});
  }
  addNewMovie(newMovie) {
    this.setState({
      movies: this.state.movies.concat(newMovie)
    })
  }
  render() {
    return (
    <div className="App">
      <div className="container">
        <div className='row name-rating'>
         <MovieName 
         onChange={(newtitleFilter)=>this.setState({titleFilter:newtitleFilter})}
         value={this.state.titleFilter}/>
         <StarRatingComponent 
                    name="rate1" 
                    starCount={5}
                    value={this.state.minRating}
                    onStarClick={this.onStarClick.bind(this)}
                />
         </div>
        
         <MovieCardList movies={
           this.state.movies.filter(
            el=> el.rating >= this.state.minRating && el.title.toLowerCase().includes(this.state.titleFilter.toLowerCase().trim()
            )
          )}
          onAddMovie={(newMovie) => this.addNewMovie(newMovie)}/>
        



      </div>
      
      
    </div>)}
}


export default App;

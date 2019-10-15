import React, { Component } from 'react';
import ImprovedCard from './ImprovedCard';

class DynamicMoviesList extends Component {
  constructor(){
      super();
      this.state = {
        movies: [
          { title: "The Godfather", director: "Francis Coppola" },
          { title: "Star Wars", director: "Rian Johnson" },
          { title: "The Shawshank Redemption", director: "Frank Darabont" }
        ]
      }
  }

  deleteMovieHandler = (movieIndex) => {

    // aquí estamos mutando el estado original, pero no debemos hacerlo
    // const moviesCopy = this.state.movies;

    // Para no hacerlo, podemos hacer  una copia del estado o mejor dicho, parte del estado que se va a cambiar
    // por lo que actualizo el estado de manera inmutable utilizando el operador de propagación 
    const moviesCopy = [...this.state.movies]; // <== notice the spread operator here!

    // splice() elimina o agrega nuevos elementos en la posición indicada
    // .splice(movieIndex,1) --> elimina un elemento en la posición movieIndex
    moviesCopy.splice(movieIndex, 1);
    this.setState({
        movies: moviesCopy
    })
  }

  render() {
    console.log(this.state.movies);
    return (
      <div>
        {
            this.state.movies.map((oneMovie, index) => {
            //  return <ImprovedCard key={index} {...oneMovie} />
            // return <ImprovedCard key={index} {...oneMovie} clickToDelete={this.deleteMovieHandler.bind(this, index)} />
            // return <ImprovedCard key={index} {...oneMovie} clickToDelete={() => this.deleteMovieHandler(index)} />
            return (
                <ImprovedCard 
                    key = {index} {...oneMovie} 
                    clickToDelete={() => this.deleteMovieHandler(index)}
                />
            )
          })
        }
      </div>
    );
  }
}

export default DynamicMoviesList;
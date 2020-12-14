import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all",
      },
    };
  }

  onAdoptPet = ({ target }) => {
    const id = target.dataset.id;
    //find this pet in state
    const adoptedPet = this.state.pets.find((pet) => pet.id === id);
    const index = this.state.pets.indexOf(adoptedPet);
    const pets = [...this.state.pets];
    pets[index].isAdopted = true;
    this.setState({
      ...this.state,
      pets,
    });
  };

  onChangeType = ({ target }) => {
    this.setState({
      ...this.state,
      filters: {
        type: target.value,
      },
    });
  };

  onFindPetsClick = () => {
    const baseURL = "/api/pets";
    let query;
    this.state.filters.type === "all"
      ? (query = "")
      : (query = `?type=${this.state.filters.type}`);

    fetch(`${baseURL}${query}`)
      .then((resp) => resp.json())
      .then((pets) => {
        this.setState({
          ...this.state,
          pets,
        });
      });
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              {console.log(this.state)}
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

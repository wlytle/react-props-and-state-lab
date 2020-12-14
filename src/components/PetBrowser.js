import React from "react";

import Pet from "./Pet";

class PetBrowser extends React.Component {
  showPets = () => {
    return this.props.pets.map((pet) => {
      return (
        <Pet
          name={pet.name}
          age={pet.age}
          weight={pet.weight}
          type={pet.type}
          id={pet.id}
          key={pet.id}
          isAdopted={pet.isAdopted}
          gender={pet.gender}
          onAdoptPet={this.props.onAdoptPet}
        />
      );
    });
  };

  render() {
    return <div className="ui cards">{this.showPets()}</div>;
  }
}

export default PetBrowser;

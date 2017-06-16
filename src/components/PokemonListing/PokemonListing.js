import React, { Component } from 'react';

class PokemonListing extends Component {
    render() {
        return (
            <div className="pokemon-list-card">
                {this.props.pokemon.name}
            </div>
        );
    }
}

export default PokemonListing;
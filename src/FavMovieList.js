import React, { Component } from 'react';

class FavMovieList extends Component {
    profiles = this.props.profiles;
	users = this.props.users;
	movies = this.props.movies;

	

  render() {
    return (
      <ul>
       {this.profiles.map(profile => {
       		const userName = this.users[profile.userID].name;
    		const favMovieName = this.movies[profile.favoriteMovieID].name;
			return (<li key={profile.id}>
				<p>{`${userName}'s favorite movie is "${favMovieName}."`}</p>
				</li>)
      })}
      </ul>
    );
  }
}

export default FavMovieList;
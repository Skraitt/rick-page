import React, { useEffect, useState } from 'react';

class Character extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      string: '',
      characters: []
    }
    this.makeSearch = this.makeSearch.bind(this)
    this.search = React.createRef();
  }

  componentDidMount() {
		this.search.current.focus(); 
	}

  makeSearch() {
		this.setState({
			string: this.search.current.value
		});
	}

  render(){
    const searchURL = async (string) => {
      return API2.replace("=", `=${string}`);
    };

    const getSearch = async (string) => {
      const URL = searchURL(string);
      const response = await fetch(URL);
      const data = await response.json();
      return data.results;
    }

		if (search.length > 0) {
      const characters = getSearch(this.search.string);
      
    }
    return (
      <div className='search'>
        <input ref={this.search} value={this.state.string} className='search--input' type='text' placeholder='Name character...' />
        <button className='search__button' type='button' ><img className='search__button--icon' src='https://img.icons8.com/ios-filled/50/ffffff/detective.png' alt='buscar' /></button>
      </div>
    )
  }
}
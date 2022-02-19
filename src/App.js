import React, { Component } from 'react';
import Feed from './components/feed';
import Footer from './components/footer';
import Searchbar from './components/searchbar';
import {getFlightData} from './services/flight-data';

class App extends Component {

  state = { 
    searchValue: '',
    searchbarButton: false,
    flightData: [],
    footerText: <React.Fragment>¹ Flugzeit Stand: 22.03.2019 - Quelle: <a href="https://www.google.com/flights" target="_blank" rel="noopener nofollow">https://www.google.com/flights</a> Alle Angaben ohne Gewähr. Die Informationen könnten in Zukunft abweichen.</React.Fragment>
  }

  /** Component is mounted (inserted into the tree) */
  componentDidMount(){
    /** The value for the key which should use for filtering must be adjust. */
    this.adjustData();
  }

  /** Update the state.searchValue */
  handleSearchChange = (val) =>{
    this.setState({searchValue: val});
  }

  /** Update the state.searchbarButton true/false*/
  handleSearchbarButton = (status) =>{
    this.setState({searchbarButton: status});
  }

  /** map the array from getFlightData(). The values for this keys must be adjusted */
  adjustData = () =>{
    const arrData = getFlightData().map((dataset) => {
      /** Change the value for this key in false if the original value is "Kein Flug". For easier and uniform handling in components/elements. */
      dataset["Kürzeste Dauer (Std.)*"] = dataset["Kürzeste Dauer (Std.)*"] === "Kein Flug" ? false : dataset["Kürzeste Dauer (Std.)*"];
      /** If dataset["Nonstop"] is "Ja" set true. Otherwise false */
      dataset["Nonstop"] = dataset["Nonstop"] === "Ja" ? true : false;
      return dataset;
    });
    this.setState({ flightData: arrData });
  }

  /** Render this component DOM */
  render() { 
    /** 
     * Save the flightData array. 
     * If state.searchValue.length > 0 or this.state.searchbarButton = true, save the filtered flightData array otherwise the whole array 
     * Pass the key which should use for filtering: "Nonstop"
     */
    const arrFlightData = this.state.searchValue.length || this.state.searchbarButton ? this.handleChange(this.state.searchValue,"Nonstop") : this.state.flightData;
    return (
      <div className="container-lg px-0" id="app-container">
        {/** If the <Searchbar /> value is changed, call handleSearchChange() and update the state for searchValue */}
        <Searchbar 
          onChange={this.handleSearchChange} 
          onClick={this.handleSearchbarButton} 
          status={this.state.searchbarButton} 
          style={{color: '#000'}} 
          cssClasses={'btn btn-default'}
        />
        <Feed  
          /** 
           * Pass the key names of the used array objects. 
           * Attention! <Feed /> use default props. If you use other keys in your data objects set the attributes here. Like startAirport="your_key_name" */
          id="ID"
          startAirport="Start Flughafen"
          startCity="Start"
          duration="Kürzeste Dauer (Std.)*"
          nonstop="Nonstop"
          targetAirport="Ziel Flughafen"
          targetCity="Ziel"
          /** Pass the (filtered/unfiltered) flightData array to feed.jsx. */
          data={arrFlightData}
        />
        <Footer text={this.state.footerText} />
      </div>
    );
  }

  /** Filter the state.flightData array. Get a parameter (input value) from searchbar.jsx */
  handleChange = (strSearch,strfilterKey) => {
    const arrData = this.state.searchbarButton ? this.state.flightData.filter(dataset => dataset[strfilterKey] === true) : this.state.flightData;
    /** Filter all state.flightData array elements where the object values includes the parameter (strSearch) value (input value) */
    const searchResults = arrData.filter(dataset => Object.values(dataset).some(objValues => objValues.toString().toLowerCase().includes(strSearch.toLowerCase())));
    /** return the filtered array */
    return searchResults;
  };
}

export default App;

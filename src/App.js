import './App.css';
import { Component } from 'react';
import { VtmnLoader } from '@vtmn/react';
import MainSearch from './components/MainSearch';
import PageView from './components/PageView';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      actualSportData: -1,
      searchInput: '',
    };
  }

  componentDidMount = () => {
    fetch('https://sports.api.decathlon.com/sports')
      .then(res => res.json())
      .then(data => this.setState({ data: data['data'] }));
  }

  setSearchInput = searchInput => this.setState({ searchInput });
  setSportData = actualSportData => this.setState({ actualSportData }, () => console.log(actualSportData));

  render() {
    const { data, actualSportData, searchInput, loading } = this.state;

    return (
      <div className="app">
        <header style={ (actualSportData === -1) ? { backgroundColor: "#fff" } : { backgroundColor: "#0075b0" } }>
          <div className="underline buline-1" style={ (actualSportData === -1) ? { backgroundColor: "#0082C3" } : { backgroundColor: "#000" } }></div>
          <div className="underline buline-2" style={ (actualSportData === -1) ? { backgroundColor: "#0082C3" } : { backgroundColor: "#000" } }></div>
          <div className="underline buline-3" style={ (actualSportData === -1) ? { backgroundColor: "#0082C3" } : { backgroundColor: "#000" } }></div>
          <h1
            className="header-title"
            onClick={ () => this.setSportData(-1) }
            style={ (actualSportData === -1) ? { color: "black" } : { color: "#fff" }} >
            Le<br />
            Wiki<br />
            des<br />
            Sports
          </h1>

          <div className="signature">
            <img src="decath_logo.png" alt="Décathlon" className="logo_decath" /><br />
            <span>ARRANOCTIS NUIT DE L'INFO</span>
          </div>
        </header>

        {
          (actualSportData === -1) ?
            <MainSearch
              data={ data }
              actualSportData={ actualSportData }
              setSportData={ this.setSportData }
              searchInput={ searchInput }
              setSearchInput={ this.setSearchInput } />
          :
            <PageView
              data={ data }
              actualSportData={ actualSportData }
              setSportData={ this.setSportData }
              searchInput={ searchInput }
              setSearchInput={ this.setSearchInput } />
        }
      </div>
    );
  }
}

export default App;

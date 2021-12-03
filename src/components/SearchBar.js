import './SearchBar.css';
import { VtmnTextInput } from '@vtmn/react';
import './SearchBar.css'

const SearchBar = props => {
	const resultList = <ul className="inputList">
      {
        props.data.filter(val => {
          if (val['attributes']['name']) {
            if (val['attributes']['name'].toLowerCase().includes(props.searchInput.toLowerCase()))
              return val;
          }
        }).map((e, i) => (
          <li
          	key={ i }
          	onClick={ () => props.setSportData(e) }>
            { e['attributes']['name'] }
          </li>
        ))
      }
    </ul>;

	return (
		<div className="allSearchBox">
			<div className="search-box">
		        <div className="textInput">
		          <img
		            src="https://img.icons8.com/ios/50/000000/search--v1.png"
		            className="search-icon"
		            alt="Search icon" />
		          <VtmnTextInput
		            icon="search-line"
		            placeholder="Recherchez"
		            value={ props.searchInput }
		            onChange={ e => props.setSearchInput(e.target.value) }></VtmnTextInput>
		        </div>
		    </div>
		    { (props.searchInput.length > 0 && document.getElementsByClassName('vtmn-text-input')[0] === document.activeElement) ? resultList : null }
		</div>
	);
}

export default SearchBar;
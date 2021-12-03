import './MainSearch.css';
import SearchBar from './SearchBar';
import { VtmnButton } from '@vtmn/react';

const MainSearch = props => {
	const { data } = props;

	const randoms = [
		data[Math.floor(Math.random() * data.length)],
		data[Math.floor(Math.random() * data.length)],
		data[Math.floor(Math.random() * data.length)]
	];

	return (
		<section className="search-box-results">
	      <SearchBar
	      searchInput={ props.searchInput }
	      setSearchInput={ props.setSearchInput }
	      data={ props.data }
	      setSportData={ props.setSportData } />

	      <div className="intro-div">
	        <p>Bonjour ! Bienvenue sur le Wiki des sports ! Retrouvez-ici les infos relatives à tous les sports répertoriés.<br />
	        Effectuez une recherche pour essayer dès maintenant =)</p>

			<h2 className="sport-content-title discover-new-sports">Découvrez de nouveaux sports</h2>

			<div className="discover-list">
				{
					data.filter(x =>
						x.id === 224
						|| x.id === 171
						|| x.id === 37).map((e, i) => {
						const name = e['attributes']['name'] || "";
						const desc = e['attributes']['description'] || "Aucune  description disponible pour ce sport.";
						return (
							<div className="discover-new-box">
								<img src={ e['relationships']['images']['data'][0]['url'] }/>
								<span className="discover-title">{ name }</span>
								<span className="discover-desc">{ `${desc.substring(0, 70)}...` }</span>
								<div
								className="learn-more-btn-discover"
								onClick={ () => props.setSportData(e) }>
									<VtmnButton>EN SAVOIR PLUS</VtmnButton>
								</div>
							</div>);
					})
				}
			</div>
	      </div>
	    </section> );
}

export default MainSearch;
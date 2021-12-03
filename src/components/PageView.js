import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import './PageView.css';

const PageView = props => {
	const sport = props.actualSportData;

	return (
		<section className="container">
			<SearchBar
		      searchInput={ props.searchInput }
		      setSearchInput={ props.setSearchInput }
		      data={ props.data }
		      setSportData={ props.setSportData } />

		    <div className="sport-all">
		    	<div className="sport-title">
		    		<div className="blackUnderlineTop"></div>
		    		<h1>{ sport['attributes']['name'] }</h1>
		    		<div className="blackUnderline"></div>
		    	</div>

		    	<div className="sport-content">
		    		<p>{ sport['attributes']['description'] || "Aucune description n'est disponible pour ce sport." }</p>
		    		
		    		{ (sport['relationships']['images']['data'].length > 0) ?
		    			<div className="images">
			    			<p className="sport-content-title">Images :</p>
			    			<div className="sport-imageList">
				    			{
				    				sport['relationships'] ? sport['relationships']['images']['data'].map((e, i) => {
				    					const image = <img key={ i } className="sport-image" src={e['url']} alt="Sport" />;
				    					return image;
				    				}) : null
				    			}
			    			</div>
			    		</div> : <p><br />Aucune image n'est disponible.</p> }

		    		{ (sport['relationships']['related'].length > 0) ?
		    			<div className="related-sports">
			    			<p className="sport-content-title">Sports en relation :</p>
				    		<ul>
					    		{
					    			sport['relationships'] ? sport['relationships']['related'].map((e, i) => {
					    				const relationData = props.data.find(x => x['id'] === e['data']['id']);
					    				
					    				return (
					    					<li
					    					key={ i }
					    					onClick={ () => props.setSportData(relationData) }>
					    						{ relationData['attributes']['name'] }<br />
					    					</li>
					    				);
					    			}) : null
					    		}
				    		</ul>
			    		</div> : null }
		    	</div>
	    	</div>
	    </section>
	);
}

export default PageView;
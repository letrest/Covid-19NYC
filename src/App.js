import algoliasearch from 'algoliasearch/lite';
import React, { Fragment, Component } from 'react';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  RangeInput,
  Configure,
  PoweredBy
} from 'react-instantsearch-dom';
import {
  GoogleMapsLoader,
  GeoSearch,
  Control,
  CustomMarker
} from 'react-instantsearch-dom-maps';
import PropTypes from 'prop-types';
import './App.css';

/* The aim was to create an application that allows one to easily search for Covid19 data on different neighborhoods in NYC */

/* 
** It's using uploaded NYC.gov data from here: https://github.com/nychealth/coronavirus-data/blob/master/tests-by-zcta.csv 
** that data is then combined with data on the zip code neighborhood names and a zip lat long list from different sources
/*

/* Algolia client with keys*/
const searchClient = algoliasearch(
  '9N4QVI88FU',
  'd816ac6db4afa58b0a5aa2407e737c74'
);

/* Google maps API key*/
const gMapsApiKey = 'AIzaSyAdRHJuppFkX-t2gOPoInUveb3CGTPxF9s';

class App extends Component {
  render() {
    return (
      <div className="ais-InstantSearch">
        <h1>Covid-19 NYC Neighborhood Lookup</h1>
        <InstantSearch indexName="covid_nyc_411" searchClient={searchClient}>
          <div className = "searchWrapper">
            <label className="searchbox-label">Search for a Neighborhood or a Zip Code:</label>
            <SearchBox />
          </div>
          <div className="left-panel">
            {/* In the left panel using facets, we're filtering by boroough or the percentage who tested poistive */}
            <h3>Borough</h3>
            <RefinementList attribute="Borough" />
            <h3>% who tested positive</h3>
            <RangeInput attribute="zcta_cum.perc_pos" min={0} max={90}></RangeInput>
            <ClearRefinements />
            {/* Initially showing the 15 most hard hit areas */}
            <Configure hitsPerPage={15} />
          </div>
          <div className="right-panel">
            <div style={{ height: 500 }}>
              {/* In the right panel, showing the map of the results */}
              <GoogleMapsLoader apiKey={gMapsApiKey}>
                {google => (
                  <GeoSearch initialZoom ={11} initialPosition={{
                    lat: 40.7128,
                    lng: -74.0060,
                  }}
                  google={google}>
                    {({ hits }) => (
                      <div>
                        <Control />
                        {hits.map(hit => (
                          /* 
                          ** using custom markers which have the background color and padding that depend
                          ** on the percentage who tested positive and the number of people who tested positive 
                          */
                          <CustomMarker key={hit.objectID} hit={hit}>
                              <div className = "mapMarker" style = {{background: "rgba(" + hit['zcta_cum.perc_pos']*2.55 + "," + (255 - hit['zcta_cum.perc_pos']*2.55) +",33,.3)", padding: hit.Positive/100 + "px"}}>
                                <div className = "mapNeighborhood">{hit.Neighborhood}</div>
                              </div>
                          </CustomMarker>
                      
                        ))}
                      </div>
                    )}
                  </GeoSearch>
                  )}
                </GoogleMapsLoader>
            </div>
          </div>
          {/* Display the neighborhood results here */}
          <Hits hitComponent={Hit} />
          <Pagination />
          <PoweredBy />
        </InstantSearch>
      </div>
    );
  }
}

function Hit(props) {
  /* create the dynamic values to be used for each result */
  var percentage = props.hit['zcta_cum.perc_pos'];
  // var intensity = Math.round(50+props.hit.Total/20);
  var boroughShortHand = (props.hit.Borough == "Brooklyn") ? "BK" : (props.hit.Borough == "Bronx") ? "BRNX" : (props.hit.Borough == "Staten Island") ? "SI" : (props.hit.Borough == "Queens") ? "QNS" : (props.hit.Borough == "Manhattan") ? "MAN" : "";
  /* the text color of the percentage and bacground color of the item is dynamically generated */
  var dynamicColor = {
    color: 'rgb('+percentage*2.55+','+(255-percentage*2.55)+',0)',
  };
  var dynamicBackground = {
    background: 'rgba('+percentage*2.55+','+(255-percentage*2.55)+',100, .2)',
  };

  return (
    <div className="hit-item" style={dynamicBackground}>
      <div className="hit-zip">
        Zip Code: <Highlight attribute="MODZCTA" hit={props.hit} />
      </div>
      <div className="hit-neighborhood">
        Neighborhood: <div className = "neighborhood-name">
          {props.hit.Neighborhood}
        </div>
      </div>
      <div className="hit-positive">Positive: <span>{props.hit.Positive}</span></div>
      <div className="hit-total">Total Tested: <span>{props.hit.Total}</span></div>
      <div className="hit-percentage" style={dynamicColor}><span className="percentageValue">{percentage}%</span>tested positive</div>
      <div className= "hit-borough">{boroughShortHand}</div>
    </div>
  );
}


Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;

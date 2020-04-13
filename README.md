### Live Site
The live site can be found at https://covid-19-nyc.herokuapp.com/

### Description
It's an application that allows one to easily search for Covid19 data on different neighborhoods in NYC

It's using uploaded NYC.gov data from here: https://github.com/nychealth/coronavirus-data/blob/master/tests-by-zcta.csv 
that data is then combined with data on the "zip code & neighborhood names" and a "zip lat long" lists from different sources
the data was last updated on 4/11/20 

It uses Algolia’s search technology and google maps to quickly and easily lookup and compare the impact that the virus is having on neighborhoods across the five boroughs.

### Future steps 
* To automate the addition of data by crawling and the creation of the indices from it
* To get a more granular list of neighborhoods
* Update the marker sizes on zoom in/out
* Superimpose a layer of zip boundaries onto the map
* Update the UI
* Use google's geolocation for the zip lat longs

I didn't use github pages due to it not being a static site and instead used node on heroku.

### How to Run It
To run it locally, 
1. clone the repo from https://github.com/letrest/Covid-19NYC
2. '''npm install''' 
3. '''npm start'''

Stay safe! :metal:

---------------------------

#### Suggestions to Algolia
* Have better error messaging when uploading data especially for csvs. I spent too much time trying to figure out the errors in the csv upload so I had to manually convert it to json then upload it
* Some links in the community forums are 404s e.g.: https://discourse.algolia.com/t/default-search-refinement-list/1835
* Is there a reason why range slider isn't supported out of the box?
* Merging data from multiple indices ala sql join would have made my life easier though I understand if there isn't much of a use case in real life for it

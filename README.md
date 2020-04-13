The live site can be found at https://covid-19-nyc.herokuapp.com/

It's an application that allows one to easily search for Covid19 data on different neighborhoods in NYC

It's using uploaded NYC.gov data from here: https://github.com/nychealth/coronavirus-data/blob/master/tests-by-zcta.csv 
that data is then combined with data on the "zip code & neighborhood names" and a "zip lat long" lists from different sources
the data was last updated on 4/11/20 

It uses algolia’s search technology and google maps to quickly and easily lookup and compare the impact that the virus is having on neighborhoods across the five boroughs.

Future steps could be 
    * To automate the addition of data by crawling and the creation of the indices from it
    * To get a more granular list of neighborhoods
    * Update the marker sizes on zoom in/out
    * Superimpose a layer of zip boundaries onto the map
    * Update the UI
    * Use google's geolocation for the zip lat longs

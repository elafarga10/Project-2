# Project 2 Proposal

## Project Description 

My app is called Corona-Info. It will allow people to look up countries and will show them the number of cases confirmed in that country, along with other useful information such as the death toll and also a number for people recovered. In the future I'd like to add a feature that will allow people to look up specific states and cities so that they can see how it is affecting their communities.

## Wireframes

### Home
![App](/images/Home-Page.png)



### Results
![App](/images/Search-Results.png)


## MVP User Stories

### MVP User Stories

- As a user, I want to see a search bar that will allow me look up a country.

- As a user, when I click on search, I want information on the country I searched to appear regarding confirmed cases, death toll, and number of people recovered.

- As a user I want to see a button that will allow me to return to the home page and continue searching information on other countries.

### API

[Coronavirus COVID19 API](https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest)

#### Search Country Response

```
{
Country: "Senegal",
CountryCode: "SN",
Slug: "senegal",
NewConfirmed: 57,
TotalConfirmed: 671,
NewDeaths: 2,
TotalDeaths: 9,
NewRecovered: 7,
TotalRecovered: 283,
Date: "2020-04-27T04:18:11Z"
},
```

## Component Hierarchy

![App](/images/Components.png)
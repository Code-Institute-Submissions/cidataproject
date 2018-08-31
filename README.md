# Milestone Project: Experience Centered Design

## Introduction

### This is the second Milestone Project for the Experience Centered Design Unit of the Full Stack Web Developer Course of Code Institute, credit-rated by Edinburgh Napier University
The objective of this project is to design and execute a Responsive, Interactive User Design Centered webpage through the use of Javascript logic. In this opportunity, the chosen format was a Data Visualization Dashboard


In this project, we will generate a visual representation of the Intentions of Vote for the 1988 Referendum in Chile, in which the country decided if the Dictator should stay (Yes) or go (No). 

The dataset was obtained from Vincent Arel Bundock, France. Retrieved from https://vincentarelbundock.github.io/Rdatasets/datasets.html. 


## Data Visualization Dashboard Features

In this webpage, we can explore demographic trends of the 1988 Chilean Referendum Voting intentions. On click, the bars of the charts modify each other to generate a better understanding of who and why people had certain voting intentions. These trends can be examined by Gender, Region of the country, Education level, Income and Age. 
Discussion on possible answers to the reasoning behind the voting intentions are detailed after the graphs. The sources for this context can be found at the end of the page, where bibliography is adequately linked and cited.

This webpage is designed with Mobile-first design approach. This webpage is fully responsive, in spite of the general difficulty of responsiveness in DC charts. This problem was resolved adding a scroll through personalized CSS.

The colour palet and font chosen are intended to mark solemnity, due to the nature of the Referendum and the historical importance of this moment.


## Technologies utilized

- The data is presented in charts made with the Javascript library DC.JS and crossfilter, which constructs the charts and allows user examination of data through interaction within the charts
- d3.js, a Javascript library that manipulates the DOM when interacting with data
- HMTL language for writting of the webpage layout
- CSS was used to customize the webpage design and functionalities
- Slate Bootstwatch was used as a Theme https://bootswatch.com/3/slate
- Bootstrap Framework was used to organize the webpage and uniform the layout throughout. Also, the spacing utils section has been creaated from the information in https://getbootstrap.com/docs/4.1/utilities/spacing/
- Media Queries were used to control the responsive adjustments for smallest screens of the subtitles and paragraphs.

## Testing

This project was tested using <a href='https://validator.w3.org/'>W3C validators</a> for HTML and CSS. 
Javascript was tested through the built in technologies of the Google Chrome Developer Tools. 

This project was tested further by utilizing the Jasmine framework. Tests can be found in jasmine-testing folder, where scriptgraph.js holds the scripts and and graphSpec.js holds the tests. 
Initially, the first test was created with Red-Green-Refactor approach, expecting it to fail. A first simple subtraction test was written, but the results were: 'Incomplete: no specs found'. A typo in the script snippet was found and the test failed accordigly, then was fixed and the test passed. An addition test was added to corroborate code was optimal. 
Unfortunately Jasmine testing is not suitable for my kind of charts, which was corroborated with the Tutor of this course. 
I relied more heavily in the Google Chrome Developer Tools, through the insertion of a console.log output with a keyword such as (bing). 



## Deployment

This webpage was deployed through Github Pages. It can be found in https://mgsignorelli.github.io/cidataproject/

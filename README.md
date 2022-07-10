# Why does this Caribbean takeout taste so… Indian?
## A look at how history can shape flavors around the world. 

### About this project:
A 2-week project for the Lede Program 2022—a 10-week intensive data journalism course at Columbia’s J School. 

This particular project was inspired by a recent conversation I had about French Mirepoix, the iconic flavor profile consisting of onions, carrots, and celery. This classic combination of humble vegetables adds an incredibly fragrant layer to any soup, stew, or classic French dish and can usually be instantly recognizable. 

I wanted to take this concept and apply it to spices, which arguably determine the flavor of any dish you make. What kinds of spices show up most frequently for different cuisines, are there specific Mirepoix-like combinations for cuisines, and are there any surprising overlaps between cuisines?

500 recipes were called from the Edamam API and sorted according to their cuisine tag. I decided to use an API rather than scrape simply because we hadn’t learned that yet. We’ve since learned BeautifulSoup, so I would be curious to see how the results might change if we scraped the data from multiple recipe websites instead. After retrieving the ingredients from these recipes, I used the Pandas Python library to do some data cleaning and count the total sum of ingredients per cuisine. The rest of the analysis—filtering out spices and counting—was done by hand. Spices that were included were those that were in 25% of recipes meaning they had a count of 12 or more. 

My inspiration for the visualization was Julia Janacki and Daisy Chhung’s interactive on bubble tea combinations. Though my visuals remain static for now, I would love to eventually build out an interactive to reflect a more exploratory view for readers.

For visualization, I used Illustrator and ai2html. All of the data and code for this project can be found on GitHub. 

## Repository contents
* Code: spices-API-call.ipynb - API calls to extract initial recipe data and preliminary data cleaning with Python pandas
* raw-data folder: The initial data pulled from spices-API-call.ipynb
* data folder: Data used for final charts
* graphics folder: AI files of graphics and ai2html outputs 
index folder: html and css code for webpage
 

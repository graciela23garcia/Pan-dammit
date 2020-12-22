![logo](public\assets\logos\Pandammit_logo_readme_white.png)
## OVERVIEW/MOTIVATION

Pandemic stress giving you nervous energy? Reach out, seek help, and soothe your mind with Pan-Dammit  resources. Explore movies and discover what other users are searching. Share ideas in our community blog and explore mental health resources. Pan-Dammit is centered around providing support for all!

### USER STORY

AS SOMEONE going through the motions of 2020, 
I WANT an app that will allow me to find some zen in a time of turmoil,
SO THAT I can blog about how my everyday has looked, and be able to find suggestions for some self-help or even links available for me to reach out to a professional.


### API, LIBRARY AND DATABASES
#### ChartJS
Chart.js is a JavaScript library used for creating movie genre popularity chart. Data-driven decision making  encourages the user to explore different movie genres.

<img width="324" alt="PanDammitChart" src="https://user-images.githubusercontent.com/70172286/102854682-decdf000-43d7-11eb-8f2b-fa1d71a731ca.PNG">


#### The Movie Database API
Utilized TMDb API (/genre/movie/list) to generate movie options based on users selection. [The Movie Database Api Documentation](https://www.themoviedb.org/documentation/api?language=en-US)
#### Database
The MySQL database was set up using three tables. Users, Posts and Movie Data. Users, blog posts and movie searches are associated with user id. The movie chart is generated with movie searches table.  

### FEATURES/GOALS
Pan-dammit features a relatable concept and useful application that is easy to follow. This inital set of features can expand by integrating a chat box or offering stress-free activities like calming visuals.

### TECHNOLOGIES
* Bootstrap
* Javascript
* jQuery
* APIs 
* Heroku
* Node + Express
* MySql + Sequelize 
##### Here are the package.json dependencies:
<img width="290" alt="pandammitdependancies" src="https://user-images.githubusercontent.com/70172286/102854851-408e5a00-43d8-11eb-9394-910c64285a92.PNG">

### CODE STYLE
Pan-dammit utilizes ESLint to enforce consistent code. Code linting checks code for errors and style inconsistencies. Code quality guildines for ESLint are determined by the options defined in .eslintrc

<img width="400" alt="Pandammiteslint" src="https://user-images.githubusercontent.com/70172286/102865953-5e18ef00-43eb-11eb-9e10-e537c90a0b77.PNG">

### SCREENSHOTS 

<img width="290" alt="pandammitscreenshot" src="https://user-images.githubusercontent.com/70172286/102855101-d3c78f80-43d8-11eb-93ed-a4a337086d80.PNG">


### CREDITS
* @daniarinker
* @jsvalle123
* @awpdev
* @graciela23garcia
* @jairalynn
* @krisarushanov

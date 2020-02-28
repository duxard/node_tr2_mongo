REST endpoint  
https://asta-web-1.herokuapp.com/api/

To use nodemon:  
1) Install it globally  
npm install -g nodemon

2) Run nodemon:  
nodemon [app_name]  
nodemon server.js

3) Deploy heroku  
git push heroku [branch]

4) To restart app (heroku CLI is required):  
heroku restart -a [app_name]  
heroku restart -a asta-web-1

5) Heroku app logs:  
heroku logs --tail



# 20 Together Minutes

### Developed by:

Team E.A.R.S. - Edin S., Ana A., Roberto S. & Steven P. .

## Product Description

The project **20 Together Minutes** is an interactive media web application where parents and children can spend quality time together while reading flipbooks or listening to audiobooks. 
    
The goal of this web app is to incentivize families to read and share educational material with children via a modern and interactive user interface. Since most children and adults spend several hours interacting with an electronic device on a daily basis, why not implement an application where substance can be offered? 20 minutes a day and parents are able to redirect their children's attention to develop the good habit of reading or active-listening. 
    
Using the *Django-React* tech stack as the framework, the web app offers a scalable model where new content can be added via the admin portal to be immediately rendered on its frontend page, visible to all public users. Its ability to store users is also present, whether it be done via an organic/user-initiated matter or via the admin portal which is restricted to the application administrator. 

## Completed Features

Commands include: 
- Read flipbooks
- Saving books to library
- User log in & sign up
- Admin portal
- Interactive and colorful interface

## Partial Features

- Audiobook loading feature
- Book categorization and sorting
- Flipbook backlog loading
- Reading progress feature

## Codebase

To run this repository locally, clone to your local machine. Download latest Python version and Node.js to use Node Package Manager (NPM). 
Next, open one terminal screen and at the root of the project run:

```
$ pip install -r requirements.txt
$ python manage.py runserver
```
In another terminal tab run at root directory:
```
$ npm install
$ npm run build
```
Open your local server address as shown in first terminal screen!

## Deployment

To deploy new features of this app, follow the steps above to clone the repository and make local changes to the codebase. Upon testing, push updates to heroku app by running:
```
$ heroku git:remote -a project-ears
$ git push heroku master
```

Visit https://project-ears.herokuapp.com/ to experience the app first hand.

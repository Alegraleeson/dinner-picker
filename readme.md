What Are We Having For Dinner?  This is the question that terrorizes adults around the world.  My name is Alegra Leeson and I have developed The dinner picker App to make this simple.

Links:
The app: https://bp3demo.herokuapp.com/index.html

Video demo: https://www.youtube.com/watch?v=BsKYoDPo_6M

My portfolio: https://alegraleeson.github.io

Planning the App: https://docs.google.com/document/d/1Cs2qbs5lRBOhCHivRqLxtxRWIJBgpAc8qUbprlVq0yI/edit?usp=sharing


How to Use:

The dinner-picker randomly selects an item from a list for you.  It uses html, css, javascript, node, axios, and a postgre sql database.

If you’re not sure what to do, click on the about button in the top right.  It explains how to use this app.

Click on ‘Pick Something’! to have the app select an item randomly from a list.  

You can view and edit items on this list by clicking ‘Dinner Options’.  I preloaded a few options for you, so you can pick something right away if you want.  Otherwise, you can add items and delete items to customize the list to the options you would like.  

If you don't want repeat options, you can delete items from this list once they've been selected when you click 'Pick Something'.  Then you can add them back again by using the 'Add Option' feature if you would like repeats after a certain time.

When you’re done looking at these items, click ‘Dinner Options’ again to close it.

 You can save the items that you like to your personal list to create a weekly--or longer-- dinner plan.   Your personal list is at the bottom. 

If you like the item that was picked for you, Click on ‘Save’ to save it to your personal list. You ca delete items from this list by clicking "Delete". When you’re done looking at your list, you can close it by clicking on ‘My List’ again.

You can click the plate icon at the top to refresh the page and clear out all of your changes.

The app looks a little different on different screen sizes, but it works the same.  

I plan to expand this app in the future, to allow users to login, generate, and store recipes, grocery lists, and weekly plans for meals along with photos and more social features . 




Tech Stuff:

It uses a SQL database to store the initial dinner options.  When the site is loaded, an axios and sequelize request grabs that data and pushes it to an array in the backend javascript file that the user can then edit through using the app.  The database is pointless right now, but I plan to expand the app in the future where it will include and utilize more databases to handle a lot more information.  Right now it is good practice and demonstration for me and will be utilized better as this app grows.






# Pocket BookShelf

### Tech Stack

Front-end: ReactJs, Redux, CSS Modules, SASS
Back-end: NodeJs, Express, MySQL

### API's we consume

- Google Books
- NY Times

### Some Implementation details

- App uses localStorage to save current NY Times Best Seller list, alongside with the date the list was fetched. Api is called only once a day
- Ahth0 was used for user Authentication (we collect user info from auth0 and add to the database)
- The NY Times API provides us only with a updated best seller list, we then generate a ISBN's array and iterate over it calling Google Books API with each ISBN (we use promise.all in this case to return all book info at once and not one at a time)
- Implemented a simple and effective NodeJs API with express routing and MySQL (using old school SQL queries)

### User Features

- Search through milions of books by Author, title or ISBN number
- Read details and description of each book
- Use Google or GitHub to login
- Add/Delete books to your bookshelf
- Add notes to your books
- Search and sort bookshelf

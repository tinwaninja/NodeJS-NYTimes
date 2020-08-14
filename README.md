# NY Times Simple API

## Script Installation
-------

Because I did not include the node_modules folder, so it is necessary to do the installation command as follows:
        
        git clone https://github.com/tinwaninja/NodeJS-NYTimes.git
        cd NodeJS-NYTimes
        npm install
        node server.js
-------
In an integrated API based on the NYTimes developer, refactoring is carried out to obtain the required data based on news and books data from JSON obtained from NYTimes.
## Use of the NEWS API

Calling the refactoring API results to get the news list JSON data can be done by accessing the following:

To get all news lists, you can use the GET method on the URL:
http://127.0.0.1:3000/news/

For news lists based on searching and sorting, you can use the KEYWORD and TYPE_SORT parameters as follows:
http://127.0.0.1:3000/news/{KEYWORD}/{TYPE_SORT}

{TYPE_SORT} can use the following values:

newest

oldest

relevance

Example : http://127.0.0.1:3000/news/Covid/newest

## 
## Use of the BOOKS API
-------
Calling the refactoring API to get JSON list of books data can be done as follows:
http://127.0.0.1:3000/books/{TYPE_LIST}

Types of {TYPE_LIST} can use the following values:

e-book-fiction

hardcover-fiction

paperback-nonfiction

Example: http://127.0.0.1:3000/books/hardcover-fiction
import { destructureList } from './destructureList'

export const fetchISBNS = async (nyList) => {
  let arrayOfBooks = nyList.results.books

  //create an array with all urls to be fetched with the specific ISBN number
  let urls = []
  arrayOfBooks.forEach((item) => {
    urls.push(
      `https://www.googleapis.com/books/v1/volumes?q=isbn:${item.isbns[0].isbn10}`
    )
  })

  //fetch all urls and assign to the newArrayOfBooks variable
  let newArrayOfBooks = await Promise.all(
    urls.map((url) =>
      fetch(url)
        .then((response) => response.json())
        .catch((err) => console.log(err))
    )
  )

  //filter any item that could have return undefined or empty. (sometimes item.items could return undefined and hence wont be returned by the filter method)
  newArrayOfBooks = newArrayOfBooks.filter((item) => item.items)

  //then destructure every book selecting only what we need
  newArrayOfBooks = destructureList(newArrayOfBooks)
  return newArrayOfBooks
}

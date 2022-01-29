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

  //filter any item that could have return undefined or empty and then destructure every book selecting only what we need
  newArrayOfBooks = newArrayOfBooks
    .filter((item) => {
      if (item.items) {
        return item
      }
    })
    .map((item) => {
      let {
        id,
        volumeInfo: { categories },
        volumeInfo: { title },
        volumeInfo: { subtitle = '' } = {},
        volumeInfo: { authors },
        volumeInfo: {
          imageLinks: {
            thumbnail = 'https://dummyimage.com/70x100/00f/fff.png&text=No+Cover!',
          } = {},
        },
        volumeInfo: { description },
        volumeInfo: { language },
        volumeInfo: { pageCount },
        volumeInfo: { publishedDate },
        saleInfo: { buyLink },
        volumeInfo: {
          industryIdentifiers: [, identifier],
        },
      } = item.items[0]

      return {
        id,
        categories,
        title,
        subtitle,
        authors,
        thumbnail,
        description,
        language,
        pageCount,
        publishedDate,
        buyLink,
        identifier,
      }
    })

  return newArrayOfBooks
}

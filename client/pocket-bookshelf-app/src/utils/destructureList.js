export const destructureList = (list) => {
  //this verifies if it is destructuring the Best Seller list or the search list because they are nested differently
  let newList = !list.items
    ? //this means the list is the best seller titles that were fetched individually
      list.map((item) => {
        return item.items[0]
      })
    : //in this case the list is comming from the search bar
      list.items

  //then, flatten the object leaving just what we need
  newList = newList.map((item) => {
    let {
      id,
      volumeInfo: { categories = 'Uncategorized' } = {
        categories: 'No Category',
      },
      volumeInfo: { title = 'No title available' },
      volumeInfo: { subtitle = 'No Subtitle' } = {},
      volumeInfo: { authors },
      volumeInfo: {
        imageLinks: {
          thumbnail = 'https://dummyimage.com/70x100/00f/fff.png&text=No+Cover!',
        } = {},
      },
      volumeInfo: { description = 'No Description' },
      volumeInfo: { language },
      volumeInfo: { pageCount },
      volumeInfo: { publishedDate = 'No Published Date' } = {
        publishedDate: 'No Published Date',
      },
      saleInfo: { buyLink = 'No Link' } = { buyLink: 'No Link' },
      volumeInfo: {
        industryIdentifiers: [
          ,
          { identifier = 'No identifier' } = { identifier: 'No identifier' },
        ] = 'No Identifier',
      },
    } = item

    //if authors array has more than a single author join then in a single string
    authors = authors.length > 1 ? authors.join(' ') : authors
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

  return newList
}

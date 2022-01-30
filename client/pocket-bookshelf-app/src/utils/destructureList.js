export const destructureList = (list) => {
  //this verifies if it is destructuring the Best Seller list or the search list because they are nested differently
  let newList = !list.items
    ? list.map((item) => {
        return item.items[0]
      })
    : list.items

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
      volumeInfo: { publishedDate },
      saleInfo: { buyLink = 'No Link' } = { saleInfo: 'No Sale Info' },
      volumeInfo: {
        industryIdentifiers: [
          ,
          { identifier = 'No identifier' } = { identifier: 'No identifier' },
        ] = [, { indetifier: 'No identifier' }],
      },
    } = item

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

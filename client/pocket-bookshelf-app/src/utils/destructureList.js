export const destructureList = (list) => {
  //this verifies if we are destructuring the Best Seller list/search list or Individual Book. they are nested differently
  let newList = !list.items
    ? //this means that the list is either the best seller list or an individual book (they both don't have the .items key)
      list ||
      list.map((item) => {
        return item.items[0]
      })
    : //in this case the list is comming from the search bar
      list.items

  //check again, but this time it is regarding how we are destructuring if an single book or the other lists
  //if it has .id key, then it is a single book...
  if (newList.id) {
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
          { identifier = 'No identifier' } = {
            identifier: 'No identifier',
          },
        ] = 'No Identifier',
      },
    } = newList

    //if authors array has more than a single author join then in a single string
    //the ? after authors and categories check if it is undefined
    authors = authors?.length > 1 ? authors.join(' ') : authors
    //if categories is an array and length > 1, get only the first category
    categories = categories?.length > 1 ? categories[0] : categories

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
  } else {
    //else is a one of the lists
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
            { identifier = 'No identifier' } = {
              identifier: 'No identifier',
            },
          ] = 'No Identifier',
        },
      } = item

      //if authors array has more than a single author join then in a single string
      //the ? after authors and categories check if it is undefined
      authors = authors?.length > 1 ? authors.join(' ') : authors
      //if categories is an array and length > 1, get only the first category
      categories = categories?.length > 1 ? categories[0] : categories

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
}

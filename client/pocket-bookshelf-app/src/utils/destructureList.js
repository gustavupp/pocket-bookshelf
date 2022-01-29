export const destructureList = (list) => {
  let newList = list.items.map((item) => {
    let {
      id,
      volumeInfo: { categories = 'Uncategorized' },
      volumeInfo: { title },
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

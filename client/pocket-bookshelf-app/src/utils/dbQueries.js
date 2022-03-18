//get
export const getBooksFromDb = async (url) => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

//post
export const postToDb = async (
  userId,
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
  email
) => {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify({
      userId,
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
      email,
    }),
  }

  try {
    await fetch('https://pocket-bookshelf.herokuapp.com/api/books/add', options)
  } catch (error) {
    console.log(error)
  }
}

//delete
export const deleteFromDb = async (userId, id) => {
  try {
    const response = await fetch(
      `https://pocket-bookshelf.herokuapp.com/api/books/${userId}/${id}`,
      {
        method: 'DELETE',
      }
    )
    const data = await response.text()
    console.log(data)
  } catch (error) {
    throw error
  }
}

export const updateBookNotes = async (userId, id, notes) => {
  const options = {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify({ userId, id, notes }),
  }
  try {
    const response = await fetch(
      'https://pocket-bookshelf.herokuapp.com/api/books/update',
      options
    )
    const data = await response.text()
    console.log(data)
  } catch (error) {
    throw error
  }
}

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
    await fetch('http://localhost:3002/api/add-book', options).then(() =>
      console.log('Book Added!')
    )
  } catch (error) {
    console.log(error)
  }
}

//delete
export const deleteFromDb = async (id) => {
  await fetch(`http://localhost:3002/api/delete-book/${id}`, {
    method: 'DELETE',
  })
    .then((response) => response.text())
    .catch((err) => console.log(err))
}

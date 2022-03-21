class API {
  //get
  async getBooksFromDb(userId) {
    try {
      const response = await fetch(
        `https://pocket-bookshelf.herokuapp.com/api/books/${userId}`
      )
      const data = await response.json()
      return data
    } catch (error) {
      throw error
    }
  }

  //post
  async postToDb(
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
  ) {
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
      await fetch(
        'https://pocket-bookshelf.herokuapp.com/api/books/add',
        options
      )
    } catch (error) {
      throw error
    }
  }

  //delete
  async deleteFromDb(userId, id) {
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

  async updateBookNotes(userId, id, notes) {
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
}

let api = new API()

export { api }

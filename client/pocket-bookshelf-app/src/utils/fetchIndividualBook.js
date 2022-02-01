import { destructureList } from './destructureList'

export const fetchIndividualBook = async (url) => {
  const response = await fetch(url)
  let data = await response.json()
  data = destructureList(data)
  return data
}

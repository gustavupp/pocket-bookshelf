export const formattedDate = () => {
  let date = new Date()
  date = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
  return date
}

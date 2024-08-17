export const timeFormat = (dateStamp: string): string => {
  const date = new Date(dateStamp)
  const intl = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  return intl.format(date)
}

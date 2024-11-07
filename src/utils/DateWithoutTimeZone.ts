export function DateWithoutTimeZone(date: Date) {
  if (date.getHours() === 0) return date
  const timeZoneOffet = date.getTimezoneOffset() * 60000
  return new Date(date.valueOf() + timeZoneOffet)
}

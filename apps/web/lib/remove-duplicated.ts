export const removeDuplicated = <T>(array: T[]) => {
  return array.filter((item, index, self) => self.indexOf(item) === index)
}

export const removeDuplicatedByProperty = <T, K extends keyof T>(array: T[], property: K) => {
  return array.filter(
    (item, index, self) => self.findIndex(t => t[property] === item[property]) === index,
  )
}

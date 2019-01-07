// @flow

export const match = (array1: Array<*>, array2: Array<*>) =>
  array1.length === array2.length &&
  array1.sort().every(function(value, index) {
    return value === array2.sort()[index]
  })

export const contains = (
  arrayToQuestion: Array<*>,
  arrayOfElements: Array<*>,
) =>
  arrayOfElements.filter(animal => arrayToQuestion.includes(animal)).length !==
  0

export function selectionSort([...array]) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    let indexMin = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j].name < array[indexMin].name) {
        indexMin = j
      }
      count += 1
    }
    let tmp = array[i]
    array[i] = array[indexMin]
    array[indexMin] = tmp
  }
  return array;
}

export function selectionRSort([...array]) {
  let count = 0;
  for (let i = 0; i< array.length; i++) {
    let indexMax = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j].name > array[indexMax].name) {
        indexMax = j
      }
      count += 1
    }
    let tmp = array[i]
    array[i] = array[indexMax]
    array[indexMax] = tmp
  }
  return array;
}
import _ from 'lodash'
import slice from './slice'
import size from './size'
import hintConvert from './hintConvert'

export default function dropRight(data, n = 1) {
  const length = size(data)
  if (!length) {
    return hintConvert(data, [])
  }
  n = n === undefined ? 1 : _.toInteger(n)
  n = length - n
  return slice(data, 0, n < 0 ? 0 : n)
}

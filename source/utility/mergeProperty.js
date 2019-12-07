import assert from 'assert'
import merge from 'deepmerge'
const hasOwnProperty = Object.prototype.hasOwnProperty // allows supporting objects delefating null.

// supports multiple nested properties (property path array)
export const mergeOwnNestedProperty = ({ target, propertyPath, value }: { propertyPath: Array | String /*Property path*/ }) => {
  assert(propertyPath, '• `propertyPath` must be passed.')

  if (!Array.isArray(propertyPath)) propertyPath = [propertyPath]
  let targetProperty = target
  for (let index in propertyPath) {
    if (!hasOwnProperty.call(targetProperty, propertyPath[index])) {
      // create property path recusively
      Object.defineProperty(targetProperty, propertyPath[index], { enumerable: true, writable: true, value: {} })
    }
    targetProperty = targetProperty[propertyPath[index]]
  }
  Object.assign(targetProperty, value)
  return target
}

// set properties only if they do not exist on the target object. Not using `Object.enteries` because it ignores symbols as keys.
export const mergeNonexistentProperties = (targetObject, defaultValue: Object) => {
  // Important: for loops do not support symbol keys iteration, therefore keys, therefore a different approach is taken.
  let propertyKey = [...Object.getOwnPropertySymbols(defaultValue), ...Object.getOwnPropertyNames(defaultValue)]
  let propertyDescriptor = Object.getOwnPropertyDescriptors(defaultValue)
  propertyKey.forEach(key => {
    if (!hasOwnProperty.call(targetObject, key)) Object.defineProperty(targetObject, key, propertyDescriptor[key])
  })
}

// plugin to `deepmerge` package for array merging
const concatinateArrayMerge = (defaultList, overridingList, options) => {
  const destination = defaultList.slice() // create a shallow copy if manipulation of target is not required
  destination.concat(overridingList)
  return destination
}
// plugin to `deepmerge` package for array merging
const combineArrayMerge = (defaultList, overridingList, options) => {
  const destination = defaultList.slice() // create a shallow copy if manipulation of target is not required
  overridingList.forEach((item, index) => {
    if (typeof destination[index] === 'undefined') {
      destination[index] = options.cloneUnlessOtherwiseSpecified(item, options)
    } else if (options.isMergeableObject(item)) {
      destination[index] = merge(defaultList[index], item, { arrayMerge: concatinateArrayMerge })
    } else if (defaultList.indexOf(item) === -1) {
      destination.push(item)
    }
  })
  return destination
}
/** Merge arguments array with merging the items recursively:
 * The arguments array will combined/merged by index.
 * Items of the arguments array will be merged recursively:
      - Objects will be merged (similar to Object.assign). 
      - Arrays will be concatenated (added to each other, not combined by index).

  See examples From https://www.npmjs.com/package/deepmerge
 */
const deepMergeArgumentArray = ({ overridingArray, defaultArray /** arguments used as default */ }) => {
  // merge arguments with default parameters
  return merge(defaultArray /** default objects must not be manipulated */, overridingArray, { arrayMerge: combineArrayMerge }) // => [{ a: true, b: true }, 'ah yup']
}

/**
 * Merge argument lists
 * @param targetArgArray the list to be manipulated
 * @param defaultArgumentListArray array of argumnet lists
 */
export function deepMergeParameter(targetArgArray, ...defaultArgumentListArray) {
  for (let defaultArray of defaultArgumentListArray) targetArgArray = deepMergeArgumentArray({ overridingArray: targetArgArray, defaultArray })
  return targetArgArray
}

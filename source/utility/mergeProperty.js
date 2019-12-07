"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.deepMergeParameter = deepMergeParameter;exports.mergeNonexistentProperties = exports.mergeOwnNestedProperty = void 0;var _assert = _interopRequireDefault(require("assert"));
var _deepmerge = _interopRequireDefault(require("deepmerge"));
const hasOwnProperty = Object.prototype.hasOwnProperty;


const mergeOwnNestedProperty = ({ target, propertyPath, value }) => {
  (0, _assert.default)(propertyPath, '• `propertyPath` must be passed.');

  if (!Array.isArray(propertyPath)) propertyPath = [propertyPath];
  let targetProperty = target;
  for (let index in propertyPath) {
    if (!hasOwnProperty.call(targetProperty, propertyPath[index])) {

      Object.defineProperty(targetProperty, propertyPath[index], { enumerable: true, writable: true, value: {} });
    }
    targetProperty = targetProperty[propertyPath[index]];
  }
  Object.assign(targetProperty, value);
  return target;
};exports.mergeOwnNestedProperty = mergeOwnNestedProperty;


const mergeNonexistentProperties = (targetObject, defaultValue) => {

  let propertyKey = [...Object.getOwnPropertySymbols(defaultValue), ...Object.getOwnPropertyNames(defaultValue)];
  let propertyDescriptor = Object.getOwnPropertyDescriptors(defaultValue);
  propertyKey.forEach(key => {
    if (!hasOwnProperty.call(targetObject, key)) Object.defineProperty(targetObject, key, propertyDescriptor[key]);
  });
};exports.mergeNonexistentProperties = mergeNonexistentProperties;


const concatinateArrayMerge = (defaultList, overridingList, options) => {
  const destination = defaultList.slice();
  destination.concat(overridingList);
  return destination;
};

const combineArrayMerge = (defaultList, overridingList, options) => {
  const destination = defaultList.slice();
  overridingList.forEach((item, index) => {
    if (typeof destination[index] === 'undefined') {
      destination[index] = options.cloneUnlessOtherwiseSpecified(item, options);
    } else if (options.isMergeableObject(item)) {
      destination[index] = (0, _deepmerge.default)(defaultList[index], item, { arrayMerge: concatinateArrayMerge });
    } else if (defaultList.indexOf(item) === -1) {
      destination.push(item);
    }
  });
  return destination;
};








const deepMergeArgumentArray = ({ overridingArray, defaultArray }) => {

  return (0, _deepmerge.default)(defaultArray, overridingArray, { arrayMerge: combineArrayMerge });
};






function deepMergeParameter(targetArgArray, ...defaultArgumentListArray) {
  for (let defaultArray of defaultArgumentListArray) targetArgArray = deepMergeArgumentArray({ overridingArray: targetArgArray, defaultArray });
  return targetArgArray;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS91dGlsaXR5L21lcmdlUHJvcGVydHkuanMiXSwibmFtZXMiOlsiaGFzT3duUHJvcGVydHkiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJtZXJnZU93bk5lc3RlZFByb3BlcnR5IiwidGFyZ2V0IiwicHJvcGVydHlQYXRoIiwidmFsdWUiLCJBcnJheSIsImlzQXJyYXkiLCJ0YXJnZXRQcm9wZXJ0eSIsImluZGV4IiwiY2FsbCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsIndyaXRhYmxlIiwiYXNzaWduIiwibWVyZ2VOb25leGlzdGVudFByb3BlcnRpZXMiLCJ0YXJnZXRPYmplY3QiLCJkZWZhdWx0VmFsdWUiLCJwcm9wZXJ0eUtleSIsImdldE93blByb3BlcnR5U3ltYm9scyIsImdldE93blByb3BlcnR5TmFtZXMiLCJwcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZm9yRWFjaCIsImtleSIsImNvbmNhdGluYXRlQXJyYXlNZXJnZSIsImRlZmF1bHRMaXN0Iiwib3ZlcnJpZGluZ0xpc3QiLCJvcHRpb25zIiwiZGVzdGluYXRpb24iLCJzbGljZSIsImNvbmNhdCIsImNvbWJpbmVBcnJheU1lcmdlIiwiaXRlbSIsImNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkIiwiaXNNZXJnZWFibGVPYmplY3QiLCJhcnJheU1lcmdlIiwiaW5kZXhPZiIsInB1c2giLCJkZWVwTWVyZ2VBcmd1bWVudEFycmF5Iiwib3ZlcnJpZGluZ0FycmF5IiwiZGVmYXVsdEFycmF5IiwiZGVlcE1lcmdlUGFyYW1ldGVyIiwidGFyZ2V0QXJnQXJyYXkiLCJkZWZhdWx0QXJndW1lbnRMaXN0QXJyYXkiXSwibWFwcGluZ3MiOiI2UkFBQTtBQUNBO0FBQ0EsTUFBTUEsY0FBYyxHQUFHQyxNQUFNLENBQUNDLFNBQVAsQ0FBaUJGLGNBQXhDOzs7QUFHTyxNQUFNRyxzQkFBc0IsR0FBRyxDQUFDLEVBQUVDLE1BQUYsRUFBVUMsWUFBVixFQUF3QkMsS0FBeEIsRUFBRCxLQUF5RjtBQUM3SCx1QkFBT0QsWUFBUCxFQUFxQixrQ0FBckI7O0FBRUEsTUFBSSxDQUFDRSxLQUFLLENBQUNDLE9BQU4sQ0FBY0gsWUFBZCxDQUFMLEVBQWtDQSxZQUFZLEdBQUcsQ0FBQ0EsWUFBRCxDQUFmO0FBQ2xDLE1BQUlJLGNBQWMsR0FBR0wsTUFBckI7QUFDQSxPQUFLLElBQUlNLEtBQVQsSUFBa0JMLFlBQWxCLEVBQWdDO0FBQzlCLFFBQUksQ0FBQ0wsY0FBYyxDQUFDVyxJQUFmLENBQW9CRixjQUFwQixFQUFvQ0osWUFBWSxDQUFDSyxLQUFELENBQWhELENBQUwsRUFBK0Q7O0FBRTdEVCxNQUFBQSxNQUFNLENBQUNXLGNBQVAsQ0FBc0JILGNBQXRCLEVBQXNDSixZQUFZLENBQUNLLEtBQUQsQ0FBbEQsRUFBMkQsRUFBRUcsVUFBVSxFQUFFLElBQWQsRUFBb0JDLFFBQVEsRUFBRSxJQUE5QixFQUFvQ1IsS0FBSyxFQUFFLEVBQTNDLEVBQTNEO0FBQ0Q7QUFDREcsSUFBQUEsY0FBYyxHQUFHQSxjQUFjLENBQUNKLFlBQVksQ0FBQ0ssS0FBRCxDQUFiLENBQS9CO0FBQ0Q7QUFDRFQsRUFBQUEsTUFBTSxDQUFDYyxNQUFQLENBQWNOLGNBQWQsRUFBOEJILEtBQTlCO0FBQ0EsU0FBT0YsTUFBUDtBQUNELENBZE0sQzs7O0FBaUJBLE1BQU1ZLDBCQUEwQixHQUFHLENBQUNDLFlBQUQsRUFBZUMsWUFBZixLQUF3Qzs7QUFFaEYsTUFBSUMsV0FBVyxHQUFHLENBQUMsR0FBR2xCLE1BQU0sQ0FBQ21CLHFCQUFQLENBQTZCRixZQUE3QixDQUFKLEVBQWdELEdBQUdqQixNQUFNLENBQUNvQixtQkFBUCxDQUEyQkgsWUFBM0IsQ0FBbkQsQ0FBbEI7QUFDQSxNQUFJSSxrQkFBa0IsR0FBR3JCLE1BQU0sQ0FBQ3NCLHlCQUFQLENBQWlDTCxZQUFqQyxDQUF6QjtBQUNBQyxFQUFBQSxXQUFXLENBQUNLLE9BQVosQ0FBb0JDLEdBQUcsSUFBSTtBQUN6QixRQUFJLENBQUN6QixjQUFjLENBQUNXLElBQWYsQ0FBb0JNLFlBQXBCLEVBQWtDUSxHQUFsQyxDQUFMLEVBQTZDeEIsTUFBTSxDQUFDVyxjQUFQLENBQXNCSyxZQUF0QixFQUFvQ1EsR0FBcEMsRUFBeUNILGtCQUFrQixDQUFDRyxHQUFELENBQTNEO0FBQzlDLEdBRkQ7QUFHRCxDQVBNLEM7OztBQVVQLE1BQU1DLHFCQUFxQixHQUFHLENBQUNDLFdBQUQsRUFBY0MsY0FBZCxFQUE4QkMsT0FBOUIsS0FBMEM7QUFDdEUsUUFBTUMsV0FBVyxHQUFHSCxXQUFXLENBQUNJLEtBQVosRUFBcEI7QUFDQUQsRUFBQUEsV0FBVyxDQUFDRSxNQUFaLENBQW1CSixjQUFuQjtBQUNBLFNBQU9FLFdBQVA7QUFDRCxDQUpEOztBQU1BLE1BQU1HLGlCQUFpQixHQUFHLENBQUNOLFdBQUQsRUFBY0MsY0FBZCxFQUE4QkMsT0FBOUIsS0FBMEM7QUFDbEUsUUFBTUMsV0FBVyxHQUFHSCxXQUFXLENBQUNJLEtBQVosRUFBcEI7QUFDQUgsRUFBQUEsY0FBYyxDQUFDSixPQUFmLENBQXVCLENBQUNVLElBQUQsRUFBT3hCLEtBQVAsS0FBaUI7QUFDdEMsUUFBSSxPQUFPb0IsV0FBVyxDQUFDcEIsS0FBRCxDQUFsQixLQUE4QixXQUFsQyxFQUErQztBQUM3Q29CLE1BQUFBLFdBQVcsQ0FBQ3BCLEtBQUQsQ0FBWCxHQUFxQm1CLE9BQU8sQ0FBQ00sNkJBQVIsQ0FBc0NELElBQXRDLEVBQTRDTCxPQUE1QyxDQUFyQjtBQUNELEtBRkQsTUFFTyxJQUFJQSxPQUFPLENBQUNPLGlCQUFSLENBQTBCRixJQUExQixDQUFKLEVBQXFDO0FBQzFDSixNQUFBQSxXQUFXLENBQUNwQixLQUFELENBQVgsR0FBcUIsd0JBQU1pQixXQUFXLENBQUNqQixLQUFELENBQWpCLEVBQTBCd0IsSUFBMUIsRUFBZ0MsRUFBRUcsVUFBVSxFQUFFWCxxQkFBZCxFQUFoQyxDQUFyQjtBQUNELEtBRk0sTUFFQSxJQUFJQyxXQUFXLENBQUNXLE9BQVosQ0FBb0JKLElBQXBCLE1BQThCLENBQUMsQ0FBbkMsRUFBc0M7QUFDM0NKLE1BQUFBLFdBQVcsQ0FBQ1MsSUFBWixDQUFpQkwsSUFBakI7QUFDRDtBQUNGLEdBUkQ7QUFTQSxTQUFPSixXQUFQO0FBQ0QsQ0FaRDs7Ozs7Ozs7O0FBcUJBLE1BQU1VLHNCQUFzQixHQUFHLENBQUMsRUFBRUMsZUFBRixFQUFtQkMsWUFBbkIsRUFBRCxLQUF3RTs7QUFFckcsU0FBTyx3QkFBTUEsWUFBTixFQUFtRUQsZUFBbkUsRUFBb0YsRUFBRUosVUFBVSxFQUFFSixpQkFBZCxFQUFwRixDQUFQO0FBQ0QsQ0FIRDs7Ozs7OztBQVVPLFNBQVNVLGtCQUFULENBQTRCQyxjQUE1QixFQUE0QyxHQUFHQyx3QkFBL0MsRUFBeUU7QUFDOUUsT0FBSyxJQUFJSCxZQUFULElBQXlCRyx3QkFBekIsRUFBbURELGNBQWMsR0FBR0osc0JBQXNCLENBQUMsRUFBRUMsZUFBZSxFQUFFRyxjQUFuQixFQUFtQ0YsWUFBbkMsRUFBRCxDQUF2QztBQUNuRCxTQUFPRSxjQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXNzZXJ0IGZyb20gJ2Fzc2VydCdcbmltcG9ydCBtZXJnZSBmcm9tICdkZWVwbWVyZ2UnXG5jb25zdCBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkgLy8gYWxsb3dzIHN1cHBvcnRpbmcgb2JqZWN0cyBkZWxlZmF0aW5nIG51bGwuXG5cbi8vIHN1cHBvcnRzIG11bHRpcGxlIG5lc3RlZCBwcm9wZXJ0aWVzIChwcm9wZXJ0eSBwYXRoIGFycmF5KVxuZXhwb3J0IGNvbnN0IG1lcmdlT3duTmVzdGVkUHJvcGVydHkgPSAoeyB0YXJnZXQsIHByb3BlcnR5UGF0aCwgdmFsdWUgfTogeyBwcm9wZXJ0eVBhdGg6IEFycmF5IHwgU3RyaW5nIC8qUHJvcGVydHkgcGF0aCovIH0pID0+IHtcbiAgYXNzZXJ0KHByb3BlcnR5UGF0aCwgJ+KAoiBgcHJvcGVydHlQYXRoYCBtdXN0IGJlIHBhc3NlZC4nKVxuXG4gIGlmICghQXJyYXkuaXNBcnJheShwcm9wZXJ0eVBhdGgpKSBwcm9wZXJ0eVBhdGggPSBbcHJvcGVydHlQYXRoXVxuICBsZXQgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRcbiAgZm9yIChsZXQgaW5kZXggaW4gcHJvcGVydHlQYXRoKSB7XG4gICAgaWYgKCFoYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldFByb3BlcnR5LCBwcm9wZXJ0eVBhdGhbaW5kZXhdKSkge1xuICAgICAgLy8gY3JlYXRlIHByb3BlcnR5IHBhdGggcmVjdXNpdmVseVxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldFByb3BlcnR5LCBwcm9wZXJ0eVBhdGhbaW5kZXhdLCB7IGVudW1lcmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlLCB2YWx1ZToge30gfSlcbiAgICB9XG4gICAgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRQcm9wZXJ0eVtwcm9wZXJ0eVBhdGhbaW5kZXhdXVxuICB9XG4gIE9iamVjdC5hc3NpZ24odGFyZ2V0UHJvcGVydHksIHZhbHVlKVxuICByZXR1cm4gdGFyZ2V0XG59XG5cbi8vIHNldCBwcm9wZXJ0aWVzIG9ubHkgaWYgdGhleSBkbyBub3QgZXhpc3Qgb24gdGhlIHRhcmdldCBvYmplY3QuIE5vdCB1c2luZyBgT2JqZWN0LmVudGVyaWVzYCBiZWNhdXNlIGl0IGlnbm9yZXMgc3ltYm9scyBhcyBrZXlzLlxuZXhwb3J0IGNvbnN0IG1lcmdlTm9uZXhpc3RlbnRQcm9wZXJ0aWVzID0gKHRhcmdldE9iamVjdCwgZGVmYXVsdFZhbHVlOiBPYmplY3QpID0+IHtcbiAgLy8gSW1wb3J0YW50OiBmb3IgbG9vcHMgZG8gbm90IHN1cHBvcnQgc3ltYm9sIGtleXMgaXRlcmF0aW9uLCB0aGVyZWZvcmUga2V5cywgdGhlcmVmb3JlIGEgZGlmZmVyZW50IGFwcHJvYWNoIGlzIHRha2VuLlxuICBsZXQgcHJvcGVydHlLZXkgPSBbLi4uT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhkZWZhdWx0VmFsdWUpLCAuLi5PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkZWZhdWx0VmFsdWUpXVxuICBsZXQgcHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoZGVmYXVsdFZhbHVlKVxuICBwcm9wZXJ0eUtleS5mb3JFYWNoKGtleSA9PiB7XG4gICAgaWYgKCFoYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldE9iamVjdCwga2V5KSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldE9iamVjdCwga2V5LCBwcm9wZXJ0eURlc2NyaXB0b3Jba2V5XSlcbiAgfSlcbn1cblxuLy8gcGx1Z2luIHRvIGBkZWVwbWVyZ2VgIHBhY2thZ2UgZm9yIGFycmF5IG1lcmdpbmdcbmNvbnN0IGNvbmNhdGluYXRlQXJyYXlNZXJnZSA9IChkZWZhdWx0TGlzdCwgb3ZlcnJpZGluZ0xpc3QsIG9wdGlvbnMpID0+IHtcbiAgY29uc3QgZGVzdGluYXRpb24gPSBkZWZhdWx0TGlzdC5zbGljZSgpIC8vIGNyZWF0ZSBhIHNoYWxsb3cgY29weSBpZiBtYW5pcHVsYXRpb24gb2YgdGFyZ2V0IGlzIG5vdCByZXF1aXJlZFxuICBkZXN0aW5hdGlvbi5jb25jYXQob3ZlcnJpZGluZ0xpc3QpXG4gIHJldHVybiBkZXN0aW5hdGlvblxufVxuLy8gcGx1Z2luIHRvIGBkZWVwbWVyZ2VgIHBhY2thZ2UgZm9yIGFycmF5IG1lcmdpbmdcbmNvbnN0IGNvbWJpbmVBcnJheU1lcmdlID0gKGRlZmF1bHRMaXN0LCBvdmVycmlkaW5nTGlzdCwgb3B0aW9ucykgPT4ge1xuICBjb25zdCBkZXN0aW5hdGlvbiA9IGRlZmF1bHRMaXN0LnNsaWNlKCkgLy8gY3JlYXRlIGEgc2hhbGxvdyBjb3B5IGlmIG1hbmlwdWxhdGlvbiBvZiB0YXJnZXQgaXMgbm90IHJlcXVpcmVkXG4gIG92ZXJyaWRpbmdMaXN0LmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBkZXN0aW5hdGlvbltpbmRleF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBkZXN0aW5hdGlvbltpbmRleF0gPSBvcHRpb25zLmNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKGl0ZW0sIG9wdGlvbnMpXG4gICAgfSBlbHNlIGlmIChvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0KGl0ZW0pKSB7XG4gICAgICBkZXN0aW5hdGlvbltpbmRleF0gPSBtZXJnZShkZWZhdWx0TGlzdFtpbmRleF0sIGl0ZW0sIHsgYXJyYXlNZXJnZTogY29uY2F0aW5hdGVBcnJheU1lcmdlIH0pXG4gICAgfSBlbHNlIGlmIChkZWZhdWx0TGlzdC5pbmRleE9mKGl0ZW0pID09PSAtMSkge1xuICAgICAgZGVzdGluYXRpb24ucHVzaChpdGVtKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGRlc3RpbmF0aW9uXG59XG4vKiogTWVyZ2UgYXJndW1lbnRzIGFycmF5IHdpdGggbWVyZ2luZyB0aGUgaXRlbXMgcmVjdXJzaXZlbHk6XG4gKiBUaGUgYXJndW1lbnRzIGFycmF5IHdpbGwgY29tYmluZWQvbWVyZ2VkIGJ5IGluZGV4LlxuICogSXRlbXMgb2YgdGhlIGFyZ3VtZW50cyBhcnJheSB3aWxsIGJlIG1lcmdlZCByZWN1cnNpdmVseTpcbiAgICAgIC0gT2JqZWN0cyB3aWxsIGJlIG1lcmdlZCAoc2ltaWxhciB0byBPYmplY3QuYXNzaWduKS4gXG4gICAgICAtIEFycmF5cyB3aWxsIGJlIGNvbmNhdGVuYXRlZCAoYWRkZWQgdG8gZWFjaCBvdGhlciwgbm90IGNvbWJpbmVkIGJ5IGluZGV4KS5cblxuICBTZWUgZXhhbXBsZXMgRnJvbSBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9kZWVwbWVyZ2VcbiAqL1xuY29uc3QgZGVlcE1lcmdlQXJndW1lbnRBcnJheSA9ICh7IG92ZXJyaWRpbmdBcnJheSwgZGVmYXVsdEFycmF5IC8qKiBhcmd1bWVudHMgdXNlZCBhcyBkZWZhdWx0ICovIH0pID0+IHtcbiAgLy8gbWVyZ2UgYXJndW1lbnRzIHdpdGggZGVmYXVsdCBwYXJhbWV0ZXJzXG4gIHJldHVybiBtZXJnZShkZWZhdWx0QXJyYXkgLyoqIGRlZmF1bHQgb2JqZWN0cyBtdXN0IG5vdCBiZSBtYW5pcHVsYXRlZCAqLywgb3ZlcnJpZGluZ0FycmF5LCB7IGFycmF5TWVyZ2U6IGNvbWJpbmVBcnJheU1lcmdlIH0pIC8vID0+IFt7IGE6IHRydWUsIGI6IHRydWUgfSwgJ2FoIHl1cCddXG59XG5cbi8qKlxuICogTWVyZ2UgYXJndW1lbnQgbGlzdHNcbiAqIEBwYXJhbSB0YXJnZXRBcmdBcnJheSB0aGUgbGlzdCB0byBiZSBtYW5pcHVsYXRlZFxuICogQHBhcmFtIGRlZmF1bHRBcmd1bWVudExpc3RBcnJheSBhcnJheSBvZiBhcmd1bW5ldCBsaXN0c1xuICovXG5leHBvcnQgZnVuY3Rpb24gZGVlcE1lcmdlUGFyYW1ldGVyKHRhcmdldEFyZ0FycmF5LCAuLi5kZWZhdWx0QXJndW1lbnRMaXN0QXJyYXkpIHtcbiAgZm9yIChsZXQgZGVmYXVsdEFycmF5IG9mIGRlZmF1bHRBcmd1bWVudExpc3RBcnJheSkgdGFyZ2V0QXJnQXJyYXkgPSBkZWVwTWVyZ2VBcmd1bWVudEFycmF5KHsgb3ZlcnJpZGluZ0FycmF5OiB0YXJnZXRBcmdBcnJheSwgZGVmYXVsdEFycmF5IH0pXG4gIHJldHVybiB0YXJnZXRBcmdBcnJheVxufVxuIl19
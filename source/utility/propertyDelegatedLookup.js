"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.propertyDelegatedLookup = exports.nestedPropertyDelegatedLookup = void 0;
const hasOwnProperty = Object.prototype.hasOwnProperty;




const nestedPropertyDelegatedLookup = ({
  target,
  recursive = false,
  propertyPath }) =>


{
  return propertyDelegatedLookup({
    target,
    recursive,

    getPropertyCallback: targetObject => {
      if (!Array.isArray(propertyPath)) propertyPath = [propertyPath];
      let propertyValue = targetObject;
      for (let property of propertyPath) {
        if (hasOwnProperty.call(propertyValue, property)) propertyValue = propertyValue[property];else
        return undefined;
      }
      return propertyValue;
    } });

};exports.nestedPropertyDelegatedLookup = nestedPropertyDelegatedLookup;


const propertyDelegatedLookup = ({
  target,
  recursive = false,
  property,

  getPropertyCallback = (target, property) => target[property] ? target[property] : undefined } =
{}) => {
  let aggregatorArray = [],
  breakOnFirstMatch = !recursive;
  do {
    let propertyValue = getPropertyCallback(target, property);
    if (propertyValue != undefined) aggregatorArray.push(propertyValue);
    if (breakOnFirstMatch && aggregatorArray.length > 0) break;
    target = Object.getPrototypeOf(target);
  } while (target != null);
  return recursive ? aggregatorArray : aggregatorArray[0];
};exports.propertyDelegatedLookup = propertyDelegatedLookup;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS91dGlsaXR5L3Byb3BlcnR5RGVsZWdhdGVkTG9va3VwLmpzIl0sIm5hbWVzIjpbImhhc093blByb3BlcnR5IiwiT2JqZWN0IiwicHJvdG90eXBlIiwibmVzdGVkUHJvcGVydHlEZWxlZ2F0ZWRMb29rdXAiLCJ0YXJnZXQiLCJyZWN1cnNpdmUiLCJwcm9wZXJ0eVBhdGgiLCJwcm9wZXJ0eURlbGVnYXRlZExvb2t1cCIsImdldFByb3BlcnR5Q2FsbGJhY2siLCJ0YXJnZXRPYmplY3QiLCJBcnJheSIsImlzQXJyYXkiLCJwcm9wZXJ0eVZhbHVlIiwicHJvcGVydHkiLCJjYWxsIiwidW5kZWZpbmVkIiwiYWdncmVnYXRvckFycmF5IiwiYnJlYWtPbkZpcnN0TWF0Y2giLCJwdXNoIiwibGVuZ3RoIiwiZ2V0UHJvdG90eXBlT2YiXSwibWFwcGluZ3MiOiI7QUFDQSxNQUFNQSxjQUFjLEdBQUdDLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkYsY0FBeEM7Ozs7O0FBS08sTUFBTUcsNkJBQTZCLEdBQUcsQ0FBQztBQUM1Q0MsRUFBQUEsTUFENEM7QUFFNUNDLEVBQUFBLFNBQVMsR0FBRyxLQUZnQztBQUc1Q0MsRUFBQUEsWUFINEMsRUFBRDs7O0FBTXZDO0FBQ0osU0FBT0MsdUJBQXVCLENBQUM7QUFDN0JILElBQUFBLE1BRDZCO0FBRTdCQyxJQUFBQSxTQUY2Qjs7QUFJN0JHLElBQUFBLG1CQUFtQixFQUFFQyxZQUFZLElBQUk7QUFDbkMsVUFBSSxDQUFDQyxLQUFLLENBQUNDLE9BQU4sQ0FBY0wsWUFBZCxDQUFMLEVBQWtDQSxZQUFZLEdBQUcsQ0FBQ0EsWUFBRCxDQUFmO0FBQ2xDLFVBQUlNLGFBQWEsR0FBR0gsWUFBcEI7QUFDQSxXQUFLLElBQUlJLFFBQVQsSUFBcUJQLFlBQXJCLEVBQW1DO0FBQ2pDLFlBQUlOLGNBQWMsQ0FBQ2MsSUFBZixDQUFvQkYsYUFBcEIsRUFBbUNDLFFBQW5DLENBQUosRUFBa0RELGFBQWEsR0FBR0EsYUFBYSxDQUFDQyxRQUFELENBQTdCLENBQWxEO0FBQ0ssZUFBT0UsU0FBUDtBQUNOO0FBQ0QsYUFBT0gsYUFBUDtBQUNELEtBWjRCLEVBQUQsQ0FBOUI7O0FBY0QsQ0FyQk0sQzs7O0FBd0JBLE1BQU1MLHVCQUF1QixHQUFHLENBQUM7QUFDdENILEVBQUFBLE1BRHNDO0FBRXRDQyxFQUFBQSxTQUFTLEdBQUcsS0FGMEI7QUFHdENRLEVBQUFBLFFBSHNDOztBQUt0Q0wsRUFBQUEsbUJBQW1CLEdBQUcsQ0FBQ0osTUFBRCxFQUFTUyxRQUFULEtBQXVCVCxNQUFNLENBQUNTLFFBQUQsQ0FBTixHQUFtQlQsTUFBTSxDQUFDUyxRQUFELENBQXpCLEdBQXNDRSxTQUw3QztBQU1wQyxFQU5tQyxLQU01QjtBQUNULE1BQUlDLGVBQWUsR0FBRyxFQUF0QjtBQUNFQyxFQUFBQSxpQkFBaUIsR0FBRyxDQUFDWixTQUR2QjtBQUVBLEtBQUc7QUFDRCxRQUFJTyxhQUFhLEdBQUdKLG1CQUFtQixDQUFDSixNQUFELEVBQVNTLFFBQVQsQ0FBdkM7QUFDQSxRQUFJRCxhQUFhLElBQUlHLFNBQXJCLEVBQWdDQyxlQUFlLENBQUNFLElBQWhCLENBQXFCTixhQUFyQjtBQUNoQyxRQUFJSyxpQkFBaUIsSUFBSUQsZUFBZSxDQUFDRyxNQUFoQixHQUF5QixDQUFsRCxFQUFxRDtBQUNyRGYsSUFBQUEsTUFBTSxHQUFHSCxNQUFNLENBQUNtQixjQUFQLENBQXNCaEIsTUFBdEIsQ0FBVDtBQUNELEdBTEQsUUFLU0EsTUFBTSxJQUFJLElBTG5CO0FBTUEsU0FBT0MsU0FBUyxHQUFHVyxlQUFILEdBQXFCQSxlQUFlLENBQUMsQ0FBRCxDQUFwRDtBQUNELENBaEJNLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtZXRhZGF0YSB9IGZyb20gJy4uL2Z1bmN0aW9uYWxpdHlQcm90b3R5cGUvU3ltYm9sLnJlZmVyZW5jZS5qcydcbmNvbnN0IGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSAvLyBhbGxvd3Mgc3VwcG9ydGluZyBvYmplY3RzIGRlbGVmYXRpbmcgbnVsbC5cblxuLyoqIExvb2t1cCBhbGdvcml0aG0gdXNlZCBieSAnZnVuY3Rpb25hbGl0eSBwcm90b3R5cGUnLlxuICogSW4gY2FzZSBtdWx0aXBsZSBtYXRjaGluZyBwcm9wZXJ0aWVzIHRoZSBhcnJheSBwcm9kdWNlcyBpcyBvcmRlcmVkIGZyb20gdGhlIHRhcmdldCBvYmplY3QgcHJvcGVydHkgdG8gdGhlIGRlbGVnYXRlZCAocGFyZW50KSBvYmplY3RzYCBwcm9wZXJ0aWVzLiAvLyBwcm9wZXJ0eSBpcyBuZXN0ZWQgaW4gbXVsdGlwbGUgbGV2ZWxzIGUuZy4gdGFyZ2V0W3N5bWJvbF1ba2V5XVtwcm9wZXJ0eV1cbiAqL1xuZXhwb3J0IGNvbnN0IG5lc3RlZFByb3BlcnR5RGVsZWdhdGVkTG9va3VwID0gKHtcbiAgdGFyZ2V0LFxuICByZWN1cnNpdmUgPSBmYWxzZSxcbiAgcHJvcGVydHlQYXRoLCAvLyBkaXJlY3QgcHJvcGVydHkgLyBiYXNlIHByb3BlcnR5IHRvIGNoZWNrIGluLlxufToge1xuICBwcm9wZXJ0eVBhdGg6IEFycmF5IHwgU3RyaW5nLFxufSkgPT4ge1xuICByZXR1cm4gcHJvcGVydHlEZWxlZ2F0ZWRMb29rdXAoe1xuICAgIHRhcmdldCxcbiAgICByZWN1cnNpdmUsXG4gICAgLy8gbXVsdGlwbGUgbmVzdGVkIHByb3BlcnRpZXMgbG9va3VwXG4gICAgZ2V0UHJvcGVydHlDYWxsYmFjazogdGFyZ2V0T2JqZWN0ID0+IHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wZXJ0eVBhdGgpKSBwcm9wZXJ0eVBhdGggPSBbcHJvcGVydHlQYXRoXSAvLyB1c2Ugc2FtZSBpbXBsZW1lbnRhdGlvbiBmb3IgYWxsIGNhc2VzLlxuICAgICAgbGV0IHByb3BlcnR5VmFsdWUgPSB0YXJnZXRPYmplY3RcbiAgICAgIGZvciAobGV0IHByb3BlcnR5IG9mIHByb3BlcnR5UGF0aCkge1xuICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChwcm9wZXJ0eVZhbHVlLCBwcm9wZXJ0eSkpIHByb3BlcnR5VmFsdWUgPSBwcm9wZXJ0eVZhbHVlW3Byb3BlcnR5XVxuICAgICAgICBlbHNlIHJldHVybiB1bmRlZmluZWRcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcm9wZXJ0eVZhbHVlXG4gICAgfSxcbiAgfSlcbn1cblxuLy8gbG9va3VwIHJlY3Vyc2l2ZWx5IGZvciBwcm9wZXJ0eSBvbiB0YXJnZXRcbmV4cG9ydCBjb25zdCBwcm9wZXJ0eURlbGVnYXRlZExvb2t1cCA9ICh7XG4gIHRhcmdldCwgLy8gdGhlIG9iamVjdCB0byBsb29rdXAgcHJvcGVydHkgb24uXG4gIHJlY3Vyc2l2ZSA9IGZhbHNlLCAvLyByZWN1c2l2ZWx5IGxvb2t1cCBhbmQgYWxsb3cgdG8gcmV0dXJuIG11bHRpcGxlIHJlc3VsdHMuXG4gIHByb3BlcnR5LCAvLyBvcHRpb25hbCBhcyB0aGUgcHJvcGVydHkga2V5IGNhbiBiZSBpbiB0aGUgY2xvc3VyZSBvZiB0aGUgY2FsbGJhY2sgZnVuY3Rpb24uXG4gIC8vIGNhbGxiYWNrIHRvIGhhbmQgb3ZlciBjb250cm9sIHRvIGNhbGxlciBmdW5jdGlvbi5cbiAgZ2V0UHJvcGVydHlDYWxsYmFjayA9ICh0YXJnZXQsIHByb3BlcnR5KSA9PiAodGFyZ2V0W3Byb3BlcnR5XSA/IHRhcmdldFtwcm9wZXJ0eV0gOiB1bmRlZmluZWQpLFxufSA9IHt9KSA9PiB7XG4gIGxldCBhZ2dyZWdhdG9yQXJyYXkgPSBbXSxcbiAgICBicmVha09uRmlyc3RNYXRjaCA9ICFyZWN1cnNpdmVcbiAgZG8ge1xuICAgIGxldCBwcm9wZXJ0eVZhbHVlID0gZ2V0UHJvcGVydHlDYWxsYmFjayh0YXJnZXQsIHByb3BlcnR5KSAvLyBjYWxsYmFjayBzaG91bGQgZGVjaWRlIHdoZXRoZXIgdG8gYWRkIHZhbHVlIHRvIHRoZSBhcnJheSBpZiBmb3VuZC5cbiAgICBpZiAocHJvcGVydHlWYWx1ZSAhPSB1bmRlZmluZWQpIGFnZ3JlZ2F0b3JBcnJheS5wdXNoKHByb3BlcnR5VmFsdWUpXG4gICAgaWYgKGJyZWFrT25GaXJzdE1hdGNoICYmIGFnZ3JlZ2F0b3JBcnJheS5sZW5ndGggPiAwKSBicmVhayAvLyBicmVhayBpbiBjYXNlIG9ubHkgYSBzaW5nbGUgbWF0Y2ggaXMgcmVxdWlyZWQuXG4gICAgdGFyZ2V0ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRhcmdldClcbiAgfSB3aGlsZSAodGFyZ2V0ICE9IG51bGwpXG4gIHJldHVybiByZWN1cnNpdmUgPyBhZ2dyZWdhdG9yQXJyYXkgOiBhZ2dyZWdhdG9yQXJyYXlbMF1cbn1cbiJdfQ==
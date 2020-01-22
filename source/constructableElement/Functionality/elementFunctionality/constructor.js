"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.apply = apply;exports.$ = void 0;

var _prototypeMethod = require("../prototypeMethod.js");





const $ = {

  constructor: {
    switch: Symbol('constructor.switch'),
    setter: Symbol('constructor.setter'),
    getter: Symbol('constructor.getter'),
    fallback: Symbol('constructor.fallback'),
    list: Symbol('constructor.list') } };exports.$ = $;





const f = {


  switch: (0, _prototypeMethod.createSwitch)({ fallbackPropertyPath: [$.constructor.fallback], implementationGetterPropertyPath: [$.constructor.getter] }),

  setter: (0, _prototypeMethod.mergeOwnNestedPropertyCurried)({ property: [$.constructor.list] }),
  getter: (0, _prototypeMethod.nestedPropertyDelegatedLookupCurried)({ baseProperty: [$.constructor.list] }) };



function apply(targetObject) {

  Object.assign(targetObject, {
    [$.constructor.switch]: f.switch,
    [$.constructor.getter]: f.getter,
    [$.constructor.setter]: f.setter,
    [$.constructor.list]: {},
    [$.constructor.fallback]: undefined });

  return targetObject;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NvdXJjZS9jb25zdHJ1Y3RhYmxlRWxlbWVudC9GdW5jdGlvbmFsaXR5L2VsZW1lbnRGdW5jdGlvbmFsaXR5L2NvbnN0cnVjdG9yLmpzIl0sIm5hbWVzIjpbIiQiLCJjb25zdHJ1Y3RvciIsInN3aXRjaCIsIlN5bWJvbCIsInNldHRlciIsImdldHRlciIsImZhbGxiYWNrIiwibGlzdCIsImYiLCJmYWxsYmFja1Byb3BlcnR5UGF0aCIsImltcGxlbWVudGF0aW9uR2V0dGVyUHJvcGVydHlQYXRoIiwicHJvcGVydHkiLCJiYXNlUHJvcGVydHkiLCJhcHBseSIsInRhcmdldE9iamVjdCIsIk9iamVjdCIsImFzc2lnbiIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7Ozs7O0FBTU8sTUFBTUEsQ0FBQyxHQUFHOztBQUVmQyxFQUFBQSxXQUFXLEVBQUU7QUFDWEMsSUFBQUEsTUFBTSxFQUFFQyxNQUFNLENBQUMsb0JBQUQsQ0FESDtBQUVYQyxJQUFBQSxNQUFNLEVBQUVELE1BQU0sQ0FBQyxvQkFBRCxDQUZIO0FBR1hFLElBQUFBLE1BQU0sRUFBRUYsTUFBTSxDQUFDLG9CQUFELENBSEg7QUFJWEcsSUFBQUEsUUFBUSxFQUFFSCxNQUFNLENBQUMsc0JBQUQsQ0FKTDtBQUtYSSxJQUFBQSxJQUFJLEVBQUVKLE1BQU0sQ0FBQyxrQkFBRCxDQUxELEVBRkUsRUFBVixDOzs7Ozs7QUFhUCxNQUFNSyxDQUFDLEdBQUc7OztBQUdSTixFQUFBQSxNQUFNLEVBQUUsbUNBQWEsRUFBRU8sb0JBQW9CLEVBQUUsQ0FBQ1QsQ0FBQyxDQUFDQyxXQUFGLENBQWNLLFFBQWYsQ0FBeEIsRUFBa0RJLGdDQUFnQyxFQUFFLENBQUNWLENBQUMsQ0FBQ0MsV0FBRixDQUFjSSxNQUFmLENBQXBGLEVBQWIsQ0FIQTs7QUFLUkQsRUFBQUEsTUFBTSxFQUFFLG9EQUE4QixFQUFFTyxRQUFRLEVBQUUsQ0FBQ1gsQ0FBQyxDQUFDQyxXQUFGLENBQWNNLElBQWYsQ0FBWixFQUE5QixDQUxBO0FBTVJGLEVBQUFBLE1BQU0sRUFBRSwyREFBcUMsRUFBRU8sWUFBWSxFQUFFLENBQUNaLENBQUMsQ0FBQ0MsV0FBRixDQUFjTSxJQUFmLENBQWhCLEVBQXJDLENBTkEsRUFBVjs7OztBQVVPLFNBQVNNLEtBQVQsQ0FBZUMsWUFBZixFQUE2Qjs7QUFFbENDLEVBQUFBLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjRixZQUFkLEVBQTRCO0FBQzFCLEtBQUNkLENBQUMsQ0FBQ0MsV0FBRixDQUFjQyxNQUFmLEdBQXdCTSxDQUFDLENBQUNOLE1BREE7QUFFMUIsS0FBQ0YsQ0FBQyxDQUFDQyxXQUFGLENBQWNJLE1BQWYsR0FBd0JHLENBQUMsQ0FBQ0gsTUFGQTtBQUcxQixLQUFDTCxDQUFDLENBQUNDLFdBQUYsQ0FBY0csTUFBZixHQUF3QkksQ0FBQyxDQUFDSixNQUhBO0FBSTFCLEtBQUNKLENBQUMsQ0FBQ0MsV0FBRixDQUFjTSxJQUFmLEdBQXNCLEVBSkk7QUFLMUIsS0FBQ1AsQ0FBQyxDQUFDQyxXQUFGLENBQWNLLFFBQWYsR0FBMEJXLFNBTEEsRUFBNUI7O0FBT0EsU0FBT0gsWUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVlcEZyZWV6ZSB9IGZyb20gJ0BkZXBlbmRlbmN5L2hhbmRsZUpTTmF0aXZlRGF0YVN0cnVjdHVyZSdcbmltcG9ydCB7IG5lc3RlZFByb3BlcnR5RGVsZWdhdGVkTG9va3VwIH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0eS9kZWxlZ2F0ZWRMb29rdXAuanMnXG5pbXBvcnQgeyBjcmVhdGVTd2l0Y2gsIG5lc3RlZFByb3BlcnR5RGVsZWdhdGVkTG9va3VwQ3VycmllZCwgbWVyZ2VPd25OZXN0ZWRQcm9wZXJ0eUN1cnJpZWQgfSBmcm9tICcuLi9wcm90b3R5cGVNZXRob2QuanMnXG5pbXBvcnQgKiBhcyBzeW1ib2wgZnJvbSAnLi4vLi4vc2hhcmVkU3ltYm9sLmpzJ1xuXG4vKipcbiAqIFByb2dyYW1tYXRpY0FQSSQgZm9yIHRoZSB0YXJnZXQgZXh0ZWRuaW5nIG9iamVjdCB0byB1c2UuIEVudGl0eSBhcGkgcmVmZXJlbmNlIC0gcmVmZXJlbmNlIHRvIHN5bWJvbCBrZXlzLlxuICoqL1xuZXhwb3J0IGNvbnN0ICQgPSB7XG4gIC8vIENvbnN0cnVjdG9yIGNvbWJpbmVzIGluc3RhbnRpYXRpb24sIHByb3RvdHlwZURlbGVnYXRpb24sICYgaW5pdGlhbGl6YXRpb25cbiAgY29uc3RydWN0b3I6IHtcbiAgICBzd2l0Y2g6IFN5bWJvbCgnY29uc3RydWN0b3Iuc3dpdGNoJyksXG4gICAgc2V0dGVyOiBTeW1ib2woJ2NvbnN0cnVjdG9yLnNldHRlcicpLFxuICAgIGdldHRlcjogU3ltYm9sKCdjb25zdHJ1Y3Rvci5nZXR0ZXInKSxcbiAgICBmYWxsYmFjazogU3ltYm9sKCdjb25zdHJ1Y3Rvci5mYWxsYmFjaycpLFxuICAgIGxpc3Q6IFN5bWJvbCgnY29uc3RydWN0b3IubGlzdCcpLFxuICB9LFxuXG59XG4vLyBkZWVwRnJlZXplKHsgb2JqZWN0OiAkLCBnZXRQcm9wZXJ0eUltcGxlbWVudGF0aW9uOiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB9KVxuXG5jb25zdCBmID0ge1xuICAvLyBbc3ltYm9sLm1ldGFkYXRhXTogeyB0eXBlOiBTeW1ib2woJ0NvbnN0cnVjdG9yIGZ1bmN0aW9uYWxpdHknKSB9LFxuICAvLyBmdW5jdGlvbiB0aGF0IHJlZGlyZWN0cyB0byBhbiBpbXBsZW1lbnRhdGlvblxuICBzd2l0Y2g6IGNyZWF0ZVN3aXRjaCh7IGZhbGxiYWNrUHJvcGVydHlQYXRoOiBbJC5jb25zdHJ1Y3Rvci5mYWxsYmFja10sIGltcGxlbWVudGF0aW9uR2V0dGVyUHJvcGVydHlQYXRoOiBbJC5jb25zdHJ1Y3Rvci5nZXR0ZXJdIH0pLFxuICAvLyBnZXR0ZXIvc2V0dGVyIC0gZnVuY3Rpb25zIGZvciBpbXBsZW1lbnRhdGlvbiBsb29rdXAgYW5kIGFkZGl0aW9uLlxuICBzZXR0ZXI6IG1lcmdlT3duTmVzdGVkUHJvcGVydHlDdXJyaWVkKHsgcHJvcGVydHk6IFskLmNvbnN0cnVjdG9yLmxpc3RdIH0pLFxuICBnZXR0ZXI6IG5lc3RlZFByb3BlcnR5RGVsZWdhdGVkTG9va3VwQ3VycmllZCh7IGJhc2VQcm9wZXJ0eTogWyQuY29uc3RydWN0b3IubGlzdF0gfSksXG59XG4vLyBkZWVwRnJlZXplKHsgb2JqZWN0OiBmdW5jdGlvbmFsaXR5LCBnZXRQcm9wZXJ0eUltcGxlbWVudGF0aW9uOiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzIH0pIC8vIHByZXZlbnQgYWNjaWRlbnRhbCBtYW5pcHVsYXRpb24gb2YgZGVsZWdhdGVkIHByb3RvdHlwZVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHkodGFyZ2V0T2JqZWN0KSB7XG4gIC8vIFtzeW1ib2wubWV0YWRhdGFdOiB7IHR5cGU6IFN5bWJvbCgnQ2xpZW50IGludGVyZmFjZSBmdW5jdGlvbmFsaXR5JykgfSxcbiAgT2JqZWN0LmFzc2lnbih0YXJnZXRPYmplY3QsIHtcbiAgICBbJC5jb25zdHJ1Y3Rvci5zd2l0Y2hdOiBmLnN3aXRjaCxcbiAgICBbJC5jb25zdHJ1Y3Rvci5nZXR0ZXJdOiBmLmdldHRlcixcbiAgICBbJC5jb25zdHJ1Y3Rvci5zZXR0ZXJdOiBmLnNldHRlcixcbiAgICBbJC5jb25zdHJ1Y3Rvci5saXN0XToge30sXG4gICAgWyQuY29uc3RydWN0b3IuZmFsbGJhY2tdOiB1bmRlZmluZWQsXG4gIH0pXG4gIHJldHVybiB0YXJnZXRPYmplY3Rcbn1cbiJdfQ==
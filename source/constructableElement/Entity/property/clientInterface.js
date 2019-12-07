"use strict";var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");var _assert = _interopRequireDefault(require("assert"));
var _mergeProperty = require("../../../utility/mergeProperty.js");
var _delegatedLookup = require("../../../utility/delegatedLookup.js");
var Constructable = _interopRequireWildcard(require("../../Constructable/Constructable.class.js"));
var _instantiate = require("../../Constructable/property/instantiate.js");
var _EntityClass = require("../Entity.class.js");



function stateInstance({ constructorImplementation } = {}, { callerClass = this } = {}) {
  (0, _assert.default)(constructorImplementation, `• "constructorImplementation" parameter must be passed`);
  const _arguments = arguments;

  return new Proxy(function () {}, {



    construct(target, argumentList, proxiedTarget) {

      let parameterList = (0, _delegatedLookup.nestedPropertyDelegatedLookup)({ target: callerClass, recursive: true, propertyPath: _EntityClass.$.parameter });

      if (parameterList.length > 0) argumentList = (0, _mergeProperty.deepMergeParameter)(argumentList, ...parameterList);

      let instance = callerClass[Constructable.$.constructor.switch].call(callerClass, constructorImplementation)({}, ...argumentList);

      return instance;
    },




    apply(target, thisArg, [{ label, parameter = [] } = {}]) {

      let instance = (0, _instantiate.createObjectWithDelegation)({ prototype: callerClass });
      instance[_EntityClass.$.label] = `${label || ''} (configured class/constructable) of ${callerClass[_EntityClass.$.label]}`;
      instance.constructor = callerClass;

      instance[_EntityClass.$.parameter] = parameter;
      instance.clientInterface = stateInstance.call(instance, ..._arguments);

      return { class: instance, clientInterface: instance.clientInterface };
    } });

}

module.exports = {


  [_EntityClass.$.key.stateInstance]: stateInstance };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NvdXJjZS9jb25zdHJ1Y3RhYmxlRWxlbWVudC9FbnRpdHkvcHJvcGVydHkvY2xpZW50SW50ZXJmYWNlLmpzIl0sIm5hbWVzIjpbInN0YXRlSW5zdGFuY2UiLCJjb25zdHJ1Y3RvckltcGxlbWVudGF0aW9uIiwiY2FsbGVyQ2xhc3MiLCJfYXJndW1lbnRzIiwiYXJndW1lbnRzIiwiUHJveHkiLCJjb25zdHJ1Y3QiLCJ0YXJnZXQiLCJhcmd1bWVudExpc3QiLCJwcm94aWVkVGFyZ2V0IiwicGFyYW1ldGVyTGlzdCIsInJlY3Vyc2l2ZSIsInByb3BlcnR5UGF0aCIsIiQiLCJwYXJhbWV0ZXIiLCJsZW5ndGgiLCJpbnN0YW5jZSIsIkNvbnN0cnVjdGFibGUiLCJjb25zdHJ1Y3RvciIsInN3aXRjaCIsImFwcGx5IiwidGhpc0FyZyIsImxhYmVsIiwicHJvdG90eXBlIiwiY2xpZW50SW50ZXJmYWNlIiwiY2xhc3MiLCJtb2R1bGUiLCJleHBvcnRzIiwia2V5Il0sIm1hcHBpbmdzIjoieUxBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUEsU0FBU0EsYUFBVCxDQUF1QixFQUFFQyx5QkFBRixLQUFnQyxFQUF2RCxFQUEyRCxFQUFFQyxXQUFXLEdBQUcsSUFBaEIsS0FBeUIsRUFBcEYsRUFBd0Y7QUFDdEYsdUJBQU9ELHlCQUFQLEVBQW1DLHdEQUFuQztBQUNBLFFBQU1FLFVBQVUsR0FBR0MsU0FBbkI7O0FBRUEsU0FBTyxJQUFJQyxLQUFKLENBQVUsWUFBVyxDQUFFLENBQXZCLEVBQXlCOzs7O0FBSTlCQyxJQUFBQSxTQUFTLENBQUNDLE1BQUQsRUFBU0MsWUFBVCxFQUF1QkMsYUFBdkIsRUFBc0M7O0FBRTdDLFVBQUlDLGFBQWEsR0FBRyxvREFBOEIsRUFBRUgsTUFBTSxFQUFFTCxXQUFWLEVBQXVCUyxTQUFTLEVBQUUsSUFBbEMsRUFBd0NDLFlBQVksRUFBRUMsZUFBRUMsU0FBeEQsRUFBOUIsQ0FBcEI7O0FBRUEsVUFBSUosYUFBYSxDQUFDSyxNQUFkLEdBQXVCLENBQTNCLEVBQThCUCxZQUFZLEdBQUcsdUNBQW1CQSxZQUFuQixFQUFpQyxHQUFHRSxhQUFwQyxDQUFmOztBQUU5QixVQUFJTSxRQUFRLEdBQWdCZCxXQUFXLENBQUNlLGFBQWEsQ0FBQ0osQ0FBZCxDQUFnQkssV0FBaEIsQ0FBNEJDLE1BQTdCLENBQXhCLE1BQUFqQixXQUFXLEVBQWtERCx5QkFBbEQsQ0FBWCxDQUF3RixFQUF4RixFQUE0RixHQUFHTyxZQUEvRixDQUFmOztBQUVBLGFBQU9RLFFBQVA7QUFDRCxLQWI2Qjs7Ozs7QUFrQjlCSSxJQUFBQSxLQUFLLENBQUNiLE1BQUQsRUFBU2MsT0FBVCxFQUFrQixDQUFDLEVBQUVDLEtBQUYsRUFBU1IsU0FBUyxHQUFHLEVBQXJCLEtBQTRCLEVBQTdCLENBQWxCLEVBQW9EOztBQUV2RCxVQUFJRSxRQUFRLEdBQUcsNkNBQTJCLEVBQUVPLFNBQVMsRUFBRXJCLFdBQWIsRUFBM0IsQ0FBZjtBQUNBYyxNQUFBQSxRQUFRLENBQUNILGVBQUVTLEtBQUgsQ0FBUixHQUFxQixHQUFFQSxLQUFLLElBQUksRUFBRyx3Q0FBdUNwQixXQUFXLENBQUNXLGVBQUVTLEtBQUgsQ0FBVSxFQUEvRjtBQUNBTixNQUFBQSxRQUFRLENBQUNFLFdBQVQsR0FBdUJoQixXQUF2Qjs7QUFFQWMsTUFBQUEsUUFBUSxDQUFDSCxlQUFFQyxTQUFILENBQVIsR0FBd0JBLFNBQXhCO0FBQ0FFLE1BQUFBLFFBQVEsQ0FBQ1EsZUFBVCxHQUFxQ3hCLGFBQVYsTUFBQWdCLFFBQVEsRUFBZ0IsR0FBR2IsVUFBbkIsQ0FBbkM7O0FBRUEsYUFBTyxFQUFFc0IsS0FBSyxFQUFFVCxRQUFULEVBQW1CUSxlQUFlLEVBQUVSLFFBQVEsQ0FBQ1EsZUFBN0MsRUFBUDtBQUNELEtBNUI2QixFQUF6QixDQUFQOztBQThCRDs7QUFFREUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCOzs7QUFHZixHQUFDZCxlQUFFZSxHQUFGLENBQU01QixhQUFQLEdBQXVCQSxhQUhSLEVBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFzc2VydCBmcm9tICdhc3NlcnQnXG5pbXBvcnQgeyBkZWVwTWVyZ2VQYXJhbWV0ZXIgfSBmcm9tICcuLi8uLi8uLi91dGlsaXR5L21lcmdlUHJvcGVydHkuanMnXG5pbXBvcnQgeyBuZXN0ZWRQcm9wZXJ0eURlbGVnYXRlZExvb2t1cCB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdHkvZGVsZWdhdGVkTG9va3VwLmpzJ1xuaW1wb3J0ICogYXMgQ29uc3RydWN0YWJsZSBmcm9tICcuLi8uLi9Db25zdHJ1Y3RhYmxlL0NvbnN0cnVjdGFibGUuY2xhc3MuanMnXG5pbXBvcnQgeyBjcmVhdGVPYmplY3RXaXRoRGVsZWdhdGlvbiB9IGZyb20gJy4uLy4uL0NvbnN0cnVjdGFibGUvcHJvcGVydHkvaW5zdGFudGlhdGUuanMnXG5pbXBvcnQgeyAkIH0gZnJvbSAnLi4vRW50aXR5LmNsYXNzLmpzJ1xuXG4vLyBFbnRpdHkgaW5zdGFuY2UgcmVsYXRpbmcgdG8gcHJvdG90eXBlIGNoYWluIHdpdGggZnVuY3Rpb25hbGl0eSBzcGVjaWZpYyB0byB0aGUgaW1wbGVtZW50ZXIgY2xhc3MgKHN1YiBjbGFzcywgZS5nLiBHcmFwaCBFbGVtZW50KS4gY3JlYXRlIGluc3RhbmNlcyB3aXRoIGN1c3RvbSBwcm90b3R5cGUgY2hhaW5zLlxuLy8gY3JlYXRlIGFuIGluc3RhbmNlIHVzaW5nIGVudGl0eSBkZWZpbmVkIHByb3RvdHlwZSBhbmQgaW5uaXRpYWxpemF0aW9uIGZ1bmN0aW9ucy4gVXNlZCBieSBFbnRpdHkgY2xhc3NlcyB0byBjcmVhdGUgYW4gaW50ZXJmYWNlIGZvciB0aGVpciBjbGFzcy5cbmZ1bmN0aW9uIHN0YXRlSW5zdGFuY2UoeyBjb25zdHJ1Y3RvckltcGxlbWVudGF0aW9uIH0gPSB7fSwgeyBjYWxsZXJDbGFzcyA9IHRoaXMgfSA9IHt9KSB7XG4gIGFzc2VydChjb25zdHJ1Y3RvckltcGxlbWVudGF0aW9uLCBg4oCiIFwiY29uc3RydWN0b3JJbXBsZW1lbnRhdGlvblwiIHBhcmFtZXRlciBtdXN0IGJlIHBhc3NlZGApXG4gIGNvbnN0IF9hcmd1bWVudHMgPSBhcmd1bWVudHNcblxuICByZXR1cm4gbmV3IFByb3h5KGZ1bmN0aW9uKCkge30sIHtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHsgc3RhdGUgaW5zdGFuY2UgfSBkYXRhIGluc3RhbmNlIGRlbGVnYXRpbmcgdG8gdGhlIHJlc3BlY3RpdmUgZGVsZWdhdGlvbiBzZXR0aW5nIGRlZmluZWQgaW4gRW50aXR5LlxuICAgICAqL1xuICAgIGNvbnN0cnVjdCh0YXJnZXQsIGFyZ3VtZW50TGlzdCwgcHJveGllZFRhcmdldCkge1xuICAgICAgLy8gbWVtb2l6YXRpb24gLSByZWN1cnNpdmUgbG9va3VwIGZvciBwYXJhbWV0ZXIga2V5IGFuZCBtZXJnZSB0byB0aGUgYXJndW1lbnRzIGxpc3Q6XG4gICAgICBsZXQgcGFyYW1ldGVyTGlzdCA9IG5lc3RlZFByb3BlcnR5RGVsZWdhdGVkTG9va3VwKHsgdGFyZ2V0OiBjYWxsZXJDbGFzcywgcmVjdXJzaXZlOiB0cnVlLCBwcm9wZXJ0eVBhdGg6ICQucGFyYW1ldGVyIH0pXG4gICAgICAvLyBpbiBjYXNlIGNvbmZpZ3VyZWQgY29uc3RydWN0YWJsZSB3aGljaCBob2xkcyBkZWZhdWx0IHBhcmFtZXRlciB2YWx1ZXMuXG4gICAgICBpZiAocGFyYW1ldGVyTGlzdC5sZW5ndGggPiAwKSBhcmd1bWVudExpc3QgPSBkZWVwTWVyZ2VQYXJhbWV0ZXIoYXJndW1lbnRMaXN0LCAuLi5wYXJhbWV0ZXJMaXN0KSAvLyBmaXJzdCBwYXJhbWV0ZXIgbGlzdCwgMm5kIGxpc3QsIGN1cnJlbnQgYXJndW1lbnQgbGlzdCA9PiBuZXcgbWVyZ2VkIGFyZ3VtZW50IGxpc3RcblxuICAgICAgbGV0IGluc3RhbmNlID0gY2FsbGVyQ2xhc3M6OmNhbGxlckNsYXNzW0NvbnN0cnVjdGFibGUuJC5jb25zdHJ1Y3Rvci5zd2l0Y2hdKGNvbnN0cnVjdG9ySW1wbGVtZW50YXRpb24pKHt9LCAuLi5hcmd1bWVudExpc3QpXG5cbiAgICAgIHJldHVybiBpbnN0YW5jZVxuICAgIH0sXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7IGNvbnN0cnVjdGFibGUgaW5zdGFuY2U6IG9mIHR5cGUgRW50aXR5IGNsYXNzIH0gY29uZmlndXJlZCBFbnRpdHkgbWV0YWNsYXNzXG4gICAgICogVXNlZCBhcyBhIGN1cnJ5aW5nIG1lY2hhbmlzbSBmb3IgcGFyYW10ZXJzLlxuICAgICAqL1xuICAgIGFwcGx5KHRhcmdldCwgdGhpc0FyZywgW3sgbGFiZWwsIHBhcmFtZXRlciA9IFtdIH0gPSB7fV0pIHtcbiAgICAgIC8vIGNyZWF0ZSBpbnN0YW5jZSBvZiBhIEVudGl0eSB0aGF0IGlzIHByZXBvcHVsYXRlZCB3aXRoIHBhcmFtZXRlcnMsIGNhbGxpbmcgdGhlIGZ1bmN0aW9ucyB3aWxsIHVzZSB0aGVzZSBwYXJhbXMuIFRoaXMgYWxsb3dzIHVzYWdlIG9mIHBhcmFtcyBtdWx0aXBsZSB0aW1lcyB3aXRob3V0IHJlcGVhdGluZyB0aGVtIGluIGVhY2ggcmVxdXJlc3QuXG4gICAgICBsZXQgaW5zdGFuY2UgPSBjcmVhdGVPYmplY3RXaXRoRGVsZWdhdGlvbih7IHByb3RvdHlwZTogY2FsbGVyQ2xhc3MgfSkgLy8gaW5pdGlhbGl6ZSBhIHByb3RvdHlwZSB0aGF0IGlzIGEgY2xhc3MuXG4gICAgICBpbnN0YW5jZVskLmxhYmVsXSA9IGAke2xhYmVsIHx8ICcnfSAoY29uZmlndXJlZCBjbGFzcy9jb25zdHJ1Y3RhYmxlKSBvZiAke2NhbGxlckNsYXNzWyQubGFiZWxdfWBcbiAgICAgIGluc3RhbmNlLmNvbnN0cnVjdG9yID0gY2FsbGVyQ2xhc3MgLy8gdG8gcHJlc2VydmUgZnVuY3Rpb25hbGl0eSBvZiBuYXRpdmUgSlMgZnVuY3Rpb25zIGludGVncmF0aW9uLlxuXG4gICAgICBpbnN0YW5jZVskLnBhcmFtZXRlcl0gPSBwYXJhbWV0ZXJcbiAgICAgIGluc3RhbmNlLmNsaWVudEludGVyZmFjZSA9IGluc3RhbmNlOjpzdGF0ZUluc3RhbmNlKC4uLl9hcmd1bWVudHMpIC8vIFBhc3Mgc2FtZSBhcmd1bWVudHMgZnJvbSBwcmV2aW91cyBjbGllbnQgaXRuZXJmYWNlXG5cbiAgICAgIHJldHVybiB7IGNsYXNzOiBpbnN0YW5jZSwgY2xpZW50SW50ZXJmYWNlOiBpbnN0YW5jZS5jbGllbnRJbnRlcmZhY2UgfVxuICAgIH0sXG4gIH0pXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBbJC5rZXkuY29uc3RydWN0YWJsZUluc3RhbmNlXSAtIHdoZW4gY2FsbGVkIGl0IGlzIGluaGVyaXRlZCBmcm9tIHBhcmVudCBmdW5jdGlvbmFsaXR5LlxuXG4gIFskLmtleS5zdGF0ZUluc3RhbmNlXTogc3RhdGVJbnN0YW5jZSxcbn1cbiJdfQ==
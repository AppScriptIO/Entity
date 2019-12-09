"use strict";var _mergeProperty = require("../../../utility/mergeProperty.js");
var _ConstructableClass = require("../Constructable.class.js");

module.exports = {

  [_ConstructableClass.$.key.constructableInstance]: function ({ instance } = {}, { label } = {}) {

    let constructableInstanceDelegationSetting = this[_ConstructableClass.$.prototypeDelegation.getter].call(this, _ConstructableClass.$.key.constructableInstance);
    Object.setPrototypeOf(instance, constructableInstanceDelegationSetting.instancePrototype);
    instance[_ConstructableClass.$.reference] = Object.create(constructableInstanceDelegationSetting.referencePrototype);

    (0, _mergeProperty.mergeNonexistentProperties)(instance, {
      constructor: this,
      [_ConstructableClass.$.label]: label });














    instance[_ConstructableClass.$.prototypeDelegation.setter].call(instance, {
      [_ConstructableClass.$.key.constructableInstance]: {
        instancePrototype: instance,
        referencePrototype: instance[_ConstructableClass.$.reference] } });



    return instance;
  } };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NvdXJjZS9jb25zdHJ1Y3RhYmxlRWxlbWVudC9Db25zdHJ1Y3RhYmxlL3Byb3BlcnR5L2luaXRpYWxpemUuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIiQiLCJrZXkiLCJjb25zdHJ1Y3RhYmxlSW5zdGFuY2UiLCJpbnN0YW5jZSIsImxhYmVsIiwiY29uc3RydWN0YWJsZUluc3RhbmNlRGVsZWdhdGlvblNldHRpbmciLCJwcm90b3R5cGVEZWxlZ2F0aW9uIiwiZ2V0dGVyIiwiT2JqZWN0Iiwic2V0UHJvdG90eXBlT2YiLCJpbnN0YW5jZVByb3RvdHlwZSIsInJlZmVyZW5jZSIsImNyZWF0ZSIsInJlZmVyZW5jZVByb3RvdHlwZSIsImNvbnN0cnVjdG9yIiwic2V0dGVyIl0sIm1hcHBpbmdzIjoiYUFBQTtBQUNBOztBQUVBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUI7O0FBRWYsR0FBQ0Msc0JBQUVDLEdBQUYsQ0FBTUMscUJBQVAsR0FBK0IsVUFBUyxFQUFFQyxRQUFGLEtBQWUsRUFBeEIsRUFBNEIsRUFBRUMsS0FBRixLQUFZLEVBQXhDLEVBQTRDOztBQUV6RSxRQUFJQyxzQ0FBc0MsR0FBUyxLQUFLTCxzQkFBRU0sbUJBQUYsQ0FBc0JDLE1BQTNCLENBQU4sWUFBeUNQLHNCQUFFQyxHQUFGLENBQU1DLHFCQUEvQyxDQUE3QztBQUNBTSxJQUFBQSxNQUFNLENBQUNDLGNBQVAsQ0FBc0JOLFFBQXRCLEVBQWdDRSxzQ0FBc0MsQ0FBQ0ssaUJBQXZFO0FBQ0FQLElBQUFBLFFBQVEsQ0FBQ0gsc0JBQUVXLFNBQUgsQ0FBUixHQUF3QkgsTUFBTSxDQUFDSSxNQUFQLENBQWNQLHNDQUFzQyxDQUFDUSxrQkFBckQsQ0FBeEI7O0FBRUEsbURBQTJCVixRQUEzQixFQUFxQztBQUNuQ1csTUFBQUEsV0FBVyxFQUFFLElBRHNCO0FBRW5DLE9BQUNkLHNCQUFFSSxLQUFILEdBQVdBLEtBRndCLEVBQXJDOzs7Ozs7Ozs7Ozs7Ozs7QUFpQlVELElBQUFBLFFBQVEsQ0FBQ0gsc0JBQUVNLG1CQUFGLENBQXNCUyxNQUF2QixDQUFsQixNQUFBWixRQUFRLEVBQXlDO0FBQy9DLE9BQUNILHNCQUFFQyxHQUFGLENBQU1DLHFCQUFQLEdBQStCO0FBQzdCUSxRQUFBQSxpQkFBaUIsRUFBRVAsUUFEVTtBQUU3QlUsUUFBQUEsa0JBQWtCLEVBQUVWLFFBQVEsQ0FBQ0gsc0JBQUVXLFNBQUgsQ0FGQyxFQURnQixFQUF6QyxDQUFSOzs7O0FBT0EsV0FBT1IsUUFBUDtBQUNELEdBakNjLEVBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWVyZ2VOb25leGlzdGVudFByb3BlcnRpZXMgfSBmcm9tICcuLi8uLi8uLi91dGlsaXR5L21lcmdlUHJvcGVydHkuanMnXG5pbXBvcnQgeyAkIH0gZnJvbSAnLi4vQ29uc3RydWN0YWJsZS5jbGFzcy5qcydcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIHNldCB0aGUgcHJvcGVydGllcyBuZWNlc3NhcnkgZm9yIENvbnN0cnVjdGFibGUgcGF0dGVybiB1c2FnZS4gICBJbml0aWFsaXplIENvbnN0cnVjdGFibGUgcGF0dGVybiBwcm9wZXJ0aWVzLlxuICBbJC5rZXkuY29uc3RydWN0YWJsZUluc3RhbmNlXTogZnVuY3Rpb24oeyBpbnN0YW5jZSB9ID0ge30sIHsgbGFiZWwgfSA9IHt9KSB7XG4gICAgLy8gQ29uc3RydWN0b3IgcHJvdG90eXBlcyBkZWxlZ2F0ZSB0byBlYWNoIG90aGVyXG4gICAgbGV0IGNvbnN0cnVjdGFibGVJbnN0YW5jZURlbGVnYXRpb25TZXR0aW5nID0gdGhpczo6dGhpc1skLnByb3RvdHlwZURlbGVnYXRpb24uZ2V0dGVyXSgkLmtleS5jb25zdHJ1Y3RhYmxlSW5zdGFuY2UpXG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGluc3RhbmNlLCBjb25zdHJ1Y3RhYmxlSW5zdGFuY2VEZWxlZ2F0aW9uU2V0dGluZy5pbnN0YW5jZVByb3RvdHlwZSkgLy8gaW5oZXJpdCBvd24gYW5kIGRlbGVnYXRlZCBmdW5jdGlvbmFsaXRpZXMuXG4gICAgaW5zdGFuY2VbJC5yZWZlcmVuY2VdID0gT2JqZWN0LmNyZWF0ZShjb25zdHJ1Y3RhYmxlSW5zdGFuY2VEZWxlZ2F0aW9uU2V0dGluZy5yZWZlcmVuY2VQcm90b3R5cGUpXG5cbiAgICBtZXJnZU5vbmV4aXN0ZW50UHJvcGVydGllcyhpbnN0YW5jZSwge1xuICAgICAgY29uc3RydWN0b3I6IHRoaXMsIC8vIGNhbGxlckNsYXNzIHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGUgY3VycmVudCBpbnN0YW5jZSwgbm90IGZvciBzdWJzZXF1ZW50IGluc3RhbmNlcyAhIChpLmUuIGRpZmZlcmVudCBmcm9tIHN0YXRlIGluc3RhbmNlIGNvbnN0cnVjdG9yIHBvcGVydHkgdXNhZ2UgaW4gdGhlIHByb3RvdHlwZSBvZiBhbiBpbnN0YW5jZSwgcmF0aGVyIGl0IGlzIGRpcmVjdGx5IGF2YWlsYWJsZSBvbiB0aGUgaW5zdGFuY2UpIC0gLy8gdG8gcHJlc2VydmUgZnVuY3Rpb25hbGl0eSBvZiBuYXRpdmUgSlMgZnVuY3Rpb25zIGludGVncmF0aW9uLlxuICAgICAgWyQubGFiZWxdOiBsYWJlbCxcblxuICAgICAgLy8gaW4gdXNhZ2UgdGhyb3VnaCBgaW5zdGFuY2VvZmAgSlMgYXBpOiAvLyEgRG9lc24ndCB3b3JrIGFzIGl0IG11c3QgcmV0dXJuIGEgY29uc3RydWN0b3IuXG4gICAgICAvLyBnZXQgW1N5bWJvbC5zcGVjaWVzXSgpIHtcbiAgICAgIC8vICAgcmV0dXJuIGluc3RhbmNlWyQuY2xhc3NdXG4gICAgICAvLyB9LFxuICAgIH0pXG5cbiAgICAvLyBPYmplY3QuZGVmaW5lUHJvcGVydHkoaW5zdGFuY2UsICQubWV0YWRhdGEsIHsgd3JpdGFibGU6IGZhbHNlLCBlbnVtZXJhYmxlOiBmYWxzZSwgdmFsdWU6IGRlc2NyaXB0aW9uIH0pIC8vIHNldCBtZXRhZGF0YSBpbmZvcm1hdGlvbiBmb3IgZGVidWdnaW5nLlxuXG4gICAgLyogXG4gICAgICBzZXQgZGVsZWdhdGlvbiBzZXR0aW5nIGZvciBuZXh0IG5lc3RlZCBpbnN0YW5jZXMgdGhhdCB3aWxsIGJlIGNyZWF0ZWQgLSBjcmVhdGUgbmV3IHByb3RvdHlwZSBhbmQgcmVmZXJlbmNlIGZvciBjb25zdHJ1Y3RhYmxlSW5zdGFuY2UgZGVsZWdhdGlvblxuICAgICAgaS5lLiBuZXcgZGVsZWdhdGlvbiBzZXR0aW5nIG9iamVjdHMgd2lsbCBpbmhlcml0IGZyb20gdGhlIHByZXZpb3VzIGRlbGVnYXRpb24gc2V0dGluZ3Mgb2JqZWN0cy5cbiAgICAgIHNldCBjb25zdHJ1Y3RhYmxlIHByb3RvdHlwZURlbGVnYXRpb24gcHJvcGVydGllcyAtIHZhbHVlcyB3aGljaCB3aWxsIGJlIHVzZWQgaW4gaW5zdGFuY2UgY3JlYXRpb25cbiAgICAqL1xuICAgIGluc3RhbmNlOjppbnN0YW5jZVskLnByb3RvdHlwZURlbGVnYXRpb24uc2V0dGVyXSh7XG4gICAgICBbJC5rZXkuY29uc3RydWN0YWJsZUluc3RhbmNlXToge1xuICAgICAgICBpbnN0YW5jZVByb3RvdHlwZTogaW5zdGFuY2UsIC8vIENvbnN0cnVjdG9yIHByb3RvdHlwZXMgZGVsZWdhdGUgdG8gZWFjaCBvdGhlclxuICAgICAgICByZWZlcmVuY2VQcm90b3R5cGU6IGluc3RhbmNlWyQucmVmZXJlbmNlXSwgLy8gY3JlYXRlIGEgbmV3IG9iamVjdCBmb3IgdGhlIGluc3RhbmNlIHJlZmVyZW5jZVxuICAgICAgfSxcbiAgICB9KVxuXG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH0sXG59XG4iXX0=
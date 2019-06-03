"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.Prototype = void 0;var _Reference = require("./Reference.js");
var _prototypeMethod = require("../prototypeMethod.js");


const Prototype = {

  [_Reference.Reference.clientInterface.functionality]: {
    setter: (0, _prototypeMethod.mergeOwnNestedPropertyCurried)({ property: _Reference.Reference.clientInterface.list }),
    getter: (0, _prototypeMethod.nestedPropertyDelegatedLookupCurried)({ baseProperty: _Reference.Reference.clientInterface.list }),
    switch: (0, _prototypeMethod.createSwitchGeneratorFunction)({ fallbackPropertyPath: _Reference.Reference.clientInterface.fallback, implementationGetterPropertyPath: [_Reference.Reference.clientInterface.functionality, 'getter'] }) },

  [_Reference.Reference.clientInterface.list]: {},
  [_Reference.Reference.clientInterface.fallback]: undefined };exports.Prototype = Prototype;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9mdW5jdGlvbmFsaXR5UHJvdG90eXBlL2NsaWVudEludGVyZmFjZS9Qcm90b3R5cGUuanMiXSwibmFtZXMiOlsiUHJvdG90eXBlIiwiUmVmZXJlbmNlIiwiY2xpZW50SW50ZXJmYWNlIiwiZnVuY3Rpb25hbGl0eSIsInNldHRlciIsInByb3BlcnR5IiwibGlzdCIsImdldHRlciIsImJhc2VQcm9wZXJ0eSIsInN3aXRjaCIsImZhbGxiYWNrUHJvcGVydHlQYXRoIiwiZmFsbGJhY2siLCJpbXBsZW1lbnRhdGlvbkdldHRlclByb3BlcnR5UGF0aCIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6InNHQUFBO0FBQ0E7OztBQUdPLE1BQU1BLFNBQVMsR0FBRzs7QUFFdkIsR0FBQ0MscUJBQVVDLGVBQVYsQ0FBMEJDLGFBQTNCLEdBQTJDO0FBQ3pDQyxJQUFBQSxNQUFNLEVBQUUsb0RBQThCLEVBQUVDLFFBQVEsRUFBRUoscUJBQVVDLGVBQVYsQ0FBMEJJLElBQXRDLEVBQTlCLENBRGlDO0FBRXpDQyxJQUFBQSxNQUFNLEVBQUUsMkRBQXFDLEVBQUVDLFlBQVksRUFBRVAscUJBQVVDLGVBQVYsQ0FBMEJJLElBQTFDLEVBQXJDLENBRmlDO0FBR3pDRyxJQUFBQSxNQUFNLEVBQUUsb0RBQThCLEVBQUVDLG9CQUFvQixFQUFFVCxxQkFBVUMsZUFBVixDQUEwQlMsUUFBbEQsRUFBNERDLGdDQUFnQyxFQUFFLENBQUNYLHFCQUFVQyxlQUFWLENBQTBCQyxhQUEzQixFQUEwQyxRQUExQyxDQUE5RixFQUE5QixDQUhpQyxFQUZwQjs7QUFPdkIsR0FBQ0YscUJBQVVDLGVBQVYsQ0FBMEJJLElBQTNCLEdBQWtDLEVBUFg7QUFRdkIsR0FBQ0wscUJBQVVDLGVBQVYsQ0FBMEJTLFFBQTNCLEdBQXNDRSxTQVJmLEVBQWxCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWZlcmVuY2UgfSBmcm9tICcuL1JlZmVyZW5jZS5qcydcbmltcG9ydCB7IGNyZWF0ZVN3aXRjaEdlbmVyYXRvckZ1bmN0aW9uLCBuZXN0ZWRQcm9wZXJ0eURlbGVnYXRlZExvb2t1cEN1cnJpZWQsIG1lcmdlT3duTmVzdGVkUHJvcGVydHlDdXJyaWVkIH0gZnJvbSAnLi4vcHJvdG90eXBlTWV0aG9kLmpzJ1xuaW1wb3J0ICogYXMgc3ltYm9sIGZyb20gJy4uL1N5bWJvbC5yZWZlcmVuY2UuanMnXG5cbmV4cG9ydCBjb25zdCBQcm90b3R5cGUgPSB7XG4gIC8vIFtzeW1ib2wubWV0YWRhdGFdOiB7IHR5cGU6IFN5bWJvbCgnQ2xpZW50IGludGVyZmFjZSBmdW5jdGlvbmFsaXR5JykgfSxcbiAgW1JlZmVyZW5jZS5jbGllbnRJbnRlcmZhY2UuZnVuY3Rpb25hbGl0eV06IHtcbiAgICBzZXR0ZXI6IG1lcmdlT3duTmVzdGVkUHJvcGVydHlDdXJyaWVkKHsgcHJvcGVydHk6IFJlZmVyZW5jZS5jbGllbnRJbnRlcmZhY2UubGlzdCB9KSxcbiAgICBnZXR0ZXI6IG5lc3RlZFByb3BlcnR5RGVsZWdhdGVkTG9va3VwQ3VycmllZCh7IGJhc2VQcm9wZXJ0eTogUmVmZXJlbmNlLmNsaWVudEludGVyZmFjZS5saXN0IH0pLFxuICAgIHN3aXRjaDogY3JlYXRlU3dpdGNoR2VuZXJhdG9yRnVuY3Rpb24oeyBmYWxsYmFja1Byb3BlcnR5UGF0aDogUmVmZXJlbmNlLmNsaWVudEludGVyZmFjZS5mYWxsYmFjaywgaW1wbGVtZW50YXRpb25HZXR0ZXJQcm9wZXJ0eVBhdGg6IFtSZWZlcmVuY2UuY2xpZW50SW50ZXJmYWNlLmZ1bmN0aW9uYWxpdHksICdnZXR0ZXInXSB9KSxcbiAgfSxcbiAgW1JlZmVyZW5jZS5jbGllbnRJbnRlcmZhY2UubGlzdF06IHt9LFxuICBbUmVmZXJlbmNlLmNsaWVudEludGVyZmFjZS5mYWxsYmFja106IHVuZGVmaW5lZCxcbn1cbiJdfQ==
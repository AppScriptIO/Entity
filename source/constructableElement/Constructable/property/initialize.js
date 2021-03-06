import { mergeNonexistentProperties } from '@dependency/handleJSNativeDataStructure'
import { $ } from '../Constructable.class.js'

module.exports = {
  // set the properties necessary for Constructable pattern usage.   Initialize Constructable pattern properties.
  [$.key.constructableInstance]: function({ instance } = {}, { label } = {}) {
    // Constructor prototypes delegate to each other
    let constructableInstanceDelegationSetting = this::this[$.prototypeDelegation.getter]($.key.constructableInstance)
    Object.setPrototypeOf(instance, constructableInstanceDelegationSetting.instancePrototype) // inherit own and delegated functionalities.
    instance[$.reference] = Object.create(constructableInstanceDelegationSetting.referencePrototype)

    mergeNonexistentProperties(instance, {
      constructor: this, // callerClass responsible for creating the current instance, not for subsequent instances ! (i.e. different from state instance constructor poperty usage in the prototype of an instance, rather it is directly available on the instance) - // to preserve functionality of native JS functions integration.
      [$.label]: label,

      // in usage through `instanceof` JS api: //! Doesn't work as it must return a constructor.
      // get [Symbol.species]() {
      //   return instance[$.class]
      // },
    })

    // Object.defineProperty(instance, $.metadata, { writable: false, enumerable: false, value: description }) // set metadata information for debugging.

    /* 
      set delegation setting for next nested instances that will be created - create new prototype and reference for constructableInstance delegation
      i.e. new delegation setting objects will inherit from the previous delegation settings objects.
      set constructable prototypeDelegation properties - values which will be used in instance creation
    */
    instance::instance[$.prototypeDelegation.setter]({
      [$.key.constructableInstance]: {
        instancePrototype: instance, // Constructor prototypes delegate to each other
        referencePrototype: instance[$.reference], // create a new object for the instance reference
      },
    })

    return instance
  },
}

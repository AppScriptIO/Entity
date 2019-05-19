import { Reference } from './Reference.js'
import { deepFreeze } from '../../utility/deepObjectFreeze.js'
import { mergeNonexistentProperties, mergeOwnNestedProperty } from '../../utility/mergeProperty.js'
import { createSwitchGeneratorFunction, nestedPropertyDelegatedLookup } from '../prototypeMethod.js'
import * as symbol from '../../constructable/Symbol.reference.js'

export const Prototype = {
  [symbol.metadata]: {
    type: Symbol('Instantiate & Initialize functionality'),
  },
  /*
                     _        _                    ____       _                  _   _             
     _ __  _ __ ___ | |_ ___ | |_ _   _ _ __   ___|  _ \  ___| | ___  __ _  __ _| |_(_) ___  _ __  
    | '_ \| '__/ _ \| __/ _ \| __| | | | '_ \ / _ \ | | |/ _ \ |/ _ \/ _` |/ _` | __| |/ _ \| '_ \ 
    | |_) | | | (_) | || (_) | |_| |_| | |_) |  __/ |_| |  __/ |  __/ (_| | (_| | |_| | (_) | | | |
    | .__/|_|  \___/ \__\___/ \__|\__, | .__/ \___|____/ \___|_|\___|\__, |\__,_|\__|_|\___/|_| |_|
    |_|                           |___/|_|                           |___/                         
*/
  [Reference.prototypeDelegation.setter.list](implementation: Object) {
    // set constractor property on prototype //???? Not needed
    // for (const key of Object.keys(implementation)) {
    //   implementation[key].constructor = this
    // }
    return mergeOwnNestedProperty({
      target: this,
      ownProperty: Reference.prototypeDelegation.list,
      value: implementation,
    })
  },
  [Reference.prototypeDelegation.getter.list](implementationKey: String) {
    return nestedPropertyDelegatedLookup({
      target: this,
      directProperty: Reference.prototypeDelegation.list,
      nestedProperty: implementationKey,
    })
  },
  [Reference.prototypeDelegation.list]: {},

  /*
     _           _              _   _       _       
    (_)_ __  ___| |_ __ _ _ __ | |_(_) __ _| |_ ___ 
    | | '_ \/ __| __/ _` | '_ \| __| |/ _` | __/ _ \
    | | | | \__ \ || (_| | | | | |_| | (_| | ||  __/
    |_|_| |_|___/\__\__,_|_| |_|\__|_|\__,_|\__\___|
*/
  [Reference.instantiate.setter.list](implementation: Object) {
    return mergeOwnNestedProperty({ target: this, ownProperty: Reference.instantiate.list, value: implementation })
  },
  [Reference.instantiate.getter.list](implementationKey: String) {
    return nestedPropertyDelegatedLookup({
      target: this,
      directProperty: Reference.instantiate.list,
      nestedProperty: implementationKey,
    })
  },
  [Reference.instantiate.switch]: createSwitchGeneratorFunction({
    fallbackSymbol: Reference.instantiate.fallback,
    implementationListSymbol: Reference.instantiate.getter.list,
  }),
  [Reference.instantiate.list]: {},

  /*
     _       _ _   _       _ _         
    (_)_ __ (_) |_(_) __ _| (_)_______ 
    | | '_ \| | __| |/ _` | | |_  / _ \
    | | | | | | |_| | (_| | | |/ /  __/
    |_|_| |_|_|\__|_|\__,_|_|_/___\___|
*/
  [Reference.initialize.setter.list](implementation: Object) {
    return mergeOwnNestedProperty({ target: this, ownProperty: Reference.initialize.list, value: implementation })
  },
  [Reference.initialize.getter.list](implementationKey: String) {
    return nestedPropertyDelegatedLookup({
      target: this,
      directProperty: Reference.initialize.list,
      nestedProperty: implementationKey,
    })
  },
  [Reference.initialize.switch]: createSwitchGeneratorFunction({
    fallbackSymbol: Reference.initialize.fallback,
    implementationListSymbol: Reference.initialize.getter.list,
  }),
  [Reference.initialize.list]: {},
}

import * as lodash from 'lodash'
import { executionControl } from '../../../utility/generatorExecutionControl.js'
import { $ } from '../Constructable.class.js'
import { createObjectWithDelegation } from './instantiate.js'

module.exports = {
  // Constructable pattern instance - follows the Constructable specification (this module).
  [$.key.constructableInstance]: function({ label } = {}, previousConstructorResult) {
    let instance = createObjectWithDelegation()
    /**
     * behind the switch function interface, a generator is executed:
     * 1st call - for initializing generator
     * 2nd call - talks to the implemnetation through the switch interface
     */ 
    this::this[$.initialize.switch]($.key.constructableInstance, { recursiveDelegationChainExecution: true })({ instance, label })

    return instance
  },
}

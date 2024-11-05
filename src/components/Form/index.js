import React from "react";
import propTypes from 'prop-types'
import { FaPlus } from 'react-icons/fa'

import './Form.css'

export default function Form( { handleSubmit ,handleChange, nova_tarefa, field_ref } ) {
   return (

      <form className="form" onSubmit={handleSubmit} action="#">

         <input
            ref={field_ref}
            id="input_FORM"
            onChange={handleChange}
            type="text"
            value={nova_tarefa}
         />
         
         <button type="submit">
            <FaPlus />
         </button>

      </form>

   )
}

// Form.defaultProps = {
//    nova_tarefa: 'DEFAULT VALUE'
// }

Form.propTypes = {
   handleChange: propTypes.func.isRequired,
   handleSubmit: propTypes.func.isRequired,
   nova_tarefa: propTypes.string.isRequired,
}
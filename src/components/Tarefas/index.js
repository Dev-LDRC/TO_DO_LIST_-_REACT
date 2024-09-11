import React from "react";
import propTypes from 'prop-types'
import { FaEdit, FaWindowClose } from 'react-icons/fa'

import './Tarefas.css'

export default function Tarefas( { tarefas, handleEdit, handleDelete } ) {
   return (
      <ul className="tarefas">

         {tarefas.map((tarefa, index) => (
            
            <li key={tarefa}>
               <div>
                  <span>{tarefa}</span>
               </div>
               <div className="icons_del_edit">
                  <FaEdit
                     onClick={(e) => handleEdit(e, index)}
                     className="btn_edit"
                  />
                  <FaWindowClose
                     onClick={(e) => handleDelete(e, index)}
                     className="btn_delete"
                  />
               </div>
            </li>
         ))}

      </ul>
   )
}

// Tarefas.defaultProps = {
//    nova_tarefa: 'DEFAULT VALUE'
// }

Tarefas.propTypes = {
   tarefas: propTypes.array.isRequired,
   handleEdit: propTypes.func.isRequired,
   handleDelete: propTypes.func.isRequired,
}
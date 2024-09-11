import React, { Component } from "react";

import Form from './Form'
import Tarefas from './Tarefas'

import "./main.css"

export default class Main extends Component {
   
   state = {
      nova_tarefa: '',
      tarefas: [],
      index: -1
   };
   
   field_input_ref = React.createRef()

   componentDidMount() {
      const tarefas = JSON.parse(localStorage.getItem('tarefas'))

      if( !tarefas ) return

      this.setState({tarefas})
   }

   componentDidUpdate(prevProps, prevState) {
      const { tarefas } = this.state

      if( tarefas === prevState.tarefas) return

      localStorage.setItem('tarefas', JSON.stringify(tarefas))
   }

   handleSubmit = (e) => {
      e.preventDefault()
      
      const { tarefas, index } = this.state;
      let { nova_tarefa } = this.state
      
      nova_tarefa = nova_tarefa.trim()
      
      if(nova_tarefa === '') return

      // RETORNA SE O ITEM JA FOI INSERIDO NA LISTA
      if (tarefas.indexOf(nova_tarefa) !== -1) return
      
      const novas_tarefas = [...tarefas]
      
      if(index === -1) {
         
         this.setState({
            tarefas: [...novas_tarefas, nova_tarefa],
            nova_tarefa: ''
         })
         
      } else {
         novas_tarefas[index] = nova_tarefa

         this.setState({
            tarefas: [...novas_tarefas],
            index: -1,
            nova_tarefa: ''
         })

      }

   }

   handleDelete = (e, index) => {

      const { tarefas } = this.state

      const novas_tarefas = [...tarefas]
      novas_tarefas.splice(index, 1)

      this.setState({
         tarefas: [...novas_tarefas],
      })

   }

   handleEdit = (e, index) => {

      const { tarefas } = this.state;
      this.setState({
         index,
         nova_tarefa: tarefas[index],
      });

      this.field_input_ref.current.focus()

   }

   handleChange = (e) => {
      this.setState({
         nova_tarefa: e.target.value,
      });
   }

   render() {
      const { nova_tarefa, tarefas } = this.state

      return (
         <div className="main">
            <h1>TO DO LIST</h1>

            <Form
               field_ref={this.field_input_ref}
               handleSubmit={this.handleSubmit}
               handleChange={this.handleChange}
               nova_tarefa={nova_tarefa}
            />

            <div>
               <hr/>
            </div>

            <Tarefas
               tarefas={tarefas}
               handleEdit={this.handleEdit}
               handleDelete={this.handleDelete}
            />

         </div>
      )
   }
}
import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import Form from "./components/Form"
import Field from "./components/Field"
import Submit from "./components/Submit"
import Textarea from './components/Textarea'
import Select from './components/Select'

function App() {

  const form = useRef()
  
  const submit = e => {
    e.preventDefault()
    const f = form.current

    const data = {
      fullname: f.fullname.value,
      mail: f.mail.value,
      age: f.age.value,
      ranking: f.ranking.value,
      obs: f.obs.value,
      country: f.country.value,
      active: f.active.checked
    }

    console.log(data)
  }

  return (
    <Form submit={submit} formRef={form}>
      <Field type="text" name="fullname" value="" label="Nombres"/>
      <Field type="email" name="mail" value="" label="Correo electronico"/>
      <Field type="number" name="age" value="" label="Edad"/>
      <Field type="range" name="ranking" value="" label="Calificacion"/>
      <Textarea name="obs" value="" label="Observaciones" />
      <Select name="country" label="Pais" options={
        [
          {val: "pe", content: "Peru"}, 
          {val: "co", content: "Colombia"}, 
          {val: "do", content: "Republica Dominicana"}
        ]
      } />
      <Field type="checkbox" name="active" checked label="¿Activo?"/>
      <Submit value="Guardar"/>
    </Form>
  )
}

export default App

import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react'
import './App.css'

const ContainerExampleText = () => (
  <Container text>
    <Header as='h2'>Requisitos:</Header>
    <p>Para ser parte de San Borja en Bici sólo tienes que ser vecino del distrito, mayor de 15 años de edad y presentar en cualquiera de las estaciones lo siguiente:</p>
    <p> * Original y copia del Documento Nacional de Identidad (DNI)</p>
    <p> * Un recibo de servicios (luz, agua, cable o teléfono) con menos de un (1) mes de antigüedad a la fecha de emisión.</p> 
    <Header as='h2'>Horarios:</Header>
    <p>Tenemos una amplia cobertura de horarios para ti, buscando satisfacer tus necesidades y rutina de labores cotidianas.</p>
    <p>Horarios de préstamos:</p>
    <p> * Lunes a Viernes: 7:00 am a 8:00 pm</p>
    <p> * Sábados y Domingos: 7:00 am a 12:00 pm</p>

    <p>Horarios de Atención:</p>
    <p> * Lunes a Viernes: 7:00 am a 9:00 pm</p>
    <p> * Sábados y Domingos: 7:00 am a 1:00 pm.</p>
  </Container>
)

export default ContainerExampleText


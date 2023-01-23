import React from 'react'

// Components
import { Container } from './styles';

// Styles
import { VscGithub } from 'react-icons/vsc'

export default function Header() {
  return (
    <Container>
      <h1>Pipefy <span>clone</span> </h1>
      <a href='https://github.com/AndersonVes' target='_blank' rel='noreferrer' alt=''><VscGithub size={18} /> Anderson Vesguerber</a>
    </Container>
  )
}

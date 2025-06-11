import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Contato() {
  return (
    <Container fluid className='contato'>
      <Row>
        <Col>
            <h1>Fale conosco</h1>
        </Col>
      </Row>

      <Row>
        <Col lg='6' md='6' sm='12'>
        <form>
          <div className='linhaForm'>
            <input type='text' placeholder='Nome' required></input>
          </div>

          <div className='linhaForm'>
            <input type='email' placeholder='E-mail' required></input>
          </div>

          <div className='linhaForm'>
            <textarea placeholder='Mensagem' required></textarea>
          </div>

          <div className='linhaForm'>
            <input type='submit' value='Enviar'></input>
          </div>
        </form>
        </Col>


        <Col lg='6' md='6' sm='12'>
        
        </Col>
      </Row>
    </Container>
  )
}

export default Contato

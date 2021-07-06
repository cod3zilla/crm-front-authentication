import React from 'react'
import './components.css'
import {Row,Col,Form,Container,Button} from 'react-bootstrap'

export const FormComponent=({handleChange,handleSubmit,title,handleToggle})=> {
    return (
        <Container>
            <Row>
                <Col className="form-box">
                <h1 className="text-white">{title}</h1>
                <hr />
                <Form onSubmit={handleSubmit}>
                <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" onChange={handleChange} name="email" placeholder="email" />
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" onChange={handleChange} name="password" placeholder="password" />              
                    
                    <div className="d-grid mt-3">
                    <Button type="submit" variant="primary" block>Login</Button>
                    </div>
                </Form.Group>
                </Form>
                
                </Col>
            </Row>
        </Container>
    )
}



import React,{useState} from 'react'
import {Row,Col,Form,Container,Button} from 'react-bootstrap'


function Reset() {
    const [formDetail,setFormDetail]=useState([])
    function handleChange(e){
        e.preventDefault()
        setFormDetail({...formDetail,[e.target.name]:e.target.value.trim()})
        
    }
    console.log(formDetail)
    function handleSubmit(e){
        e.preventDefault()
        const{email,password}=formDetail
        if(!email ||password===''){
            alert('email/password required')
        }else{
            console.log(email)
             e.target.reset()
             
        }
    }
    
    return (
        
        <div>
            <Container>
            <Row>
                <Col className="form-box">
                <h1 className="text-white">Reset Password</h1>
                <hr />
                <Form onSubmit={handleSubmit}>
                <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" onChange={handleChange} name="email" placeholder="email" />                   
                    
                    <div className="d-grid mt-3">
                    <Button type="submit" variant="primary" block>Reset Password</Button>
                    </div>
                </Form.Group>
                </Form>
                <a  href="/">Return Login</a>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Reset

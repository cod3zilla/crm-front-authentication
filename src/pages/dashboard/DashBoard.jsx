import React from 'react'
import {Container,Row,Col,Button,Breadcrumb} from 'react-bootstrap'
import {TicketTable} from '../../components/TicketTable'
import {BreadCrumbTop} from '../../components/breadcrumb/BreadCrumbTop'
function DashBoard() {
    return (
        <Container>
            <Row>
                <Col>
                <BreadCrumbTop page="Dashboard" />
                </Col>
            </Row>
            <Row>
                <Col className="mt-5 mb-2">
                <Button style={{fontSize:'1.5rem',padding:'10px 30px'}} varient="info">Add new Ticket</Button>
                </Col>                
            </Row>
            <Row>
                <Col className="mt-5 mb-2">Recently Added Ticket</Col>
            </Row>
            <hr/>
            <Row>
                <Col className="tkt-table">
                    <TicketTable/>
                </Col>
            </Row>
        </Container> 
    )
}

export default DashBoard

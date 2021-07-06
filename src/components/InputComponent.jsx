import React from 'react'
import {Form} from 'react-bootstrap'

export const InputComponent=({handleChange,type,names,placeHolder,label})=> {
    return (
        <div>
        <Form.Group>
        <Form.Label>{label}</Form.Label>
        <Form.Control type={type} onChange={handleChange} name={names} placeholder={placeHolder} />
        </Form.Group>
        </div>
    )
}

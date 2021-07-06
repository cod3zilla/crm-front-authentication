import React,{useState} from 'react'
import './entry.css'
import {Jumbotron} from 'react-bootstrap'
import {FormComponent} from '../../components/FormComponent'
import Reset from '../reset/Reset'
function Entry() {
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
    const [toggle,setToggle]=useState(false)
    function handleToggle(e){
        e.preventDefault()

        setToggle(true)
    }
    return (
        <div className="entry-page bg-info">
        <Jumbotron>
        {toggle===false?<><FormComponent handleChange={handleChange} handleSubmit={handleSubmit} title="Client Form"/> <a onClick={handleToggle} href="/">forgotPassword??</a></>
        
        :<Reset/>}        
        </Jumbotron>
        </div>
    )
}

export default Entry

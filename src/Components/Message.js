import React,{useState,useEffect} from 'react'
import './Message.css'
import { Button } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { FormHelperText } from '@material-ui/core';
import Messages from './Messages';
import db from './Firebase';
import firebase from 'firebase';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import FlipMove from 'react-flip-move';

function Message() {
    
    const[input,setInput]=useState("");
    const[messages,setMessages]=useState([]);
    const[name,setName]=useState('')

    useEffect (()=>{
        db.collection('messenger').orderBy('timestamp','desc').onSnapshot(snapshot=>{
            setMessages(snapshot.docs.map(doc=>({id :doc.id ,message :doc.data()})))
        })
    },[])

    useEffect(()=>{
        setName(prompt('What is Your Name'))
    },[])

    // console.log(input)
    // console.log(messages)

   const sendMessage=(e)=>{
    e.preventDefault();
    db.collection("messenger").add({
        message : input,
        username : name,
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })

        // setMessages([...messages,{username :name , message:input}])
        setInput("")
        // e.target.value=""

    }
    return (
        <div>
          <div className="full">
          <h4>©Arun Dhas</h4>

                 <div className="section">
                        <img alt="" className="logo" src="https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_FB-Messenger-512.png" />
                 </div>
                 
                        <div className="welcome">
                          <h1>WELCOME {name}</h1>
                        </div>
                        
                        
                     <div >
                     <form className="form">
                            <FormControl>
                                <div  className="controls">
                                 <Input className="inputa" placeholder="Enter the Message" value={input} onChange={e=>setInput(e.target.value)} />

                                
                                 <IconButton className="icona" variant="contained" disabled={!input} color="primary" type="submit" onClick={sendMessage}>
                                        <SendIcon />
                                    </IconButton>
                                 </div>

                            </FormControl>
                            
                        </form>
                     </div>
            
          </div>
            <FlipMove>
            {
                messages.map(({message,id}) => {
                    console.log("message is",message)
                    return(
                        <Messages key={id} username={name} text={message}/>
                    )
                })
            }
            </FlipMove>
        </div>
    )
}

export default Message

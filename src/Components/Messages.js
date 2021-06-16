import React,{forwardRef} from 'react'
import { CardContent,Card,Typography } from '@material-ui/core';
import './Messages.css'


const Messages=forwardRef(({text,username},ref) => {
const isUser= username===text.username
console.log("text is",text)
console.log("username is",username)

    return (
        
           <div className="mes" ref={ref} className={`card ${isUser && 'cardme'}`}>
                <Card className={isUser ? 'usercard' : 'guestcard'}>
                <CardContent>
                    <Typography color="initial" variant="h5" component="h2">
                    {!isUser && `${text.username || "Unknown User" }: `} {text.message}
                    </Typography>
                </CardContent>
            </Card>
           </div>
    )
})

export default Messages

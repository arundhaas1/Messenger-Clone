import React,{forwardRef} from 'react'
import { CardContent,Card,Typography } from '@material-ui/core';
import './Messages.css'


const Messages=forwardRef(({text,username},ref) => {
const isUser= username===text.username
console.log("text is",text)
console.log("username is",username)

    return (
        
           <div className={`card mes ${isUser && 'cardme'}`} ref={ref}>
                <Card className={isUser ? 'usercard' : 'guestcard'}>
                <CardContent>
                    <Typography color="initial" variant="h5" component="h2">
                    <p>
                        {text.message && (
                            <>
                            {!isUser && (
                                <span style={{fontWeight:'bold'}}>{text.username || "Unknown User"} : </span>
                            )}
                            <span dangerouslySetInnerHTML={{ __html: text.message }} />
                            </>
                        )}
                    </p>

                    </Typography>
                </CardContent>
            </Card>
           </div>
    )
})

export default Messages

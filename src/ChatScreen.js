import React, { useState } from 'react'
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css"

function ChatScreen() {
    const [messages, setMessages] = useState([
        {
            name:"Mark",
            image: "https://cdn.britannica.com/41/172741-138-647B3D53/overview-Bill-Clinton.jpg",
            message:"whats up"
        },
        {
            name:"Mark",
            image: "https://cdn.britannica.com/41/172741-138-647B3D53/overview-Bill-Clinton.jpg",
            message:"hows it going"
        },
        {
            message:"great thank you"
        },
    ])


    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">you matched with mark on 10/08/20</p>
            {messages.map( (message) => (
                message.name ? (
                    <div className="chatScreen__message">
                    <Avatar className="chatScreen__image" alt={message.name} src={message.image}/>
                    <h6 className="chatScreen__text">{message.message}</h6>
                    </div>
                ) : (
                    <div className="chatScreen__message">
                    <h6 className="chatScreen__textUser">{message.message}</h6>
                    </div>
                )
                
            ))}
        </div>
    )
}

export default ChatScreen

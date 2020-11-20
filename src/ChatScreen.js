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
            <p>you matched with mark on 10/08/20</p>
            {messages.map( (message) => (
                <div className="chastScreen__message">
                    <p>{message.message}</p>
                </div>
            ))}
        </div>
    )
}

export default ChatScreen

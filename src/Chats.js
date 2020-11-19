import React from 'react'
import "./Chats.css"
import Chat from "./Chat"

function Chats() {
    return (
        <div className="chats">
            <Chat
            name="mark"
            message="yo mark what up"
            timestamp="40 seconds ago"
            profilePic="..."
            />
        </div>
    )
}

export default Chats


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
            profilePic="https://cdn.britannica.com/41/172741-138-647B3D53/overview-Bill-Clinton.jpg"
            />
        </div>
    )
}

export default Chats


import React, { useState } from 'react'
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css"

function ChatScreen() {
    const [input, setInput] = useState('')
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

        const handleSend = e => {
            e.preventDefault();
            setMessages([...messages, {message: input}]);
            setInput('')
        }
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
                <form className="chatScreen__input">
                    <input value={input} onChange={(e) => setInput(e.target.value)} className="chatScreen__inputField" type="text" placeholder="Type a message..."/>
                    <button onClick={handleSend}type="submit"className="chatScreen__inputButton">SEND</button>
                </form>
        </div>
    )
}

export default ChatScreen

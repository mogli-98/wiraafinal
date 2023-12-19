import React, { useEffect, useState } from 'react'
import { user } from "../Join/Join";
import socketIo from "socket.io-client";
import "./Chat.css";
// import sendLogo from "../../images/send.png";
import Message from "../Message/Message";
import ReactScrollToBottom from "react-scroll-to-bottom";
// import closeIcon from "../../images/closeIcon.png";

let socket;

const ENDPOINT = "https://wiraaback.azurewebsites.net/";

const Chat = () => {
    const [id, setid] = useState("");
    const [messages, setMessages] = useState([])

    const send = () => {
        const message = document.getElementById('chatInput').value;
        const obj = {};
        obj.userId = localStorage.getItem("UserID");
        obj.senderUserId = 42;
        obj.message = message.trim();
        obj.projectId = 1;
        console.log("myMessage", obj, socket.id);
        socket.emit("message", obj, socket.id);
        // socket.emit('message', { message, id, obj });

        document.getElementById('chatInput').value = "";
        console.log("jkjjj", message,)
    }

    console.log(messages);
    useEffect(() => {
        socket = socketIo(ENDPOINT, { transports: ['websocket'] });

        socket.on('connect', () => {
            alert('Connected');
            setid(socket.id);
            console.log('jklnikhn')
        })
        console.log(socket);
        socket.emit('joined', { user })

        socket.on('welcome', (data) => {
            setMessages([...messages, data]);
            console.log(data.user, data.message);
        })

        socket.on('userJoined', (data) => {
            setMessages([...messages, data]);
            console.log(data.user, data.message);
        })

        socket.on('leave', (data) => {
            setMessages([...messages, data]);
            console.log(data.user, data.message)
        })

        return () => {
            socket.emit('disconnects');
            socket.off();
        }
    }, [])

    useEffect(() => {
        socket.on('sendMessage', (data) => {
            setMessages([...messages, data]);
            console.log(data.user, data.message, data.id);
        })
        return () => {
            socket.off();
        }
    }, [messages])

    return (
        <div className="chatPage">
            <div className="chatContainer">
                <div className="header">
                    <h2>C CHAT</h2>
                    {/* <a href="/"> <img src={} alt="Close" /></a> */}
                </div>
                <ReactScrollToBottom className="chatBox">
                    {messages.map((item, i) => <Message user={item.id === id ? '' : item.user} message={item.message} classs={item.id === id ? 'right' : 'left'} />)}
                </ReactScrollToBottom>
                <div className="inputBox">
                    <input onKeyUp={(event) => event.key === 'Enter' ? send() : null} type="text" id="chatInput" />
                    <button onClick={send} className="sendBtn">
                        {/* <img src={sendLogo} alt="Send" /> */}
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Chat

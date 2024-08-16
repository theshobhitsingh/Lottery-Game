import React, { useState } from 'react';
import './Lottery.css';
import { generateTicket, sum } from './helper';

function Lottery() {
    const [ticket, setTicket] = useState(generateTicket(3));
    const isWinning = sum(ticket) >= 15;

    const newTicket = () => {
        setTicket(generateTicket(3));
    };

    return (
        <div className="lottery-container">
            <h2>Lottery Game 🕹️</h2>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <button onClick={newTicket} className="ticket-button">Buy a Ticket</button>
            <h3 className={`message ${isWinning ? 'winning' : ''}`}>
                {isWinning ? "Congrats! You have won the prize" : ""}
            </h3>
        </div>
    );
}

export default Lottery;

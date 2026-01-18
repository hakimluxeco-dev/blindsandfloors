import React, { useState, useEffect, useRef } from 'react';
import { FiMessageSquare, FiX, FiSend, FiMinimize2 } from 'react-icons/fi';
import { chatKnowledgeBase, defaultResponse } from '../data/chatData';

const ChatBot = ({ onOpenMap }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hi there! 👋 I'm the Blinds & Floors AI assistant. How can I help you today?", isBot: true }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [hasOpenedAuto, setHasOpenedAuto] = useState(false);
    const [awaitingMapConfirmation, setAwaitingMapConfirmation] = useState(false);
    const messagesEndRef = useRef(null);

    // Auto-open after 2 seconds
    useEffect(() => {
        if (!hasOpenedAuto) {
            const timer = setTimeout(() => {
                setIsOpen(true);
                setHasOpenedAuto(true);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [hasOpenedAuto]);

    // Scroll to bottom on new message
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userMessage = { text: inputValue, isBot: false };
        setMessages(prev => [...prev, userMessage]);
        setInputValue('');

        // Simulate AI thinking
        setTimeout(() => {
            const botResponse = getBotResponse(userMessage.text);
            setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
        }, 600);
    };

    const getBotResponse = (input) => {
        const lowerInput = input.toLowerCase();

        // Handle Map Confirmation Logic
        if (awaitingMapConfirmation) {
            if (['yes', 'yeah', 'sure', 'yep', 'please', 'ok', 'okay'].some(word => lowerInput.includes(word))) {
                setAwaitingMapConfirmation(false);
                if (onOpenMap) onOpenMap();
                return "Opening the map for you now! 🗺️";
            } else if (['no', 'nah', 'nope'].some(word => lowerInput.includes(word))) {
                setAwaitingMapConfirmation(false);
                return "No problem! Is there anything else I can help you with?";
            }
            // If answer is unrelated, continue but reset state? 
            // Better to keep state until answered or just reset. Let's reset for now to avoid getting stuck.
            setAwaitingMapConfirmation(false);
        }

        // Check for location keywords to trigger map prompt
        if (['location', 'address', 'where', 'located', 'find you', 'situated'].some(keyword => lowerInput.includes(keyword))) {
            setAwaitingMapConfirmation(true);
            return "We are located at 26 Crown Road, Johannesburg. Would you like me to show you on the map?";
        }

        for (const entry of chatKnowledgeBase) {
            // Skip location entry in loop since we handled it above
            if (entry.keywords.includes('location')) continue;

            if (entry.keywords.some(keyword => lowerInput.includes(keyword))) {
                return entry.response;
            }
        }
        return defaultResponse;
    };

    return (
        <>
            {/* Toggle Button */}
            {!isOpen && (
                <button
                    className="chat-toggle-btn"
                    onClick={() => setIsOpen(true)}
                    aria-label="Open Chat"
                >
                    <FiMessageSquare size={24} />
                    <span className="chat-badge">1</span>
                </button>
            )}

            {/* Chat Window */}
            <div className={`chat-window ${isOpen ? 'open' : ''}`}>
                <div className="chat-header">
                    <div className="chat-header-info">
                        <div className="chat-avatar">AI</div>
                        <div>
                            <h4>Blinds & Floors Ai Assistant</h4>
                            <span>Online</span>
                        </div>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="chat-close-btn">
                        <FiX size={20} />
                    </button>
                </div>

                <div className="chat-messages">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.isBot ? 'bot' : 'user'}`}>
                            {msg.text}
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                <form className="chat-input-area" onSubmit={handleSendMessage}>
                    <input
                        type="text"
                        placeholder="Type your question..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button type="submit">
                        <FiSend size={18} />
                    </button>
                </form>
            </div>
        </>
    );
};

export default ChatBot;

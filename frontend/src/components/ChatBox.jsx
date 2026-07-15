import "../styles/chat.css";
import SourceCard from "./SourceCard";
import { Bot, User } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import api from "../services/api";

export default function ChatBox() {

    const [question, setQuestion] = useState("");
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages]);

    async function askQuestion() {

        if (question.trim() === "" || loading) return;

        const userQuestion = question;

        setMessages((prev) => [
            ...prev,
            {
                sender: "user",
                text: userQuestion,
            },
            {
                sender: "ai",
                text: "...",
            },
        ]);

        setQuestion("");
        setLoading(true);

        try {

            const response = await api.post("/ask", {
                question: userQuestion,
            });

            const sources = response.data.sources || [];

            setMessages((prev) => {

                const updated = [...prev];

                updated[updated.length - 1] = {
                    sender: "ai",
                    text: response.data.answer,
                    sources,
                };

                return updated;

            });

        } catch (error) {

            console.error(error);

            setMessages((prev) => {

                const updated = [...prev];

                updated[updated.length - 1] = {
                    sender: "ai",
                    text: "Error talking to backend.",
                    sources: [],
                };

                return updated;

            });

        }

        setLoading(false);

    }

    return (

        <div className="chat-box">

            <div className="messages">

                {messages.map((msg, index) => (

                    <div
                        key={index}
                        className={`message-row ${msg.sender}`}
                    >

                        <div className="avatar">

                            {msg.sender === "user"
                                ? <User size={18} />
                                : <Bot size={18} />
                            }

                        </div>

                        <div>

                            <div className={`message ${msg.sender}`}>

                                {msg.text === "..." ? (

                                    <div className="typing">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>

                                ) : (

                                    msg.text

                                )}

                            </div>

                            {msg.sender === "ai" &&
                                msg.sources &&
                                msg.sources.length > 0 && (

                                    <div className="sources">

                                        {msg.sources.map((source, i) => (

                                            <SourceCard
                                                key={i}
                                                source={source}
                                            />

                                        ))}

                                    </div>

                                )}

                        </div>

                    </div>

                ))}

                <div ref={bottomRef}></div>

            </div>

            <div className="chat-input">

                <textarea
                    rows={2}
                    placeholder="Ask anything about the uploaded document..."
                    value={question}
                    disabled={loading}
                    onChange={(e) => setQuestion(e.target.value)}
                    onKeyDown={(e) => {

                        if (e.key === "Enter" && !e.shiftKey) {

                            e.preventDefault();
                            askQuestion();

                        }

                    }}
                />

                <button
                    onClick={askQuestion}
                    disabled={loading}
                >
                    {loading ? "Thinking..." : "Send"}
                </button>

            </div>

        </div>

    );

}
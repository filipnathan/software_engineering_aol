import React, { useState, useEffect } from 'react';
import { ArrowUpRightFromSquare } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { useLocation, useNavigate } from 'react-router-dom';

const SelectedChat = ({ chat: propChat, onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const chat = propChat || location.state?.chat;

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    if (chat?.messages) {
      setMessages(chat.messages);
    }
  }, [chat]);

  if (!chat) {
    return (
      <div className="p-6 text-gray-800">
        <h2 className="text-2xl font-semibold mb-4">No chat selected</h2>
        <Button onClick={() => navigate('/support')}>Back to Support</Button>
      </div>
    );
  }

  const handleSend = () => {
    if (input.trim() === '') return;
    const newMessage = {
      from: 'support',
      content: input,
      timestamp: new Date().toISOString(),
    };
    setMessages([...messages, newMessage]);
    setInput('');
  };

  return (
    <div className="p-6 text-gray-800">
      <h2 className="text-2xl font-semibold mb-6">
        {chat.name} - <span className="font-medium">#{chat.id}</span>
      </h2>

      <div className="bg-white rounded-2xl border p-6 mb-4 min-h-[300px]">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-4 flex ${
              msg.from === 'support' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[75%] px-4 py-2 rounded-xl text-sm shadow-sm ${
                msg.from === 'support'
                  ? 'bg-gray-100 text-right'
                  : 'bg-white border text-left'
              }`}
            >
              <p>{msg.content}</p>
              <span className="text-xs text-gray-400 block mt-2">
                {new Date(msg.timestamp).toLocaleString('en-GB')}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2 mt-4">
        <Input
          placeholder="Type a reply..."
          className="flex-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          onClick={handleSend}
          className="bg-blue-500 hover:bg-blue-600 text-white"
        >
          <ArrowUpRightFromSquare size={18} />
        </Button>
      </div>

      <div className="text-center mt-6">
        <Button
          onClick={onClose || (() => navigate('/support'))}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-8"
        >
          CLOSE CHAT
        </Button>
      </div>
    </div>
  );
};

export default SelectedChat;

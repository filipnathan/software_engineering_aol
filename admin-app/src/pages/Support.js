import React, { useState } from 'react';
import { Card , CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { CalendarDays, Clock } from 'lucide-react';
import SelectedChat from '../components/SelectedChat';
import { useNavigate } from 'react-router-dom';



const mockChats = [
  {
    id: 'CT917',
    name: 'Christopher',
    message: "Hi, I haven’t received my order yet. I placed the order last Tuesday and it said it would arrive at most yesterday. Could you please check it for me?",
    status: 'PENDING',
    date: '20-06-2025',
  },
  {
    id: 'CT916',
    name: 'Benedict',
    message: "Is it possible to get a discount for purchasing in bulk? I’m running a company and it’s in need of masks right now. I am looking for around five thousand pieces.",
    status: 'COMPLETED',
    date: '20-06-2025',
  },
];

export default function SupportPage() {
  const [selectedChat, setSelectedChat] = useState(null);
  const navigate = useNavigate();


  const statusStyles = {
    PENDING: 'bg-yellow-100 text-yellow-700',
    COMPLETED: 'bg-green-100 text-green-700',
  };

  const summary = mockChats.reduce(
    (acc, chat) => {
      acc[chat.status.toLowerCase()] += 1;
      return acc;
    },
    { pending: 0, completed: 0 }
  );

  return (
    <div className="p-6 flex gap-4">
      <div className="flex-1 space-y-4">
        <h2 className="text-2xl font-semibold">Chats</h2>

        {mockChats.map((chat) => (
          <Card
            key={chat.id}
            onClick={() => navigate("/support/selected-chat", { state: { chat } })}
            className={`cursor-pointer transition hover:shadow-md border ${chat.status === 'COMPLETED' ? 'border-blue-400' : ''}`}
          >
            <CardContent className="p-4">
              <p className="font-semibold">
                {chat.name} – <span className="text-muted-foreground">#{chat.id}</span>
              </p>
              <p className="mt-2 text-sm text-gray-700">{chat.message}</p>
              <div className="flex items-center gap-2 mt-3 text-sm">
                <Badge className={statusStyles[chat.status]}>{chat.status}</Badge>
                <div className="flex items-center gap-1 text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>SENT {chat.date}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="w-64 p-4 bg-white rounded-xl shadow space-y-4">
        <h3 className="text-lg font-semibold">Summary</h3>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
            <span>Pending</span>
          </div>
          <span>{summary.pending}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-green-500"></div>
            <span>Completed</span>
          </div>
          <span>{summary.completed}</span>
        </div>
      </div>
    </div>
  );
}

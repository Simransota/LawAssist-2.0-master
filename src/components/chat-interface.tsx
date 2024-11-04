'use client'

import { useState } from 'react'
import { Send, ChevronRight } from 'lucide-react'

const mockChats = [
  {
    id: 1,
    clientName: "John Doe",
    requestType: "Consultation",
    dateSubmitted: "2023-05-15 10:30 AM",
    status: "Pending",
    priority: "Urgent",
  },
  {
    id: 2,
    clientName: "Jane Smith",
    requestType: "Case Review",
    dateSubmitted: "2023-05-14 2:45 PM",
    status: "In Progress",
    priority: "Normal",
  },
  {
    id: 3,
    clientName: "Michael Johnson",
    requestType: "Contract Drafting",
    dateSubmitted: "2023-05-10 9:00 AM",
    status: "Open",
    priority: "High",
  },
  {
    id: 4,
    clientName: "Emily Davis",
    requestType: "Legal Consultation",
    dateSubmitted: "2023-05-11 11:15 AM",
    status: "Closed",
    priority: "Normal",
  },
  {
    id: 5,
    clientName: "Chris Brown",
    requestType: "Legal Advice",
    dateSubmitted: "2023-05-12 3:30 PM",
    status: "Archived",
    priority: "Low",
  },
  {
    id: 6,
    clientName: "Laura Wilson",
    requestType: "Case Review",
    dateSubmitted: "2023-05-09 4:10 PM",
    status: "Pending",
    priority: "Urgent",
  },
  {
    id: 7,
    clientName: "David Clark",
    requestType: "Consultation",
    dateSubmitted: "2023-05-13 5:50 PM",
    status: "Open",
    priority: "Normal",
  },
  {
    id: 8,
    clientName: "Sarah Lee",
    requestType: "Case Review",
    dateSubmitted: "2023-05-16 8:20 AM",
    status: "In Progress",
    priority: "High",
  },
  {
    id: 9,
    clientName: "James Bond",
    requestType: "Consultation",
    dateSubmitted: "2023-05-17 9:00 AM",
    status: "Closed",
    priority: "Normal",
  },
  {
    id: 10,
    clientName: "Linda Taylor",
    requestType: "Contract Drafting",
    dateSubmitted: "2023-05-18 12:00 PM",
    status: "Archived",
    priority: "Low",
  }
]

const mockMessages = [
  { id: 1, sender: 'John Doe', content: 'Hello, I need help with my contract.', timestamp: '2023-05-15T10:00:00' },
  { id: 2, sender: 'Lawyer', content: 'Certainly, I\'d be happy to help. Can you provide more details about the contract?', timestamp: '2023-05-15T10:05:00' },
  { id: 3, sender: 'John Doe', content: 'It\'s an employment contract. I\'m not sure about some of the clauses.', timestamp: '2023-05-15T10:10:00' },
]

export function ChatInterfaceComponent() {
  const [messages, setMessages] = useState(mockMessages)
  const [newMessage, setNewMessage] = useState('')
  const [selectedChat, setSelectedChat] = useState(mockChats[0])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        sender: 'Lawyer',
        content: newMessage.trim(),
        timestamp: new Date().toISOString()
      }
      setMessages([...messages, message])
      setNewMessage('')
    }
  }

  const handleChatSelect = (chat: typeof mockChats[0]) => {
    setSelectedChat(chat)
    // In a real application, you would fetch messages for the selected chat here
  }

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      {/* Sidebar */}
      <div className="w-80 bg-gray-800 overflow-y-auto">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Chats</h2>
          {mockChats.map((chat) => (
            <div
              key={chat.id}
              className={`p-2 mb-2 rounded-lg cursor-pointer ${
                selectedChat.id === chat.id ? 'bg-blue-800' : 'hover:bg-gray-700'
              }`}
              onClick={() => handleChatSelect(chat)}
            >
              <div className="font-semibold">{chat.clientName}</div>
              <div className="text-sm text-gray-400">{chat.requestType}</div>
              <div className="text-xs text-gray-500 mt-1">
                {new Date(chat.dateSubmitted).toLocaleString()}
              </div>
              <div className="flex justify-between text-xs mt-1">
                <span className={`px-2 py-1 rounded ${
                  chat.status === 'Pending' ? 'bg-yellow-600' :
                  chat.status === 'In Progress' ? 'bg-blue-600' :
                  chat.status === 'Open' ? 'bg-green-600' :
                  chat.status === 'Closed' ? 'bg-red-600' :
                  'bg-gray-600'
                }`}>
                  {chat.status}
                </span>
                <span className={`px-2 py-1 rounded ${
                  chat.priority === 'Urgent' ? 'bg-red-600' :
                  chat.priority === 'High' ? 'bg-orange-600' :
                  chat.priority === 'Normal' ? 'bg-blue-600' :
                  'bg-green-600'
                }`}>
                  {chat.priority}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Chat with {selectedChat.clientName}</h1>
          <div className="text-sm text-gray-400">
            {selectedChat.requestType} - {selectedChat.status}
          </div>
        </header>

        {/* Message Area */}
        <div className="flex-grow overflow-auto p-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-4 ${
                message.sender === 'Lawyer' ? 'text-right' : 'text-left'
              }`}
            >
              <div
                className={`inline-block p-2 rounded-lg ${
                  message.sender === 'Lawyer'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-100'
                }`}
              >
                <p className="font-semibold">{message.sender}</p>
                <p>{message.content}</p>
                <p className="text-xs mt-1 text-gray-300">
                  {new Date(message.timestamp).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <form onSubmit={handleSendMessage} className="bg-gray-800 p-4">
          <div className="flex">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow mr-2 p-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
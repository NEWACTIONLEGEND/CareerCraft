import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function Data() {
  const [messages, setMessages] = useState([]); // メッセージリストを保持するためのステート
  const [inputText, setInputText] = useState(''); // 入力フィールドのステート

  // コンポーネントのマウント時にデータを読み込む
  useEffect(() => {
    fetchMessages();
  }, []);

  // メッセージをサーバーから読み込む関数
  const fetchMessages = () => {
    axios.get('http://localhost:3001/messages')
      .then(response => {
        setMessages(response.data);
      })
      .catch(error => {
        console.error('Error fetching messages:', error);
        alert('Error fetching messages. Check the console for more information.');
      });
  };

  // 新しいメッセージをサーバーに追加する関数
  const addMessage = () => {
    axios.post('http://localhost:3001/messages', { content: inputText })
      .then(response => {
        fetchMessages();  // データを再読み込み
        setInputText(''); // 入力フィールドをクリア
      })
      .catch(error => {
        console.error('Error adding message:', error);
        alert('Message could not be added. Check the console for more information.');
      });
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter new message"
      />
      <button onClick={addMessage}>Add Message</button>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message.content}</li>
        ))}
      </ul>
    </div>
  );
}

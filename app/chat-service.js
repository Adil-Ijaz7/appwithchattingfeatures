import { ObservableArray } from '@nativescript/core';

const chats = new ObservableArray();

export function initializeChats() {
  chats.push(
    { id: 1, name: 'Alice', lastMessage: 'Hey, how are you?', time: '10:30 AM' },
    { id: 2, name: 'Bob', lastMessage: 'Did you see the game last night?', time: '9:45 AM' },
    { id: 3, name: 'Charlie', lastMessage: 'Meeting at 2 PM today', time: 'Yesterday' }
  );
}

export function getChats() {
  return chats;
}

export function getChatById(id) {
  return chats.find(chat => chat.id === id);
}

export function sendMessage(chatId, message) {
  const chat = getChatById(chatId);
  if (chat) {
    chat.lastMessage = message;
    chat.time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    chats.splice(chats.indexOf(chat), 1);
    chats.unshift(chat);
  }
}
import { Observable } from '@nativescript/core';
import { getChatById, sendMessage } from './chat-service';

let viewModel;

export function onNavigatingTo(args) {
  const page = args.object;
  const chatId = page.navigationContext.chatId;
  
  viewModel = new Observable({
    chat: getChatById(chatId),
    messages: [
      { content: 'Hey there!', isSent: false },
      { content: 'Hi! How are you?', isSent: true },
      { content: 'I\'m good, thanks for asking!', isSent: false },
    ],
    messageText: ''
  });
  
  page.bindingContext = viewModel;
}

export function onSendTap(args) {
  if (viewModel.messageText.trim() !== '') {
    viewModel.messages.push({
      content: viewModel.messageText,
      isSent: true
    });
    sendMessage(viewModel.chat.id, viewModel.messageText);
    viewModel.set('messageText', '');
  }
}
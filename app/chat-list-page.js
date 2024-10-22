import { Frame } from '@nativescript/core';
import { getChats } from './chat-service';

export function onNavigatingTo(args) {
  const page = args.object;
  page.bindingContext = { chats: getChats() };
}

export function onChatTap(args) {
  const tappedItem = args.view.bindingContext;
  Frame.topmost().navigate({
    moduleName: 'chat-page',
    context: { chatId: tappedItem.id },
    clearHistory: false
  });
}
import { Application } from '@nativescript/core';
import { initializeChats } from './chat-service';

initializeChats();
Application.run({ moduleName: 'app-root' });
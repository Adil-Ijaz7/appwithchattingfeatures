import { getNotes, addNote } from './notes-service';
import { Frame } from '@nativescript/core';

export function onNavigatingTo(args) {
  const page = args.object;
  page.bindingContext = { notes: getNotes() };
}

export function onAddNoteTap() {
  Frame.topmost().navigate({
    moduleName: 'add-note-page',
    clearHistory: false
  });
}

export function onItemTap(args) {
  const tappedItem = args.view.bindingContext;
  Frame.topmost().navigate({
    moduleName: 'note-detail-page',
    context: tappedItem,
    clearHistory: false
  });
}
import { Observable, ObservableArray } from '@nativescript/core';

const notesData = new ObservableArray([]);

export function initializeNotes() {
  // Initialize with some sample notes
  notesData.push(
    { title: 'Welcome', content: 'Welcome to your new notes app!' },
    { title: 'How to use', content: 'Tap the + button to add a new note.' }
  );
}

export function getNotes() {
  return notesData;
}

export function addNote(title, content) {
  notesData.unshift({ title, content });
}

export function shareNote(note) {
  // Implement sharing functionality here
  console.log(`Sharing note: ${note.title}`);
}
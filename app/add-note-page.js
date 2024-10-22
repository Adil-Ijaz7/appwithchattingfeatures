import { Frame } from '@nativescript/core';
import { addNote } from './notes-service';

export function onNavigatingTo(args) {
  const page = args.object;
  page.bindingContext = { title: '', content: '' };
}

export function onSaveTap(args) {
  const page = args.object.page;
  const vm = page.bindingContext;
  addNote(vm.title, vm.content);
  Frame.topmost().goBack();
}
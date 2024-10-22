import { shareNote } from './notes-service';

export function onNavigatingTo(args) {
  const page = args.object;
  page.bindingContext = page.navigationContext;
}

export function onShareTap(args) {
  const page = args.object.page;
  const note = page.bindingContext;
  shareNote(note);
}
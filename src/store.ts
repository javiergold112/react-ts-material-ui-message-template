// src/store.ts
import { atom } from 'jotai';

export const state = atom({
  headerSectionVisible: true,
  bodySectionVisible: true,
  footerSectionVisible: true,
  buttonSectionVisible: true,
  bodyText: '👋 Hi {{1}}, we just kicked off our summer sale! ☀️☀️ Wanna hear more? '
});

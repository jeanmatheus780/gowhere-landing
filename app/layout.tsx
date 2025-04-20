// app/layout.tsx
import './globals.css'; // se tiver um CSS global, se não tiver, pode remover essa linha
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt">
      <head />
      <body>{children}</body>
    </html>
  );
}

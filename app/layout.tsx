import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lía · IAED26A — Asistente del curso',
  description: 'Asistente virtual del curso Inteligencia Artificial en Educación',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

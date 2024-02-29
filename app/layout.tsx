import '@/app/ui/global.css';
import { # } from '@/app/ui/fonts'; //import primary font

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body className={`${#.className} antialiased`}>{children}</body>
      </html>
    );
  }
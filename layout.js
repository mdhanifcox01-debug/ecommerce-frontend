import './globals.css';

export const metadata = {
  title: 'Temu/Trendyol Style E-commerce',
  description: 'Professional online shopping platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 font-sans">
        {/* Main Website Wrapper */}
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}

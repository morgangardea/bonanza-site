export const metadata = {
  title: "Bonanza Earth Relocators",
  description: "Earthmoving and mining support services in Douglas, Wyoming",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

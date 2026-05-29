export default function CMSLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body id="outstatic">{children}</body>
    </html>
  )
}
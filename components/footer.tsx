export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 py-6 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <p className="text-sm text-muted-foreground">© {currentYear} Omar Rasin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


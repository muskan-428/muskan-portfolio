export default function Footer() {
  return (
    <footer className="py-8 text-center border-t border-border/50 bg-background mt-auto">
      <div className="container mx-auto px-6">
        <p className="text-muted-foreground font-medium" data-testid="text-footer-copyright">
          © {new Date().getFullYear()} Muskan Singh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

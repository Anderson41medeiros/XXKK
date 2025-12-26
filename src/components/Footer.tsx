import { Github, Twitter, MessageCircle, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="community" className="py-16 border-t border-border bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                <span className="text-lg font-bold text-primary">X</span>
              </div>
              <span className="text-xl font-bold text-gradient">XXKK</span>
            </a>
            <p className="text-sm text-muted-foreground mb-4">
              India's most trusted cryptocurrency exchange. Trade Bitcoin, Ethereum & 200+ coins with INR.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Developers</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">API Documentation</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Trading SDK</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">WebSocket API</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Smart Contracts</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">GitHub Discussions</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Discord Server</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Bug Bounty Program</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contributing Guide</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Security Audits</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Status Page</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Brand Assets</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 XXKK Exchange. Licensed under MIT.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Github, Twitter, MessageCircle, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/40 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="https://www.xxkk.com/en" className="flex items-center gap-2.5 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-primary to-accent">
                <span className="text-sm font-bold text-primary-foreground">X</span>
              </div>
              <span className="text-lg font-semibold text-foreground">XXKK</span>
            </a>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              India's most trusted cryptocurrency exchange. Trade Bitcoin, Ethereum & 200+ coins with INR.
            </p>
            <div className="flex gap-2">
              {[
                { icon: Github, label: "GitHub" },
                { icon: Twitter, label: "Twitter" },
                { icon: MessageCircle, label: "Discord" },
                { icon: Mail, label: "Email" },
              ].map(({ icon: Icon, label }) => (
                <a 
                  key={label}
                  href="#" 
                  aria-label={label}
                  className="p-2 rounded-lg bg-secondary/60 border border-border/40 hover:border-primary/30 hover:bg-primary/10 hover:text-primary transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground">Developers</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">API Documentation</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Trading SDK</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">WebSocket API</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Smart Contracts</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground">Community</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">GitHub Discussions</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Discord Server</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Bug Bounty Program</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contributing Guide</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground">Resources</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Security Audits</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Status Page</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Brand Assets</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 XXKK Exchange. All rights reserved.
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
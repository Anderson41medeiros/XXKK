import { Github, Twitter, MessageCircle, Send } from "lucide-react";
import xxkkLogo from "@/assets/xxkk-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/40 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="https://www.xxkk.com/en" className="flex items-center gap-2.5 mb-4">
              <img src={xxkkLogo} alt="XXKK" className="h-9 w-9 rounded-lg" />
              <span className="text-lg font-semibold text-foreground">XXKK</span>
            </a>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              Start Your Alpha Trek. Buy and Sell BTC, ETH, USDT, DOGE and hot Cryptocurrencies.
            </p>
            <div className="flex gap-2">
              {[
                { icon: Twitter, label: "Twitter", href: "https://twitter.com/xxkk_exchange" },
                { icon: Send, label: "Telegram", href: "https://t.me/xxkk_official" },
                { icon: MessageCircle, label: "Discord", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a 
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-lg bg-secondary/60 border border-border/40 hover:border-primary/30 hover:bg-primary/10 hover:text-primary transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground">Products</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="https://www.xxkk.com/en/markets" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Markets</a></li>
              <li><a href="https://www.xxkk.com/en/buyCrypto" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Buy Crypto</a></li>
              <li><a href="https://www.xxkk.com/en/swap/btc-usdt" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Spot Trading</a></li>
              <li><a href="https://www.xxkk.com/en/contract" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">USDT-M Futures</a></li>
              <li><a href="https://www.xxkk.com/en/tradfi" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">TradFi</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground">Support</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="https://support.xxkk.com/hc/en-us" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="https://support.xxkk.com/hc/en-us/categories/4971147671326-Announcements" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Announcements</a></li>
              <li><a href="https://support.xxkk.com/hc/en-us/categories/4971216615838-XXKK-FAQ" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">FAQ</a></li>
              <li><a href="https://support.xxkk.com/hc/en-us/categories/4971187383710-Security-Center" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Security Center</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground">About</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="https://www.xxkk.com/en/aboutUs" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="https://www.xxkk.com/en/partner" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Partner Program</a></li>
              <li><a href="https://support.xxkk.com/hc/en-us/categories/4971190824478-Platform-Activities" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Platform Activities</a></li>
            </ul>
          </div>

          {/* Download */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground">Download App</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="https://xkmktaps01.kyircv.com/mkt/apk/gx/xxkk20.apk" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Android APK</a></li>
              <li><a href="https://testflight.apple.com/join/JOoWd0WL" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">App Store (TestFlight)</a></li>
            </ul>
            <div className="mt-4">
              <a 
                href="https://www.trustpilot.com/review/xxkk.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="text-primary">★★★★</span>
                <span>3.9 on Trustpilot</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 XXKK Global LTD. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="https://support.xxkk.com/hc/en-us/articles/4607870561694-Privacy-Policy" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="https://support.xxkk.com/hc/en-us/articles/4607938118558-User-Agreement" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">User Agreement</a>
            <a href="https://support.xxkk.com/hc/en-us/articles/4607858181022-Risk-Disclaimer" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Risk Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

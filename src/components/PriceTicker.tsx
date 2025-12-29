import { useEffect, useState } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface CryptoData {
  id: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
}

const PriceTicker = () => {
  const [cryptos, setCryptos] = useState<CryptoData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"
        );
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setCryptos(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 30000);
    return () => clearInterval(interval);
  }, []);

  const formatPrice = (price: number) => {
    if (price >= 1) return `$${price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    return `$${price.toFixed(6)}`;
  };

  const formatChange = (change: number) => {
    const sign = change >= 0 ? "+" : "";
    return `${sign}${change.toFixed(2)}%`;
  };

  if (loading || cryptos.length === 0) {
    return (
      <div className="bg-card/80 border-b border-border h-10 flex items-center">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-6 animate-pulse">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-12 h-4 bg-muted rounded" />
                <div className="w-16 h-4 bg-muted rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Double the items for seamless loop
  const tickerItems = [...cryptos, ...cryptos];

  return (
    <div className="bg-card/80 backdrop-blur-sm border-b border-border h-10 overflow-hidden">
      <div className="ticker-container h-full flex items-center">
        <div className="ticker-track flex items-center gap-8">
          {tickerItems.map((crypto, index) => (
            <a
              key={`${crypto.id}-${index}`}
              href={`https://www.xxkk.com/en/spot/${crypto.symbol.toLowerCase()}-usdt`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 shrink-0 hover:opacity-80 transition-opacity"
            >
              <span className="text-sm font-medium text-foreground">{crypto.symbol.toUpperCase()}</span>
              <span className="text-sm text-muted-foreground">{formatPrice(crypto.current_price)}</span>
              <span className={`flex items-center gap-0.5 text-xs ${
                crypto.price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"
              }`}>
                {crypto.price_change_percentage_24h >= 0 ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                {formatChange(crypto.price_change_percentage_24h)}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceTicker;

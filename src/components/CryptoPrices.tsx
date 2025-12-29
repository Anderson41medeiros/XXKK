import { useEffect, useState } from "react";
import { TrendingUp, TrendingDown, RefreshCw } from "lucide-react";

interface CryptoData {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
  image: string;
}

const CryptoPrices = () => {
  const [cryptos, setCryptos] = useState<CryptoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPrices = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      );
      if (!response.ok) throw new Error("Failed to fetch prices");
      const data = await response.json();
      setCryptos(data);
    } catch (err) {
      setError("Unable to load prices");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 30000); // Refresh every 30s
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

  if (error) {
    return (
      <div className="bg-card border border-border rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-foreground">Market Prices</h3>
          <button onClick={fetchPrices} className="text-muted-foreground hover:text-foreground transition-colors">
            <RefreshCw className="h-4 w-4" />
          </button>
        </div>
        <p className="text-sm text-muted-foreground">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-foreground">Market Prices</h3>
        <button 
          onClick={fetchPrices} 
          className={`text-muted-foreground hover:text-foreground transition-colors ${loading ? "animate-spin" : ""}`}
          disabled={loading}
        >
          <RefreshCw className="h-4 w-4" />
        </button>
      </div>
      
      <div className="space-y-3">
        {loading && cryptos.length === 0 ? (
          Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex items-center justify-between animate-pulse">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-muted rounded-full" />
                <div className="w-16 h-4 bg-muted rounded" />
              </div>
              <div className="text-right">
                <div className="w-20 h-4 bg-muted rounded mb-1" />
                <div className="w-12 h-3 bg-muted rounded" />
              </div>
            </div>
          ))
        ) : (
          cryptos.map((crypto) => (
            <a
              key={crypto.id}
              href={`https://www.xxkk.com/en/spot/${crypto.symbol.toLowerCase()}-usdt`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between hover:bg-accent/50 rounded-md p-1 -mx-1 transition-colors"
            >
              <div className="flex items-center gap-2">
                <img src={crypto.image} alt={crypto.name} className="w-6 h-6 rounded-full" />
                <div>
                  <span className="text-sm font-medium text-foreground">{crypto.symbol.toUpperCase()}</span>
                  <span className="text-xs text-muted-foreground ml-1 hidden sm:inline">{crypto.name}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-foreground">{formatPrice(crypto.current_price)}</div>
                <div className={`flex items-center justify-end gap-0.5 text-xs ${
                  crypto.price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"
                }`}>
                  {crypto.price_change_percentage_24h >= 0 ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  {formatChange(crypto.price_change_percentage_24h)}
                </div>
              </div>
            </a>
          ))
        )}
      </div>
    </div>
  );
};

export default CryptoPrices;

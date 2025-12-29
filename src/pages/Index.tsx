import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import TabNav from "@/components/TabNav";
import ProfileSection from "@/components/ProfileSection";
import PopularRepositories from "@/components/PopularRepositories";
import RepositoryList from "@/components/RepositoryList";
import PeopleSection from "@/components/PeopleSection";
import CryptoPrices from "@/components/CryptoPrices";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>XXKK - India's Leading Cryptocurrency Exchange | Buy Bitcoin, Ethereum with INR</title>
        <meta name="description" content="XXKK is India's most trusted crypto exchange. Trade Bitcoin, Ethereum & 200+ cryptocurrencies with INR. Fast deposits, low fees, bank-grade security." />
        <meta name="keywords" content="XXKK,crypto exchange India,buy bitcoin India,cryptocurrency trading,INR crypto,bitcoin exchange,ethereum India,crypto trading platform" />
        <meta property="og:title" content="XXKK - India's Leading Cryptocurrency Exchange" />
        <meta property="og:description" content="Trade Bitcoin, Ethereum & 200+ cryptocurrencies with INR. Fast deposits, low fees, bank-grade security." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.xxkk.com/en" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Subtle background glow */}
        <div className="fixed inset-0 hero-glow pointer-events-none" />
        
        <Header />
        
        <main className="relative pt-14">
          <TabNav activeTab="overview" />
          
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Left Sidebar - Profile */}
              <ProfileSection />
              
              {/* Main Content */}
              <div className="flex-1 min-w-0">
                <PopularRepositories />
                <RepositoryList />
              </div>

              {/* Right Sidebar */}
              <aside className="hidden xl:block w-72 shrink-0 space-y-4">
                <CryptoPrices />
                <PeopleSection />
                
                <div className="pro-card p-4 rounded-xl">
                  <h3 className="text-sm font-semibold text-foreground mb-3">Top languages</h3>
                  <div className="space-y-2.5">
                    {[
                      { name: "TypeScript", color: "#3178c6", percent: 45 },
                      { name: "Rust", color: "#dea584", percent: 25 },
                      { name: "Go", color: "#00ADD8", percent: 20 },
                      { name: "Solidity", color: "#AA6746", percent: 10 },
                    ].map((lang) => (
                      <div key={lang.name} className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-1.5 text-muted-foreground">
                            <span 
                              className="w-2.5 h-2.5 rounded-full" 
                              style={{ backgroundColor: lang.color }} 
                            />
                            <span>{lang.name}</span>
                          </div>
                          <span className="text-muted-foreground/70">{lang.percent}%</span>
                        </div>
                        <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full transition-all duration-500"
                            style={{ 
                              width: `${lang.percent}%`,
                              backgroundColor: lang.color 
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sponsors */}
                <div className="pro-card p-4 rounded-xl">
                  <h3 className="text-sm font-semibold text-foreground mb-3">Sponsors</h3>
                  <div className="flex flex-wrap gap-2">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div 
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-muted border border-border/40"
                      />
                    ))}
                  </div>
                  <a href="#" className="block mt-3 text-xs text-primary hover:underline underline-offset-2">
                    View all sponsors →
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
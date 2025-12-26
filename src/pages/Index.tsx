import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import TabNav from "@/components/TabNav";
import ProfileSection from "@/components/ProfileSection";
import PopularRepositories from "@/components/PopularRepositories";
import RepositoryList from "@/components/RepositoryList";
import PeopleSection from "@/components/PeopleSection";
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
        <link rel="canonical" href="https://xxkk.in" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          <TabNav activeTab="overview" />
          
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Sidebar - Profile */}
              <ProfileSection />
              
              {/* Main Content */}
              <div className="flex-1 min-w-0">
                <PopularRepositories />
                <RepositoryList />
              </div>

              {/* Right Sidebar */}
              <div className="hidden xl:block w-72 shrink-0">
                <PeopleSection />
                
                <div className="mt-4 p-4 rounded-md border border-border bg-card/30">
                  <h3 className="text-sm font-semibold text-foreground mb-3">Top languages</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-3 h-3 rounded-full bg-[#3178c6]" />
                      <span>TypeScript</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-3 h-3 rounded-full bg-[#dea584]" />
                      <span>Rust</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-3 h-3 rounded-full bg-[#f1e05a]" />
                      <span>JavaScript</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;

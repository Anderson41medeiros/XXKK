import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import QuickstartSection from "@/components/QuickstartSection";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>XXKK - 新一代高性能开发框架 | 快速构建现代Web应用</title>
        <meta name="description" content="XXKK是一个高性能、轻量级、开箱即用的现代化开发工具链。10倍构建速度，100%类型安全，专为追求极致效率的开发者打造。" />
        <meta name="keywords" content="XXKK,开发框架,高性能,TypeScript,前端框架,开源框架,Web开发,构建工具" />
        <meta property="og:title" content="XXKK - 新一代高性能开发框架" />
        <meta property="og:description" content="高性能、轻量级、开箱即用的现代化开发工具链，专为追求极致效率的开发者打造。" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://xxkk.dev" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <FeaturesSection />
          <StatsSection />
          <QuickstartSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

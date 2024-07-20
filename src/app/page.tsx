import Image from "next/image";
import HomePage from "../../pages/HomePage";
import Navbar from "../../components/Navbar/Navbar";
import BitcoinHolding from "../../components/BitcoinHolding/BitcoinHoldings";
import EthereumHolding from "../../components/EthereumHolding/Ethereum";
import GlobalMarketCap from "../../components/GlobalMarketCap/GlobalMarketcap";

export default function Home() {
  return (
  <div>
    <Navbar/>
    <HomePage/>
    {/* <GlobalMarketCap/> */}
    {/* <BitcoinHolding/> */}
    {/* <EthereumHolding/> */}

  </div>
  );
}

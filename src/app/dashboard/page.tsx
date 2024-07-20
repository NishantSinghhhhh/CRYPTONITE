import BitcoinHolding from "../../../components/BitcoinHolding/BitcoinHoldings";

const HomePage = () => {
  return (
    <div className='bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen'>
       <div className='max-w-7xl mx-auto py-20 px-6 sm:px-8'>
        <h1 className='text-4xl sm:text-6xl font-bold leading-tight mb-6 text-center'>
          Largest <br/> Crypto Tracker
        </h1>
        <p className='text-lg sm:text-xl text-center mb-10'>
          Decentralized dreams, contracts smart,
          {/* Cryptonite's gleam, a revolution's start. */}
        </p>

        {/* < SearchBar/> */}
        <form className='max-w-md mx-auto flex items-center'>
            <input 
              type='text' 
              placeholder='Search Crypto' 
              className='flex-1 px-4 py-3 rounded-l-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600'
            />
            <button 
              type='submit' 
              className='bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-r-lg font-medium focus:outline-none focus:bg-purple-700'
            >
              Search
            </button>
        </form>
       </div>
       <div>
        <BitcoinHolding/>
       </div>
    </div>
  );
};

export default HomePage;

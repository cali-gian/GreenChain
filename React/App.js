import React, { useEffect, useState } from 'react';
import WalletConnect from './components/walletConnect.js';
import Dashboard from './components/dashboard.js';
import { ThirdwebProvider, useAddress } from "@thirdweb-dev/react";


const mockTransactions = [
  //...your mock transactions here
  {date: '29-09-2023', gas: 1, kwh: 10, co2: 400},
  {date: '28-09-2023', gas: 1, kwh: 10, co2: 400},
  {date: '27-09-2023', gas: 1, kwh: 10, co2: 400},
  {date: '26-09-2023', gas: 1, kwh: 10, co2: 400},
  {date: '25-09-2023', gas: 1, kwh: 10, co2: 400},
  {date: '24-09-2023', gas: 1, kwh: 10, co2: 400},
  {date: '23-09-2023', gas: 1, kwh: 10, co2: 400},
  {date: '22-09-2023', gas: 1, kwh: 10, co2: 400},
  {date: '21-09-2023', gas: 1, kwh: 10, co2: 400},
  {date: '20-09-2023', gas: 1, kwh: 10, co2: 400},
];

const mockLineChartData = [
  {name: 'Tx1', co2: 400},
  {name: 'Tx2', co2: 200},
  {name: 'Tx3', co2: 600},
  {name: 'Tx4', co2: 100},
  {name: 'Tx5', co2: 300},
  {name: 'Tx6', co2: 900},
  {name: 'Tx7', co2: 500},
  {name: 'Tx8', co2: 100},
  {name: 'Tx9', co2: 300},
  {name: 'Tx10', co2: 200},
  //...
];

const mockBarChartData = [
  {name: 'ETH', co2: 300},
  {name: 'MATIC', co2: 220},
  {name: 'SOL', co2: 150},
  //...
];

const mockAllCO2BarChartData = [
  {name: 'Coin1', co2: 300},
  {name: 'Coin2', co2: 150},
  {name: 'Coin3', co2: 300},
  {name: 'Coin4', co2: 150},
  {name: 'Coin5', co2: 300},
  {name: 'Coin6', co2: 150},
  {name: 'Coin7', co2: 300},
  {name: 'Coin8', co2: 150},
  {name: 'Coin9', co2: 300},
  {name: 'Coin10', co2: 150},
  {name: 'Coin11', co2: 300},
  {name: 'Coin12', co2: 150},
  {name: 'Coin13', co2: 300},
  {name: 'Coin14', co2: 150},
  //...
];


function App() {
  const address = useAddress();

  return (
    <div className="App">
      {address ? (
        <>
         <WalletConnect />
         <Dashboard
          transactions={mockTransactions}
          lineChartData={mockLineChartData}
          barChartData={mockBarChartData}
          allCO2BarChartData={mockAllCO2BarChartData} />
        </> 
      ) : (
        <WalletConnect onConnect={() => {console.log('Wallet connected!'); }} /> 
      )}
    </div>
  );
}

function AppWrapper() {
  return (
    <ThirdwebProvider
      activeChain="goerli"
      clientId="YOUR_CLIENT_ID"
    >
      <App />
    </ThirdwebProvider>
  );
}

export default AppWrapper;

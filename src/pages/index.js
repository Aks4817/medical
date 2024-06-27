import { useState, createContext, useContext } from "react";
import { ethers } from "ethers";
import SelfChoice from './components/SelfChoice'; // Assuming SelfChoice component path
import mainabi from "./mainabi.json";
import insurabi from "./insurabi.json";
// Define context for contract instances and signer
const ContractContext = createContext();

export default function Home() {
  const [showSelfChoice, setShowSelfChoice] = useState(false);
  const [userAddress, setUserAddress] = useState('');
  const [signer, setSigner] = useState(null);
  const [login, setLogin] = useState(0);
  const [mainContract, setMainContract] = useState(null);
  const [insuranceContract, setInsuranceContract] = useState(null);

  const handleLoginClick = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setSigner(signer);
        setUserAddress(address);

        const MAINC_ADDRESS = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
        const INSURANCE_ADDRESS = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

        const mainContract = new ethers.Contract(MAINC_ADDRESS, mainabi, signer);
        const insuranceContract = new ethers.Contract(INSURANCE_ADDRESS, insurabi, signer);

        setMainContract(mainContract);
        setInsuranceContract(insuranceContract);
        setShowSelfChoice(true); // Show the SelfChoice component
      } else {
        setLogin(2);
        throw new Error("MetaMask not installed");
      }
    } catch (error) {
      console.log("Error in initialization:", error);
    }
  }

  return (
    <main>
      {!showSelfChoice ? (
        <button onClick={handleLoginClick}>Login</button>
      ) : (
        <ContractContext.Provider value={{ mainContract, insuranceContract, signer, userAddress }}>
          <SelfChoice />
        </ContractContext.Provider>
      )}
    </main>
  );
}

// Function component to access contract context
export function useContractContext() {
  return useContext(ContractContext);
}

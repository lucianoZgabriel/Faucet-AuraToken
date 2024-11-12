import Web3 from "web3";
import ABI from "./abi.json";

export async function mint() {
  if (!window.ethereum) throw new Error("MetaMask not found");

  const web3 = new Web3(window.ethereum);
  const accounts = await web3.eth.requestAccounts();
  if (!accounts || !accounts.length) throw new Error("No accounts found");

  const contract = new web3.eth.Contract(ABI, process.env.REACT_APP_CONTRACT, {
    from: accounts[0],
  });
  const tx = await contract.methods.mint().send();
  console.log(tx.transactionHash);
  return tx.transactionHash;
}

import Web3 from "web3";
import axios from "axios";

export async function mint() {
  const nextMint = localStorage.getItem("nextMint");
  if (nextMint && parseInt(nextMint) > Date.now()) {
    throw new Error("You can only mint once a day");
  }

  if (!window.ethereum) throw new Error("MetaMask not found");

  const web3 = new Web3(window.ethereum);
  const accounts = await web3.eth.requestAccounts();
  if (!accounts || !accounts.length) throw new Error("No accounts found");

  localStorage.setItem("wallet", accounts[0]);
  localStorage.setItem("nextMint", `${Date.now() + 24 * 60 * 60 * 1000}`);

  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/mint/${accounts[0]}`
  );

  return response.data;
}

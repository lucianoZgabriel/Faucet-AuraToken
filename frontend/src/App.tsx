import { useState } from "react";
import { mint } from "./Web3Service";
import ReCAPTCHA from "react-google-recaptcha";

function App() {
  const [message, setMessage] = useState("");
  const [captcha, setCaptcha] = useState("");

  function onButtonClick() {
    if (captcha) {
      setMessage("Requesting transaction...");
      mint()
        .then((tx) =>
          setMessage(
            `Your tokens were sento to ${localStorage.getItem(
              "wallet"
            )}. Tx: ${tx}`
          )
        )
        .catch((err) => {
          console.error(err);
          setMessage(
            err.response ? err.response.data.cause.message : err.message
          );
        });
      setCaptcha("");
    } else setMessage("Please, complete the reCAPTCHA challenge.");
  }

  return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header className="mb-auto">
        <div>
          <h3 className="float-md-start mb-0">Aura Token Faucet</h3>
          <nav className="nav nav-masthead justify-content-center float-md-end">
            <a
              className="nav-link fw-bold py-1 px-0 active"
              aria-current="page"
              href="#"
            >
              Home
            </a>
            <a className="nav-link fw-bold py-1 px-0" href="#">
              About
            </a>
          </nav>
        </div>
      </header>

      <main className="px-3">
        <h1>Get your Aura Token</h1>
        <p className="lead">
          Once a day, you can claim 1000 Aura Tokens for free. Just connect you
          MetaMask clicking below.
        </p>
        <p className="lead">
          <a
            href="#"
            onClick={onButtonClick}
            className="btn btn-lg btn-light fw-bold border-white bg-white"
          >
            <img src="/assets/metamask.svg" alt="MetaMask logo" width={48} />
            Connect Wallet
          </a>
        </p>
        <div style={{ display: "inline-flex" }}>
          <ReCAPTCHA
            sitekey={`${process.env.REACT_APP_RECAPTCHA_SITE_KEY}`}
            onChange={(value) => setCaptcha(value || "")}
          />
        </div>
        <p className="lead">{message}</p>
      </main>

      <footer className="mt-auto text-white-50">
        <p>
          Built by{" "}
          <a href="https://twitter.com/mdo" className="text-white">
            Luciano Zanin Gabriel
          </a>
          .
        </p>
      </footer>
    </div>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from "@ethersproject/providers";
import { ChakraProvider } from "@chakra-ui/react";
import reportWebVitals from "./reportWebVitals";
import SimpleReactLightbox from "simple-react-lightbox";
const ethers = require("ethers") 
const getLibrary = (provider, connector) => {
  const library = new Web3Provider(provider);
  library.pollingInterval = 8000; // frequency provider is polling
  return library;
};
ReactDOM.render(
  <React.StrictMode>
    <SimpleReactLightbox>
    <ChakraProvider>
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
      </Web3ReactProvider>
      </ChakraProvider>
    </SimpleReactLightbox>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();

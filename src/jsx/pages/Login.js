import React,  { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {
  VStack,
  useDisclosure,
  Button,
  Text,
  HStack,
  Select,
  Input,
  Box
} from "@chakra-ui/react";
import { Web3ReactProvider } from '@web3-react/core'
import SelectWalletModal from "./ModalLoginWeb3";
import { Web3Provider } from "@ethersproject/providers";
import { ChakraProvider } from "@chakra-ui/react";

// image
import logo from "../../images/logo-full.png";

const ethers = require("ethers") 
const Login = ({ history }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    history.push("/");
  };
  const getLibrary = (provider, connector) => {
    const library = new Web3Provider(provider);
    library.pollingInterval = 8000; // frequency provider is polling
    return library;
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <ChakraProvider>
    <Web3ReactProvider getLibrary={getLibrary}>
    <div className="authincation h-100 p-meddle">
      <div className="container h-100">
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-md-6">
            <div className="authincation-content">
              <div className="row no-gutters">
                <div className="col-xl-12">
                  <div className="auth-form">
                    <div className="text-center mb-3">
                      <Link to="/">
                        <img src={logo} alt="" />
                      </Link>
                    </div>
                    <h4 className="text-center mb-4 ">Sign in your account</h4>
                    <form onSubmit={(e) => submitHandler(e)}>
                      <div className="form-group">
                        <label className="mb-1 ">
                          <strong>Email</strong>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          defaultValue="hello@example.com"
                        />
                      </div>
                      <div className="form-group">
                        <label className="mb-1 ">
                          <strong>Password</strong>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          defaultValue="Password"
                        />
                      </div>
                      <div className="form-row d-flex justify-content-between mt-4 mb-2">
                        <div className="form-group">
                          <div className="custom-control custom-checkbox ml-1 ">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="basic_checkbox_1"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="basic_checkbox_1"
                            >
                              Remember my preference
                            </label>
                          </div>
                        </div>
                        <div className="form-group">
                          <Link className="" to="page-forgot-password">
                            Forgot Password?
                          </Link>
                        </div>
                      </div>
                      <div className="text-center">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                        >
                          Sign Me In
                        </button>
                      </div>
                    </form>
                    <div className="new-account mt-3">
                      <p className="">
                        Don't have an account?{" "}
                        <Link className="text-primary" to="./page-register">
                          Sign up
                        </Link>
                      </p>
                    </div>
                    <hr/> 
                  <div className="login-via-third-party">
                  <div className="text-center">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block" onClick={onOpen}
                        >
                          Continue With Wallet
                        </button>
                      </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SelectWalletModal isOpen={isOpen} closeModal={onClose} />
    </div>
    </Web3ReactProvider>
      </ChakraProvider>
  );
};

export default Login;

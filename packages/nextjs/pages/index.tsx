import React, { useRef, useState } from "react";
import Link from "next/link";
import type { NextPage } from "next";
import Web3 from "web3";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";

const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

const sendEther = async (address, amount) => {
  const accounts = await web3.eth.getAccounts();
  const sender = accounts[0];

  web3.eth
    .sendTransaction({
      from: sender,
      to: address,
      value: web3.utils.toWei(amount.toString(), "ether"),
    })
    .on("receipt", console.log)
    .on("error", console.error);
};

const Home: NextPage = () => {
  const [amounts, setAmounts] = useState([0.050, 0.042, 0.00420]);
  const [names, setNames] = useState(["Alice", "Jane Doe", "Bob Smith"]);
  const [addresses, setAddresses] = useState([
    "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
    "0x00908aA4d631c3733eB04Ff62515BdaD67E4748b",
    "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BE",
  ]);
  const tableRef = useRef(null);
  const handleClick = async index => {
    const newAmounts = [...amounts];
    newAmounts[index] = 0;
    setAmounts(newAmounts);

    if (tableRef.current) {
      const amountCell = tableRef.current.rows[index + 1].cells[1];
      amountCell.textContent = "$0";
    }
    await sendEther(addresses[index], amounts[index]);
  };

  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Welcome to </span>
            <span className="block text-4xl font-bold">ChainSettle</span>
          </h1>
        </div>
        <div className="container mt-4">
          <h3>Settle Up</h3>
        </div>
        <table ref={tableRef}>
          <thead>
            <tr>
              <th>Recipient</th>
              <th>Amount</th>
              <th>Ethereum Address</th>
              <th>Action</th>
            </tr>
          </thead>
        </table>

        <tbody>
          {amounts.map((amount, index) => (
            <tr key={index}>
              <td>{names[index]}</td>
              <td>${amount}</td>
              <td>
                {addresses[index].substring(0, 5)}...{addresses[index].substring(10, 15)}
              </td>
              <td>
                <button className={`btn btn-success${index + 1}`} onClick={() => handleClick(index)}>
                  Settle Up
                </button>
              </td>
            </tr>
          ))}
        </tbody>

        {/*input  */}

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <BugAntIcon className="h-8 w-8 fill-secondary" />
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

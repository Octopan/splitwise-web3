import Link from "next/link";
import type { NextPage } from "next";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Welcome to </span>
            <span className="block text-4xl font-bold">Splitwise-Crypto Integration App </span>
          </h1>
          <p className="text-center text-lg">Get started by editing </p>
        </div>

        {/* tesi */}

        <div className="container mt-4">
          <h3>Settle Up</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Recipient</th>
                <th>Amount</th>
                <th>Ethereum Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>$50</td>
                <td>0x123...ABC</td>
                <td>
                  <button className="btn btn-success">Settle Up</button>
                </td>
              </tr>
              <tr>
                <td>Alice</td>
                <td>$42</td>
                <td>0xaB3...ABC</td>
                <td>
                  <button className="btn btn-success">Settle Up</button>
                </td>
              </tr>
              <tr>
                <td>Bob</td>
                <td>$420</td>
                <td>0x123...def</td>
                <td>
                  <button className="btn btn-success">Settle Up</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/*input  */}

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <BugAntIcon className="h-8 w-8 fill-secondary" />
              <p>
                Tinker with your smart contract using the{" "}
                <Link href="/debug" passHref className="link">
                  Debug Contract
                </Link>{" "}
                tab.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
              <p>
                Explore your local transactions with the{" "}
                <Link href="/blockexplorer" passHref className="link">
                  Block Explorer
                </Link>{" "}
                tab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

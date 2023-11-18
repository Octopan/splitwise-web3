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
            <span className="block text-4xl font-bold">ChainSettle</span>
          </h1>
        </div>
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
                <td>0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC</td>
                <td>
                  <button className="btn btn-success1">Settle Up</button>
                </td>
              </tr>
              <tr>
                <td>Alice</td>
                <td>$42</td>
                <td>0x90F79bf6EB2c4f870365E785982E1f101E93b906</td>
                <td>
                  <button className="btn btn-success2">Settle Up</button>
                </td>
              </tr>
              <tr>
                <td>Bob</td>
                <td>$420</td>
                <td>0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC</td>
                <td>
                  <button className="btn btn-success3">Settle Up</button>
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

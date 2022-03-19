import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsFillInfoCircleFill, BsInfoCircle } from "react-icons/bs";
import Loader from "./Loader";

const commonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-r-[1px] border-b-[1px] border-[#3d4f7c] text-sm text-white";
const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    stepp="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-full px-6 py-3 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  const connectWallet = () => {};
  const handleSubmit = () => {};
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-grdient py-1 leading-9">
            Send Crypto <br />
            across the world
          </h1>
          <p className="text-left mt-6 text-white md:w-9/12 w:11/12 text-base">
            Explore the Crypto world. Becho aur kharido cryptocurrencies easily
            on manikangkandas.
          </p>
          <button
            type="button"
            className="flex justify-center items-center my-6 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd] text-white"
            onClick={connectWallet}>
            Connect Wallet
          </button>
          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div
              className={`rounded-tl-2xl border-t-[1px]  border-l-[1px]  ${commonStyles}`}>
              Realiability
            </div>
            <div className={`border-t-[1px] ${commonStyles}`}>Security</div>
            <div className={`rounded-tr-2xl border-t-[1px]  ${commonStyles}`}>
              Ethereum
            </div>
            <div className={`rounded-bl-2xl border-l-[1px] ${commonStyles}`}>
              Web 3.0
            </div>
            <div className={commonStyles}>Low fees</div>

            <div className={`rounded-br-2xl ${commonStyles}`}>Blockchain</div>
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-start items-center w-full mf:mt-0 mt-10">
          <div className="p-3 justify-end items-start flex-col rounded-xl h-48 sm:w-96 w-full mb-6 eth-card white-glassmorphisim">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 aspect-square rounded-full border-1 border-white flex justify-center items-center">
                  <SiEthereum color="#fff" fontSize={18} />
                </div>
                <BsFillInfoCircleFill fontSize={18} color="#fff" />
              </div>
              <div>
                <p className="text-white text-sm">Address</p>
                <p className="text-white  text-lg mt-1">Ethereum</p>
              </div>
            </div>
          </div>
          <div className="p-6 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input
              placeholder="Address to"
              name="addressTo"
              type="text"
              handleChange={() => {}}
            />
            <Input
              placeholder="Amount to ETH"
              name="amount"
              type="number"
              handleChange={() => {}}
            />
            <Input
              placeholder="Keywords in GIFS"
              name="keyword"
              type="text"
              handleChange={() => {}}
            />
            <Input
              placeholder="Enter message"
              name="message"
              type="text"
              handleChange={() => {}}
            />
            {/* <div className="h-[1px] w-full bg-gray-400 my-2" /> */}
            {false ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full mt-2 border-[1px] py-3 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer">
                Send now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

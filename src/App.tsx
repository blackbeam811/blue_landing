import {
  useAccount,
  useConnect,
  useDisconnect,
  useReadContract,
  useWriteContract,
} from "wagmi";
import { erc20Abi, formatEther, parseEther } from "viem";
import { useEffect, useState } from "react";
import { sepolia } from "viem/chains";
import jackToolsAbi from "./abis/JackTools.json";
import styled from "styled-components";
import Header from "./components/Layout/Header";
import Landing from "./components/Layout/Landing";
import bg from "./assets/bg.png";

const Label3 = styled.div`
  display: inline-block;
  width: 100px;
`;

const Label1 = styled.div`
  display: inline-block;
  width: 250px;
`;

const Button = styled.button`
  background: rgb(24, 40, 239);
  background: linear-gradient(
    141deg,
    rgba(24, 40, 239, 1) 0%,
    rgba(41, 50, 243, 1) 20%,
    rgba(55, 64, 244, 1) 80%,
    rgba(26, 35, 239, 1) 100%
  );
  border-radius: 30px;
  padding: 10px 15px;
  margin: 5px;
  cursor: pointer;
  background-color: #234282;
  border: none;
  color: white;

  &:hover {
    background-color: #335292;
  }

  &:active {
    background-color: #133272;
  }

  &:disabled {
    background-color: #808080;
    color: #b0b0b0;
    cursor: default;
  }
`;

const Error = styled.div`
  color: red;
`;

function App() {
  const toolAddress = "0x68d7c11DfE647A2A7F16974b2AF0eCBd9edfD555";
  const account = useAccount();

  // const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();
  const [token, setToken] = useState("");
  const [tokenAmountForLP, setTokenAmountForLP] = useState("0");
  const [ethAmountForLP, setETHAmountForLP] = useState("0");
  const [tokenAmountToBuy, setTokenAmountToBuy] = useState("0");

  const { data: tokenBalance } = useReadContract({
    abi: erc20Abi,
    address: `0x${token.slice(2)}`,
    functionName: "balanceOf",
    chainId: sepolia.id,
    args: [account.address || `0x`],
  });

  const { data: tokenApproved } = useReadContract({
    abi: erc20Abi,
    address: `0x${token.slice(2)}`,
    functionName: "allowance",
    chainId: sepolia.id,
    args: [account.address || `0x`, toolAddress],
  });

  const {
    writeContract: approveToken,
    isSuccess: isSuccessApprove,
    isPending: pendingApprove,
  } = useWriteContract();
  const {
    writeContract: createLPAndBuy,
    isSuccess,
    isPending,
    error: errorCreateLPAndBuy,
  } = useWriteContract();

  const handleApprove = () => {
    approveToken({
      abi: erc20Abi,
      address: `0x${token.slice(2)}`,
      functionName: "approve",
      args: [
        `0x68d7c11DfE647A2A7F16974b2AF0eCBd9edfD555`,
        BigInt(parseEther(tokenAmountForLP)),
      ],
    });
  };

  const handleCreatLPAndBuy = () => {
    createLPAndBuy({
      abi: jackToolsAbi,
      address: `0x68d7c11DfE647A2A7F16974b2AF0eCBd9edfD555`,
      functionName: "createLPAndBuy",
      args: [
        token,
        BigInt(parseEther(tokenAmountForLP)),
        BigInt(parseEther(ethAmountForLP)),
        BigInt(parseEther(tokenAmountToBuy)),
      ],
      value: BigInt(parseEther((Number(ethAmountForLP) * 2).toString())),
    });
  };

  const handleConfirm = () => {
    console.log(
      (tokenApproved || 0) >= parseEther(tokenAmountForLP) ? "true" : "false",
      tokenApproved,
      parseEther(tokenAmountForLP)
    );
    if ((tokenApproved || 0) >= parseEther(tokenAmountForLP)) {
      handleCreatLPAndBuy();
    } else {
      handleApprove();
    }
  };

  useEffect(() => {
    if (isSuccessApprove) {
      handleCreatLPAndBuy();
    }
  }, [isSuccessApprove]);

  useEffect(() => {
    if (isSuccess) {
      alert("Success");
    }
  }, [isSuccess]);

  return (
    <div style={{backgroundImage: `url(${bg})`, backgroundSize: "100% auto", backgroundPosition: "top", backgroundRepeat: "no-repeat"}}>
      <Header />
      <Landing />
      {/* <div>
        <h2>Your Wallet</h2>

        <div>
          <Label3>status:</Label3> {account.status}
          <br />
          <Label3>address :</Label3> {account.address}
          <br />
          <Label3>chainId:</Label3> {account.chainId}
        </div>

        {account.status === "connected" && (
          <Button type="button" onClick={() => disconnect()}>
            Disconnect
          </Button>
        )}
      </div>

      <div>
        <h2>Connect Wallet</h2>
        <Error>{error?.message}</Error>
        <div>{status}</div>
        {connectors.map((connector) => (
          <Button
            key={connector.uid}
            onClick={() => connect({ connector })}
            type="button"
          >
            {connector.name}
          </Button>
        ))}
      </div>

      <div>
        <h2>Create LP and Buy</h2>
        <Error>{errorCreateLPAndBuy?.message}</Error>
        <Label1>Token Address:</Label1>
        <input
          onChange={(e) => {
            setToken(e.target.value);
          }}
        />
        <p>Balance: {formatEther(tokenBalance || BigInt(0))}</p>
        <div>
          <Label1>Token Amount to add liqudity:</Label1>
          <input
            onChange={(e) => {
              setTokenAmountForLP(e.target.value);
            }}
          />
        </div>
        <div>
          <Label1>ETH Amount to add liqudity:</Label1>
          <input
            onChange={(e) => {
              setETHAmountForLP(e.target.value);
            }}
          />
        </div>
        <div>
          <Label1>Token Amount to buy:</Label1>
          <input
            onChange={(e) => {
              setTokenAmountToBuy(e.target.value);
            }}
          />
        </div>
        <Button
          disabled={
            account.status != "connected" || pendingApprove || isPending
          }
          onClick={handleConfirm}
        >
          {pendingApprove
            ? "Approving..."
            : isPending
              ? "Processing..."
              : "Confirm"}
        </Button>
      </div> */}
    </div>
  );
}

export default App;

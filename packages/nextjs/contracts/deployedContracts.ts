/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  31337: {
    Easy2Pay: {
      address: "0xA51c1fc2f0D1a1b8494Ed1FE312d7C3a78Ed91C0",
      abi: [
        {
          type: "constructor",
          inputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getRequest",
          inputs: [
            {
              name: "requestId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "tuple",
              internalType: "struct PayRequest",
              components: [
                {
                  name: "requester",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "requestId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "payer",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "amount",
                  type: "uint248",
                  internalType: "uint248",
                },
                {
                  name: "reason",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "completed",
                  type: "bool",
                  internalType: "bool",
                },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "pay",
          inputs: [
            {
              name: "_requestId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "payRequestsById",
          inputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "requester",
              type: "address",
              internalType: "address",
            },
            {
              name: "requestId",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "payer",
              type: "address",
              internalType: "address",
            },
            {
              name: "amount",
              type: "uint248",
              internalType: "uint248",
            },
            {
              name: "reason",
              type: "string",
              internalType: "string",
            },
            {
              name: "completed",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "requestCount",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "requestPayment",
          inputs: [
            {
              name: "_amount",
              type: "uint248",
              internalType: "uint248",
            },
            {
              name: "_payer",
              type: "address",
              internalType: "address",
            },
            {
              name: "_reason",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setOwner",
          inputs: [
            {
              name: "_newOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "RequestCreated",
          inputs: [
            {
              name: "requestId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "requester",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "payer",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "amount",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "reason",
              type: "string",
              indexed: false,
              internalType: "string",
            },
            {
              name: "creationTime",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RequestPaid",
          inputs: [
            {
              name: "requestId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "Easy2Pay__FailedToSendEther",
          inputs: [],
        },
        {
          type: "error",
          name: "Easy2Pay__InsufficientEther",
          inputs: [
            {
              name: "requestedAmount",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "actualAmount",
              type: "uint256",
              internalType: "uint256",
            },
          ],
        },
        {
          type: "error",
          name: "Easy2Pay__InvalidPayer",
          inputs: [
            {
              name: "payer",
              type: "address",
              internalType: "address",
            },
          ],
        },
        {
          type: "error",
          name: "Easy2Pay__PaymentAlreadyCompleted",
          inputs: [],
        },
        {
          type: "error",
          name: "Easy2Pay__UnauthorizedAccess",
          inputs: [],
        },
      ],
      inheritedFunctions: {},
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;

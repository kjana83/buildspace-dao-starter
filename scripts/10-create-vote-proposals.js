import { ethers } from "ethers";

import sdk from "./1-initialize-sdk.js";

const voteModule = sdk.getVoteModule(
  "0xb59898e61a816b98954Cadd794464399926e0050"
);

const tokenModule = sdk.getTokenModule(
  "0x7C6B3a559dd209b624e2CA750e7aaF7EB9CBFB58"
);

(async () => {
  try {
    const amount = 420_000;
    await voteModule.propose(
      "Should the DAO minto additioal " + amount + " tokens",
      [
        {
          nativeTokenValue: 0,
          transactionData: tokenModule.contract.interface.encodeFunctionData(
            "mint",
            [voteModule.address, ethers.utils.parseUnits(amount.toString(), 18)]
          ),
          toAddress: tokenModule.address,
        },
      ]
    );

    console.log("Successfully created proposals to mint tokens");
  } catch (error) {
    console.log("Failed to create proposal", error);
    process.exit(0);
  }
  try {
    const amount = 6_900;
    await voteModule.propose(
      "Should the DAO transfer " +
        amount +
        " tokens from trasuary to " +
        process.env.WALLET_ADDRESS +
        " for being awesome",
      [
        {
          nativeTokenValue: 0,
          transactionData: tokenModule.contract.interface.encodeFunctionData(
            "transfer",
            [
              process.env.WALLET_ADDRESS,
              ethers.utils.parseUnits(amount.toString(), 18),
            ]
          ),
          toAddress: tokenModule.address,
        },
      ]
    );
    console.log(
      "Successfully created proposals  to reward ourselves from the treasury"
    );
  } catch (error) {
    console.log("Failed to create second proposal", error);
  }
})();

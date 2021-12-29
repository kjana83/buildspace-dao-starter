import sdk from "./1-initialize-sdk.js";

import { ethers } from "ethers";

const voteModule = sdk.getVoteModule(
  "0xb59898e61a816b98954Cadd794464399926e0050"
);

const tokenModule = sdk.getTokenModule(
  "0x7C6B3a559dd209b624e2CA750e7aaF7EB9CBFB58"
);

(async () => {
  try {
    await tokenModule.grantRole("minter", voteModule.address);
    console.log(
      "Successfully gave vote module permission to act on Token Module"
    );
  } catch (error) {
    console.log("Error on grating permission to Token module", error);
    process.exit(0);
  }

  try {
    const ownedTokenBalance = await tokenModule.balanceOf(
      process.env.WALLET_ADDRESS
    );
    const ownedAmount = ethers.BigNumber.from(ownedTokenBalance.value);
    const percent90 = ownedAmount.div(100).mul(90);
    await tokenModule.transfer(voteModule.address, percent90);
    console.log("Successfully transferred tokens to Vote Module");
  } catch (error) {
    console.log("Failed to transfer tokens to vote module");
  }
})();

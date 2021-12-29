import sdk from "./1-initialize-sdk.js";
import { ethers } from "ethers";

const tokenModule = sdk.getTokenModule(
  "0x7C6B3a559dd209b624e2CA750e7aaF7EB9CBFB58"
);

(async () => {
  try {
    const amount = 1_000_000;
    const amountWith18Deceimals = ethers.utils.parseUnits(
      amount.toString(),
      18
    );
    await tokenModule.mint(amountWith18Deceimals);
    const totalSupply = await tokenModule.totalSupply();
    console.log(
      "There is now",
      ethers.utils.formatUnits(totalSupply, 18),
      " JKT"
    );
  } catch (error) {
    console.log("Failed to Print money", error);
  }
})();

import sdk from "./1-initialize-sdk.js";
import { ethers } from "ethers";

const bundleDrop = sdk.getBundleDropModule(
  "0xaD7bccC7fb2B746121Cc40ba01713835abc938f4"
);

const tokenModule = sdk.getTokenModule(
  "0x7C6B3a559dd209b624e2CA750e7aaF7EB9CBFB58"
);

(async () => {
  try {
    const walletAddress = await bundleDrop.getAllClaimerAddresses("0");
    if (walletAddress.length == 0) {
      console.log("No NFTs claimed yet");
      process.exit(0);
    }

    const airDropTargets = walletAddress.map((address) => {
      const randomAmount = Math.floor(
        Math.random() * (10000 - 1000 + 1) + 1000
      );
      console.log("Going to drop ", randomAmount, "tokens to ", address);
      const airDropTarget = {
        address,
        amount: ethers.utils.parseUnits(randomAmount.toString(), 18),
      };
      return airDropTarget;
    });
    console.log("Starting airdrop!! ");
    await tokenModule.transferBatch(airDropTargets);
    console.log("Successfully airdropped tokens to all the NFT holders");
  } catch (error) {
    console.log("Failed to airdrop tokens", error);
  }
})();

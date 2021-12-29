import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

import { readFileSync } from "fs";

const app = sdk.getAppModule("0x4E087609EbF7c8CC7dd5df5e8b781163eE753d5B");

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      name: "CCKDAO Membership",
      description: "A CCK for Canada Camping kings",
      image: readFileSync("scripts/assets/tent.png"),
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });

    console.log(
      "✅ Successfully deployed.bundledrop module address: ",
      bundleDropModule.address
    );
    console.log("✅ bundledrop metada: ", await bundleDropModule.getMetadata());
  } catch (err) {
    console.log("❗❗ failed to create bundleDropModule", err);
  }
})();

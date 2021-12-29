import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xaD7bccC7fb2B746121Cc40ba01713835abc938f4"
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Tent",
        description: "This NFT you get access to CCK DAO",
        image: readFileSync("scripts/assets/camp.png"),
      },
    ]);
    console.log("Sucessfully created NFT for Drop");
  } catch (error) {
    console.log("Error occured wile deploy NFT", error);
  }
})();

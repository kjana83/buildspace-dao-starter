import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("0x4E087609EbF7c8CC7dd5df5e8b781163eE753d5B");

(async () => {
  try {
    const tokenModule = await app.deployTokenModule({
      name: "CCDAO Governance Token",
      symbol: "JKT",
    });
    console.log(
      "Successfully deployed token module, Address: ",
      tokenModule.address
    );
  } catch (error) {
    console.log("Failed to deploy token module", error);
  }
})();

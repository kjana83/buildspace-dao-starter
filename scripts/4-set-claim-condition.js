import sdk from "./1-initialize-sdk.js";

const bundleDrop = sdk.getBundleDropModule(
  "0xaD7bccC7fb2B746121Cc40ba01713835abc938f4"
);

(async () => {
  try {
    const claimConditionFactory = bundleDrop.getClaimConditionFactory();
    claimConditionFactory.newClaimPhase({
      startTime: new Date(),
      maxQuantity: 50_000,
      maxQuantityPerTransaction: 1,
    });
    await bundleDrop.setClaimCondition(0, claimConditionFactory);
    console.log(
      "Successfully set claim condition for Bundle drop",
      bundleDrop.address
    );
  } catch (error) {
    console.log(bundleDrop.address);
    console.log("Error on Setting claim condition", error);
  }
})();

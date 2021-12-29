import sdk from "./1-initialize-sdk.js";

const appModule = sdk.getAppModule(
  "0x4E087609EbF7c8CC7dd5df5e8b781163eE753d5B"
);

(async () => {
  try {
    const voteModule = await appModule.deployVoteModule({
      name: "CCK DAOs Proposal",
      votingTokenAddress: "0x7C6B3a559dd209b624e2CA750e7aaF7EB9CBFB58",
      proposalStartWaitTimeInSeconds: 0,
      proposalVotingTimeInSeconds: 24 * 60 * 60,
      votingQuorumFraction: 0,
      minimumNumberOfTokensNeededToPropose: "0",
    });

    console.log("Successfully deployed Vote module", voteModule.address);
  } catch (error) {
    console.log("Failed to deploy voting Module", error);
  }
})();

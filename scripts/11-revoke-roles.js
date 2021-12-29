import sdk from "./1-initialize-sdk.js";

const tokenModule = sdk.getTokenModule(
  "0x7C6B3a559dd209b624e2CA750e7aaF7EB9CBFB58"
);

(async () => {
  try {
    console.log("Current roles are", await tokenModule.getAllRoleMembers());

    await tokenModule.revokeAllRolesFromAddress(process.env.WALLET_ADDRESS);
    console.log(
      "Roles after revoking ourselves",
      await tokenModule.getAllRoleMembers()
    );
    console.log("Successfully revoked superpowers from ERC-20");
  } catch (error) {
    console.log("Failed to revoke", error);
  }
})();

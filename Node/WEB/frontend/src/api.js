const { SecretClient } = require("@azure/keyvault-secrets");
const { DefaultAzureCredential } = require("@azure/identity");

async function API() {
  const credential = new DefaultAzureCredential();
  const keyVaultName = process.env["KEY_VAULT_NAME"];
  const url = "https://" + keyVaultName + ".vault.azure.net";

  const client = new SecretClient(url, credential);

  const secret = await client.getSecret(secretName);

  return (
   <div> 
    <p> test page 123 </p>
    <p>The value of my secret is {secret}</p> </div>
  );
}

export default API;


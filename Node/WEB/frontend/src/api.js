

const { SecretClient } = require("@azure/keyvault-secrets");
const { DefaultAzureCredential } = require("@azure/identity");

function getKeyVaultCredentials(){
    return msRestAzure.loginWithAppServiceMSI({resource: 'https://cs519keyvault.vault.azure.net/'});
}

function getKeyVaultSecret(credentials) {
    let keyVaultClient = new KeyVault.KeyVaultClient(credentials);
    return keyVaultClient.getSecret(KEY_VAULT_URI, 'WebAppSecret', "");
}

async function API() {
    let secret1 = ""
    getKeyVaultCredentials().then(getKeyVaultSecret).then(
        function (secret){
            secret1 = secret.value;
        }
    ).catch(
        function (err) {
            throw (err);
        }
    );
    
  return (
   <div> 
    <p> test page 123 </p>
    <p>The value of my secret is {secret1}</p> </div>
  );
}

export default API;


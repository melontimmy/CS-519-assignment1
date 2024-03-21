import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import {ManagedIdentityCredential} from "@azure/identity";
import {SecretClient} from "@azure/keyvault-secrets"


const credential = new ManagedIdentityCredential();

const vaultName = "https://cs519keyvault.vault.azure.net/";


const url = `https://${vaultName}.vault.azure.net`;
const client = new SecretClient(url, credential);

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const name = (req.query.name || (req.body && req.body.name));
    const webSecret = await client.getSecret("WebAppSecret");
    const funcSecret = await client.getSecret("FunctionSecret");
    console.log(funcSecret)
    const responseMessage = webSecret

    context.res = {
        body: responseMessage
    };

};

export default httpTrigger;



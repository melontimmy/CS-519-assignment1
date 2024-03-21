import {DefaultAzureCredential, ManagedIdentityCredential} from "@azure/identity";
import {SecretClient} from "@azure/keyvault-secrets"
import { useState, useEffect } from 'react';

const credential = ManagedIdentityCredential();

const vaultName = "https://cs519keyvault.vault.azure.net/";
const secretName = "WebAppSecret";

const url = `https://${vaultName}.vault.azure.net`;
const client = new SecretClient(url, credential);




export default function Api() {
    const [secret, setSecret] = useState(null);
    useEffect(() => {
        async function getSecret() {
            const secret = await client.getSecret(secretName);
            setSecret()
        }
        getSecret();
    }, [])

    return (
        <div>
            <p> The secret value is: {secret.value}</p>
        </div>
    );
}



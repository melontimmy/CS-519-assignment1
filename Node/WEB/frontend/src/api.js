import {ManagedIdentityCredential} from "@azure/identity";
import {SecretClient} from "@azure/keyvault-secrets"
import { useState, useEffect } from 'react';

const credential = ManagedIdentityCredential();

const vaultName = "https://cs519keyvault.vault.azure.net/";
const secretName = "WebAppSecret";

const url = `https://${vaultName}.vault.azure.net`;
const client = new SecretClient(url, credential);


export default function API() {
    const [secret, setSecret] = useState();
    useEffect(() => {
        async function getSecret() {
            const secret = await client.getSecret(secretName);
            setSecret(secret)
        }
        getSecret();
    }, [])

    return (
        <div>
            <p> Sample Text </p>
            {secret ? (
                    <p> The secret value is: {secret.value}</p>
                ) : (
                    <p>Loading Secret Value Please wait...</p>
                )}
        </div>
    );
}



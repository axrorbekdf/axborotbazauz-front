import { Client, Account, Databases, ID} from 'appwrite';

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65fd2aa868d5959ac125');


export const ACCOUNT = new Account(client);
export const DATABASE = new Databases(client);
export const UNIQUE_ID = ID.unique();
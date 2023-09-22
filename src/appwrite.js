import { Account, Client, ID } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("650da519e3edf8f81b11");

export const APPWRITE_ACCOUNT = new Account(client);
export const APPWRITE_ID = ID;

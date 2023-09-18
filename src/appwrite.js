import { Account, Client, ID } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6501ddeac072abeb433e");

export const APPWRITE_ACCOUNT = new Account(client);
export const APPWRITE_ID = ID;
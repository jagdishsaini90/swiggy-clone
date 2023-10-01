import { Account, Client, ID } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("651946090a8cc93771f6");

export const APPWRITE_ACCOUNT = new Account(client);
export const APPWRITE_ID = ID;

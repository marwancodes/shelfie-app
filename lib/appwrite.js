import { Client, Account, Avatars, Databases } from 'react-native-appwrite';

export const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('681f40ec0029453aa76a')
    .setPlatform('com.marwancodes.shelfie');

export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);

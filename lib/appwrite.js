import { Client, Account, Avatars } from 'react-native-appwrite';

export const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('681f40ec0029453aa76a')
    .setPlatform('com.marwancodes.shelfie');


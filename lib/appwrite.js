
import { Client, Account, Avatars } from 'react-native-appwrite';

export const client =  new Client()
.setProject('6876a70600388e16d95b')
.setPlatform('com.yguy.bodok')
.setEndpoint('https://nyc.cloud.appwrite.io/v1');

export const account = new Account(client)
export const avatars = new Avatars(client)  
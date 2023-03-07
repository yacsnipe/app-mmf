// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAMv5IFsXbuAEgt5zr4SiQWn6kT73P5Zik',
    authDomain: 'http-client-demo-5f4b5.firebaseapp.com',
    databaseURL: 'https://http-client-demo-5f4b5.firebaseio.com',
    projectId: 'http-client-demo-5f4b5',
    storageBucket: 'http-client-demo-5f4b5.appspot.com',
    messagingSenderId: '571854908296'
  }
};

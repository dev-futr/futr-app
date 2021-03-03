// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
	firebase: {
    apiKey: "AIzaSyCHjrxeH8VUADKLhR5Csa54cqPRMDr4Pw8",
    authDomain: "rosy-dynamics-171007.firebaseapp.com",
    databaseURL: "https://rosy-dynamics-171007.firebaseio.com",
    projectId: "rosy-dynamics-171007",
    storageBucket: "rosy-dynamics-171007.appspot.com",
    messagingSenderId: "303898922125"
  },
  google_web_client_id: "1092390853283-i98feg7fb1dlsm92kkcbim62855pepi8.apps.googleusercontent.com",
  facebook_app_id: 826720427470540,
  wordpress_url: 'https://app.futr.pro',
  wordpress_rest_api_url: 'https://app.futr.pro/wp-json/wp/v2/posts'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

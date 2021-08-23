// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  sunnyPortalClientId: "20401f56-be3e-49c8-9a01-24151837dedb",
  sunnyPortalTenantId: "82e1281a-0c2a-42ab-8394-0a68a0be66d0",  
  shellURL:"http://localhost:5555/",
  achApi:{
    clientId: '7269ef6e-d77b-40e8-90c7-2f127151e1f7',
    getUrl: 'https://localhost:5001/ach/get',
    setUrl: 'https://localhost:5001/ach/set',
  } 

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

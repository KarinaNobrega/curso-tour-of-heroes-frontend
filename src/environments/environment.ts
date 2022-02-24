// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//ARQUIVO DE DESENVOLVIMENTO - o qual será substituído pelo enviroment de produção. quando for rodado o buid para produção.
export const environment = {
  production: false, //não está em produção
  baseUrl: 'https://curso-tour-of-heroes-api.herokuapp.com/api', //no desenvolvimento, também estará gravando no banco de dados. 
  //baseUrl: '/api'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

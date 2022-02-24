//ARQUIVO DE PRODUÇÃO - entrará no lugar do enviroment.ts quando for rodado o buid para produção.

export const environment = {
  production: true,
  baseUrl: 'https://curso-tour-of-heroes-api.herokuapp.com/api', //quando estiver em produção, estará gravando, efetivamente, no banco de dados para poder recuperar os dados, caso seja necessário.
};

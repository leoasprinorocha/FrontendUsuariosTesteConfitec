const proxy = [
  {
    context: "/api",
    target: [
      "http://192.168.1.4:45500/",
      "https://gerencia-servico-api.herokuapp.com",
      "http://192.168.137.1:45500",
      "https://localhost:44316/"
    ],
    pathRewrite: { "^/api": "" },
  },
];
module.exports = proxy;

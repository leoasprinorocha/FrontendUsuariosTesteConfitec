const proxy = [
  {
    context: "/api",
    target: [
      "http://192.168.1.4:45500/",
      "http://192.168.137.1:45500",
      "https://localhost:44316/",
      "http://ultimateweb-001-site1.etempurl.com"
    ],
    pathRewrite: { "^/api": "" },
  },
];
module.exports = proxy;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    develop: {
      port: 8545
    },
    loc_localhost_localhost: {
      network_id: "*",
      port: 8545,
      host: "127.0.0.1"
    },
    loc_development_development: {
      network_id: "*",
      port: 8545,
      host: "127.0.0.1"
    }
  }
};

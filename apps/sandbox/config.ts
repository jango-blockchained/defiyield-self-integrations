import convict from 'convict';

export default convict({
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 8070,
    env: 'APP_PORT',
    arg: 'port',
  },

  logs: {
    level: {
      doc: 'The log level to report.',
      format: ['debug', 'info', 'warn', 'error'],
      default: 'debug',
      env: 'LOG_LEVEL',
      arg: 'logLevel',
    },
  },

  graphql: {
    apiKey: {
      doc: 'DefiYield API Key',
      format: String,
      nullable: true,
      default: null,
      env: 'DEFIYIELD_GRAPHQL_KEY',
      arg: 'apiKey',
    },
    endpoint: {
      doc: 'The log level to report.',
      format: String,
      default: 'https://public-api.de.fi/graphql',
      env: 'DEFIYIELD_GRAPHQL_ENDPOINT',
      arg: 'endpoint',
    },
  },

  // https://chainlist.org/
  rpcs: {
    arbitrum: {
      doc: 'Arbitrum RPC url',
      format: String,
      default: 'https://rpc.ankr.com/arbitrum?cache=1800',
      env: 'ARBITRUM_URL',
      arg: 'arbitrum',
    },
    aurora: {
      doc: 'Aurora RPC url',
      format: String,
      default: 'https://mainnet.aurora.dev',
      env: 'AURORA_URL',
      arg: 'aurora',
    },
    avalanche: {
      doc: 'Avalanche RPC url',
      format: String,
      default: 'https://rpc.ankr.com/avalanche?cache=1800',
      env: 'AVALANCHE_URL',
      arg: 'avalanche',
    },
    binance: {
      doc: 'BNB RPC url',
      format: String,
      default: 'https://rpc.ankr.com/bsc?cache=1800',
      env: 'BINANCE_URL',
      arg: 'binance',
    },
    boba: {
      doc: 'Boba RPC url',
      format: String,
      default: 'https://mainnet.boba.network',
      env: 'BOBA_URL',
      arg: 'boba',
    },
    celo: {
      doc: 'Celo RPC url',
      format: String,
      default: 'https://rpc.ankr.com/celo?cache=1800',
      env: 'CELO_URL',
      arg: 'celo',
    },
    cronos: {
      doc: 'Cronos RPC url',
      format: String,
      default: 'https://evm.cronos.org',
      env: 'CRONOS_URL',
      arg: 'cronos',
    },
    ethereum: {
      doc: 'Ethereum RPC url',
      format: String,
      default: 'https://rpc.ankr.com/eth?cache=1800',
      env: 'ETHEREUM_URL',
      arg: 'ethereum',
    },
    fantom: {
      doc: 'Fantom RPC url',
      format: String,
      default: 'https://rpc.ftm.tools/?cache=1800',
      env: 'FANTOM_URL',
      arg: 'fantom',
    },
    fuse: {
      doc: 'Fuse RPC url',
      format: String,
      default: 'https://fuse-rpc.gateway.pokt.network',
      env: 'FUSE_URL',
      arg: 'fuse',
    },
    gnosis: {
      doc: 'Gnosis RPC url',
      format: String,
      default: 'https://rpc.ankr.com/gnosis?cache=1800',
      env: 'GNOSIS_URL',
      arg: 'gnosis',
    },
    harmony: {
      doc: 'Harmony RPC url',
      format: String,
      default: 'https://api.harmony.one',
      env: 'HARMONY_URL',
      arg: 'harmony',
    },
    heco: {
      doc: 'Heco RPC url',
      format: String,
      default: 'https://http-mainnet.hecochain.com',
      env: 'HECO_URL',
      arg: 'heco',
    },
    iotex: {
      doc: 'Iotex RPC url',
      format: String,
      default: 'https://rpc.ankr.com/iotex?cache=1800',
      env: 'IOTEX_URL',
      arg: 'iotex',
    },
    'kava-evm': {
      doc: 'Kava RPC url',
      format: String,
      default: 'https://evm.kava.io',
      env: 'KAVA_EVM_URL',
      arg: 'kava-evm',
    },
    klaytn: {
      doc: 'Klaytn RPC url',
      format: String,
      default: 'https://klaytn02.fandom.finance',
      env: 'KLAYTN_URL',
      arg: 'klaytn',
    },
    kucoin: {
      doc: 'KuCoin RPC url',
      format: String,
      default: 'https://rpc-mainnet.kcc.network',
      env: 'KUCOIN_URL',
      arg: 'kucoin',
    },
    metis: {
      doc: 'Metis RPC url',
      format: String,
      default: 'https://andromeda.metis.io/?owner=1088',
      env: 'METIS_URL',
      arg: 'metis',
    },
    milkomeda: {
      doc: 'Milkomedia RPC url',
      format: String,
      default: 'https://rpc-mainnet-cardano-evm.c1.milkomeda.com',
      env: 'MILKOMEDA_URL',
      arg: 'milkomeda',
    },
    moonbeam: {
      doc: 'Moonbeam RPC url',
      format: String,
      default: 'https://rpc.ankr.com/moonbeam?cache=1800',
      env: 'MOONBEAM_URL',
      arg: 'moonbeam',
    },
    moonriver: {
      doc: 'Moonriver RPC url',
      format: String,
      default: 'https://rpc.api.moonriver.moonbeam.network',
      env: 'MOONRIVER_URL',
      arg: 'moonriver',
    },
    okx: {
      doc: 'Okx RPC url',
      format: String,
      default: 'https://exchainrpc.okex.org',
      env: 'OKX_URL',
      arg: 'okx',
    },
    optimism: {
      doc: 'Optimism RPC url',
      format: String,
      default: 'https://mainnet.optimism.io',
      env: 'OPTIMISM_URL',
      arg: 'optimism',
    },
    polygon: {
      doc: 'Polygon RPC url',
      format: String,
      default: 'https://polygon-bor.publicnode.com/?cache=1800',
      env: 'POLYGON_URL',
      arg: 'polygon',
    },
    klaytn: {
      doc: 'Klaytn RPC url',
      format: String,
      default: 'https://public-node-api.klaytnapi.com/v1/cypress',
      env: 'KLAYTN_RPC',
      arg: 'klaytn',
    },
    cardano: {
      doc: 'Cardano REST url',
      format: String,
      default: 'https://api.koios.rest/api/v0',
      env: 'CARDANO_RPC',
      arg: 'cardano',
    },
    cosmos: {
      doc: 'Cosmos REST url',
      format: String,
      default: 'https://api-cosmoshub-ia.cosmosia.notional.ventures',
      env: 'COSMOS_REST',
      arg: 'cosmos',
    },
    juno: {
      doc: 'Juno REST url',
      format: String,
      default: 'https://api-juno-ia.cosmosia.notional.ventures/',
      env: 'JUNO_REST',
      arg: 'juno',
    },
    kava: {
      doc: 'Kava REST url',
      format: String,
      default: 'https://kava-api.polkachu.com/',
      env: 'KAVA_REST',
      arg: 'kava',
    },
    osmosis: {
      doc: 'Osmosis REST url',
      format: String,
      default: 'https://api-osmosis-ia.cosmosia.notional.ventures/',
      env: 'OSMOSIS_REST',
      arg: 'osmosis',
    },
    secret: {
      doc: 'Secret REST url',
      format: String,
      default: 'https://secret-4.api.trivium.network:1317/',
      env: 'SECRET_REST',
      arg: 'secret',
    },
    thor: {
      doc: 'Thor REST url',
      format: String,
      default: 'https://thornode.ninerealms.com/',
      env: 'THOR_REST',
      arg: 'thor',
    },
    sifchain: {
      doc: 'sifchain REST url',
      format: String,
      default: 'https://api-sifchain-ia.cosmosia.notional.ventures/',
      env: 'SIFCHAIN_REST',
      arg: 'sifchain',
    },
    stargaze: {
      doc: 'stargaze REST url',
      format: String,
      default: 'https://api-stargaze-ia.cosmosia.notional.ventures/',
      env: 'STARGAZE_REST',
      arg: 'stargaze',
    },
    akash: {
      doc: 'Akash REST url',
      format: String,
      default: 'https://api-akash-ia.cosmosia.notional.ventures/',
      env: 'AKASH_REST',
      arg: 'akash',
    },
    kujira: {
      doc: 'Kujira REST url',
      format: String,
      default: 'https://api-kujira-ia.cosmosia.notional.ventures/',
      env: 'KUJIRA_REST',
      arg: 'kujira',
    },
    evmos: {
      doc: 'Evmos REST url',
      format: String,
      default: 'https://api.evmos.nodestake.top/',
      env: 'EVMOS_REST',
      arg: 'evmos',
    },
    agoric: {
      doc: 'Agoric REST url',
      format: String,
      default: 'https://agoric-api.polkachu.com/',
      env: 'AGORIC_REST',
      arg: 'agoric',
    },
    crescent: {
      doc: 'Crescent REST url',
      format: String,
      default: 'https://api-crescent.pupmos.network/',
      env: 'CRESCENT_REST',
      arg: 'crescent',
    },
    'terra-2': {
      doc: 'Terra2 REST url',
      format: String,
      default: 'https://phoenix-lcd.terra.dev/',
      env: 'TERRA2_REST',
      arg: 'terra-2',
    },
    solana: {
      doc: 'Solana RPC',
      format: String,
      default: 'http://api.mainnet-beta.solana.com/',
      env: 'SOLANA_RPC',
      arg: 'solana',
    },
    tezos: {
      doc: 'Tezos RPC',
      format: String,
      default: 'https://mainnet.api.tez.ie',
      env: 'TEZOS_RPC',
      arg: 'tezos',
    },
  },
})
  .validate({ allowed: 'strict' })
  .getProperties();

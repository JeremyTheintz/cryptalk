import { ENetwork } from '@contexts/Web3Context/Web3Context.enum';
import { ITokensByNetwork } from '@contexts/Web3Context/Web3Context.type';

export const tokens: ITokensByNetwork[] = [
	{
		network: ENetwork.ethereum,
		tokens: [
			{
				symbol: 'BTC++',
				name: 'PieDAO BTC++',
				decimals: 18,
				address: '0x0327112423f3a68efdf1fcf402f6c5cb9f7c33fd',
				logoURI: 'https://tokens.1inch.io/0x0327112423f3a68efdf1fcf402f6c5cb9f7c33fd.png',
				tags: ['tokens', 'PEG:BTC']
			},
			{
				symbol: 'UMA',
				name: 'UMA Voting Token v1',
				decimals: 18,
				address: '0x04fa0d235c4abf4bcf4787af4cf447de572ef828',
				logoURI: 'https://tokens.1inch.io/0x04fa0d235c4abf4bcf4787af4cf447de572ef828.png',
				tags: ['tokens']
			},
			{
				symbol: 'MATH',
				name: 'MATH Token',
				address: '0x08d967bb0134f2d07f7cfb6e246680c53927dd30',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x08d967bb0134f2d07f7cfb6e246680c53927dd30.png',
				tags: ['tokens']
			},
			{
				symbol: 'STAKE',
				name: 'STAKE',
				address: '0x0ae055097c6d159879521c384f1d2123d1f195e6',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x0ae055097c6d159879521c384f1d2123d1f195e6.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'TRB',
				name: 'Tellor Tributes',
				address: '0x88df592f8eb5d7bd38bfef7deb0fbc02cf3778a0',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x0ba45a8b5d5575935b8158a88c631e9f9c95a2e5.png',
				tags: ['tokens']
			},
			{
				symbol: 'YFI',
				name: 'yearn.finance',
				decimals: 18,
				address: '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e',
				logoURI: 'https://tokens.1inch.io/0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e.png',
				tags: ['tokens']
			},
			{
				symbol: 'wNXM',
				name: 'Wrapped NXM',
				decimals: 18,
				address: '0x0d438f3b5175bebc262bf23753c1e53d03432bde',
				logoURI: 'https://tokens.1inch.io/0x0d438f3b5175bebc262bf23753c1e53d03432bde.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'BAT',
				name: 'Basic Attention Token',
				address: '0x0d8775f648430679a709e98d2b0cb6250d2887ef',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x0d8775f648430679a709e98d2b0cb6250d2887ef.png',
				tags: ['tokens']
			},
			{
				symbol: 'ABYSS',
				name: 'Abyss',
				decimals: 18,
				address: '0x0e8d6b471e332f140e7d9dbb99e5e3822f728da6',
				logoURI: 'https://tokens.1inch.io/0x0e8d6b471e332f140e7d9dbb99e5e3822f728da6.png',
				tags: ['tokens']
			},
			{
				symbol: 'MANA',
				name: 'Mana',
				address: '0x0f5d2fb29fb7d3cfee444a200298f468908cc942',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x0f5d2fb29fb7d3cfee444a200298f468908cc942.png',
				tags: ['tokens']
			},
			{
				symbol: 'XIO',
				name: 'XIO Network',
				address: '0x0f7f961648ae6db43c75663ac7e5414eb79b5704',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x0f7f961648ae6db43c75663ac7e5414eb79b5704.png',
				tags: ['tokens']
			},
			{
				symbol: 'NMR',
				name: 'Numeraire',
				address: '0x1776e1f26f98b1a5df9cd347953a26dd3cb46671',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x1776e1f26f98b1a5df9cd347953a26dd3cb46671.png',
				tags: ['tokens']
			},
			{
				symbol: 'EWTB',
				name: 'Energy Web Token Bridged',
				address: '0x178c820f862b14f316509ec36b13123da19a6054',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x178c820f862b14f316509ec36b13123da19a6054.png',
				tags: ['tokens']
			},
			{
				symbol: 'OWL',
				name: 'OWL Token',
				address: '0x1a5f9352af8af974bfc03399e3767df6370d82e4',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x1a5f9352af8af974bfc03399e3767df6370d82e4.png',
				tags: ['tokens']
			},
			{
				symbol: 'PAR_2',
				name: 'Parachute',
				address: '0x1beef31946fbbb40b877a72e4ae04a8d1a5cee06',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x1beef31946fbbb40b877a72e4ae04a8d1a5cee06.png',
				displayedSymbol: 'PAR',
				tags: ['tokens']
			},
			{
				symbol: 'RSV',
				name: 'Reserve',
				address: '0x196f4727526ea7fb1e17b2071b3d8eaa38486988',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x196f4727526ea7fb1e17b2071b3d8eaa38486988.png',
				tags: ['tokens']
			},
			{
				symbol: 'BNT',
				name: 'Bancor',
				address: '0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c.png',
				tags: ['tokens']
			},
			{
				symbol: 'REPv2',
				name: 'Reputation V2',
				decimals: 18,
				address: '0x221657776846890989a759ba2973e427dff5c9bb',
				logoURI: 'https://tokens.1inch.io/0x221657776846890989a759ba2973e427dff5c9bb.png',
				tags: ['tokens']
			},
			{
				symbol: 'WBTC',
				name: 'Wrapped BTC',
				address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
				decimals: 8,
				logoURI: 'https://tokens.1inch.io/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599.png',
				tags: ['tokens', 'PEG:BTC']
			},
			{
				symbol: 'AST',
				name: 'AirSwap',
				decimals: 4,
				address: '0x27054b13b1b798b345b591a4d22e6562d47ea75a',
				logoURI: 'https://tokens.1inch.io/0x27054b13b1b798b345b591a4d22e6562d47ea75a.png',
				tags: ['tokens']
			},
			{
				symbol: 'YFL',
				name: 'YFLink',
				address: '0x28cb7e841ee97947a86b06fa4090c8451f64c0be',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x28cb7e841ee97947a86b06fa4090c8451f64c0be.png',
				tags: ['tokens']
			},
			{
				symbol: 'XBP',
				name: 'BlitzPredict',
				address: '0x28dee01d53fed0edf5f6e310bf8ef9311513ae40',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x28dee01d53fed0edf5f6e310bf8ef9311513ae40.png',
				tags: ['tokens']
			},
			{
				symbol: 'HEX',
				name: 'HEX',
				address: '0x2b591e99afe9f32eaa6214f7b7629768c40eeb39',
				decimals: 8,
				logoURI: 'https://tokens.1inch.io/0x2b591e99afe9f32eaa6214f7b7629768c40eeb39.png',
				tags: ['tokens']
			},
			{
				symbol: 'CREAM',
				name: 'Cream',
				address: '0x2ba592f78db6436527729929aaf6c908497cb200',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x2ba592f78db6436527729929aaf6c908497cb200.png',
				tags: ['tokens']
			},
			{
				symbol: 'VIB',
				name: 'Viberate',
				address: '0x2c974b2d0ba1716e644c1fc59982a89ddd2ff724',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x2c974b2d0ba1716e644c1fc59982a89ddd2ff724.png',
				tags: ['tokens']
			},
			{
				symbol: 'DEC',
				name: 'Decentr',
				address: '0x30f271c9e86d2b7d00a6376cd96a1cfbd5f0b9b3',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x30f271c9e86d2b7d00a6376cd96a1cfbd5f0b9b3.png',
				tags: ['tokens']
			},
			{
				symbol: 'VEE',
				name: 'BLOCKv',
				address: '0x340d2bde5eb28c1eed91b2f790723e3b160613b7',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x340d2bde5eb28c1eed91b2f790723e3b160613b7.png',
				tags: ['tokens']
			},
			{
				symbol: 'PERX',
				name: 'PeerEx Network',
				address: '0x3c6ff50c9ec362efa359317009428d52115fe643',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x3c6ff50c9ec362efa359317009428d52115fe643.png',
				tags: ['tokens']
			},
			{
				symbol: 'REN',
				name: 'Republic',
				address: '0x408e41876cccdc0f92210600ef50372656052a38',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x408e41876cccdc0f92210600ef50372656052a38.png',
				tags: ['tokens']
			},
			{
				symbol: 'XOR',
				name: 'Sora Token',
				address: '0x40fd72257597aa14c7231a7b1aaa29fce868f677',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x40fd72257597aa14c7231a7b1aaa29fce868f677.png',
				tags: ['tokens']
			},
			{
				symbol: 'FUN',
				name: 'FunFair',
				address: '0x419d0d8bdd9af5e606ae2232ed285aff190e711b',
				decimals: 8,
				logoURI: 'https://tokens.1inch.io/0x419d0d8bdd9af5e606ae2232ed285aff190e711b.png',
				tags: ['tokens']
			},
			{
				symbol: 'CVC',
				name: 'Civic',
				address: '0x41e5560054824ea6b0732e656e3ad64e20e94e45',
				decimals: 8,
				logoURI: 'https://tokens.1inch.io/0x41e5560054824ea6b0732e656e3ad64e20e94e45.png',
				tags: ['tokens']
			},
			{
				symbol: 'CAP',
				name: 'Cap',
				address: '0x43044f861ec040db59a7e324c40507addb673142',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x43044f861ec040db59a7e324c40507addb673142.png',
				tags: ['tokens']
			},
			{
				symbol: 'VIDT',
				name: 'VIDT Datalink',
				address: '0xfef4185594457050cc9c23980d301908fe057bb1',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0xfef4185594457050cc9c23980d301908fe057bb1.png',
				tags: ['tokens']
			},
			{
				symbol: 'FOAM',
				name: 'FOAM Token',
				address: '0x4946fcea7c692606e8908002e55a582af44ac121',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x4946fcea7c692606e8908002e55a582af44ac121.png',
				tags: ['tokens']
			},
			{
				symbol: 'QNT',
				name: 'Quant',
				address: '0x4a220e6096b25eadb88358cb44068a3248254675',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x4a220e6096b25eadb88358cb44068a3248254675.png',
				tags: ['tokens']
			},
			{
				symbol: 'aTUSDv1',
				name: 'Aave Interest bearing TUSD',
				decimals: 18,
				address: '0x4da9b813057d04baef4e5800e36083717b4a0341',
				logoURI: 'https://tokens.1inch.io/0x4da9b813057d04baef4e5800e36083717b4a0341.png',
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'MCB',
				name: 'MCDEX Token',
				address: '0x4e352cf164e64adcbad318c3a1e222e9eba4ce42',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x4e352cf164e64adcbad318c3a1e222e9eba4ce42.png',
				tags: ['tokens']
			},
			{
				symbol: 'BUSD',
				name: 'Binance USD',
				decimals: 18,
				address: '0x4fabb145d64652a948d72533023f6e7a623c7c53',
				logoURI: 'https://tokens.1inch.io/0x4fabb145d64652a948d72533023f6e7a623c7c53.png',
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'LINK',
				name: 'Chain Link',
				address: '0x514910771af9ca656af840dff83e8264ecf986ca',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x514910771af9ca656af840dff83e8264ecf986ca.png',
				tags: ['tokens']
			},
			{
				symbol: 'GEN',
				name: 'DAOStack',
				address: '0x543ff227f64aa17ea132bf9886cab5db55dcaddf',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x543ff227f64aa17ea132bf9886cab5db55dcaddf.png',
				tags: ['tokens']
			},
			{
				symbol: 'BZRX',
				name: 'bZx Protocol Token',
				decimals: 18,
				address: '0x56d811088235f11c8920698a204a5010a788f4b3',
				logoURI: 'https://tokens.1inch.io/0x56d811088235f11c8920698a204a5010a788f4b3.png',
				tags: ['tokens']
			},
			{
				symbol: 'BLZ',
				name: 'Bluzelle',
				address: '0x5732046a883704404f284ce41ffadd5b007fd668',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x5732046a883704404f284ce41ffadd5b007fd668.png',
				tags: ['tokens']
			},
			{
				symbol: 'TRUST',
				name: 'TRUST DAO',
				address: '0x57700244b20f84799a31c6c96dadff373ca9d6c5',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x57700244b20f84799a31c6c96dadff373ca9d6c5.png',
				tags: ['tokens']
			},
			{
				symbol: 'LPT',
				name: 'Livepeer Token',
				decimals: 18,
				address: '0x58b6a8a3302369daec383334672404ee733ab239',
				logoURI: 'https://tokens.1inch.io/0x58b6a8a3302369daec383334672404ee733ab239.png',
				tags: ['tokens']
			},
			{
				symbol: 'POWR',
				name: 'Power Ledger',
				address: '0x595832f8fc6bf59c85c527fec3740a1b7a361269',
				decimals: 6,
				logoURI: 'https://tokens.1inch.io/0x595832f8fc6bf59c85c527fec3740a1b7a361269.png',
				tags: ['tokens']
			},
			{
				symbol: 'DTH',
				name: 'Dether',
				address: '0x5adc961d6ac3f7062d2ea45fefb8d8167d44b190',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x5adc961d6ac3f7062d2ea45fefb8d8167d44b190.png',
				tags: ['tokens']
			},
			{
				symbol: 'COT_2',
				name: 'CoTrader',
				address: '0x5c872500c00565505f3624ab435c222e558e9ff8',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x5c872500c00565505f3624ab435c222e558e9ff8.png',
				displayedSymbol: 'COT',
				tags: ['tokens']
			},
			{
				symbol: 'DEV',
				name: 'Dev',
				address: '0x5caf454ba92e6f2c929df14667ee360ed9fd5b26',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x5caf454ba92e6f2c929df14667ee360ed9fd5b26.png',
				tags: ['tokens']
			},
			{
				symbol: 'cDAI',
				name: 'Compound Dai',
				decimals: 8,
				address: '0x5d3a536e4d6dbd6114cc1ead35777bab948e3643',
				logoURI: 'https://tokens.1inch.io/0x5d3a536e4d6dbd6114cc1ead35777bab948e3643.png',
				tags: ['savings']
			},
			{
				symbol: 'MYB',
				name: 'MyBit',
				address: '0x5d60d8d7ef6d37e16ebabc324de3be57f135e0bc',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x5d60d8d7ef6d37e16ebabc324de3be57f135e0bc.png',
				tags: ['tokens']
			},
			{
				symbol: 'PIE',
				name: 'DeFiPIE Token',
				decimals: 18,
				address: '0x607c794cda77efb21f8848b7910ecf27451ae842',
				logoURI: 'https://tokens.1inch.io/0x607c794cda77efb21f8848b7910ecf27451ae842.png',
				tags: ['tokens']
			},
			{
				symbol: 'RLC',
				name: 'iExec RLC',
				address: '0x607f4c5bb672230e8672085532f7e901544a7375',
				decimals: 9,
				logoURI: 'https://tokens.1inch.io/0x607f4c5bb672230e8672085532f7e901544a7375.png',
				tags: ['tokens']
			},
			{
				symbol: 'aSUSDv1',
				name: 'Aave Interest bearing SUSD',
				decimals: 18,
				address: '0x625ae63000f46200499120b906716420bd059240',
				logoURI: 'https://tokens.1inch.io/0x625ae63000f46200499120b906716420bd059240.png',
				tags: ['savings']
			},
			{
				symbol: 'MFG',
				name: 'Smart MFG',
				address: '0x6710c63432a2de02954fc0f851db07146a6c0312',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x6710c63432a2de02954fc0f851db07146a6c0312.png',
				tags: ['tokens']
			},
			{
				symbol: 'GNO',
				name: 'Gnosis',
				address: '0x6810e776880c02933d47db1b9fc05908e5386b96',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x6810e776880c02933d47db1b9fc05908e5386b96.png',
				tags: ['tokens']
			},
			{
				symbol: 'SRN',
				name: 'Sirin Labs',
				address: '0x68d57c9a1c35f63e2c83ee8e49a64e9d70528d25',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x68d57c9a1c35f63e2c83ee8e49a64e9d70528d25.png',
				tags: ['tokens']
			},
			{
				symbol: 'VLT',
				name: 'Bankroll Vault',
				address: '0x6b785a0322126826d8226d77e173d75dafb84d11',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x6b785a0322126826d8226d77e173d75dafb84d11.png',
				tags: ['tokens']
			},
			{
				symbol: 'GEEQ',
				name: 'Geeq',
				address: '0x6b9f031d718dded0d681c20cb754f97b3bb81b78',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x6b9f031d718dded0d681c20cb754f97b3bb81b78.png',
				tags: ['tokens']
			},
			{
				symbol: 'HOT',
				name: 'HoloToken',
				address: '0x6c6ee5e31d828de241282b9606c8e98ea48526e2',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x6c6ee5e31d828de241282b9606c8e98ea48526e2.png',
				tags: ['tokens']
			},
			{
				symbol: 'aUSDTv1',
				name: 'Aave Interest bearing USDT',
				decimals: 6,
				address: '0x71fc860f7d3a592a4a98740e39db31d25db65ae8',
				logoURI: 'https://tokens.1inch.io/0x71fc860f7d3a592a4a98740e39db31d25db65ae8.png',
				tags: ['savings', 'PEG:USD']
			},
			{
				symbol: 'SNT',
				name: 'Status',
				address: '0x744d70fdbe2ba4cf95131626614a1763df805b9e',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x744d70fdbe2ba4cf95131626614a1763df805b9e.png',
				tags: ['tokens']
			},
			{
				symbol: 'MRPH',
				name: 'Morpheus Network',
				address: '0x7b0c06043468469967dba22d1af33d77d44056c8',
				decimals: 4,
				logoURI: 'https://tokens.1inch.io/0x7b0c06043468469967dba22d1af33d77d44056c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'buidl_1',
				name: 'dfohub',
				decimals: 18,
				address: '0x7b123f53421b1bf8533339bfbdc7c98aa94163db',
				logoURI: 'https://tokens.1inch.io/0x7b123f53421b1bf8533339bfbdc7c98aa94163db.png',
				tags: ['tokens']
			},
			{
				symbol: 'SAN',
				name: 'Santiment',
				address: '0x7c5a0ce9267ed19b22f8cae653f198e3e8daf098',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x7c5a0ce9267ed19b22f8cae653f198e3e8daf098.png',
				tags: ['tokens']
			},
			{
				symbol: 'XRT',
				name: 'Robonomics',
				address: '0x7de91b204c1c737bcee6f000aaa6569cf7061cb7',
				decimals: 9,
				logoURI: 'https://tokens.1inch.io/0x7de91b204c1c737bcee6f000aaa6569cf7061cb7.png',
				tags: ['tokens']
			},
			{
				symbol: 'LEND',
				name: 'EthLend',
				address: '0x80fb784b7ed66730e8b1dbd9820afd29931aab03',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x80fb784b7ed66730e8b1dbd9820afd29931aab03.png',
				tags: ['tokens']
			},
			{
				symbol: 'MDT_1',
				name: 'Measurable Data Token',
				address: '0x814e0908b12a99fecf5bc101bb5d0b8b5cdf7d26',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x814e0908b12a99fecf5bc101bb5d0b8b5cdf7d26.png',
				tags: ['tokens']
			},
			{
				symbol: 'OGN',
				name: 'Origin Protocol',
				address: '0x8207c1ffc5b6804f6024322ccf34f29c3541ae26',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x8207c1ffc5b6804f6024322ccf34f29c3541ae26.png',
				tags: ['tokens']
			},
			{
				symbol: 'ATIS',
				name: 'ATIS Token',
				address: '0x821144518dfe9e7b44fcf4d0824e15e8390d4637',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x821144518dfe9e7b44fcf4d0824e15e8390d4637.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'UBT',
				name: 'UniBright',
				decimals: 8,
				address: '0x8400d94a5cb0fa0d041a3788e395285d61c9ee5e',
				logoURI: 'https://tokens.1inch.io/0x8400d94a5cb0fa0d041a3788e395285d61c9ee5e.png',
				tags: ['tokens']
			},
			{
				symbol: 'DIA',
				name: 'DIAToken',
				decimals: 18,
				address: '0x84ca8bc7997272c7cfb4d0cd3d55cd942b3c9419',
				logoURI: 'https://tokens.1inch.io/0x84ca8bc7997272c7cfb4d0cd3d55cd942b3c9419.png',
				tags: ['tokens']
			},
			{
				symbol: 'PNT',
				name: 'pNetwork Token',
				address: '0x89ab32156e46f46d02ade3fecbe5fc4243b9aaed',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x89ab32156e46f46d02ade3fecbe5fc4243b9aaed.png',
				tags: ['tokens']
			},
			{
				symbol: 'AKRO',
				name: 'Akropolis',
				address: '0x8ab7404063ec4dbcfd4598215992dc3f8ec853d7',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x8ab7404063ec4dbcfd4598215992dc3f8ec853d7.png',
				tags: ['tokens']
			},
			{
				symbol: 'SXP',
				name: 'Swipe',
				address: '0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9.png',
				tags: ['tokens']
			},
			{
				symbol: 'USDP',
				name: 'Pax Dollar',
				address: '0x8e870d67f660d95d5be530380d0ec0bd388289e1',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x8e870d67f660d95d5be530380d0ec0bd388289e1_1.png',
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'AGI',
				name: 'SingularityNET Token',
				address: '0x8eb24319393716668d768dcec29356ae9cffe285',
				decimals: 8,
				logoURI: 'https://tokens.1inch.io/0x8eb24319393716668d768dcec29356ae9cffe285.png',
				tags: ['tokens']
			},
			{
				symbol: 'REQ',
				name: 'Request',
				address: '0x8f8221afbb33998d8584a2b05749ba73c37a938a',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x8f8221afbb33998d8584a2b05749ba73c37a938a.png',
				tags: ['tokens']
			},
			{
				symbol: 'ORN',
				name: 'Orion Protocol',
				address: '0x0258f474786ddfd37abce6df6bbb1dd5dfc4434a',
				decimals: 8,
				logoURI: 'https://tokens.1inch.io/0x0258f474786ddfd37abce6df6bbb1dd5dfc4434a.png',
				tags: ['tokens']
			},
			{
				symbol: 'PNK',
				name: 'Kleros',
				address: '0x93ed3fbe21207ec2e8f2d3c3de6e058cb73bc04d',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x93ed3fbe21207ec2e8f2d3c3de6e058cb73bc04d.png',
				tags: ['tokens']
			},
			{
				symbol: 'LOCK',
				name: 'Meridian Network',
				address: '0x95172ccbe8344fecd73d0a30f54123652981bd6f',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x95172ccbe8344fecd73d0a30f54123652981bd6f.png',
				tags: ['tokens']
			},
			{
				symbol: 'ANTv1',
				name: 'Aragon Network Token',
				address: '0x960b236a07cf122663c4303350609a66a7b288c0',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x960b236a07cf122663c4303350609a66a7b288c0.png',
				tags: ['tokens']
			},
			{
				symbol: 'OCEAN',
				name: 'OceanToken',
				address: '0x967da4048cd07ab37855c090aaf366e4ce1b9f48',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x967da4048cd07ab37855c090aaf366e4ce1b9f48.png',
				tags: ['tokens']
			},
			{
				symbol: 'STRONG',
				name: 'Strong',
				address: '0x990f341946a3fdb507ae7e52d17851b87168017c',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x990f341946a3fdb507ae7e52d17851b87168017c.png',
				tags: ['tokens']
			},
			{
				symbol: 'POLY',
				name: 'Polymath',
				address: '0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec.png',
				tags: ['tokens']
			},
			{
				symbol: 'aUSDCv1',
				name: 'Aave Interest bearing USDC',
				decimals: 6,
				address: '0x9ba00d6856a4edf4665bca2c2309936572473b7e',
				logoURI: 'https://tokens.1inch.io/0x9ba00d6856a4edf4665bca2c2309936572473b7e.png',
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'DZAR',
				name: 'Digital Rand',
				decimals: 6,
				address: '0x9cb2f26a23b8d89973f08c957c4d7cdf75cd341c',
				logoURI: 'https://tokens.1inch.io/0x9cb2f26a23b8d89973f08c957c4d7cdf75cd341c.png',
				tags: ['tokens']
			},
			{
				symbol: 'MKR',
				name: 'Maker',
				address: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2.png',
				tags: ['tokens']
			},
			{
				symbol: 'USDC',
				name: 'USD Coin',
				address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
				decimals: 6,
				logoURI: 'https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png',
				eip2612: true,
				domainVersion: '2',
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'YFII',
				name: 'YFII.finance',
				address: '0xa1d0e215a23d7030842fc67ce582a6afa3ccab83',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0xa1d0e215a23d7030842fc67ce582a6afa3ccab83.png',
				tags: ['tokens']
			},
			{
				symbol: 'DXD',
				name: 'DXdao',
				address: '0xa1d65e8fb6e87b60feccbc582f7f97804b725521',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0xa1d65e8fb6e87b60feccbc582f7f97804b725521.png',
				tags: ['tokens']
			},
			{
				symbol: 'MTA',
				name: 'Meta',
				decimals: 18,
				address: '0xa3bed4e1c75d00fa6f4e5e6922db7261b5e9acd2',
				logoURI: 'https://tokens.1inch.io/0xa3bed4e1c75d00fa6f4e5e6922db7261b5e9acd2.png',
				tags: ['tokens']
			},
			{
				symbol: 'EQMT',
				name: 'EQUUSMiningToken',
				address: '0xa462d0e6bb788c7807b1b1c96992ce1f7069e195',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0xa462d0e6bb788c7807b1b1c96992ce1f7069e195.png',
				tags: ['tokens']
			},
			{
				symbol: 'USDS',
				name: 'StableUSD',
				address: '0xa4bdb11dc0a2bec88d24a3aa1e6bb17201112ebe',
				decimals: 6,
				logoURI: 'https://tokens.1inch.io/0xa4bdb11dc0a2bec88d24a3aa1e6bb17201112ebe.png',
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'aLINKv1',
				name: 'Aave Interest bearing LINK',
				decimals: 18,
				address: '0xa64bd6c70cb9051f6a9ba1f163fdc07e0dfb5f84',
				logoURI: 'https://tokens.1inch.io/0xa64bd6c70cb9051f6a9ba1f163fdc07e0dfb5f84.png',
				tags: ['savings']
			},
			{
				symbol: 'AGRI',
				name: 'AgriChain',
				address: '0xa704fce7b309ec09df16e2f5ab8caf6fe8a4baa9',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0xa704fce7b309ec09df16e2f5ab8caf6fe8a4baa9.png',
				tags: ['tokens']
			},
			{
				symbol: 'CEL',
				name: 'Celsius',
				address: '0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d',
				decimals: 4,
				logoURI: 'https://tokens.1inch.io/0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d.png',
				tags: ['tokens']
			},
			{
				symbol: 'TKN',
				name: 'Monolith',
				address: '0xaaaf91d9b90df800df4f55c205fd6989c977e73a',
				decimals: 8,
				logoURI: 'https://tokens.1inch.io/0xaaaf91d9b90df800df4f55c205fd6989c977e73a.png',
				tags: ['tokens']
			},
			{
				symbol: 'CEEK',
				name: 'CEEK VR',
				address: '0xb056c38f6b7dc4064367403e26424cd2c60655e1',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0xb056c38f6b7dc4064367403e26424cd2c60655e1.png',
				tags: ['tokens']
			},
			{
				symbol: 'XCHF',
				name: 'CryptoFranc',
				address: '0xb4272071ecadd69d933adcd19ca99fe80664fc08',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0xb4272071ecadd69d933adcd19ca99fe80664fc08.png',
				tags: ['tokens']
			},
			{
				symbol: 'PERL',
				name: 'Perlin',
				address: '0xeca82185adce47f39c684352b0439f030f860318',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0xeca82185adce47f39c684352b0439f030f860318.png',
				tags: ['tokens']
			},
			{
				symbol: 'REL',
				name: 'Relevant',
				address: '0xb6c4267c4877bb0d6b1685cfd85b0fbe82f105ec',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0xb6c4267c4877bb0d6b1685cfd85b0fbe82f105ec.png',
				tags: ['tokens']
			},
			{
				symbol: 'BAL',
				name: 'Balancer',
				decimals: 18,
				address: '0xba100000625a3754423978a60c9317c58a424e3d',
				logoURI: 'https://tokens.1inch.io/0xba100000625a3754423978a60c9317c58a424e3d.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'BAND',
				name: 'Band Protocol',
				address: '0xba11d00c5f74255f56a5e366f4f77f5a186d7f55',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0xba11d00c5f74255f56a5e366f4f77f5a186d7f55.png',
				tags: ['tokens']
			},
			{
				symbol: 'LRC',
				name: 'Loopring',
				address: '0xbbbbca6a901c926f240b89eacb641d8aec7aeafd',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0xbbbbca6a901c926f240b89eacb641d8aec7aeafd.png',
				tags: ['tokens']
			},
			{
				symbol: 'XNK',
				name: 'Ink Protocol',
				address: '0xbc86727e770de68b1060c91f6bb6945c73e10388',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0xbc86727e770de68b1060c91f6bb6945c73e10388.png',
				tags: ['tokens']
			},
			{
				symbol: 'eMTRG',
				name: 'Meter Governance mapped by Meter.io',
				address: '0xbd2949f67dcdc549c6ebe98696449fa79d988a9f',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0xbd2949f67dcdc549c6ebe98696449fa79d988a9f.png',
				tags: ['tokens']
			},
			{
				symbol: 'STMX',
				name: 'Kyber StormX Token',
				address: '0xbe9375c6a420d2eeb258962efb95551a5b722803',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0xbe9375c6a420d2eeb258962efb95551a5b722803.png',
				tags: ['tokens']
			},
			{
				symbol: 'ELF',
				name: 'Aelf',
				address: '0xbf2179859fc6d5bee9bf9158632dc51678a4100e',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0xbf2179859fc6d5bee9bf9158632dc51678a4100e.png',
				tags: ['tokens']
			},
			{
				symbol: 'COMP',
				name: 'Compound',
				decimals: 18,
				address: '0xc00e94cb662c3520282e6f5717214004a7f26888',
				logoURI: 'https://tokens.1inch.io/0xc00e94cb662c3520282e6f5717214004a7f26888.png',
				tags: ['tokens']
			},
			{
				symbol: 'SNX',
				name: 'Synthetix Network Token',
				decimals: 18,
				address: '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f',
				logoURI: 'https://tokens.1inch.io/0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f.png',
				tags: ['tokens']
			},
			{
				symbol: 'ALEPH',
				name: 'aleph.im v2',
				address: '0x27702a26126e0b3702af63ee09ac4d1a084ef628',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0x27702a26126e0b3702af63ee09ac4d1a084ef628.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'WETH',
				name: 'Wrapped Ether',
				address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png',
				wrappedNative: true,
				tags: ['tokens', 'PEG:ETH']
			},
			{
				symbol: 'cWBTC',
				name: 'Compound Wrapped BTC',
				decimals: 8,
				address: '0xc11b1268c1a384e55c48c2391d8d480264a3a7f4',
				logoURI: 'https://tokens.1inch.io/0xc11b1268c1a384e55c48c2391d8d480264a3a7f4.png',
				tags: ['tokens', 'PEG:BTC']
			},
			{
				symbol: 'AUC',
				name: 'Auctus',
				address: '0xc12d099be31567add4e4e4d0d45691c3f58f5663',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0xc12d099be31567add4e4e4d0d45691c3f58f5663.png',
				tags: ['tokens']
			},
			{
				symbol: 'EQUAD',
				name: 'Quadrant Protocol',
				address: '0xc28e931814725bbeb9e670676fabbcb694fe7df2',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0xc28e931814725bbeb9e670676fabbcb694fe7df2.png',
				tags: ['tokens']
			},
			{
				symbol: 'TRND',
				name: 'Trendering',
				address: '0xc3dd23a0a854b4f9ae80670f528094e9eb607ccb',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0xc3dd23a0a854b4f9ae80670f528094e9eb607ccb.png',
				tags: ['tokens']
			},
			{
				symbol: 'SWAP',
				name: 'TrustSwap Token',
				address: '0xcc4304a31d09258b0029ea7fe63d032f52e44efe',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0xcc4304a31d09258b0029ea7fe63d032f52e44efe.png',
				tags: ['tokens']
			},
			{
				symbol: 'NEC',
				name: 'Ethfinex Nectar Token',
				address: '0xcc80c051057b774cd75067dc48f8987c4eb97a5e',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0xcc80c051057b774cd75067dc48f8987c4eb97a5e.png',
				tags: ['tokens']
			},
			{
				symbol: 'ANJ',
				name: 'Aragon Network Juror',
				address: '0xcd62b1c403fa761baadfc74c525ce2b51780b184',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0xcd62b1c403fa761baadfc74c525ce2b51780b184.png',
				tags: ['tokens']
			},
			{
				symbol: 'MCX',
				name: 'MachiX Token',
				address: '0xd15ecdcf5ea68e3995b2d0527a0ae0a3258302f8',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0xd15ecdcf5ea68e3995b2d0527a0ae0a3258302f8.png',
				tags: ['tokens']
			},
			{
				symbol: 'OMG',
				name: 'OmiseGO',
				address: '0xd26114cd6ee289accf82350c8d8487fedb8a0c07',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0xd26114cd6ee289accf82350c8d8487fedb8a0c07.png',
				tags: ['tokens']
			},
			{
				symbol: 'AMPL',
				name: 'Ampleforth',
				address: '0xd46ba6d942050d489dbd938a2c909a5d5039a161',
				decimals: 9,
				logoURI: 'https://tokens.1inch.io/0xd46ba6d942050d489dbd938a2c909a5d5039a161.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'CND',
				name: 'Cindicator',
				address: '0xd4c435f5b09f855c3317c8524cb1f586e42795fa',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0xd4c435f5b09f855c3317c8524cb1f586e42795fa.png',
				tags: ['tokens']
			},
			{
				symbol: 'FTX',
				name: 'FintruX',
				address: '0xd559f20296ff4895da39b5bd9add54b442596a61',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0xd559f20296ff4895da39b5bd9add54b442596a61.png',
				tags: ['tokens']
			},
			{
				symbol: 'BUIDL_2',
				name: 'DFOHub',
				address: '0xd6f0bb2a45110f819e908a915237d652ac7c5aa8',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0xd6f0bb2a45110f819e908a915237d652ac7c5aa8.png',
				tags: ['tokens']
			},
			{
				symbol: 'PLU',
				name: 'Pluton',
				address: '0xd8912c10681d8b21fd3742244f44658dba12264e',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0xd8912c10681d8b21fd3742244f44658dba12264e.png',
				tags: ['tokens']
			},
			{
				symbol: 'USDT',
				name: 'Tether USD',
				address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
				decimals: 6,
				logoURI: 'https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png',
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'EURS',
				name: 'STASIS EURS',
				address: '0xdb25f211ab05b1c97d595516f45794528a807ad8',
				decimals: 2,
				logoURI: 'https://tokens.1inch.io/0xdb25f211ab05b1c97d595516f45794528a807ad8.png',
				tags: ['tokens', 'PEG:EUR']
			},
			{
				symbol: 'KNCL',
				name: 'KyberNetwork Legacy',
				address: '0xdd974d5c2e2928dea5f71b9825b8b646686bd200',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0xdd974d5c2e2928dea5f71b9825b8b646686bd200.png',
				tags: ['tokens']
			},
			{
				symbol: 'MFT',
				name: 'Mainframe',
				address: '0xdf2c7238198ad8b389666574f2d8bc411a4b7428',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0xdf2c7238198ad8b389666574f2d8bc411a4b7428.png',
				tags: ['tokens']
			},
			{
				symbol: 'HUSD',
				name: 'HUSD',
				decimals: 8,
				address: '0xdf574c24545e5ffecb9a659c229253d4111d87e1',
				logoURI: 'https://tokens.1inch.io/0xdf574c24545e5ffecb9a659c229253d4111d87e1.png',
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'KARMA',
				name: 'Karma',
				address: '0xdfe691f37b6264a90ff507eb359c45d55037951c',
				decimals: 4,
				logoURI: 'https://tokens.1inch.io/0xdfe691f37b6264a90ff507eb359c45d55037951c.png',
				tags: ['tokens']
			},
			{
				symbol: 'RMPL',
				name: 'RMPL',
				address: '0xe17f017475a709de58e976081eb916081ff4c9d5',
				decimals: 9,
				logoURI: 'https://tokens.1inch.io/0xe17f017475a709de58e976081eb916081ff4c9d5.png',
				tags: ['tokens']
			},
			{
				symbol: 'PLR',
				name: 'Pillar',
				address: '0xe3818504c1b32bf1557b16c238b2e01fd3149c17',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0xe3818504c1b32bf1557b16c238b2e01fd3149c17.png',
				tags: ['tokens']
			},
			{
				symbol: 'ZRX',
				name: '0x Protocol',
				address: '0xe41d2489571d322189246dafa5ebde1f4699f498',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0xe41d2489571d322189246dafa5ebde1f4699f498.png',
				tags: ['tokens']
			},
			{
				symbol: '2KEY',
				name: '2key.network',
				address: '0xe48972fcd82a274411c01834e2f031d4377fa2c0',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0xe48972fcd82a274411c01834e2f031d4377fa2c0.png',
				tags: ['tokens']
			},
			{
				symbol: 'renBTC',
				name: 'renBTC',
				decimals: 8,
				address: '0xeb4c2781e4eba804ce9a9803c67d0893436bb27d',
				logoURI: 'https://tokens.1inch.io/0xeb4c2781e4eba804ce9a9803c67d0893436bb27d.png',
				eip2612: true,
				tags: ['tokens', 'PEG:BTC']
			},
			{
				symbol: 'MLN',
				name: 'Melon Token',
				address: '0xec67005c4e498ec7f55e092bd1d35cbc47c91892',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0xec67005c4e498ec7f55e092bd1d35cbc47c91892.png',
				tags: ['tokens']
			},
			{
				symbol: 'ASKO',
				name: 'Askobar Network',
				address: '0xeeee2a622330e6d2036691e983dee87330588603',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0xeeee2a622330e6d2036691e983dee87330588603.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'HEDG',
				name: 'Hedge Trade',
				address: '0xf1290473e210b2108a85237fbcd7b6eb42cc654f',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0xf1290473e210b2108a85237fbcd7b6eb42cc654f.png',
				tags: ['tokens']
			},
			{
				symbol: 'UNC',
				name: 'UniCrypt',
				address: '0xf29e46887ffae92f1ff87dfe39713875da541373',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0xf29e46887ffae92f1ff87dfe39713875da541373.png',
				tags: ['tokens']
			},
			{
				symbol: 'POWER',
				name: 'UniPower',
				address: '0xf2f9a7e93f845b3ce154efbeb64fb9346fcce509',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0xf2f9a7e93f845b3ce154efbeb64fb9346fcce509.png',
				tags: ['tokens']
			},
			{
				symbol: 'MTL',
				name: 'Metal',
				address: '0xf433089366899d83a9f26a773d59ec7ecf30355e',
				decimals: 8,
				logoURI: 'https://tokens.1inch.io/0xf433089366899d83a9f26a773d59ec7ecf30355e.png',
				tags: ['tokens']
			},
			{
				symbol: 'ENJ',
				name: 'Enjin Coin',
				address: '0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c.png',
				tags: ['tokens']
			},
			{
				symbol: 'cUSDT',
				name: 'Compound USDT',
				decimals: 8,
				address: '0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9',
				logoURI: 'https://tokens.1inch.io/0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9.png',
				tags: ['savings', 'PEG:USD']
			},
			{
				symbol: 'IND',
				name: 'Indorse',
				address: '0xf8e386eda857484f5a12e4b5daa9984e06e73705',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0xf8e386eda857484f5a12e4b5daa9984e06e73705.png',
				tags: ['tokens']
			},
			{
				symbol: 'XAMP',
				name: 'Antiample',
				decimals: 9,
				address: '0xf911a7ec46a2c6fa49193212fe4a2a9b95851c27',
				logoURI: 'https://tokens.1inch.io/0xf911a7ec46a2c6fa49193212fe4a2a9b95851c27.png',
				tags: ['tokens']
			},
			{
				symbol: 'RCN',
				name: 'Ripio',
				address: '0xf970b8e36e23f7fc3fd752eea86f8be8d83375a6',
				decimals: 18,
				logoURI: 'https://tokens.1inch.io/0xf970b8e36e23f7fc3fd752eea86f8be8d83375a6.png',
				tags: ['tokens']
			},
			{
				symbol: 'aDAIv1',
				name: 'Aave Interest bearing DAI',
				decimals: 18,
				address: '0xfc1e690f61efd961294b3e1ce3313fbd8aa4f85d',
				logoURI: 'https://tokens.1inch.io/0xfc1e690f61efd961294b3e1ce3313fbd8aa4f85d.png',
				tags: ['savings']
			},
			{
				symbol: 'TGBP',
				name: 'TrueGBP',
				decimals: 18,
				address: '0x00000000441378008ea67f4284a57932b1c000a5',
				logoURI: 'https://tokens.1inch.io/0x00000000441378008ea67f4284a57932b1c000a5.png',
				tags: ['tokens']
			},
			{
				symbol: 'ETH',
				name: 'Ethereum',
				decimals: 18,
				address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
				logoURI: 'https://tokens.1inch.io/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png',
				tags: ['native', 'PEG:ETH']
			},
			{
				symbol: 'CHAI',
				name: 'Chai Token',
				decimals: 18,
				address: '0x06af07097c9eeb7fd685c692751d5c66db49c215',
				logoURI: 'https://tokens.1inch.io/0x06af07097c9eeb7fd685c692751d5c66db49c215.png',
				tags: ['tokens']
			},
			{
				symbol: 'cSAI',
				name: 'Compound Sai',
				decimals: 8,
				address: '0xf5dce57282a584d2746faf1593d3121fcac444dc',
				logoURI: 'https://tokens.1inch.io/0xf5dce57282a584d2746faf1593d3121fcac444dc.png',
				tags: ['tokens']
			},
			{
				symbol: 'cETH',
				name: 'Compound ETH',
				decimals: 8,
				address: '0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5',
				logoURI: 'https://tokens.1inch.io/0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5.png',
				tags: ['savings', 'PEG:ETH']
			},
			{
				symbol: 'cUSDC',
				name: 'Compound USD Coin',
				decimals: 8,
				address: '0x39aa39c021dfbae8fac545936693ac917d5e7563',
				logoURI: 'https://tokens.1inch.io/0x39aa39c021dfbae8fac545936693ac917d5e7563.png',
				tags: ['savings', 'PEG:USD']
			},
			{
				symbol: 'HT',
				name: 'HuobiToken',
				decimals: 18,
				address: '0x6f259637dcd74c767781e37bc6133cd6a68aa161',
				logoURI: 'https://tokens.1inch.io/0x6f259637dcd74c767781e37bc6133cd6a68aa161.png',
				tags: ['tokens']
			},
			{
				symbol: 'MATIC',
				name: 'Matic Token',
				decimals: 18,
				address: '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0',
				logoURI: 'https://tokens.1inch.io/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png',
				tags: ['tokens']
			},
			{
				symbol: 'DAI',
				name: 'Dai Stablecoin',
				decimals: 18,
				address: '0x6b175474e89094c44da98b954eedeac495271d0f',
				logoURI: 'https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png',
				eip2612: true,
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'SAI',
				name: 'Sai Stablecoin',
				decimals: 18,
				address: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359',
				logoURI: 'https://tokens.1inch.io/0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359.png',
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'sUSD',
				name: 'Synth sUSD',
				synth: true,
				decimals: 18,
				address: '0x57ab1ec28d129707052df4df418d58a2d46d5f51',
				logoURI: 'https://tokens.1inch.io/0x57ab1ec28d129707052df4df418d58a2d46d5f51.png',
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'TUSD',
				name: 'TrueUSD',
				decimals: 18,
				address: '0x0000000000085d4780b73119b644ae5ecd22b376',
				logoURI: 'https://tokens.1inch.io/0x0000000000085d4780b73119b644ae5ecd22b376.png',
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'aETHv1',
				name: 'Aave Interest bearing ETH',
				decimals: 18,
				address: '0x3a3a65aab0dd2a17e3f1947ba16138cd37d08c04',
				logoURI: 'https://tokens.1inch.io/0x3a3a65aab0dd2a17e3f1947ba16138cd37d08c04.png',
				tags: ['tokens', 'PEG:ETH']
			},
			{
				symbol: 'aBATv1',
				name: 'Aave Interest bearing BAT',
				decimals: 18,
				address: '0xe1ba0fb44ccb0d11b80f92f4f8ed94ca3ff51d00',
				logoURI: 'https://tokens.1inch.io/0xe1ba0fb44ccb0d11b80f92f4f8ed94ca3ff51d00.png',
				tags: ['tokens']
			},
			{
				symbol: 'aKNCv1',
				name: 'Aave Interest bearing KNC',
				decimals: 18,
				address: '0x9d91be44c06d373a8a226e1f3b146956083803eb',
				logoURI: 'https://tokens.1inch.io/0x9d91be44c06d373a8a226e1f3b146956083803eb.png',
				tags: ['tokens']
			},
			{
				symbol: 'aLENDv1',
				name: 'Aave Interest bearing LEND',
				decimals: 18,
				address: '0x7d2d3688df45ce7c552e19c27e007673da9204b8',
				logoURI: 'https://tokens.1inch.io/0x7d2d3688df45ce7c552e19c27e007673da9204b8.png',
				tags: ['tokens']
			},
			{
				symbol: 'aMANAv1',
				name: 'Aave Interest bearing MANA',
				decimals: 18,
				address: '0x6fce4a401b6b80ace52baaefe4421bd188e76f6f',
				logoURI: 'https://tokens.1inch.io/0x6fce4a401b6b80ace52baaefe4421bd188e76f6f.png',
				tags: ['tokens']
			},
			{
				symbol: 'aMKRv1',
				name: 'Aave Interest bearing MKR',
				decimals: 18,
				address: '0x7deb5e830be29f91e298ba5ff1356bb7f8146998',
				logoURI: 'https://tokens.1inch.io/0x7deb5e830be29f91e298ba5ff1356bb7f8146998.png',
				tags: ['tokens']
			},
			{
				symbol: 'aREPv1',
				name: 'Aave Interest bearing REP',
				decimals: 18,
				address: '0x71010a9d003445ac60c4e6a7017c1e89a477b438',
				logoURI: 'https://tokens.1inch.io/0x71010a9d003445ac60c4e6a7017c1e89a477b438.png',
				tags: ['tokens']
			},
			{
				symbol: 'aSNXv1',
				name: 'Aave Interest bearing SNX',
				decimals: 18,
				address: '0x328c4c80bc7aca0834db37e6600a6c49e12da4de',
				logoURI: 'https://tokens.1inch.io/0x328c4c80bc7aca0834db37e6600a6c49e12da4de.png',
				tags: ['tokens']
			},
			{
				symbol: 'aWBTCv1',
				name: 'Aave Interest bearing WBTC',
				decimals: 8,
				address: '0xfc4b8ed459e00e5400be803a9bb3954234fd50e3',
				logoURI: 'https://tokens.1inch.io/0xfc4b8ed459e00e5400be803a9bb3954234fd50e3.png',
				tags: ['savings', 'PEG:BTC']
			},
			{
				symbol: 'aZRXv1',
				name: 'Aave Interest bearing ZRX',
				decimals: 18,
				address: '0x6fb0855c404e09c47c3fbca25f08d4e41f9f062f',
				logoURI: 'https://tokens.1inch.io/0x6fb0855c404e09c47c3fbca25f08d4e41f9f062f.png',
				tags: ['tokens']
			},
			{
				symbol: 'yDAIv2',
				name: 'iearn DAIv2',
				decimals: 18,
				address: '0x16de59092dae5ccf4a1e6439d611fd0653f0bd01',
				logoURI: 'https://tokens.1inch.io/0x16de59092dae5ccf4a1e6439d611fd0653f0bd01.png',
				tags: ['tokens']
			},
			{
				symbol: 'yDAIv3',
				name: 'iearn DAI v3',
				decimals: 18,
				address: '0xc2cb1040220768554cf699b0d863a3cd4324ce32',
				logoURI: 'https://tokens.1inch.io/0xc2cb1040220768554cf699b0d863a3cd4324ce32.png',
				tags: ['tokens']
			},
			{
				symbol: 'yBTC',
				name: 'iearn WBTC',
				decimals: 8,
				address: '0x04aa51bbcb46541455ccf1b8bef2ebc5d3787ec9',
				logoURI: 'https://tokens.1inch.io/0x04aa51bbcb46541455ccf1b8bef2ebc5d3787ec9.png',
				tags: ['tokens', 'PEG:BTC']
			},
			{
				symbol: 'yUSDTv2',
				name: 'iearn USDT v2',
				decimals: 6,
				address: '0x83f798e925bcd4017eb265844fddabb448f1707d',
				logoURI: 'https://tokens.1inch.io/0x83f798e925bcd4017eb265844fddabb448f1707d.png',
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'yUSDTv3',
				name: 'iearn USDT v3',
				decimals: 6,
				address: '0xe6354ed5bc4b393a5aad09f21c46e101e692d447',
				logoURI: 'https://tokens.1inch.io/0xe6354ed5bc4b393a5aad09f21c46e101e692d447.png',
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'yUSDCv2',
				name: 'iearn USDC v2',
				decimals: 6,
				address: '0xd6ad7a6750a7593e092a9b218d66c0a814a3436e',
				logoURI: 'https://tokens.1inch.io/0xd6ad7a6750a7593e092a9b218d66c0a814a3436e.png',
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'yUSDCv3',
				name: 'iearn USDC v3',
				decimals: 6,
				address: '0x26ea744e5b887e5205727f55dfbe8685e3b21951',
				logoURI: 'https://tokens.1inch.io/0x26ea744e5b887e5205727f55dfbe8685e3b21951.png',
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'BCDT',
				name: 'Blockchain Certified Data Token',
				decimals: 18,
				address: '0xacfa209fb73bf3dd5bbfb1101b9bc999c49062a5',
				logoURI: 'https://tokens.1inch.io/0xacfa209fb73bf3dd5bbfb1101b9bc999c49062a5.png',
				tags: ['tokens']
			},
			{
				symbol: 'LST',
				name: 'Lendroid Support Token',
				decimals: 18,
				address: '0x4de2573e27e648607b50e1cfff921a33e4a34405',
				logoURI: 'https://tokens.1inch.io/0x4de2573e27e648607b50e1cfff921a33e4a34405.png',
				tags: ['tokens']
			},
			{
				symbol: 'PAN',
				name: 'Panvala pan',
				decimals: 18,
				address: '0xd56dac73a4d6766464b38ec6d91eb45ce7457c44',
				logoURI: 'https://tokens.1inch.io/0xd56dac73a4d6766464b38ec6d91eb45ce7457c44.png',
				tags: ['tokens']
			},
			{
				symbol: 'GUSD',
				name: 'Gemini dollar',
				decimals: 2,
				address: '0x056fd409e1d7a124bd7017459dfea2f387b6d5cd',
				logoURI: 'https://tokens.1inch.io/0x056fd409e1d7a124bd7017459dfea2f387b6d5cd.png',
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'aBUSDv1',
				name: 'Aave Interest bearing Binance USD',
				decimals: 18,
				address: '0x6ee0f7bb50a54ab5253da0667b0dc2ee526c30a8',
				logoURI: 'https://tokens.1inch.io/0x6ee0f7bb50a54ab5253da0667b0dc2ee526c30a8.png',
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'XPR',
				name: 'Proton',
				decimals: 4,
				address: '0xd7efb00d12c2c13131fd319336fdf952525da2af',
				logoURI: 'https://tokens.1inch.io/0xd7efb00d12c2c13131fd319336fdf952525da2af.png',
				tags: ['tokens']
			},
			{
				symbol: 'KEEP',
				name: 'KEEP Token',
				decimals: 18,
				address: '0x85eee30c52b0b379b046fb0f85f4f3dc3009afec',
				logoURI: 'https://tokens.1inch.io/0x85eee30c52b0b379b046fb0f85f4f3dc3009afec.png',
				tags: ['tokens']
			},
			{
				symbol: 'renZEC',
				name: 'renZEC',
				decimals: 8,
				address: '0x1c5db575e2ff833e46a2e9864c22f4b22e0b37c2',
				logoURI: 'https://tokens.1inch.io/0x1c5db575e2ff833e46a2e9864c22f4b22e0b37c2.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'renBCH',
				name: 'renBCH',
				decimals: 8,
				address: '0x459086f2376525bdceba5bdda135e4e9d3fef5bf',
				logoURI: 'https://tokens.1inch.io/0x459086f2376525bdceba5bdda135e4e9d3fef5bf.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'HBTC',
				name: 'Huobi BTC',
				decimals: 18,
				address: '0x0316eb71485b0ab14103307bf65a021042c6d380',
				logoURI: 'https://tokens.1inch.io/0x0316eb71485b0ab14103307bf65a021042c6d380.png',
				tags: ['tokens', 'PEG:BTC']
			},
			{
				symbol: 'SHUF',
				name: 'Shuffle.Monster V3',
				decimals: 18,
				address: '0x3a9fff453d50d4ac52a6890647b823379ba36b9e',
				logoURI: 'https://tokens.1inch.io/0x3a9fff453d50d4ac52a6890647b823379ba36b9e.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'DONUT',
				name: 'DONUT',
				decimals: 18,
				address: '0xc0f9bd5fa5698b6505f643900ffa515ea5df54a9',
				logoURI: 'https://tokens.1inch.io/0xc0f9bd5fa5698b6505f643900ffa515ea5df54a9.png',
				tags: ['tokens']
			},
			{
				symbol: 'PAXG',
				name: 'Paxos Gold',
				decimals: 18,
				address: '0x45804880de22913dafe09f4980848ece6ecbaf78',
				logoURI: 'https://tokens.1inch.io/0x45804880de22913dafe09f4980848ece6ecbaf78.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: '0xMR',
				name: '0xMonero',
				decimals: 18,
				address: '0x035df12e0f3ac6671126525f1015e47d79dfeddf',
				logoURI: 'https://tokens.1inch.io/0x035df12e0f3ac6671126525f1015e47d79dfeddf.png',
				tags: ['tokens']
			},
			{
				symbol: 'STORJ',
				name: 'Storj',
				decimals: 8,
				address: '0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac',
				logoURI: 'https://tokens.1inch.io/0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac.png',
				tags: ['tokens']
			},
			{
				symbol: 'SALT',
				name: 'Salt',
				decimals: 8,
				address: '0x4156d3342d5c385a87d264f90653733592000581',
				logoURI: 'https://tokens.1inch.io/0x4156d3342d5c385a87d264f90653733592000581.png',
				tags: ['tokens']
			},
			{
				symbol: 'yCurve',
				name: 'Curve.fi iearn pool token',
				decimals: 18,
				address: '0xdf5e0e81dff6faf3a7e52ba697820c5e32d806a8',
				logoURI: 'https://tokens.1inch.io/0xdf5e0e81dff6faf3a7e52ba697820c5e32d806a8.png',
				tags: ['pools']
			},
			{
				symbol: 'RARI',
				name: 'Rarible',
				decimals: 18,
				address: '0xfca59cd816ab1ead66534d82bc21e7515ce441cf',
				logoURI: 'https://tokens.1inch.io/0xfca59cd816ab1ead66534d82bc21e7515ce441cf.png',
				tags: ['tokens']
			},
			{
				symbol: 'pBTC',
				name: 'pTokens BTC',
				decimals: 18,
				address: '0x5228a22e72ccc52d415ecfd199f99d0665e7733b',
				logoURI: 'https://tokens.1inch.io/0x5228a22e72ccc52d415ecfd199f99d0665e7733b.png',
				tags: ['tokens', 'PEG:BTC']
			},
			{
				symbol: 'SRM',
				name: 'Serum',
				decimals: 6,
				address: '0x476c5e26a75bd202a9683ffd34359c0cc15be0ff',
				logoURI: 'https://tokens.1inch.io/0x476c5e26a75bd202a9683ffd34359c0cc15be0ff.png',
				tags: ['tokens']
			},
			{
				symbol: 'NIOX',
				name: 'Autonio',
				decimals: 4,
				address: '0xc813ea5e3b48bebeedb796ab42a30c5599b01740',
				logoURI: 'https://tokens.1inch.io/0xc813ea5e3b48bebeedb796ab42a30c5599b01740.png',
				tags: ['tokens']
			},
			{
				symbol: 'STA',
				name: 'Statera',
				decimals: 18,
				address: '0xa7de087329bfcda5639247f96140f9dabe3deed1',
				logoURI: 'https://tokens.1inch.io/0xa7de087329bfcda5639247f96140f9dabe3deed1.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'FNT',
				name: 'Falcon',
				decimals: 6,
				address: '0xdc5864ede28bd4405aa04d93e05a0531797d9d59',
				logoURI: 'https://tokens.1inch.io/0xdc5864ede28bd4405aa04d93e05a0531797d9d59.png',
				tags: ['tokens']
			},
			{
				symbol: 'YAM',
				name: 'YAM',
				decimals: 18,
				address: '0x0aacfbec6a24756c20d41914f2caba817c0d8521',
				logoURI: 'https://tokens.1inch.io/0x0aacfbec6a24756c20d41914f2caba817c0d8521.png',
				eip2612: true,
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'ADX',
				name: 'AdEx Network',
				decimals: 18,
				address: '0xade00c28244d5ce17d72e40330b1c318cd12b7c3',
				logoURI: 'https://tokens.1inch.io/0xade00c28244d5ce17d72e40330b1c318cd12b7c3.png',
				tags: ['tokens']
			},
			{
				symbol: 'CRV',
				name: 'Curve DAO Token',
				decimals: 18,
				address: '0xd533a949740bb3306d119cc777fa900ba034cd52',
				logoURI: 'https://tokens.1inch.io/0xd533a949740bb3306d119cc777fa900ba034cd52.png',
				tags: ['tokens']
			},
			{
				symbol: 'RING',
				name: 'Darwinia Network Native Token',
				decimals: 18,
				address: '0x9469d013805bffb7d3debe5e7839237e535ec483',
				logoURI: 'https://tokens.1inch.io/0x9469d013805bffb7d3debe5e7839237e535ec483.png',
				tags: ['tokens']
			},
			{
				symbol: 'OMv1',
				name: 'OM Token',
				decimals: 18,
				address: '0x2baecdf43734f22fd5c152db08e3c27233f0c7d2',
				logoURI: 'https://tokens.1inch.io/0x2baecdf43734f22fd5c152db08e3c27233f0c7d2.png',
				tags: ['tokens']
			},
			{
				symbol: 'CTSI',
				name: 'Cartesi Token',
				decimals: 18,
				address: '0x491604c0fdf08347dd1fa4ee062a822a5dd06b5d',
				logoURI: 'https://tokens.1inch.io/0x491604c0fdf08347dd1fa4ee062a822a5dd06b5d.png',
				tags: ['tokens']
			},
			{
				symbol: 'LAYER',
				name: 'Unilayer',
				decimals: 18,
				address: '0x0ff6ffcfda92c53f615a4a75d982f399c989366b',
				logoURI: 'https://tokens.1inch.io/0x0ff6ffcfda92c53f615a4a75d982f399c989366b.png',
				tags: ['tokens']
			},
			{
				symbol: 'MEME',
				name: 'MEME',
				decimals: 8,
				address: '0xd5525d397898e5502075ea5e830d8914f6f0affe',
				logoURI: 'https://tokens.1inch.io/0xd5525d397898e5502075ea5e830d8914f6f0affe.png',
				tags: ['tokens']
			},
			{
				symbol: 'TRAC',
				name: 'Trace',
				decimals: 18,
				address: '0xaa7a9ca87d3694b5755f213b5d04094b8d0f0a6f',
				logoURI: 'https://tokens.1inch.io/0xaa7a9ca87d3694b5755f213b5d04094b8d0f0a6f.png',
				tags: ['tokens']
			},
			{
				symbol: 'JRT',
				name: 'Jarvis Reward Token',
				decimals: 18,
				address: '0x8a9c67fee641579deba04928c4bc45f66e26343a',
				logoURI: 'https://tokens.1inch.io/0x8a9c67fee641579deba04928c4bc45f66e26343a.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'YFV',
				name: 'YFValue',
				decimals: 18,
				address: '0x45f24baeef268bb6d63aee5129015d69702bcdfa',
				logoURI: 'https://tokens.1inch.io/0x45f24baeef268bb6d63aee5129015d69702bcdfa.png',
				tags: ['tokens']
			},
			{
				symbol: 'USDN',
				name: 'Neutrino',
				decimals: 18,
				address: '0x674c6ad92fd080e4004b2312b45f796a192d27a0',
				logoURI: 'https://tokens.1inch.io/0x674c6ad92fd080e4004b2312b45f796a192d27a0.png',
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'PRQ',
				name: 'Parsiq Token',
				decimals: 18,
				address: '0x362bc847a3a9637d3af6624eec853618a43ed7d2',
				logoURI: 'https://tokens.1inch.io/0x362bc847a3a9637d3af6624eec853618a43ed7d2.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'HAKKA',
				name: 'Hakka Finance',
				decimals: 18,
				address: '0x0e29e5abbb5fd88e28b2d355774e73bd47de3bcd',
				logoURI: 'https://tokens.1inch.io/0x0e29e5abbb5fd88e28b2d355774e73bd47de3bcd.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'CVP',
				name: 'Concentrated Voting Power',
				decimals: 18,
				address: '0x38e4adb44ef08f22f5b5b76a8f0c2d0dcbe7dca1',
				logoURI: 'https://tokens.1inch.io/0x38e4adb44ef08f22f5b5b76a8f0c2d0dcbe7dca1.png',
				tags: ['tokens']
			},
			{
				symbol: 'OPT',
				name: 'Open Predict Token',
				decimals: 18,
				address: '0x4fe5851c9af07df9e5ad8217afae1ea72737ebda',
				logoURI: 'https://tokens.1inch.io/0x4fe5851c9af07df9e5ad8217afae1ea72737ebda.png',
				tags: ['tokens']
			},
			{
				symbol: 'SUSHI',
				name: 'SushiToken',
				decimals: 18,
				address: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
				logoURI: 'https://tokens.1inch.io/0x6b3595068778dd592e39a122f4f5a5cf09c90fe2.png',
				tags: ['tokens']
			},
			{
				symbol: 'DSLA',
				name: 'DSLA',
				decimals: 18,
				address: '0x3affcca64c2a6f4e3b6bd9c64cd2c969efd1ecbe',
				logoURI: 'https://tokens.1inch.io/0x3affcca64c2a6f4e3b6bd9c64cd2c969efd1ecbe.png',
				tags: ['tokens']
			},
			{
				symbol: 'SWFL',
				name: 'Swapfolio',
				decimals: 18,
				address: '0xba21ef4c9f433ede00badefcc2754b8e74bd538a',
				logoURI: 'https://tokens.1inch.io/0xba21ef4c9f433ede00badefcc2754b8e74bd538a.png',
				tags: ['tokens']
			},
			{
				symbol: 'FSW',
				name: 'FalconSwap Token',
				decimals: 18,
				address: '0xfffffffff15abf397da76f1dcc1a1604f45126db',
				logoURI: 'https://tokens.1inch.io/0xfffffffff15abf397da76f1dcc1a1604f45126db.png',
				tags: ['tokens']
			},
			{
				symbol: 'SWRV',
				name: 'Swerve DAO Token',
				decimals: 18,
				address: '0xb8baa0e4287890a5f79863ab62b7f175cecbd433',
				logoURI: 'https://tokens.1inch.io/0xb8baa0e4287890a5f79863ab62b7f175cecbd433.png',
				tags: ['tokens']
			},
			{
				symbol: 'MXX',
				name: 'Multiplier',
				decimals: 8,
				address: '0x8a6f3bf52a26a21531514e23016eeae8ba7e7018',
				logoURI: 'https://tokens.1inch.io/0x8a6f3bf52a26a21531514e23016eeae8ba7e7018.png',
				tags: ['tokens']
			},
			{
				symbol: 'yUSD',
				name: 'yearn Curve.fi yDAI/yUSDC/yUSDT/yTUSD',
				decimals: 18,
				address: '0x5dbcf33d8c2e976c6b560249878e6f1491bca25c',
				logoURI: 'https://tokens.1inch.io/0x5dbcf33d8c2e976c6b560249878e6f1491bca25c.png',
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'STEP',
				name: '1Step.finance',
				decimals: 8,
				address: '0x50026ad58b338cf3eccc2b422deb8faa725f377f',
				logoURI: 'https://tokens.1inch.io/0x50026ad58b338cf3eccc2b422deb8faa725f377f.png',
				tags: ['tokens']
			},
			{
				symbol: 'PRDX',
				name: 'Predix Network',
				decimals: 18,
				address: '0x556148562d5ddeb72545d7ec4b3ec8edc8f55ba7',
				logoURI: 'https://tokens.1inch.io/0x556148562d5ddeb72545d7ec4b3ec8edc8f55ba7.png',
				tags: ['tokens']
			},
			{
				symbol: 'DPI',
				name: 'DefiPulse Index',
				decimals: 18,
				address: '0x1494ca1f11d487c2bbe4543e90080aeba4ba3c2b',
				logoURI: 'https://tokens.1inch.io/0x1494ca1f11d487c2bbe4543e90080aeba4ba3c2b.png',
				tags: ['tokens']
			},
			{
				symbol: 'GHST',
				name: 'Aavegotchi GHST Token',
				decimals: 18,
				address: '0x3f382dbd960e3a9bbceae22651e88158d2791550',
				logoURI: 'https://tokens.1inch.io/0x3f382dbd960e3a9bbceae22651e88158d2791550.png',
				tags: ['tokens']
			},
			{
				symbol: 'UNI',
				name: 'Uniswap',
				decimals: 18,
				address: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
				logoURI: 'https://tokens.1inch.io/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'PICKLE',
				name: 'PickleToken',
				decimals: 18,
				address: '0x429881672b9ae42b8eba0e26cd9c73711b891ca5',
				logoURI: 'https://tokens.1inch.io/0x429881672b9ae42b8eba0e26cd9c73711b891ca5.png',
				tags: ['tokens']
			},
			{
				symbol: 'FRONT',
				name: 'Frontier Token',
				decimals: 18,
				address: '0xf8c3527cc04340b208c854e985240c02f7b7793f',
				logoURI: 'https://tokens.1inch.io/0xf8c3527cc04340b208c854e985240c02f7b7793f.png',
				tags: ['tokens']
			},
			{
				symbol: 'DHT',
				name: 'dHedge DAO Token',
				decimals: 18,
				address: '0xca1207647ff814039530d7d35df0e1dd2e91fa84',
				logoURI: 'https://tokens.1inch.io/0xca1207647ff814039530d7d35df0e1dd2e91fa84.png',
				tags: ['tokens']
			},
			{
				symbol: 'FARM',
				name: 'FARM Reward Token',
				decimals: 18,
				address: '0xa0246c9032bc3a600820415ae600c6388619a14d',
				logoURI: 'https://tokens.1inch.io/0xa0246c9032bc3a600820415ae600c6388619a14d.png',
				tags: ['tokens']
			},
			{
				symbol: 'GOF',
				name: 'Golff.finance',
				decimals: 18,
				address: '0x488e0369f9bc5c40c002ea7c1fe4fd01a198801c',
				logoURI: 'https://tokens.1inch.io/0x488e0369f9bc5c40c002ea7c1fe4fd01a198801c.png',
				tags: ['tokens']
			},
			{
				symbol: 'OUSD',
				name: 'Origin Dollar',
				decimals: 18,
				address: '0x2a8e1e676ec238d8a992307b495b45b3feaa5e86',
				logoURI: 'https://tokens.1inch.io/0x2a8e1e676ec238d8a992307b495b45b3feaa5e86.png',
				isFoT: true,
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'AAVE',
				name: 'Aave Token',
				decimals: 18,
				address: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
				logoURI: 'https://tokens.1inch.io/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'DODO',
				name: 'DODO bird',
				decimals: 18,
				address: '0x43dfc4159d86f3a37a5a4b3d4580b888ad7d4ddd',
				logoURI: 'https://tokens.1inch.io/0x43dfc4159d86f3a37a5a4b3d4580b888ad7d4ddd.png',
				tags: ['tokens']
			},
			{
				symbol: 'SHAKE',
				name: 'SHAKE token by SpaceSwap v2 ',
				decimals: 18,
				address: '0x6006fc2a849fedaba8330ce36f5133de01f96189',
				logoURI: 'https://tokens.1inch.io/0x6006fc2a849fedaba8330ce36f5133de01f96189.png',
				tags: ['tokens']
			},
			{
				symbol: 'MILK2',
				name: 'MilkyWay Token by SpaceSwap v2',
				decimals: 18,
				address: '0x80c8c3dcfb854f9542567c8dac3f44d709ebc1de',
				logoURI: 'https://tokens.1inch.io/0x80c8c3dcfb854f9542567c8dac3f44d709ebc1de.png',
				tags: ['tokens']
			},
			{
				symbol: 'CORE',
				name: 'cVault.finance',
				decimals: 18,
				address: '0x62359ed7505efc61ff1d56fef82158ccaffa23d7',
				logoURI: 'https://tokens.1inch.io/0x62359ed7505efc61ff1d56fef82158ccaffa23d7.png',
				tags: ['tokens']
			},
			{
				symbol: 'PERP',
				name: 'Perpetual',
				decimals: 18,
				address: '0xbc396689893d065f41bc2c6ecbee5e0085233447',
				logoURI: 'https://tokens.1inch.io/0xbc396689893d065f41bc2c6ecbee5e0085233447.png',
				tags: ['tokens']
			},
			{
				symbol: 'USDK',
				name: 'USDK',
				decimals: 18,
				address: '0x1c48f86ae57291f7686349f12601910bd8d470bb',
				logoURI: 'https://tokens.1inch.io/0x1c48f86ae57291f7686349f12601910bd8d470bb.png',
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'SWAG',
				name: 'Swag Token',
				decimals: 18,
				address: '0x87edffde3e14c7a66c9b9724747a1c5696b742e6',
				logoURI: 'https://tokens.1inch.io/0x87edffde3e14c7a66c9b9724747a1c5696b742e6.png',
				tags: ['tokens']
			},
			{
				symbol: 'DEFI+S',
				name: 'PieDAO DEFI Small Cap',
				decimals: 18,
				address: '0xad6a626ae2b43dcb1b39430ce496d2fa0365ba9c',
				logoURI: 'https://tokens.1inch.io/0xad6a626ae2b43dcb1b39430ce496d2fa0365ba9c.png',
				tags: ['tokens']
			},
			{
				symbol: 'DOUGH',
				name: 'PieDAO DOUGH v2',
				decimals: 18,
				address: '0xad32a8e6220741182940c5abf610bde99e737b2d',
				logoURI: 'https://tokens.1inch.io/0xad32a8e6220741182940c5abf610bde99e737b2d.png',
				tags: ['tokens']
			},
			{
				symbol: 'cUNI',
				name: 'Compound Uniswap',
				decimals: 8,
				address: '0x35a18000230da775cac24873d00ff85bccded550',
				logoURI: 'https://tokens.1inch.io/0x35a18000230da775cac24873d00ff85bccded550.png',
				tags: ['savings']
			},
			{
				symbol: 'mUSD',
				name: 'mStable USD',
				decimals: 18,
				address: '0xe2f2a5c287993345a840db3b0845fbc70f5935a5',
				logoURI: 'https://tokens.1inch.io/0xe2f2a5c287993345a840db3b0845fbc70f5935a5.png',
				tags: ['pools', 'PEG:USD']
			},
			{
				symbol: 'ZEE',
				name: 'ZeroSwapToken',
				decimals: 18,
				address: '0x2edf094db69d6dcd487f1b3db9febe2eec0dd4c5',
				logoURI: 'https://tokens.1inch.io/0x2edf094db69d6dcd487f1b3db9febe2eec0dd4c5.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'HEGIC',
				name: 'Hegic',
				decimals: 18,
				address: '0x584bc13c7d411c00c01a62e8019472de68768430',
				logoURI: 'https://tokens.1inch.io/0x584bc13c7d411c00c01a62e8019472de68768430.png',
				tags: ['tokens']
			},
			{
				symbol: 'ASTRO',
				name: 'AstroTools.io',
				decimals: 18,
				address: '0xcbd55d4ffc43467142761a764763652b48b969ff',
				logoURI: 'https://tokens.1inch.io/0xcbd55d4ffc43467142761a764763652b48b969ff.png',
				tags: ['tokens']
			},
			{
				symbol: 'AMP',
				name: 'Amp',
				decimals: 18,
				address: '0xff20817765cb7f73d4bde2e66e067e58d11095c2',
				logoURI: 'https://tokens.1inch.io/0xff20817765cb7f73d4bde2e66e067e58d11095c2.png',
				tags: ['tokens']
			},
			{
				symbol: 'BOND',
				name: 'BarnBridge Governance Token',
				decimals: 18,
				address: '0x0391d2021f89dc339f60fff84546ea23e337750f',
				logoURI: 'https://tokens.1inch.io/0x0391d2021f89dc339f60fff84546ea23e337750f.png',
				tags: ['tokens']
			},
			{
				symbol: 'ANT',
				name: 'Aragon Network Token',
				decimals: 18,
				address: '0xa117000000f279d81a1d3cc75430faa017fa5a2e',
				logoURI: 'https://tokens.1inch.io/0xa117000000f279d81a1d3cc75430faa017fa5a2e.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'FUSE',
				name: 'Fuse Token',
				decimals: 18,
				address: '0x970b9bb2c0444f5e81e9d0efb84c8ccdcdcaf84d',
				logoURI: 'https://tokens.1inch.io/0x970b9bb2c0444f5e81e9d0efb84c8ccdcdcaf84d.png',
				tags: ['tokens']
			},
			{
				symbol: 'ESD',
				name: 'Empty Set Dollar',
				decimals: 18,
				address: '0x36f3fd68e7325a35eb768f1aedaae9ea0689d723',
				logoURI: 'https://tokens.1inch.io/0x36f3fd68e7325a35eb768f1aedaae9ea0689d723.png',
				tags: ['tokens']
			},
			{
				symbol: 'KP3R',
				name: 'Keep3rV1',
				decimals: 18,
				address: '0x1ceb5cb57c4d4e2b2433641b95dd330a33185a44',
				logoURI: 'https://tokens.1inch.io/0x1ceb5cb57c4d4e2b2433641b95dd330a33185a44.png',
				tags: ['tokens']
			},
			{
				symbol: 'DUSD',
				name: 'DefiDollar',
				decimals: 18,
				address: '0x5bc25f649fc4e26069ddf4cf4010f9f706c23831',
				logoURI: 'https://tokens.1inch.io/0x5bc25f649fc4e26069ddf4cf4010f9f706c23831.png',
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'VOICE',
				name: 'Voice Token',
				decimals: 18,
				address: '0x2e2364966267b5d7d2ce6cd9a9b5bd19d9c7c6a9',
				logoURI: 'https://tokens.1inch.io/0x2e2364966267b5d7d2ce6cd9a9b5bd19d9c7c6a9.png',
				tags: ['tokens']
			},
			{
				symbol: 'HEZ',
				name: 'Hermez Network Token',
				decimals: 18,
				address: '0xeef9f339514298c6a857efcfc1a762af84438dee',
				logoURI: 'https://tokens.1inch.io/0xeef9f339514298c6a857efcfc1a762af84438dee.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'SURF',
				name: 'SURF.Finance',
				decimals: 18,
				address: '0xea319e87cf06203dae107dd8e5672175e3ee976c',
				logoURI: 'https://tokens.1inch.io/0xea319e87cf06203dae107dd8e5672175e3ee976c.png',
				tags: ['tokens']
			},
			{
				symbol: 'wANATHA',
				name: 'Wrapped ANATHA',
				decimals: 18,
				address: '0x3383c5a8969dc413bfddc9656eb80a1408e4ba20',
				logoURI: 'https://tokens.1inch.io/0x3383c5a8969dc413bfddc9656eb80a1408e4ba20.png',
				tags: ['tokens']
			},
			{
				symbol: 'AUDIO',
				name: 'Audius',
				decimals: 18,
				address: '0x18aaa7115705e8be94bffebde57af9bfc265b998',
				logoURI: 'https://tokens.1inch.io/0x18aaa7115705e8be94bffebde57af9bfc265b998.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'YFM',
				name: 'yfarm.finance',
				decimals: 18,
				address: '0xa665fed1b0c9da00e91ca582f77df36e325048c5',
				logoURI: 'https://tokens.1inch.io/0xa665fed1b0c9da00e91ca582f77df36e325048c5.png',
				tags: ['tokens']
			},
			{
				symbol: 'ATRI',
				name: 'AtariToken',
				decimals: 0,
				address: '0xdacd69347de42babfaecd09dc88958378780fb62',
				logoURI: 'https://tokens.1inch.io/0xdacd69347de42babfaecd09dc88958378780fb62.png',
				tags: ['tokens']
			},
			{
				symbol: 'INDEX',
				name: 'Index',
				decimals: 18,
				address: '0x0954906da0bf32d5479e25f46056d22f08464cab',
				logoURI: 'https://tokens.1inch.io/0x0954906da0bf32d5479e25f46056d22f08464cab.png',
				tags: ['tokens']
			},
			{
				symbol: 'PTF',
				name: 'PowerTrade Fuel Token',
				decimals: 18,
				address: '0xc57d533c50bc22247d49a368880fb49a1caa39f7',
				logoURI: 'https://tokens.1inch.io/0xc57d533c50bc22247d49a368880fb49a1caa39f7.png',
				tags: ['tokens']
			},
			{
				symbol: 'DFD',
				name: 'DefiDollar DAO',
				decimals: 18,
				address: '0x20c36f062a31865bed8a5b1e512d9a1a20aa333a',
				logoURI: 'https://tokens.1inch.io/0x20c36f062a31865bed8a5b1e512d9a1a20aa333a.png',
				tags: ['tokens']
			},
			{
				symbol: 'APY',
				name: 'APY Governance Token',
				decimals: 18,
				address: '0x95a4492f028aa1fd432ea71146b433e7b4446611',
				logoURI: 'https://tokens.1inch.io/0x95a4492f028aa1fd432ea71146b433e7b4446611.png',
				tags: ['tokens']
			},
			{
				symbol: 'GYSR',
				name: 'Geyser',
				decimals: 18,
				address: '0xbea98c05eeae2f3bc8c3565db7551eb738c8ccab',
				logoURI: 'https://tokens.1inch.io/0xbea98c05eeae2f3bc8c3565db7551eb738c8ccab_1.png',
				tags: ['tokens']
			},
			{
				symbol: 'KP4R',
				name: 'Keep4r',
				decimals: 18,
				address: '0xa89ac6e529acf391cfbbd377f3ac9d93eae9664e',
				logoURI: 'https://tokens.1inch.io/0xa89ac6e529acf391cfbbd377f3ac9d93eae9664e.png',
				tags: ['tokens']
			},
			{
				symbol: 'AXS',
				name: 'Axie Infinity Shard',
				decimals: 18,
				address: '0xbb0e17ef65f82ab018d8edd776e8dd940327b28b',
				logoURI: 'https://tokens.1inch.io/0xbb0e17ef65f82ab018d8edd776e8dd940327b28b.png',
				tags: ['tokens']
			},
			{
				symbol: 'TOMOE',
				name: 'TomoChain',
				decimals: 18,
				address: '0x05d3606d5c81eb9b7b18530995ec9b29da05faba',
				logoURI: 'https://tokens.1inch.io/0x05d3606d5c81eb9b7b18530995ec9b29da05faba.png',
				tags: ['tokens']
			},
			{
				symbol: 'LUA',
				name: 'LuaToken',
				decimals: 18,
				address: '0xb1f66997a5760428d3a87d68b90bfe0ae64121cc',
				logoURI: 'https://tokens.1inch.io/0xb1f66997a5760428d3a87d68b90bfe0ae64121cc.png',
				tags: ['tokens']
			},
			{
				symbol: 'Yf-DAI',
				name: 'YfDAI.finance',
				decimals: 18,
				address: '0xf4cd3d3fda8d7fd6c5a500203e38640a70bf9577',
				logoURI: 'https://tokens.1inch.io/0xf4cd3d3fda8d7fd6c5a500203e38640a70bf9577.png',
				tags: ['tokens']
			},
			{
				symbol: 'POLS',
				name: 'PolkastarterToken',
				decimals: 18,
				address: '0x83e6f1e41cdd28eaceb20cb649155049fac3d5aa',
				logoURI: 'https://tokens.1inch.io/0x83e6f1e41cdd28eaceb20cb649155049fac3d5aa.png',
				tags: ['tokens']
			},
			{
				symbol: 'RFuel',
				name: 'Rio Fuel Token',
				decimals: 18,
				address: '0xaf9f549774ecedbd0966c52f250acc548d3f36e5',
				logoURI: 'https://tokens.1inch.io/0xaf9f549774ecedbd0966c52f250acc548d3f36e5.png',
				tags: ['tokens']
			},
			{
				symbol: 'UFT',
				name: 'UniLend Finance Token',
				decimals: 18,
				address: '0x0202be363b8a4820f3f4de7faf5224ff05943ab1',
				logoURI: 'https://tokens.1inch.io/0x0202be363b8a4820f3f4de7faf5224ff05943ab1.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'LGCY',
				name: 'LGCY Network',
				decimals: 18,
				address: '0xae697f994fc5ebc000f8e22ebffee04612f98a0d',
				logoURI: 'https://tokens.1inch.io/0xae697f994fc5ebc000f8e22ebffee04612f98a0d.png',
				tags: ['tokens']
			},
			{
				symbol: '$ROPE',
				name: '$ROPE',
				decimals: 18,
				address: '0x9d47894f8becb68b9cf3428d256311affe8b068b',
				logoURI: 'https://tokens.1inch.io/0x9d47894f8becb68b9cf3428d256311affe8b068b.png',
				tags: ['tokens']
			},
			{
				symbol: 'PLOT',
				name: 'PLOT',
				decimals: 18,
				address: '0x72f020f8f3e8fd9382705723cd26380f8d0c66bb',
				logoURI: 'https://tokens.1inch.io/0x72f020f8f3e8fd9382705723cd26380f8d0c66bb.png',
				tags: ['tokens']
			},
			{
				symbol: 'KEN',
				name: 'Kenysians Network',
				decimals: 18,
				address: '0x6a7ef4998eb9d0f706238756949f311a59e05745',
				logoURI: 'https://tokens.1inch.io/0x6a7ef4998eb9d0f706238756949f311a59e05745.png',
				tags: ['tokens']
			},
			{
				symbol: 'Nsure',
				name: 'Nsure Network Token',
				decimals: 18,
				address: '0x20945ca1df56d237fd40036d47e866c7dccd2114',
				logoURI: 'https://tokens.1inch.io/0x20945ca1df56d237fd40036d47e866c7dccd2114.png',
				tags: ['tokens']
			},
			{
				symbol: 'TIME',
				name: 'ChronoTech Token',
				decimals: 8,
				address: '0x485d17a6f1b8780392d53d64751824253011a260',
				logoURI: 'https://tokens.1inch.io/0x485d17a6f1b8780392d53d64751824253011a260.png',
				tags: ['tokens']
			},
			{
				symbol: 'aYFIv1',
				name: 'Aave Interest bearing YFI',
				decimals: 18,
				address: '0x12e51e77daaa58aa0e9247db7510ea4b46f9bead',
				logoURI: 'https://tokens.1inch.io/0x12e51e77daaa58aa0e9247db7510ea4b46f9bead.png',
				tags: ['tokens']
			},
			{
				symbol: 'aAAVEv1',
				name: 'Aave Interest bearing Aave Token',
				decimals: 18,
				address: '0xba3d9687cf50fe253cd2e1cfeede1d6787344ed5',
				logoURI: 'https://tokens.1inch.io/0xba3d9687cf50fe253cd2e1cfeede1d6787344ed5.png',
				tags: ['tokens']
			},
			{
				symbol: 'aUNIv1',
				name: 'Aave Interest bearing Uniswap',
				decimals: 18,
				address: '0xb124541127a0a657f056d9dd06188c4f1b0e5aab',
				logoURI: 'https://tokens.1inch.io/0xb124541127a0a657f056d9dd06188c4f1b0e5aab.png',
				tags: ['tokens']
			},
			{
				symbol: 'aENJv1',
				name: 'Aave Interest bearing ENJ',
				decimals: 18,
				address: '0x712db54daa836b53ef1ecbb9c6ba3b9efb073f40',
				logoURI: 'https://tokens.1inch.io/0x712db54daa836b53ef1ecbb9c6ba3b9efb073f40.png',
				tags: ['tokens']
			},
			{
				symbol: 'SFI',
				name: 'Spice',
				decimals: 18,
				address: '0xb753428af26e81097e7fd17f40c88aaa3e04902c',
				logoURI: 'https://tokens.1inch.io/0xb753428af26e81097e7fd17f40c88aaa3e04902c.png',
				tags: ['tokens']
			},
			{
				symbol: 'MPH',
				name: '88mph.app',
				decimals: 18,
				address: '0x8888801af4d980682e47f1a9036e589479e835c5',
				logoURI: 'https://tokens.1inch.io/0x8888801af4d980682e47f1a9036e589479e835c5.png',
				tags: ['tokens']
			},
			{
				symbol: 'eXRD',
				name: 'E-RADIX',
				decimals: 18,
				address: '0x6468e79a80c0eab0f9a2b574c8d5bc374af59414',
				logoURI: 'https://tokens.1inch.io/0x6468e79a80c0eab0f9a2b574c8d5bc374af59414.png',
				tags: ['tokens']
			},
			{
				symbol: 'BOOST',
				name: 'Boosted Finance',
				decimals: 18,
				address: '0x3e780920601d61cedb860fe9c4a90c9ea6a35e78',
				logoURI: 'https://tokens.1inch.io/0x3e780920601d61cedb860fe9c4a90c9ea6a35e78.png',
				tags: ['tokens']
			},
			{
				symbol: 'DF',
				name: 'dForce',
				decimals: 18,
				address: '0x431ad2ff6a9c365805ebad47ee021148d6f7dbe0',
				logoURI: 'https://tokens.1inch.io/0x431ad2ff6a9c365805ebad47ee021148d6f7dbe0.png',
				tags: ['tokens']
			},
			{
				symbol: 'LTO',
				name: 'LTO Network Token',
				decimals: 8,
				address: '0x3db6ba6ab6f95efed1a6e794cad492faaabf294d',
				logoURI: 'https://tokens.1inch.io/0x3db6ba6ab6f95efed1a6e794cad492faaabf294d.png',
				tags: ['tokens']
			},
			{
				symbol: 'CGT',
				name: 'CACHE Gold',
				decimals: 8,
				address: '0xf5238462e7235c7b62811567e63dd17d12c2eaa0',
				logoURI: 'https://tokens.1inch.io/0xf5238462e7235c7b62811567e63dd17d12c2eaa0.png',
				tags: ['tokens']
			},
			{
				symbol: 'NU',
				name: 'NuCypher',
				decimals: 18,
				address: '0x4fe83213d56308330ec302a8bd641f1d0113a4cc',
				logoURI: 'https://tokens.1inch.io/0x4fe83213d56308330ec302a8bd641f1d0113a4cc.png',
				tags: ['tokens']
			},
			{
				symbol: 'OCT',
				name: 'Wrapped OCT',
				decimals: 8,
				address: '0x9e70240d2a8a30a592d3f076441c4f303b26de12',
				logoURI: 'https://tokens.1inch.io/0x9e70240d2a8a30a592d3f076441c4f303b26de12.png',
				tags: ['tokens']
			},
			{
				symbol: 'QRX',
				name: 'QuiverX',
				decimals: 18,
				address: '0x6e0dade58d2d89ebbe7afc384e3e4f15b70b14d8',
				logoURI: 'https://tokens.1inch.io/0x6e0dade58d2d89ebbe7afc384e3e4f15b70b14d8.png',
				tags: ['tokens']
			},
			{
				symbol: 'BTSG',
				name: 'BitSong',
				decimals: 18,
				address: '0x05079687d35b93538cbd59fe5596380cae9054a9',
				logoURI: 'https://tokens.1inch.io/0x05079687d35b93538cbd59fe5596380cae9054a9.png',
				tags: ['tokens']
			},
			{
				symbol: 'aRENv1',
				name: 'Aave Interest bearing REN',
				decimals: 18,
				address: '0x69948cc03f478b95283f7dbf1ce764d0fc7ec54c',
				logoURI: 'https://tokens.1inch.io/0x69948cc03f478b95283f7dbf1ce764d0fc7ec54c.png',
				tags: ['tokens']
			},
			{
				symbol: 'VAL',
				name: 'Sora Validator Token',
				decimals: 18,
				address: '0xe88f8313e61a97cec1871ee37fbbe2a8bf3ed1e4',
				logoURI: 'https://tokens.1inch.io/0xe88f8313e61a97cec1871ee37fbbe2a8bf3ed1e4.png',
				tags: ['tokens']
			},
			{
				symbol: 'API3',
				name: 'API3',
				decimals: 18,
				address: '0x0b38210ea11411557c13457d4da7dc6ea731b88a',
				logoURI: 'https://tokens.1inch.io/0x0b38210ea11411557c13457d4da7dc6ea731b88a.png',
				tags: ['tokens']
			},
			{
				symbol: 'BAC',
				name: 'BAC',
				decimals: 18,
				address: '0x3449fc1cd036255ba1eb19d65ff4ba2b8903a69a',
				logoURI: 'https://tokens.1inch.io/0x3449fc1cd036255ba1eb19d65ff4ba2b8903a69a.png',
				tags: ['tokens']
			},
			{
				symbol: 'PIPT',
				name: 'Power Index Pool Token',
				decimals: 18,
				address: '0x26607ac599266b21d13c7acf7942c7701a8b699c',
				logoURI: 'https://tokens.1inch.io/0x26607ac599266b21d13c7acf7942c7701a8b699c.png',
				tags: ['tokens']
			},
			{
				symbol: 'MEGA',
				name: 'MegaCryptoPolis $MEGA Token (MEGA)',
				decimals: 18,
				address: '0x3218a02f8f8b5c3894ce30eb255f10bcba13e654',
				logoURI: 'https://tokens.1inch.io/0x3218a02f8f8b5c3894ce30eb255f10bcba13e654.png',
				tags: ['tokens']
			},
			{
				symbol: 'BASE',
				name: 'Base Protocol',
				decimals: 9,
				address: '0x07150e919b4de5fd6a63de1f9384828396f25fdc',
				logoURI: 'https://tokens.1inch.io/0x07150e919b4de5fd6a63de1f9384828396f25fdc.png',
				tags: ['tokens']
			},
			{
				symbol: 'BONDLY',
				name: 'Bondly',
				decimals: 18,
				address: '0x91dfbee3965baaee32784c2d546b7a0c62f268c9',
				logoURI: 'https://tokens.1inch.io/0x91dfbee3965baaee32784c2d546b7a0c62f268c9.png',
				tags: ['tokens']
			},
			{
				symbol: 'NEXO',
				name: 'Nexo',
				decimals: 18,
				address: '0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206',
				logoURI: 'https://tokens.1inch.io/0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206.png',
				tags: ['tokens']
			},
			{
				symbol: 'aAAVE',
				name: 'Aave interest bearing AAVE',
				decimals: 18,
				address: '0xffc97d72e13e01096502cb8eb52dee56f74dad7b',
				logoURI: 'https://tokens.1inch.io/0xffc97d72e13e01096502cb8eb52dee56f74dad7b.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'aBAT',
				name: 'Aave interest bearing BAT',
				decimals: 18,
				address: '0x05ec93c0365baaeabf7aeffb0972ea7ecdd39cf1',
				logoURI: 'https://tokens.1inch.io/0x05ec93c0365baaeabf7aeffb0972ea7ecdd39cf1.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'aBUSD',
				name: 'Aave interest bearing BUSD',
				decimals: 18,
				address: '0xa361718326c15715591c299427c62086f69923d9',
				logoURI: 'https://tokens.1inch.io/0xa361718326c15715591c299427c62086f69923d9.png',
				eip2612: true,
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'aDAI',
				name: 'Aave interest bearing DAI',
				decimals: 18,
				address: '0x028171bca77440897b824ca71d1c56cac55b68a3',
				logoURI: 'https://tokens.1inch.io/0x028171bca77440897b824ca71d1c56cac55b68a3.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'aENJ',
				name: 'Aave interest bearing ENJ',
				decimals: 18,
				address: '0xac6df26a590f08dcc95d5a4705ae8abbc88509ef',
				logoURI: 'https://tokens.1inch.io/0xac6df26a590f08dcc95d5a4705ae8abbc88509ef.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'aKNC',
				name: 'Aave interest bearing KNC',
				decimals: 18,
				address: '0x39c6b3e42d6a679d7d776778fe880bc9487c2eda',
				logoURI: 'https://tokens.1inch.io/0x39c6b3e42d6a679d7d776778fe880bc9487c2eda.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'aLINK',
				name: 'Aave interest bearing LINK',
				decimals: 18,
				address: '0xa06bc25b5805d5f8d82847d191cb4af5a3e873e0',
				logoURI: 'https://tokens.1inch.io/0xa06bc25b5805d5f8d82847d191cb4af5a3e873e0.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'aMANA',
				name: 'Aave interest bearing MANA',
				decimals: 18,
				address: '0xa685a61171bb30d4072b338c80cb7b2c865c873e',
				logoURI: 'https://tokens.1inch.io/0xa685a61171bb30d4072b338c80cb7b2c865c873e.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'aMKR',
				name: 'Aave interest bearing MKR',
				decimals: 18,
				address: '0xc713e5e149d5d0715dcd1c156a020976e7e56b88',
				logoURI: 'https://tokens.1inch.io/0xc713e5e149d5d0715dcd1c156a020976e7e56b88.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'aREN',
				name: 'Aave Interest bearing REN',
				decimals: 18,
				address: '0xcc12abe4ff81c9378d670de1b57f8e0dd228d77a',
				logoURI: 'https://tokens.1inch.io/0xcc12abe4ff81c9378d670de1b57f8e0dd228d77a.png',
				tags: ['tokens']
			},
			{
				symbol: 'aSNX',
				name: 'Aave interest bearing SNX',
				decimals: 18,
				address: '0x35f6b052c598d933d69a4eec4d04c73a191fe6c2',
				logoURI: 'https://tokens.1inch.io/0x35f6b052c598d933d69a4eec4d04c73a191fe6c2.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'aSUSD',
				name: 'Aave interest bearing SUSD',
				decimals: 18,
				address: '0x6c5024cd4f8a59110119c56f8933403a539555eb',
				logoURI: 'https://tokens.1inch.io/0x6c5024cd4f8a59110119c56f8933403a539555eb.png',
				eip2612: true,
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'aTUSD',
				name: 'Aave interest bearing TUSD',
				decimals: 18,
				address: '0x101cc05f4a51c0319f570d5e146a8c625198e636',
				logoURI: 'https://tokens.1inch.io/0x101cc05f4a51c0319f570d5e146a8c625198e636.png',
				eip2612: true,
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'aUNI',
				name: 'Aave interest bearing UNI',
				decimals: 18,
				address: '0xb9d7cb55f463405cdfbe4e90a6d2df01c2b92bf1',
				logoURI: 'https://tokens.1inch.io/0xb9d7cb55f463405cdfbe4e90a6d2df01c2b92bf1.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'aUSDC',
				name: 'Aave interest bearing USDC',
				decimals: 6,
				address: '0xbcca60bb61934080951369a648fb03df4f96263c',
				logoURI: 'https://tokens.1inch.io/0xbcca60bb61934080951369a648fb03df4f96263c.png',
				eip2612: true,
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'aUSDT',
				name: 'Aave interest bearing USDT',
				decimals: 6,
				address: '0x3ed3b47dd13ec9a98b44e6204a523e766b225811',
				logoURI: 'https://tokens.1inch.io/0x3ed3b47dd13ec9a98b44e6204a523e766b225811.png',
				eip2612: true,
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'aWBTC',
				name: 'Aave interest bearing WBTC',
				decimals: 8,
				address: '0x9ff58f4ffb29fa2266ab25e75e2a8b3503311656',
				logoURI: 'https://tokens.1inch.io/0x9ff58f4ffb29fa2266ab25e75e2a8b3503311656.png',
				eip2612: true,
				tags: ['tokens', 'PEG:BTC']
			},
			{
				symbol: 'aWETH',
				name: 'Aave interest bearing WETH',
				decimals: 18,
				address: '0x030ba81f1c18d280636f32af80b9aad02cf0854e',
				logoURI: 'https://tokens.1inch.io/0x030ba81f1c18d280636f32af80b9aad02cf0854e.png',
				eip2612: true,
				tags: ['tokens', 'PEG:ETH']
			},
			{
				symbol: 'aYFI',
				name: 'Aave interest bearing YFI',
				decimals: 18,
				address: '0x5165d24277cd063f5ac44efd447b27025e888f37',
				logoURI: 'https://tokens.1inch.io/0x5165d24277cd063f5ac44efd447b27025e888f37.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'aZRX',
				name: 'Aave interest bearing ZRX',
				decimals: 18,
				address: '0xdf7ff54aacacbff42dfe29dd6144a69b629f8c9e',
				logoURI: 'https://tokens.1inch.io/0xdf7ff54aacacbff42dfe29dd6144a69b629f8c9e.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'ECO',
				name: 'ECO TOKEN',
				decimals: 8,
				address: '0x191557728e4d8caa4ac94f86af842148c0fa8f7e',
				logoURI: 'https://tokens.1inch.io/0x191557728e4d8caa4ac94f86af842148c0fa8f7e.png',
				tags: ['tokens']
			},
			{
				symbol: 'UTK',
				name: 'Utrust Token',
				decimals: 18,
				address: '0xdc9ac3c20d1ed0b540df9b1fedc10039df13f99c',
				logoURI: 'https://tokens.1inch.io/0xdc9ac3c20d1ed0b540df9b1fedc10039df13f99c.png',
				tags: ['tokens']
			},
			{
				symbol: 'BADGER',
				name: 'Badger',
				decimals: 18,
				address: '0x3472a5a71965499acd81997a54bba8d852c6e53d',
				logoURI: 'https://tokens.1inch.io/0x3472a5a71965499acd81997a54bba8d852c6e53d.png',
				tags: ['tokens']
			},
			{
				symbol: 'GRT',
				name: 'Graph Token',
				decimals: 18,
				address: '0xc944e90c64b2c07662a292be6244bdf05cda44a7',
				logoURI: 'https://tokens.1inch.io/0xc944e90c64b2c07662a292be6244bdf05cda44a7.png',
				tags: ['tokens']
			},
			{
				symbol: 'LDO',
				name: 'Lido DAO Token',
				decimals: 18,
				address: '0x5a98fcbea516cf06857215779fd812ca3bef1b32',
				logoURI: 'https://tokens.1inch.io/0x5a98fcbea516cf06857215779fd812ca3bef1b32.png',
				tags: ['tokens']
			},
			{
				symbol: 'stETH',
				name: 'stETH',
				decimals: 18,
				address: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
				logoURI: 'https://tokens.1inch.io/0xae7ab96520de3a18e5e111b5eaab095312d7fe84.png',
				tags: ['tokens', 'PEG:ETH']
			},
			{
				symbol: 'POND',
				name: 'Marlin POND',
				decimals: 18,
				address: '0x57b946008913b82e4df85f501cbaed910e58d26c',
				logoURI: 'https://tokens.1inch.io/0x57b946008913b82e4df85f501cbaed910e58d26c.png',
				tags: ['tokens']
			},
			{
				symbol: 'OMv2',
				name: 'MANTRA DAO',
				decimals: 18,
				address: '0x3593d125a4f7849a1b059e64f4517a86dd60c95d',
				logoURI: 'https://tokens.1inch.io/0x3593d125a4f7849a1b059e64f4517a86dd60c95d.png',
				tags: ['tokens']
			},
			{
				symbol: 'FXS',
				name: 'Frax Share',
				decimals: 18,
				address: '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0',
				logoURI: 'https://tokens.1inch.io/0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0.png',
				tags: ['tokens']
			},
			{
				symbol: '1INCH',
				name: '1INCH Token',
				decimals: 18,
				address: '0x111111111117dc0aa78b770fa6a738034120c302',
				logoURI: 'https://tokens.1inch.io/0x111111111117dc0aa78b770fa6a738034120c302.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'PPAY',
				name: 'Plasma',
				decimals: 18,
				address: '0x054d64b73d3d8a21af3d764efd76bcaa774f3bb2',
				logoURI: 'https://tokens.1inch.io/0x054d64b73d3d8a21af3d764efd76bcaa774f3bb2.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'MIC',
				name: 'MIC',
				decimals: 18,
				address: '0x368b3a58b5f49392e5c9e4c998cb0bb966752e51',
				logoURI: 'https://tokens.1inch.io/0x368b3a58b5f49392e5c9e4c998cb0bb966752e51.png',
				tags: ['tokens']
			},
			{
				symbol: 'MIS',
				name: 'MIS',
				decimals: 18,
				address: '0x4b4d2e899658fb59b1d518b68fe836b100ee8958',
				logoURI: 'https://tokens.1inch.io/0x4b4d2e899658fb59b1d518b68fe836b100ee8958.png',
				tags: ['tokens']
			},
			{
				symbol: 'XED',
				name: 'Exeedme',
				decimals: 18,
				address: '0xee573a945b01b788b9287ce062a0cfc15be9fd86',
				logoURI: 'https://tokens.1inch.io/0xee573a945b01b788b9287ce062a0cfc15be9fd86.png',
				tags: ['tokens']
			},
			{
				symbol: 'WOZX',
				name: 'EFFORCE IEO',
				decimals: 18,
				address: '0x34950ff2b487d9e5282c5ab342d08a2f712eb79f',
				logoURI: 'https://tokens.1inch.io/0x34950ff2b487d9e5282c5ab342d08a2f712eb79f.png',
				tags: ['tokens']
			},
			{
				symbol: 'DSD',
				name: 'Dynamic Set Dollar',
				decimals: 18,
				address: '0xbd2f0cd039e0bfcf88901c98c0bfac5ab27566e3',
				logoURI: 'https://tokens.1inch.io/0xbd2f0cd039e0bfcf88901c98c0bfac5ab27566e3.png',
				tags: ['tokens']
			},
			{
				symbol: 'FOX',
				name: 'FOX',
				decimals: 18,
				address: '0xc770eefad204b5180df6a14ee197d99d808ee52d',
				logoURI: 'https://tokens.1inch.io/0xc770eefad204b5180df6a14ee197d99d808ee52d.png',
				tags: ['tokens']
			},
			{
				symbol: 'COVER',
				name: 'Cover Protocol Governance Token',
				decimals: 18,
				address: '0x4688a8b1f292fdab17e9a90c8bc379dc1dbd8713',
				logoURI: 'https://tokens.1inch.io/0x4688a8b1f292fdab17e9a90c8bc379dc1dbd8713.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'WISE',
				name: 'Wise Token',
				decimals: 18,
				address: '0x66a0f676479cee1d7373f3dc2e2952778bff5bd6',
				logoURI: 'https://tokens.1inch.io/0x66a0f676479cee1d7373f3dc2e2952778bff5bd6.png',
				tags: ['tokens']
			},
			{
				symbol: 'COMBO',
				name: 'Furucombo',
				decimals: 18,
				address: '0xffffffff2ba8f66d4e51811c5190992176930278',
				logoURI: 'https://tokens.1inch.io/0xffffffff2ba8f66d4e51811c5190992176930278.png',
				tags: ['tokens']
			},
			{
				symbol: 'USDFL',
				name: 'USDFreeLiquidity',
				decimals: 18,
				address: '0x2b4200a8d373d484993c37d63ee14aee0096cd12',
				logoURI: 'https://tokens.1inch.io/0x2b4200a8d373d484993c37d63ee14aee0096cd12.png',
				eip2612: true,
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'FET',
				name: 'Fetch',
				decimals: 18,
				address: '0xaea46a60368a7bd060eec7df8cba43b7ef41ad85',
				logoURI: 'https://tokens.1inch.io/0xaea46a60368a7bd060eec7df8cba43b7ef41ad85.png',
				tags: ['tokens']
			},
			{
				symbol: 'PHA',
				name: 'Phala',
				decimals: 18,
				address: '0x6c5ba91642f10282b576d91922ae6448c9d52f4e',
				logoURI: 'https://tokens.1inch.io/0x6c5ba91642f10282b576d91922ae6448c9d52f4e.png',
				tags: ['tokens']
			},
			{
				symbol: 'pBTC35A',
				name: 'POW BTC-35W/T',
				decimals: 18,
				address: '0xa8b12cc90abf65191532a12bb5394a714a46d358',
				logoURI: 'https://tokens.1inch.io/0xa8b12cc90abf65191532a12bb5394a714a46d358.png',
				eip2612: true,
				tags: ['tokens', 'PEG:BTC']
			},
			{
				symbol: 'FRAX',
				name: 'Frax',
				decimals: 18,
				address: '0x853d955acef822db058eb8505911ed77f175b99e',
				logoURI: 'https://tokens.1inch.io/0x853d955acef822db058eb8505911ed77f175b99e.png',
				tags: ['tokens']
			},
			{
				symbol: 'INJ',
				name: 'Injective Token',
				decimals: 18,
				address: '0xe28b3b32b6c345a34ff64674606124dd5aceca30',
				logoURI: 'https://tokens.1inch.io/0xe28b3b32b6c345a34ff64674606124dd5aceca30.png',
				tags: ['tokens']
			},
			{
				symbol: 'YLD_APP',
				name: 'Yield',
				decimals: 18,
				address: '0xf94b5c5651c888d928439ab6514b93944eee6f48',
				logoURI: 'https://tokens.1inch.io/0xf94b5c5651c888d928439ab6514b93944eee6f48.png',
				tags: ['tokens']
			},
			{
				symbol: 'CFi',
				name: 'CyberFi Token',
				decimals: 18,
				address: '0x63b4f3e3fa4e438698ce330e365e831f7ccd1ef4',
				logoURI: 'https://tokens.1inch.io/0x63b4f3e3fa4e438698ce330e365e831f7ccd1ef4.png',
				tags: ['tokens']
			},
			{
				symbol: 'RGT',
				name: 'Rari Governance Token',
				decimals: 18,
				address: '0xd291e7a03283640fdc51b121ac401383a46cc623',
				logoURI: 'https://tokens.1inch.io/0xd291e7a03283640fdc51b121ac401383a46cc623.png',
				tags: ['tokens']
			},
			{
				symbol: 'ROOK',
				name: 'ROOK',
				decimals: 18,
				address: '0xfa5047c9c78b8877af97bdcb85db743fd7313d4a',
				logoURI: 'https://tokens.1inch.io/0xfa5047c9c78b8877af97bdcb85db743fd7313d4a.png',
				tags: ['tokens']
			},
			{
				symbol: 'YOP',
				name: 'YOP',
				decimals: 8,
				address: '0xae1eaae3f627aaca434127644371b67b18444051',
				logoURI: 'https://tokens.1inch.io/0xae1eaae3f627aaca434127644371b67b18444051.png',
				tags: ['tokens']
			},
			{
				symbol: 'NFTX',
				name: 'NFTX',
				decimals: 18,
				address: '0x87d73e916d7057945c9bcd8cdd94e42a6f47f776',
				logoURI: 'https://tokens.1inch.io/0x87d73e916d7057945c9bcd8cdd94e42a6f47f776.png',
				tags: ['tokens']
			},
			{
				symbol: 'RBC',
				name: 'Rubic',
				decimals: 18,
				address: '0xa4eed63db85311e22df4473f87ccfc3dadcfa3e3',
				logoURI: 'https://tokens.1inch.io/0xa4eed63db85311e22df4473f87ccfc3dadcfa3e3.png',
				tags: ['tokens']
			},
			{
				symbol: 'SDT',
				name: 'Stake DAO Token',
				decimals: 18,
				address: '0x73968b9a57c6e53d41345fd57a6e6ae27d6cdb2f',
				logoURI: 'https://tokens.1inch.io/0x73968b9a57c6e53d41345fd57a6e6ae27d6cdb2f.png',
				tags: ['tokens']
			},
			{
				symbol: 'VGX',
				name: 'Voyager Token',
				decimals: 8,
				address: '0x3c4b6e6e1ea3d4863700d7f76b36b7f3d3f13e3d',
				logoURI: 'https://tokens.1inch.io/0x3c4b6e6e1ea3d4863700d7f76b36b7f3d3f13e3d.png',
				tags: ['tokens']
			},
			{
				symbol: 'DEBASE',
				name: 'Debase',
				decimals: 18,
				address: '0x9248c485b0b80f76da451f167a8db30f33c70907',
				logoURI: 'https://tokens.1inch.io/0x9248c485b0b80f76da451f167a8db30f33c70907.png',
				tags: ['tokens']
			},
			{
				symbol: 'ANKR',
				name: 'Ankr Network',
				decimals: 18,
				address: '0x8290333cef9e6d528dd5618fb97a76f268f3edd4',
				logoURI: 'https://tokens.1inch.io/0x8290333cef9e6d528dd5618fb97a76f268f3edd4.png',
				tags: ['tokens']
			},
			{
				symbol: 'DIP_Insurance',
				name: 'Decentralized Insurance Protocol',
				decimals: 18,
				address: '0xc719d010b63e5bbf2c0551872cd5316ed26acd83',
				logoURI: 'https://tokens.1inch.io/0xc719d010b63e5bbf2c0551872cd5316ed26acd83.png',
				tags: ['tokens']
			},
			{
				symbol: 'RUNE',
				name: 'THORChain ETH.RUNE',
				decimals: 18,
				address: '0x3155ba85d5f96b2d030a4966af206230e46849cb',
				logoURI: 'https://tokens.1inch.io/0x3155ba85d5f96b2d030a4966af206230e46849cb.png',
				tags: ['tokens']
			},
			{
				symbol: 'BAO',
				name: 'BaoToken',
				decimals: 18,
				address: '0x374cb8c27130e2c9e04f44303f3c8351b9de61c1',
				logoURI: 'https://tokens.1inch.io/0x374cb8c27130e2c9e04f44303f3c8351b9de61c1.png',
				tags: ['tokens']
			},
			{
				symbol: 'REEF',
				name: 'Reef.finance',
				decimals: 18,
				address: '0xfe3e6a25e6b192a42a44ecddcd13796471735acf',
				logoURI: 'https://tokens.1inch.io/0xfe3e6a25e6b192a42a44ecddcd13796471735acf.png',
				tags: ['tokens']
			},
			{
				symbol: 'TRU',
				name: 'TrustToken',
				decimals: 8,
				address: '0x4c19596f5aaff459fa38b0f7ed92f11ae6543784',
				logoURI: 'https://tokens.1inch.io/0x4c19596f5aaff459fa38b0f7ed92f11ae6543784.png',
				tags: ['tokens']
			},
			{
				symbol: 'NDX',
				name: 'Indexed',
				decimals: 18,
				address: '0x86772b1409b61c639eaac9ba0acfbb6e238e5f83',
				logoURI: 'https://tokens.1inch.io/0x86772b1409b61c639eaac9ba0acfbb6e238e5f83.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'MARK',
				name: 'Benchmark',
				decimals: 9,
				address: '0x67c597624b17b16fb77959217360b7cd18284253',
				logoURI: 'https://tokens.1inch.io/0x67c597624b17b16fb77959217360b7cd18284253.png',
				tags: ['tokens']
			},
			{
				symbol: 'ZERO',
				name: 'Zero.Exchange Token',
				decimals: 18,
				address: '0xf0939011a9bb95c3b791f0cb546377ed2693a574',
				logoURI: 'https://tokens.1inch.io/0xf0939011a9bb95c3b791f0cb546377ed2693a574.png',
				tags: ['tokens']
			},
			{
				symbol: 'OCTO',
				name: 'Octo.fi',
				decimals: 18,
				address: '0x7240ac91f01233baaf8b064248e80feaa5912ba3',
				logoURI: 'https://tokens.1inch.io/0x7240ac91f01233baaf8b064248e80feaa5912ba3.png',
				tags: ['tokens']
			},
			{
				symbol: 'ORAI',
				name: 'Oraichain Token',
				decimals: 18,
				address: '0x4c11249814f11b9346808179cf06e71ac328c1b5',
				logoURI: 'https://tokens.1inch.io/0x4c11249814f11b9346808179cf06e71ac328c1b5.png',
				tags: ['tokens']
			},
			{
				symbol: 'DDIM',
				name: 'DuckDaoDime',
				decimals: 18,
				address: '0xfbeea1c75e4c4465cb2fccc9c6d6afe984558e20',
				logoURI: 'https://tokens.1inch.io/0xfbeea1c75e4c4465cb2fccc9c6d6afe984558e20.png',
				tags: ['tokens']
			},
			{
				symbol: 'BIRD',
				name: 'Bird.Money',
				decimals: 18,
				address: '0x70401dfd142a16dc7031c56e862fc88cb9537ce0',
				logoURI: 'https://tokens.1inch.io/0x70401dfd142a16dc7031c56e862fc88cb9537ce0.png',
				tags: ['tokens']
			},
			{
				symbol: '$ANRX',
				name: 'AnRKey X',
				decimals: 18,
				address: '0xcae72a7a0fd9046cf6b165ca54c9e3a3872109e0',
				logoURI: 'https://tokens.1inch.io/0xcae72a7a0fd9046cf6b165ca54c9e3a3872109e0.png',
				tags: ['tokens']
			},
			{
				symbol: 'SPC',
				name: 'SpaceChainV2',
				decimals: 18,
				address: '0x86ed939b500e121c0c5f493f399084db596dad20',
				logoURI: 'https://tokens.1inch.io/0x86ed939b500e121c0c5f493f399084db596dad20.png',
				tags: ['tokens']
			},
			{
				symbol: 'RAMP',
				name: 'RAMP DEFI',
				decimals: 18,
				address: '0x33d0568941c0c64ff7e0fb4fba0b11bd37deed9f',
				logoURI: 'https://tokens.1inch.io/0x33d0568941c0c64ff7e0fb4fba0b11bd37deed9f.png',
				tags: ['tokens']
			},
			{
				symbol: 'STBZ',
				name: 'Stabilize Token',
				decimals: 18,
				address: '0xb987d48ed8f2c468d52d6405624eadba5e76d723',
				logoURI: 'https://tokens.1inch.io/0xb987d48ed8f2c468d52d6405624eadba5e76d723.png',
				tags: ['tokens']
			},
			{
				symbol: 'INFI',
				name: 'INFI',
				decimals: 18,
				address: '0x159751323a9e0415dd3d6d42a1212fe9f4a0848c',
				logoURI: 'https://tokens.1inch.io/0x159751323a9e0415dd3d6d42a1212fe9f4a0848c.png',
				tags: ['tokens']
			},
			{
				symbol: 'CRO',
				name: 'CRO',
				decimals: 8,
				address: '0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b',
				logoURI: 'https://tokens.1inch.io/0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b.png',
				tags: ['tokens']
			},
			{
				symbol: 'LYXe',
				name: 'LUKSO Token',
				decimals: 18,
				address: '0xa8b919680258d369114910511cc87595aec0be6d',
				logoURI: 'https://tokens.1inch.io/0xa8b919680258d369114910511cc87595aec0be6d.png',
				tags: ['tokens']
			},
			{
				symbol: 'TVK',
				name: 'Terra Virtua Kolect',
				decimals: 18,
				address: '0xd084b83c305dafd76ae3e1b4e1f1fe2ecccb3988',
				logoURI: 'https://tokens.1inch.io/0xd084b83c305dafd76ae3e1b4e1f1fe2ecccb3988.png',
				tags: ['tokens']
			},
			{
				symbol: 'DIGG',
				name: 'Digg',
				decimals: 9,
				address: '0x798d1be841a82a273720ce31c822c61a67a601c3',
				logoURI: 'https://tokens.1inch.io/0x798d1be841a82a273720ce31c822c61a67a601c3.png',
				tags: ['tokens']
			},
			{
				symbol: 'ALPHA',
				name: 'AlphaToken',
				decimals: 18,
				address: '0xa1faa113cbe53436df28ff0aee54275c13b40975',
				logoURI: 'https://tokens.1inch.io/0xa1faa113cbe53436df28ff0aee54275c13b40975_1.png',
				tags: ['tokens']
			},
			{
				symbol: 'CUDOS',
				name: 'CudosToken',
				decimals: 18,
				address: '0x817bbdbc3e8a1204f3691d14bb44992841e3db35',
				logoURI: 'https://tokens.1inch.io/0x817bbdbc3e8a1204f3691d14bb44992841e3db35.png',
				tags: ['tokens']
			},
			{
				symbol: 'DEXE',
				name: 'Dexe',
				decimals: 18,
				address: '0xde4ee8057785a7e8e800db58f9784845a5c2cbd6',
				logoURI: 'https://tokens.1inch.io/0xde4ee8057785a7e8e800db58f9784845a5c2cbd6.png',
				tags: ['tokens']
			},
			{
				symbol: 'SAND',
				name: 'SAND',
				decimals: 18,
				address: '0x3845badade8e6dff049820680d1f14bd3903a5d0',
				logoURI: 'https://tokens.1inch.io/0x3845badade8e6dff049820680d1f14bd3903a5d0.png',
				tags: ['tokens']
			},
			{
				symbol: 'CVR',
				name: 'PolkaCover',
				decimals: 18,
				address: '0x3c03b4ec9477809072ff9cc9292c9b25d4a8e6c6',
				logoURI: 'https://tokens.1inch.io/0x3c03b4ec9477809072ff9cc9292c9b25d4a8e6c6.png',
				tags: ['tokens']
			},
			{
				symbol: 'FRM',
				name: 'Ferrum Network Token',
				decimals: 6,
				address: '0xe5caef4af8780e59df925470b050fb23c43ca68c',
				logoURI: 'https://tokens.1inch.io/0xe5caef4af8780e59df925470b050fb23c43ca68c.png',
				tags: ['tokens']
			},
			{
				symbol: 'PBR',
				name: 'PolkaBridge',
				decimals: 18,
				address: '0x298d492e8c1d909d3f63bc4a36c66c64acb3d695',
				logoURI: 'https://tokens.1inch.io/0x298d492e8c1d909d3f63bc4a36c66c64acb3d695.png',
				tags: ['tokens']
			},
			{
				symbol: 'SNOW',
				name: 'SnowSwap',
				decimals: 18,
				address: '0xfe9a29ab92522d14fc65880d817214261d8479ae',
				logoURI: 'https://tokens.1inch.io/0xfe9a29ab92522d14fc65880d817214261d8479ae.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'DIS',
				name: 'TosDis',
				decimals: 18,
				address: '0x220b71671b649c03714da9c621285943f3cbcdc6',
				logoURI: 'https://tokens.1inch.io/0x220b71671b649c03714da9c621285943f3cbcdc6.png',
				tags: ['tokens']
			},
			{
				symbol: 'POOLZ',
				name: '$Poolz Finance',
				decimals: 18,
				address: '0x69a95185ee2a045cdc4bcd1b1df10710395e4e23',
				logoURI: 'https://tokens.1inch.io/0x69a95185ee2a045cdc4bcd1b1df10710395e4e23.png',
				tags: ['tokens']
			},
			{
				symbol: 'ZKS',
				name: 'Zks',
				decimals: 18,
				address: '0xe4815ae53b124e7263f08dcdbbb757d41ed658c6',
				logoURI: 'https://tokens.1inch.io/0xe4815ae53b124e7263f08dcdbbb757d41ed658c6.png',
				tags: ['tokens']
			},
			{
				symbol: 'ARMOR',
				name: 'Armor',
				decimals: 18,
				address: '0x1337def16f9b486faed0293eb623dc8395dfe46a',
				logoURI: 'https://tokens.1inch.io/0x1337def16f9b486faed0293eb623dc8395dfe46a.png',
				tags: ['tokens']
			},
			{
				symbol: 'arNXM',
				name: 'Armor NXM',
				decimals: 18,
				address: '0x1337def18c680af1f9f45cbcab6309562975b1dd',
				logoURI: 'https://tokens.1inch.io/0x1337def18c680af1f9f45cbcab6309562975b1dd.png',
				tags: ['tokens']
			},
			{
				symbol: 'OPIUM',
				name: 'Opium Governance Token',
				decimals: 18,
				address: '0x888888888889c00c67689029d7856aac1065ec11',
				logoURI: 'https://tokens.1inch.io/0x888888888889c00c67689029d7856aac1065ec11.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'HH',
				name: 'Holyheld',
				decimals: 18,
				address: '0x3fa729b4548becbad4eab6ef18413470e6d5324c',
				logoURI: 'https://tokens.1inch.io/0x3fa729b4548becbad4eab6ef18413470e6d5324c.png',
				tags: ['tokens']
			},
			{
				symbol: 'DYP',
				name: 'DeFiYieldProtocol',
				decimals: 18,
				address: '0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17',
				logoURI: 'https://tokens.1inch.io/0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17.png',
				tags: ['tokens']
			},
			{
				symbol: 'ANKRETH',
				name: 'Ankr Staked ETH',
				decimals: 18,
				address: '0xe95a203b1a91a908f9b9ce46459d101078c2c3cb',
				logoURI: 'https://tokens.1inch.io/0xe95a203b1a91a908f9b9ce46459d101078c2c3cb.png',
				tags: ['tokens', 'PEG:ETH']
			},
			{
				symbol: 'FTM',
				name: 'Fantom Token',
				decimals: 18,
				address: '0x4e15361fd6b4bb609fa63c81a2be19d873717870',
				logoURI: 'https://tokens.1inch.io/0x4e15361fd6b4bb609fa63c81a2be19d873717870.png',
				tags: ['tokens']
			},
			{
				symbol: 'PROS',
				name: 'Prosper',
				decimals: 18,
				address: '0x8642a849d0dcb7a15a974794668adcfbe4794b56',
				logoURI: 'https://tokens.1inch.io/0x8642a849d0dcb7a15a974794668adcfbe4794b56.png',
				tags: ['tokens']
			},
			{
				symbol: 'RFI',
				name: 'reflect.finance',
				decimals: 9,
				address: '0xa1afffe3f4d611d252010e3eaf6f4d77088b0cd7',
				logoURI: 'https://tokens.1inch.io/0xa1afffe3f4d611d252010e3eaf6f4d77088b0cd7.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'UST',
				name: 'Wrapped UST Token',
				decimals: 18,
				address: '0xa47c8bf37f92abed4a126bda807a7b7498661acd',
				logoURI: 'https://tokens.1inch.io/0xa47c8bf37f92abed4a126bda807a7b7498661acd.png',
				tags: ['tokens']
			},
			{
				symbol: 'renDOGE',
				name: 'renDOGE',
				decimals: 8,
				address: '0x3832d2f059e55934220881f831be501d180671a7',
				logoURI: 'https://tokens.1inch.io/0x3832d2f059e55934220881f831be501d180671a7.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'MIR',
				name: 'Wrapped MIR Token',
				decimals: 18,
				address: '0x09a3ecafa817268f77be1283176b946c4ff2e608',
				logoURI: 'https://tokens.1inch.io/0x09a3ecafa817268f77be1283176b946c4ff2e608.png',
				tags: ['tokens']
			},
			{
				symbol: 'CHART',
				name: 'ChartEx',
				decimals: 18,
				address: '0x1d37986f252d0e349522ea6c3b98cb935495e63e',
				logoURI: 'https://tokens.1inch.io/0x1d37986f252d0e349522ea6c3b98cb935495e63e.png',
				tags: ['tokens']
			},
			{
				symbol: 'BMI',
				name: 'Bridge Mutual',
				decimals: 18,
				address: '0x725c263e32c72ddc3a19bea12c5a0479a81ee688',
				logoURI: 'https://tokens.1inch.io/0x725c263e32c72ddc3a19bea12c5a0479a81ee688.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'LON',
				name: 'Tokenlon',
				decimals: 18,
				address: '0x0000000000095413afc295d19edeb1ad7b71c952',
				logoURI: 'https://tokens.1inch.io/0x0000000000095413afc295d19edeb1ad7b71c952.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'ARCH',
				name: 'Archer DAO Governance Token',
				decimals: 18,
				address: '0x1f3f9d3068568f8040775be2e8c03c103c61f3af',
				logoURI: 'https://tokens.1inch.io/0x1f3f9d3068568f8040775be2e8c03c103c61f3af.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'LTX',
				name: 'Lattice Token',
				decimals: 8,
				address: '0xa393473d64d2f9f026b60b6df7859a689715d092',
				logoURI: 'https://tokens.1inch.io/0xa393473d64d2f9f026b60b6df7859a689715d092.png',
				tags: ['tokens']
			},
			{
				symbol: 'L2',
				name: 'Leverj Gluon',
				decimals: 18,
				address: '0xbbff34e47e559ef680067a6b1c980639eeb64d24',
				logoURI: 'https://tokens.1inch.io/0xbbff34e47e559ef680067a6b1c980639eeb64d24.png',
				tags: ['tokens']
			},
			{
				symbol: 'ONX',
				name: 'OnX.finance',
				decimals: 18,
				address: '0xe0ad1806fd3e7edf6ff52fdb822432e847411033',
				logoURI: 'https://tokens.1inch.io/0xe0ad1806fd3e7edf6ff52fdb822432e847411033.png',
				tags: ['tokens']
			},
			{
				symbol: 'BiFi',
				name: 'BiFi',
				decimals: 18,
				address: '0x2791bfd60d232150bff86b39b7146c0eaaa2ba81',
				logoURI: 'https://tokens.1inch.io/0x2791bfd60d232150bff86b39b7146c0eaaa2ba81.png',
				tags: ['tokens']
			},
			{
				symbol: 'FIS',
				name: 'StaFi',
				decimals: 18,
				address: '0xef3a930e1ffffacd2fc13434ac81bd278b0ecc8d',
				logoURI: 'https://tokens.1inch.io/0xef3a930e1ffffacd2fc13434ac81bd278b0ecc8d.png',
				tags: ['tokens']
			},
			{
				symbol: 'LINA',
				name: 'Linear Token',
				decimals: 18,
				address: '0x3e9bc21c9b189c09df3ef1b824798658d5011937',
				logoURI: 'https://tokens.1inch.io/0x3e9bc21c9b189c09df3ef1b824798658d5011937.png',
				tags: ['tokens']
			},
			{
				symbol: 'GNYerc20',
				name: 'GNYerc20',
				decimals: 18,
				address: '0xb1f871ae9462f1b2c6826e88a7827e76f86751d4',
				logoURI: 'https://tokens.1inch.io/0xb1f871ae9462f1b2c6826e88a7827e76f86751d4.png',
				tags: ['tokens']
			},
			{
				symbol: 'OIN',
				name: 'oinfinance',
				decimals: 8,
				address: '0x9aeb50f542050172359a0e1a25a9933bc8c01259',
				logoURI: 'https://tokens.1inch.io/0x9aeb50f542050172359a0e1a25a9933bc8c01259.png',
				tags: ['tokens']
			},
			{
				symbol: 'xINCHa',
				name: 'xINCH',
				decimals: 18,
				address: '0x8f6a193c8b3c949e1046f1547c3a3f0836944e4b',
				logoURI: 'https://tokens.1inch.io/0x8f6a193c8b3c949e1046f1547c3a3f0836944e4b.png',
				tags: ['tokens']
			},
			{
				symbol: 'CWS',
				name: 'Crowns',
				decimals: 18,
				address: '0xac0104cca91d167873b8601d2e71eb3d4d8c33e0',
				logoURI: 'https://tokens.1inch.io/0xac0104cca91d167873b8601d2e71eb3d4d8c33e0.png',
				tags: ['tokens']
			},
			{
				symbol: 'SHIB',
				name: 'SHIBA INU',
				decimals: 18,
				address: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce',
				logoURI: 'https://tokens.1inch.io/0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce.png',
				tags: ['tokens']
			},
			{
				symbol: 'PRT',
				name: 'Portion Token',
				decimals: 18,
				address: '0x6d0f5149c502faf215c89ab306ec3e50b15e2892',
				logoURI: 'https://tokens.1inch.io/0x6d0f5149c502faf215c89ab306ec3e50b15e2892.png',
				tags: ['tokens']
			},
			{
				symbol: 'NCT',
				name: 'NameChangeToken',
				decimals: 18,
				address: '0x8a9c4dfe8b9d8962b31e4e16f8321c44d48e246e',
				logoURI: 'https://tokens.1inch.io/0x8a9c4dfe8b9d8962b31e4e16f8321c44d48e246e.png',
				tags: ['tokens']
			},
			{
				symbol: 'MUSE',
				name: 'Muse',
				decimals: 18,
				address: '0xb6ca7399b4f9ca56fc27cbff44f4d2e4eef1fc81',
				logoURI: 'https://tokens.1inch.io/0xb6ca7399b4f9ca56fc27cbff44f4d2e4eef1fc81.png',
				tags: ['tokens']
			},
			{
				symbol: 'MAPS',
				name: 'Maps.me Token',
				decimals: 6,
				address: '0x2b915b505c017abb1547aa5ab355fbe69865cc6d',
				logoURI: 'https://tokens.1inch.io/0x2b915b505c017abb1547aa5ab355fbe69865cc6d.png',
				tags: ['tokens']
			},
			{
				symbol: 'GUM',
				name: 'GourmetGalaxy',
				decimals: 18,
				address: '0x4f5fa8f2d12e5eb780f6082dd656c565c48e0f24',
				logoURI: 'https://tokens.1inch.io/0x4f5fa8f2d12e5eb780f6082dd656c565c48e0f24.png',
				tags: ['tokens']
			},
			{
				symbol: 'TXL',
				name: 'Tixl Token',
				decimals: 18,
				address: '0x8eef5a82e6aa222a60f009ac18c24ee12dbf4b41',
				logoURI: 'https://tokens.1inch.io/0x8eef5a82e6aa222a60f009ac18c24ee12dbf4b41.png',
				tags: ['tokens']
			},
			{
				symbol: 'RAZOR',
				name: 'RAZOR',
				decimals: 18,
				address: '0x50de6856358cc35f3a9a57eaaa34bd4cb707d2cd',
				logoURI: 'https://tokens.1inch.io/0x50de6856358cc35f3a9a57eaaa34bd4cb707d2cd.png',
				tags: ['tokens']
			},
			{
				symbol: '$TRDL',
				name: 'Strudel Finance',
				decimals: 18,
				address: '0x297d33e17e61c2ddd812389c2105193f8348188a',
				logoURI: 'https://tokens.1inch.io/0x297d33e17e61c2ddd812389c2105193f8348188a.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'YVS',
				name: 'YVS.Finance',
				decimals: 18,
				address: '0xec681f28f4561c2a9534799aa38e0d36a83cf478',
				logoURI: 'https://tokens.1inch.io/0xec681f28f4561c2a9534799aa38e0d36a83cf478.png',
				tags: ['tokens']
			},
			{
				symbol: 'BUND',
				name: 'Bundles',
				decimals: 18,
				address: '0x8d3e855f3f55109d473735ab76f753218400fe96',
				logoURI: 'https://tokens.1inch.io/0x8d3e855f3f55109d473735ab76f753218400fe96.png',
				tags: ['tokens']
			},
			{
				symbol: 'SASHIMI',
				name: 'SashimiToken',
				decimals: 18,
				address: '0xc28e27870558cf22add83540d2126da2e4b464c2',
				logoURI: 'https://tokens.1inch.io/0xc28e27870558cf22add83540d2126da2e4b464c2.png',
				tags: ['tokens']
			},
			{
				symbol: 'HGET',
				name: 'Hedget',
				decimals: 6,
				address: '0x7968bc6a03017ea2de509aaa816f163db0f35148',
				logoURI: 'https://tokens.1inch.io/0x7968bc6a03017ea2de509aaa816f163db0f35148.png',
				tags: ['tokens']
			},
			{
				symbol: 'GALA',
				name: 'Gala',
				decimals: 8,
				address: '0x15d4c048f83bd7e37d49ea4c83a07267ec4203da',
				logoURI: 'https://tokens.1inch.io/0x15d4c048f83bd7e37d49ea4c83a07267ec4203da.png',
				tags: ['tokens']
			},
			{
				symbol: 'SHARE',
				name: 'Seigniorage Shares',
				decimals: 9,
				address: '0x39795344cbcc76cc3fb94b9d1b15c23c2070c66d',
				logoURI: 'https://tokens.1inch.io/0x39795344cbcc76cc3fb94b9d1b15c23c2070c66d.png',
				tags: ['tokens']
			},
			{
				symbol: 'UNISTAKE',
				name: 'Unistake',
				decimals: 18,
				address: '0x9ed8e7c9604790f7ec589f99b94361d8aab64e5e',
				logoURI: 'https://tokens.1inch.io/0x9ed8e7c9604790f7ec589f99b94361d8aab64e5e.png',
				tags: ['tokens']
			},
			{
				symbol: 'AZUKI',
				name: 'DokiDokiAzuki',
				decimals: 18,
				address: '0x910524678c0b1b23ffb9285a81f99c29c11cbaed',
				logoURI: 'https://tokens.1inch.io/0x910524678c0b1b23ffb9285a81f99c29c11cbaed.png',
				tags: ['tokens']
			},
			{
				symbol: 'DEXTF',
				name: 'DEXTF Token',
				decimals: 18,
				address: '0x5f64ab1544d28732f0a24f4713c2c8ec0da089f0',
				logoURI: 'https://tokens.1inch.io/0x5f64ab1544d28732f0a24f4713c2c8ec0da089f0.png',
				tags: ['tokens']
			},
			{
				symbol: 'MP3',
				name: 'mp3',
				decimals: 18,
				address: '0x018fb5af9d015af25592a014c4266a84143de7a0',
				logoURI: 'https://tokens.1inch.io/0x018fb5af9d015af25592a014c4266a84143de7a0.png',
				tags: ['tokens']
			},
			{
				symbol: 'LUNA',
				name: 'Wrapped LUNA Token',
				decimals: 18,
				address: '0xd2877702675e6ceb975b4a1dff9fb7baf4c91ea9',
				logoURI: 'https://tokens.1inch.io/0xd2877702675e6ceb975b4a1dff9fb7baf4c91ea9.png',
				tags: ['tokens']
			},
			{
				symbol: 'SYNC',
				name: 'SYNC',
				decimals: 18,
				address: '0xb6ff96b8a8d214544ca0dbc9b33f7ad6503efd32',
				logoURI: 'https://tokens.1inch.io/0xb6ff96b8a8d214544ca0dbc9b33f7ad6503efd32.png',
				tags: ['tokens']
			},
			{
				symbol: 'BOTS',
				name: 'Bot Ocean',
				decimals: 18,
				address: '0xf9fbe825bfb2bf3e387af0dc18cac8d87f29dea8',
				logoURI: 'https://tokens.1inch.io/0xf9fbe825bfb2bf3e387af0dc18cac8d87f29dea8.png',
				tags: ['tokens']
			},
			{
				symbol: 'Mars',
				name: 'MarsToken',
				decimals: 18,
				address: '0x66c0dded8433c9ea86c8cf91237b14e10b4d70b7',
				logoURI: 'https://tokens.1inch.io/0x66c0dded8433c9ea86c8cf91237b14e10b4d70b7.png',
				tags: ['tokens']
			},
			{
				symbol: 'LOOT',
				name: 'NFTLootBox.com',
				decimals: 18,
				address: '0x7b3d36eb606f873a75a6ab68f8c999848b04f935',
				logoURI: 'https://tokens.1inch.io/0x7b3d36eb606f873a75a6ab68f8c999848b04f935.png',
				tags: ['tokens']
			},
			{
				symbol: 'DUCK',
				name: 'DLP Duck Token',
				decimals: 18,
				address: '0xc0ba369c8db6eb3924965e5c4fd0b4c1b91e305f',
				logoURI: 'https://tokens.1inch.io/0xc0ba369c8db6eb3924965e5c4fd0b4c1b91e305f.png',
				tags: ['tokens']
			},
			{
				symbol: 'BTMX',
				name: 'BitMax token',
				decimals: 18,
				address: '0xcca0c9c383076649604ee31b20248bc04fdf61ca',
				logoURI: 'https://tokens.1inch.io/0xcca0c9c383076649604ee31b20248bc04fdf61ca.png',
				tags: ['tokens']
			},
			{
				symbol: 'ID',
				name: 'Everest ID',
				decimals: 18,
				address: '0xebd9d99a3982d547c5bb4db7e3b1f9f14b67eb83',
				logoURI: 'https://tokens.1inch.io/0xebd9d99a3982d547c5bb4db7e3b1f9f14b67eb83.png',
				tags: ['tokens']
			},
			{
				symbol: 'SKL',
				name: 'SKALE',
				decimals: 18,
				address: '0x00c83aecc790e8a4453e5dd3b0b4b3680501a7a7',
				logoURI: 'https://tokens.1inch.io/0x00c83aecc790e8a4453e5dd3b0b4b3680501a7a7.png',
				tags: ['tokens']
			},
			{
				symbol: 'DAO',
				name: 'DAO Maker',
				decimals: 18,
				address: '0x0f51bb10119727a7e5ea3538074fb341f56b09ad',
				logoURI: 'https://tokens.1inch.io/0x0f51bb10119727a7e5ea3538074fb341f56b09ad.png',
				tags: ['tokens']
			},
			{
				symbol: 'BT',
				name: 'BT.Finance',
				decimals: 18,
				address: '0x76c5449f4950f6338a393f53cda8b53b0cd3ca3a',
				logoURI: 'https://tokens.1inch.io/0x76c5449f4950f6338a393f53cda8b53b0cd3ca3a.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'BFLY',
				name: 'Butterfly Protocol Governance Token',
				decimals: 18,
				address: '0xf680429328caaacabee69b7a9fdb21a71419c063',
				logoURI: 'https://tokens.1inch.io/0xf680429328caaacabee69b7a9fdb21a71419c063.png',
				tags: ['tokens']
			},
			{
				symbol: 'UMB',
				name: 'Umbrella',
				decimals: 18,
				address: '0x6fc13eace26590b80cccab1ba5d51890577d83b2',
				logoURI: 'https://tokens.1inch.io/0x6fc13eace26590b80cccab1ba5d51890577d83b2.png',
				tags: ['tokens']
			},
			{
				symbol: 'USDP_2',
				name: 'USDP Stablecoin',
				decimals: 18,
				address: '0x1456688345527be1f37e9e627da0837d6f08c925',
				logoURI: 'https://tokens.1inch.io/0x1456688345527be1f37e9e627da0837d6f08c925.png',
				displayedSymbol: 'USDP',
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'SOCKS',
				name: 'Unisocks Edition 0',
				decimals: 18,
				address: '0x23b608675a2b2fb1890d3abbd85c5775c51691d5',
				logoURI: 'https://tokens.1inch.io/0x23b608675a2b2fb1890d3abbd85c5775c51691d5.png',
				tags: ['tokens']
			},
			{
				symbol: 'MFI',
				name: 'MarginSwap',
				decimals: 18,
				address: '0xaa4e3edb11afa93c41db59842b29de64b72e355b',
				logoURI: 'https://tokens.1inch.io/0xaa4e3edb11afa93c41db59842b29de64b72e355b.png',
				tags: ['tokens']
			},
			{
				symbol: 'EVN',
				name: 'Evn Token',
				decimals: 18,
				address: '0x9af15d7b8776fa296019979e70a5be53c714a7ec',
				logoURI: 'https://tokens.1inch.io/0x9af15d7b8776fa296019979e70a5be53c714a7ec.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'KBTC',
				name: 'KBTC',
				decimals: 18,
				address: '0xe6c3502997f97f9bde34cb165fbce191065e068f',
				logoURI: 'https://tokens.1inch.io/0xe6c3502997f97f9bde34cb165fbce191065e068f.png',
				tags: ['tokens']
			},
			{
				symbol: 'OPEN',
				name: 'BBB',
				decimals: 18,
				address: '0x69e8b9528cabda89fe846c67675b5d73d463a916',
				logoURI: 'https://tokens.1inch.io/0x69e8b9528cabda89fe846c67675b5d73d463a916.png',
				tags: ['tokens']
			},
			{
				symbol: 'CTASK',
				name: 'CTASK Token',
				decimals: 18,
				address: '0x196c81385bc536467433014042788eb707703934',
				logoURI: 'https://tokens.1inch.io/0x196c81385bc536467433014042788eb707703934.png',
				tags: ['tokens']
			},
			{
				symbol: 'PYLON',
				name: 'PYLON',
				decimals: 18,
				address: '0xd7b7d3c0bda57723fb54ab95fd8f9ea033af37f2',
				logoURI: 'https://tokens.1inch.io/0xd7b7d3c0bda57723fb54ab95fd8f9ea033af37f2.png',
				tags: ['tokens']
			},
			{
				symbol: 'NUX',
				name: 'NUX Peanut.trade',
				decimals: 18,
				address: '0x89bd2e7e388fab44ae88bef4e1ad12b4f1e0911c',
				logoURI: 'https://tokens.1inch.io/0x89bd2e7e388fab44ae88bef4e1ad12b4f1e0911c.png',
				tags: ['tokens']
			},
			{
				symbol: 'DEPAY',
				name: 'DePay',
				decimals: 18,
				address: '0xa0bed124a09ac2bd941b10349d8d224fe3c955eb',
				logoURI: 'https://tokens.1inch.io/0xa0bed124a09ac2bd941b10349d8d224fe3c955eb.png',
				tags: ['tokens']
			},
			{
				symbol: 'ZCN',
				name: '0chain',
				decimals: 10,
				address: '0xb9ef770b6a5e12e45983c5d80545258aa38f3b78',
				logoURI: 'https://tokens.1inch.io/0xb9ef770b6a5e12e45983c5d80545258aa38f3b78.png',
				tags: ['tokens']
			},
			{
				symbol: 'UNCX',
				name: 'UniCrypt',
				decimals: 18,
				address: '0xadb2437e6f65682b85f814fbc12fec0508a7b1d0',
				logoURI: 'https://tokens.1inch.io/0xadb2437e6f65682b85f814fbc12fec0508a7b1d0.png',
				tags: ['tokens']
			},
			{
				symbol: 'WARP',
				name: 'Warp Token',
				decimals: 18,
				address: '0xed40834a13129509a89be39a9be9c0e96a0ddd71',
				logoURI: 'https://tokens.1inch.io/0xed40834a13129509a89be39a9be9c0e96a0ddd71.png',
				tags: ['tokens']
			},
			{
				symbol: 'IDLE',
				name: 'Idle',
				decimals: 18,
				address: '0x875773784af8135ea0ef43b5a374aad105c5d39e',
				logoURI: 'https://tokens.1inch.io/0x875773784af8135ea0ef43b5a374aad105c5d39e.png',
				tags: ['tokens']
			},
			{
				symbol: 'SRK',
				name: 'SparkPoint',
				decimals: 18,
				address: '0x0488401c3f535193fa8df029d9ffe615a06e74e6',
				logoURI: 'https://tokens.1inch.io/0x0488401c3f535193fa8df029d9ffe615a06e74e6.png',
				tags: ['tokens']
			},
			{
				symbol: 'GLCH',
				name: 'Glitch',
				decimals: 18,
				address: '0x038a68ff68c393373ec894015816e33ad41bd564',
				logoURI: 'https://tokens.1inch.io/0x038a68ff68c393373ec894015816e33ad41bd564.png',
				tags: ['tokens']
			},
			{
				symbol: 'UMX',
				name: 'unimex network',
				decimals: 18,
				address: '0x10be9a8dae441d276a5027936c3aaded2d82bc15',
				logoURI: 'https://tokens.1inch.io/0x10be9a8dae441d276a5027936c3aaded2d82bc15.png',
				tags: ['tokens']
			},
			{
				symbol: 'WHITE',
				name: 'Whiteheart Token',
				decimals: 18,
				address: '0x5f0e628b693018f639d10e4a4f59bd4d8b2b6b44',
				logoURI: 'https://tokens.1inch.io/0x5f0e628b693018f639d10e4a4f59bd4d8b2b6b44.png',
				tags: ['tokens']
			},
			{
				symbol: 'DENT',
				name: 'DENT',
				decimals: 8,
				address: '0x3597bfd533a99c9aa083587b074434e61eb0a258',
				logoURI: 'https://tokens.1inch.io/0x3597bfd533a99c9aa083587b074434e61eb0a258.png',
				tags: ['tokens']
			},
			{
				symbol: 'ZEFU',
				name: 'Zenfuse Trading Platform Token',
				decimals: 18,
				address: '0xb1e9157c2fdcc5a856c8da8b2d89b6c32b3c1229',
				logoURI: 'https://tokens.1inch.io/0xb1e9157c2fdcc5a856c8da8b2d89b6c32b3c1229.png',
				tags: ['tokens']
			},
			{
				symbol: 'MOONS',
				name: 'MoonTools.io',
				decimals: 18,
				address: '0x260e63d91fccc499606bae3fe945c4ed1cf56a56',
				logoURI: 'https://tokens.1inch.io/0x260e63d91fccc499606bae3fe945c4ed1cf56a56.png',
				tags: ['tokens']
			},
			{
				symbol: 'mBTC',
				name: 'mStable BTC',
				decimals: 18,
				address: '0x945facb997494cc2570096c74b5f66a3507330a1',
				logoURI: 'https://tokens.1inch.io/0x945facb997494cc2570096c74b5f66a3507330a1.png',
				tags: ['tokens', 'PEG:BTC']
			},
			{
				symbol: 'VSP',
				name: 'VesperToken',
				decimals: 18,
				address: '0x1b40183efb4dd766f11bda7a7c3ad8982e998421',
				logoURI: 'https://tokens.1inch.io/0x1b40183efb4dd766f11bda7a7c3ad8982e998421.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'SHROOM',
				name: 'shroom.finance',
				decimals: 18,
				address: '0xed0439eacf4c4965ae4613d77a5c2efe10e5f183',
				logoURI: 'https://tokens.1inch.io/0xed0439eacf4c4965ae4613d77a5c2efe10e5f183.png',
				tags: ['tokens']
			},
			{
				symbol: 'GSWAP',
				name: 'gameswap.org',
				decimals: 18,
				address: '0xaac41ec512808d64625576eddd580e7ea40ef8b2',
				logoURI: 'https://tokens.1inch.io/0xaac41ec512808d64625576eddd580e7ea40ef8b2.png',
				tags: ['tokens']
			},
			{
				symbol: 'RAI',
				name: 'Rai Reflex Index',
				decimals: 18,
				address: '0x03ab458634910aad20ef5f1c8ee96f1d6ac54919',
				logoURI: 'https://tokens.1inch.io/0x03ab458634910aad20ef5f1c8ee96f1d6ac54919.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'DOKI',
				name: 'DokiDokiFinance',
				decimals: 18,
				address: '0x9ceb84f92a0561fa3cc4132ab9c0b76a59787544',
				logoURI: 'https://tokens.1inch.io/0x9ceb84f92a0561fa3cc4132ab9c0b76a59787544.png',
				tags: ['tokens']
			},
			{
				symbol: 'ESS',
				name: 'ESSENTIA',
				decimals: 18,
				address: '0xfc05987bd2be489accf0f509e44b0145d68240f7',
				logoURI: 'https://tokens.1inch.io/0xfc05987bd2be489accf0f509e44b0145d68240f7.png',
				tags: ['tokens']
			},
			{
				symbol: 'XFT',
				name: 'Offshift',
				decimals: 18,
				address: '0xabe580e7ee158da464b51ee1a83ac0289622e6be',
				logoURI: 'https://tokens.1inch.io/0xabe580e7ee158da464b51ee1a83ac0289622e6be.png',
				tags: ['tokens']
			},
			{
				symbol: 'SEEN',
				name: 'seen.haus',
				decimals: 18,
				address: '0xca3fe04c7ee111f0bbb02c328c699226acf9fd33',
				logoURI: 'https://tokens.1inch.io/0xca3fe04c7ee111f0bbb02c328c699226acf9fd33.png',
				tags: ['tokens']
			},
			{
				symbol: 'arte',
				name: 'ethart',
				decimals: 18,
				address: '0x34612903db071e888a4dadcaa416d3ee263a87b9',
				logoURI: 'https://tokens.1inch.io/0x34612903db071e888a4dadcaa416d3ee263a87b9.png',
				tags: ['tokens']
			},
			{
				symbol: 'ALPA',
				name: 'AlpaToken',
				decimals: 18,
				address: '0x7ca4408137eb639570f8e647d9bd7b7e8717514a',
				logoURI: 'https://tokens.1inch.io/0x7ca4408137eb639570f8e647d9bd7b7e8717514a.png',
				tags: ['tokens']
			},
			{
				symbol: 'UTU',
				name: 'UTU Coin',
				decimals: 18,
				address: '0xa58a4f5c4bb043d2cc1e170613b74e767c94189b',
				logoURI: 'https://tokens.1inch.io/0xa58a4f5c4bb043d2cc1e170613b74e767c94189b.png',
				tags: ['tokens']
			},
			{
				symbol: 'AC',
				name: 'ACoconut',
				decimals: 18,
				address: '0x9a0aba393aac4dfbff4333b06c407458002c6183',
				logoURI: 'https://tokens.1inch.io/0x9a0aba393aac4dfbff4333b06c407458002c6183.png',
				tags: ['tokens']
			},
			{
				symbol: 'ROYA',
				name: 'Royale',
				decimals: 18,
				address: '0x7eaf9c89037e4814dc0d9952ac7f888c784548db',
				logoURI: 'https://tokens.1inch.io/0x7eaf9c89037e4814dc0d9952ac7f888c784548db.png',
				tags: ['tokens']
			},
			{
				symbol: 'PREMIA',
				name: 'Premia',
				decimals: 18,
				address: '0x6399c842dd2be3de30bf99bc7d1bbf6fa3650e70',
				logoURI: 'https://tokens.1inch.io/0x6399c842dd2be3de30bf99bc7d1bbf6fa3650e70.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'POOL',
				name: 'PoolTogether',
				decimals: 18,
				address: '0x0cec1a9154ff802e7934fc916ed7ca50bde6844e',
				logoURI: 'https://tokens.1inch.io/0x0cec1a9154ff802e7934fc916ed7ca50bde6844e.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'SMARTCREDIT',
				name: 'SMARTCREDIT Token',
				decimals: 18,
				address: '0x72e9d9038ce484ee986fea183f8d8df93f9ada13',
				logoURI: 'https://tokens.1inch.io/0x72e9d9038ce484ee986fea183f8d8df93f9ada13.png',
				tags: ['tokens']
			},
			{
				symbol: 'ROOT',
				name: 'RootKit',
				decimals: 18,
				address: '0xcb5f72d37685c3d5ad0bb5f982443bc8fcdf570e',
				logoURI: 'https://tokens.1inch.io/0xcb5f72d37685c3d5ad0bb5f982443bc8fcdf570e.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'REVV',
				name: 'REVV',
				decimals: 18,
				address: '0x557b933a7c2c45672b610f8954a3deb39a51a8ca',
				logoURI: 'https://tokens.1inch.io/0x557b933a7c2c45672b610f8954a3deb39a51a8ca.png',
				tags: ['tokens']
			},
			{
				symbol: 'PHNX',
				name: 'PhoenixDAO',
				decimals: 18,
				address: '0x38a2fdc11f526ddd5a607c1f251c065f40fbf2f7',
				logoURI: 'https://tokens.1inch.io/0x38a2fdc11f526ddd5a607c1f251c065f40fbf2f7.png',
				tags: ['tokens']
			},
			{
				symbol: 'KIT',
				name: 'DexKit',
				decimals: 18,
				address: '0x7866e48c74cbfb8183cd1a929cd9b95a7a5cb4f4',
				logoURI: 'https://tokens.1inch.io/0x7866e48c74cbfb8183cd1a929cd9b95a7a5cb4f4.png',
				tags: ['tokens']
			},
			{
				symbol: 'WOO',
				name: 'Wootrade Network',
				decimals: 18,
				address: '0x4691937a7508860f876c9c0a2a617e7d9e945d4b',
				logoURI: 'https://tokens.1inch.io/0x4691937a7508860f876c9c0a2a617e7d9e945d4b.png',
				tags: ['tokens']
			},
			{
				symbol: 'MOD',
				name: 'Modefi',
				decimals: 18,
				address: '0xea1ea0972fa092dd463f2968f9bb51cc4c981d71',
				logoURI: 'https://tokens.1inch.io/0xea1ea0972fa092dd463f2968f9bb51cc4c981d71.png',
				tags: ['tokens']
			},
			{
				symbol: 'ANY',
				name: 'Anyswap',
				decimals: 18,
				address: '0xf99d58e463a2e07e5692127302c20a191861b4d6',
				logoURI: 'https://tokens.1inch.io/0xf99d58e463a2e07e5692127302c20a191861b4d6.png',
				tags: ['tokens']
			},
			{
				symbol: 'RLY',
				name: 'Rally',
				decimals: 18,
				address: '0xf1f955016ecbcd7321c7266bccfb96c68ea5e49b',
				logoURI: 'https://tokens.1inch.io/0xf1f955016ecbcd7321c7266bccfb96c68ea5e49b.png',
				tags: ['tokens']
			},
			{
				symbol: 'KEX',
				name: 'KIRA Network',
				decimals: 6,
				address: '0x16980b3b4a3f9d89e33311b5aa8f80303e5ca4f8',
				logoURI: 'https://tokens.1inch.io/0x16980b3b4a3f9d89e33311b5aa8f80303e5ca4f8.png',
				tags: ['tokens']
			},
			{
				symbol: 'UOS',
				name: 'Ultra Token',
				decimals: 4,
				address: '0xd13c7342e1ef687c5ad21b27c2b65d772cab5c8c',
				logoURI: 'https://tokens.1inch.io/0xd13c7342e1ef687c5ad21b27c2b65d772cab5c8c.png',
				tags: ['tokens']
			},
			{
				symbol: 'GEO',
				name: 'GeoDB Coin',
				decimals: 18,
				address: '0x147faf8de9d8d8daae129b187f0d02d819126750',
				logoURI: 'https://tokens.1inch.io/0x147faf8de9d8d8daae129b187f0d02d819126750.png',
				tags: ['tokens']
			},
			{
				symbol: 'GET',
				name: 'GET',
				decimals: 18,
				address: '0x8a854288a5976036a725879164ca3e91d30c6a1b',
				logoURI: 'https://tokens.1inch.io/0x8a854288a5976036a725879164ca3e91d30c6a1b.png',
				tags: ['tokens']
			},
			{
				symbol: 'UniFi',
				name: 'UniFi',
				decimals: 18,
				address: '0x9e78b8274e1d6a76a0dbbf90418894df27cbceb5',
				logoURI: 'https://tokens.1inch.io/0x9e78b8274e1d6a76a0dbbf90418894df27cbceb5.png',
				tags: ['tokens']
			},
			{
				symbol: 'DDX',
				name: 'DerivaDAO',
				decimals: 18,
				address: '0x3a880652f47bfaa771908c07dd8673a787daed3a',
				logoURI: 'https://tokens.1inch.io/0x3a880652f47bfaa771908c07dd8673a787daed3a.png',
				tags: ['tokens']
			},
			{
				symbol: 'RFOX',
				name: 'RFOX',
				decimals: 18,
				address: '0xa1d6df714f91debf4e0802a542e13067f31b8262',
				logoURI: 'https://tokens.1inch.io/0xa1d6df714f91debf4e0802a542e13067f31b8262.png',
				tags: ['tokens']
			},
			{
				symbol: 'MONA',
				name: 'Monavale',
				decimals: 18,
				address: '0x275f5ad03be0fa221b4c6649b8aee09a42d9412a',
				logoURI: 'https://tokens.1inch.io/0x275f5ad03be0fa221b4c6649b8aee09a42d9412a.png',
				tags: ['tokens']
			},
			{
				symbol: 'HY',
				name: 'hybrix hydra',
				decimals: 18,
				address: '0x9b53e429b0badd98ef7f01f03702986c516a5715',
				logoURI: 'https://tokens.1inch.io/0x9b53e429b0badd98ef7f01f03702986c516a5715.png',
				tags: ['tokens']
			},
			{
				symbol: 'SUPER',
				name: 'SuperFarm',
				decimals: 18,
				address: '0xe53ec727dbdeb9e2d5456c3be40cff031ab40a55',
				logoURI: 'https://tokens.1inch.io/0xe53ec727dbdeb9e2d5456c3be40cff031ab40a55.png',
				tags: ['tokens']
			},
			{
				symbol: 'wDGLD',
				name: 'wrapped-DGLD',
				decimals: 8,
				address: '0x123151402076fc819b7564510989e475c9cd93ca',
				logoURI: 'https://tokens.1inch.io/0x123151402076fc819b7564510989e475c9cd93ca.png',
				tags: ['tokens']
			},
			{
				symbol: 'LPOOL',
				name: 'Launchpool token',
				decimals: 18,
				address: '0x6149c26cd2f7b5ccdb32029af817123f6e37df5b',
				logoURI: 'https://tokens.1inch.io/0x6149c26cd2f7b5ccdb32029af817123f6e37df5b.png',
				tags: ['tokens']
			},
			{
				symbol: 'MASK_NTWRK',
				name: 'Mask Network',
				decimals: 18,
				address: '0x69af81e73a73b40adf4f3d4223cd9b1ece623074',
				logoURI: 'https://tokens.1inch.io/0x69af81e73a73b40adf4f3d4223cd9b1ece623074.png',
				tags: ['tokens']
			},
			{
				symbol: 'XTK',
				name: 'xToken',
				decimals: 18,
				address: '0x7f3edcdd180dbe4819bd98fee8929b5cedb3adeb',
				logoURI: 'https://tokens.1inch.io/0x7f3edcdd180dbe4819bd98fee8929b5cedb3adeb.png',
				tags: ['tokens']
			},
			{
				symbol: 'SIG',
				name: 'xSigma',
				decimals: 18,
				address: '0x7777777777697cfeecf846a76326da79cc606517',
				logoURI: 'https://tokens.1inch.io/0x7777777777697cfeecf846a76326da79cc606517.png',
				tags: ['tokens']
			},
			{
				symbol: 'HOPR',
				name: 'HOPR Token',
				decimals: 18,
				address: '0xf5581dfefd8fb0e4aec526be659cfab1f8c781da',
				logoURI: 'https://tokens.1inch.io/0xf5581dfefd8fb0e4aec526be659cfab1f8c781da.png',
				tags: ['tokens']
			},
			{
				symbol: 'FRY',
				name: 'Foundry Logistics Token',
				decimals: 18,
				address: '0x6c972b70c533e2e045f333ee28b9ffb8d717be69',
				logoURI: 'https://tokens.1inch.io/0x6c972b70c533e2e045f333ee28b9ffb8d717be69.png',
				tags: ['tokens']
			},
			{
				symbol: 'RNDR',
				name: 'Render Token',
				decimals: 18,
				address: '0x6de037ef9ad2725eb40118bb1702ebb27e4aeb24',
				logoURI: 'https://tokens.1inch.io/0x6de037ef9ad2725eb40118bb1702ebb27e4aeb24.png',
				tags: ['tokens']
			},
			{
				symbol: 'OVR',
				name: 'OVR',
				decimals: 18,
				address: '0x21bfbda47a0b4b5b1248c767ee49f7caa9b23697',
				logoURI: 'https://tokens.1inch.io/0x21bfbda47a0b4b5b1248c767ee49f7caa9b23697.png',
				tags: ['tokens']
			},
			{
				symbol: 'MTLX',
				name: 'Mettalex',
				decimals: 18,
				address: '0x2e1e15c44ffe4df6a0cb7371cd00d5028e571d14',
				logoURI: 'https://tokens.1inch.io/0x2e1e15c44ffe4df6a0cb7371cd00d5028e571d14.png',
				tags: ['tokens']
			},
			{
				symbol: 'POLK',
				name: 'Polkamarkets',
				decimals: 18,
				address: '0xd478161c952357f05f0292b56012cd8457f1cfbf',
				logoURI: 'https://tokens.1inch.io/0xd478161c952357f05f0292b56012cd8457f1cfbf.png',
				tags: ['tokens']
			},
			{
				symbol: 'vBNT',
				name: 'Bancor Governance Token',
				decimals: 18,
				address: '0x48fb253446873234f2febbf9bdeaa72d9d387f94',
				logoURI: 'https://tokens.1inch.io/0x48fb253446873234f2febbf9bdeaa72d9d387f94.png',
				tags: ['tokens']
			},
			{
				symbol: 'crDAI',
				name: 'Cream Dai Stablecoin',
				decimals: 8,
				address: '0x92b767185fb3b04f881e3ac8e5b0662a027a1d9f',
				logoURI: 'https://tokens.1inch.io/0x92b767185fb3b04f881e3ac8e5b0662a027a1d9f.png',
				tags: ['tokens']
			},
			{
				symbol: 'NORD',
				name: 'Nord Token',
				decimals: 18,
				address: '0x6e9730ecffbed43fd876a264c982e254ef05a0de',
				logoURI: 'https://tokens.1inch.io/0x6e9730ecffbed43fd876a264c982e254ef05a0de.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'DOWS',
				name: 'Shadows Network',
				decimals: 18,
				address: '0x661ab0ed68000491d98c796146bcf28c20d7c559',
				logoURI: 'https://tokens.1inch.io/0x661ab0ed68000491d98c796146bcf28c20d7c559.png',
				tags: ['tokens']
			},
			{
				symbol: 'MINT',
				name: 'Public Mint',
				decimals: 18,
				address: '0x0cdf9acd87e940837ff21bb40c9fd55f68bba059',
				logoURI: 'https://tokens.1inch.io/0x0cdf9acd87e940837ff21bb40c9fd55f68bba059.png',
				tags: ['tokens']
			},
			{
				symbol: 'DEGEN',
				name: 'DEGEN Index',
				decimals: 18,
				address: '0x126c121f99e1e211df2e5f8de2d96fa36647c855',
				logoURI: 'https://tokens.1inch.io/0x126c121f99e1e211df2e5f8de2d96fa36647c855.png',
				tags: ['tokens']
			},
			{
				symbol: 'BFC',
				name: 'Bifrost',
				decimals: 18,
				address: '0x0c7d5ae016f806603cb1782bea29ac69471cab9c',
				logoURI: 'https://tokens.1inch.io/0x0c7d5ae016f806603cb1782bea29ac69471cab9c.png',
				tags: ['tokens']
			},
			{
				symbol: 'SI',
				name: 'SIREN',
				decimals: 18,
				address: '0xd23ac27148af6a2f339bd82d0e3cff380b5093de',
				logoURI: 'https://tokens.1inch.io/0xd23ac27148af6a2f339bd82d0e3cff380b5093de.png',
				tags: ['tokens']
			},
			{
				symbol: 'FONT',
				name: 'Font',
				decimals: 18,
				address: '0x4c25bdf026ea05f32713f00f73ca55857fbf6342',
				logoURI: 'https://tokens.1inch.io/0x4c25bdf026ea05f32713f00f73ca55857fbf6342.png',
				tags: ['tokens']
			},
			{
				symbol: 'MOON',
				name: 'MoonToken',
				decimals: 18,
				address: '0x68a3637ba6e75c0f66b61a42639c4e9fcd3d4824',
				logoURI: 'https://tokens.1inch.io/0x68a3637ba6e75c0f66b61a42639c4e9fcd3d4824.png',
				tags: ['tokens']
			},
			{
				symbol: 'JUP',
				name: 'Jupiter',
				decimals: 18,
				address: '0x4b1e80cac91e2216eeb63e29b957eb91ae9c2be8',
				logoURI: 'https://tokens.1inch.io/0x4b1e80cac91e2216eeb63e29b957eb91ae9c2be8.png',
				tags: ['tokens']
			},
			{
				symbol: 'NDR',
				name: 'NodeRunners',
				decimals: 18,
				address: '0x739763a258640919981f9ba610ae65492455be53',
				logoURI: 'https://tokens.1inch.io/0x739763a258640919981f9ba610ae65492455be53.png',
				tags: ['tokens']
			},
			{
				symbol: 'RAD',
				name: 'Radicle',
				decimals: 18,
				address: '0x31c8eacbffdd875c74b94b077895bd78cf1e64a3',
				logoURI: 'https://tokens.1inch.io/0x31c8eacbffdd875c74b94b077895bd78cf1e64a3.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'ALCX',
				name: 'Alchemix',
				decimals: 18,
				address: '0xdbdb4d16eda451d0503b854cf79d55697f90c8df',
				logoURI: 'https://tokens.1inch.io/0xdbdb4d16eda451d0503b854cf79d55697f90c8df.png',
				tags: ['tokens']
			},
			{
				symbol: 'BANK_1',
				name: 'Float Bank',
				decimals: 18,
				address: '0x24a6a37576377f63f194caa5f518a60f45b42921',
				logoURI: 'https://tokens.1inch.io/0x24a6a37576377f63f194caa5f518a60f45b42921.png',
				displayedSymbol: 'BANK',
				tags: ['tokens']
			},
			{
				symbol: 'MATTER',
				name: 'Antimatter.Finance Governance Token',
				decimals: 18,
				address: '0x9b99cca871be05119b2012fd4474731dd653febe',
				logoURI: 'https://tokens.1inch.io/0x1c9491865a1de77c5b6e19d2e6a5f1d7a6f2b25f_1.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'FCL',
				name: 'Fractal Protocol Token',
				decimals: 18,
				address: '0xf4d861575ecc9493420a3f5a14f85b13f0b50eb3',
				logoURI: 'https://tokens.1inch.io/0xf4d861575ecc9493420a3f5a14f85b13f0b50eb3.png',
				tags: ['tokens']
			},
			{
				symbol: 'VRA',
				name: 'VERA',
				decimals: 18,
				address: '0xf411903cbc70a74d22900a5de66a2dda66507255',
				logoURI: 'https://tokens.1inch.io/0xf411903cbc70a74d22900a5de66a2dda66507255.png',
				tags: ['tokens']
			},
			{
				symbol: 'NFTI',
				name: 'NFT INDEX',
				decimals: 18,
				address: '0xe5feeac09d36b18b3fa757e5cf3f8da6b8e27f4c',
				logoURI: 'https://tokens.1inch.io/0xe5feeac09d36b18b3fa757e5cf3f8da6b8e27f4c.png',
				tags: ['tokens']
			},
			{
				symbol: 'BDP',
				name: 'BDPToken',
				decimals: 18,
				address: '0xf3dcbc6d72a4e1892f7917b7c43b74131df8480e',
				logoURI: 'https://tokens.1inch.io/0xf3dcbc6d72a4e1892f7917b7c43b74131df8480e.png',
				tags: ['tokens']
			},
			{
				symbol: 'ERN',
				name: '@EthernityChain $ERN Token',
				decimals: 18,
				address: '0xbbc2ae13b23d715c30720f079fcd9b4a74093505',
				logoURI: 'https://tokens.1inch.io/0xbbc2ae13b23d715c30720f079fcd9b4a74093505.png',
				tags: ['tokens']
			},
			{
				symbol: 'ROBOT',
				name: 'MetaFactory',
				decimals: 18,
				address: '0xfb5453340c03db5ade474b27e68b6a9c6b2823eb',
				logoURI: 'https://tokens.1inch.io/0xfb5453340c03db5ade474b27e68b6a9c6b2823eb.png',
				tags: ['tokens']
			},
			{
				symbol: 'PAINT',
				name: 'Paint',
				decimals: 18,
				address: '0x4c6ec08cf3fc987c6c4beb03184d335a2dfc4042',
				logoURI: 'https://tokens.1inch.io/0x4c6ec08cf3fc987c6c4beb03184d335a2dfc4042.png',
				tags: ['tokens']
			},
			{
				symbol: 'RULER',
				name: 'Ruler Protocol',
				decimals: 18,
				address: '0x2aeccb42482cc64e087b6d2e5da39f5a7a7001f8',
				logoURI: 'https://tokens.1inch.io/0x2aeccb42482cc64e087b6d2e5da39f5a7a7001f8.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'xFUND',
				name: 'unification.com/xfund',
				decimals: 9,
				address: '0x892a6f9df0147e5f079b0993f486f9aca3c87881',
				logoURI: 'https://tokens.1inch.io/0x892a6f9df0147e5f079b0993f486f9aca3c87881.png',
				tags: ['tokens']
			},
			{
				symbol: 'bALPHA',
				name: 'bAlpha',
				decimals: 18,
				address: '0x7a5ce6abd131ea6b148a022cb76fc180ae3315a6',
				logoURI: 'https://tokens.1inch.io/0x7a5ce6abd131ea6b148a022cb76fc180ae3315a6.png',
				tags: ['tokens']
			},
			{
				symbol: 'CHZ',
				name: 'chiliZ',
				decimals: 18,
				address: '0x3506424f91fd33084466f402d5d97f05f8e3b4af',
				logoURI: 'https://tokens.1inch.io/0x3506424f91fd33084466f402d5d97f05f8e3b4af.png',
				tags: ['tokens']
			},
			{
				symbol: 'INV',
				name: 'Inverse DAO',
				decimals: 18,
				address: '0x41d5d79431a913c4ae7d69a668ecdfe5ff9dfb68',
				logoURI: 'https://tokens.1inch.io/0x41d5d79431a913c4ae7d69a668ecdfe5ff9dfb68.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'GOVI',
				name: 'GOVI',
				decimals: 18,
				address: '0xeeaa40b28a2d1b0b08f6f97bb1dd4b75316c6107',
				logoURI: 'https://tokens.1inch.io/0xeeaa40b28a2d1b0b08f6f97bb1dd4b75316c6107.png',
				tags: ['tokens']
			},
			{
				symbol: 'BEPRO',
				name: 'BetProtocolToken',
				decimals: 18,
				address: '0xcf3c8be2e2c42331da80ef210e9b1b307c03d36a',
				logoURI: 'https://tokens.1inch.io/0xcf3c8be2e2c42331da80ef210e9b1b307c03d36a.png',
				tags: ['tokens']
			},
			{
				symbol: 'NFY',
				name: 'Non-Fungible Yearn',
				decimals: 18,
				address: '0x1cbb83ebcd552d5ebf8131ef8c9cd9d9bab342bc',
				logoURI: 'https://tokens.1inch.io/0x1cbb83ebcd552d5ebf8131ef8c9cd9d9bab342bc.png',
				tags: ['tokens']
			},
			{
				symbol: 'DUCK_UNIT',
				name: 'Unit Protocol',
				decimals: 18,
				address: '0x92e187a03b6cd19cb6af293ba17f2745fd2357d5',
				logoURI: 'https://tokens.1inch.io/0x92e187a03b6cd19cb6af293ba17f2745fd2357d5.png',
				tags: ['tokens']
			},
			{
				symbol: 'DFX',
				name: 'DFX Token',
				decimals: 18,
				address: '0x888888435fde8e7d4c54cab67f206e4199454c60',
				logoURI: 'https://tokens.1inch.io/0x888888435fde8e7d4c54cab67f206e4199454c60.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'B20',
				name: 'B.20',
				decimals: 18,
				address: '0xc4de189abf94c57f396bd4c52ab13b954febefd8',
				logoURI: 'https://tokens.1inch.io/0xc4de189abf94c57f396bd4c52ab13b954febefd8.png',
				tags: ['tokens']
			},
			{
				symbol: 'TAP',
				name: 'Tapmydata',
				decimals: 18,
				address: '0x7f1f2d3dfa99678675ece1c243d3f7bc3746db5d',
				logoURI: 'https://tokens.1inch.io/0x7f1f2d3dfa99678675ece1c243d3f7bc3746db5d.png',
				tags: ['tokens']
			},
			{
				symbol: 'TACO',
				name: 'Tacos',
				decimals: 18,
				address: '0x00d1793d7c3aae506257ba985b34c76aaf642557',
				logoURI: 'https://tokens.1inch.io/0x00d1793d7c3aae506257ba985b34c76aaf642557.png',
				tags: ['tokens']
			},
			{
				symbol: 'ARCX_OLD',
				name: 'ARC Governance Token (Old)',
				decimals: 18,
				address: '0xed30dd7e50edf3581ad970efc5d9379ce2614adb',
				logoURI: 'https://tokens.1inch.io/0xed30dd7e50edf3581ad970efc5d9379ce2614adb.png',
				tags: ['tokens']
			},
			{
				symbol: 'STABLEx',
				name: 'ARC STABLEx',
				decimals: 18,
				address: '0xcd91538b91b4ba7797d39a2f66e63810b50a33d0',
				logoURI: 'https://tokens.1inch.io/0xcd91538b91b4ba7797d39a2f66e63810b50a33d0.png',
				tags: ['tokens']
			},
			{
				symbol: 'DUSK',
				name: 'Dusk Network',
				decimals: 18,
				address: '0x940a2db1b7008b6c776d4faaca729d6d4a4aa551',
				logoURI: 'https://tokens.1inch.io/0x940a2db1b7008b6c776d4faaca729d6d4a4aa551.png',
				tags: ['tokens']
			},
			{
				symbol: 'ETH2x-FLI',
				name: 'ETH 2x Flexible Leverage Index',
				decimals: 18,
				address: '0xaa6e8127831c9de45ae56bb1b0d4d4da6e5665bd',
				logoURI: 'https://tokens.1inch.io/0xaa6e8127831c9de45ae56bb1b0d4d4da6e5665bd.png',
				tags: ['tokens']
			},
			{
				symbol: 'FTX Token',
				name: 'FTT',
				decimals: 18,
				address: '0x50d1c9771902476076ecfc8b2a83ad6b9355a4c9',
				logoURI: 'https://tokens.1inch.io/0x50d1c9771902476076ecfc8b2a83ad6b9355a4c9.png',
				tags: ['tokens']
			},
			{
				symbol: 'LCX',
				name: 'LCX',
				decimals: 18,
				address: '0x037a54aab062628c9bbae1fdb1583c195585fe41',
				logoURI: 'https://tokens.1inch.io/0x037a54aab062628c9bbae1fdb1583c195585fe41.png',
				tags: ['tokens']
			},
			{
				symbol: 'INSUR',
				name: 'InsurAce',
				decimals: 18,
				address: '0x544c42fbb96b39b21df61cf322b5edc285ee7429',
				logoURI: 'https://tokens.1inch.io/0x544c42fbb96b39b21df61cf322b5edc285ee7429.png',
				tags: ['tokens']
			},
			{
				symbol: 'CGG',
				name: 'ChainGuardians Governance Token',
				decimals: 18,
				address: '0x1fe24f25b1cf609b9c4e7e12d802e3640dfa5e43',
				logoURI: 'https://tokens.1inch.io/0x1fe24f25b1cf609b9c4e7e12d802e3640dfa5e43.png',
				tags: ['tokens']
			},
			{
				symbol: 'CRU',
				name: 'CRUST',
				decimals: 18,
				address: '0x32a7c02e79c4ea1008dd6564b35f131428673c41',
				logoURI: 'https://tokens.1inch.io/0x32a7c02e79c4ea1008dd6564b35f131428673c41.png',
				tags: ['tokens']
			},
			{
				symbol: 'ALICE',
				name: 'ALICE',
				decimals: 6,
				address: '0xac51066d7bec65dc4589368da368b212745d63e8',
				logoURI: 'https://tokens.1inch.io/0xac51066d7bec65dc4589368da368b212745d63e8.png',
				tags: ['tokens']
			},
			{
				symbol: 'TOWER',
				name: 'TOWER',
				decimals: 18,
				address: '0x1c9922314ed1415c95b9fd453c3818fd41867d0b',
				logoURI: 'https://tokens.1inch.io/0x1c9922314ed1415c95b9fd453c3818fd41867d0b.png',
				tags: ['tokens']
			},
			{
				symbol: 'YIELD',
				name: 'Yield Protocol',
				decimals: 18,
				address: '0xa8b61cff52564758a204f841e636265bebc8db9b',
				logoURI: 'https://tokens.1inch.io/0xa8b61cff52564758a204f841e636265bebc8db9b.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'KONO',
				name: 'Konomi',
				decimals: 18,
				address: '0x850aab69f0e0171a9a49db8be3e71351c8247df4',
				logoURI: 'https://tokens.1inch.io/0x850aab69f0e0171a9a49db8be3e71351c8247df4.png',
				tags: ['tokens']
			},
			{
				symbol: 'SOAR',
				name: 'SOAR.FI',
				decimals: 9,
				address: '0xbae5f2d8a1299e5c4963eaff3312399253f27ccb',
				logoURI: 'https://tokens.1inch.io/0xbae5f2d8a1299e5c4963eaff3312399253f27ccb.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'DOV',
				name: 'DOVU',
				decimals: 18,
				address: '0xac3211a5025414af2866ff09c23fc18bc97e79b1',
				logoURI: 'https://tokens.1inch.io/0xac3211a5025414af2866ff09c23fc18bc97e79b1.png',
				tags: ['tokens']
			},
			{
				symbol: 'JGN',
				name: 'Juggernaut DeFi',
				decimals: 18,
				address: '0x73374ea518de7addd4c2b624c0e8b113955ee041',
				logoURI: 'https://tokens.1inch.io/0x73374ea518de7addd4c2b624c0e8b113955ee041.png',
				tags: ['tokens']
			},
			{
				symbol: 'HOGE',
				name: 'hoge.finance',
				decimals: 9,
				address: '0xfad45e47083e4607302aa43c65fb3106f1cd7607',
				logoURI: 'https://tokens.1inch.io/0xfad45e47083e4607302aa43c65fb3106f1cd7607.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'NOW',
				name: 'ChangeNOW',
				decimals: 8,
				address: '0xe9a95d175a5f4c9369f3b74222402eb1b837693b',
				logoURI: 'https://tokens.1inch.io/0xe9a95d175a5f4c9369f3b74222402eb1b837693b.png',
				tags: ['tokens']
			},
			{
				symbol: 'HTRE',
				name: 'HodlTree',
				decimals: 18,
				address: '0xdea67845a51e24461d5fed8084e69b426af3d5db',
				logoURI: 'https://tokens.1inch.io/0xdea67845a51e24461d5fed8084e69b426af3d5db.png',
				tags: ['tokens']
			},
			{
				symbol: 'PKF',
				name: 'PolkaFoundry',
				decimals: 18,
				address: '0x8b39b70e39aa811b69365398e0aace9bee238aeb',
				logoURI: 'https://tokens.1inch.io/0x8b39b70e39aa811b69365398e0aace9bee238aeb.png',
				tags: ['tokens']
			},
			{
				symbol: 'EXRT',
				name: 'EXRT',
				decimals: 8,
				address: '0xb20043f149817bff5322f1b928e89abfc65a9925',
				logoURI: 'https://tokens.1inch.io/0xb20043f149817bff5322f1b928e89abfc65a9925.png',
				tags: ['tokens']
			},
			{
				symbol: 'DERI',
				name: 'Deri',
				decimals: 18,
				address: '0xa487bf43cf3b10dffc97a9a744cbb7036965d3b9',
				logoURI: 'https://tokens.1inch.io/0xa487bf43cf3b10dffc97a9a744cbb7036965d3b9.png',
				tags: ['tokens']
			},
			{
				symbol: 'BCUG',
				name: 'Blockchain Cuties Universe Governance Token',
				decimals: 18,
				address: '0x14da7b27b2e0fedefe0a664118b0c9bc68e2e9af',
				logoURI: 'https://tokens.1inch.io/0x14da7b27b2e0fedefe0a664118b0c9bc68e2e9af.png',
				tags: ['tokens']
			},
			{
				symbol: 'LABS',
				name: 'LABS Group',
				decimals: 18,
				address: '0x8b0e42f366ba502d787bb134478adfae966c8798',
				logoURI: 'https://tokens.1inch.io/0x8b0e42f366ba502d787bb134478adfae966c8798.png',
				tags: ['tokens']
			},
			{
				symbol: 'KINE',
				name: 'Kine Governance Token',
				decimals: 18,
				address: '0xcbfef8fdd706cde6f208460f2bf39aa9c785f05d',
				logoURI: 'https://tokens.1inch.io/0xcbfef8fdd706cde6f208460f2bf39aa9c785f05d.png',
				tags: ['tokens']
			},
			{
				symbol: 'HAPI',
				name: 'HAPI',
				decimals: 18,
				address: '0xd9c2d319cd7e6177336b0a9c93c21cb48d84fb54',
				logoURI: 'https://tokens.1inch.io/0xd9c2d319cd7e6177336b0a9c93c21cb48d84fb54.png',
				tags: ['tokens']
			},
			{
				symbol: 'yveCRV-DAO',
				name: 'veCRV-DAO yVault',
				decimals: 18,
				address: '0xc5bddf9843308380375a611c18b50fb9341f502a',
				logoURI: 'https://tokens.1inch.io/0xc5bddf9843308380375a611c18b50fb9341f502a.png',
				tags: ['tokens']
			},
			{
				symbol: 'K21',
				name: 'k21.kanon.art',
				decimals: 18,
				address: '0xb9d99c33ea2d86ec5ec6b8a4dd816ebba64404af',
				logoURI: 'https://tokens.1inch.io/0xb9d99c33ea2d86ec5ec6b8a4dd816ebba64404af.png',
				tags: ['tokens']
			},
			{
				symbol: 'UNN',
				name: 'UNION Protocol Governance Token',
				decimals: 18,
				address: '0x226f7b842e0f0120b7e194d05432b3fd14773a9d',
				logoURI: 'https://tokens.1inch.io/0x226f7b842e0f0120b7e194d05432b3fd14773a9d.png',
				tags: ['tokens']
			},
			{
				symbol: 'HBT',
				name: 'Habitat Token',
				decimals: 10,
				address: '0x0ace32f6e87ac1457a5385f8eb0208f37263b415',
				logoURI: 'https://tokens.1inch.io/0x0ace32f6e87ac1457a5385f8eb0208f37263b415.png',
				tags: ['tokens']
			},
			{
				symbol: 'CATE',
				name: 'Cash Tech',
				decimals: 18,
				address: '0xa42f266684ac2ad6ecb00df95b1c76efbb6f136c',
				logoURI: 'https://tokens.1inch.io/0xa42f266684ac2ad6ecb00df95b1c76efbb6f136c.png',
				tags: ['tokens']
			},
			{
				symbol: 'DORA',
				name: 'Dorayaki',
				decimals: 18,
				address: '0xbc4171f45ef0ef66e76f979df021a34b46dcc81d',
				logoURI: 'https://tokens.1inch.io/0xbc4171f45ef0ef66e76f979df021a34b46dcc81d.png',
				tags: ['tokens']
			},
			{
				symbol: 'erowan',
				name: 'erowan',
				decimals: 18,
				address: '0x07bac35846e5ed502aa91adf6a9e7aa210f2dcbe',
				logoURI: 'https://tokens.1inch.io/0x07bac35846e5ed502aa91adf6a9e7aa210f2dcbe.png',
				tags: ['tokens']
			},
			{
				symbol: 'SNTVT',
				name: 'Sentivate',
				decimals: 18,
				address: '0x7865af71cf0b288b4e7f654f4f7851eb46a2b7f8',
				logoURI: 'https://tokens.1inch.io/0x7865af71cf0b288b4e7f654f4f7851eb46a2b7f8.png',
				tags: ['tokens']
			},
			{
				symbol: 'CHAIN',
				name: 'Chain Games',
				decimals: 18,
				address: '0xc4c2614e694cf534d407ee49f8e44d125e4681c4',
				logoURI: 'https://tokens.1inch.io/0xc4c2614e694cf534d407ee49f8e44d125e4681c4.png',
				tags: ['tokens']
			},
			{
				symbol: 'GLQ',
				name: 'GraphLinq',
				decimals: 18,
				address: '0x9f9c8ec3534c3ce16f928381372bfbfbfb9f4d24',
				logoURI: 'https://tokens.1inch.io/0x9f9c8ec3534c3ce16f928381372bfbfbfb9f4d24.png',
				tags: ['tokens']
			},
			{
				symbol: 'LYM',
				name: 'Lympo tokens',
				decimals: 18,
				address: '0xc690f7c7fcffa6a82b79fab7508c466fefdfc8c5',
				logoURI: 'https://tokens.1inch.io/0xc690f7c7fcffa6a82b79fab7508c466fefdfc8c5.png',
				tags: ['tokens']
			},
			{
				symbol: 'VIDYA',
				name: 'Vidya',
				decimals: 18,
				address: '0x3d3d35bb9bec23b06ca00fe472b50e7a4c692c30',
				logoURI: 'https://tokens.1inch.io/0x3d3d35bb9bec23b06ca00fe472b50e7a4c692c30.png',
				tags: ['tokens']
			},
			{
				symbol: 'FIRE',
				name: 'Fire Protocol',
				decimals: 8,
				address: '0xf921ae2dac5fa128dc0f6168bf153ea0943d2d43',
				logoURI: 'https://tokens.1inch.io/0xf921ae2dac5fa128dc0f6168bf153ea0943d2d43.png',
				tags: ['tokens']
			},
			{
				symbol: 'DAFI',
				name: 'DAFI Token',
				decimals: 18,
				address: '0xfc979087305a826c2b2a0056cfaba50aad3e6439',
				logoURI: 'https://tokens.1inch.io/0xfc979087305a826c2b2a0056cfaba50aad3e6439.png',
				tags: ['tokens']
			},
			{
				symbol: 'ODDZ',
				name: 'OddzToken',
				decimals: 18,
				address: '0xcd2828fc4d8e8a0ede91bb38cf64b1a81de65bf6',
				logoURI: 'https://tokens.1inch.io/0xcd2828fc4d8e8a0ede91bb38cf64b1a81de65bf6.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'EPAN',
				name: 'Paypolitan Token',
				decimals: 18,
				address: '0x72630b1e3b42874bf335020ba0249e3e9e47bafc',
				logoURI: 'https://tokens.1inch.io/0x72630b1e3b42874bf335020ba0249e3e9e47bafc.png',
				tags: ['tokens']
			},
			{
				symbol: 'ARA',
				name: 'Ara Token',
				decimals: 18,
				address: '0xa92e7c82b11d10716ab534051b271d2f6aef7df5',
				logoURI: 'https://tokens.1inch.io/0xa92e7c82b11d10716ab534051b271d2f6aef7df5.png',
				tags: ['tokens']
			},
			{
				symbol: 'BOND_finance',
				name: 'bonded.finance',
				decimals: 8,
				address: '0x5dc02ea99285e17656b8350722694c35154db1e8',
				logoURI: 'https://tokens.1inch.io/0x5dc02ea99285e17656b8350722694c35154db1e8.png',
				tags: ['tokens']
			},
			{
				symbol: 'vETH',
				name: 'Voucher Ethereum',
				decimals: 18,
				address: '0xc3d088842dcf02c13699f936bb83dfbbc6f721ab',
				logoURI: 'https://tokens.1inch.io/0xc3d088842dcf02c13699f936bb83dfbbc6f721ab.png',
				tags: ['tokens']
			},
			{
				symbol: 'AMLT',
				name: 'AMLT',
				decimals: 18,
				address: '0xca0e7269600d353f70b14ad118a49575455c0f2f',
				logoURI: 'https://tokens.1inch.io/0xca0e7269600d353f70b14ad118a49575455c0f2f.png',
				tags: ['tokens']
			},
			{
				symbol: 'VTX',
				name: 'Vortex DeFi',
				decimals: 18,
				address: '0xceb286c9604c542d3cc08b41aa6c9675b078a832',
				logoURI: 'https://tokens.1inch.io/0xceb286c9604c542d3cc08b41aa6c9675b078a832.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'TRIBE',
				name: 'Tribe',
				decimals: 18,
				address: '0xc7283b66eb1eb5fb86327f08e1b5816b0720212b',
				logoURI: 'https://tokens.1inch.io/0xc7283b66eb1eb5fb86327f08e1b5816b0720212b.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'FEI',
				name: 'Fei USD',
				decimals: 18,
				address: '0x956f47f50a910163d8bf957cf5846d573e7f87ca',
				logoURI: 'https://tokens.1inch.io/0x956f47f50a910163d8bf957cf5846d573e7f87ca.png',
				eip2612: true,
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'XSGD',
				name: 'XSGD',
				decimals: 6,
				address: '0x70e8de73ce538da2beed35d14187f6959a8eca96',
				logoURI: 'https://tokens.1inch.io/0x70e8de73ce538da2beed35d14187f6959a8eca96.png',
				tags: ['tokens']
			},
			{
				symbol: 'AIOZ',
				name: 'AIOZ Network',
				decimals: 18,
				address: '0x626e8036deb333b408be468f951bdb42433cbf18',
				logoURI: 'https://tokens.1inch.io/0x626e8036deb333b408be468f951bdb42433cbf18.png',
				tags: ['tokens']
			},
			{
				symbol: 'SPH',
				name: 'Spheroid',
				decimals: 18,
				address: '0xa0cf46eb152656c7090e769916eb44a138aaa406',
				logoURI: 'https://tokens.1inch.io/0xa0cf46eb152656c7090e769916eb44a138aaa406.png',
				tags: ['tokens']
			},
			{
				symbol: 'PMON',
				name: 'Polkamon',
				decimals: 18,
				address: '0x1796ae0b0fa4862485106a0de9b654efe301d0b2',
				logoURI: 'https://tokens.1inch.io/0x1796ae0b0fa4862485106a0de9b654efe301d0b2.png',
				tags: ['tokens']
			},
			{
				symbol: 'SYLO',
				name: 'Sylo',
				decimals: 18,
				address: '0xf293d23bf2cdc05411ca0eddd588eb1977e8dcd4',
				logoURI: 'https://tokens.1inch.io/0xf293d23bf2cdc05411ca0eddd588eb1977e8dcd4.png',
				tags: ['tokens']
			},
			{
				symbol: 'EMB',
				name: 'Emblem',
				decimals: 8,
				address: '0xdb0acc14396d108b3c5574483acb817855c9dc8d',
				logoURI: 'https://tokens.1inch.io/0xdb0acc14396d108b3c5574483acb817855c9dc8d.png',
				tags: ['tokens']
			},
			{
				symbol: 'URQA',
				name: 'UREEQA Token',
				decimals: 18,
				address: '0x1735db6ab5baa19ea55d0adceed7bcdc008b3136',
				logoURI: 'https://tokens.1inch.io/0x1735db6ab5baa19ea55d0adceed7bcdc008b3136.png',
				tags: ['tokens']
			},
			{
				symbol: 'LPL',
				name: 'LinkPool',
				decimals: 18,
				address: '0x99295f1141d58a99e939f7be6bbe734916a875b8',
				logoURI: 'https://tokens.1inch.io/0x99295f1141d58a99e939f7be6bbe734916a875b8.png',
				tags: ['tokens']
			},
			{
				symbol: 'XCUR',
				name: 'Curate',
				decimals: 8,
				address: '0xe1c7e30c42c24582888c758984f6e382096786bd',
				logoURI: 'https://tokens.1inch.io/0xe1c7e30c42c24582888c758984f6e382096786bd.png',
				tags: ['tokens']
			},
			{
				symbol: 'COOK',
				name: 'Cook Token',
				decimals: 18,
				address: '0xff75ced57419bcaebe5f05254983b013b0646ef5',
				logoURI: 'https://tokens.1inch.io/0xff75ced57419bcaebe5f05254983b013b0646ef5.png',
				tags: ['tokens']
			},
			{
				symbol: 'CELL',
				name: 'Cellframe Token',
				decimals: 18,
				address: '0x26c8afbbfe1ebaca03c2bb082e69d0476bffe099',
				logoURI: 'https://tokens.1inch.io/0x26c8afbbfe1ebaca03c2bb082e69d0476bffe099.png',
				tags: ['tokens']
			},
			{
				symbol: 'MAD',
				name: 'MADToken',
				decimals: 18,
				address: '0x5b09a0371c1da44a8e24d36bf5deb1141a84d875',
				logoURI: 'https://tokens.1inch.io/0x5b09a0371c1da44a8e24d36bf5deb1141a84d875.png',
				tags: ['tokens']
			},
			{
				symbol: 'CONV',
				name: 'Convergence',
				decimals: 18,
				address: '0xc834fa996fa3bec7aad3693af486ae53d8aa8b50',
				logoURI: 'https://tokens.1inch.io/0xc834fa996fa3bec7aad3693af486ae53d8aa8b50.png',
				tags: ['tokens']
			},
			{
				symbol: 'BASv2',
				name: 'BASv2',
				decimals: 18,
				address: '0x106538cc16f938776c7c180186975bca23875287',
				logoURI: 'https://tokens.1inch.io/0x106538cc16f938776c7c180186975bca23875287.png',
				tags: ['tokens']
			},
			{
				symbol: 'SWM',
				name: 'SWARM',
				decimals: 18,
				address: '0x3505f494c3f0fed0b594e01fa41dd3967645ca39',
				logoURI: 'https://tokens.1inch.io/0x3505f494c3f0fed0b594e01fa41dd3967645ca39.png',
				tags: ['tokens']
			},
			{
				symbol: 'EDDA',
				name: 'EDDA',
				decimals: 18,
				address: '0xfbbe9b1142c699512545f47937ee6fae0e4b0aa9',
				logoURI: 'https://tokens.1inch.io/0xfbbe9b1142c699512545f47937ee6fae0e4b0aa9.png',
				tags: ['tokens']
			},
			{
				symbol: 'TIDAL',
				name: 'Tidal Token',
				decimals: 18,
				address: '0x29cbd0510eec0327992cd6006e63f9fa8e7f33b7',
				logoURI: 'https://tokens.1inch.io/0x29cbd0510eec0327992cd6006e63f9fa8e7f33b7.png',
				tags: ['tokens']
			},
			{
				symbol: 'DRC_2',
				name: 'Dracula Token',
				decimals: 18,
				address: '0xb78b3320493a4efaa1028130c5ba26f0b6085ef8',
				logoURI: 'https://tokens.1inch.io/0xb78b3320493a4efaa1028130c5ba26f0b6085ef8.png',
				tags: ['tokens']
			},
			{
				symbol: 'XYO',
				name: 'XY Oracle',
				decimals: 18,
				address: '0x55296f69f40ea6d20e478533c15a6b08b654e758',
				logoURI: 'https://tokens.1inch.io/0x55296f69f40ea6d20e478533c15a6b08b654e758.png',
				tags: ['tokens']
			},
			{
				symbol: 'ARCONA',
				name: 'Arcona Distribution Contract',
				decimals: 18,
				address: '0x0f71b8de197a1c84d31de0f1fa7926c365f052b3',
				logoURI: 'https://tokens.1inch.io/0x0f71b8de197a1c84d31de0f1fa7926c365f052b3.png',
				tags: ['tokens']
			},
			{
				symbol: 'DPR',
				name: 'Deeper Network',
				decimals: 18,
				address: '0xf3ae5d769e153ef72b4e3591ac004e89f48107a1',
				logoURI: 'https://tokens.1inch.io/0xf3ae5d769e153ef72b4e3591ac004e89f48107a1.png',
				tags: ['tokens']
			},
			{
				symbol: 'GAINS',
				name: 'Gains',
				decimals: 18,
				address: '0xd9b312d77bc7bed9b9cecb56636300bed4fe5ce9',
				logoURI: 'https://tokens.1inch.io/0xd9b312d77bc7bed9b9cecb56636300bed4fe5ce9.png',
				tags: ['tokens']
			},
			{
				symbol: 'LUSD',
				name: 'LUSD Stablecoin',
				decimals: 18,
				address: '0x5f98805a4e8be255a32880fdec7f6728c6568ba0',
				logoURI: 'https://tokens.1inch.io/0x5f98805a4e8be255a32880fdec7f6728c6568ba0.png',
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'GS',
				name: 'Gen Shards',
				decimals: 18,
				address: '0xe0b9a2c3e9f40cf74b2c7f591b2b0cca055c3112',
				logoURI: 'https://tokens.1inch.io/0xe0b9a2c3e9f40cf74b2c7f591b2b0cca055c3112.png',
				tags: ['tokens']
			},
			{
				symbol: 'MIST',
				name: 'Alchemist',
				decimals: 18,
				address: '0x88acdd2a6425c3faae4bc9650fd7e27e0bebb7ab',
				logoURI: 'https://tokens.1inch.io/0x88acdd2a6425c3faae4bc9650fd7e27e0bebb7ab.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'CARDS',
				name: 'CARD.STARTER',
				decimals: 18,
				address: '0x3d6f0dea3ac3c607b3998e6ce14b6350721752d9',
				logoURI: 'https://tokens.1inch.io/0x3d6f0dea3ac3c607b3998e6ce14b6350721752d9.png',
				tags: ['tokens']
			},
			{
				symbol: 'EBOX',
				name: 'ethbox Token',
				decimals: 18,
				address: '0x33840024177a7daca3468912363bed8b425015c5',
				logoURI: 'https://tokens.1inch.io/0x33840024177a7daca3468912363bed8b425015c5.png',
				tags: ['tokens']
			},
			{
				symbol: 'PRE',
				name: 'Presearch',
				decimals: 18,
				address: '0xec213f83defb583af3a000b1c0ada660b1902a0f',
				logoURI: 'https://tokens.1inch.io/0xec213f83defb583af3a000b1c0ada660b1902a0f.png',
				tags: ['tokens']
			},
			{
				symbol: 'PUSH',
				name: 'Ethereum Push Notification Service',
				decimals: 18,
				address: '0xf418588522d5dd018b425e472991e52ebbeeeeee',
				logoURI: 'https://tokens.1inch.io/0xf418588522d5dd018b425e472991e52ebbeeeeee.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'ZORA',
				name: 'Zoracles',
				decimals: 9,
				address: '0xd8e3fb3b08eba982f2754988d70d57edc0055ae6',
				logoURI: 'https://tokens.1inch.io/0xd8e3fb3b08eba982f2754988d70d57edc0055ae6.png',
				tags: ['tokens']
			},
			{
				symbol: 'BOSON',
				name: 'Boson Token',
				decimals: 18,
				address: '0xc477d038d5420c6a9e0b031712f61c5120090de9',
				logoURI: 'https://tokens.1inch.io/0xc477d038d5420c6a9e0b031712f61c5120090de9.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'UBI',
				name: 'Universal Basic Income',
				decimals: 18,
				address: '0xdd1ad9a21ce722c151a836373babe42c868ce9a4',
				logoURI: 'https://tokens.1inch.io/0xdd1ad9a21ce722c151a836373babe42c868ce9a4.png',
				tags: ['tokens']
			},
			{
				symbol: 'DG',
				name: 'DeGate Token',
				decimals: 18,
				address: '0x53c8395465a84955c95159814461466053dedede',
				logoURI: 'https://tokens.1inch.io/0x53c8395465a84955c95159814461466053dedede.png',
				tags: ['tokens']
			},
			{
				symbol: 'TCAP',
				name: 'TCAP Token',
				decimals: 18,
				address: '0x16c52ceece2ed57dad87319d91b5e3637d50afa4',
				logoURI: 'https://tokens.1inch.io/0x16c52ceece2ed57dad87319d91b5e3637d50afa4.png',
				tags: ['tokens']
			},
			{
				symbol: 'BASK',
				name: 'BasketDAO Gov',
				decimals: 18,
				address: '0x44564d0bd94343f72e3c8a0d22308b7fa71db0bb',
				logoURI: 'https://tokens.1inch.io/0x44564d0bd94343f72e3c8a0d22308b7fa71db0bb.png',
				tags: ['tokens']
			},
			{
				symbol: 'NKN',
				name: 'NKN',
				decimals: 18,
				address: '0x5cf04716ba20127f1e2297addcf4b5035000c9eb',
				logoURI: 'https://tokens.1inch.io/0x5cf04716ba20127f1e2297addcf4b5035000c9eb.png',
				tags: ['tokens']
			},
			{
				symbol: 'FOUR',
				name: 'The 4th Pillar Token',
				decimals: 18,
				address: '0x4730fb1463a6f1f44aeb45f6c5c422427f37f4d0',
				logoURI: 'https://tokens.1inch.io/0x4730fb1463a6f1f44aeb45f6c5c422427f37f4d0.png',
				tags: ['tokens']
			},
			{
				symbol: 'FORTH',
				name: 'Ampleforth Governance',
				decimals: 18,
				address: '0x77fba179c79de5b7653f68b5039af940ada60ce0',
				logoURI: 'https://tokens.1inch.io/0x77fba179c79de5b7653f68b5039af940ada60ce0.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'BLES',
				name: 'Blind Boxes Token',
				decimals: 18,
				address: '0xe796d6ca1ceb1b022ece5296226bf784110031cd',
				logoURI: 'https://tokens.1inch.io/0xe796d6ca1ceb1b022ece5296226bf784110031cd.png',
				tags: ['tokens']
			},
			{
				symbol: 'SWISE',
				name: 'StakeWise',
				decimals: 18,
				address: '0x48c3399719b582dd63eb5aadf12a40b4c3f52fa2',
				logoURI: 'https://tokens.1inch.io/0x48c3399719b582dd63eb5aadf12a40b4c3f52fa2.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'KNC',
				name: 'Kyber Network Crystal v2',
				decimals: 18,
				address: '0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202',
				logoURI: 'https://tokens.1inch.io/0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202.png',
				tags: ['tokens']
			},
			{
				symbol: 'YAXIS',
				name: 'yAxis V2',
				decimals: 18,
				address: '0x0ada190c81b814548ddc2f6adc4a689ce7c1fe73',
				logoURI: 'https://tokens.1inch.io/0x0ada190c81b814548ddc2f6adc4a689ce7c1fe73.png',
				tags: ['tokens']
			},
			{
				symbol: 'ORBS',
				name: 'Orbs',
				decimals: 18,
				address: '0xff56cc6b1e6ded347aa0b7676c85ab0b3d08b0fa',
				logoURI: 'https://tokens.1inch.io/0xff56cc6b1e6ded347aa0b7676c85ab0b3d08b0fa.png',
				tags: ['tokens']
			},
			{
				symbol: 'WXT',
				name: 'Wirex Token',
				decimals: 18,
				address: '0xa02120696c7b8fe16c09c749e4598819b2b0e915',
				logoURI: 'https://tokens.1inch.io/0xa02120696c7b8fe16c09c749e4598819b2b0e915.png',
				tags: ['tokens']
			},
			{
				symbol: 'BAG',
				name: 'BAG',
				decimals: 18,
				address: '0x28a06c02287e657ec3f8e151a13c36a1d43814b0',
				logoURI: 'https://tokens.1inch.io/0x28a06c02287e657ec3f8e151a13c36a1d43814b0.png',
				tags: ['tokens']
			},
			{
				symbol: 'OCC',
				name: 'OCC',
				decimals: 18,
				address: '0x2f109021afe75b949429fe30523ee7c0d5b27207',
				logoURI: 'https://tokens.1inch.io/0x2f109021afe75b949429fe30523ee7c0d5b27207.png',
				tags: ['tokens']
			},
			{
				symbol: 'ILV',
				name: 'Illuvium',
				decimals: 18,
				address: '0x767fe9edc9e0df98e07454847909b5e959d7ca0e',
				logoURI: 'https://tokens.1inch.io/0x767fe9edc9e0df98e07454847909b5e959d7ca0e.png',
				tags: ['tokens']
			},
			{
				symbol: 'eRSDL',
				name: 'UnFederalReserveToken',
				decimals: 18,
				address: '0x5218e472cfcfe0b64a064f055b43b4cdc9efd3a6',
				logoURI: 'https://tokens.1inch.io/0x5218e472cfcfe0b64a064f055b43b4cdc9efd3a6.png',
				tags: ['tokens']
			},
			{
				symbol: 'ICE',
				name: 'IceToken',
				decimals: 18,
				address: '0xf16e81dce15b08f326220742020379b855b87df9',
				logoURI: 'https://tokens.1inch.io/0xf16e81dce15b08f326220742020379b855b87df9.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'XEND',
				name: 'XEND',
				decimals: 18,
				address: '0xe4cfe9eaa8cdb0942a80b7bc68fd8ab0f6d44903',
				logoURI: 'https://tokens.1inch.io/0xe4cfe9eaa8cdb0942a80b7bc68fd8ab0f6d44903.png',
				tags: ['tokens']
			},
			{
				symbol: 'MARSH',
				name: 'UnmarshalToken',
				decimals: 18,
				address: '0x5a666c7d92e5fa7edcb6390e4efd6d0cdd69cf37',
				logoURI: 'https://tokens.1inch.io/0x5a666c7d92e5fa7edcb6390e4efd6d0cdd69cf37.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'Coval',
				name: 'CircuitsOfValue',
				decimals: 8,
				address: '0x3d658390460295fb963f54dc0899cfb1c30776df',
				logoURI: 'https://tokens.1inch.io/0x3d658390460295fb963f54dc0899cfb1c30776df.png',
				tags: ['tokens']
			},
			{
				symbol: 'GLM',
				name: 'Golem Network Token',
				decimals: 18,
				address: '0x7dd9c5cba05e151c895fde1cf355c9a1d5da6429',
				logoURI: 'https://tokens.1inch.io/0x7dd9c5cba05e151c895fde1cf355c9a1d5da6429.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'TEL',
				name: 'Telcoin',
				decimals: 2,
				address: '0x467bccd9d29f223bce8043b84e8c8b282827790f',
				logoURI: 'https://tokens.1inch.io/0x467bccd9d29f223bce8043b84e8c8b282827790f.png',
				tags: ['tokens']
			},
			{
				symbol: 'UDT',
				name: 'Unlock Discount Token',
				decimals: 18,
				address: '0x90de74265a416e1393a450752175aed98fe11517',
				logoURI: 'https://tokens.1inch.io/0x90de74265a416e1393a450752175aed98fe11517.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'PENDLE',
				name: 'Pendle',
				decimals: 18,
				address: '0x808507121b80c02388fad14726482e061b8da827',
				logoURI: 'https://tokens.1inch.io/0x808507121b80c02388fad14726482e061b8da827.png',
				tags: ['tokens']
			},
			{
				symbol: 'WAXE',
				name: 'WAX Economic Token',
				decimals: 8,
				address: '0x7a2bc711e19ba6aff6ce8246c546e8c4b4944dfd',
				logoURI: 'https://tokens.1inch.io/0x7a2bc711e19ba6aff6ce8246c546e8c4b4944dfd.png',
				tags: ['tokens']
			},
			{
				symbol: 'STC',
				name: 'Student Coin',
				decimals: 18,
				address: '0x15b543e986b8c34074dfc9901136d9355a537e7e',
				logoURI: 'https://tokens.1inch.io/0x15b543e986b8c34074dfc9901136d9355a537e7e.png',
				tags: ['tokens']
			},
			{
				symbol: 'ROUTE',
				name: 'Route',
				decimals: 18,
				address: '0x16eccfdbb4ee1a85a33f3a9b21175cd7ae753db4',
				logoURI: 'https://tokens.1inch.io/0x16eccfdbb4ee1a85a33f3a9b21175cd7ae753db4.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'NII',
				name: 'Nahmii',
				decimals: 15,
				address: '0x7c8155909cd385f120a56ef90728dd50f9ccbe52',
				logoURI: 'https://tokens.1inch.io/0x7c8155909cd385f120a56ef90728dd50f9ccbe52.png',
				tags: ['tokens']
			},
			{
				symbol: 'PAID',
				name: 'PAID Network',
				decimals: 18,
				address: '0x1614f18fc94f47967a3fbe5ffcd46d4e7da3d787',
				logoURI: 'https://tokens.1inch.io/0x1614f18fc94f47967a3fbe5ffcd46d4e7da3d787.png',
				tags: ['tokens']
			},
			{
				symbol: 'TANGO',
				name: 'keyTango Token',
				decimals: 18,
				address: '0x182f4c4c97cd1c24e1df8fc4c053e5c47bf53bef',
				logoURI: 'https://tokens.1inch.io/0x182f4c4c97cd1c24e1df8fc4c053e5c47bf53bef.png',
				tags: ['tokens']
			},
			{
				symbol: 'SHOPX',
				name: 'SPLYT SHOPX',
				decimals: 18,
				address: '0x7bef710a5759d197ec0bf621c3df802c2d60d848',
				logoURI: 'https://tokens.1inch.io/0x7bef710a5759d197ec0bf621c3df802c2d60d848.png',
				tags: ['tokens']
			},
			{
				symbol: 'ARES',
				name: 'Ares Protocol',
				decimals: 18,
				address: '0x358aa737e033f34df7c54306960a38d09aabd523',
				logoURI: 'https://tokens.1inch.io/0x358aa737e033f34df7c54306960a38d09aabd523.png',
				tags: ['tokens']
			},
			{
				symbol: 'CTX',
				name: 'Cryptex',
				decimals: 18,
				address: '0x321c2fe4446c7c963dc41dd58879af648838f98d',
				logoURI: 'https://tokens.1inch.io/0x321c2fe4446c7c963dc41dd58879af648838f98d.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'BANK',
				name: 'Bankless Token',
				decimals: 18,
				address: '0x2d94aa3e47d9d5024503ca8491fce9a2fb4da198',
				logoURI: 'https://tokens.1inch.io/0x2d94aa3e47d9d5024503ca8491fce9a2fb4da198.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'BTC2x-FLI',
				name: 'BTC 2x Flexible Leverage Index',
				decimals: 18,
				address: '0x0b498ff89709d3838a063f1dfa463091f9801c2b',
				logoURI: 'https://tokens.1inch.io/0x0b498ff89709d3838a063f1dfa463091f9801c2b.png',
				tags: ['tokens']
			},
			{
				symbol: 'SHIH',
				name: 'Shih Tzu',
				decimals: 18,
				address: '0x841fb148863454a3b3570f515414759be9091465',
				logoURI: 'https://tokens.1inch.io/0x841fb148863454a3b3570f515414759be9091465.png',
				tags: ['tokens']
			},
			{
				symbol: 'KISHU',
				name: 'Kishu Inu',
				decimals: 9,
				address: '0xa2b4c0af19cc16a6cfacce81f192b024d625817d',
				logoURI: 'https://tokens.1inch.io/0xa2b4c0af19cc16a6cfacce81f192b024d625817d_1.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'FEG',
				name: 'FEGtoken',
				decimals: 9,
				address: '0x389999216860ab8e0175387a0c90e5c52522c945',
				logoURI: 'https://tokens.1inch.io/0x389999216860ab8e0175387a0c90e5c52522c945.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'O3',
				name: 'O3 Swap Token',
				decimals: 18,
				address: '0xee9801669c6138e84bd50deb500827b776777d28',
				logoURI: 'https://tokens.1inch.io/0xee9801669c6138e84bd50deb500827b776777d28.png',
				tags: ['tokens']
			},
			{
				symbol: 'SHIBAKEN',
				name: 'ShibaKen.Finance',
				decimals: 0,
				address: '0xa4cf2afd3b165975afffbf7e487cdd40c894ab6b',
				logoURI: 'https://tokens.1inch.io/0xa4cf2afd3b165975afffbf7e487cdd40c894ab6b.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'KIRO',
				name: 'Kirobo',
				decimals: 18,
				address: '0xb1191f691a355b43542bea9b8847bc73e7abb137',
				logoURI: 'https://tokens.1inch.io/0xb1191f691a355b43542bea9b8847bc73e7abb137.png',
				tags: ['tokens']
			},
			{
				symbol: 'CVX',
				name: 'Convex Token',
				decimals: 18,
				address: '0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b',
				logoURI: 'https://tokens.1inch.io/0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b.png',
				tags: ['tokens']
			},
			{
				symbol: 'SNFT',
				name: 'SeedSwap Token',
				decimals: 18,
				address: '0xa3c4dc4a9ce2a6b40b57f25f8b50decc2c64dec2',
				logoURI: 'https://tokens.1inch.io/0xa3c4dc4a9ce2a6b40b57f25f8b50decc2c64dec2.png',
				tags: ['tokens']
			},
			{
				symbol: '8PAY',
				name: '8PAY Network',
				decimals: 18,
				address: '0xfeea0bdd3d07eb6fe305938878c0cadbfa169042',
				logoURI: 'https://tokens.1inch.io/0xfeea0bdd3d07eb6fe305938878c0cadbfa169042.png',
				tags: ['tokens']
			},
			{
				symbol: 'GTC',
				name: 'Gitcoin',
				decimals: 18,
				address: '0xde30da39c46104798bb5aa3fe8b9e0e1f348163f',
				logoURI: 'https://tokens.1inch.io/0xde30da39c46104798bb5aa3fe8b9e0e1f348163f.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'GTON',
				name: 'Graviton',
				decimals: 18,
				address: '0x01e0e2e61f554ecaaec0cc933e739ad90f24a86d',
				logoURI: 'https://tokens.1inch.io/0x01e0e2e61f554ecaaec0cc933e739ad90f24a86d_1.png',
				tags: ['tokens']
			},
			{
				symbol: 'alUSD',
				name: 'Alchemix USD',
				decimals: 18,
				address: '0xbc6da0fe9ad5f3b0d58160288917aa56653660e9',
				logoURI: 'https://tokens.1inch.io/0xbc6da0fe9ad5f3b0d58160288917aa56653660e9.png',
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'SARCO',
				name: 'Sarcophagus',
				decimals: 18,
				address: '0x7697b462a7c4ff5f8b55bdbc2f4076c2af9cf51a',
				logoURI: 'https://tokens.1inch.io/0x7697b462a7c4ff5f8b55bdbc2f4076c2af9cf51a.png',
				tags: ['tokens']
			},
			{
				symbol: 'VUSD',
				name: 'VUSD',
				decimals: 18,
				address: '0x677ddbd918637e5f2c79e164d402454de7da8619',
				logoURI: 'https://tokens.1inch.io/0x677ddbd918637e5f2c79e164d402454de7da8619.png',
				eip2612: true,
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'ELON',
				name: 'Dogelon',
				decimals: 18,
				address: '0x761d38e5ddf6ccf6cf7c55759d5210750b5d60f3',
				logoURI: 'https://tokens.1inch.io/0x761d38e5ddf6ccf6cf7c55759d5210750b5d60f3.png',
				tags: ['tokens']
			},
			{
				symbol: 'SUPERBID',
				name: 'SuperBid',
				decimals: 18,
				address: '0x0563dce613d559a47877ffd1593549fb9d3510d6',
				logoURI: 'https://tokens.1inch.io/0x0563dce613d559a47877ffd1593549fb9d3510d6.png',
				tags: ['tokens']
			},
			{
				symbol: 'TONE',
				name: 'TE-FOOD/TustChain',
				decimals: 18,
				address: '0x2ab6bb8408ca3199b8fa6c92d5b455f820af03c4',
				logoURI: 'https://tokens.1inch.io/0x2ab6bb8408ca3199b8fa6c92d5b455f820af03c4.png',
				tags: ['tokens']
			},
			{
				symbol: 'Skey',
				name: 'SmartKey',
				decimals: 8,
				address: '0x06a01a4d579479dd5d884ebf61a31727a3d8d442',
				logoURI: 'https://tokens.1inch.io/0x06a01a4d579479dd5d884ebf61a31727a3d8d442.png',
				tags: ['tokens']
			},
			{
				symbol: 'NBU',
				name: 'Nimbus',
				decimals: 18,
				address: '0xeb58343b36c7528f23caae63a150240241310049',
				logoURI: 'https://tokens.1inch.io/0xeb58343b36c7528f23caae63a150240241310049.png',
				tags: ['tokens']
			},
			{
				symbol: 'LEASH',
				name: 'DOGE KILLER',
				decimals: 18,
				address: '0x27c70cd1946795b66be9d954418546998b546634',
				logoURI: 'https://tokens.1inch.io/0x27c70cd1946795b66be9d954418546998b546634.png',
				tags: ['tokens']
			},
			{
				symbol: 'DNT',
				name: 'district0x Network Token',
				decimals: 18,
				address: '0x0abdace70d3790235af448c88547603b945604ea',
				logoURI: 'https://tokens.1inch.io/0x0abdace70d3790235af448c88547603b945604ea.png',
				tags: ['tokens']
			},
			{
				symbol: 'DFYN',
				name: 'DFYN Token',
				decimals: 18,
				address: '0x9695e0114e12c0d3a3636fab5a18e6b737529023',
				logoURI: 'https://tokens.1inch.io/0x9695e0114e12c0d3a3636fab5a18e6b737529023.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'MVI',
				name: 'Metaverse Index',
				decimals: 18,
				address: '0x72e364f2abdc788b7e918bc238b21f109cd634d7',
				logoURI: 'https://tokens.1inch.io/0x72e364f2abdc788b7e918bc238b21f109cd634d7.png',
				tags: ['tokens']
			},
			{
				symbol: 'AKITA',
				name: 'Akita Inu',
				decimals: 18,
				address: '0x3301ee63fb29f863f2333bd4466acb46cd8323e6',
				logoURI: 'https://tokens.1inch.io/0x3301ee63fb29f863f2333bd4466acb46cd8323e6.png',
				tags: ['tokens']
			},
			{
				symbol: 'LQTY',
				name: 'LQTY',
				decimals: 18,
				address: '0x6dea81c8171d0ba574754ef6f8b412f2ed88c54d',
				logoURI: 'https://tokens.1inch.io/0x6dea81c8171d0ba574754ef6f8b412f2ed88c54d.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'VRX',
				name: 'Verox',
				decimals: 18,
				address: '0x87de305311d5788e8da38d19bb427645b09cb4e5',
				logoURI: 'https://tokens.1inch.io/0x87de305311d5788e8da38d19bb427645b09cb4e5.png',
				tags: ['tokens']
			},
			{
				symbol: 'TRU_Truebit',
				name: 'Truebit',
				decimals: 18,
				address: '0xf65b5c5104c4fafd4b709d9d60a185eae063276c',
				logoURI: 'https://tokens.1inch.io/0xf65b5c5104c4fafd4b709d9d60a185eae063276c.png',
				tags: ['tokens']
			},
			{
				symbol: 'BBTC',
				name: 'Binance Wrapped BTC',
				decimals: 8,
				address: '0x9be89d2a4cd102d8fecc6bf9da793be995c22541',
				logoURI: 'https://tokens.1inch.io/0x9be89d2a4cd102d8fecc6bf9da793be995c22541.png',
				tags: ['tokens', 'PEG:BTC']
			},
			{
				symbol: 'MUNCH',
				name: 'MUNCH Token',
				decimals: 9,
				address: '0x944eee930933be5e23b690c8589021ec8619a301',
				logoURI: 'https://tokens.1inch.io/0x944eee930933be5e23b690c8589021ec8619a301.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'BEZOGE',
				name: 'Bezoge Earth',
				decimals: 9,
				address: '0xdc349913d53b446485e98b76800b6254f43df695',
				logoURI: 'https://tokens.1inch.io/0xdc349913d53b446485e98b76800b6254f43df695.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'ISLE',
				name: 'Island',
				decimals: 9,
				address: '0x1681bcb589b3cfcf0c0616b0ce9b19b240643dc1',
				logoURI: 'https://tokens.1inch.io/0x1681bcb589b3cfcf0c0616b0ce9b19b240643dc1.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'DRC_1',
				name: 'Digital Reserve Currency',
				decimals: 0,
				address: '0xa150db9b1fa65b44799d4dd949d922c0a33ee606',
				logoURI: 'https://tokens.1inch.io/0xa150db9b1fa65b44799d4dd949d922c0a33ee606.png',
				tags: ['tokens']
			},
			{
				symbol: 'BCP',
				name: 'BitcashPay',
				decimals: 8,
				address: '0xe047705117eb07e712c3d684f5b18e74577e83ac',
				logoURI: 'https://tokens.1inch.io/0xe047705117eb07e712c3d684f5b18e74577e83ac.png',
				tags: ['tokens']
			},
			{
				symbol: 'eMax',
				name: 'EthereumMax',
				decimals: 18,
				address: '0x15874d65e649880c2614e7a480cb7c9a55787ff6',
				logoURI: 'https://tokens.1inch.io/0x15874d65e649880c2614e7a480cb7c9a55787ff6.png',
				tags: ['tokens']
			},
			{
				symbol: 'INST',
				name: 'Instadapp',
				decimals: 18,
				address: '0x6f40d4a6237c257fff2db00fa0510deeecd303eb',
				logoURI: 'https://tokens.1inch.io/0x6f40d4a6237c257fff2db00fa0510deeecd303eb.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'CAVA',
				name: 'Cavapoo',
				decimals: 9,
				address: '0x456d8f0d25a4e787ee60c401f8b963a465148f70',
				logoURI: 'https://tokens.1inch.io/0x456d8f0d25a4e787ee60c401f8b963a465148f70.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'SWAPP',
				name: 'Swapp Token',
				decimals: 18,
				address: '0x8cb924583681cbfe487a62140a994a49f833c244',
				logoURI: 'https://tokens.1inch.io/0x8cb924583681cbfe487a62140a994a49f833c244.png',
				tags: ['tokens']
			},
			{
				symbol: 'DVI',
				name: 'Dvision',
				decimals: 18,
				address: '0x10633216e7e8281e33c86f02bf8e565a635d9770',
				logoURI: 'https://tokens.1inch.io/0x10633216e7e8281e33c86f02bf8e565a635d9770.png',
				tags: ['tokens']
			},
			{
				symbol: 'CADC',
				name: 'CAD Coin',
				decimals: 18,
				address: '0xcadc0acd4b445166f12d2c07eac6e2544fbe2eef',
				logoURI: 'https://tokens.1inch.io/0xcadc0acd4b445166f12d2c07eac6e2544fbe2eef.png',
				tags: ['tokens']
			},
			{
				symbol: 'ARCX',
				name: 'ARCx Governance Token',
				decimals: 18,
				address: '0x1321f1f1aa541a56c31682c57b80ecfccd9bb288',
				logoURI: 'https://tokens.1inch.io/0xed30dd7e50edf3581ad970efc5d9379ce2614adb.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'DFI',
				name: 'Amun DeFi Index',
				decimals: 18,
				address: '0xa9536b9c75a9e0fae3b56a96ac8edf76abc91978',
				logoURI: 'https://tokens.1inch.io/0xa9536b9c75a9e0fae3b56a96ac8edf76abc91978.png',
				tags: ['tokens']
			},
			{
				symbol: 'xSUSHI',
				name: 'SushiBar',
				decimals: 18,
				address: '0x8798249c2e607446efb7ad49ec89dd1865ff4272',
				logoURI: 'https://tokens.1inch.io/0x8798249c2e607446efb7ad49ec89dd1865ff4272.png',
				tags: ['tokens']
			},
			{
				symbol: 'Auction',
				name: 'Bounce Token',
				decimals: 18,
				address: '0xa9b1eb5908cfc3cdf91f9b8b3a74108598009096',
				logoURI: 'https://tokens.1inch.io/0xa9b1eb5908cfc3cdf91f9b8b3a74108598009096.png',
				tags: ['tokens']
			},
			{
				symbol: 'AGIX',
				name: 'SingularityNET Token',
				decimals: 8,
				address: '0x5b7533812759b45c2b44c19e320ba2cd2681b542',
				logoURI: 'https://tokens.1inch.io/0x5b7533812759b45c2b44c19e320ba2cd2681b542.png',
				tags: ['tokens']
			},
			{
				symbol: 'OLY',
				name: 'Olyseum',
				decimals: 18,
				address: '0x6595b8fd9c920c81500dca94e53cdc712513fb1f',
				logoURI: 'https://tokens.1inch.io/0x6595b8fd9c920c81500dca94e53cdc712513fb1f.png',
				tags: ['tokens']
			},
			{
				symbol: 'GERO',
				name: 'GeroWallet',
				decimals: 18,
				address: '0x3431f91b3a388115f00c5ba9fdb899851d005fb5',
				logoURI: 'https://tokens.1inch.io/0x3431f91b3a388115f00c5ba9fdb899851d005fb5.png',
				tags: ['tokens']
			},
			{
				symbol: 'UNO',
				name: 'UnoRe',
				decimals: 18,
				address: '0x474021845c4643113458ea4414bdb7fb74a01a77',
				logoURI: 'https://tokens.1inch.io/0x474021845c4643113458ea4414bdb7fb74a01a77.png',
				tags: ['tokens']
			},
			{
				symbol: 'STAK',
				name: 'Jigstack',
				decimals: 18,
				address: '0x1f8a626883d7724dbd59ef51cbd4bf1cf2016d13',
				logoURI: 'https://tokens.1inch.io/0x1f8a626883d7724dbd59ef51cbd4bf1cf2016d13.png',
				tags: ['tokens']
			},
			{
				symbol: 'MPL',
				name: 'Maple Token',
				decimals: 18,
				address: '0x33349b282065b0284d756f0577fb39c158f935e6',
				logoURI: 'https://tokens.1inch.io/0x33349b282065b0284d756f0577fb39c158f935e6.png',
				tags: ['tokens']
			},
			{
				symbol: 'FLX',
				name: 'Flex Ungovernance Token',
				decimals: 18,
				address: '0x6243d8cea23066d098a15582d81a598b4e8391f4',
				logoURI: 'https://tokens.1inch.io/0x6243d8cea23066d098a15582d81a598b4e8391f4.png',
				tags: ['tokens']
			},
			{
				symbol: 'ETHV',
				name: 'ETH Volatility Index',
				decimals: 18,
				address: '0xc53342fd7575f572b0ff4569e31941a5b821ac76',
				logoURI: 'https://tokens.1inch.io/0xc53342fd7575f572b0ff4569e31941a5b821ac76.png',
				tags: ['tokens']
			},
			{
				symbol: 'iETHV',
				name: 'Inverse ETH Volatility Index',
				decimals: 18,
				address: '0x3a707d56d538e85b783e8ce12b346e7fb6511f90',
				logoURI: 'https://tokens.1inch.io/0x3a707d56d538e85b783e8ce12b346e7fb6511f90.png',
				tags: ['tokens']
			},
			{
				symbol: 'BTCV',
				name: 'BTC Volatility Index',
				decimals: 18,
				address: '0x51b0bcbeff204b39ce792d1e16767fe6f7631970',
				logoURI: 'https://tokens.1inch.io/0x51b0bcbeff204b39ce792d1e16767fe6f7631970.png',
				tags: ['tokens']
			},
			{
				symbol: 'iBTCV',
				name: 'Inverse BTC Volatility Index',
				decimals: 18,
				address: '0x2590f1fd14ef8bb0a46c7a889c4cbc146510f9c3',
				logoURI: 'https://tokens.1inch.io/0x2590f1fd14ef8bb0a46c7a889c4cbc146510f9c3.png',
				tags: ['tokens']
			},
			{
				symbol: 'NRCH',
				name: 'EnreachDAO',
				decimals: 9,
				address: '0x69fa8e7f6bf1ca1fb0de61e1366f7412b827cc51',
				logoURI: 'https://tokens.1inch.io/0x69fa8e7f6bf1ca1fb0de61e1366f7412b827cc51.png',
				tags: ['tokens']
			},
			{
				symbol: 'DEXT',
				name: 'DEXTools',
				decimals: 18,
				address: '0xfb7b4564402e5500db5bb6d63ae671302777c75a',
				logoURI: 'https://tokens.1inch.io/0x26ce25148832c04f3d7f26f32478a9fe55197166.png',
				tags: ['tokens']
			},
			{
				symbol: 'one1INCH',
				name: 'Stable 1INCH',
				decimals: 18,
				address: '0x853bb55c1f469902f088a629db8c8803a9be3857',
				logoURI: 'https://tokens.1inch.io/0x853bb55c1f469902f088a629db8c8803a9be3857.png',
				tags: ['tokens']
			},
			{
				symbol: 'MYOBU',
				name: 'Myōbu',
				decimals: 9,
				address: '0x75d12e4f91df721fafcae4c6cd1d5280381370ac',
				logoURI: 'https://tokens.1inch.io/0x75d12e4f91df721fafcae4c6cd1d5280381370ac.png',
				tags: ['tokens']
			},
			{
				symbol: 'DVF',
				name: 'DeversiFi Token',
				decimals: 18,
				address: '0xdddddd4301a082e62e84e43f474f044423921918',
				logoURI: 'https://tokens.1inch.io/0xdddddd4301a082e62e84e43f474f044423921918.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'MM_2',
				name: 'Million',
				decimals: 18,
				address: '0x6b4c7a5e3f0b99fcd83e9c089bddd6c7fce5c611',
				logoURI: 'https://tokens.1inch.io/0x6b4c7a5e3f0b99fcd83e9c089bddd6c7fce5c611.png',
				tags: ['tokens']
			},
			{
				symbol: 'EURT',
				name: 'Euro Tether',
				decimals: 6,
				address: '0xc581b735a1688071a1746c968e0798d642ede491',
				logoURI: 'https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png',
				tags: ['tokens', 'PEG:EUR']
			},
			{
				symbol: 'HANU',
				name: 'Hanu Yokia',
				decimals: 12,
				address: '0x72e5390edb7727e3d4e3436451dadaff675dbcc0',
				logoURI: 'https://tokens.1inch.io/0x72e5390edb7727e3d4e3436451dadaff675dbcc0.png',
				tags: ['tokens']
			},
			{
				symbol: 'zUSD',
				name: 'Zerogoki USD',
				decimals: 18,
				address: '0x76417e660df3e5c90c0361674c192da152a806e4',
				logoURI: 'https://tokens.1inch.io/0x76417e660df3e5c90c0361674c192da152a806e4.png',
				tags: ['tokens']
			},
			{
				symbol: 'STARL',
				name: 'StarLink',
				decimals: 18,
				address: '0x8e6cd950ad6ba651f6dd608dc70e5886b1aa6b24',
				logoURI: 'https://tokens.1inch.io/0x8e6cd950ad6ba651f6dd608dc70e5886b1aa6b24.png',
				tags: ['tokens']
			},
			{
				symbol: 'UPI',
				name: 'Pawtocol Network UPI Token',
				decimals: 18,
				address: '0x70d2b7c19352bb76e4409858ff5746e500f2b67c',
				logoURI: 'https://tokens.1inch.io/0x70d2b7c19352bb76e4409858ff5746e500f2b67c.png',
				tags: ['tokens']
			},
			{
				symbol: 'EDEN',
				name: 'Eden',
				decimals: 18,
				address: '0x1559fa1b8f28238fd5d76d9f434ad86fd20d1559',
				logoURI: 'https://tokens.1inch.io/0x1559fa1b8f28238fd5d76d9f434ad86fd20d1559.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'GDAO',
				name: 'Governor',
				decimals: 18,
				address: '0x515d7e9d75e2b76db60f8a051cd890eba23286bc',
				logoURI: 'https://tokens.1inch.io/0x515d7e9d75e2b76db60f8a051cd890eba23286bc.png',
				tags: ['tokens']
			},
			{
				symbol: 'MINDS',
				name: 'Minds',
				decimals: 18,
				address: '0xb26631c6dda06ad89b93c71400d25692de89c068',
				logoURI: 'https://tokens.1inch.io/0xb26631c6dda06ad89b93c71400d25692de89c068.png',
				tags: ['tokens']
			},
			{
				symbol: 'VOL',
				name: 'Volatility Protocol Token',
				decimals: 18,
				address: '0x5166e09628b696285e3a151e84fb977736a83575',
				logoURI: 'https://tokens.1inch.io/0x5166e09628b696285e3a151e84fb977736a83575.png',
				tags: ['tokens']
			},
			{
				symbol: 'MASQ',
				name: 'MASQ',
				decimals: 18,
				address: '0x06f3c323f0238c72bf35011071f2b5b7f43a054c',
				logoURI: 'https://tokens.1inch.io/0x06f3c323f0238c72bf35011071f2b5b7f43a054c.png',
				tags: ['tokens']
			},
			{
				symbol: 'KEANU',
				name: 'Keanu Inu',
				decimals: 9,
				address: '0x106552c11272420aad5d7e94f8acab9095a6c952',
				logoURI: 'https://tokens.1inch.io/0x106552c11272420aad5d7e94f8acab9095a6c952.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'COTI',
				name: 'COTI Token',
				decimals: 18,
				address: '0xddb3422497e61e13543bea06989c0789117555c5',
				logoURI: 'https://tokens.1inch.io/0xddb3422497e61e13543bea06989c0789117555c5.png',
				tags: ['tokens']
			},
			{
				symbol: 'DYDX',
				name: 'dYdX',
				decimals: 18,
				address: '0x92d6c1e31e14520e676a687f0a93788b716beff5',
				logoURI: 'https://assets.coingecko.com/coins/images/17500/large/hjnIm9bV.jpg?1628009360',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: '1MIL',
				name: '1MILNFT',
				decimals: 18,
				address: '0xa4ef4b0b23c1fc81d3f9ecf93510e64f58a4a016',
				logoURI: 'https://tokens.1inch.io/0xa4ef4b0b23c1fc81d3f9ecf93510e64f58a4a016.png',
				tags: ['tokens']
			},
			{
				symbol: 'SLAB',
				name: 'SLINK LABS',
				decimals: 9,
				address: '0xeb494890465f49c2b94457d9b61811392e5b1fea',
				logoURI: 'https://tokens.1inch.io/0xeb494890465f49c2b94457d9b61811392e5b1fea.png',
				tags: ['tokens']
			},
			{
				symbol: 'BID',
				name: 'Bidao',
				decimals: 18,
				address: '0x25e1474170c4c0aa64fa98123bdc8db49d7802fa',
				logoURI: 'https://tokens.1inch.io/0x25e1474170c4c0aa64fa98123bdc8db49d7802fa.png',
				tags: ['tokens']
			},
			{
				symbol: 'AGRS',
				name: 'Agoras Token',
				decimals: 8,
				address: '0x738865301a9b7dd80dc3666dd48cf034ec42bdda',
				logoURI: 'https://tokens.1inch.io/0x738865301a9b7dd80dc3666dd48cf034ec42bdda.png',
				tags: ['tokens']
			},
			{
				symbol: 'BSL',
				name: 'BankSocial',
				decimals: 8,
				address: '0x0af55d5ff28a3269d69b98680fd034f115dd53ac',
				logoURI: 'https://tokens.1inch.io/0x0af55d5ff28a3269d69b98680fd034f115dd53ac.png',
				tags: ['tokens']
			},
			{
				symbol: 'HAKA',
				name: 'TribeOne',
				decimals: 18,
				address: '0xd85ad783cc94bd04196a13dc042a3054a9b52210',
				logoURI: 'https://tokens.1inch.io/0xd85ad783cc94bd04196a13dc042a3054a9b52210.png',
				tags: ['tokens']
			},
			{
				symbol: 'DHV',
				name: 'DeHive.finance',
				decimals: 18,
				address: '0x62dc4817588d53a056cbbd18231d91ffccd34b2a',
				logoURI: 'https://tokens.1inch.io/0x62dc4817588d53a056cbbd18231d91ffccd34b2a.png',
				tags: ['tokens']
			},
			{
				symbol: 'TMM',
				name: 'Take My Muffin',
				decimals: 6,
				address: '0x19042021329fddcfbea5f934fb5b2670c91f7d20',
				logoURI: 'https://tokens.1inch.io/0x19042021329fddcfbea5f934fb5b2670c91f7d20.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'GEL',
				name: 'Gelato Network Token',
				decimals: 18,
				address: '0x15b7c0c907e4c6b9adaaaabc300c08991d6cea05',
				logoURI: 'https://tokens.1inch.io/0x15b7c0c907e4c6b9adaaaabc300c08991d6cea05.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'GOKU',
				name: 'Goku Inu',
				decimals: 9,
				address: '0xa64dfe8d86963151e6496bee513e366f6e42ed79',
				logoURI: 'https://tokens.1inch.io/0xa64dfe8d86963151e6496bee513e366f6e42ed79.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'RNBW',
				name: 'Rainbow Token',
				decimals: 18,
				address: '0xe94b97b6b43639e238c851a7e693f50033efd75c',
				logoURI: 'https://tokens.1inch.io/0xe94b97b6b43639e238c851a7e693f50033efd75c.png',
				tags: ['tokens']
			},
			{
				symbol: 'MIM',
				name: 'Magic Internet Money',
				decimals: 18,
				address: '0x99d8a9c45b2eca8864373a26d1459e3dff1e17f3',
				logoURI: 'https://tokens.1inch.io/0x99d8a9c45b2eca8864373a26d1459e3dff1e17f3.png',
				tags: ['tokens']
			},
			{
				symbol: 'SPELL',
				name: 'Spell Token',
				decimals: 18,
				address: '0x090185f2135308bad17527004364ebcc2d37e5f6',
				logoURI: 'https://tokens.1inch.io/0x090185f2135308bad17527004364ebcc2d37e5f6.png',
				tags: ['tokens']
			},
			{
				symbol: 'DEUS',
				name: 'DEUS',
				decimals: 18,
				address: '0xde5ed76e7c05ec5e4572cfc88d1acea165109e44',
				logoURI: 'https://tokens.1inch.io/0xde5ed76e7c05ec5e4572cfc88d1acea165109e44.png',
				tags: ['tokens']
			},
			{
				symbol: 'UNV',
				name: 'Unvest',
				decimals: 18,
				address: '0xf009f5531de69067435e32c4b9d36077f4c4a673',
				logoURI: 'https://tokens.1inch.io/0xf009f5531de69067435e32c4b9d36077f4c4a673.png',
				tags: ['tokens']
			},
			{
				symbol: 'wCFG',
				name: 'Wrapped Centrifuge',
				decimals: 18,
				address: '0xc221b7e65ffc80de234bbb6667abdd46593d34f0',
				logoURI: 'https://tokens.1inch.io/0xc221b7e65ffc80de234bbb6667abdd46593d34f0.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'wstETH',
				name: 'Wrapped liquid staked Ether 2.0',
				decimals: 18,
				address: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
				logoURI: 'https://tokens.1inch.io/0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0.png',
				eip2612: true,
				tags: ['tokens', 'PEG:ETH']
			},
			{
				symbol: 'FLOKIPUP',
				name: 'Floki Pup',
				decimals: 9,
				address: '0xf50a07e4ff052a14f3f608da8936d8ae0ed5be50',
				logoURI: 'https://tokens.1inch.io/0xf50a07e4ff052a14f3f608da8936d8ae0ed5be50.png',
				tags: ['tokens']
			},
			{
				symbol: 'PAWTH',
				name: 'Pawthereum',
				decimals: 9,
				address: '0xaecc217a749c2405b5ebc9857a16d58bdc1c367f',
				logoURI: 'https://tokens.1inch.io/0xaecc217a749c2405b5ebc9857a16d58bdc1c367f.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'MC',
				name: 'Merit Circle',
				decimals: 18,
				address: '0x949d48eca67b17269629c7194f4b727d4ef9e5d6',
				logoURI: 'https://tokens.1inch.io/0x949d48eca67b17269629c7194f4b727d4ef9e5d6.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'sBTC',
				name: 'Synth sBTC',
				decimals: 18,
				address: '0xfe18be6b3bd88a2d2a7f928d00292e7a9963cfc6',
				logoURI: 'https://tokens.1inch.io/0xfe18be6b3bd88a2d2a7f928d00292e7a9963cfc6.png',
				tags: ['tokens', 'PEG:BTC']
			},
			{
				symbol: 'sETH',
				name: 'Synth sETH',
				decimals: 18,
				address: '0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb',
				logoURI: 'https://tokens.1inch.io/0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb.png',
				tags: ['tokens', 'PEG:ETH']
			},
			{
				symbol: 'REDPANDA',
				name: 'Red Panda',
				decimals: 9,
				address: '0x514cdb9cd8a2fb2bdcf7a3b8ddd098caf466e548',
				logoURI: 'https://tokens.1inch.io/0x514cdb9cd8a2fb2bdcf7a3b8ddd098caf466e548.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'ZINU',
				name: 'Zombie Inu',
				decimals: 9,
				address: '0xc50ef449171a51fbeafd7c562b064b6471c36caa',
				logoURI: 'https://tokens.1inch.io/0xc50ef449171a51fbeafd7c562b064b6471c36caa.png',
				tags: ['tokens']
			},
			{
				symbol: 'miniSAITAMA',
				name: 'mini SAITAMA',
				decimals: 9,
				address: '0x0c3685559af6f3d20c501b1076a8056a0a14426a',
				logoURI: 'https://tokens.1inch.io/0x0c3685559af6f3d20c501b1076a8056a0a14426a.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'TKING',
				name: 'Tiger King',
				decimals: 18,
				address: '0x24e89bdf2f65326b94e36978a7edeac63623dafa',
				logoURI: 'https://tokens.1inch.io/0x24e89bdf2f65326b94e36978a7edeac63623dafa.png',
				tags: ['tokens']
			},
			{
				symbol: 'AURORA',
				name: 'Aurora',
				decimals: 18,
				address: '0xaaaaaa20d9e0e2461697782ef11675f668207961',
				logoURI: 'https://tokens.1inch.io/0xaaaaaa20d9e0e2461697782ef11675f668207961.png',
				tags: ['tokens']
			},
			{
				symbol: 'MEL',
				name: 'Melalie',
				decimals: 18,
				address: '0xed0889f7e1c7c7267407222be277e1f1ef4d4892',
				logoURI: 'https://tokens.1inch.io/0xed0889f7e1c7c7267407222be277e1f1ef4d4892.png',
				tags: ['tokens']
			},
			{
				symbol: 'ENS',
				name: 'Ethereum Name Service',
				decimals: 18,
				eip2612: true,
				address: '0xc18360217d8f7ab5e7c516566761ea12ce7f9d72',
				logoURI: 'https://tokens.1inch.io/0xc18360217d8f7ab5e7c516566761ea12ce7f9d72.png',
				tags: ['tokens']
			},
			{
				symbol: 'PP',
				name: 'Pension Plan',
				decimals: 8,
				address: '0xf14b9adf84812ba463799357f4dc716b4384010b',
				logoURI: 'https://tokens.1inch.io/0xf14b9adf84812ba463799357f4dc716b4384010b.png',
				tags: ['tokens']
			},
			{
				symbol: 'ROTTS',
				name: 'ROTTSCHILD.com',
				decimals: 9,
				address: '0xfb40e79e56cc7d406707b66c4fd175e07eb2ae3c',
				logoURI: 'https://tokens.1inch.io/0xfb40e79e56cc7d406707b66c4fd175e07eb2ae3c.png',
				tags: ['tokens']
			},
			{
				symbol: 'CHOPPER',
				name: 'CHOPPER INU',
				decimals: 9,
				address: '0x28c5805b64d163588a909012a628b5a03c1041f9',
				logoURI: 'https://tokens.1inch.io/0x28c5805b64d163588a909012a628b5a03c1041f9.png',
				tags: ['tokens']
			},
			{
				symbol: 'CIV',
				name: 'Civilization',
				decimals: 18,
				address: '0x37fe0f067fa808ffbdd12891c0858532cfe7361d',
				logoURI: 'https://tokens.1inch.io/0x37fe0f067fa808ffbdd12891c0858532cfe7361d.png',
				tags: ['tokens']
			},
			{
				symbol: 'Inu',
				name: 'Hachiko Inu',
				decimals: 18,
				address: '0xf32aa187d5bc16a2c02a6afb7df1459d0d107574',
				logoURI: 'https://tokens.1inch.io/0xf32aa187d5bc16a2c02a6afb7df1459d0d107574.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'GYEN',
				name: 'GMO JPY',
				decimals: 6,
				address: '0xc08512927d12348f6620a698105e1baac6ecd911',
				logoURI: 'https://tokens.1inch.io/0xc08512927d12348f6620a698105e1baac6ecd911.png',
				tags: ['tokens']
			},
			{
				symbol: 'PSP',
				name: 'ParaSwap',
				decimals: 18,
				eip2612: true,
				address: '0xcafe001067cdef266afb7eb5a286dcfd277f3de5',
				logoURI: 'https://tokens.1inch.io/0xcafe001067cdef266afb7eb5a286dcfd277f3de5.png',
				tags: ['tokens']
			},
			{
				symbol: 'DINU',
				name: 'Dogey-Inu',
				decimals: 18,
				address: '0xbb1ee07d6c7baeb702949904080eb61f5d5e7732',
				logoURI: 'https://tokens.1inch.io/0xbb1ee07d6c7baeb702949904080eb61f5d5e7732.png',
				tags: ['tokens']
			},
			{
				symbol: 'TONCOIN',
				name: 'Wrapped TON Coin',
				decimals: 9,
				address: '0x582d872a1b094fc48f5de31d3b73f2d9be47def1',
				logoURI: 'https://tokens.1inch.io/0x582d872a1b094fc48f5de31d3b73f2d9be47def1.png',
				tags: ['tokens']
			},
			{
				symbol: 'HOKK',
				name: 'Hokkaido Inu',
				decimals: 18,
				address: '0xe87e15b9c7d989474cb6d8c56b3db4efad5b21e8',
				logoURI: 'https://tokens.1inch.io/0xe87e15b9c7d989474cb6d8c56b3db4efad5b21e8.png',
				tags: ['tokens']
			},
			{
				symbol: 'APW',
				name: 'APWine Token',
				decimals: 18,
				address: '0x4104b135dbc9609fc1a9490e61369036497660c8',
				logoURI: 'https://tokens.1inch.io/0x4104b135dbc9609fc1a9490e61369036497660c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'rETH',
				name: 'Rocket Pool ETH',
				decimals: 18,
				address: '0xae78736cd615f374d3085123a210448e74fc6393',
				logoURI: 'https://tokens.1inch.io/0xae78736cd615f374d3085123a210448e74fc6393.png',
				tags: ['tokens']
			},
			{
				symbol: 'SCA',
				name: 'ScaleSwapToken',
				decimals: 18,
				address: '0x1fbd3df007eb8a7477a1eab2c63483dcc24effd6',
				logoURI: 'https://tokens.1inch.io/0x1fbd3df007eb8a7477a1eab2c63483dcc24effd6.png',
				tags: ['tokens']
			},
			{
				symbol: 'SHIBLI',
				name: 'Studio Shibli',
				decimals: 9,
				address: '0xb1a88c33091490218965787919fcc9862c1798ee',
				logoURI: 'https://tokens.1inch.io/0xb1a88c33091490218965787919fcc9862c1798ee.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'P4C',
				name: 'Parts of Four Coin',
				decimals: 18,
				address: '0x8037b1b69d6fa63a9cc053c25f7e168e6e6d857a',
				logoURI: 'https://tokens.1inch.io/0x8037b1b69d6fa63a9cc053c25f7e168e6e6d857a.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'NOTE',
				name: 'Notional',
				decimals: 8,
				address: '0xcfeaead4947f0705a14ec42ac3d44129e1ef3ed5',
				logoURI: 'https://tokens.1inch.io/0xcfeaead4947f0705a14ec42ac3d44129e1ef3ed5.png',
				tags: ['tokens']
			},
			{
				symbol: 'BLANK',
				name: 'GoBlank Token',
				decimals: 18,
				address: '0x41a3dba3d677e573636ba691a70ff2d606c29666',
				logoURI: 'https://tokens.1inch.io/0xaec7e1f531bb09115103c53ba76829910ec48966.png',
				tags: ['tokens']
			},
			{
				symbol: 'CMERGE',
				name: 'Coin Merge',
				decimals: 9,
				address: '0xc48b4814faed1ccc885dd6fde62a6474aecbb19a',
				logoURI: 'https://tokens.1inch.io/0xc48b4814faed1ccc885dd6fde62a6474aecbb19a.png',
				tags: ['tokens']
			},
			{
				symbol: 'RBX',
				name: 'RBX',
				decimals: 18,
				address: '0x8254e26e453eb5abd29b3c37ac9e8da32e5d3299',
				logoURI: 'https://tokens.1inch.io/0x8254e26e453eb5abd29b3c37ac9e8da32e5d3299.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'SOS',
				name: 'SOS',
				decimals: 18,
				address: '0x3b484b82567a09e2588a13d54d032153f0c0aee0',
				logoURI: 'https://tokens.1inch.io/0x3b484b82567a09e2588a13d54d032153f0c0aee0.png',
				tags: ['tokens']
			},
			{
				symbol: 'VXL',
				name: 'Voxel X Network',
				decimals: 18,
				address: '0x16cc8367055ae7e9157dbcb9d86fd6ce82522b31',
				logoURI: 'https://tokens.1inch.io/0x16cc8367055ae7e9157dbcb9d86fd6ce82522b31.png',
				tags: ['tokens']
			},
			{
				symbol: 'GAS',
				name: 'Gas DAO',
				decimals: 18,
				address: '0x6bba316c48b49bd1eac44573c5c871ff02958469',
				logoURI: 'https://tokens.1inch.io/0x6bba316c48b49bd1eac44573c5c871ff02958469.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'TEMP',
				name: 'Tempus',
				decimals: 18,
				address: '0xa36fdbbae3c9d55a1d67ee5821d53b50b63a1ab9',
				logoURI: 'https://tokens.1inch.io/0xa36fdbbae3c9d55a1d67ee5821d53b50b63a1ab9.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'KTO',
				name: 'Kounotori',
				decimals: 9,
				address: '0x616ef40d55c0d2c506f4d6873bda8090b79bf8fc',
				logoURI: 'https://tokens.1inch.io/0x616ef40d55c0d2c506f4d6873bda8090b79bf8fc.png',
				tags: ['tokens']
			},
			{
				symbol: 'RADAR',
				name: 'DappRadar',
				decimals: 18,
				address: '0x44709a920fccf795fbc57baa433cc3dd53c44dbe',
				logoURI: 'https://tokens.1inch.io/0x44709a920fccf795fbc57baa433cc3dd53c44dbe.png',
				tags: ['tokens']
			},
			{
				symbol: 'ALPHA_1',
				name: 'Alpha',
				decimals: 18,
				address: '0x138c2f1123cf3f82e4596d097c118eac6684940b',
				logoURI: 'https://tokens.1inch.io/0x138c2f1123cf3f82e4596d097c118eac6684940b_1.png',
				displayedSymbol: 'ALPHA',
				tags: ['tokens']
			},
			{
				symbol: '0xBTC',
				name: '0xBitcoin Token',
				decimals: 8,
				address: '0xb6ed7644c69416d67b522e20bc294a9a9b405b31',
				logoURI: 'https://tokens.1inch.io/0xb6ed7644c69416d67b522e20bc294a9a9b405b31.png',
				tags: ['tokens']
			},
			{
				symbol: 'BORING',
				name: 'BoringDAO',
				decimals: 18,
				address: '0xbc19712feb3a26080ebf6f2f7849b417fdd792ca',
				logoURI: 'https://tokens.1inch.io/0xbc19712feb3a26080ebf6f2f7849b417fdd792ca.png',
				tags: ['tokens']
			},
			{
				symbol: 'WTF',
				name: 'fees.wtf',
				decimals: 18,
				address: '0xa68dd8cb83097765263adad881af6eed479c4a33',
				logoURI: 'https://tokens.1inch.io/0xa68dd8cb83097765263adad881af6eed479c4a33.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'ACYC',
				name: 'AllCoinsYieldCapital',
				decimals: 18,
				address: '0xb56a1f3310578f23120182fb2e58c087efe6e147',
				logoURI: 'https://tokens.1inch.io/0xb56a1f3310578f23120182fb2e58c087efe6e147.png',
				tags: ['tokens']
			},
			{
				symbol: 'GMI',
				name: 'Bankless DeFi Innovation Index',
				decimals: 18,
				address: '0x47110d43175f7f2c2425e7d15792acc5817eb44f',
				logoURI: 'https://tokens.1inch.io/0x47110d43175f7f2c2425e7d15792acc5817eb44f.png',
				tags: ['tokens']
			},
			{
				symbol: 'ACCEL',
				name: 'ACCEL',
				decimals: 18,
				address: '0x7475c42f8bf2c19f4eaf12feaababa859fdc8914',
				logoURI: 'https://tokens.1inch.io/0x7475c42f8bf2c19f4eaf12feaababa859fdc8914_1.png',
				tags: ['tokens']
			},
			{
				symbol: 'WXRP',
				name: 'Wrapped XRP',
				decimals: 18,
				address: '0x39fbbabf11738317a448031930706cd3e612e1b9',
				logoURI: 'https://tokens.1inch.io/0x39fbbabf11738317a448031930706cd3e612e1b9_1.png',
				tags: ['tokens']
			},
			{
				symbol: 'T',
				name: 'Threshold Network Token',
				decimals: 18,
				address: '0xcdf7028ceab81fa0c6971208e83fa7872994bee5',
				logoURI: 'https://tokens.1inch.io/0xcdf7028ceab81fa0c6971208e83fa7872994bee5.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'FLOKI',
				name: 'FLOKI',
				decimals: 9,
				address: '0xcf0c122c6b73ff809c693db761e7baebe62b6a2e',
				logoURI: 'https://tokens.1inch.io/0xcf0c122c6b73ff809c693db761e7baebe62b6a2e_1.png',
				tags: ['tokens']
			},
			{
				symbol: 'OOKI',
				name: 'Ooki Token',
				decimals: 18,
				address: '0x0de05f6447ab4d22c8827449ee4ba2d5c288379b',
				logoURI: 'https://tokens.1inch.io/0x0de05f6447ab4d22c8827449ee4ba2d5c288379b.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'IXS',
				name: 'Ixs Token',
				decimals: 18,
				address: '0x73d7c860998ca3c01ce8c808f5577d94d545d1b4',
				logoURI: 'https://tokens.1inch.io/0x73d7c860998ca3c01ce8c808f5577d94d545d1b4.png',
				tags: ['tokens']
			},
			{
				symbol: 'agEUR',
				name: 'agEUR',
				decimals: 18,
				address: '0x1a7e4e63778b4f12a199c062f3efdd288afcbce8',
				logoURI: 'https://tokens.1inch.io/0x1a7e4e63778b4f12a199c062f3efdd288afcbce8.png',
				eip2612: true,
				tags: ['tokens', 'PEG:EUR']
			},
			{
				symbol: 'LOOKS',
				name: 'LooksRare Token',
				decimals: 18,
				address: '0xf4d2888d29d722226fafa5d9b24f9164c092421e',
				logoURI: 'https://tokens.1inch.io/0xf4d2888d29d722226fafa5d9b24f9164c092421e.png',
				tags: ['tokens']
			},
			{
				symbol: 'JACY',
				name: 'JACY',
				decimals: 9,
				address: '0x916c5de09cf63f6602d1e1793fb41f6437814a62',
				logoURI: 'https://tokens.1inch.io/0x916c5de09cf63f6602d1e1793fb41f6437814a62.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'ANGLE',
				name: 'ANGLE',
				decimals: 18,
				address: '0x31429d1856ad1377a8a0079410b297e1a9e214c2',
				logoURI: 'https://tokens.1inch.io/0x31429d1856ad1377a8a0079410b297e1a9e214c2.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'AVINOC',
				name: 'AVINOC Token',
				decimals: 18,
				address: '0xf1ca9cb74685755965c7458528a36934df52a3ef',
				logoURI: 'https://tokens.1inch.io/0xf1ca9cb74685755965c7458528a36934df52a3ef.png',
				tags: ['tokens']
			},
			{
				symbol: 'XYZ',
				name: 'XYZ Governance Token',
				decimals: 18,
				address: '0x618679df9efcd19694bb1daa8d00718eacfa2883',
				logoURI: 'https://tokens.1inch.io/0x618679df9efcd19694bb1daa8d00718eacfa2883_1.png',
				tags: ['tokens']
			},
			{
				symbol: 'Metis',
				name: 'Metis Token',
				decimals: 18,
				address: '0x9e32b13ce7f2e80a01932b42553652e053d6ed8e',
				logoURI: 'https://tokens.1inch.io/0x9e32b13ce7f2e80a01932b42553652e053d6ed8e.png',
				tags: ['tokens']
			},
			{
				symbol: 'SIS',
				name: 'Symbiosis',
				decimals: 18,
				address: '0xd38bb40815d2b0c2d2c866e0c72c5728ffc76dd9',
				logoURI: 'https://tokens.1inch.io/0xd38bb40815d2b0c2d2c866e0c72c5728ffc76dd9.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'DEPO',
				name: 'DePo Token',
				decimals: 18,
				address: '0xa5def515cfd373d17830e7c1de1639cb3530a112',
				logoURI: 'https://tokens.1inch.io/0xa5def515cfd373d17830e7c1de1639cb3530a112.png',
				tags: ['tokens']
			},
			{
				symbol: 'X2Y2',
				name: 'X2Y2Token',
				decimals: 18,
				address: '0x1e4ede388cbc9f4b5c79681b7f94d36a11abebc9',
				logoURI: 'https://tokens.1inch.io/0x1e4ede388cbc9f4b5c79681b7f94d36a11abebc9.png',
				tags: ['tokens']
			},
			{
				symbol: 'WRLD',
				name: 'NFT Worlds',
				decimals: 18,
				address: '0xd5d86fc8d5c0ea1ac1ac5dfab6e529c9967a45e9',
				logoURI: 'https://tokens.1inch.io/0xd5d86fc8d5c0ea1ac1ac5dfab6e529c9967a45e9.png',
				tags: ['tokens']
			},
			{
				symbol: 'VADER',
				name: 'Vader',
				decimals: 18,
				address: '0x2602278ee1882889b946eb11dc0e810075650983',
				logoURI: 'https://tokens.1inch.io/0x2602278ee1882889b946eb11dc0e810075650983.png',
				tags: ['tokens']
			},
			{
				symbol: 'UFO',
				name: 'THE TRUTH',
				decimals: 18,
				address: '0x249e38ea4102d0cf8264d3701f1a0e39c4f2dc3b',
				logoURI: 'https://tokens.1inch.io/0x249e38ea4102d0cf8264d3701f1a0e39c4f2dc3b.png',
				tags: ['tokens']
			},
			{
				symbol: 'IMX',
				name: 'Immutable X',
				decimals: 18,
				address: '0xf57e7e7c23978c3caec3c3548e3d615c346e79ff',
				logoURI: 'https://tokens.1inch.io/0xf57e7e7c23978c3caec3c3548e3d615c346e79ff.png',
				tags: ['tokens']
			},
			{
				symbol: 'TOKE',
				name: 'Tokemak',
				decimals: 18,
				address: '0x2e9d63788249371f1dfc918a52f8d799f4a38c94',
				logoURI: 'https://tokens.1inch.io/0x2e9d63788249371f1dfc918a52f8d799f4a38c94.png',
				tags: ['tokens']
			},
			{
				symbol: 'NCR',
				name: 'Neos Credits',
				decimals: 18,
				address: '0xdb5c3c46e28b53a39c255aa39a411dd64e5fed9c',
				logoURI: 'https://tokens.1inch.io/0xdb5c3c46e28b53a39c255aa39a411dd64e5fed9c.png',
				tags: ['tokens']
			},
			{
				symbol: 'SYN',
				name: 'Synapse',
				decimals: 18,
				address: '0x0f2d719407fdbeff09d87557abb7232601fd9f29',
				logoURI: 'https://tokens.1inch.io/0x0f2d719407fdbeff09d87557abb7232601fd9f29.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'NFTI_2',
				name: 'Scalara NFT Index',
				decimals: 18,
				address: '0x525ef76138bf76118d786dbedeae5f87aabf4a81',
				logoURI: 'https://tokens.1inch.io/0x525ef76138bf76118d786dbedeae5f87aabf4a81.png',
				displayedSymbol: 'NFTI',
				tags: ['tokens']
			},
			{
				symbol: 'WFLOW',
				name: 'Wrapped Flow',
				decimals: 18,
				address: '0x5c147e74d63b1d31aa3fd78eb229b65161983b2b',
				logoURI: 'https://tokens.1inch.io/0x5c147e74d63b1d31aa3fd78eb229b65161983b2b.png',
				tags: ['tokens']
			},
			{
				symbol: 'BST',
				name: 'BlocksquareToken',
				decimals: 18,
				address: '0x509a38b7a1cc0dcd83aa9d06214663d9ec7c7f4a',
				logoURI: 'https://tokens.1inch.io/0x509a38b7a1cc0dcd83aa9d06214663d9ec7c7f4a.png',
				tags: ['tokens']
			},
			{
				symbol: 'XDB',
				name: 'digitalbits',
				decimals: 7,
				address: '0xb9eefc4b0d472a44be93970254df4f4016569d27',
				logoURI: 'https://tokens.1inch.io/0xb9eefc4b0d472a44be93970254df4f4016569d27.png',
				tags: ['tokens']
			},
			{
				symbol: 'stkATOM',
				name: 'pSTAKE Staked ATOM',
				decimals: 6,
				address: '0x44017598f2af1bd733f9d87b5017b4e7c1b28dde',
				logoURI: 'https://tokens.1inch.io/0x44017598f2af1bd733f9d87b5017b4e7c1b28dde.png',
				tags: ['tokens']
			},
			{
				symbol: 'THOR',
				name: 'THORSwap Token',
				decimals: 18,
				address: '0xa5f2211b9b8170f694421f2046281775e8468044',
				logoURI: 'https://tokens.1inch.io/0xa5f2211b9b8170f694421f2046281775e8468044.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'FODL',
				name: 'Fodl',
				decimals: 18,
				address: '0x4c2e59d098df7b6cbae0848d66de2f8a4889b9c3',
				logoURI: 'https://tokens.1inch.io/0x4c2e59d098df7b6cbae0848d66de2f8a4889b9c3.png',
				tags: ['tokens']
			},
			{
				symbol: 'APE',
				name: 'ApeCoin',
				decimals: 18,
				address: '0x4d224452801aced8b2f0aebe155379bb5d594381',
				logoURI: 'https://tokens.1inch.io/0x4d224452801aced8b2f0aebe155379bb5d594381.png',
				tags: ['tokens']
			},
			{
				symbol: 'STG',
				name: 'StargateToken',
				decimals: 18,
				address: '0xaf5191b0de278c7286d6c7cc6ab6bb8a73ba2cd6',
				logoURI: 'https://tokens.1inch.io/0xaf5191b0de278c7286d6c7cc6ab6bb8a73ba2cd6.png',
				tags: ['tokens']
			},
			{
				symbol: 'SLP',
				name: 'Smooth Love Potion',
				decimals: 0,
				address: '0xcc8fa225d80b9c7d42f96e9570156c65d6caaa25',
				logoURI: 'https://tokens.1inch.io/0xcc8fa225d80b9c7d42f96e9570156c65d6caaa25.png',
				tags: ['tokens']
			},
			{
				symbol: 'OHM',
				name: 'Olympus',
				decimals: 9,
				address: '0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5',
				logoURI: 'https://tokens.1inch.io/0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'COW',
				name: 'CoW Protocol Token',
				decimals: 18,
				address: '0xdef1ca1fb7fbcdc777520aa7f396b4e015f497ab',
				logoURI: 'https://tokens.1inch.io/0xdef1ca1fb7fbcdc777520aa7f396b4e015f497ab.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'KNIGHT',
				name: 'CitaDAO',
				decimals: 18,
				address: '0x3541a5c1b04adaba0b83f161747815cd7b1516bc',
				logoURI: 'https://tokens.1inch.io/0x3541a5c1b04adaba0b83f161747815cd7b1516bc.png',
				tags: ['tokens']
			},
			{
				symbol: 'CULT',
				name: 'Cult DAO',
				decimals: 18,
				address: '0xf0f9d895aca5c8678f706fb8216fa22957685a13',
				logoURI: 'https://tokens.1inch.io/0xf0f9d895aca5c8678f706fb8216fa22957685a13.png',
				eip2612: true,
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'MLT',
				name: 'Media Licensing Token',
				decimals: 18,
				address: '0x9506d37f70eb4c3d79c398d326c871abbf10521d',
				logoURI: 'https://tokens.1inch.io/0x9506d37f70eb4c3d79c398d326c871abbf10521d.png',
				tags: ['tokens']
			},
			{
				symbol: 'ORE',
				name: 'pTokens ORE',
				decimals: 18,
				address: '0x4f640f2529ee0cf119a2881485845fa8e61a782a',
				logoURI: 'https://tokens.1inch.io/0x4f640f2529ee0cf119a2881485845fa8e61a782a.png',
				tags: ['tokens']
			},
			{
				symbol: 'FNC',
				name: 'Fancy Games',
				decimals: 18,
				address: '0x7f280dac515121dcda3eac69eb4c13a52392cace',
				logoURI: 'https://tokens.1inch.io/0x7f280dac515121dcda3eac69eb4c13a52392cace.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'icETH',
				name: 'Interest Compounding ETH Index',
				decimals: 18,
				address: '0x7c07f7abe10ce8e33dc6c5ad68fe033085256a84',
				logoURI: 'https://tokens.1inch.io/0x7c07f7abe10ce8e33dc6c5ad68fe033085256a84.png',
				tags: ['tokens']
			},
			{
				symbol: 'QUAD',
				name: 'Quadency Token',
				decimals: 18,
				address: '0xab2a7b5876d707e0126b3a75ef7781c77c8877ee',
				logoURI: 'https://tokens.1inch.io/0xab2a7b5876d707e0126b3a75ef7781c77c8877ee.png',
				tags: ['tokens']
			},
			{
				symbol: 'MANDOX',
				name: 'Mandox',
				decimals: 9,
				address: '0x33d203fa03bb30b133de0fe2d6533c268ba286b6',
				logoURI: 'https://tokens.1inch.io/0x33d203fa03bb30b133de0fe2d6533c268ba286b6.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'NFP',
				name: 'New Frontier Presents',
				decimals: 9,
				address: '0x299698b4b44bd6d023981a7317798dee12860834',
				logoURI: 'https://tokens.1inch.io/0x299698b4b44bd6d023981a7317798dee12860834.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'DERC',
				name: 'DeRace Token',
				decimals: 18,
				address: '0x9fa69536d1cda4a04cfb50688294de75b505a9ae',
				logoURI: 'https://tokens.1inch.io/0x9fa69536d1cda4a04cfb50688294de75b505a9ae.png',
				tags: ['tokens']
			},
			{
				symbol: 'STACK',
				name: 'StackOS',
				decimals: 18,
				address: '0x56a86d648c435dc707c8405b78e2ae8eb4e60ba4',
				logoURI: 'https://tokens.1inch.io/0x56a86d648c435dc707c8405b78e2ae8eb4e60ba4.png',
				tags: ['tokens']
			},
			{
				symbol: 'PLA',
				name: 'PlayDapp Token',
				decimals: 18,
				address: '0x3a4f40631a4f906c2bad353ed06de7a5d3fcb430',
				logoURI: 'https://tokens.1inch.io/0x3a4f40631a4f906c2bad353ed06de7a5d3fcb430.png',
				tags: ['tokens']
			},
			{
				symbol: 'gOHM',
				name: 'Governance OHM',
				decimals: 18,
				address: '0x0ab87046fbb341d058f17cbc4c1133f25a20a52f',
				logoURI: 'https://tokens.1inch.io/0x0ab87046fbb341d058f17cbc4c1133f25a20a52f.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'LSS',
				name: 'Lossless Token',
				decimals: 18,
				address: '0x3b9be07d622accaed78f479bc0edabfd6397e320',
				logoURI: 'https://tokens.1inch.io/0x3b9be07d622accaed78f479bc0edabfd6397e320.png',
				tags: ['tokens']
			},
			{
				symbol: 'KLEE',
				name: 'KleeKai',
				decimals: 9,
				address: '0xa67e9f021b9d208f7e3365b2a155e3c55b27de71',
				logoURI: 'https://tokens.1inch.io/0xa67e9f021b9d208f7e3365b2a155e3c55b27de71.png',
				tags: ['tokens']
			},
			{
				symbol: 'VLX',
				name: 'VLX',
				decimals: 18,
				address: '0x8c543aed163909142695f2d2acd0d55791a9edb9',
				logoURI: 'https://tokens.1inch.io/0x8c543aed163909142695f2d2acd0d55791a9edb9.png',
				tags: ['tokens']
			},
			{
				symbol: 'DATA_1',
				name: 'Streamr',
				decimals: 18,
				address: '0x8f693ca8d21b157107184d29d398a8d082b38b76',
				logoURI: 'https://tokens.1inch.io/0x8f693ca8d21b157107184d29d398a8d082b38b76.png',
				eip2612: true,
				displayedSymbol: 'DATA',
				tags: ['tokens']
			},
			{
				symbol: 'BCMC',
				name: 'Blockchain Monster Coin',
				decimals: 18,
				address: '0x2ba8349123de45e931a8c8264c332e6e9cf593f9',
				logoURI: 'https://tokens.1inch.io/0x2ba8349123de45e931a8c8264c332e6e9cf593f9.png',
				tags: ['tokens']
			},
			{
				symbol: 'GMEE',
				name: 'GAMEE',
				decimals: 18,
				address: '0xd9016a907dc0ecfa3ca425ab20b6b785b42f2373',
				logoURI: 'https://tokens.1inch.io/0xd9016a907dc0ecfa3ca425ab20b6b785b42f2373.png',
				tags: ['tokens']
			},
			{
				symbol: 'UST_1',
				name: 'UST (Wormhole)',
				decimals: 6,
				address: '0xa693b19d2931d498c5b318df961919bb4aee87a5',
				logoURI: 'https://tokens.1inch.io/0xa693b19d2931d498c5b318df961919bb4aee87a5.png',
				displayedSymbol: 'UST',
				tags: ['tokens']
			},
			{
				symbol: 'VISION',
				name: 'Vision Token',
				decimals: 18,
				address: '0xf406f7a9046793267bc276908778b29563323996',
				logoURI: 'https://tokens.1inch.io/0xf406f7a9046793267bc276908778b29563323996.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'MCO2',
				name: 'Moss Carbon Credit',
				decimals: 18,
				address: '0xfc98e825a2264d890f9a1e68ed50e1526abccacd',
				logoURI: 'https://tokens.1inch.io/0xfc98e825a2264d890f9a1e68ed50e1526abccacd.png',
				tags: ['tokens']
			},
			{
				symbol: 'EFI',
				name: 'Efinity Token',
				decimals: 18,
				address: '0x656c00e1bcd96f256f224ad9112ff426ef053733',
				logoURI: 'https://tokens.1inch.io/0x656c00e1bcd96f256f224ad9112ff426ef053733.png',
				tags: ['tokens']
			},
			{
				symbol: 'DWEB',
				name: 'DecentraWeb',
				decimals: 18,
				address: '0xe7f58a92476056627f9fdb92286778abd83b285f',
				logoURI: 'https://tokens.1inch.io/0xe7f58a92476056627f9fdb92286778abd83b285f.png',
				tags: ['tokens']
			},
			{
				symbol: 'YEL',
				name: 'YEL Token',
				decimals: 18,
				address: '0x7815bda662050d84718b988735218cffd32f75ea',
				logoURI: 'https://tokens.1inch.io/0x7815bda662050d84718b988735218cffd32f75ea.png',
				tags: ['tokens']
			},
			{
				symbol: 'MYST',
				name: 'Mysterium',
				decimals: 18,
				address: '0x4cf89ca06ad997bc732dc876ed2a7f26a9e7f361',
				logoURI: 'https://tokens.1inch.io/0x4cf89ca06ad997bc732dc876ed2a7f26a9e7f361.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'PAR',
				name: 'PAR Stablecoin',
				decimals: 18,
				address: '0x68037790a0229e9ce6eaa8a99ea92964106c4703',
				logoURI: 'https://tokens.1inch.io/0x68037790a0229e9ce6eaa8a99ea92964106c4703.png',
				tags: ['tokens']
			},
			{
				symbol: 'LUFFY',
				name: 'LUFFY',
				decimals: 9,
				address: '0x7121d00b4fa18f13da6c2e30d19c04844e6afdc8',
				logoURI: 'https://tokens.1inch.io/0x7121d00b4fa18f13da6c2e30d19c04844e6afdc8.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'SHEESHA',
				name: 'Sheesha Finance',
				decimals: 18,
				address: '0x232fb065d9d24c34708eedbf03724f2e95abe768',
				logoURI: 'https://tokens.1inch.io/0x232fb065d9d24c34708eedbf03724f2e95abe768.png',
				tags: ['tokens']
			},
			{
				symbol: 'USDD',
				name: 'Decentralized USD',
				decimals: 18,
				address: '0x0c10bf8fcb7bf5412187a595ab97a3609160b5c6',
				logoURI: 'https://tokens.1inch.io/0x0c10bf8fcb7bf5412187a595ab97a3609160b5c6.png',
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'HOP',
				name: 'Hop',
				decimals: 18,
				address: '0xc5102fe9359fd9a28f877a67e36b0f050d81a3cc',
				logoURI: 'https://tokens.1inch.io/0xc5102fe9359fd9a28f877a67e36b0f050d81a3cc.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'PDI',
				name: 'Phuture DeFi Index',
				decimals: 18,
				address: '0x632806bf5c8f062932dd121244c9fbe7becb8b48',
				logoURI: 'https://tokens.1inch.io/0x632806bf5c8f062932dd121244c9fbe7becb8b48.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'SOON',
				name: 'RealT SOON Token',
				decimals: 18,
				address: '0xaa2c0cf54cb418eb24e7e09053b82c875c68bb88',
				logoURI: 'https://tokens.1inch.io/0xaa2c0cf54cb418eb24e7e09053b82c875c68bb88.png',
				tags: ['tokens']
			},
			{
				symbol: '3Crv',
				name: 'Curve.fi DAI/USDC/USDT',
				decimals: 18,
				address: '0x6c3f90f043a72fa612cbac8115ee7e52bde6e490',
				logoURI: 'https://tokens.1inch.io/0x6c3f90f043a72fa612cbac8115ee7e52bde6e490.png',
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'XCAD',
				name: 'XCAD Token',
				decimals: 18,
				address: '0x7659ce147d0e714454073a5dd7003544234b6aa0',
				logoURI: 'https://tokens.1inch.io/0x7659ce147d0e714454073a5dd7003544234b6aa0.png',
				tags: ['tokens']
			},
			{
				symbol: 'UNIX',
				name: 'UniX Gaming',
				decimals: 18,
				address: '0xddd6a0ecc3c6f6c102e5ea3d8af7b801d1a77ac8',
				logoURI: 'https://tokens.1inch.io/0xddd6a0ecc3c6f6c102e5ea3d8af7b801d1a77ac8.png',
				tags: ['tokens']
			},
			{
				symbol: 'IQ',
				name: 'Everipedia IQ',
				decimals: 18,
				address: '0x579cea1889991f68acc35ff5c3dd0621ff29b0c9',
				logoURI: 'https://tokens.1inch.io/0x579cea1889991f68acc35ff5c3dd0621ff29b0c9.png',
				tags: ['tokens']
			},
			{
				symbol: 'XZAR',
				name: 'South African Tether',
				decimals: 18,
				address: '0x48f07301e9e29c3c38a80ae8d9ae771f224f1054',
				logoURI: 'https://tokens.1inch.io/0x48f07301e9e29c3c38a80ae8d9ae771f224f1054.png',
				tags: ['tokens']
			},
			{
				symbol: 'DUCKER',
				name: 'Duckereum',
				decimals: 18,
				address: '0xa52bffad02b1fe3f86a543a4e81962d3b3bb01a7',
				logoURI: 'https://tokens.1inch.io/0xa52bffad02b1fe3f86a543a4e81962d3b3bb01a7.png',
				tags: ['tokens']
			},
			{
				symbol: 'COT',
				name: 'CosplayToken',
				decimals: 18,
				address: '0x5cac718a3ae330d361e39244bf9e67ab17514ce8',
				logoURI: 'https://tokens.1inch.io/0x5cac718a3ae330d361e39244bf9e67ab17514ce8.png',
				tags: ['tokens']
			},
			{
				symbol: 'EUROC',
				name: 'Euro Coin',
				decimals: 6,
				address: '0x1abaea1f7c830bd89acc67ec4af516284b1bc33c',
				logoURI: 'https://tokens.1inch.io/0x1abaea1f7c830bd89acc67ec4af516284b1bc33c.png',
				eip2612: true,
				tags: ['tokens', 'PEG:EUR']
			},
			{
				symbol: 'DG_2',
				name: 'Decentral Games',
				decimals: 18,
				address: '0x4b520c812e8430659fc9f12f6d0c39026c83588d',
				logoURI: 'https://tokens.1inch.io/0x4b520c812e8430659fc9f12f6d0c39026c83588d.png',
				eip2612: true,
				displayedSymbol: 'DG',
				tags: ['tokens']
			},
			{
				symbol: 'ADS',
				name: 'Adshares',
				decimals: 11,
				address: '0xcfcecfe2bd2fed07a9145222e8a7ad9cf1ccd22a',
				logoURI: 'https://tokens.1inch.io/0xcfcecfe2bd2fed07a9145222e8a7ad9cf1ccd22a.png',
				tags: ['tokens']
			},
			{
				symbol: 'IOTX',
				name: 'IoTeX Network',
				decimals: 18,
				address: '0x6fb3e0a217407efff7ca062d46c26e5d60a14d69',
				logoURI: 'https://tokens.1inch.io/0x6fb3e0a217407efff7ca062d46c26e5d60a14d69.png',
				tags: ['tokens']
			},
			{
				symbol: 'PONY',
				name: 'PONY Index',
				decimals: 18,
				address: '0x0d97fee619d955509e54b046c9992b6e9f5b0630',
				logoURI: 'https://tokens.1inch.io/0x0d97fee619d955509e54b046c9992b6e9f5b0630.png',
				tags: ['tokens']
			},
			{
				symbol: 'POP',
				name: 'Popcorn',
				decimals: 18,
				address: '0xd0cd466b34a24fcb2f87676278af2005ca8a78c4',
				logoURI: 'https://tokens.1inch.io/0xd0cd466b34a24fcb2f87676278af2005ca8a78c4.png',
				tags: ['tokens']
			},
			{
				symbol: 'BED',
				name: 'Bankless BED Index',
				decimals: 18,
				address: '0x2af1df3ab0ab157e1e2ad8f88a7d04fbea0c7dc6',
				logoURI: 'https://tokens.1inch.io/0x2af1df3ab0ab157e1e2ad8f88a7d04fbea0c7dc6.png',
				tags: ['tokens']
			},
			{
				symbol: 'DATA',
				name: 'DATA Economy Index',
				decimals: 18,
				address: '0x33d63ba1e57e54779f7ddaeaa7109349344cf5f1',
				logoURI: 'https://tokens.1inch.io/0x33d63ba1e57e54779f7ddaeaa7109349344cf5f1.png',
				tags: ['tokens']
			},
			{
				symbol: 'SALE',
				name: 'DxSale.Network',
				decimals: 18,
				address: '0xf063fe1ab7a291c5d06a86e14730b00bf24cb589',
				logoURI: 'https://tokens.1inch.io/0xf063fe1ab7a291c5d06a86e14730b00bf24cb589.png',
				tags: ['tokens']
			},
			{
				symbol: 'a1INCH',
				name: 'Aave interest bearing 1INCH',
				decimals: 18,
				address: '0xb29130cbcc3f791f077eade0266168e808e5151e',
				logoURI: 'https://tokens.1inch.io/0xb29130cbcc3f791f077eade0266168e808e5151e.png',
				tags: ['tokens']
			},
			{
				symbol: 'SAITAMA',
				name: 'SAITAMA',
				decimals: 9,
				address: '0xce3f08e664693ca792cace4af1364d5e220827b2',
				logoURI: 'https://tokens.1inch.io/0xce3f08e664693ca792cace4af1364d5e220827b2.png',
				tags: ['tokens']
			},
			{
				symbol: 'RPL',
				name: 'Rocket Pool Protocol',
				decimals: 18,
				address: '0xd33526068d116ce69f19a9ee46f0bd304f21a51f',
				logoURI: 'https://tokens.1inch.io/0xd33526068d116ce69f19a9ee46f0bd304f21a51f.png',
				tags: ['tokens']
			},
			{
				symbol: 'GAMMA',
				name: 'Gamma',
				decimals: 18,
				address: '0x6bea7cfef803d1e3d5f7c0103f7ded065644e197',
				logoURI: 'https://tokens.1inch.io/0x6bea7cfef803d1e3d5f7c0103f7ded065644e197.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'BEAN',
				name: 'Bean',
				decimals: 6,
				address: '0xbea0000029ad1c77d3d5d23ba2d8893db9d1efab',
				logoURI: 'https://tokens.1inch.io/0xbea0000029ad1c77d3d5d23ba2d8893db9d1efab.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'VOLT',
				name: 'Volt Inu',
				decimals: 9,
				address: '0x7db5af2b9624e1b3b4bb69d6debd9ad1016a58ac',
				logoURI: 'https://tokens.1inch.io/0x7db5af2b9624e1b3b4bb69d6debd9ad1016a58ac.png',
				tags: ['tokens']
			},
			{
				symbol: 'ICHI',
				name: 'ICHI',
				decimals: 18,
				address: '0x111111517e4929d3dcbdfa7cce55d30d4b6bc4d6',
				logoURI: 'https://tokens.1inch.io/0x111111517e4929d3dcbdfa7cce55d30d4b6bc4d6.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'DEFIT',
				name: 'DIGITAL FITNESS',
				decimals: 18,
				address: '0x84cffa78b2fbbeec8c37391d2b12a04d2030845e',
				logoURI: 'https://tokens.1inch.io/0x84cffa78b2fbbeec8c37391d2b12a04d2030845e.png',
				tags: ['tokens']
			},
			{
				symbol: 'XMON',
				name: 'XMON',
				decimals: 18,
				address: '0x3aada3e213abf8529606924d8d1c55cbdc70bf74',
				logoURI: 'https://tokens.1inch.io/0x3aada3e213abf8529606924d8d1c55cbdc70bf74.png',
				tags: ['tokens']
			},
			{
				symbol: 'SWEAT',
				name: 'SWEAT',
				decimals: 18,
				address: '0xb4b9dc1c77bdbb135ea907fd5a08094d98883a35',
				logoURI: 'https://tokens.1inch.io/0xb4b9dc1c77bdbb135ea907fd5a08094d98883a35.png',
				tags: ['tokens']
			},
			{
				symbol: 'WPT',
				name: 'WPT Investing Corp',
				decimals: 18,
				address: '0x4fd51cb87ffefdf1711112b5bd8ab682e54988ea',
				logoURI: 'https://tokens.1inch.io/0x4fd51cb87ffefdf1711112b5bd8ab682e54988ea.png',
				tags: ['tokens']
			},
			{
				symbol: 'SDL',
				name: 'Saddle DAO',
				decimals: 18,
				address: '0xf1dc500fde233a4055e25e5bbf516372bc4f6871',
				logoURI: 'https://tokens.1inch.io/0xf1dc500fde233a4055e25e5bbf516372bc4f6871.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'BTRST',
				name: 'BTRST',
				decimals: 18,
				address: '0x799ebfabe77a6e34311eeee9825190b9ece32824',
				logoURI: 'https://tokens.1inch.io/0x799ebfabe77a6e34311eeee9825190b9ece32824.png',
				tags: ['tokens']
			},
			{
				symbol: 'FOLD',
				name: 'Manifold Finance',
				decimals: 18,
				address: '0xd084944d3c05cd115c09d072b9f44ba3e0e45921',
				logoURI: 'https://tokens.1inch.io/0xd084944d3c05cd115c09d072b9f44ba3e0e45921.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'AMPLIFI',
				name: 'Amplifi',
				decimals: 18,
				address: '0xd23367155b55d67492dfdc0fc7f8bb1df7114fd9',
				logoURI: 'https://tokens.1inch.io/0xd23367155b55d67492dfdc0fc7f8bb1df7114fd9.png',
				tags: ['tokens']
			},
			{
				symbol: 'BOB',
				name: 'BOB',
				decimals: 18,
				address: '0xb0b195aefa3650a6908f15cdac7d92f8a5791b0b',
				logoURI: 'https://tokens.1inch.io/0xb0b195aefa3650a6908f15cdac7d92f8a5791b0b.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'MYC',
				name: 'Mycelium',
				decimals: 18,
				address: '0x4b13006980acb09645131b91d259eaa111eaf5ba',
				logoURI: 'https://tokens.1inch.io/0x4b13006980acb09645131b91d259eaa111eaf5ba.png',
				tags: ['tokens']
			},
			{
				symbol: 'OGV',
				name: 'Origin Dollar Governance',
				decimals: 18,
				address: '0x9c354503c38481a7a7a51629142963f98ecc12d0',
				logoURI: 'https://tokens.1inch.io/0x9c354503c38481a7a7a51629142963f98ecc12d0.png',
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'DOLA',
				name: 'Dola USD Stablecoin',
				decimals: 18,
				address: '0x865377367054516e17014ccded1e7d814edc9ce4',
				logoURI: 'https://tokens.1inch.io/0x865377367054516e17014ccded1e7d814edc9ce4.png',
				eip2612: true,
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'KROM',
				name: 'Kromatika',
				decimals: 18,
				address: '0x3af33bef05c2dcb3c7288b77fe1c8d2aeba4d789',
				logoURI: 'https://tokens.1inch.io/0x3af33bef05c2dcb3c7288b77fe1c8d2aeba4d789.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'MLP',
				name: 'MyLiquidityPartner',
				decimals: 18,
				address: '0xe22020f47b7378dfedcedd2c81d4137c22fe1152',
				logoURI: 'https://tokens.1inch.io/0xe22020f47b7378dfedcedd2c81d4137c22fe1152.png',
				tags: ['tokens']
			},
			{
				symbol: 'SAFE',
				name: 'Safe Token',
				decimals: 18,
				address: '0x5afe3855358e112b5647b952709e6165e1c1eeee',
				logoURI: 'https://tokens.1inch.io/0x5afe3855358e112b5647b952709e6165e1c1eeee.png',
				tags: ['tokens']
			},
			{
				symbol: 'JASMY',
				name: 'JasmyCoin',
				decimals: 18,
				address: '0x7420b4b9a0110cdc71fb720908340c03f9bc03ec',
				logoURI: 'https://tokens.1inch.io/0x7420b4b9a0110cdc71fb720908340c03f9bc03ec.png',
				tags: ['tokens']
			},
			{
				symbol: 'KALE',
				name: 'Kale Currency',
				decimals: 18,
				address: '0x508626d9a29d13eba26f843a2bd7bf7b00a45be5',
				logoURI: 'https://tokens.1inch.io/0x508626d9a29d13eba26f843a2bd7bf7b00a45be5.png',
				tags: ['tokens']
			},
			{
				symbol: 'PILOT',
				name: 'Unipilot',
				decimals: 18,
				address: '0x37c997b35c619c21323f3518b9357914e8b99525',
				logoURI: 'https://tokens.1inch.io/0x37c997b35c619c21323f3518b9357914e8b99525.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'USHI',
				name: 'Ushi',
				decimals: 18,
				address: '0x6dca182ac5e3f99985bc4ee0f726d6472ab1ec55',
				logoURI: 'https://tokens.1inch.io/0x6dca182ac5e3f99985bc4ee0f726d6472ab1ec55.png',
				tags: ['tokens']
			},
			{
				symbol: 'BCT',
				name: 'BananaClubToken',
				decimals: 9,
				address: '0x350d3f0f41b5b21f0e252fe2645ae9d55562150a',
				logoURI: 'https://tokens.1inch.io/0x350d3f0f41b5b21f0e252fe2645ae9d55562150a.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'TENSHI',
				name: 'TENSHI v2',
				decimals: 18,
				address: '0x52662717e448be36cb54588499d5a8328bd95292',
				logoURI: 'https://tokens.1inch.io/0x52662717e448be36cb54588499d5a8328bd95292.png',
				tags: ['tokens']
			},
			{
				symbol: 'XIDR',
				name: 'XIDR',
				decimals: 6,
				address: '0xebf2096e01455108badcbaf86ce30b6e5a72aa52',
				logoURI: 'https://tokens.1inch.io/0xebf2096e01455108badcbaf86ce30b6e5a72aa52.png',
				tags: ['tokens']
			},
			{
				symbol: 'HFT',
				name: 'Hashflow',
				decimals: 18,
				address: '0xb3999f658c0391d94a37f7ff328f3fec942bcadc',
				logoURI: 'https://tokens.1inch.io/0xb3999f658c0391d94a37f7ff328f3fec942bcadc.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'CAPS',
				name: 'Capsule Coin',
				decimals: 18,
				address: '0x03be5c903c727ee2c8c4e9bc0acc860cca4715e2',
				logoURI: 'https://tokens.1inch.io/0x03be5c903c727ee2c8c4e9bc0acc860cca4715e2.png',
				tags: ['tokens']
			},
			{
				symbol: 'GLDN',
				name: 'Gold Retriever',
				decimals: 18,
				address: '0xfeeb4d0f5463b1b04351823c246bdb84c4320cc2',
				logoURI: 'https://tokens.1inch.io/0xfeeb4d0f5463b1b04351823c246bdb84c4320cc2.png',
				tags: ['tokens']
			},
			{
				symbol: 'sETH2',
				name: 'StakeWise Staked ETH2',
				decimals: 18,
				address: '0xfe2e637202056d30016725477c5da089ab0a043a',
				logoURI: 'https://tokens.1inch.io/0xfe2e637202056d30016725477c5da089ab0a043a.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'ETHIX',
				name: 'Ethix',
				decimals: 18,
				address: '0xfd09911130e6930bf87f2b0554c44f400bd80d3e',
				logoURI: 'https://tokens.1inch.io/0xfd09911130e6930bf87f2b0554c44f400bd80d3e.png',
				tags: ['tokens']
			},
			{
				symbol: 'PROM',
				name: 'Token Prometeus Network',
				decimals: 18,
				address: '0xfc82bb4ba86045af6f327323a46e80412b91b27d',
				logoURI: 'https://tokens.1inch.io/0xfc82bb4ba86045af6f327323a46e80412b91b27d.png',
				tags: ['tokens']
			},
			{
				symbol: 'NTVRK',
				name: 'NETVRK',
				decimals: 18,
				address: '0xfc0d6cf33e38bce7ca7d89c0e292274031b7157a',
				logoURI: 'https://tokens.1inch.io/0xfc0d6cf33e38bce7ca7d89c0e292274031b7157a.png',
				tags: ['tokens']
			},
			{
				symbol: 'XDEFI',
				name: 'XDEFI',
				decimals: 18,
				address: '0x72b886d09c117654ab7da13a14d603001de0b777',
				logoURI: 'https://tokens.1inch.io/0x72b886d09c117654ab7da13a14d603001de0b777.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'DIVER',
				name: 'DivergenceProtocol',
				decimals: 18,
				address: '0xfb782396c9b20e564a64896181c7ac8d8979d5f4',
				logoURI: 'https://tokens.1inch.io/0xfb782396c9b20e564a64896181c7ac8d8979d5f4.png',
				tags: ['tokens']
			},
			{
				symbol: 'SAITO',
				name: 'SAITO',
				decimals: 18,
				address: '0xfa14fa6958401314851a17d6c5360ca29f74b57b',
				logoURI: 'https://tokens.1inch.io/0xfa14fa6958401314851a17d6c5360ca29f74b57b.png',
				tags: ['tokens']
			},
			{
				symbol: 'DOE',
				name: 'Dogs Of Elon',
				decimals: 18,
				address: '0xf8e9f10c22840b613cda05a0c5fdb59a4d6cd7ef',
				logoURI: 'https://tokens.1inch.io/0xf8e9f10c22840b613cda05a0c5fdb59a4d6cd7ef.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'WMLK',
				name: 'Wrapped MiL.k',
				decimals: 8,
				address: '0xf87c4b9c0c1528147cac4e05b7ac349a9ab23a12',
				logoURI: 'https://tokens.1inch.io/0xf87c4b9c0c1528147cac4e05b7ac349a9ab23a12.png',
				tags: ['tokens']
			},
			{
				symbol: 'JELLY',
				name: 'Jelly Token',
				decimals: 18,
				address: '0xf5f06ffa53ad7f5914f493f16e57b56c8dd2ea80',
				logoURI: 'https://tokens.1inch.io/0xf5f06ffa53ad7f5914f493f16e57b56c8dd2ea80.png',
				tags: ['tokens']
			},
			{
				symbol: 'OCT',
				name: 'Octopus Network Token',
				decimals: 18,
				address: '0xf5cfbc74057c610c8ef151a439252680ac68c6dc',
				logoURI: 'https://tokens.1inch.io/0xf5cfbc74057c610c8ef151a439252680ac68c6dc.png',
				tags: ['tokens']
			},
			{
				symbol: 'CAW',
				name: 'A Hunters Dream',
				decimals: 18,
				address: '0xf3b9569f82b18aef890de263b84189bd33ebe452',
				logoURI: 'https://tokens.1inch.io/0xf3b9569f82b18aef890de263b84189bd33ebe452.png',
				tags: ['tokens']
			},
			{
				symbol: 'MON',
				name: 'Moneta',
				decimals: 18,
				address: '0x1ea48b9965bb5086f3b468e50ed93888a661fc17',
				logoURI: 'https://tokens.1inch.io/0x1ea48b9965bb5086f3b468e50ed93888a661fc17.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'DCHF',
				name: 'Defi Franc',
				decimals: 18,
				address: '0x045da4bfe02b320f4403674b3b7d121737727a36',
				logoURI: 'https://tokens.1inch.io/0x045da4bfe02b320f4403674b3b7d121737727a36.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'WNCG',
				name: 'Wrapped NCG',
				decimals: 18,
				address: '0xf203ca1769ca8e9e8fe1da9d147db68b6c919817',
				logoURI: 'https://tokens.1inch.io/0xf203ca1769ca8e9e8fe1da9d147db68b6c919817.png',
				tags: ['tokens']
			},
			{
				symbol: 'oSQTH',
				name: 'Opyn Squeeth',
				decimals: 18,
				address: '0xf1b99e3e573a1a9c5e6b2ce818b617f0e664e86b',
				logoURI: 'https://tokens.1inch.io/0xf1b99e3e573a1a9c5e6b2ce818b617f0e664e86b.png',
				tags: ['tokens']
			},
			{
				symbol: 'VEMP',
				name: 'vEmpire Gamer Token',
				decimals: 18,
				address: '0xcfeb09c3c5f0f78ad72166d55f9e6e9a60e96eec',
				logoURI: 'https://tokens.1inch.io/0xcfeb09c3c5f0f78ad72166d55f9e6e9a60e96eec.png',
				tags: ['tokens']
			},
			{
				symbol: '$DOSA',
				name: 'Dosa',
				decimals: 18,
				address: '0xee2b297408063e0967096bafdcfd1278d5bf1b8a',
				logoURI: 'https://tokens.1inch.io/0xee2b297408063e0967096bafdcfd1278d5bf1b8a.png',
				tags: ['tokens']
			},
			{
				symbol: 'ARIA20',
				name: 'ARIANEE',
				decimals: 18,
				address: '0xedf6568618a00c6f0908bf7758a16f76b6e04af9',
				logoURI: 'https://tokens.1inch.io/0xedf6568618a00c6f0908bf7758a16f76b6e04af9.png',
				tags: ['tokens']
			},
			{
				symbol: 'RAINI',
				name: 'Rainicorn',
				decimals: 18,
				address: '0xeb953eda0dc65e3246f43dc8fa13f35623bdd5ed',
				logoURI: 'https://tokens.1inch.io/0xeb953eda0dc65e3246f43dc8fa13f35623bdd5ed.png',
				tags: ['tokens']
			},
			{
				symbol: 'NUM',
				name: 'NUM Token',
				decimals: 18,
				address: '0x3496b523e5c00a4b4150d6721320cddb234c3079',
				logoURI: 'https://tokens.1inch.io/0x3496b523e5c00a4b4150d6721320cddb234c3079.png',
				tags: ['tokens']
			},
			{
				symbol: 'PAD',
				name: 'NearPad Token',
				decimals: 18,
				address: '0xea7cc765ebc94c4805e3bff28d7e4ae48d06468a',
				logoURI: 'https://tokens.1inch.io/0xea7cc765ebc94c4805e3bff28d7e4ae48d06468a.png',
				tags: ['tokens']
			},
			{
				symbol: 'JPEG',
				name: 'JPEG’d Governance Token',
				decimals: 18,
				address: '0xe80c0cd204d654cebe8dd64a4857cab6be8345a3',
				logoURI: 'https://tokens.1inch.io/0xe80c0cd204d654cebe8dd64a4857cab6be8345a3.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'DEC',
				name: 'DarkEnergyCrystals',
				decimals: 3,
				address: '0x9393fdc77090f31c7db989390d43f454b1a6e7f3',
				logoURI: 'https://tokens.1inch.io/0x9393fdc77090f31c7db989390d43f454b1a6e7f3.png',
				tags: ['tokens']
			},
			{
				symbol: 'RAIL',
				name: 'Rail',
				decimals: 18,
				address: '0xe76c6c83af64e4c60245d8c7de953df673a7a33d',
				logoURI: 'https://tokens.1inch.io/0xe76c6c83af64e4c60245d8c7de953df673a7a33d.png',
				tags: ['tokens']
			},
			{
				symbol: 'RDT',
				name: 'Ridotto',
				decimals: 18,
				address: '0x4740735aa98dc8aa232bd049f8f0210458e7fca3',
				logoURI: 'https://tokens.1inch.io/0x4740735aa98dc8aa232bd049f8f0210458e7fca3.png',
				tags: ['tokens']
			},
			{
				symbol: 'SOL',
				name: 'Wrapped SOL',
				decimals: 9,
				address: '0xd31a59c85ae9d8edefec411d448f90841571b89c',
				logoURI: 'https://tokens.1inch.io/0xd31a59c85ae9d8edefec411d448f90841571b89c.png',
				tags: ['tokens']
			},
			{
				symbol: 'KEYS',
				name: 'Keys',
				decimals: 9,
				address: '0xe0a189c975e4928222978a74517442239a0b86ff',
				logoURI: 'https://tokens.1inch.io/0xe0a189c975e4928222978a74517442239a0b86ff.png',
				tags: ['tokens']
			},
			{
				symbol: 'CUBE',
				name: 'Somnium Space Cubes',
				decimals: 8,
				address: '0xdf801468a808a32656d2ed2d2d80b72a129739f4',
				logoURI: 'https://tokens.1inch.io/0xdf801468a808a32656d2ed2d2d80b72a129739f4.png',
				tags: ['tokens']
			},
			{
				symbol: 'UWL',
				name: 'UniWhales.io',
				decimals: 18,
				address: '0xdbdd6f355a37b94e6c7d32fef548e98a280b8df5',
				logoURI: 'https://tokens.1inch.io/0xdbdd6f355a37b94e6c7d32fef548e98a280b8df5.png',
				tags: ['tokens']
			},
			{
				symbol: 'RVF',
				name: 'Rocket Vault',
				decimals: 18,
				address: '0xdc8af07a7861bedd104b8093ae3e9376fc8596d2',
				logoURI: 'https://tokens.1inch.io/0xdc8af07a7861bedd104b8093ae3e9376fc8596d2.png',
				tags: ['tokens']
			},
			{
				symbol: 'ULX',
				name: 'Ultron',
				decimals: 18,
				address: '0x5aa158404fed6b4730c13f49d3a7f820e14a636f',
				logoURI: 'https://tokens.1inch.io/0x5aa158404fed6b4730c13f49d3a7f820e14a636f.png',
				tags: ['tokens']
			},
			{
				symbol: 'URUS',
				name: 'Aurox Token',
				decimals: 18,
				address: '0xc6dddb5bc6e61e0841c54f3e723ae1f3a807260b',
				logoURI: 'https://tokens.1inch.io/0xc6dddb5bc6e61e0841c54f3e723ae1f3a807260b.png',
				tags: ['tokens']
			},
			{
				symbol: 'POLAR',
				name: 'PolarSync',
				decimals: 18,
				address: '0x58fcaa970339a9b1f8c0a5b4f3fcd7af2ba3075e',
				logoURI: 'https://tokens.1inch.io/0x58fcaa970339a9b1f8c0a5b4f3fcd7af2ba3075e.png',
				tags: ['tokens']
			},
			{
				symbol: 'cbETH',
				name: 'Coinbase Wrapped Staked ETH',
				decimals: 18,
				address: '0xbe9895146f7af43049ca1c1ae358b0541ea49704',
				logoURI: 'https://tokens.1inch.io/0xbe9895146f7af43049ca1c1ae358b0541ea49704.png',
				tags: ['tokens']
			},
			{
				symbol: 'CQT',
				name: 'Covalent Query Token',
				decimals: 18,
				address: '0xd417144312dbf50465b1c641d016962017ef6240',
				logoURI: 'https://tokens.1inch.io/0xd417144312dbf50465b1c641d016962017ef6240.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'MNW',
				name: 'Morpheus.Network',
				decimals: 18,
				address: '0xd3e4ba569045546d09cf021ecc5dfe42b1d7f6e4',
				logoURI: 'https://tokens.1inch.io/0xd3e4ba569045546d09cf021ecc5dfe42b1d7f6e4.png',
				tags: ['tokens']
			},
			{
				symbol: 'MCONTENT',
				name: 'MContent',
				decimals: 6,
				address: '0xd3c51de3e6dd9b53d7f37699afb3ee3bf9b9b3f4',
				logoURI: 'https://tokens.1inch.io/0xd3c51de3e6dd9b53d7f37699afb3ee3bf9b9b3f4.png',
				tags: ['tokens']
			},
			{
				symbol: 'SMI',
				name: 'SafeMoon Inu',
				decimals: 8,
				address: '0xcd7492db29e2ab436e819b249452ee1bbdf52214',
				logoURI: 'https://tokens.1inch.io/0xcd7492db29e2ab436e819b249452ee1bbdf52214.png',
				tags: ['tokens']
			},
			{
				symbol: 'XTM',
				name: 'Torum',
				decimals: 18,
				address: '0xcd1faff6e578fa5cac469d2418c95671ba1a62fe',
				logoURI: 'https://tokens.1inch.io/0xcd1faff6e578fa5cac469d2418c95671ba1a62fe.png',
				tags: ['tokens']
			},
			{
				symbol: 'VEGA',
				name: 'VEGA',
				decimals: 18,
				address: '0xcb84d72e61e383767c4dfeb2d8ff7f4fb89abc6e',
				logoURI: 'https://tokens.1inch.io/0xcb84d72e61e383767c4dfeb2d8ff7f4fb89abc6e.png',
				tags: ['tokens']
			},
			{
				symbol: 'RSS3',
				name: 'RSS3',
				decimals: 18,
				address: '0xc98d64da73a6616c42117b582e832812e7b8d57f',
				logoURI: 'https://tokens.1inch.io/0xc98d64da73a6616c42117b582e832812e7b8d57f.png',
				tags: ['tokens']
			},
			{
				symbol: 'ZZ',
				name: 'ZigZag',
				decimals: 18,
				address: '0xc91a71a1ffa3d8b22ba615ba1b9c01b2bbbf55ad',
				logoURI: 'https://tokens.1inch.io/0xc91a71a1ffa3d8b22ba615ba1b9c01b2bbbf55ad.png',
				tags: ['tokens']
			},
			{
				symbol: 'ECC',
				name: 'Empire Capital',
				decimals: 9,
				address: '0xc84d8d03aa41ef941721a4d77b24bb44d7c7ac55',
				logoURI: 'https://tokens.1inch.io/0xc84d8d03aa41ef941721a4d77b24bb44d7c7ac55.png',
				tags: ['tokens']
			},
			{
				symbol: 'ARC',
				name: 'ARC',
				decimals: 18,
				address: '0xc82e3db60a52cf7529253b4ec688f631aad9e7c2',
				logoURI: 'https://tokens.1inch.io/0xc82e3db60a52cf7529253b4ec688f631aad9e7c2.png',
				tags: ['tokens']
			},
			{
				symbol: 'BabyDoge',
				name: 'Baby Doge Coin',
				decimals: 9,
				address: '0xac57de9c1a09fec648e93eb98875b212db0d460b',
				logoURI: 'https://tokens.1inch.io/0xac57de9c1a09fec648e93eb98875b212db0d460b.png',
				tags: ['tokens']
			},
			{
				symbol: 'BTT',
				name: 'BitTorrent',
				decimals: 18,
				address: '0xc669928185dbce49d2230cc9b0979be6dc797957',
				logoURI: 'https://tokens.1inch.io/0xc669928185dbce49d2230cc9b0979be6dc797957.png',
				tags: ['tokens']
			},
			{
				symbol: 'STARS',
				name: 'Mogul Stars',
				decimals: 18,
				address: '0xc55c2175e90a46602fd42e931f62b3acc1a013ca',
				logoURI: 'https://tokens.1inch.io/0xc55c2175e90a46602fd42e931f62b3acc1a013ca.png',
				tags: ['tokens']
			},
			{
				symbol: 'WCI',
				name: 'WORLD CUP INU',
				decimals: 9,
				address: '0xc5a9bc46a7dbe1c6de493e84a18f02e70e2c5a32',
				logoURI: 'https://tokens.1inch.io/0xc5a9bc46a7dbe1c6de493e84a18f02e70e2c5a32.png',
				tags: ['tokens']
			},
			{
				symbol: 'BTRFLY',
				name: 'BTRFLY',
				decimals: 18,
				address: '0xc55126051b22ebb829d00368f4b12bde432de5da',
				logoURI: 'https://tokens.1inch.io/0xc55126051b22ebb829d00368f4b12bde432de5da.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'ZCX',
				name: 'ZEN Exchange Token',
				decimals: 18,
				address: '0xc52c326331e9ce41f04484d3b5e5648158028804',
				logoURI: 'https://tokens.1inch.io/0xc52c326331e9ce41f04484d3b5e5648158028804.png',
				tags: ['tokens']
			},
			{
				symbol: 'HI',
				name: 'hi Dollar',
				decimals: 18,
				address: '0xc4f6e93aeddc11dc22268488465babcaf09399ac',
				logoURI: 'https://tokens.1inch.io/0xc4f6e93aeddc11dc22268488465babcaf09399ac.png',
				tags: ['tokens']
			},
			{
				symbol: 'QLINDO',
				name: 'Qlindo Realestate Investment Token',
				decimals: 0,
				address: '0xc18c07a18198a6340cf4d94855fe5eb6dd33b46e',
				logoURI: 'https://tokens.1inch.io/0xc18c07a18198a6340cf4d94855fe5eb6dd33b46e.png',
				tags: ['tokens']
			},
			{
				symbol: 'RISE',
				name: 'EverRise',
				decimals: 18,
				address: '0xc17c30e98541188614df99239cabd40280810ca3',
				logoURI: 'https://tokens.1inch.io/0xc17c30e98541188614df99239cabd40280810ca3.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'AURA',
				name: 'Aura',
				decimals: 18,
				address: '0xc0c293ce456ff0ed870add98a0828dd4d2903dbf',
				logoURI: 'https://tokens.1inch.io/0xc0c293ce456ff0ed870add98a0828dd4d2903dbf.png',
				tags: ['tokens']
			},
			{
				symbol: 'CHSB',
				name: 'SwissBorg Token',
				decimals: 8,
				address: '0xba9d4199fab4f26efe3551d490e3821486f135ba',
				logoURI: 'https://tokens.1inch.io/0xba9d4199fab4f26efe3551d490e3821486f135ba.png',
				tags: ['tokens']
			},
			{
				symbol: 'QUARTZ',
				name: 'Sandclock',
				decimals: 18,
				address: '0xba8a621b4a54e61c442f5ec623687e2a942225ef',
				logoURI: 'https://tokens.1inch.io/0xba8a621b4a54e61c442f5ec623687e2a942225ef.png',
				tags: ['tokens']
			},
			{
				symbol: 'RARE',
				name: 'SuperRare',
				decimals: 18,
				address: '0xba5bde662c17e2adff1075610382b9b691296350',
				logoURI: 'https://tokens.1inch.io/0xba5bde662c17e2adff1075610382b9b691296350.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'ARPA',
				name: 'ARPA Token',
				decimals: 18,
				address: '0xba50933c268f567bdc86e1ac131be072c6b0b71a',
				logoURI: 'https://tokens.1inch.io/0xba50933c268f567bdc86e1ac131be072c6b0b71a.png',
				tags: ['tokens']
			},
			{
				symbol: 'bLUSD',
				name: 'bLUSD',
				decimals: 18,
				address: '0xb9d7dddca9a4ac480991865efef82e01273f79c3',
				logoURI: 'https://tokens.1inch.io/0xb9d7dddca9a4ac480991865efef82e01273f79c3.png',
				tags: ['tokens']
			},
			{
				symbol: 'LFT',
				name: 'LendFlare DAO Token',
				decimals: 18,
				address: '0xb620be8a1949aa9532e6a3510132864ef9bc3f82',
				logoURI: 'https://tokens.1inch.io/0xb620be8a1949aa9532e6a3510132864ef9bc3f82.png',
				tags: ['tokens']
			},
			{
				symbol: 'ALD',
				name: 'Aladdin Token',
				decimals: 18,
				address: '0xb26c4b3ca601136daf98593feaeff9e0ca702a8d',
				logoURI: 'https://tokens.1inch.io/0xb26c4b3ca601136daf98593feaeff9e0ca702a8d.png',
				tags: ['tokens']
			},
			{
				symbol: 'FLASH',
				name: 'Flashstake',
				decimals: 18,
				address: '0xb1f1f47061a7be15c69f378cb3f69423bd58f2f8',
				logoURI: 'https://tokens.1inch.io/0xb1f1f47061a7be15c69f378cb3f69423bd58f2f8.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'GF',
				name: 'GuildFi Token',
				decimals: 18,
				address: '0xaaef88cea01475125522e117bfe45cf32044e238',
				logoURI: 'https://tokens.1inch.io/0xaaef88cea01475125522e117bfe45cf32044e238.png',
				tags: ['tokens']
			},
			{
				symbol: 'POLC',
				name: 'Polka City',
				decimals: 18,
				address: '0xaa8330fb2b4d5d07abfe7a72262752a8505c6b37',
				logoURI: 'https://tokens.1inch.io/0xaa8330fb2b4d5d07abfe7a72262752a8505c6b37.png',
				tags: ['tokens']
			},
			{
				symbol: 'GEAR',
				name: 'Gearbox',
				decimals: 18,
				address: '0xba3335588d9403515223f109edc4eb7269a9ab5d',
				logoURI: 'https://tokens.1inch.io/0xba3335588d9403515223f109edc4eb7269a9ab5d.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'TLOS',
				name: 'pTokens TLOS',
				decimals: 18,
				address: '0x7825e833d495f3d1c28872415a4aee339d26ac88',
				logoURI: 'https://tokens.1inch.io/0x7825e833d495f3d1c28872415a4aee339d26ac88.png',
				tags: ['tokens']
			},
			{
				symbol: 'XETA',
				name: 'XANA',
				decimals: 18,
				address: '0x967fb0d760ed3ce53afe2f0a071674cccae73550',
				logoURI: 'https://tokens.1inch.io/0x967fb0d760ed3ce53afe2f0a071674cccae73550.png',
				tags: ['tokens']
			},
			{
				symbol: 'alETH',
				name: 'Alchemix ETH',
				decimals: 18,
				address: '0x0100546f2cd4c9d97f798ffc9755e47865ff7ee6',
				logoURI: 'https://tokens.1inch.io/0x0100546f2cd4c9d97f798ffc9755e47865ff7ee6.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-9943-MARLOWE-ST-DETROIT-MI',
				name: 'RealToken 9943 Marlowe Street Detroit MI',
				decimals: 18,
				address: '0xe5f7ef61443fc36ae040650aa585b0395aef77c8',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-9336-PATTON-ST-DETROIT-MI',
				name: 'RealToken 9336 Patton Street Detroit MI',
				decimals: 18,
				address: '0xed42cedcadbfbcaa3e6f411b09567c2c0b5ad28f',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-20200-LESURE-ST-DETROIT-MI',
				name: 'RealToken 20200 Lesure Street Detroit MI',
				decimals: 18,
				address: '0x395c47a421c254ae42253764a7f56e0ee0cddac5',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-5942-AUDUBON-RD-DETROIT-MI',
				name: 'RealToken 5942 Audubon Road Detroit MI',
				decimals: 18,
				address: '0x43688910273f199b8ae2ca018c13918fb3d37b58',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-16200-FULLERTON-AVE-DETROIT-MI',
				name: 'RealToken 16200 Fullerton Ave Detroit MI',
				decimals: 18,
				address: '0x22c8ecf727c23422f47093b562ec53c139805301',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-10024-10028-APPOLINE-ST-DETROIT-MI',
				name: 'RealToken 10024-10028 Appoline Street Detroit MI',
				decimals: 18,
				address: '0x5807ca447851c98569c567963b25b1c83d41bebc',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-8342-SCHAEFER-HWY-DETROIT-MI',
				name: 'RealToken 8342 Schaefer Hwy Detroit MI',
				decimals: 18,
				address: '0x6fd016ccc4611f7bab1dd3267334cb0216ef47f9',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-18276-APPOLINE-ST-DETROIT-MI',
				name: 'RealToken 18276 Appoline Street Detroit MI',
				decimals: 18,
				address: '0xfc89f1b932079b462ef9c8757de5a28e387b847b',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-25097-ANDOVER-DR-DEARBORN-MI',
				name: 'RealToken 25097 Andover Drive Detroit MI',
				decimals: 18,
				address: '0x74d2cb65b1158300c3e6bea149d68509c7b2425d',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-15634-LIBERAL-ST-DETROIT-MI',
				name: 'RealToken 15634 Liberal Street Detroit MI',
				decimals: 18,
				address: '0xbecaea7aa3629d4b7ddccf3a973bef09ff34d4b6',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-18900-MANSFIELD-ST-DETROIT-MI',
				name: 'RealToken 18900 Mansfield Street Detroit MI',
				decimals: 18,
				address: '0x22cabb38295eaeccfede4e99af508052e3b74ca0',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-272-NE-42ND-CT-DEERFIELDBEACH-FL',
				name: 'RealToken 272 NE 42nd CT Deerfield Beach FL',
				decimals: 18,
				address: '0xe9eace1313913888c364d8504ffc3b8d991c67c6',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-15048-FREELAND-ST-DETROIT-MI',
				name: 'RealToken 15048 Freeland Street Detroit MI',
				decimals: 18,
				address: '0x67f2014293d641468161bbb0e6bd088fc0b8c381',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-18433-FAUST-AVE-DETROIT-MI',
				name: 'RealToken S 18433 Faust ave Detroit MI',
				decimals: 18,
				address: '0xbff3a3d79d0f9165cfcc1b369ee41f3c5c9ae398',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-9165-KENSINGTON-AVE-DETROIT-MI ',
				name: 'RealToken S 9165 Kensington Ave Detroit MI',
				decimals: 18,
				address: '0xc1af55156b64da1d484fb13b1afdb1da8efa7733',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-D-10048-GRAYTON-ST-DETROIT-MI',
				name: 'RealToken D 10048 Grayton St Detroit MI',
				decimals: 18,
				address: '0x67bc218f5ea919ff9003b28c1702d468312af302',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-10084-GRAYTON-ST-DETROIT-MI ',
				name: 'RealToken S 10084 Grayton St Detroit MI',
				decimals: 18,
				address: '0xac1682ad8893ed96e7ec3379f3a212dc50f06d23',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-9166-DEVONSHIRE-RD-DETROIT-MI ',
				name: 'RealToken S 9166 Devonshire Rd Detroit MI',
				decimals: 18,
				address: '0xfd510a3c53666035900ceb4d4743bd869d98d57a',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-10612-SOMERSET-AVE-DETROIT-MI',
				name: 'RealToken S 10612 Somerset Ave Detroit-MI',
				decimals: 18,
				address: '0xd4203d4f0f2c3ae21ce93f04ab00517262f65aa9',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-9309-COURVILLE-ST-DETROIT-MI',
				name: 'RealToken 9309 Courville St Detroit MI',
				decimals: 18,
				address: '0xa9e8a9d9729e766a72763253f2afd1b1cf9053a0',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-10616-McKINNEY-ST-DETROIT-MI',
				name: 'RealToken S 10616 McKinney Street Detroit MI',
				decimals: 18,
				address: '0x53993d04758ee89bbe190e15a81c411688543aba',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-9169-BOLEYN-ST-DETROIT-MI',
				name: 'RealToken S 9169 Boleyn Street Detroit MI',
				decimals: 18,
				address: '0x273a160eb5df613c8c99869f5ae4941f65bf94cb',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-3432-HARDING-ST-DETROIT-MI',
				name: 'RealToken S 3432 Harding Street Detroit MI',
				decimals: 18,
				address: '0xec2d495f20adf65cd26e9e250c8cd5d863609afd',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-12334-LANSDOWNE-ST-DETROIT-MI',
				name: 'RealToken S 12334 Lansdowne St Detroit MI',
				decimals: 18,
				address: '0x033b186321fa88603e3ecc98821fb0932b2c0760',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-10974-WORDEN-ST-DETROIT-MI',
				name: 'RealToken S 10974 Worden St Detroit MI',
				decimals: 18,
				address: '0x87645f94f6ea37f9f2f56d4521315e9c1ed89aa4',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-13991-WARWICK-ST-DETROIT-MI',
				name: 'RealToken S 13991 Warwick st Detroit MI',
				decimals: 18,
				address: '0x4475ad655d6fa73db81cc52a5cf4585faa34a1dd',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-6923-GREEVIEW-AVE-DETROIT-MI',
				name: 'RealToken S 6923 Greenview ave Detroit MI',
				decimals: 18,
				address: '0x2830209f6573f10c481d946ba18b446429f30360',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-1000-FLORIDA-AVE-AKRON-OH',
				name: 'RealToken S 1000 Florida ave Akron OH',
				decimals: 18,
				address: '0xdbb13d3f745a64995ca76069f2cebf9a2d7b18c0',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-4340-EAST-71-CLEVELAND-OH',
				name: 'RealToken S 4340 East-71 Cleveland OH',
				decimals: 18,
				address: '0xee9a08fc54bf53353398f946db4cb2447276f850',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-9133-DEVONSHIRE-RD-DETROIT-MI',
				name: 'RealToken S 9133 Devonshire st Detroit MI',
				decimals: 18,
				address: '0xec069eaa5c83763f288106506fecbd5dbe74d047',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: ' REALTOKEN-S-10604-SOMERSET-AVE-DETROIT-MI',
				name: 'RealToken S 10604 Somerset Ave Detroit MI',
				decimals: 18,
				address: '0xc4cb613947890ea300fedc509ac19f8efa0cdd14',
				logoURI: 'https://tokens.1inch.io/00xe5f7ef61443fc36ae040650aa585b0395aef77c8png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-587-JEFFERSON-AVE-ROCHESTER-NY',
				name: 'RealToken S 581-587 Jefferson Ave Rochester NY',
				decimals: 18,
				address: '0x8a41b6b6177f35bfa6d677447d3fe0d5a0cec45e',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-15778-MANOR-ST-DETROIT-MI',
				name: 'RealToken S 15778 Manor st Detroit MI',
				decimals: 18,
				address: '0x1105c20ac6f4de989faf05d17ab3f950963b75ad',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-15784-MONTEVISTA-ST-DETROIT-MI',
				name: 'RealToken S 15784 Monte vista st Detroit MI',
				decimals: 18,
				address: '0x438f9de51f51692a4b83696413062a040cc5cbd5',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-13114-GLENFIELD-AVE-DETROIT-MI',
				name: 'RealToken S 13114 Glenfield Ave Detroit MI',
				decimals: 18,
				address: '0x434e3a92c43a98ff508ab44e023ea7638952ad21',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-13116-KILBOURNE-AVE-DETROIT-MI',
				name: 'RealToken S 13116 Kilbourne Ave Detroit MI',
				decimals: 18,
				address: '0xba0d050bbb662c190bf99c61708b42ff9d8750e0',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-19317-GABLE-ST-DETROIT-MI',
				name: 'RealToken S 19317 Gable st Detroit MI',
				decimals: 18,
				address: '0x419f97e6dcfbf89a70ea898b7f44472f75bf6137',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-15777-ARDMORE-ST-DETROIT-MI',
				name: 'RealToken S 15777 Ardmore st Detroit MI',
				decimals: 18,
				address: '0xfe17c3c0b6f38cf3bd8ba872bee7a18ab16b43fb',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-14319-ROSEMARY-ST-DETROIT-MI',
				name: 'RealToken S 14319 Rosemary st Detroit MI',
				decimals: 18,
				address: '0x41599149f1b52035392402f9e311b1edb0c9f699',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-14078-CARLISLE-ST-DETROIT-MI',
				name: 'RealToken S 14078 Carlisle st Detroit MI',
				decimals: 18,
				address: '0x315699f1ba88383cff2f2f30fcad187adb2e4d72',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-13895-SARATOGA-ST-DETROIT-MI',
				name: 'RealToken S 13895 Saratoga st Detroit MI',
				decimals: 18,
				address: '0x6f442da588232dc57bf0096e8de48d6961d5cc83',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-4380-BEACONSFIELD-ST-DETROIT-MI',
				name: 'RealToken S 4380 Beaconsfield st Detroit MI',
				decimals: 18,
				address: '0x96700ffae33c651bc329c3f3fbfe56e1f291f117',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-17813-BRADFORD-ST-DETROIT-MI',
				name: 'RealToken S 17813 Bradford st Detroit MI',
				decimals: 18,
				address: '0x499a6c19f5537dd6005e2b5c6e1263103f558ba4',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-15796-HARTWELL-ST-DETROIT-MI',
				name: 'RealToken S 15796 Hartwell st Detroit MI',
				decimals: 18,
				address: '0xb3d3c1bbcef737204aadb4fa6d90e974bc262197',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-9717-EVERTS-ST-DETROIT-MI',
				name: 'RealToken S 9717 Everts St Detroit MI',
				decimals: 18,
				address: '0x73bde888664df8ddfd156b52e6999eeabab57c94',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-19201-WESTPHALIA-ST-DETROIT-MI',
				name: 'RealToken S 19201 Westphalia St Detroit MI',
				decimals: 18,
				address: '0x830b0e9a5ecf36d0a886d21e1c20043cd2d16515',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-19163-MITCHELL-ST-DETROIT-MI',
				name: 'RealToken S 19163 Mitchell St Detroit MI',
				decimals: 18,
				address: '0x4cc53ee5ef306a95d407321d4b4acc30814c04ee',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-4061-GRAND-ST-DETROIT-MI',
				name: 'RealToken S 4061 Grand St Detroit MI',
				decimals: 18,
				address: '0xd9e89bfebae447b42c1fa85c590716ec8820f737',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-4680-BUCKINGHAM-AVE-DETROIT-MI',
				name: 'RealToken S 4680 Buckingham Ave Detroit MI',
				decimals: 18,
				address: '0xefe82d6baf0db71f92889eb9d00721bd49121316',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-19311-KEYSTONE-ST-DETROIT-MI',
				name: 'RealToken S 19311 Keystone St Detroit MI',
				decimals: 18,
				address: '0x8a9f904b4ead6a97f3ab304d0d2196f5c602c807',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-15039-WARD-AVE-DETROIT-MI',
				name: 'RealToken S 15039 Ward Ave Detroit MI',
				decimals: 18,
				address: '0x7e95b310724334ff74537dc08bfd3377d25e65ce',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-18481-WESTPHALIA-ST-DETROIT-MI',
				name: 'RealToken S 18481 Westphalia St Detroit MI',
				decimals: 18,
				address: '0x75f06b482adbfb04b877d8ee683e2fcdf18ad153',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-19596-GOULBURN-ST-DETROIT-MI',
				name: 'RealToken S 19596 Goulburn St Detroit MI',
				decimals: 18,
				address: '0x3150f0ebc0efee280b5348b9c8c271ad44eb8b13',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-1244-S.AVERS -ST-CHICAGO-IL',
				name: 'RealToken S 1244 S. Avers Chicago IL',
				decimals: 18,
				address: '0x94fa7f8cb8453ad57cd133363b3012044647078c',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-15770-PREST-ST-DETROIT-MI',
				name: 'RealToken S 15770 Prest St Detroit MI',
				decimals: 18,
				address: '0x175cbd54d38f58b530785e01471a2ec0d4596eb5',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-272-NE42nd-COURT-DEERFIELDBEACH-FL',
				name: 'RealToken S 272 N.E. 42nd Court Deerfield Beach FL',
				decimals: 18,
				address: '0xce111a198eb04f388aceb78c40ced6daf1b0514a',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-587-JEFFERSON-AVE-ROCHESTER-NY',
				name: 'RealToken S 581-587 Jefferson Ave Rochester NY',
				decimals: 18,
				address: '0xa29ae272bc89e5f315b2793925f700045f845d82',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-19314-GABLE-ST-DETROIT-MI',
				name: 'RealToken S 19317 Gable St Detroit MI',
				decimals: 18,
				address: '0x34ed9e71449529e034d0326cfbb3b5ccdca00cbc',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-10024-28-APPOLINE-ST-DETROIT-MI',
				name: 'RealToken S 10024-28 Appoline St Detroit MI',
				decimals: 18,
				address: '0xb5d30c28f87acf675ed5b9f343e5fff39ec9942c',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-1000-FLORIDA-AVE-AKRON-OH',
				name: 'RealToken S 1000 Florida Ave Akron OH',
				decimals: 18,
				address: '0x1eb16ec378f0ce8f81449120629f52ba28961d47',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-13991-WARWICK-ST-DETROIT-MI',
				name: 'RealToken S 13991 Warwick St Detroit MI',
				decimals: 18,
				address: '0x4e98493920b16dd6642e9d48497c8d0a49150f6f',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-18466-FIELDING-ST-DETROIT-MI',
				name: 'RealToken S 18466 Fielding St Detroit MI',
				decimals: 18,
				address: '0x9a99f283e1f6c3b7f24901995624ef7b78e94471',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-15095-HARTWELL-ST-DETROIT-MI',
				name: 'RealToken S 15095 Hartwell St Detroit MI',
				decimals: 18,
				address: '0x9fef44fc4c571010bccd5b63e1cdc807d3b347bf',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-18273-MONTEVISTA-ST-DETROIT-MI',
				name: 'RealToken S 18273 Monte Vista St Detroit MI',
				decimals: 18,
				address: '0x9856c5ca15a4ac9c65aac090c38a9f39eb3b5eec',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-15048-FREELAND-ST-DETROIT-MI',
				name: 'RealToken S 15048 Freeland St Detroit MI',
				decimals: 18,
				address: '0xe3902e329ef2d3fd7666022c139d75bcc984b7a5',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-15784-MONTEVISTA-ST-DETROIT-MI',
				name: 'RealToken S 15784 Monte Vista St Detroit MI',
				decimals: 18,
				address: '0x7f940b5509a22e81d29167581bdeea3fa5a0abee',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-6923-GREEVIEW-AVE-DETROIT-MI',
				name: 'RealToken S 6923 Greenview Ave Detroit MI',
				decimals: 18,
				address: '0xd08d2b199e9e5df407427d4085877d1fdff3b1d6',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-13114-GLENFIELD-AVE-DETROIT-MI',
				name: 'RealToken S 13114 Glenfield Ave Detroit MI',
				decimals: 18,
				address: '0x9f923653a19537b5a1b003854a1920fe67a8ffeb',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-13116-KILBOURNE-AVE-DETROIT-MI',
				name: 'RealToken S 13116 Kilbourne Ave Detroit MI',
				decimals: 18,
				address: '0x08ad1f3a48be1d23c723a6cc8486b247f5de935a',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-10612-SOMERSET-AVE-DETROIT-MI',
				name: 'RealToken S 10612 Somerset Ave Detroit MI',
				decimals: 18,
				address: '0xd1c15cebfdcd16f00d91666bf64c8b66cbf5e9b5',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-4340-EAST-71-CLEVELAND-OH',
				name: 'RealToken S 4338-4340 East 71 Cleveland OH',
				decimals: 18,
				address: '0xa68b7779504b0ae372ddcc109f8786db9b91e93e',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-10604-SOMERSET-AVE-DETROIT-MI',
				name: 'RealToken S 10604 Somerset Ave MI',
				decimals: 18,
				address: '0x8626b38267e4fc0d8c92e0bb86f97acab3f6aa05',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-9133-DEVONSHIRE-RD-DETROIT-MI',
				name: 'RealToken S 9133 Devonshire Rd Detroit MI',
				decimals: 18,
				address: '0x76dbeb740ecd1f3b052a9afa302abc7eb4fb5390',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-18433-FAUST-AVE-DETROIT-MI',
				name: 'RealToken S 18433 Faust Ave Detroit MI',
				decimals: 18,
				address: '0x46f8a600337dec5cab03aa9b8f67f1d5b788ce28',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-10616-McKINNEY-ST-DETROIT-MI',
				name: 'RealToken S 10616 McKinney Street Detroit MI',
				decimals: 18,
				address: '0xe5ce63ac9a08c1eb160889151cd84855f16c94d2',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-9309-COURVILLE-ST-DETROIT-MI',
				name: 'RealToken S 9309 Courville St Detroit MI',
				decimals: 18,
				address: '0x67a83b28f6dd8c07301495ee2c6f83b73fd21092',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-9165-KENSINGTON-AVE-DETROIT-MI',
				name: 'RealToken S 9165 Kensington St Detroit MI',
				decimals: 18,
				address: '0x3c56d5e887d8fa7ae1ba65bf7eccc25ec09eaf18',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-10974-WORDEN-ST-DETROIT-MI',
				name: 'RealToken S 10974 Worden Street Detroit MI',
				decimals: 18,
				address: '0x42b387cdf0951a0e08336d35651544c47cd05c95',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-15778-MANOR-ST-DETROIT-MI',
				name: 'RealToken S 15778 Manor St Detroit MI',
				decimals: 18,
				address: '0xf23b80216a10e6f0c0d3b5ad5c9349e9425cad40',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-9166-DEVONSHIRE-RD-DETROIT-MI',
				name: 'RealToken S 9166 Devonshire Rd Detroit MI',
				decimals: 18,
				address: '0xa69d7d4ddf397f3d1e7ebaf108555d1107b3b117',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-9169-BOLEYN-ST-DETROIT-MI',
				name: 'RealToken S 9169 Boleyn Street Detroit MI',
				decimals: 18,
				address: '0x806690b7a093d2cf6419a515abedb7f28595bc5e',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-12334-LANSDOWNE-ST-DETROIT-MI',
				name: 'RealToken S 12334 Lansdowne Street Detroit MI',
				decimals: 18,
				address: '0xee2f2212a64ec3f6bc0f7580e10c53cb38b57508',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-10084-GRAYTON-DETROIT-MI',
				name: 'RealToken S 10084 Grayton St Detroit MI',
				decimals: 18,
				address: '0x92161385c9de8798ad5fb01c0be99ffcbc84dfd8',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-3432-HARDING-ST-DETROIT-MI',
				name: 'RealToken S 3432 Harding Street Detroit MI',
				decimals: 18,
				address: '0x400b5716b0c23b6f1f0f2a5fdb038949962b803e',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-9943-MARLOWE-ST-DETROIT-MI',
				name: 'RealToken S 9943 Marlowe St Detroit MI',
				decimals: 18,
				address: '0x57eadd2a542cfe9f00a37f55df4d5062f857c0e8',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-18276-APPOLINE-ST-DETROIT-MI',
				name: 'RealToken S 18276 Appoline St Detroit MI 48235',
				decimals: 18,
				address: '0x21f1af3e751317a2f7de7df31d5d092e6a907bde',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-18900-MANSFIELD-ST-DETROIT-MI',
				name: 'RealToken S 18900 Mansfield St Detroit MI',
				decimals: 18,
				address: '0x9eb90ec3faafc22092c9b91559fddde538042093',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-25097-ANDOVER-DR-DEARBORN-MI',
				name: 'RealToken S 25097 Andover Drive Detroit MI',
				decimals: 18,
				address: '0xf18cffb528eca0ea31d1d6b28bc80d2eca34d14d',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-5942-AUDUBON-RD-DETROIT-MI',
				name: 'RealToken S 5942 Audubon Road Detroit MI',
				decimals: 18,
				address: '0x6db6d540f5614e6bab7475af3f430f46a0b083e2',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-8342-SCHAEFER-HWY-DETROIT-MI',
				name: 'RealToken S 8342 Schaefer Hwy Detroit MI 48228',
				decimals: 18,
				address: '0x741857c07b100c9c0c1272d95845dddc4f1b67cb',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-9336-PATTON-ST-DETROIT-MI',
				name: 'RealToken S 9336 Patton St Detroit MI',
				decimals: 18,
				address: '0x23684569c0636c9aea246551879d457d0a0e6f58',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-20200-LESURE-ST-DETROIT-MI',
				name: 'RealToken S 20200 Lesure St Detroit MI',
				decimals: 18,
				address: '0xeedc2f5f4d1226759b1acf9efa23a99661de6663',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-15634-LIBERAL-ST-DETROIT-MI',
				name: 'RealToken S 15634 Liberal St Detroit MI',
				decimals: 18,
				address: '0xa81f77e8988b28fb74243b907ace3c83353dc80a',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-16200-FULLERTON-AVE-DETROIT-MI',
				name: 'RealToken S 16200 Fullerton Ave Detroit MI',
				decimals: 18,
				address: '0x021bb23a45e9fc824260435e670fc383b7b8cbbb',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-19020-ROSEMONT-AVE-DETROIT-MI',
				name: 'RealToken S 19020 Rosemont Ave Detroit MI',
				decimals: 18,
				address: '0x280e9ed3b20c580a2f4219657bb9332d80bc01f1',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-19136-TRACEY-ST-DETROIT-MI',
				name: 'RealToken S 19136 Tracey St Detroit MI',
				decimals: 18,
				address: '0x33722ea778df197f1b7b1cf0b124d7a962181d65',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-9465-BEACONSFIELD-ST-DETROIT-MI',
				name: 'RealToken S 9465 Beaconsfield St Detroit MI',
				decimals: 18,
				address: '0x750fa12ae51d1515c893c1aaabe2c135937a2c8b',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-1115-S.TROY-ST-CHICAGO-IL',
				name: 'RealToken S 1115 S. Troy St Chicago IL',
				decimals: 18,
				address: '0xd2f69dcd1e26f51fbbce48f61426c724e65acf91',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-19218-HOUGHTON-ST-DETROIT-MI',
				name: 'RealToken S 19218 Houghton St Detroit MI',
				decimals: 18,
				address: '0xc731eca970979cd2da2a1094a808f49894070d35',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-10617-HATHAWAY-AVE-CLEVELAND-OH',
				name: 'RealToken S 10617 Hathaway Ave Cleveland OH',
				decimals: 18,
				address: '0x06d0e5aee443093ac5635b709c8a01342e59df19',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-15373-PARKSIDE-ST-DETROIT-MI',
				name: 'RealToken S 15373 Parkside St Detroit MI',
				decimals: 18,
				address: '0x4d0da4e75d40bd7d9c4f7a292bf883bcdf38c45d',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-14231-STRATHMOOR-ST-DETROIT-MI',
				name: 'RealToken S 14231 Strathmoor St Detroit MI',
				decimals: 18,
				address: '0x9528a7402c0fe85b817aa6e106eafa03a02924c4',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-15350-GREYDALE-ST-DETROIT-MI',
				name: 'RealToken S 15350 Greydale St Detroit MI',
				decimals: 18,
				address: '0xda47bd33e8f5d17bb81b8752784bfb46c1c44b2a',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-12866-LAUDER-ST-DETROIT-MI',
				name: 'RealToken S 12866 Lauder St Detroit MI',
				decimals: 18,
				address: '0xb5dd2b6e0a0422e069e1d2cc3ed16533488a05e3',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-8181-BLISS-ST-DETROIT-MI',
				name: 'RealToken S 8181 Bliss St Detroit MI',
				decimals: 18,
				address: '0x92d31e19f88597f368825ba16410f263a844527a',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-19333-MOENART-ST-DETROIT-MI',
				name: 'RealToken S 19333 Moenart St Detroit MI',
				decimals: 18,
				address: '0x24293ab20159cfc0f3d7c8727cd827fba63d4f64',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-11201-COLLEGE-ST-DETROIT-MI',
				name: 'RealToken S 11201 College St Detroit MI',
				decimals: 18,
				address: '0x5e2a09064b2dca8c44aad8a5b69a69bb1854fe72',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-15860-HARTWELL-ST-DETROIT-MI',
				name: 'RealToken S 15860 Hartwell St Detroit MI',
				decimals: 18,
				address: '0xa9f30c907321718e655b74463ca665b690b78894',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-11078-WAYBURN-ST-DETROIT-MI',
				name: 'RealToken S 11078 Wayburn St Detroit MI',
				decimals: 18,
				address: '0xb8403b7730368942a5bfe5aac04a31b44015b1cc',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-14825-WILFRIED-ST-DETROIT-MI',
				name: 'RealToken S 14825 Wilfried St Detroit MI',
				decimals: 18,
				address: '0x43fed9f9bf7deedcb314b432a8e38219dd62ce9e',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-14882-TROESTER-ST-DETROIT-MI',
				name: 'RealToken S 14882 Troester St Detroit MI',
				decimals: 18,
				address: '0x31aa5fa895fd186fde12347a6fcaf540875b6434',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-17809-CHAREST-ST-DETROIT-MI',
				name: 'RealToken S 17809 Charest St Detroit MI',
				decimals: 18,
				address: '0xba07997f594a52df179620284b52b50a4e66227d',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-18776-SUNDERLAND-RD-DETROIT-MI',
				name: 'RealToken S 18776 Sunderland Rd Detroit MI',
				decimals: 18,
				address: '0x2c6f00a020b613c9419bb6c1ac220036dbe9e622',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-14229-WILSHIRE-DR-DETROIT-MI',
				name: 'RealToken S 14229 Wilshire St Detroit MI',
				decimals: 18,
				address: '0xb09850e2b93aa3aaa1476bf0c007cfc960e2de79',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-5601-S.WOOD-ST-CHICAGO-IL',
				name: 'RealToken S 5601 S Wood St Chicago IL',
				decimals: 18,
				address: '0xa137d82197ea4cdfd5f008a91ba816b8324f59e1',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-9481-WAYBURN-ST-DETROIT-MI',
				name: 'RealToken S 9481 Wayburn St Detroit MI',
				decimals: 18,
				address: '0x1e001730a23c7ebaff35bc8bc90da5a9b20804a4',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-11300-ROXBURY-ST-DETROIT-MI',
				name: 'RealToken S 11300 Roxbury St Detroit MI',
				decimals: 18,
				address: '0x9b5b4886033b4abc5eb0552fff7c15a67c3c47c7',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-10629-MCKINNEY-ST-DETROIT-MI',
				name: 'RealToken S 10629 McKinney St Detroit MI',
				decimals: 18,
				address: '0xd5d1adf54fbf73a00b197ddcfdad7cc27d93002f',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-9920-BISHOP-ST-DETROIT-MI',
				name: 'RealToken S 9920 Bishop St Detroit MI',
				decimals: 18,
				address: '0xa2b2ae397492c7ed8a4c1e751ac72d2b59947e6b',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-10639-STRATMAN-ST-DETROIT-MI',
				name: 'RealToken S 10639 Stratman St Detroit MI',
				decimals: 18,
				address: '0x4a99cc509f7facf58d7b67e99236db5e0921ef81',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-13045-WADE-ST-DETROIT-MI',
				name: 'RealToken S 13045 Wade St Detroit MI',
				decimals: 18,
				address: '0x5600e25b4f24c63afa655c3bd96e3c178b654fa1',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-14494-CHELSEA-AVE-DETROIT-MI',
				name: 'RealToken S 14494 Chelsea Ave Detroit MI',
				decimals: 18,
				address: '0x2adc1cfa726a45264a328d9d2e2c692ceac97458',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-18983-ALCOY-AVE-DETROIT-MI',
				name: 'RealToken S 18983 Alcoy Ave Detroit MI',
				decimals: 18,
				address: '0xad91999f534f4075b00ba4231c018e57bdebb342',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-19200-STRASBURG-ST-DETROIT-MI',
				name: 'RealToken S 19200 Strasburg St Detroit MI',
				decimals: 18,
				address: '0x211618fa0934910666f2c2731101f5a3ac013fd8',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-11653-NOTTINGHAM-RD-DETROIT-MI',
				name: 'RealToken S 11653 Nottingham Rd Detroit MI',
				decimals: 18,
				address: '0x31820af2d43c08bd82bd94b08974062482bd98d3',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-15753-HARTWELL-ST-DETROIT-MI',
				name: 'RealToken S 15753 Hartwell St Detroit MI',
				decimals: 18,
				address: '0x8d1090df790ffafdaccda03015c05df3b4cc9c21',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-17500-EVERGREEN-RD-DETROIT-MI',
				name: 'RealToken S 17500 Evergreen Rd Detroit MI',
				decimals: 18,
				address: '0x1fdb4015fd5e031c5641752c1e03b973ad5ea168',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-10700-WHITTIER-AVE-DETROIT-MI',
				name: 'RealToken S 10700 Whittier Ave Detroit MI',
				decimals: 18,
				address: '0xe82cbb7c29d00a4296ee505d12a473c26cd9c423',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-14918-JOY-RD-DETROIT-MI',
				name: 'RealToken S 14918 Joy Rd Detroit MI',
				decimals: 18,
				address: '0x63a1849b47ef5913ccc5adb0e2708b11a4ba6972',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-402-S.KOSTNER-AVE-CHICAGO-IL',
				name: 'RealToken S 402 S Kostner Ave Chicago IL',
				decimals: 18,
				address: '0xe255caf8893382465368b8e1cd4ef8436acf0ade',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-1542-S.RIDGEWAY-AVE-CHICAGO-IL',
				name: 'RealToken S 1542 S Ridgeway Ave Chicago IL',
				decimals: 18,
				address: '0x69d1b42b20f3ded07bec322253d0140b04cbb6f5',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-11078-LONGVIEW-ST-DETROIT-MI',
				name: 'RealToken S 11078 Longview St Detroit MI',
				decimals: 18,
				address: '0xd5fc0c4c4c5ff316e1e91494d963ff1d52ba25ff',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-19996-JOANN-AVE-DETROIT-MI',
				name: 'RealToken S 19996 Joann Ave Detroit MI',
				decimals: 18,
				address: '0x311fc485f1fea0c8cc9b5c783e79f4313ddfa720',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-13606-WINTHROP-ST-DETROIT-MI',
				name: 'RealToken S 13606 Winthrop St Detroit MI',
				decimals: 18,
				address: '0x804f6baa10615c85e4b4a5bc4efe516d9f7a4365',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-12409-WHITEHILL-ST-DETROIT-MI',
				name: 'RealToken S 12409 Whitehill St Detroit MI',
				decimals: 18,
				address: '0x969d42ad7008e6651e1fd52742153f8743225d98',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-4852-4854-W.CORTEZ-ST-CHICAGO-IL',
				name: 'RealToken S 4852-4854 W Cortez St Chicago IL',
				decimals: 18,
				address: '0xe7b6de709ffc3bd237c2f2c800e1002f97a760f3',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-12405-SANTA-ROSA-DR-DETROIT-MI',
				name: 'RealToken S 12405 Santa Rosa Dr Detroit MI',
				decimals: 18,
				address: '0x9d918ee39a356be8ef99734599c7e70160db4db6',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-11957-OLGA-ST-DETROIT-MI',
				name: 'RealToken S 11957 Olga St Detroit MI',
				decimals: 18,
				address: '0xdd833d0eef6d5d7cec781b03c19f3b425f3039df',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-1815-S.AVERS-AVE-CHICAGO-IL',
				name: 'RealToken S 1815 S.Avers Ave Chicago IL',
				decimals: 18,
				address: '0x8fcb39a25e639c8fbd28e8a018227d6570e02352',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-1617-S.AVERS-AVE-CHICAGO-IL',
				name: 'RealToken S 1617 S.Avers Ave Chicago IL',
				decimals: 18,
				address: '0xf4657ab08681214bcb1893aa8e9c7613459250ec',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-14066-SANTA-ROSA-DR-DETROIT-MI',
				name: 'RealToken S 14066 Santa Rosa Dr Detroit MI',
				decimals: 18,
				address: '0xe887dc4fcb5240c0c080aeab8870421d3ebd0b28',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-13370-WILSHIRE-DR-DETROIT-MI',
				name: 'RealToken S 13370 Wilshire Dr Detroit MI',
				decimals: 18,
				address: '0x5b690b010944bdfa8b26116967fe3fb3c38cfaac',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-738-742-E.87TH-PL-CHICAGO-IL',
				name: 'RealToken S 738-742 E 87th Pl Chicago IL',
				decimals: 18,
				address: '0x38de2858be53d603b1104f16aa67cf180002465d',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-15203-PARK-GROVE-ST-DETROIT-MI',
				name: 'RealToken S 15203 Park Grove St Detroit MI',
				decimals: 18,
				address: '0x78a9013b53d2d255935bbc43112d0dd3f475f3d3',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-10021-GRAYTON-ST-DETROIT-MI',
				name: 'RealToken S 10021 Grayton St Detroit MI',
				decimals: 18,
				address: '0x0954682ff1b512d3927d06c591942f50917e16a0',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-893-895-W.PHILADELPHIA-ST-DETROIT-MI',
				name: 'RealToken S 893-895 W Philadelphia St Detroit MI',
				decimals: 18,
				address: '0xcb061ae1f9b618c44ac10a47a672bf438da01fd8',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-2318-2324-W.MARQUETTE-RD-CHICAGO-IL',
				name: 'RealToken S 2318-2324 W Marquette Rd Chicago IL',
				decimals: 18,
				address: '0xf5aeab9d9c707b56311066e5172239686ab88110',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-11217-GREENWICH-AVE-CLEVELAND-OH',
				name: 'RealToken S 11217 Greenwich Ave Cleveland OH',
				decimals: 18,
				address: '0x9b091105b9a9eb118f4e0da06a090d6d95463357',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-10003-PINEHURST-ST-DETROIT-MI',
				name: 'RealToken S 10003 Pinehurst St Detroit MI',
				decimals: 18,
				address: '0x4471962eeffec57a33fa4e0793efeec07684dffb',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-19191-BRADFORD-AVE-DETROIT-MI',
				name: 'RealToken S 19191 Bradford Ave Detroit MI',
				decimals: 18,
				address: '0x584967356bad1499c10a8695522983f2fb7d88f3',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-1521-1523-S.DRAKE-AVE-CHICAGO-IL',
				name: 'RealToken S 1521-1523 S.Drake Ave Chicago IL',
				decimals: 18,
				address: '0x8c1c77c549a3f233fa8f8dea133ff5415d9bae11',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-5278-5280-DREXEL-ST-DETROIT-MI',
				name: 'RealToken S 5278-5280 Drexel St Detroit MI',
				decimals: 18,
				address: '0xcdf955df8a7ae1264f3b4f8ee5fa68507e8528aa',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-5772-5774-CHALMERS-ST-DETROIT-MI',
				name: 'RealToken S 5772-5774 Chalmers St Detroit MI',
				decimals: 18,
				address: '0x394d59797495848934acf61e680c1739a2cd8cfd',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-7430-NETT-ST-DETROIT-MI',
				name: 'RealToken S 7430 Nett St Detroit MI',
				decimals: 18,
				address: '0x950bc24510274163aabf83339424e7b49bf6a0c0',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-7109-7111-PILGRIM-ST-DETROIT-MI',
				name: 'RealToken S 7109-7111 Pilgrim St Detroit MI',
				decimals: 18,
				address: '0x26ccc79ceeec918e01bbd5c04a64767919f9ec1a',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-15864-EASTBURN-ST-DETROIT-MI',
				name: 'RealToken S 15864 Eastburn St Detroit MI',
				decimals: 18,
				address: '0xca4e38439d5d86554431e15eced03b8bcf2abddd',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-12410-HAMBURG-ST-DETROIT-MI',
				name: 'RealToken S 12410 Hamburg St Detroit MI',
				decimals: 18,
				address: '0x6bd094e39d0b839689e2f900bfdd180b10df62d7',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-15379-PATTON-ST-DETROIT-MI',
				name: 'RealToken S 15379 Patton St Detroit MI',
				decimals: 18,
				address: '0x81cea1a7c83d5caed483dd4da59bfe98f24ef687',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-14884-WARD-AVE-DETROIT-MI',
				name: 'RealToken S 14884 Ward Ave Detroit MI',
				decimals: 18,
				address: '0x328249efca026ae8596e9afe913c5f8775ef60ae',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-116-MONTEREY-ST-HIGHLAND-PARK-MI',
				name: 'RealToken S 116 Monterey St Highland Park MI',
				decimals: 18,
				address: '0x46b00b4bf04c2c94ae67576004a3a247b9400ade',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-14839-WISCONSIN-ST-DETROIT-MI',
				name: 'RealToken S 14839 Wisconsin St Detroit MI',
				decimals: 18,
				address: '0x10c2c7a5342988818eb6726fae369299d8fb6328',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-14215-HAMPSHIRE-ST-DETROIT-MI',
				name: 'RealToken S 14215 Hampshire St Detroit MI',
				decimals: 18,
				address: '0x0c12f2b2c3ad5150d344b6d3abb901b4795d72d9',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-15841-CORAM-ST-DETROIT-MI',
				name: 'RealToken S 15841 Coram St Detroit MI',
				decimals: 18,
				address: '0x8c3761c5d489ee5a5c30f874b5220c769a7c5a16',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-11758-CHRISTY-ST-DETROIT-MI',
				name: 'RealToken S 11758 Christy St Detroit MI',
				decimals: 18,
				address: '0xd3f7130940c7746298d9778f79e7bba4c552f176',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-15208-BRINGARD-DR-DETROIT-MI',
				name: 'RealToken S 15208 Bringard Dr Detroit MI',
				decimals: 18,
				address: '0xef2b6234e376c3b152c5febe47e1ca3c73cdaa9f',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-882-884-PINGREE-ST-DETROIT-MI',
				name: 'RealToken S 882-884 Pingree St Detroit MI',
				decimals: 18,
				address: '0xa5c16ae5fd75f4f079f3e33f0124899bacf567f9',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-19154-SHERWOOD-ST-DETROIT-MI',
				name: 'RealToken S 19154 Sherwood St Detroit MI',
				decimals: 18,
				address: '0x1d5da20522b1b94e3b7d983c954075da429bbae1',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-14432-WILSHIRE-DR-DETROIT-MI',
				name: 'RealToken S 14432 Wilshire Dr Detroit MI',
				decimals: 18,
				address: '0x23bb1314b73aaaa888800b177ad5d9719a51195b',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-20418-ANDOVER-ST-DETROIT-MI',
				name: 'RealToken S 20418 Andover St Detroit MI',
				decimals: 18,
				address: '0xc363ea8a468b3970ef93140d5d4ad9d124178f6e',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-18949-FENMORE-ST-DETROIT-MI',
				name: 'RealToken S 18949 Fenmore St Detroit MI',
				decimals: 18,
				address: '0x7389ef988fae6b3bcf520000c535e1e2d94c5427',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-14263-OHIO-ST-DETROIT-MI',
				name: 'RealToken S 14263 Ohio St Detroit MI',
				decimals: 18,
				address: '0xd1095b31f41d3bdbb66a52b94a737b2d7ac17635',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-12747-12749-NASHVILLE-ST-DETROIT-MI',
				name: 'RealToken S 12747-12749 Nashville St Detroit MI',
				decimals: 18,
				address: '0xa8ab830bfd0d91bc017cdec98a2a198b9938ea8d',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-2550-GREENWAY-ST-TOLEDO-OH',
				name: 'RealToken S 2550 Greenway St Toledo OH',
				decimals: 18,
				address: '0xafd76591d02462cce1aa5b6c6430854aa9a17e56',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-8531-INTERVALE-ST-DETROIT-MI',
				name: 'RealToken S 8531 Inervale St Detroit MI ',
				decimals: 18,
				address: '0x690602eb0bf5607e3586f1d3e4c4601ef6e4a89f',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-20552-WALTHAM-ST-DETROIT-MI',
				name: 'RealToken S 20552 Waltham St Detroit MI',
				decimals: 18,
				address: '0x185e39d860cf86fbecf4a7c341bd1545ea3a41b9',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-17616-BELAND-ST-DETROIT-MI',
				name: 'RealToken S 17616 Beland St Detroit MI',
				decimals: 18,
				address: '0x24a2558d0b0b2247a64eab7cf09d7244cb4c9597',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-2950-2952-MONTEREY-ST-DETROIT-MI',
				name: 'RealToken S 2950-2952 Monterey St Detroit MI',
				decimals: 18,
				address: '0xcd7dc5e034b631331bc0cfc4ea71d2dc7b53c338',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-8366-SCHAEFER-HWY-DETROIT-MI',
				name: 'RealToken S 8366 Schaefer Hwy Detroit MI',
				decimals: 18,
				address: '0x2360fca74ed948ff4f962e369080a64a40a1300d',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-13041-HAYES-ST-DETROIT-MI',
				name: 'RealToken S 13041 Hayes St Detroit MI',
				decimals: 18,
				address: '0xc7785a2575606d444cefbc8a22591600ae5aa9b4',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-128-E.WEBER-ST-TOLEDO-OH',
				name: 'RealToken S 128 E Weber St Toledo OH',
				decimals: 18,
				address: '0x5162d60b699a44b9f09b5fbfd8e6343cde9d7b22',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-601-MILTON-ST-TOLEDO-OH',
				name: 'RealToken S 601 Milton St Toledo OH',
				decimals: 18,
				address: '0x2b683f8cc61de593f089bdddc01431c0d7ca2ee2',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-1204-E-MANHATTAN-BLVD-TOLEDO-OH',
				name: 'RealToken S 1204 E Manhattan Blvd Toledo OH',
				decimals: 18,
				address: '0x83b16b1dcaaeb59caa13b96da260d8b15671822a',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-1612-DENVER-AVE-TOLEDO-OH',
				name: 'RealToken S 1612 Denver Ave Toledo OH',
				decimals: 18,
				address: '0xde9122799c313d5cc5c4385984156ad068cde331',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-19962-WALTHAM-ST-DETROIT-MI',
				name: 'RealToken S 19962 Waltham St Detroit MI',
				decimals: 18,
				address: '0x9d19b4d771ef67ea1da64699a388133b44eb434c',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-338-WILLARD-ST-TOLEDO-OH',
				name: 'RealToken S 338 Willard St Toledo OH',
				decimals: 18,
				address: '0x4505f5bff6bada5a20b1a008c6db3cd9545027a4',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-20039-BLOOM-ST-DETROIT-MI',
				name: 'RealToken S 20039 Bloom St Detroit MI',
				decimals: 18,
				address: '0x79e18a519d60c2ef7e18aac08d60ba0d4eee2511',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-9171-WHITTIER-AVE-DETROIT-MI',
				name: 'RealToken S 9171 Whittier Ave Detroit MI',
				decimals: 18,
				address: '0x18e55343ecfc135e21916fcdb9788accb5b53caf',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-8060-DREAMSICLE-DR-KISSIMMEE-FL',
				name: 'RealToken S 8060 Dreamsicle Dr Kissimmee FL',
				decimals: 18,
				address: '0xb2960e73b260812e4326723c7136e7b1988a036a',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-19144-RIOPELLE-ST-HIGHLAND-PARK-MI',
				name: 'RealToken S 19144 Riopelle St Highland Park MI',
				decimals: 18,
				address: '0xe23a5fc3502976de653cb64e5c27dc01d700db36',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-18668-SAINT-LOUIS-ST-DETROIT-MI',
				name: 'RealToken S 18668 Saint Louis St Detroit MI',
				decimals: 18,
				address: '0x945d833927380e25f402350667c6cd2d2615e7c2',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-12779-STRATHMOOR-ST-DETROIT-MI',
				name: 'RealToken S 12779 Strathmoor St Detroit MI',
				decimals: 18,
				address: '0x96510c0bafc5b3305d2b468063f7b3f8e8389802',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-5846-CRANE-ST-DETROIT-MI',
				name: 'RealToken S 5846 Crane St Detroit MI',
				decimals: 18,
				address: '0x062f0732a7daca652c3bd7d8ad51c3a920b25962',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-2661-2663-CORTLAND-ST-DETROIT-MI',
				name: 'RealToken S 2661-2663 Cortland St Detroit MI',
				decimals: 18,
				address: '0x5e29f1b62c15658e76671e199a7f16afddc9ad76',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-20160-CONANT-ST-DETROIT-MI',
				name: 'RealToken S 20160 Conant St Detroit MI',
				decimals: 18,
				address: '0x529ff4d9b07acd6366d0c3eb077ebaa2b06e71c4',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-12730-WADE-ST-DETROIT-MI',
				name: 'RealToken S 12730 Wade St Detroit MI',
				decimals: 18,
				address: '0x3d2129d9ceed93992cea3ee7d8e44754faedc922',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-5517-5519-ELMHURST-ST-DETROIT-MI',
				name: 'RealToken S 5517-5519 Elmhurst St Detroit MI',
				decimals: 18,
				address: '0x6133a54e3895f478ee6aae582d7dbc7bbb086b7d',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-8017-8019-S-PAULINA-ST-CHICAGO-IL',
				name: 'RealToken S 8017-8019 S Paulina St Chicago IL',
				decimals: 18,
				address: '0x8c60eccab34ffce7b54e985fc8b7ba280b45701d',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-2626-2638-WREFORD-ST-DETROIT-MI',
				name: 'RealToken S 2626-2638 Wreford St Detroit MI',
				decimals: 18,
				address: '0xb890b3cc0f2874b15b0dbf6377d39c106ca29fbf',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-4000-TAYLOR-ST-DETROIT-MI',
				name: 'RealToken S 4000 Taylor St Detroit MI',
				decimals: 18,
				address: '0x934e4bed6f85295581697002fadd816b07c03406',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-9135-YORKSHIRE-RD-DETROIT-MI',
				name: 'RealToken S 9135 Yorkshire Rd Detroit MI',
				decimals: 18,
				address: '0x744ca59499be33f6a112eed3acca533954da1050',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-7337-S-YALE-AVE-CHICAGO-IL',
				name: 'RealToken S 7337 S Yale Ave Chicago IL',
				decimals: 18,
				address: '0x20170890ef210e402578f97d6b179784c45f3a1b',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-11750-MORANG-AVE-DETROIT-MI',
				name: 'RealToken S 11750 Morang Ave Detroit MI',
				decimals: 18,
				address: '0xccca5323052435aa4b0ec94c1d0255f17e4f495c',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-15440-15444-ST-CLAIR-AVE-CLEVELAND-OH',
				name: 'RealToken S 15440-15444 St Clair Ave Cleveland OH',
				decimals: 18,
				address: '0x306044777e68ec5c323889468baacba6d2705994',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-13245-MONICA-ST-DETROIT-MI',
				name: 'RealToken S 13245 Monica St Detroit MI',
				decimals: 18,
				address: '0x052ad78e3aa0b0f2d3912fd3b50a9a289cf2f7aa',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-1907-OTTAWA-DR-TOLEDO-OH',
				name: 'RealToken S 1907 Ottawa Dr Toledo OH',
				decimals: 18,
				address: '0xa5fd99f142ebf4343974137a3200e5197bf0c81b',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-425-STEWARD-AVE-JACKSON-MI',
				name: 'RealToken S 425 Steward Ave Jackson MI',
				decimals: 18,
				address: '0x8a25f83819fda66ff0fc6567c8327a5f154c2ec6',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-10518-WOODLAND-AVE-CLEVELAND-OH',
				name: 'RealToken S 10518 Woodland Ave Cleveland OH',
				decimals: 18,
				address: '0xbdc1f8ccd117fe4e34f6c78f5293cd126b0c0474',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-3323-WAVERLY-ST-DETROIT-MI',
				name: 'RealToken S 3323 Waverly St Detroit MI',
				decimals: 18,
				address: '0x009bab289f104699ae87e576294d18ed505faa61',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-8065-LOST-SHAKER-LN-KISSIMMEE-FL',
				name: 'RealToken S 8065 Lost Shaker Ln Kissimmee FL',
				decimals: 18,
				address: '0xe447e8ec034c9100c1ff9bc401b5cd2fe15c9dcc',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-19268-EUREKA-ST-DETROIT-MI',
				name: 'RealToken S 19268 Eureka St Detroit MI',
				decimals: 18,
				address: '0x062c208073c9b439d1973262cfe0ddd88f38afa8',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-1389-BIRD-AVE-BIRMINGHAM-MI',
				name: 'RealToken S 1389 Bird Ave Birmingham MI',
				decimals: 18,
				address: '0x2fb7eeeece8498af2bf5b00ea29ca03005c35956',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-3747-SCOVEL-PL-DETROIT-MI',
				name: 'RealToken S 3747 Scovel Pl Detroit MI',
				decimals: 18,
				address: '0xcfe61eff2cde5c5885ba3a649ab092f56bd2830f',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-16767-GREENFIELD-RD-DETROIT-MI',
				name: 'RealToken S 16767 Greenfield Rd Detroit MI',
				decimals: 18,
				address: '0xa6004ca1fab428152f27135355f21d6bcdf355bd',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-9151-WHITTIER-AVE-DETROIT-MI',
				name: 'RealToken S 9151 Whittier Ave Detroit MI',
				decimals: 18,
				address: '0x964ee9e5d9d8abfc768f8d860cc6c33e75d37112',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-10435-10445-CADIEUX-RD-DETROIT-MI',
				name: 'RealToken S 10435-10445 Cadieux Rd Detroit MI',
				decimals: 18,
				address: '0x0d5d0b74c690170a82bf52e5d16388fc4fa29082',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-212-N-PARK-AVE-JACKSON-MI',
				name: 'RealToken S 212 N Park Ave Jackson MI',
				decimals: 18,
				address: '0xa1bbc683d5f401c3969469c77a3aa1dd3a0ee016',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-10030-CADIEUX-RD-DETROIT-MI',
				name: 'RealToken S 10030 Cadieux Rd Detroit MI',
				decimals: 18,
				address: '0xdf7a80778a8be812e654291ffab21d61e9c21323',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-3344-E-140TH-ST-CLEVELAND-OH',
				name: 'RealToken S 3344 E 140th St Cleveland OH',
				decimals: 18,
				address: '0x2e1a7d86e4591ebe5662ce6b5e3601f19a626c22',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-16851-16881-GREENFIELD-RD-DETROIT-MI',
				name: 'RealToken S 16851-16881 Greenfield Rd Detroit MI',
				decimals: 18,
				address: '0x960e61f5c4107d71bd8936b010416738c250f91c',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-1354-W-64TH-ST-CHICAGO-IL',
				name: 'RealToken S 1354 W 64th St Chicago IL',
				decimals: 18,
				address: '0x1707a9bad232d728afded75faced38ec90eaa41e',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-10411-10421-CADIEUX-RD-DETROIT-MI',
				name: 'RealToken S 10411-10421 Cadieux Rd Detroit MI',
				decimals: 18,
				address: '0x07da3cdae2396aa826387a48deba5868d7deb7bc',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-16007-NELACREST-RD-EAST-CLEVELAND-OH',
				name: 'RealToken S 16007 Nelacrest Rd East Cleveland OH',
				decimals: 18,
				address: '0xf13d215776dac65c9c1e80d8f3daf6d91cc062d5',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-4342-4344-CORTLAND-ST-DETROIT-MI',
				name: 'RealToken S 4342-4344 Cortland St Detroit MI',
				decimals: 18,
				address: '0xee2dacc1e9264cbcb19c46863373fbff4ba7a9bd',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-19750-MARX-ST-HIGHLAND-PARK-MI',
				name: 'RealToken S 19750 Marx St Highland Park MI',
				decimals: 18,
				address: '0x5d0436f003aef56990194f79a242bc185843aea5',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-13835-LA-SALLE-BLVD-DETROIT-MI',
				name: 'RealToken S 13835 La Salle Blvd Detroit MI',
				decimals: 18,
				address: '0x5d9eb5fc910176b08efa5f8d13812b85fdf3394b',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-19751-MARX-ST-HIGHLAND-PARK-MI',
				name: 'RealToken S 19751 Marx St Highland Park MI',
				decimals: 18,
				address: '0xac0d5dbfed881b3ffaebc7152bc2bc23464fe0cc',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-1610-E-STATE-FAIR-AVE-DETROIT-MI',
				name: 'RealToken S 1610 E State Fair Ave Detroit MI',
				decimals: 18,
				address: '0xd88e8873e90f734c9d3e3519e9e87345478c1df2',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-1630-E-STATE-FAIR-AVE-DETROIT-MI',
				name: 'RealToken S 1630 E State Fair Ave Detroit MI',
				decimals: 18,
				address: '0xe919df5f4eff1e6e6c6fe7c82471a5e6ce3437f1',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-2703-2705-W-GRAND-ST-DETROIT-MI',
				name: 'RealToken S 2703-2705 W Grand St Detroit MI ',
				decimals: 18,
				address: '0x994c698175e5dbe405a46df94fbd54999a3676c2',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-9415-9417-RAVENSWOOD-ST-DETROIT-MI',
				name: 'RealToken S 9415-9417 Ravenswood St Detroit MI',
				decimals: 18,
				address: '0x65d81bf81a65b177012b323f14970071c5099226',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-7519-7521-WYKES-ST-DETROIT-MI',
				name: 'RealToken S 7519-7521 Wykes St Detroit MI',
				decimals: 18,
				address: '0xc8ed28ce508811216030b96e2dc70883abad5408',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-18980-FENTON-ST-DETROIT-MI',
				name: 'RealToken S 18980 Fenton St Detroit MI',
				decimals: 18,
				address: '0x3839ab8550a64940964e0ecb02ed301005a96ffc',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-1900-FENTON-ST-DETROIT-MI',
				name: 'RealToken S 19000 Fenton St Detroit M',
				decimals: 18,
				address: '0xf7412e264fa85ae5e79ac3a4b64ce4669e32b98f',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-19041-LENORE-AVE-DETROIT-MI',
				name: 'RealToken S 19041 Lenore Ave Detroit MI',
				decimals: 18,
				address: '0xafa816f7fff6f252e5cdbd40b80d9ef77b7e289b',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-3310-3312-STURTEVANT-ST-DETROIT-MI',
				name: 'RealToken S 3310-3312 Sturtevant St Detroit MI',
				decimals: 18,
				address: '0x2089b1b815a2fd0187a48a1c66c511da828a8128',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-10040-CADIEUX-RD-DETROIT-MI',
				name: 'RealToken S 10040 Cadieux Rd Detroit MI',
				decimals: 18,
				address: '0xf793d1ba72e2914525205ca592dec2142e700cb4',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-9795-9797-CHENLOT-ST-DETROIT-MI',
				name: 'RealToken S 9795-9797 Chenlot St Detroit MI',
				decimals: 18,
				address: '0xef0c14c5d7da4d0447c28da7a9c8145d0a5a6f61',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-324-PIPER-BLVD-DETROIT-MI',
				name: 'RealToken S 324 Piper Blvd Detroit MI',
				decimals: 18,
				address: '0x03cbe3dda83908ad48643d6a1b5b13d11acaf845',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-2911-STURTEVANT-ST-DETROIT-MI',
				name: 'RealToken S 2911 Sturtevant St Detroit MI',
				decimals: 18,
				address: '0x7a684f6d9a34175d642eedb31fa545604d8d3acf',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-16085-E-SEVEN-MILE-DETROIT-MI',
				name: 'RealToken S 16085 E Seven Mile Detroit MI',
				decimals: 18,
				address: '0xe2fbdeadc82c71c1b8bff9ca4f9e7666224a362c',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-14409-LINNHURST-ST-DETROIT-MI',
				name: 'RealToken S 14409 Linnhurst St Detroit MI',
				decimals: 18,
				address: '0x5b571d103e670848ce8cde37f93821c9c93c7c43',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-10147-SOMERSET-AVE-DETROIT-MI',
				name: 'RealToken S 10147 Somerset Ave Detroit MI',
				decimals: 18,
				address: '0x4b293baa4703c5e7d480498bf3ccd8dc3d1297cd',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-16520-ILENE-ST-DETROIT-MI',
				name: 'RealToken S 16520 Ilene St Detroit MI',
				decimals: 18,
				address: '0x3113bb5e8bf9dc44ecdb111e5c4ab0818015a2e1',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-20257-MONICA-ST-DETROIT-MI',
				name: 'RealToken S 20257 Monica St Detroit MI',
				decimals: 18,
				address: '0x6f5258feb5862b661829315841b0718d6e56ca2c',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-11898-LAING-ST-DETROIT-MI',
				name: 'RealToken S 11898 Laing St Detroit MI',
				decimals: 18,
				address: '0xc1c1031e4a44b98707203480029e6576cb3267e3',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-616-E-131ST-ST-CLEVELAND-OH',
				name: 'RealToken S 616 E 131st St Cleveland OH',
				decimals: 18,
				address: '0x19a6a39b746c4647a01a3bf80751155969ddb15a',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-10163-DUPREY-ST-DETROIT-MI',
				name: 'RealToken S 10163 Duprey St Detroit MI',
				decimals: 18,
				address: '0x4b9c173c81ea2b6804b99ac91846c62bdb74fe72',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-3510-EWALD-CIR-DETROIT-MI',
				name: 'RealToken S 3510 Ewald Cir Detroit MI',
				decimals: 18,
				address: '0x7909090541d646a262a3062639298772a2c79daa',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-11965-LAKEPOINTE-ST-DETROIT-MI',
				name: 'RealToken S 11965 Lakepointe St Detroit MI',
				decimals: 18,
				address: '0x304bee450c2d116696d8b442981e7a300dfdf1cb',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-10645-STRATMAN-ST-DETROIT-MI',
				name: 'RealToken S 10645 Stratman St Detroit MI',
				decimals: 18,
				address: '0x64d69276cc78adbb6d5fea95d3e6370b4844dc76',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-618-E-79TH-ST-CHICAGO-IL',
				name: 'RealToken S 618 E 79th St Chicago IL',
				decimals: 18,
				address: '0xdaf6b273691372e4eb2fe353624f8f4f768c2099',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-9200-HARVARD-RD-DETROIT-MI',
				name: 'RealToken S 9200 Harvard Rd Detroit MI',
				decimals: 18,
				address: '0x53cebce6bd24f8e14da85ba0627a92336bd4f515',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-19391-GRANDVIEW-ST-DETROIT-MI',
				name: 'RealToken S 19391 Grandview St Detroit MI',
				decimals: 18,
				address: '0xb80173756781960761aa59c9eeebe191f049f4c8',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-17204-BRADFORD-AVE-DETROIT-MI',
				name: 'RealToken S 17204 Bradford Ave Detroit MI',
				decimals: 18,
				address: '0x0fd357ea71ad533c6b8a62520321ed286ed9a0c2',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-10703-MCKINNEY-ST-DETROIT-MI',
				name: 'RealToken S 10703 McKinney St Detroit MI',
				decimals: 18,
				address: '0xa984e4c759bea433bef9239736d5f9a9af0e7389',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-11117-WORDEN-ST-DETROIT-MI',
				name: 'RealToken S 11117 Worden St Detroit MI',
				decimals: 18,
				address: '0xf549b95362e6062999bdfe6c61e75e4547b8116d',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-22233-LYNDON-ST-DETROIT-MI',
				name: 'RealToken S 22233 Lyndon St Detroit MI',
				decimals: 18,
				address: '0x034ecb6dc0608b73765f2965771a003d940ee8b2',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-11217-BEACONSFIELD-ST-DETROIT-MI',
				name: 'RealToken S 11217 Beaconsfield St Detroit MI',
				decimals: 18,
				address: '0xcaf963cd253cf81664ecbcad71d043c47edf77fb',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-9624-ABINGTON-AVE-DETROIT-MI',
				name: 'RealToken S 9624 Abington Ave Detroit MI',
				decimals: 18,
				address: '0xf98be7ddab511622b5de91039c48f1f2e37d0bc1',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-11310-ABINGTON-AVE-DETROIT-MI',
				name: 'RealToken S 11310 Abington Ave Detroit MI',
				decimals: 18,
				address: '0x9abff92ddd896f3f7664ec232bb0a5db027d6724',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-14117-MANNING-ST-DETROIT-MI',
				name: 'RealToken S 14117 Manning St Detroit MI',
				decimals: 18,
				address: '0x7dfeee178fc1f929a88ad69e4e8d493600dd26d0',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-9585-ABINGTON-AVE-DETROIT-MI',
				name: 'RealToken S 9585 Abington Ave Detroit MI',
				decimals: 18,
				address: '0x219c820c2d25d8937601d8713235b556c4a37f62',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-14439-LONGVIEW-ST-DETROIT-MI',
				name: 'RealToken S 14439 Longview St Detroit MI',
				decimals: 18,
				address: '0xbb32de53a057f29280ad889a92fe99d69d470ef0',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-1418-W-MARQUETTE-RD-CHICAGO-IL',
				name: 'RealToken S 1418 W Marquette Rd Chicago IL',
				decimals: 18,
				address: '0xfc5073816fe9671859ef1e6936efd23bb7814274',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-14329-STRATHMOOR-ST-DETROIT-MI',
				name: 'RealToken S 14329 Strathmoor St Detroit MI',
				decimals: 18,
				address: '0xe5b46b4c5c7f974e55ded0b0099c02774f0023c1',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-19535-FAIRPORT-ST-DETROIT-MI',
				name: 'RealToken S 19535 Fairport St Detroit MI',
				decimals: 18,
				address: '0x3b22445411b429f665d12f7a55dd16dfac22c6ae',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-8056-E-HOLLYWOOD-ST-DETROIT-MI',
				name: 'RealToken S 8056 E Hollywood St Detroit MI',
				decimals: 18,
				address: '0x7ad92301442b73bed8d9696d704ac24a0fef3b69',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-15240-EDMORE-DR-DETROIT-MI',
				name: 'RealToken S 15240 Edmore Dr Detroit MI',
				decimals: 18,
				address: '0x2f3640655d076b45d1fa10da0f6d880329c9d553',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-14622-HUBBELL-AVE-DETROIT-MI',
				name: 'RealToken S 14622 Hubbell Ave Detroit MI',
				decimals: 18,
				address: '0xdcfe90e59b574839e028ec28e78018b84b6fcdab',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-8003-S-INGLESIDE-AVE-CHICAGO-IL',
				name: 'RealToken S 8003 S Ingleside Ave Chicago IL',
				decimals: 18,
				address: '0x27c30545dc2ba4b3bfdcb9f807a0214f4b06f034',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-10099-GREENSBORO-ST-DETROIT-MI',
				name: 'RealToken S 10099 Greensboro St Detroit MI',
				decimals: 18,
				address: '0x9ea9b45a500dd4346163ce7483dea2294ae88d1d',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-15894-TACOMA-ST-DETROIT-MI',
				name: 'RealToken S 15894 Tacoma St Detroit MI',
				decimals: 18,
				address: '0x7facb63afb928ac5a4650acc6eab701d7a8becb5',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-5760-LAKEPOINTE-ST-DETROIT-MI',
				name: 'RealToken S 5760 Lakepointe St Detroit MI',
				decimals: 18,
				address: '0x43ab521302ff36039be6b425ddaea5ec30a0f8b5',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-16810-BRINGARD-DR-DETROIT-MI',
				name: 'RealToken S 16810 Bringard Dr Detroit MI',
				decimals: 18,
				address: '0xa14d2507a2b96adc13cb19642802fd4eaf9a8a32',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-14511-HOUSTON-WHITTIER-ST-DETROIT-MI',
				name: 'RealToken S 14511 Houston-Whittier St Detroit MI',
				decimals: 18,
				address: '0xa3bb6ea63c0fbf259e16ffe0586d84b2c83d7229',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-19530-HICKORY-ST-DETROIT-MI',
				name: 'RealToken S 19530 Hickory St Detroit MI',
				decimals: 18,
				address: '0x10cde9d1e1a2d3b703f037a6788e04bc139cdf6f',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-19539-HICKORY-ST-DETROIT-MI',
				name: 'RealToken S 19539 Hickory St Detroit MI',
				decimals: 18,
				address: '0xea91a67a23943984bc8017e20c9fd2e40fd38c3d',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-9201-LONGACRE-ST-DETROIT-MI',
				name: 'RealToken S 9201 Longacre St Detroit MI',
				decimals: 18,
				address: '0x1106d8755ffafb1f1820b3668e354336d9085a12',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-13430-TACOMA-ST-DETROIT-MI',
				name: 'RealToken S 13430 Tacoma St Detroit MI',
				decimals: 18,
				address: '0x7085c30b97f1af202f8dfec174f1e07d8f8f887d',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-13445-TACOMA-ST-DETROIT-MI',
				name: 'RealToken S 13445 Tacoma St Detroit MI',
				decimals: 18,
				address: '0x4c0c0fe9ca9ad4bc748eb8f596ddcfd8707a5cd4',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-13628-TACOMA-ST-DETROIT-MI',
				name: 'RealToken S 13628 Tacoma St Detroit MI',
				decimals: 18,
				address: '0xe1c4610477da28f6852ced5666aa6f3ccbd73b02',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-19400-HICKORY-ST-DETROIT-MI',
				name: 'RealToken S 19400 Hickory St Detroit MI',
				decimals: 18,
				address: '0xbf1a3181167e4979fd121ef247d9af4fc884cc46',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-18515-18517-KELLY-RD-DETROIT-MI',
				name: 'RealToken S 18515-18517 Kelly Rd Detroit MI',
				decimals: 18,
				address: '0x940b60023484d593b8391521704abb063b5cccf0',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-18527-18529-KELLY-RD-DETROIT-MI',
				name: 'RealToken S 18527-18529 Kelly Rd Detroit MI',
				decimals: 18,
				address: '0xd84d9c58a93e3d4b0acc5ab5a5aa5e2fa6b7ab75',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-18608-18612-MOROSS-RD-DETROIT-MI',
				name: 'RealToken S 18608-18612 Moross Rd Detroit MI',
				decimals: 18,
				address: '0xa48ddf8d4f9b03c63d6340b5e0d2af293ab516ea',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-15611-E-SEVEN-MILE-RD-DETROIT-MI',
				name: 'RealToken S 15611 E Seven Mile Rd Detroit MI',
				decimals: 18,
				address: '0x2f4974a3be7355cf8915ab34099f35ed44293128',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-10610-BALFOUR-RD-DETROIT-MI',
				name: 'RealToken S 10610 Balfour Rd Detroit MI',
				decimals: 18,
				address: '0x2e1db155a7b812f3fcb0dbc8ed3164b4705213b4',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-8809-BECKMAN-AVE-CLEVELAND-OH',
				name: 'RealToken S 8809 Beckman Ave Cleveland OH',
				decimals: 18,
				address: '0x2a7c9f7719367006e9bd20d0555025efb86d7d5d',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-12318-IMPERIAL-AVE-CLEVELAND-OH',
				name: 'RealToken S 12318 Imperial Ave Cleveland OH',
				decimals: 18,
				address: '0x06cc12368fa6a3d4dc0872c60331156a21cdcc9c',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-22512-W-MCNICHOLS-RD-DETROIT-MI',
				name: 'RealToken S 22512 W McNichols Rd Detroit MI',
				decimals: 18,
				address: '0x06246100ba403608b98adfb006d82a7484f5d9ff',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-8744-HOMER-ST-DETROIT-MI',
				name: 'RealToken S 8744 Homer St Detroit MI',
				decimals: 18,
				address: '0x3c5654362fa005393ad9c793fe0fa74f0cd95bbb',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-13523-GLENSIDE-RD-CLEVELAND-OH',
				name: 'RealToken S 13523 Glenside Rd Cleveland OH',
				decimals: 18,
				address: '0x377d14927bbc274771daa9ffab0722935dafaffa',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-14881-GREENFIELD-RD-DETROIT-MI',
				name: 'RealToken S 14881 Greenfield Rd Detroit MI',
				decimals: 18,
				address: '0xf3c4c10ab96f9b6d7719de63f4219f69078df976',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-11830-CAMDEN-AVE-DETROIT-MI',
				name: 'RealToken S 11830 Camden Ave Detroit MI',
				decimals: 18,
				address: '0xa12a334f563c1a9fef29cf11fac7e148fd54463b',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-14745-PLYMOUTH-RD-DETROIT-MI',
				name: 'RealToken S 14745 Plymouth Rd Detroit MI',
				decimals: 18,
				address: '0x9642a2379bc359c8b10ead2e06c4a4156bbb3f57',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-11701-MORANG-AVE-DETROIT-MI',
				name: 'RealToken S 11701 Morang Ave Detroit MI',
				decimals: 18,
				address: '0xedcddc374c78bb8596352a28faf1eba9874aa2e1',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-11845-CAMDEN-AVE-DETROIT-MI',
				name: 'RealToken S 11845 Camden Ave Detroit MI',
				decimals: 18,
				address: '0x4e2976a2fbaae5877a1272e57343460c25d9d408',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-3588-OAKMAN-BLVD-DETROIT-MI',
				name: 'RealToken S 3588 Oakman Blvd Detroit MI',
				decimals: 18,
				address: '0x87b2fb660f790b936e42093036e0b519f0b50b24',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-10862-MARNE-ST-DETROIT-MI',
				name: 'RealToken S 10862 Marne St Detroit MI',
				decimals: 18,
				address: '0xd79e63912dbeb409ea350138503a9eb29d73728f',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'REALTOKEN-S-10717-10719-BRYANT-AVE-CLEVELAND-OH',
				name: 'RealToken S 10717-10719 Bryant Ave Cleveland OH',
				decimals: 18,
				address: '0xbabc257b4958556bda696e7705cf535f400d8b09',
				logoURI: 'https://tokens.1inch.io/0xe5f7ef61443fc36ae040650aa585b0395aef77c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'st1INCH',
				name: 'Staking 1INCH v2',
				decimals: 18,
				address: '0x9a0c8ff858d273f57072d714bca7411d717501d7',
				logoURI: 'https://tokens.1inch.io/0x9a0c8ff858d273f57072d714bca7411d717501d7.png',
				tags: ['staking']
			},
			{
				symbol: 'dst1INCH',
				name: 'Delegated st1INCH',
				decimals: 18,
				address: '0xaccfac2339e16dc80c50d2fa81b5c2b049b4f947',
				logoURI: 'https://tokens.1inch.io/0xaccfac2339e16dc80c50d2fa81b5c2b049b4f947.png',
				tags: ['tokens']
			},
			{
				symbol: 'UP',
				name: 'Unicorn Power',
				decimals: 18,
				address: '0x1e31b601488e97bc247c57af7b6aa336edbc5477',
				logoURI: 'https://tokens.1inch.io/0x1e31b601488e97bc247c57af7b6aa336edbc5477.png',
				tags: ['tokens']
			},
			{
				symbol: 'NOIA',
				name: 'NOIA Token',
				decimals: 18,
				address: '0xa8c8cfb141a3bb59fea1e2ea6b79b5ecbcd7b6ca',
				logoURI: 'https://tokens.1inch.io/0xa8c8cfb141a3bb59fea1e2ea6b79b5ecbcd7b6ca.png',
				tags: ['tokens']
			},
			{
				symbol: 'AVG',
				name: 'Avocado DAO Token',
				decimals: 18,
				address: '0xa41f142b6eb2b164f8164cae0716892ce02f311f',
				logoURI: 'https://tokens.1inch.io/0xa41f142b6eb2b164f8164cae0716892ce02f311f.png',
				tags: ['tokens']
			},
			{
				symbol: 'CIRUS',
				name: 'Cirus',
				decimals: 18,
				address: '0xa01199c61841fce3b3dafb83fefc1899715c8756',
				logoURI: 'https://tokens.1inch.io/0xa01199c61841fce3b3dafb83fefc1899715c8756.png',
				tags: ['tokens']
			},
			{
				symbol: 'SIPHER',
				name: 'Sipher Token',
				decimals: 18,
				address: '0x9f52c8ecbee10e00d9faaac5ee9ba0ff6550f511',
				logoURI: 'https://tokens.1inch.io/0x9f52c8ecbee10e00d9faaac5ee9ba0ff6550f511.png',
				tags: ['tokens']
			},
			{
				symbol: 'DINGER',
				name: 'Dinger Token',
				decimals: 9,
				address: '0x9e5bd9d9fad182ff0a93ba8085b664bcab00fa68',
				logoURI: 'https://tokens.1inch.io/0x9e5bd9d9fad182ff0a93ba8085b664bcab00fa68.png',
				tags: ['tokens']
			},
			{
				symbol: 'BONE',
				name: 'BONE SHIBASWAP',
				decimals: 18,
				address: '0x9813037ee2218799597d83d4a5b6f3b6778218d9',
				logoURI: 'https://tokens.1inch.io/0x9813037ee2218799597d83d4a5b6f3b6778218d9.png',
				tags: ['tokens']
			},
			{
				symbol: 'KAP',
				name: 'Kapital DAO Token',
				decimals: 18,
				address: '0x9625ce7753ace1fa1865a47aae2c5c2ce4418569',
				logoURI: 'https://tokens.1inch.io/0x9625ce7753ace1fa1865a47aae2c5c2ce4418569.png',
				tags: ['tokens']
			},
			{
				symbol: 'SSV',
				name: 'SSV Token',
				decimals: 18,
				address: '0x9d65ff81a3c488d585bbfb0bfe3c7707c7917f54',
				logoURI: 'https://tokens.1inch.io/0x9d65ff81a3c488d585bbfb0bfe3c7707c7917f54.png',
				tags: ['tokens']
			},
			{
				symbol: 'CPD',
				name: 'Coinspaid',
				decimals: 18,
				address: '0x9b31bb425d8263fa1b8b9d090b83cf0c31665355',
				logoURI: 'https://tokens.1inch.io/0x9b31bb425d8263fa1b8b9d090b83cf0c31665355.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'CNC',
				name: 'Conic Finance Token',
				decimals: 18,
				address: '0x9ae380f0272e2162340a5bb646c354271c0f5cfc',
				logoURI: 'https://tokens.1inch.io/0x9ae380f0272e2162340a5bb646c354271c0f5cfc.png',
				tags: ['tokens']
			},
			{
				symbol: 'GOG',
				name: 'Guild of Guardians',
				decimals: 18,
				address: '0x9ab7bb7fdc60f4357ecfef43986818a2a3569c62',
				logoURI: 'https://tokens.1inch.io/0x9ab7bb7fdc60f4357ecfef43986818a2a3569c62.png',
				tags: ['tokens']
			},
			{
				symbol: 'HUNT',
				name: 'HuntToken',
				decimals: 18,
				address: '0x9aab071b4129b083b01cb5a0cb513ce7eca26fa5',
				logoURI: 'https://tokens.1inch.io/0x9aab071b4129b083b01cb5a0cb513ce7eca26fa5.png',
				tags: ['tokens']
			},
			{
				symbol: 'SDAO',
				name: 'Singularity Dao',
				decimals: 18,
				address: '0x993864e43caa7f7f12953ad6feb1d1ca635b875f',
				logoURI: 'https://tokens.1inch.io/0x993864e43caa7f7f12953ad6feb1d1ca635b875f.png',
				tags: ['tokens']
			},
			{
				symbol: 'NEWO',
				name: 'New Order',
				decimals: 18,
				address: '0x98585dfc8d9e7d48f0b1ae47ce33332cf4237d96',
				logoURI: 'https://tokens.1inch.io/0x98585dfc8d9e7d48f0b1ae47ce33332cf4237d96.png',
				tags: ['tokens']
			},
			{
				symbol: 'MET',
				name: 'Metronome2',
				decimals: 18,
				address: '0x2ebd53d035150f328bd754d6dc66b99b0edb89aa',
				logoURI: 'https://tokens.1inch.io/0x2ebd53d035150f328bd754d6dc66b99b0edb89aa.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'UNIDX',
				name: 'UniDex',
				decimals: 18,
				address: '0x95b3497bbcccc46a8f45f5cf54b0878b39f8d96c',
				logoURI: 'https://tokens.1inch.io/0x95b3497bbcccc46a8f45f5cf54b0878b39f8d96c.png',
				tags: ['tokens']
			},
			{
				symbol: 'CARD',
				name: 'Cardstack',
				decimals: 18,
				address: '0x954b890704693af242613edef1b603825afcd708',
				logoURI: 'https://tokens.1inch.io/0x954b890704693af242613edef1b603825afcd708.png',
				tags: ['tokens']
			},
			{
				symbol: 'WHALE',
				name: 'WHALE',
				decimals: 4,
				address: '0x9355372396e3f6daf13359b7b607a3374cc638e0',
				logoURI: 'https://tokens.1inch.io/0x9355372396e3f6daf13359b7b607a3374cc638e0.png',
				tags: ['tokens']
			},
			{
				symbol: 'DFI',
				name: 'DeFiChain Token',
				decimals: 8,
				address: '0x8fc8f8269ebca376d046ce292dc7eac40c8d358a',
				logoURI: 'https://tokens.1inch.io/0x8fc8f8269ebca376d046ce292dc7eac40c8d358a.png',
				tags: ['tokens']
			},
			{
				symbol: 'BLOCKS',
				name: 'BLOCKS',
				decimals: 18,
				address: '0x8a6d4c8735371ebaf8874fbd518b56edd66024eb',
				logoURI: 'https://tokens.1inch.io/0x8a6d4c8735371ebaf8874fbd518b56edd66024eb.png',
				tags: ['tokens']
			},
			{
				symbol: 'DXP',
				name: 'Dexpools Token',
				decimals: 18,
				address: '0x88aa4a6c5050b9a1b2aa7e34d0582025ca6ab745',
				logoURI: 'https://tokens.1inch.io/0x88aa4a6c5050b9a1b2aa7e34d0582025ca6ab745.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'ETHPAD',
				name: 'ETHPAD.network',
				decimals: 18,
				address: '0x8db1d28ee0d822367af8d220c0dc7cb6fe9dc442',
				logoURI: 'https://tokens.1inch.io/0x8db1d28ee0d822367af8d220c0dc7cb6fe9dc442.png',
				tags: ['tokens']
			},
			{
				symbol: 'BIT',
				name: 'BitDAO',
				decimals: 18,
				address: '0x1a4b46696b2bb4794eb3d4c26f1c55f9170fa4c5',
				logoURI: 'https://tokens.1inch.io/0x1a4b46696b2bb4794eb3d4c26f1c55f9170fa4c5.png',
				tags: ['tokens']
			},
			{
				symbol: 'GBPT',
				name: 'poundtoken',
				decimals: 18,
				address: '0x86b4dbe5d203e634a12364c0e428fa242a3fba98',
				logoURI: 'https://tokens.1inch.io/0x86b4dbe5d203e634a12364c0e428fa242a3fba98.png',
				tags: ['tokens']
			},
			{
				symbol: 'GUILD',
				name: 'BlockchainSpace',
				decimals: 18,
				address: '0x83e9f223e1edb3486f876ee888d76bfba26c475a',
				logoURI: 'https://tokens.1inch.io/0x83e9f223e1edb3486f876ee888d76bfba26c475a.png',
				tags: ['tokens']
			},
			{
				symbol: 'DBNB',
				name: 'DecentraBNB',
				decimals: 9,
				address: '0x833850be8858722cfc5e5e75f2fe6275e055d888',
				logoURI: 'https://tokens.1inch.io/0x833850be8858722cfc5e5e75f2fe6275e055d888.png',
				tags: ['tokens']
			},
			{
				symbol: 'GIGA',
				name: 'GigaSwap',
				decimals: 9,
				address: '0x83249c6794bca5a77eb8c0af9f1a86e055459cea',
				logoURI: 'https://tokens.1inch.io/0x83249c6794bca5a77eb8c0af9f1a86e055459cea.png',
				tags: ['tokens']
			},
			{
				symbol: 'Ly',
				name: 'Lilly Finance',
				decimals: 9,
				address: '0x8686525d6627a25c68de82c228448f43c97999f2',
				logoURI: 'https://tokens.1inch.io/0x8686525d6627a25c68de82c228448f43c97999f2.png',
				tags: ['tokens']
			},
			{
				symbol: 'ASTO',
				name: 'Altered State Machine Utility Token',
				decimals: 18,
				address: '0x823556202e86763853b40e9cde725f412e294689',
				logoURI: 'https://tokens.1inch.io/0x823556202e86763853b40e9cde725f412e294689.png',
				tags: ['tokens']
			},
			{
				symbol: 'OPUL',
				name: 'OpulousToken',
				decimals: 18,
				address: '0x80d55c03180349fff4a229102f62328220a96444',
				logoURI: 'https://tokens.1inch.io/0x80d55c03180349fff4a229102f62328220a96444.png',
				tags: ['tokens']
			},
			{
				symbol: 'cEUR',
				name: 'Celo Euro',
				decimals: 18,
				address: '0xee586e7eaad39207f0549bc65f19e336942c992f',
				logoURI: 'https://tokens.1inch.io/0xee586e7eaad39207f0549bc65f19e336942c992f.png',
				tags: ['tokens']
			},
			{
				symbol: 'VXV',
				name: 'VectorspaceAI',
				decimals: 18,
				address: '0x7d29a64504629172a429e64183d6673b9dacbfce',
				logoURI: 'https://tokens.1inch.io/0x7d29a64504629172a429e64183d6673b9dacbfce.png',
				tags: ['tokens']
			},
			{
				symbol: 'dsETH',
				name: 'Diversified Staked ETH Index (dsETH)',
				decimals: 18,
				address: '0x341c05c0e9b33c0e38d64de76516b2ce970bb3be',
				logoURI: 'https://tokens.1inch.io/0x341c05c0e9b33c0e38d64de76516b2ce970bb3be.png',
				tags: ['tokens']
			},
			{
				symbol: 'VERSE',
				name: 'Verse',
				decimals: 18,
				address: '0x249ca82617ec3dfb2589c4c17ab7ec9765350a18',
				logoURI: 'https://tokens.1inch.io/0x249ca82617ec3dfb2589c4c17ab7ec9765350a18.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'BIFI',
				name: 'beefy.finance',
				decimals: 18,
				address: '0x5870700f1272a1adbb87c3140bd770880a95e55d',
				logoURI: 'https://tokens.1inch.io/0x5870700f1272a1adbb87c3140bd770880a95e55d.png',
				tags: ['tokens']
			},
			{
				symbol: 'frxETH',
				name: 'Frax Ether',
				decimals: 18,
				address: '0x5e8422345238f34275888049021821e8e08caa1f',
				logoURI: 'https://tokens.1inch.io/0x5e8422345238f34275888049021821e8e08caa1f.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'RYOSHI',
				name: 'Ryoshis Vision',
				decimals: 18,
				address: '0x777e2ae845272a2f540ebf6a3d03734a5a8f618e',
				logoURI: 'https://tokens.1inch.io/0x777e2ae845272a2f540ebf6a3d03734a5a8f618e.png',
				tags: ['tokens']
			},
			{
				symbol: 'XY',
				name: 'XY Token',
				decimals: 18,
				address: '0x77777777772cf0455fb38ee0e75f38034dfa50de',
				logoURI: 'https://tokens.1inch.io/0x77777777772cf0455fb38ee0e75f38034dfa50de.png',
				tags: ['tokens']
			},
			{
				symbol: 'STRK',
				name: 'Strike Token',
				decimals: 18,
				address: '0x74232704659ef37c08995e386a2e26cc27a8d7b1',
				logoURI: 'https://tokens.1inch.io/0x74232704659ef37c08995e386a2e26cc27a8d7b1.png',
				tags: ['tokens']
			},
			{
				symbol: 'LOOT',
				name: 'LOOT Token',
				decimals: 18,
				address: '0x721a1b990699ee9d90b6327faad0a3e840ae8335',
				logoURI: 'https://tokens.1inch.io/0x721a1b990699ee9d90b6327faad0a3e840ae8335.png',
				tags: ['tokens']
			},
			{
				symbol: 'HIGH',
				name: 'Highstreet token',
				decimals: 18,
				address: '0x71ab77b7dbb4fa7e017bc15090b2163221420282',
				logoURI: 'https://tokens.1inch.io/0x71ab77b7dbb4fa7e017bc15090b2163221420282.png',
				tags: ['tokens']
			},
			{
				symbol: 'X7DAO',
				name: 'X7DAO',
				decimals: 18,
				address: '0x7105e64bf67eca3ae9b123f0e5ca2b83b2ef2da0',
				logoURI: 'https://tokens.1inch.io/0x7105e64bf67eca3ae9b123f0e5ca2b83b2ef2da0.png',
				tags: ['tokens']
			},
			{
				symbol: 'X7R',
				name: 'X7R',
				decimals: 18,
				address: '0x70008f18fc58928dce982b0a69c2c21ff80dca54',
				logoURI: 'https://tokens.1inch.io/0x70008f18fc58928dce982b0a69c2c21ff80dca54.png',
				tags: ['tokens']
			},
			{
				symbol: 'CHANGE',
				name: 'ChangeX',
				decimals: 18,
				address: '0x7051faed0775f664a0286af4f75ef5ed74e02754',
				logoURI: 'https://tokens.1inch.io/0x7051faed0775f664a0286af4f75ef5ed74e02754.png',
				tags: ['tokens']
			},
			{
				symbol: 'BMDA',
				name: 'Bermuda',
				decimals: 18,
				address: '0x4236f8aaf2b1f3a28420eb15b8e0ddf63201a95e',
				logoURI: 'https://tokens.1inch.io/0x4236f8aaf2b1f3a28420eb15b8e0ddf63201a95e.png',
				tags: ['tokens']
			},
			{
				symbol: 'BC',
				name: 'Bitcoin',
				decimals: 9,
				address: '0xe03b2642a5111ad0efc0cbce766498c2dd562ae9',
				logoURI: 'https://tokens.1inch.io/0xe03b2642a5111ad0efc0cbce766498c2dd562ae9.png',
				tags: ['tokens']
			},
			{
				symbol: 'tBTC',
				name: 'tBTC v2',
				decimals: 18,
				address: '0x18084fba666a33d37592fa2633fd49a74dd93a88',
				logoURI: 'https://tokens.1inch.io/0x18084fba666a33d37592fa2633fd49a74dd93a88.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'XAUt',
				name: 'Tether Gold',
				decimals: 6,
				address: '0x68749665ff8d2d112fa859aa293f07a622782f38',
				logoURI: 'https://tokens.1inch.io/0x68749665ff8d2d112fa859aa293f07a622782f38.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'CLS',
				name: 'Coldstack',
				decimals: 18,
				address: '0x675bbc7514013e2073db7a919f6e4cbef576de37',
				logoURI: 'https://tokens.1inch.io/0x675bbc7514013e2073db7a919f6e4cbef576de37.png',
				tags: ['tokens']
			},
			{
				symbol: 'CPOOL',
				name: 'Clearpool',
				decimals: 18,
				address: '0x66761fa41377003622aee3c7675fc7b5c1c2fac5',
				logoURI: 'https://tokens.1inch.io/0x66761fa41377003622aee3c7675fc7b5c1c2fac5.png',
				tags: ['tokens']
			},
			{
				symbol: 'ORC',
				name: 'Orbit Chain',
				decimals: 18,
				address: '0x662b67d00a13faf93254714dd601f5ed49ef2f51',
				logoURI: 'https://tokens.1inch.io/0x662b67d00a13faf93254714dd601f5ed49ef2f51.png',
				tags: ['tokens']
			},
			{
				symbol: 'MULTI',
				name: 'Multichain',
				decimals: 18,
				address: '0x65ef703f5594d2573eb71aaf55bc0cb548492df4',
				logoURI: 'https://tokens.1inch.io/0x65ef703f5594d2573eb71aaf55bc0cb548492df4.png',
				tags: ['tokens']
			},
			{
				symbol: 'CRAMER',
				name: 'Cramer Coin',
				decimals: 18,
				address: '0x64df3aab3b21cc275bb76c4a581cf8b726478ee0',
				logoURI: 'https://tokens.1inch.io/0x64df3aab3b21cc275bb76c4a581cf8b726478ee0.png',
				tags: ['tokens']
			},
			{
				symbol: 'XTP',
				name: 'Tap',
				decimals: 18,
				address: '0x6368e1e18c4c419ddfc608a0bed1ccb87b9250fc',
				logoURI: 'https://tokens.1inch.io/0x6368e1e18c4c419ddfc608a0bed1ccb87b9250fc.png',
				tags: ['tokens']
			},
			{
				symbol: 'cvxCRV',
				name: 'Convex CRV',
				decimals: 18,
				address: '0x62b9c7356a2dc64a1969e19c23e4f579f9810aa7',
				logoURI: 'https://tokens.1inch.io/0x62b9c7356a2dc64a1969e19c23e4f579f9810aa7.png',
				tags: ['tokens']
			},
			{
				symbol: 'auraBAL',
				name: 'Aura BAL',
				decimals: 18,
				address: '0x616e8bfa43f920657b3497dbf40d6b1a02d4608d',
				logoURI: 'https://tokens.1inch.io/0x616e8bfa43f920657b3497dbf40d6b1a02d4608d.png',
				tags: ['tokens']
			},
			{
				symbol: 'RBN',
				name: 'Ribbon',
				decimals: 18,
				address: '0x6123b0049f904d730db3c36a31167d9d4121fa6b',
				logoURI: 'https://tokens.1inch.io/0x6123b0049f904d730db3c36a31167d9d4121fa6b.png',
				tags: ['tokens']
			},
			{
				symbol: 'MIX',
				name: 'MixMarvel Token',
				decimals: 18,
				address: '0x5d285f735998f36631f678ff41fb56a10a4d0429',
				logoURI: 'https://tokens.1inch.io/0x5d285f735998f36631f678ff41fb56a10a4d0429.png',
				tags: ['tokens']
			},
			{
				symbol: 'CXD',
				name: 'Cortex DAO Token',
				decimals: 18,
				address: '0x5a56da75c50aa2733f5fa9a2442aaefcbc60b2e6',
				logoURI: 'https://tokens.1inch.io/0x5a56da75c50aa2733f5fa9a2442aaefcbc60b2e6.png',
				tags: ['tokens']
			},
			{
				symbol: 'BLUR',
				name: 'Blur',
				decimals: 18,
				address: '0x5283d291dbcf85356a21ba090e6db59121208b44',
				tags: ['tokens']
			},
			{
				symbol: 'NATION',
				name: 'Nation3',
				decimals: 18,
				address: '0x333a4823466879eef910a04d473505da62142069',
				logoURI: 'https://tokens.1inch.io/0x333a4823466879eef910a04d473505da62142069.png',
				tags: ['tokens']
			},
			{
				symbol: 'UwU',
				name: 'UwU Lend',
				decimals: 18,
				address: '0x55c08ca52497e2f1534b59e2917bf524d4765257',
				logoURI: 'https://tokens.1inch.io/0x55c08ca52497e2f1534b59e2917bf524d4765257.png',
				tags: ['tokens']
			},
			{
				symbol: 'BOO',
				name: 'SpookyToken',
				decimals: 18,
				address: '0x55af5865807b196bd0197e0902746f31fbccfa58',
				logoURI: 'https://tokens.1inch.io/0x55af5865807b196bd0197e0902746f31fbccfa58.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'SIDUS',
				name: 'SIDUS',
				decimals: 18,
				address: '0x549020a9cb845220d66d3e9c6d9f9ef61c981102',
				logoURI: 'https://tokens.1inch.io/0x549020a9cb845220d66d3e9c6d9f9ef61c981102.png',
				tags: ['tokens']
			},
			{
				symbol: 'VPAD',
				name: 'VLaunch',
				decimals: 18,
				address: '0x51fe2e572e97bfeb1d719809d743ec2675924edc',
				logoURI: 'https://tokens.1inch.io/0x51fe2e572e97bfeb1d719809d743ec2675924edc.png',
				tags: ['tokens']
			},
			{
				symbol: 'CWEB',
				name: 'Coinweb',
				decimals: 18,
				address: '0x505b5eda5e25a67e1c24a2bf1a527ed9eb88bf04',
				logoURI: 'https://tokens.1inch.io/0x505b5eda5e25a67e1c24a2bf1a527ed9eb88bf04.png',
				tags: ['tokens']
			},
			{
				symbol: 'KTN',
				name: 'Kattana',
				decimals: 18,
				address: '0x491e136ff7ff03e6ab097e54734697bb5802fc1c',
				logoURI: 'https://tokens.1inch.io/0x491e136ff7ff03e6ab097e54734697bb5802fc1c.png',
				tags: ['tokens']
			},
			{
				symbol: 'AXL',
				name: 'Axelar',
				decimals: 6,
				address: '0x467719ad09025fcc6cf6f8311755809d45a5e5f3',
				logoURI: 'https://tokens.1inch.io/0x467719ad09025fcc6cf6f8311755809d45a5e5f3.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'PUSd',
				name: 'Stablecoin',
				decimals: 18,
				address: '0x466a756e9a7401b5e2444a3fcb3c2c12fbea0a54',
				logoURI: 'https://tokens.1inch.io/0x466a756e9a7401b5e2444a3fcb3c2c12fbea0a54.png',
				tags: ['tokens']
			},
			{
				symbol: 'HRD',
				name: 'Hoard',
				decimals: 9,
				address: '0x461b71cff4d4334bba09489ace4b5dc1a1813445',
				logoURI: 'https://tokens.1inch.io/0x461b71cff4d4334bba09489ace4b5dc1a1813445.png',
				tags: ['tokens']
			},
			{
				symbol: 'EGT',
				name: 'ElonGoat',
				decimals: 9,
				address: '0x450e7f6e3a2f247a51b98c39297a9a5bfbdb3170',
				logoURI: 'https://tokens.1inch.io/0x450e7f6e3a2f247a51b98c39297a9a5bfbdb3170.png',
				tags: ['tokens']
			},
			{
				symbol: 'HORD',
				name: 'HORD Token',
				decimals: 18,
				address: '0x43a96962254855f16b925556f9e97be436a43448',
				logoURI: 'https://tokens.1inch.io/0x43a96962254855f16b925556f9e97be436a43448.png',
				tags: ['tokens']
			},
			{
				symbol: 'GRO',
				name: 'Gro DAO Token',
				decimals: 18,
				address: '0x3ec8798b81485a254928b70cda1cf0a2bb0b74d7',
				logoURI: 'https://tokens.1inch.io/0x3ec8798b81485a254928b70cda1cf0a2bb0b74d7.png',
				tags: ['tokens']
			},
			{
				symbol: 'FLX',
				name: 'Flux Token',
				decimals: 18,
				address: '0x3ea8ea4237344c9931214796d9417af1a1180770',
				logoURI: 'https://tokens.1inch.io/0x3ea8ea4237344c9931214796d9417af1a1180770.png',
				tags: ['tokens']
			},
			{
				symbol: 'wMEMO',
				name: 'Wrapped MEMO',
				decimals: 18,
				address: '0x3b79a28264fc52c7b4cea90558aa0b162f7faf57',
				logoURI: 'https://tokens.1inch.io/0x3b79a28264fc52c7b4cea90558aa0b162f7faf57.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'WAGMIGAMES',
				name: 'WAGMI GAMES',
				decimals: 18,
				address: '0x3b604747ad1720c01ded0455728b62c0d2f100f0',
				logoURI: 'https://tokens.1inch.io/0x3b604747ad1720c01ded0455728b62c0d2f100f0.png',
				tags: ['tokens']
			},
			{
				symbol: 'PINU',
				name: 'Piccolo Inu',
				decimals: 9,
				address: '0x3a1311b8c404629e38f61d566cefefed083b9670',
				logoURI: 'https://tokens.1inch.io/0x3a1311b8c404629e38f61d566cefefed083b9670.png',
				tags: ['tokens']
			},
			{
				symbol: 'HDRN',
				name: 'Hedron',
				decimals: 9,
				address: '0x3819f64f282bf135d62168c1e513280daf905e06',
				logoURI: 'https://tokens.1inch.io/0x3819f64f282bf135d62168c1e513280daf905e06.png',
				tags: ['tokens']
			},
			{
				symbol: 'VCASH',
				name: 'void.cash',
				decimals: 18,
				address: '0x37cd4e8875e3edaffdfe9be63958f07effbd0bfd',
				logoURI: 'https://tokens.1inch.io/0x37cd4e8875e3edaffdfe9be63958f07effbd0bfd.png',
				tags: ['tokens']
			},
			{
				symbol: 'UNIQ',
				name: 'Uniqly',
				decimals: 18,
				address: '0x3758e00b100876c854636ef8db61988931bb8025',
				logoURI: 'https://tokens.1inch.io/0x3758e00b100876c854636ef8db61988931bb8025.png',
				tags: ['tokens']
			},
			{
				symbol: 'BTBS',
				name: 'BitBase',
				decimals: 18,
				address: '0x32e6c34cd57087abbd59b5a4aecc4cb495924356',
				logoURI: 'https://tokens.1inch.io/0x32e6c34cd57087abbd59b5a4aecc4cb495924356.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'XAI',
				name: 'SideShift Token',
				decimals: 18,
				address: '0x35e78b3982e87ecfd5b3f3265b601c046cdbe232',
				logoURI: 'https://tokens.1inch.io/0x35e78b3982e87ecfd5b3f3265b601c046cdbe232.png',
				tags: ['tokens']
			},
			{
				symbol: 'eMAID',
				name: 'MaidSafeCoin',
				decimals: 18,
				address: '0x329c6e459ffa7475718838145e5e85802db2a303',
				logoURI: 'https://tokens.1inch.io/0x329c6e459ffa7475718838145e5e85802db2a303.png',
				tags: ['tokens']
			},
			{
				symbol: 'RSR',
				name: 'Reserve Rights',
				decimals: 18,
				address: '0x320623b8e4ff03373931769a31fc52a4e78b5d70',
				logoURI: 'https://tokens.1inch.io/0x320623b8e4ff03373931769a31fc52a4e78b5d70.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'YDF',
				name: 'Yieldification',
				decimals: 18,
				address: '0x30dcba0405004cf124045793e1933c798af9e66a',
				logoURI: 'https://tokens.1inch.io/0x30dcba0405004cf124045793e1933c798af9e66a.png',
				tags: ['tokens']
			},
			{
				symbol: 'NXRA',
				name: 'AllianceBlock Nexera Token',
				decimals: 18,
				address: '0x644192291cc835a93d6330b24ea5f5fedd0eef9e',
				logoURI: 'https://tokens.1inch.io/0x644192291cc835a93d6330b24ea5f5fedd0eef9e.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'TRYB',
				name: 'BiLira',
				decimals: 6,
				address: '0x2c537e5624e4af88a7ae4060c022609376c8d0eb',
				logoURI: 'https://tokens.1inch.io/0x2c537e5624e4af88a7ae4060c022609376c8d0eb.png',
				tags: ['tokens']
			},
			{
				symbol: 'NZDS',
				name: 'NZD Stablecoin',
				decimals: 6,
				address: '0xda446fad08277b4d2591536f204e018f32b6831c',
				logoURI: 'https://tokens.1inch.io/0xda446fad08277b4d2591536f204e018f32b6831c.png',
				tags: ['tokens']
			},
			{
				symbol: 'STBT',
				name: 'Short-term Treasury Bill Token',
				decimals: 18,
				address: '0x530824da86689c9c17cdc2871ff29b058345b44a',
				logoURI: 'https://tokens.1inch.io/0x530824da86689c9c17cdc2871ff29b058345b44a.png',
				tags: ['tokens']
			},
			{
				symbol: 'vAMM-SOLID/WETH',
				name: 'VolatileV2 AMM - SOLID/WETH',
				decimals: 18,
				address: '0x642431623ae5d73c19fc931aaea0d4677303880c',
				logoURI: 'https://tokens.1inch.io/0x642431623ae5d73c19fc931aaea0d4677303880c.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'gtcETH',
				name: 'Gitcoin Staked ETH Index (gtcETH)',
				decimals: 18,
				address: '0x36c833eed0d376f75d1ff9dfdee260191336065e',
				logoURI: 'https://tokens.1inch.io/0x36c833eed0d376f75d1ff9dfdee260191336065e.png',
				tags: ['tokens']
			},
			{
				symbol: 'LIT',
				name: 'Liquidity Incentive Token',
				decimals: 18,
				address: '0xfd0205066521550d7d7ab19da8f72bb004b4c341',
				logoURI: 'https://tokens.1inch.io/0xfd0205066521550d7d7ab19da8f72bb004b4c341.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'WILD',
				name: 'Wilder',
				decimals: 18,
				address: '0x2a3bff78b79a009976eea096a51a948a3dc00e34',
				logoURI: 'https://tokens.1inch.io/0x2a3bff78b79a009976eea096a51a948a3dc00e34.png',
				tags: ['tokens']
			},
			{
				symbol: 'PUNK',
				name: 'CryptoPunks',
				decimals: 18,
				address: '0x269616d549d7e8eaa82dfb17028d0b212d11232a',
				logoURI: 'https://tokens.1inch.io/0x269616d549d7e8eaa82dfb17028d0b212d11232a.png',
				tags: ['tokens']
			},
			{
				symbol: 'YGG',
				name: 'Yield Guild Games Token',
				decimals: 18,
				address: '0x25f8087ead173b73d6e8b84329989a8eea16cf73',
				logoURI: 'https://tokens.1inch.io/0x25f8087ead173b73d6e8b84329989a8eea16cf73.png',
				tags: ['tokens']
			},
			{
				symbol: 'wALV',
				name: 'Alvey Chain',
				decimals: 18,
				address: '0x256d1fce1b1221e8398f65f9b36033ce50b2d497',
				logoURI: 'https://tokens.1inch.io/0x256d1fce1b1221e8398f65f9b36033ce50b2d497.png',
				tags: ['tokens']
			},
			{
				symbol: 'FLEX',
				name: 'FLEX Coin',
				decimals: 18,
				address: '0xfcf8eda095e37a41e002e266daad7efc1579bc0a',
				logoURI: 'https://tokens.1inch.io/0xfcf8eda095e37a41e002e266daad7efc1579bc0a.png',
				tags: ['tokens']
			},
			{
				symbol: 'XFT',
				name: 'Offshift',
				decimals: 18,
				address: '0x76bc677d444f1e9d57daf5187ee2b7dc852745ae',
				logoURI: 'https://tokens.1inch.io/0x76bc677d444f1e9d57daf5187ee2b7dc852745ae.png',
				tags: ['tokens']
			}
		]
	},
	{
		network: ENetwork.binance,
		tokens: [
			{
				symbol: 'BNB',
				name: 'BNB',
				decimals: 18,
				address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
				logoURI: 'https://tokens.1inch.io/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c_1.png',
				tags: ['native']
			},
			{
				symbol: 'WBNB',
				name: 'Wrapped BNB',
				decimals: 18,
				address: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
				logoURI: 'https://tokens.1inch.io/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c_1.png',
				wrappedNative: true,
				tags: ['tokens', 'PEG:BNB']
			},
			{
				symbol: 'CHI',
				name: 'Chi Gastoken by 1inch',
				decimals: 0,
				address: '0x0000000000004946c0e9f43f4dee607b0ef1fa1c',
				logoURI: 'https://tokens.1inch.io/0x0000000000004946c0e9f43f4dee607b0ef1fa1c.png',
				tags: ['tokens']
			},
			{
				symbol: 'USDT',
				name: 'Tether USD',
				decimals: 18,
				address: '0x55d398326f99059ff775485246999027b3197955',
				logoURI: 'https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png',
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'CAKE',
				name: 'PancakeSwap Token',
				decimals: 18,
				address: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
				logoURI: 'https://tokens.1inch.io/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82.png',
				tags: ['tokens']
			},
			{
				symbol: 'BUSD_2',
				name: 'BUSD Token',
				decimals: 18,
				address: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
				logoURI: 'https://tokens.1inch.io/0x4fabb145d64652a948d72533023f6e7a623c7c53.png',
				displayedSymbol: 'BUSD',
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'ETH',
				name: 'Ethereum Token',
				decimals: 18,
				address: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
				logoURI: 'https://tokens.1inch.io/0x2170ed0880ac9a755fd29b2688956bd959f933f8.png',
				tags: ['tokens', 'PEG:ETH']
			},
			{
				symbol: 'BTCB',
				name: 'BTCB Token',
				decimals: 18,
				address: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
				logoURI: 'https://tokens.1inch.io/0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c.png',
				tags: ['tokens']
			},
			{
				symbol: 'AUTO',
				name: 'AUTOv2',
				decimals: 18,
				address: '0xa184088a740c695e156f91f5cc086a06bb78b827',
				logoURI: 'https://tokens.1inch.io/0xa184088a740c695e156f91f5cc086a06bb78b827.png',
				tags: ['tokens']
			},
			{
				symbol: 'BSCX',
				name: 'BSCX',
				decimals: 18,
				address: '0x5ac52ee5b2a633895292ff6d8a89bb9190451587',
				logoURI: 'https://tokens.1inch.io/0x5ac52ee5b2a633895292ff6d8a89bb9190451587.png',
				tags: ['tokens']
			},
			{
				symbol: 'BDO',
				name: 'bDollar',
				decimals: 18,
				address: '0x190b589cf9fb8ddeabbfeae36a813ffb2a702454',
				logoURI: 'https://tokens.1inch.io/0x190b589cf9fb8ddeabbfeae36a813ffb2a702454.png',
				tags: ['tokens']
			},
			{
				symbol: 'DOT',
				name: 'DOT',
				decimals: 18,
				address: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
				logoURI: 'https://tokens.1inch.io/0x7083609fce4d1d8dc0c979aab8c869ea2c873402.png',
				tags: ['tokens']
			},
			{
				symbol: 'UST',
				name: 'Wrapped UST Token',
				decimals: 18,
				address: '0x23396cf899ca06c4472205fc903bdb4de249d6fc',
				logoURI: 'https://tokens.1inch.io/0xa47c8bf37f92abed4a126bda807a7b7498661acd.png',
				tags: ['tokens']
			},
			{
				symbol: 'VAI',
				name: 'VAI Stablecoin',
				decimals: 18,
				address: '0x4bd17003473389a42daf6a0a729f6fdb328bbbd7',
				logoURI: 'https://tokens.1inch.io/0x4bd17003473389a42daf6a0a729f6fdb328bbbd7.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'UNI',
				name: 'Uniswap',
				decimals: 18,
				address: '0xbf5140a22578168fd562dccf235e5d43a02ce9b1',
				logoURI: 'https://tokens.1inch.io/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984.png',
				tags: ['tokens']
			},
			{
				symbol: 'LINK',
				name: 'ChainLink Token',
				decimals: 18,
				address: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
				logoURI: 'https://tokens.1inch.io/0x514910771af9ca656af840dff83e8264ecf986ca.png',
				tags: ['tokens']
			},
			{
				symbol: 'USDC',
				name: 'USD Coin',
				decimals: 18,
				address: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
				logoURI: 'https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png',
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'zSEED',
				name: 'zSeedToken',
				decimals: 18,
				address: '0x5cd50aae14e14b3fdf3ff13c7a40e8cf5ae8b0a5',
				logoURI: 'https://tokens.1inch.io/0x5cd50aae14e14b3fdf3ff13c7a40e8cf5ae8b0a5.png',
				tags: ['tokens']
			},
			{
				symbol: 'DAI',
				name: 'Dai Token',
				decimals: 18,
				address: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
				logoURI: 'https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png',
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'BAND',
				name: 'Band Protocol Token',
				decimals: 18,
				address: '0xad6caeb32cd2c308980a548bd0bc5aa4306c6c18',
				logoURI: 'https://tokens.1inch.io/0xba11d00c5f74255f56a5e366f4f77f5a186d7f55.png',
				tags: ['tokens']
			},
			{
				symbol: 'WOOP',
				name: 'Woonkly Power',
				decimals: 18,
				address: '0x8b303d5bbfbbf46f1a4d9741e491e06986894e18',
				logoURI: 'https://tokens.1inch.io/0x8b303d5bbfbbf46f1a4d9741e491e06986894e18.png',
				tags: ['tokens']
			},
			{
				symbol: 'sBDO',
				name: 'bDollar Share',
				decimals: 18,
				address: '0x0d9319565be7f53cefe84ad201be3f40feae2740',
				logoURI: 'https://tokens.1inch.io/0x0d9319565be7f53cefe84ad201be3f40feae2740.png',
				tags: ['tokens']
			},
			{
				symbol: 'ADA',
				name: 'Cardano Token',
				decimals: 18,
				address: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
				logoURI: 'https://tokens.1inch.io/0x3ee2200efb3400fabb9aacf31297cbdd1d435d47.png',
				tags: ['tokens']
			},
			{
				symbol: 'SFP',
				name: 'SafePal Token',
				decimals: 18,
				address: '0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb',
				logoURI: 'https://tokens.1inch.io/0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb.png',
				tags: ['tokens']
			},
			{
				symbol: 'Fuel',
				name: 'Fuel Token',
				decimals: 18,
				address: '0x2090c8295769791ab7a3cf1cc6e0aa19f35e441a',
				logoURI: 'https://tokens.1inch.io/0x2090c8295769791ab7a3cf1cc6e0aa19f35e441a.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'XVS',
				name: 'Venus',
				decimals: 18,
				address: '0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63',
				logoURI: 'https://tokens.1inch.io/0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63.png',
				tags: ['tokens']
			},
			{
				symbol: 'TWT',
				name: 'Trust Wallet',
				decimals: 18,
				address: '0x4b0f1812e5df2a09796481ff14017e6005508003',
				logoURI: 'https://tokens.1inch.io/0x4b0f1812e5df2a09796481ff14017e6005508003.png',
				tags: ['tokens']
			},
			{
				symbol: 'EGG',
				name: 'Goose Golden Egg',
				decimals: 18,
				address: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
				logoURI: 'https://tokens.1inch.io/0xf952fc3ca7325cc27d15885d37117676d25bfda6.png',
				tags: ['tokens']
			},
			{
				symbol: 'YFI',
				name: 'yearn.finance',
				decimals: 18,
				address: '0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e',
				logoURI: 'https://tokens.1inch.io/0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e.png',
				tags: ['tokens']
			},
			{
				symbol: 'BRY',
				name: 'Berry Tributes',
				decimals: 18,
				address: '0xf859bf77cbe8699013d6dbc7c2b926aaf307f830',
				logoURI: 'https://tokens.1inch.io/0xf859bf77cbe8699013d6dbc7c2b926aaf307f830.png',
				tags: ['tokens']
			},
			{
				symbol: 'SXP',
				name: 'Swipe',
				decimals: 18,
				address: '0x47bead2563dcbf3bf2c9407fea4dc236faba485a',
				logoURI: 'https://tokens.1inch.io/0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9.png',
				tags: ['tokens']
			},
			{
				symbol: 'XRP',
				name: 'XRP Token',
				decimals: 18,
				address: '0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe',
				logoURI: 'https://tokens.1inch.io/0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe.png',
				tags: ['tokens']
			},
			{
				symbol: 'COMP',
				name: 'Compound Coin',
				decimals: 18,
				address: '0x52ce071bd9b1c4b00a0b92d298c512478cad67e8',
				logoURI: 'https://tokens.1inch.io/0xc00e94cb662c3520282e6f5717214004a7f26888.png',
				tags: ['tokens']
			},
			{
				symbol: 'ACS',
				name: 'ACryptoS',
				decimals: 18,
				address: '0x4197c6ef3879a08cd51e5560da5064b773aa1d29',
				logoURI: 'https://tokens.1inch.io/0x4197c6ef3879a08cd51e5560da5064b773aa1d29.png',
				tags: ['tokens']
			},
			{
				symbol: 'REEF',
				name: 'Reef.finance',
				decimals: 18,
				address: '0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e',
				logoURI: 'https://tokens.1inch.io/0xfe3e6a25e6b192a42a44ecddcd13796471735acf.png',
				tags: ['tokens']
			},
			{
				symbol: 'ALPHA',
				name: 'AlphaToken',
				decimals: 18,
				address: '0xa1faa113cbe53436df28ff0aee54275c13b40975',
				logoURI: 'https://tokens.1inch.io/0xa1faa113cbe53436df28ff0aee54275c13b40975_1.png',
				tags: ['tokens']
			},
			{
				symbol: 'INJ',
				name: 'Injective Protocol',
				decimals: 18,
				address: '0xa2b726b1145a4773f68593cf171187d8ebe4d495',
				logoURI: 'https://tokens.1inch.io/0xe28b3b32b6c345a34ff64674606124dd5aceca30.png',
				tags: ['tokens']
			},
			{
				symbol: 'KEBAB',
				name: 'Kebab Token',
				decimals: 18,
				address: '0x7979f6c54eba05e18ded44c4f986f49a5de551c2',
				logoURI: 'https://tokens.1inch.io/0x7979f6c54eba05e18ded44c4f986f49a5de551c2.png',
				tags: ['tokens']
			},
			{
				symbol: 'EOS',
				name: 'EOS Token',
				decimals: 18,
				address: '0x56b6fb708fc5732dec1afc8d8556423a2edccbd6',
				logoURI: 'https://tokens.1inch.io/0x56b6fb708fc5732dec1afc8d8556423a2edccbd6.png',
				tags: ['tokens']
			},
			{
				symbol: 'BUNNY',
				name: 'Bunny Token',
				decimals: 18,
				address: '0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51',
				logoURI: 'https://tokens.1inch.io/0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51.png',
				tags: ['tokens']
			},
			{
				symbol: 'LTC',
				name: 'Litecoin Token',
				decimals: 18,
				address: '0x4338665cbb7b2485a8855a139b75d5e34ab0db94',
				logoURI: 'https://tokens.1inch.io/0x4338665cbb7b2485a8855a139b75d5e34ab0db94.png',
				tags: ['tokens']
			},
			{
				symbol: 'LIT',
				name: 'Litentry',
				decimals: 18,
				address: '0xb59490ab09a0f526cc7305822ac65f2ab12f9723',
				logoURI: 'https://tokens.1inch.io/0xb59490ab09a0f526cc7305822ac65f2ab12f9723.png',
				tags: ['tokens']
			},
			{
				symbol: 'BCH',
				name: 'Bitcoin Cash Token',
				decimals: 18,
				address: '0x8ff795a6f4d97e7887c79bea79aba5cc76444adf',
				logoURI: 'https://tokens.1inch.io/0x8ff795a6f4d97e7887c79bea79aba5cc76444adf.png',
				tags: ['tokens']
			},
			{
				symbol: 'Helmet',
				name: 'Helmet.insure Governance Token',
				decimals: 18,
				address: '0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8',
				logoURI: 'https://tokens.1inch.io/0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8.png',
				tags: ['tokens']
			},
			{
				symbol: 'FRONT',
				name: 'Frontier Token',
				decimals: 18,
				address: '0x928e55dab735aa8260af3cedada18b5f70c72f1b',
				logoURI: 'https://tokens.1inch.io/0xf8c3527cc04340b208c854e985240c02f7b7793f.png',
				tags: ['tokens']
			},
			{
				symbol: 'BTCST',
				name: 'StandardBTCHashrateToken',
				decimals: 17,
				address: '0x78650b139471520656b9e7aa7a5e9276814a38e9',
				logoURI: 'https://tokens.1inch.io/0x78650b139471520656b9e7aa7a5e9276814a38e9.png',
				tags: ['tokens']
			},
			{
				symbol: 'FIL',
				name: 'Filecoin',
				decimals: 18,
				address: '0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153',
				logoURI: 'https://tokens.1inch.io/0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153.png',
				tags: ['tokens']
			},
			{
				symbol: 'ATOM',
				name: 'Cosmos Token',
				decimals: 18,
				address: '0x0eb3a705fc54725037cc9e008bdede697f62f335',
				logoURI: 'https://tokens.1inch.io/0x0eb3a705fc54725037cc9e008bdede697f62f335.png',
				tags: ['tokens']
			},
			{
				symbol: '1INCH',
				name: '1INCH Token',
				decimals: 18,
				address: '0x111111111117dc0aa78b770fa6a738034120c302',
				logoURI: 'https://tokens.1inch.io/0x111111111117dc0aa78b770fa6a738034120c302.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'vSXP',
				name: 'Venus SXP',
				decimals: 8,
				address: '0x2ff3d0f6990a40261c66e1ff2017acbc282eb6d0',
				logoURI: 'https://tokens.1inch.io/0x2ff3d0f6990a40261c66e1ff2017acbc282eb6d0.png',
				tags: ['tokens']
			},
			{
				symbol: 'vUSDC',
				name: 'Venus USDC',
				decimals: 8,
				address: '0xeca88125a5adbe82614ffc12d0db554e2e2867c8',
				logoURI: 'https://tokens.1inch.io/0xeca88125a5adbe82614ffc12d0db554e2e2867c8.png',
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'vUSDT',
				name: 'Venus USDT',
				decimals: 8,
				address: '0xfd5840cd36d94d7229439859c0112a4185bc0255',
				logoURI: 'https://tokens.1inch.io/0xfd5840cd36d94d7229439859c0112a4185bc0255.png',
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'vBUSD',
				name: 'Venus BUSD',
				decimals: 8,
				address: '0x95c78222b3d6e262426483d42cfa53685a67ab9d',
				logoURI: 'https://tokens.1inch.io/0x95c78222b3d6e262426483d42cfa53685a67ab9d.png',
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'vBNB',
				name: 'Venus BNB',
				decimals: 8,
				address: '0xa07c5b74c9b40447a954e1466938b865b6bbea36',
				logoURI: 'https://tokens.1inch.io/0xa07c5b74c9b40447a954e1466938b865b6bbea36.png',
				tags: ['tokens', 'PEG:BNB']
			},
			{
				symbol: 'vXVS',
				name: 'Venus XVS',
				decimals: 8,
				address: '0x151b1e2635a717bcdc836ecd6fbb62b674fe3e1d',
				logoURI: 'https://tokens.1inch.io/0x151b1e2635a717bcdc836ecd6fbb62b674fe3e1d.png',
				tags: ['tokens']
			},
			{
				symbol: 'vBTC',
				name: 'Venus BTC',
				decimals: 8,
				address: '0x882c173bc7ff3b7786ca16dfed3dfffb9ee7847b',
				logoURI: 'https://tokens.1inch.io/0x882c173bc7ff3b7786ca16dfed3dfffb9ee7847b.png',
				tags: ['tokens']
			},
			{
				symbol: 'vETH',
				name: 'Venus ETH',
				decimals: 8,
				address: '0xf508fcd89b8bd15579dc79a6827cb4686a3592c8',
				logoURI: 'https://tokens.1inch.io/0xf508fcd89b8bd15579dc79a6827cb4686a3592c8.png',
				tags: ['tokens', 'PEG:ETH']
			},
			{
				symbol: 'vLTC',
				name: 'Venus LTC',
				decimals: 8,
				address: '0x57a5297f2cb2c0aac9d554660acd6d385ab50c6b',
				logoURI: 'https://tokens.1inch.io/0x57a5297f2cb2c0aac9d554660acd6d385ab50c6b.png',
				tags: ['tokens']
			},
			{
				symbol: 'vXRP',
				name: 'Venus XRP',
				decimals: 8,
				address: '0xb248a295732e0225acd3337607cc01068e3b9c10',
				logoURI: 'https://tokens.1inch.io/0xb248a295732e0225acd3337607cc01068e3b9c10.png',
				tags: ['tokens']
			},
			{
				symbol: 'vBCH',
				name: 'Venus BCH',
				decimals: 8,
				address: '0x5f0388ebc2b94fa8e123f404b79ccf5f40b29176',
				logoURI: 'https://tokens.1inch.io/0x5f0388ebc2b94fa8e123f404b79ccf5f40b29176.png',
				tags: ['tokens']
			},
			{
				symbol: 'vDOT',
				name: 'Venus DOT',
				decimals: 8,
				address: '0x1610bc33319e9398de5f57b33a5b184c806ad217',
				logoURI: 'https://tokens.1inch.io/0x1610bc33319e9398de5f57b33a5b184c806ad217.png',
				tags: ['tokens']
			},
			{
				symbol: 'vLINK',
				name: 'Venus LINK',
				decimals: 8,
				address: '0x650b940a1033b8a1b1873f78730fcfc73ec11f1f',
				logoURI: 'https://tokens.1inch.io/0x650b940a1033b8a1b1873f78730fcfc73ec11f1f.png',
				tags: ['tokens']
			},
			{
				symbol: 'vBETH',
				name: 'Venus BETH',
				decimals: 8,
				address: '0x972207a639cc1b374b893cc33fa251b55ceb7c07',
				logoURI: 'https://tokens.1inch.io/0x972207a639cc1b374b893cc33fa251b55ceb7c07.png',
				tags: ['tokens', 'PEG:ETH']
			},
			{
				symbol: 'vDAI',
				name: 'Venus DAI',
				decimals: 8,
				address: '0x334b3ecb4dca3593bccc3c7ebd1a1c1d1780fbf1',
				logoURI: 'https://tokens.1inch.io/0x334b3ecb4dca3593bccc3c7ebd1a1c1d1780fbf1.png',
				tags: ['tokens']
			},
			{
				symbol: 'vFIL',
				name: 'Venus FIL',
				decimals: 8,
				address: '0xf91d58b5ae142dacc749f58a49fcbac340cb0343',
				logoURI: 'https://tokens.1inch.io/0xf91d58b5ae142dacc749f58a49fcbac340cb0343.png',
				tags: ['tokens']
			},
			{
				symbol: 'BETH',
				name: 'Binance Beacon ETH',
				decimals: 18,
				address: '0x250632378e573c6be1ac2f97fcdf00515d0aa91b',
				logoURI: 'https://tokens.1inch.io/0x250632378e573c6be1ac2f97fcdf00515d0aa91b.png',
				tags: ['tokens', 'PEG:ETH']
			},
			{
				symbol: 'BAKE',
				name: 'BakeryToken',
				decimals: 18,
				address: '0xe02df9e3e622debdd69fb838bb799e3f168902c5',
				logoURI: 'https://tokens.1inch.io/0xe02df9e3e622debdd69fb838bb799e3f168902c5.png',
				tags: ['tokens']
			},
			{
				symbol: 'renBTC',
				name: 'renBTC',
				decimals: 8,
				address: '0xfce146bf3146100cfe5db4129cf6c82b0ef4ad8c',
				logoURI: 'https://tokens.1inch.io/0xfce146bf3146100cfe5db4129cf6c82b0ef4ad8c.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'BANANA',
				name: 'ApeSwapFinance Banana',
				decimals: 18,
				address: '0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95',
				logoURI: 'https://tokens.1inch.io/0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95.png',
				tags: ['tokens']
			},
			{
				symbol: 'ZEC',
				name: 'Zcash Token',
				decimals: 18,
				address: '0x1ba42e5193dfa8b03d15dd1b86a3113bbbef8eeb',
				logoURI: 'https://tokens.1inch.io/0x1ba42e5193dfa8b03d15dd1b86a3113bbbef8eeb.png',
				tags: ['tokens']
			},
			{
				symbol: 'NEAR',
				name: 'NEAR Protocol',
				decimals: 18,
				address: '0x1fa4a73a3f0133f0025378af00236f3abdee5d63',
				logoURI: 'https://tokens.1inch.io/0x1fa4a73a3f0133f0025378af00236f3abdee5d63.png',
				tags: ['tokens']
			},
			{
				symbol: 'ETC',
				name: 'Ethereum Classic',
				decimals: 18,
				address: '0x3d6545b08693dae087e957cb1180ee38b9e3c25e',
				logoURI: 'https://tokens.1inch.io/0x3d6545b08693dae087e957cb1180ee38b9e3c25e.png',
				tags: ['tokens']
			},
			{
				symbol: 'ONT',
				name: 'Ontology Token',
				decimals: 18,
				address: '0xfd7b3a77848f1c2d67e05e54d78d174a0c850335',
				logoURI: 'https://tokens.1inch.io/0xfd7b3a77848f1c2d67e05e54d78d174a0c850335.png',
				tags: ['tokens']
			},
			{
				symbol: 'BAT',
				name: 'Basic Attention Token',
				decimals: 18,
				address: '0x101d82428437127bf1608f699cd651e6abf9766e',
				logoURI: 'https://tokens.1inch.io/0x0d8775f648430679a709e98d2b0cb6250d2887ef.png',
				tags: ['tokens']
			},
			{
				symbol: 'PAX',
				name: 'Paxos Standard',
				decimals: 18,
				address: '0xb7f8cd00c5a06c0537e2abff0b58033d02e5e094',
				logoURI: 'https://tokens.1inch.io/0x8e870d67f660d95d5be530380d0ec0bd388289e1.png',
				tags: ['tokens']
			},
			{
				symbol: 'DODO',
				name: 'DODO bird',
				decimals: 18,
				address: '0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2',
				logoURI: 'https://tokens.1inch.io/0x43dfc4159d86f3a37a5a4b3d4580b888ad7d4ddd.png',
				tags: ['tokens']
			},
			{
				symbol: 'IOTX',
				name: 'IoTeX Network',
				decimals: 18,
				address: '0x9678e42cebeb63f23197d726b29b1cb20d0064e5',
				logoURI: 'https://tokens.1inch.io/0x9678e42cebeb63f23197d726b29b1cb20d0064e5.png',
				tags: ['tokens']
			},
			{
				symbol: 'ANKR',
				name: 'Ankr',
				decimals: 18,
				address: '0xf307910a4c7bbc79691fd374889b36d8531b08e3',
				logoURI: 'https://tokens.1inch.io/0x8290333cef9e6d528dd5618fb97a76f268f3edd4.png',
				tags: ['tokens']
			},
			{
				symbol: 'LINA',
				name: 'Linear Token',
				decimals: 18,
				address: '0x762539b45a1dcce3d36d080f74d1aed37844b878',
				logoURI: 'https://tokens.1inch.io/0x3e9bc21c9b189c09df3ef1b824798658d5011937.png',
				tags: ['tokens']
			},
			{
				symbol: 'MATH',
				name: 'MATH Token',
				decimals: 18,
				address: '0xf218184af829cf2b0019f8e6f0b2423498a36983',
				logoURI: 'https://tokens.1inch.io/0x08d967bb0134f2d07f7cfb6e246680c53927dd30.png',
				tags: ['tokens']
			},
			{
				symbol: 'LTO',
				name: 'LTO Network',
				decimals: 18,
				address: '0x857b222fc79e1cbbf8ca5f78cb133d1b7cf34bbd',
				logoURI: 'https://tokens.1inch.io/0x3db6ba6ab6f95efed1a6e794cad492faaabf294d.png',
				tags: ['tokens']
			},
			{
				symbol: 'SPARTA',
				name: 'Spartan Protocol Token',
				decimals: 18,
				address: '0x3910db0600ea925f63c36ddb1351ab6e2c6eb102',
				logoURI: 'https://tokens.1inch.io/0x3910db0600ea925f63c36ddb1351ab6e2c6eb102.png',
				tags: ['tokens']
			},
			{
				symbol: 'ANY',
				name: 'Anyswap-BEP20',
				decimals: 18,
				address: '0xf68c9df95a18b2a5a5fa1124d79eeeffbad0b6fa',
				logoURI: 'https://tokens.1inch.io/0xf99d58e463a2e07e5692127302c20a191861b4d6.png',
				tags: ['tokens']
			},
			{
				symbol: 'JulD',
				name: 'JulSwap',
				decimals: 18,
				address: '0x5a41f637c3f7553dba6ddc2d3ca92641096577ea',
				logoURI: 'https://tokens.1inch.io/0x5a41f637c3f7553dba6ddc2d3ca92641096577ea.png',
				tags: ['tokens']
			},
			{
				symbol: 'BURGER',
				name: 'Burger Swap',
				decimals: 18,
				address: '0xae9269f27437f0fcbc232d39ec814844a51d6b8f',
				logoURI: 'https://tokens.1inch.io/0xae9269f27437f0fcbc232d39ec814844a51d6b8f.png',
				tags: ['tokens']
			},
			{
				symbol: 'CTK',
				name: 'CertiK Token',
				decimals: 6,
				address: '0xa8c2b8eec3d368c0253ad3dae65a5f2bbb89c929',
				logoURI: 'https://tokens.1inch.io/0xa8c2b8eec3d368c0253ad3dae65a5f2bbb89c929.png',
				tags: ['tokens']
			},
			{
				symbol: 'FREE',
				name: 'FREE coin BSC',
				decimals: 18,
				address: '0x12e34cdf6a031a10fe241864c32fb03a4fdad739',
				logoURI: 'https://tokens.1inch.io/0x12e34cdf6a031a10fe241864c32fb03a4fdad739.png',
				tags: ['tokens']
			},
			{
				symbol: 'BHC',
				name: 'Billion Happiness',
				decimals: 18,
				address: '0x6fd7c98458a943f469e1cf4ea85b173f5cd342f4',
				logoURI: 'https://tokens.1inch.io/0x6fd7c98458a943f469e1cf4ea85b173f5cd342f4.png',
				tags: ['tokens']
			},
			{
				symbol: 'BTD',
				name: 'Bolt Dollar',
				decimals: 18,
				address: '0xd1102332a213e21faf78b69c03572031f3552c33',
				logoURI: 'https://tokens.1inch.io/0xd1102332a213e21faf78b69c03572031f3552c33.png',
				tags: ['tokens']
			},
			{
				symbol: 'NUTS',
				name: 'Squirrel Finance',
				decimals: 18,
				address: '0x8893d5fa71389673c5c4b9b3cb4ee1ba71207556',
				logoURI: 'https://tokens.1inch.io/0x8893d5fa71389673c5c4b9b3cb4ee1ba71207556.png',
				tags: ['tokens']
			},
			{
				symbol: 'JULb',
				name: 'JULb',
				decimals: 18,
				address: '0x32dffc3fe8e3ef3571bf8a72c0d0015c5373f41d',
				logoURI: 'https://tokens.1inch.io/0x32dffc3fe8e3ef3571bf8a72c0d0015c5373f41d.png',
				tags: ['tokens']
			},
			{
				symbol: 'BIFI',
				name: 'beefy.finance',
				decimals: 18,
				address: '0xca3f508b8e4dd382ee878a314789373d80a5190a',
				logoURI: 'https://tokens.1inch.io/0xca3f508b8e4dd382ee878a314789373d80a5190a.png',
				tags: ['tokens']
			},
			{
				symbol: 'DOGE',
				name: 'Dogecoin',
				decimals: 8,
				address: '0xba2ae424d960c26247dd6c32edc70b295c744c43',
				logoURI: 'https://tokens.1inch.io/0xba2ae424d960c26247dd6c32edc70b295c744c43.png',
				tags: ['tokens']
			},
			{
				symbol: 'ALPACA',
				name: 'AlpacaToken',
				decimals: 18,
				address: '0x8f0528ce5ef7b51152a59745befdd91d97091d2f',
				logoURI: 'https://tokens.1inch.io/0x8f0528ce5ef7b51152a59745befdd91d97091d2f.png',
				tags: ['tokens']
			},
			{
				symbol: 'bKANGAL',
				name: 'Kangal',
				decimals: 18,
				address: '0xd632bd021a07af70592ce1e18717ab9aa126decb',
				logoURI: 'https://tokens.1inch.io/0xd632bd021a07af70592ce1e18717ab9aa126decb.png',
				tags: ['tokens']
			},
			{
				symbol: 'UBU',
				name: 'UBUToken',
				decimals: 18,
				address: '0xd2ddfba7bb12f6e70c2aab6b6bf9edaef42ed22f',
				logoURI: 'https://tokens.1inch.io/0xd2ddfba7bb12f6e70c2aab6b6bf9edaef42ed22f.png',
				tags: ['tokens']
			},
			{
				symbol: 'BELT',
				name: 'BELT Token',
				decimals: 18,
				address: '0xe0e514c71282b6f4e823703a39374cf58dc3ea4f',
				logoURI: 'https://tokens.1inch.io/0xe0e514c71282b6f4e823703a39374cf58dc3ea4f.png',
				tags: ['tokens']
			},
			{
				symbol: 'SOUP',
				name: 'Soup',
				decimals: 18,
				address: '0x94f559ae621f1c810f31a6a620ad7376776fe09e',
				logoURI: 'https://tokens.1inch.io/0x94f559ae621f1c810f31a6a620ad7376776fe09e.png',
				tags: ['tokens']
			},
			{
				symbol: 'MDO',
				name: 'Midas Dollar',
				decimals: 18,
				address: '0x35e869b7456462b81cdb5e6e42434bd27f3f788c',
				logoURI: 'https://tokens.1inch.io/0x35e869b7456462b81cdb5e6e42434bd27f3f788c.png',
				tags: ['tokens']
			},
			{
				symbol: 'WOW',
				name: 'WOWswap',
				decimals: 18,
				address: '0x4da996c5fe84755c80e108cf96fe705174c5e36a',
				logoURI: 'https://tokens.1inch.io/0x4da996c5fe84755c80e108cf96fe705174c5e36a.png',
				tags: ['tokens']
			},
			{
				symbol: 'BSCPAD',
				name: 'BSCPAD.com',
				decimals: 18,
				address: '0x5a3010d4d8d3b5fb49f8b6e57fb9e48063f16700',
				logoURI: 'https://tokens.1inch.io/0x5a3010d4d8d3b5fb49f8b6e57fb9e48063f16700.png',
				tags: ['tokens']
			},
			{
				symbol: 'FUSII',
				name: 'Fusible | Fusible.io',
				decimals: 18,
				address: '0x3a50d6daacc82f17a2434184fe904fc45542a734',
				logoURI: 'https://tokens.1inch.io/0x4c924a1fe185c6c6f870bc6bf1762b832208d748.png',
				tags: ['tokens']
			},
			{
				symbol: 'bSRK',
				name: 'SparkPoint',
				decimals: 18,
				address: '0x14b1166ab53a237c8ceaee2bbc4bbca200cb7da8',
				logoURI: 'https://tokens.1inch.io/0x14b1166ab53a237c8ceaee2bbc4bbca200cb7da8.png',
				tags: ['tokens']
			},
			{
				symbol: 'COS',
				name: 'Contentos',
				decimals: 18,
				address: '0x96dd399f9c3afda1f194182f71600f1b65946501',
				logoURI: 'https://tokens.1inch.io/0x96dd399f9c3afda1f194182f71600f1b65946501.png',
				tags: ['tokens']
			},
			{
				symbol: 'ALPA',
				name: 'AlpaToken',
				decimals: 18,
				address: '0xc5e6689c9c8b02be7c49912ef19e79cf24977f03',
				logoURI: 'https://tokens.1inch.io/0xc5e6689c9c8b02be7c49912ef19e79cf24977f03.png',
				tags: ['tokens']
			},
			{
				symbol: 'JGN',
				name: 'Juggernaut DeFi',
				decimals: 18,
				address: '0xc13b7a43223bb9bf4b69bd68ab20ca1b79d81c75',
				logoURI: 'https://tokens.1inch.io/0xc13b7a43223bb9bf4b69bd68ab20ca1b79d81c75.png',
				tags: ['tokens']
			},
			{
				symbol: 'NMX',
				name: 'Nominex',
				decimals: 18,
				address: '0xd32d01a43c869edcd1117c640fbdcfcfd97d9d65',
				logoURI: 'https://tokens.1inch.io/0xd32d01a43c869edcd1117c640fbdcfcfd97d9d65.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'BTS',
				name: 'Bolt Share',
				decimals: 18,
				address: '0xc2e1acef50ae55661855e8dcb72adb182a3cc259',
				logoURI: 'https://tokens.1inch.io/0xc2e1acef50ae55661855e8dcb72adb182a3cc259.png',
				tags: ['tokens']
			},
			{
				symbol: 'MSC',
				name: 'Monster Slayer Cash',
				decimals: 18,
				address: '0x8c784c49097dcc637b93232e15810d53871992bf',
				logoURI: 'https://tokens.1inch.io/0x8c784c49097dcc637b93232e15810d53871992bf.png',
				tags: ['tokens']
			},
			{
				symbol: 'ALLOY',
				name: 'HyperAlloy',
				decimals: 18,
				address: '0x5ef5994fa33ff4eb6c82d51ee1dc145c546065bd',
				logoURI: 'https://tokens.1inch.io/0x5ef5994fa33ff4eb6c82d51ee1dc145c546065bd.png',
				tags: ['tokens']
			},
			{
				symbol: 'BR34P',
				name: 'BR34P',
				decimals: 8,
				address: '0xa86d305a36cdb815af991834b46ad3d7fbb38523',
				logoURI: 'https://tokens.1inch.io/0xa86d305a36cdb815af991834b46ad3d7fbb38523.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'TRDG',
				name: 'Tardigrades.Finance',
				decimals: 9,
				address: '0x92a42db88ed0f02c71d439e55962ca7cab0168b5',
				logoURI: 'https://tokens.1inch.io/0x92a42db88ed0f02c71d439e55962ca7cab0168b5.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'Ramen',
				name: 'Ramen Token',
				decimals: 18,
				address: '0x4f47a0d15c1e53f3d94c069c7d16977c29f9cb6b',
				logoURI: 'https://tokens.1inch.io/0x4f47a0d15c1e53f3d94c069c7d16977c29f9cb6b.png',
				tags: ['tokens']
			},
			{
				symbol: 'WATCH',
				name: 'yieldwatch',
				decimals: 18,
				address: '0x7a9f28eb62c791422aa23ceae1da9c847cbec9b0',
				logoURI: 'https://tokens.1inch.io/0x7a9f28eb62c791422aa23ceae1da9c847cbec9b0.png',
				tags: ['tokens']
			},
			{
				symbol: 'YVS',
				name: 'YVS.Finance on BSC',
				decimals: 18,
				address: '0x47c1c7b9d7941a7265d123dcfb100d8fb5348213',
				logoURI: 'https://tokens.1inch.io/0xec681f28f4561c2a9534799aa38e0d36a83cf478.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'START',
				name: 'BSCstarter',
				decimals: 18,
				address: '0x31d0a7ada4d4c131eb612db48861211f63e57610',
				logoURI: 'https://tokens.1inch.io/0x31d0a7ada4d4c131eb612db48861211f63e57610.png',
				tags: ['tokens']
			},
			{
				symbol: 'GMT_1',
				name: 'Gambit',
				decimals: 18,
				address: '0x99e92123eb77bc8f999316f622e5222498438784',
				logoURI: 'https://tokens.1inch.io/0x99e92123eb77bc8f999316f622e5222498438784.png',
				tags: ['tokens']
			},
			{
				symbol: 'GST',
				name: 'Gemstone Token',
				decimals: 18,
				address: '0x444a0e0c139cac67e8f9be945c6dfe01a2766ed1',
				logoURI: 'https://tokens.1inch.io/0x444a0e0c139cac67e8f9be945c6dfe01a2766ed1.png',
				tags: ['tokens']
			},
			{
				symbol: 'ZEFI',
				name: 'ZCore Finance',
				decimals: 18,
				address: '0x0288d3e353fe2299f11ea2c2e1696b4a648ecc07',
				logoURI: 'https://tokens.1inch.io/0x0288d3e353fe2299f11ea2c2e1696b4a648ecc07.png',
				tags: ['tokens']
			},
			{
				symbol: 'SHAKE',
				name: 'SHAKE token by SpaceSwap v2',
				decimals: 18,
				address: '0xba8a6ef5f15ed18e7184f44a775060a6bf91d8d0',
				logoURI: 'https://tokens.1inch.io/0x6006fc2a849fedaba8330ce36f5133de01f96189.png',
				tags: ['tokens']
			},
			{
				symbol: 'MILK2',
				name: 'MilkyWay Token by SpaceSwap v2',
				decimals: 18,
				address: '0x4a5a34212404f30c5ab7eb61b078fa4a55adc5a5',
				logoURI: 'https://tokens.1inch.io/0x80c8c3dcfb854f9542567c8dac3f44d709ebc1de.png',
				tags: ['tokens']
			},
			{
				symbol: 'DUSK',
				name: 'Dusk Network',
				decimals: 18,
				address: '0xb2bd0749dbe21f623d9baba856d3b0f0e1bfec9c',
				logoURI: 'https://tokens.1inch.io/0x940a2db1b7008b6c776d4faaca729d6d4a4aa551.png',
				tags: ['tokens']
			},
			{
				symbol: 'PEAK',
				name: 'PEAKDEFI',
				decimals: 8,
				address: '0x630d98424efe0ea27fb1b3ab7741907dffeaad78',
				logoURI: 'https://tokens.1inch.io/0x630d98424efe0ea27fb1b3ab7741907dffeaad78.png',
				tags: ['tokens']
			},
			{
				symbol: 'CCAKE',
				name: 'CheesecakeSwap Token',
				decimals: 18,
				address: '0xc7091aa18598b87588e37501b6ce865263cd67ce',
				logoURI: 'https://tokens.1inch.io/0xc7091aa18598b87588e37501b6ce865263cd67ce.png',
				tags: ['tokens']
			},
			{
				symbol: 'MCRN',
				name: 'MacaronSwap Token',
				decimals: 18,
				address: '0xacb2d47827c9813ae26de80965845d80935afd0b',
				logoURI: 'https://tokens.1inch.io/0xacb2d47827c9813ae26de80965845d80935afd0b.png',
				tags: ['tokens']
			},
			{
				symbol: 'TOOLS',
				name: 'TOOLS',
				decimals: 18,
				address: '0x1311b352467d2b5c296881badea82850bcd8f886',
				logoURI: 'https://tokens.1inch.io/0x1311b352467d2b5c296881badea82850bcd8f886.png',
				tags: ['tokens']
			},
			{
				symbol: 'yPANDA',
				name: 'YieldPanda.finance',
				decimals: 8,
				address: '0x9806aec346064183b5ce441313231dff89811f7a',
				logoURI: 'https://tokens.1inch.io/0x9806aec346064183b5ce441313231dff89811f7a.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'FAT',
				name: 'Fatfi Protocol',
				decimals: 18,
				address: '0x90e767a68a7d707b74d569c8e79f9bbb79b98a8b',
				logoURI: 'https://tokens.1inch.io/0x90e767a68a7d707b74d569c8e79f9bbb79b98a8b.png',
				tags: ['tokens']
			},
			{
				symbol: 'SAFESTAR',
				name: 'SafeStar',
				decimals: 9,
				address: '0x3c00f8fcc8791fa78daa4a480095ec7d475781e2',
				logoURI: 'https://tokens.1inch.io/0x3c00f8fcc8791fa78daa4a480095ec7d475781e2.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'DEXE',
				name: 'DeXe',
				decimals: 18,
				address: '0x039cb485212f996a9dbb85a9a75d898f94d38da6',
				logoURI: 'https://tokens.1inch.io/0x039cb485212f996a9dbb85a9a75d898f94d38da6.png',
				tags: ['tokens']
			},
			{
				symbol: 'BUX',
				name: 'BUX Token',
				decimals: 18,
				address: '0x211ffbe424b90e25a15531ca322adf1559779e45',
				logoURI: 'https://tokens.1inch.io/0x211ffbe424b90e25a15531ca322adf1559779e45.png',
				tags: ['tokens']
			},
			{
				symbol: 'XWIN',
				name: 'xWIN Token',
				decimals: 18,
				address: '0xd88ca08d8eec1e9e09562213ae83a7853ebb5d28',
				logoURI: 'https://tokens.1inch.io/0xd88ca08d8eec1e9e09562213ae83a7853ebb5d28.png',
				tags: ['tokens']
			},
			{
				symbol: 'TFF',
				name: 'Tutti Frutti',
				decimals: 18,
				address: '0x2d69c55baecefc6ec815239da0a985747b50db6e',
				logoURI: 'https://tokens.1inch.io/0x2d69c55baecefc6ec815239da0a985747b50db6e.png',
				tags: ['tokens']
			},
			{
				symbol: 'DFX',
				name: 'DeFireX on BSC',
				decimals: 18,
				address: '0x74b3abb94e9e1ecc25bd77d6872949b4a9b2aacf',
				logoURI: 'https://tokens.1inch.io/0x74b3abb94e9e1ecc25bd77d6872949b4a9b2aacf.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'FEB',
				name: 'FEB Token',
				decimals: 0,
				address: '0xa72a0564d0e887123112e6a4dc1aba7611ad861d',
				logoURI: 'https://tokens.1inch.io/0xa72a0564d0e887123112e6a4dc1aba7611ad861d.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'NVT',
				name: 'NerveNetwork',
				decimals: 8,
				address: '0xf0e406c49c63abf358030a299c0e00118c4c6ba5',
				logoURI: 'https://tokens.1inch.io/0xf0e406c49c63abf358030a299c0e00118c4c6ba5.png',
				tags: ['tokens']
			},
			{
				symbol: 'SFM',
				name: 'SafeMoon',
				decimals: 9,
				address: '0x42981d0bfbaf196529376ee702f2a9eb9092fcb5',
				logoURI: 'https://tokens.1inch.io/0x42981d0bfbaf196529376ee702f2a9eb9092fcb5.png',
				tags: ['tokens']
			},
			{
				symbol: 'WHIRL',
				name: 'Whirl Finance',
				decimals: 18,
				address: '0x7f479d78380ad00341fdd7322fe8aef766e29e5a',
				logoURI: 'https://tokens.1inch.io/0x7f479d78380ad00341fdd7322fe8aef766e29e5a.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'MSS',
				name: 'Monster Slayer Share',
				decimals: 18,
				address: '0xacabd3f9b8f76ffd2724604185fa5afa5df25ac6',
				logoURI: 'https://tokens.1inch.io/0xacabd3f9b8f76ffd2724604185fa5afa5df25ac6.png',
				tags: ['tokens']
			},
			{
				symbol: 'ARGON',
				name: 'ArgonToken',
				decimals: 18,
				address: '0x851f7a700c5d67db59612b871338a85526752c25',
				logoURI: 'https://tokens.1inch.io/0x851f7a700c5d67db59612b871338a85526752c25.png',
				tags: ['tokens']
			},
			{
				symbol: 'TPT',
				name: 'TokenPocket Token',
				decimals: 4,
				address: '0xeca41281c24451168a37211f0bc2b8645af45092',
				logoURI: 'https://tokens.1inch.io/0xeca41281c24451168a37211f0bc2b8645af45092.png',
				tags: ['tokens']
			},
			{
				symbol: 'pCWS',
				name: 'PolyCrowns',
				decimals: 18,
				address: '0xbcf39f0edda668c58371e519af37ca705f2bfcbd',
				logoURI: 'https://tokens.1inch.io/0xbcf39f0edda668c58371e519af37ca705f2bfcbd.png',
				tags: ['tokens']
			},
			{
				symbol: 'TRADE',
				name: 'UniTrade',
				decimals: 18,
				address: '0x7af173f350d916358af3e218bdf2178494beb748',
				logoURI: 'https://tokens.1inch.io/0x7af173f350d916358af3e218bdf2178494beb748.png',
				tags: ['tokens']
			},
			{
				symbol: 'POLAR',
				name: 'Polaris',
				decimals: 18,
				address: '0x3a5325f0e5ee4da06a285e988f052d4e45aa64b4',
				logoURI: 'https://tokens.1inch.io/0x1c545e9943cfd1b41e60a7917465911fa00fc28c.png',
				tags: ['tokens']
			},
			{
				symbol: 'BNSD',
				name: 'bns.finance',
				decimals: 18,
				address: '0xc1165227519ffd22fdc77ceb1037b9b284eef068',
				logoURI: 'https://tokens.1inch.io/0xc1165227519ffd22fdc77ceb1037b9b284eef068.png',
				tags: ['tokens']
			},
			{
				symbol: 'vBSWAP',
				name: 'vSWAP.fi',
				decimals: 18,
				address: '0x4f0ed527e8a95ecaa132af214dfd41f30b361600',
				logoURI: 'https://tokens.1inch.io/0x4f0ed527e8a95ecaa132af214dfd41f30b361600.png',
				tags: ['tokens']
			},
			{
				symbol: 'bDIGG',
				name: 'Badger Sett Digg',
				decimals: 18,
				address: '0x5986d5c77c65e5801a5caa4fae80089f870a71da',
				logoURI: 'https://tokens.1inch.io/0x5986d5c77c65e5801a5caa4fae80089f870a71da.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'IRON',
				name: 'IRON Stablecoin',
				decimals: 18,
				address: '0x7b65b489fe53fce1f6548db886c08ad73111ddd8',
				logoURI: 'https://tokens.1inch.io/0x7b65b489fe53fce1f6548db886c08ad73111ddd8.png',
				tags: ['tokens']
			},
			{
				symbol: 'SUPER',
				name: 'SUPER-ERC20',
				decimals: 18,
				address: '0x51ba0b044d96c3abfca52b64d733603ccc4f0d4d',
				logoURI: 'https://tokens.1inch.io/0x51ba0b044d96c3abfca52b64d733603ccc4f0d4d.png',
				tags: ['tokens']
			},
			{
				symbol: 'CYC',
				name: 'Cyclone Protocol',
				decimals: 18,
				address: '0x810ee35443639348adbbc467b33310d2ab43c168',
				logoURI: 'https://tokens.1inch.io/0x810ee35443639348adbbc467b33310d2ab43c168.png',
				tags: ['tokens']
			},
			{
				symbol: 'VANCAT',
				name: 'VANCAT Token',
				decimals: 0,
				address: '0x8597ba143ac509189e89aab3ba28d661a5dd9830',
				logoURI: 'https://tokens.1inch.io/0x8597ba143ac509189e89aab3ba28d661a5dd9830.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'SACT',
				name: 'srnArtGallery',
				decimals: 18,
				address: '0x1ba8c21c623c843cd4c60438d70e7ad50f363fbb',
				logoURI: 'https://tokens.1inch.io/0x1ba8c21c623c843cd4c60438d70e7ad50f363fbb.png',
				tags: ['tokens']
			},
			{
				symbol: 'NAUT',
				name: 'Astronaut',
				decimals: 8,
				address: '0x05b339b0a346bf01f851dde47a5d485c34fe220c',
				logoURI: 'https://tokens.1inch.io/0x05b339b0a346bf01f851dde47a5d485c34fe220c.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'TYPH',
				name: 'Typhoon',
				decimals: 18,
				address: '0x4090e535f2e251f5f88518998b18b54d26b3b07c',
				logoURI: 'https://tokens.1inch.io/0x4090e535f2e251f5f88518998b18b54d26b3b07c.png',
				tags: ['tokens']
			},
			{
				symbol: 'HOGL',
				name: 'HOGL Finance',
				decimals: 18,
				address: '0x182c763a4b2fbd18c9b5f2d18102a0ddd9d5df26',
				logoURI: 'https://tokens.1inch.io/0x182c763a4b2fbd18c9b5f2d18102a0ddd9d5df26.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'bBADGER',
				name: 'Badger Sett Badger',
				decimals: 18,
				address: '0x1f7216fdb338247512ec99715587bb97bbf96eae',
				logoURI: 'https://tokens.1inch.io/0x1f7216fdb338247512ec99715587bb97bbf96eae.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'bwJUP',
				name: 'BSC Wrapped Jupiter',
				decimals: 18,
				address: '0x0231f91e02debd20345ae8ab7d71a41f8e140ce7',
				logoURI: 'https://tokens.1inch.io/0x0231f91e02debd20345ae8ab7d71a41f8e140ce7.png',
				tags: ['tokens']
			},
			{
				symbol: 'EGLD',
				name: 'Elrond',
				decimals: 18,
				address: '0xbf7c81fff98bbe61b40ed186e4afd6ddd01337fe',
				logoURI: 'https://tokens.1inch.io/0xbf7c81fff98bbe61b40ed186e4afd6ddd01337fe.png',
				tags: ['tokens']
			},
			{
				symbol: 'TXL',
				name: 'Tixl Token',
				decimals: 18,
				address: '0x1ffd0b47127fdd4097e54521c9e2c7f0d66aafc5',
				logoURI: 'https://tokens.1inch.io/0x1ffd0b47127fdd4097e54521c9e2c7f0d66aafc5.png',
				tags: ['tokens']
			},
			{
				symbol: 'XBN',
				name: 'Elastic BNB',
				decimals: 18,
				address: '0x547cbe0f0c25085e7015aa6939b28402eb0ccdac',
				logoURI: 'https://tokens.1inch.io/0x547cbe0f0c25085e7015aa6939b28402eb0ccdac.png',
				tags: ['tokens', 'PEG:BNB']
			},
			{
				symbol: 'UNICORN',
				name: 'UNICORN Token',
				decimals: 18,
				address: '0xe3e1fabeabd48491bd6902b0c32fdeee8d2ff12b',
				logoURI: 'https://tokens.1inch.io/0xe3e1fabeabd48491bd6902b0c32fdeee8d2ff12b.png',
				tags: ['tokens']
			},
			{
				symbol: 'HPS',
				name: 'HappinessToken',
				decimals: 18,
				address: '0xeda21b525ac789eab1a08ef2404dd8505ffb973d',
				logoURI: 'https://tokens.1inch.io/0xeda21b525ac789eab1a08ef2404dd8505ffb973d.png',
				tags: ['tokens']
			},
			{
				symbol: 'ACSI',
				name: 'ACryptoS(I)',
				decimals: 18,
				address: '0x5b17b4d5e4009b5c43e3e3d63a5229f794cba389',
				logoURI: 'https://tokens.1inch.io/0x5b17b4d5e4009b5c43e3e3d63a5229f794cba389.png',
				tags: ['tokens']
			},
			{
				symbol: 'TLM',
				name: 'Alien Worlds Trilium',
				decimals: 4,
				address: '0x2222227e22102fe3322098e4cbfe18cfebd57c95',
				logoURI: 'https://tokens.1inch.io/0x2222227e22102fe3322098e4cbfe18cfebd57c95.png',
				tags: ['tokens']
			},
			{
				symbol: 'BONDLY',
				name: 'Bondly Token',
				decimals: 18,
				address: '0x5d0158a5c3ddf47d4ea4517d8db0d76aa2e87563',
				logoURI: 'https://tokens.1inch.io/0x5d0158a5c3ddf47d4ea4517d8db0d76aa2e87563.png',
				tags: ['tokens']
			},
			{
				symbol: 'CLIMB',
				name: 'Climb Token Finance',
				decimals: 8,
				address: '0x2a1d286ed5edad78befd6e0d8beb38791e8cd69d',
				logoURI: 'https://tokens.1inch.io/0x2a1d286ed5edad78befd6e0d8beb38791e8cd69d.png',
				tags: ['tokens']
			},
			{
				symbol: 'MBOX',
				name: 'Mobox',
				decimals: 18,
				address: '0x3203c9e46ca618c8c1ce5dc67e7e9d75f5da2377',
				logoURI: 'https://tokens.1inch.io/0x3203c9e46ca618c8c1ce5dc67e7e9d75f5da2377.png',
				tags: ['tokens']
			},
			{
				symbol: 'SWIRL',
				name: 'Swirl.Cash',
				decimals: 18,
				address: '0x52d86850bc8207b520340b7e39cdaf22561b9e56',
				logoURI: 'https://tokens.1inch.io/0x52d86850bc8207b520340b7e39cdaf22561b9e56.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'XSPACE',
				name: 'XSPACE',
				decimals: 9,
				address: '0xad90c05bc51672eedfee36e58b3ff1a78bbc146d',
				logoURI: 'https://tokens.1inch.io/0xad90c05bc51672eedfee36e58b3ff1a78bbc146d.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'COOK',
				name: 'Poly-Peg COOK',
				decimals: 18,
				address: '0x965b0df5bda0e7a0649324d78f03d5f7f2de086a',
				logoURI: 'https://tokens.1inch.io/0x965b0df5bda0e7a0649324d78f03d5f7f2de086a.png',
				tags: ['tokens']
			},
			{
				symbol: 'ITAM',
				name: 'ITAM',
				decimals: 18,
				address: '0x04c747b40be4d535fc83d09939fb0f626f32800b',
				logoURI: 'https://tokens.1inch.io/0x04c747b40be4d535fc83d09939fb0f626f32800b.png',
				tags: ['tokens']
			},
			{
				symbol: 'Warden',
				name: 'WardenSwap Token',
				decimals: 18,
				address: '0x0feadcc3824e7f3c12f40e324a60c23ca51627fc',
				logoURI: 'https://tokens.1inch.io/0x0feadcc3824e7f3c12f40e324a60c23ca51627fc.png',
				tags: ['tokens']
			},
			{
				symbol: 'TKO',
				name: 'Tokocrypto Token',
				decimals: 18,
				address: '0x9f589e3eabe42ebc94a44727b3f3531c0c877809',
				logoURI: 'https://tokens.1inch.io/0x9f589e3eabe42ebc94a44727b3f3531c0c877809.png',
				tags: ['tokens']
			},
			{
				symbol: 'SFUND',
				name: 'SeedifyFund',
				decimals: 18,
				address: '0x477bc8d23c634c154061869478bce96be6045d12',
				logoURI: 'https://tokens.1inch.io/0x477bc8d23c634c154061869478bce96be6045d12.png',
				tags: ['tokens']
			},
			{
				symbol: 'NFTL',
				name: 'NFTL Token',
				decimals: 18,
				address: '0x2f7b4c618dc8e0bba648e54cdadce3d8361f9816',
				logoURI: 'https://tokens.1inch.io/0x2f7b4c618dc8e0bba648e54cdadce3d8361f9816.png',
				tags: ['tokens']
			},
			{
				symbol: 'FUSE',
				name: 'Fuse Token on BSC',
				decimals: 18,
				address: '0x5857c96dae9cf8511b08cb07f85753c472d36ea3',
				logoURI: 'https://tokens.1inch.io/0x970b9bb2c0444f5e81e9d0efb84c8ccdcdcaf84d.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'FOX',
				name: 'Fox Finance',
				decimals: 9,
				address: '0xfad8e46123d7b4e77496491769c167ff894d2acb',
				logoURI: 'https://tokens.1inch.io/0xfad8e46123d7b4e77496491769c167ff894d2acb.png',
				tags: ['tokens']
			},
			{
				symbol: 'FREN',
				name: 'Frenchie',
				decimals: 18,
				address: '0x13958e1eb63dfb8540eaf6ed7dcbbc1a60fd52af',
				logoURI: 'https://tokens.1inch.io/0x13958e1eb63dfb8540eaf6ed7dcbbc1a60fd52af.png',
				tags: ['tokens']
			},
			{
				symbol: 'XED',
				name: 'Exeedme',
				decimals: 18,
				address: '0x5621b5a3f4a8008c4ccdd1b942b121c8b1944f1f',
				logoURI: 'https://tokens.1inch.io/0x5621b5a3f4a8008c4ccdd1b942b121c8b1944f1f.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'SOUL',
				name: 'APOyield SOULS',
				decimals: 8,
				address: '0x67d012f731c23f0313cea1186d0121779c77fcfe',
				logoURI: 'https://tokens.1inch.io/0x67d012f731c23f0313cea1186d0121779c77fcfe.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'SAFEGALAXY',
				name: 'SafeGalaxy',
				decimals: 9,
				address: '0x6b51231c43b1604815313801db5e9e614914d6e4',
				logoURI: 'https://tokens.1inch.io/0x6b51231c43b1604815313801db5e9e614914d6e4.png',
				tags: ['tokens']
			},
			{
				symbol: 'MRAT',
				name: 'Moon Rat Token',
				decimals: 9,
				address: '0x6d949f9297a522c0f97c232cc209a67bd7cfa471',
				logoURI: 'https://tokens.1inch.io/0x6d949f9297a522c0f97c232cc209a67bd7cfa471.png',
				tags: ['tokens']
			},
			{
				symbol: 'SAFEMARS',
				name: 'SafeMars',
				decimals: 9,
				address: '0x3ad9594151886ce8538c1ff615efa2385a8c3a88',
				logoURI: 'https://tokens.1inch.io/0x3ad9594151886ce8538c1ff615efa2385a8c3a88.png',
				tags: ['tokens']
			},
			{
				symbol: 'BGOV',
				name: 'BGOV Token',
				decimals: 18,
				address: '0xf8e026dc4c0860771f691ecffbbdfe2fa51c77cf',
				logoURI: 'https://tokens.1inch.io/0xf8e026dc4c0860771f691ecffbbdfe2fa51c77cf.png',
				tags: ['tokens']
			},
			{
				symbol: 'xMARK',
				name: 'Standard on xDai on BSC',
				decimals: 9,
				address: '0x26a5dfab467d4f58fb266648cae769503cec9580',
				logoURI: 'https://tokens.1inch.io/0x26a5dfab467d4f58fb266648cae769503cec9580.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'FSAFE',
				name: 'Fair Safe',
				decimals: 9,
				address: '0xee738a9e5fb78c24d26cecd30389ed977c38d0ca',
				logoURI: 'https://tokens.1inch.io/0xee738a9e5fb78c24d26cecd30389ed977c38d0ca.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'SAFEBTC',
				name: 'SafeBTC',
				decimals: 9,
				address: '0x380624a4a7e69db1ca07deecf764025fc224d056',
				logoURI: 'https://tokens.1inch.io/0x380624a4a7e69db1ca07deecf764025fc224d056.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'AQUAGOAT',
				name: 'Aquagoat',
				decimals: 9,
				address: '0x07af67b392b7a202fad8e0fbc64c34f33102165b',
				logoURI: 'https://tokens.1inch.io/0x07af67b392b7a202fad8e0fbc64c34f33102165b.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'PIG',
				name: 'Pig Token',
				decimals: 9,
				address: '0x8850d2c68c632e3b258e612abaa8fada7e6958e5',
				logoURI: 'https://tokens.1inch.io/0x8850d2c68c632e3b258e612abaa8fada7e6958e5.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'ECP',
				name: 'Eclipse',
				decimals: 9,
				address: '0x375483cfa7fc18f6b455e005d835a8335fbdbb1f',
				logoURI: 'https://tokens.1inch.io/0x375483cfa7fc18f6b455e005d835a8335fbdbb1f.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'MOONTOKEN',
				name: 'Moon Token',
				decimals: 18,
				address: '0x81e4d494b85a24a58a6ba45c9b418b32a4e039de',
				logoURI: 'https://tokens.1inch.io/0x81e4d494b85a24a58a6ba45c9b418b32a4e039de.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'ElonGate',
				name: 'ElonGate',
				decimals: 9,
				address: '0x2a9718deff471f3bb91fa0eceab14154f150a385',
				logoURI: 'https://tokens.1inch.io/0x2a9718deff471f3bb91fa0eceab14154f150a385.png',
				tags: ['tokens']
			},
			{
				symbol: 'PDO',
				name: 'pDollar',
				decimals: 18,
				address: '0x5bccfbd33873a5498f8406146868eddd5e998962',
				logoURI: 'https://tokens.1inch.io/0x5bccfbd33873a5498f8406146868eddd5e998962.png',
				tags: ['tokens']
			},
			{
				symbol: 'DFY',
				name: 'DeFi For You.',
				decimals: 18,
				address: '0xd98560689c6e748dc37bc410b4d3096b1aa3d8c2',
				logoURI: 'https://tokens.1inch.io/0xd98560689c6e748dc37bc410b4d3096b1aa3d8c2.png',
				tags: ['tokens']
			},
			{
				symbol: 'FOR',
				name: 'The Force Token',
				decimals: 18,
				address: '0x658a109c5900bc6d2357c87549b651670e5b0539',
				logoURI: 'https://tokens.1inch.io/0x658a109c5900bc6d2357c87549b651670e5b0539.png',
				tags: ['tokens']
			},
			{
				symbol: 'ZIL',
				name: 'Zilliqa',
				decimals: 12,
				address: '0xb86abcb37c3a4b64f74f59301aff131a1becc787',
				logoURI: 'https://tokens.1inch.io/0xb86abcb37c3a4b64f74f59301aff131a1becc787_1.png',
				tags: ['tokens']
			},
			{
				symbol: 'DDIM',
				name: 'DuckDaoDime',
				decimals: 18,
				address: '0xc9132c76060f6b319764ea075973a650a1a53bc9',
				logoURI: 'https://tokens.1inch.io/0xfbeea1c75e4c4465cb2fccc9c6d6afe984558e20.png',
				tags: ['tokens']
			},
			{
				symbol: 'MDA',
				name: 'Moeda Loyalty Points',
				decimals: 18,
				address: '0xd72aa9e1cddc2f6d6e0444580002170fba1f8eed',
				logoURI: 'https://tokens.1inch.io/0xd72aa9e1cddc2f6d6e0444580002170fba1f8eed.png',
				tags: ['tokens']
			},
			{
				symbol: 'OCTA',
				name: 'Octans',
				decimals: 9,
				address: '0x86c3e4ffacdb3af628ef985a518cd6ee22a22b28',
				logoURI: 'https://tokens.1inch.io/0x86c3e4ffacdb3af628ef985a518cd6ee22a22b28.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'SYL',
				name: 'SYL',
				decimals: 6,
				address: '0x7e52a123ed6db6ac872a875552935fbbd2544c86',
				logoURI: 'https://tokens.1inch.io/0x7e52a123ed6db6ac872a875552935fbbd2544c86.png',
				tags: ['tokens']
			},
			{
				symbol: 'NRV',
				name: 'Nerve',
				decimals: 18,
				address: '0x42f6f551ae042cbe50c739158b4f0cac0edb9096',
				logoURI: 'https://tokens.1inch.io/0x42f6f551ae042cbe50c739158b4f0cac0edb9096.png',
				tags: ['tokens']
			},
			{
				symbol: 'CRX',
				name: 'CryptEx Token',
				decimals: 18,
				address: '0x97a30c692ece9c317235d48287d23d358170fc40',
				logoURI: 'https://tokens.1inch.io/0x97a30c692ece9c317235d48287d23d358170fc40.png',
				tags: ['tokens']
			},
			{
				symbol: 'POLS',
				name: 'PolkastarterToken',
				decimals: 18,
				address: '0x7e624fa0e1c4abfd309cc15719b7e2580887f570',
				logoURI: 'https://tokens.1inch.io/0x7e624fa0e1c4abfd309cc15719b7e2580887f570.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'PET',
				name: 'Pet Token',
				decimals: 18,
				address: '0x4d4e595d643dc61ea7fcbf12e4b1aaa39f9975b8',
				logoURI: 'https://tokens.1inch.io/0x4d4e595d643dc61ea7fcbf12e4b1aaa39f9975b8.png',
				tags: ['tokens']
			},
			{
				symbol: 'ICE',
				name: 'IceToken',
				decimals: 18,
				address: '0xf16e81dce15b08f326220742020379b855b87df9',
				logoURI: 'https://tokens.1inch.io/0xf16e81dce15b08f326220742020379b855b87df9.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'XEND',
				name: 'XEND',
				decimals: 18,
				address: '0x4a080377f83d669d7bb83b3184a8a5e61b500608',
				logoURI: 'https://tokens.1inch.io/0x4a080377f83d669d7bb83b3184a8a5e61b500608.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'BSCS',
				name: 'BSCS Token',
				decimals: 18,
				address: '0xbcb24afb019be7e93ea9c43b7e22bb55d5b7f45d',
				logoURI: 'https://tokens.1inch.io/0xbcb24afb019be7e93ea9c43b7e22bb55d5b7f45d.png',
				tags: ['tokens']
			},
			{
				symbol: 'WENMOON',
				name: 'WenMoon Token',
				decimals: 7,
				address: '0xb93ba7dc61ecfced69067151fc00c41ca369a797',
				logoURI: 'https://tokens.1inch.io/0xb93ba7dc61ecfced69067151fc00c41ca369a797.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'MOD',
				name: 'Modefi',
				decimals: 18,
				address: '0xd4fbc57b6233f268e7fba3b66e62719d74deecbc',
				logoURI: 'https://tokens.1inch.io/0xd4fbc57b6233f268e7fba3b66e62719d74deecbc.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'FMT',
				name: 'Finminity',
				decimals: 18,
				address: '0x99c6e435ec259a7e8d65e1955c9423db624ba54c',
				logoURI: 'https://tokens.1inch.io/0x99c6e435ec259a7e8d65e1955c9423db624ba54c.png',
				tags: ['tokens']
			},
			{
				symbol: 'MOONMOON',
				name: 'MoonMoon',
				decimals: 9,
				address: '0x0e0e877894a101ad8711ae3a0194fa44ca837a79',
				logoURI: 'https://tokens.1inch.io/0x0e0e877894a101ad8711ae3a0194fa44ca837a79.png',
				tags: ['tokens']
			},
			{
				symbol: 'GEN',
				name: 'Gen Token',
				decimals: 18,
				address: '0xb0f2939a1c0e43683e5954c9fe142f7df9f8d967',
				logoURI: 'https://tokens.1inch.io/0xb0f2939a1c0e43683e5954c9fe142f7df9f8d967.png',
				tags: ['tokens']
			},
			{
				symbol: 'KEY',
				name: 'MoMo KEY',
				decimals: 18,
				address: '0x85c128ee1feeb39a59490c720a9c563554b51d33',
				logoURI: 'https://tokens.1inch.io/0x85c128ee1feeb39a59490c720a9c563554b51d33.png',
				tags: ['tokens']
			},
			{
				symbol: 'FINE',
				name: 'Refinable',
				decimals: 18,
				address: '0x4e6415a5727ea08aae4580057187923aec331227',
				logoURI: 'https://tokens.1inch.io/0x4e6415a5727ea08aae4580057187923aec331227.png',
				tags: ['tokens']
			},
			{
				symbol: 'MARSH',
				name: 'UnmarshalToken',
				decimals: 18,
				address: '0x2fa5daf6fe0708fbd63b1a7d1592577284f52256',
				logoURI: 'https://tokens.1inch.io/0x5a666c7d92e5fa7edcb6390e4efd6d0cdd69cf37.png',
				tags: ['tokens']
			},
			{
				symbol: 'WEX',
				name: 'WaultSwap',
				decimals: 18,
				address: '0xa9c41a46a6b3531d28d5c32f6633dd2ff05dfb90',
				logoURI: 'https://tokens.1inch.io/0xa9c41a46a6b3531d28d5c32f6633dd2ff05dfb90.png',
				tags: ['tokens']
			},
			{
				symbol: 'HAKKA',
				name: 'Hakka Finance on xDai on BSC',
				decimals: 18,
				address: '0x1d1eb8e8293222e1a29d2c0e4ce6c0acfd89aaac',
				logoURI: 'https://tokens.1inch.io/0x1d1eb8e8293222e1a29d2c0e4ce6c0acfd89aaac.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'RAMP',
				name: 'RAMP DEFI',
				decimals: 18,
				address: '0x8519ea49c997f50ceffa444d240fb655e89248aa',
				logoURI: 'https://tokens.1inch.io/0x8519ea49c997f50ceffa444d240fb655e89248aa.png',
				tags: ['tokens']
			},
			{
				symbol: 'SEA',
				name: 'Sea Token',
				decimals: 18,
				address: '0xfb52fc1f90dd2b070b9cf7ad68ac3d68905643fa',
				logoURI: 'https://tokens.1inch.io/0xfb52fc1f90dd2b070b9cf7ad68ac3d68905643fa.png',
				tags: ['tokens']
			},
			{
				symbol: 'CUB',
				name: 'Cub Finance',
				decimals: 18,
				address: '0x50d809c74e0b8e49e7b4c65bb3109abe3ff4c1c1',
				logoURI: 'https://tokens.1inch.io/0x50d809c74e0b8e49e7b4c65bb3109abe3ff4c1c1.png',
				tags: ['tokens']
			},
			{
				symbol: 'SAFESPACE',
				name: 'SAFESPACE',
				decimals: 9,
				address: '0xe1db3d1ee5cfe5c6333be96e6421f9bd5b85c987',
				logoURI: 'https://tokens.1inch.io/0xe1db3d1ee5cfe5c6333be96e6421f9bd5b85c987.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'MOONSTAR',
				name: 'MoonStar',
				decimals: 9,
				address: '0xce5814efff15d53efd8025b9f2006d4d7d640b9b',
				logoURI: 'https://tokens.1inch.io/0xce5814efff15d53efd8025b9f2006d4d7d640b9b.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'LUNAR',
				name: 'LunarHighway',
				decimals: 9,
				address: '0x4e8a9d0bf525d78fd9e0c88710099f227f6924cf',
				logoURI: 'https://tokens.1inch.io/0x4e8a9d0bf525d78fd9e0c88710099f227f6924cf.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'NFTART',
				name: 'NFTArt.Finance',
				decimals: 9,
				address: '0xf7844cb890f4c339c497aeab599abdc3c874b67a',
				logoURI: 'https://tokens.1inch.io/0xf7844cb890f4c339c497aeab599abdc3c874b67a.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'TUSD',
				name: 'TrueUSD',
				decimals: 18,
				address: '0x14016e85a25aeb13065688cafb43044c2ef86784',
				logoURI: 'https://tokens.1inch.io/0x0000000000085d4780b73119b644ae5ecd22b376.png',
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'bLEO',
				name: 'BEP20 LEO',
				decimals: 3,
				address: '0x6421531af54c7b14ea805719035ebf1e3661c44a',
				logoURI: 'https://tokens.1inch.io/0x6421531af54c7b14ea805719035ebf1e3661c44a.png',
				tags: ['tokens']
			},
			{
				symbol: 'UNIF',
				name: 'Unified',
				decimals: 9,
				address: '0xce5347fdd503f25f8428151a274544a5bd1bd8ca',
				logoURI: 'https://tokens.1inch.io/0xce5347fdd503f25f8428151a274544a5bd1bd8ca.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'BINGUS',
				name: 'Bingus Token',
				decimals: 9,
				address: '0xda20c8a5c3b1ab48e31ba6e43f0f2830e50218d8',
				logoURI: 'https://tokens.1inch.io/0xda20c8a5c3b1ab48e31ba6e43f0f2830e50218d8.png',
				tags: ['tokens']
			},
			{
				symbol: 'bROOBEE',
				name: 'ROOBEE',
				decimals: 18,
				address: '0xe64f5cb844946c1f102bd25bbd87a5ab4ae89fbe',
				logoURI: 'https://tokens.1inch.io/0xa31b1767e09f842ecfd4bc471fe44f830e3891aa.png',
				tags: ['tokens']
			},
			{
				symbol: '8PAY',
				name: '8PAY Network',
				decimals: 18,
				address: '0xfeea0bdd3d07eb6fe305938878c0cadbfa169042',
				logoURI: 'https://tokens.1inch.io/0xfeea0bdd3d07eb6fe305938878c0cadbfa169042.png',
				tags: ['tokens']
			},
			{
				symbol: 'CUMMIES',
				name: 'CumRocket',
				decimals: 18,
				address: '0x27ae27110350b98d564b9a3eed31baebc82d878d',
				logoURI: 'https://tokens.1inch.io/0x27ae27110350b98d564b9a3eed31baebc82d878d.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'LOT',
				name: 'Lottery Token',
				decimals: 9,
				address: '0x4e7ae924fd9a5d60b56be486b2900efe0c6a9ca7',
				logoURI: 'https://tokens.1inch.io/0x4e7ae924fd9a5d60b56be486b2900efe0c6a9ca7.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'POODL',
				name: 'Poodl',
				decimals: 9,
				address: '0x4a68c250486a116dc8d6a0c5b0677de07cc09c5d',
				logoURI: 'https://tokens.1inch.io/0x56a980328aee33aabb540a02e002c8323326bf36.png',
				tags: ['tokens']
			},
			{
				symbol: 'LAUNCH',
				name: 'Super Launcher',
				decimals: 18,
				address: '0xb5389a679151c4b8621b1098c6e0961a3cfee8d4',
				logoURI: 'https://tokens.1inch.io/0xb5389a679151c4b8621b1098c6e0961a3cfee8d4.png',
				tags: ['tokens']
			},
			{
				symbol: 'lowb',
				name: 'loser coin',
				decimals: 18,
				address: '0x843d4a358471547f51534e3e51fae91cb4dc3f28',
				logoURI: 'https://tokens.1inch.io/0x843d4a358471547f51534e3e51fae91cb4dc3f28.png',
				tags: ['tokens']
			},
			{
				symbol: 'KaiInu',
				name: 'Kai Inu',
				decimals: 9,
				address: '0xe5a09784b16e1065c37df14c6e2f06fdce317a1b',
				logoURI: 'https://tokens.1inch.io/0xe5a09784b16e1065c37df14c6e2f06fdce317a1b.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'DOGGY',
				name: 'DOGGY',
				decimals: 18,
				address: '0x74926b3d118a63f6958922d3dc05eb9c6e6e00c6',
				logoURI: 'https://tokens.1inch.io/0x74926b3d118a63f6958922d3dc05eb9c6e6e00c6.png',
				tags: ['tokens']
			},
			{
				symbol: 'UNCX',
				name: 'UniCrypt on xDai on BSC',
				decimals: 18,
				address: '0x09a6c44c3947b69e2b45f4d51b67e6a39acfb506',
				logoURI: 'https://tokens.1inch.io/0x09a6c44c3947b69e2b45f4d51b67e6a39acfb506.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'PERL',
				name: 'Perlin',
				decimals: 18,
				address: '0x0f9e4d49f25de22c2202af916b681fbb3790497b',
				logoURI: 'https://tokens.1inch.io/0x0f9e4d49f25de22c2202af916b681fbb3790497b.png',
				tags: ['tokens']
			},
			{
				symbol: 'OM',
				name: 'MANTRA DAO',
				decimals: 18,
				address: '0xf78d2e7936f5fe18308a3b2951a93b6c4a41f5e2',
				logoURI: 'https://tokens.1inch.io/0xf78d2e7936f5fe18308a3b2951a93b6c4a41f5e2.png',
				tags: ['tokens']
			},
			{
				symbol: 'XTZ',
				name: 'Tezos Token',
				decimals: 18,
				address: '0x16939ef78684453bfdfb47825f8a5f714f12623a',
				logoURI: 'https://tokens.1inch.io/0x16939ef78684453bfdfb47825f8a5f714f12623a.png',
				tags: ['tokens']
			},
			{
				symbol: 'PORN',
				name: 'Porn',
				decimals: 9,
				address: '0x31b9773f225408129a90788ef013bd449e283865',
				logoURI: 'https://tokens.1inch.io/0x31b9773f225408129a90788ef013bd449e283865.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'MTDR',
				name: 'Matador Token',
				decimals: 18,
				address: '0x994517e000aa3f117e7ad61b0e2336c76b4fd94a',
				logoURI: 'https://tokens.1inch.io/0x994517e000aa3f117e7ad61b0e2336c76b4fd94a.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'PEKC',
				name: 'PEACOCKCOIN',
				decimals: 9,
				address: '0x050787de0cf5da03d9387b344334d51cae5dd0fd',
				logoURI: 'https://tokens.1inch.io/0x050787de0cf5da03d9387b344334d51cae5dd0fd.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'WOO',
				name: 'Wootrade Network',
				decimals: 18,
				address: '0x4691937a7508860f876c9c0a2a617e7d9e945d4b',
				logoURI: 'https://tokens.1inch.io/0x4691937a7508860f876c9c0a2a617e7d9e945d4b.png',
				tags: ['tokens']
			},
			{
				symbol: 'PACOCA',
				name: 'Pacoca',
				decimals: 18,
				address: '0x55671114d774ee99d653d6c12460c780a67f1d18',
				logoURI: 'https://tokens.1inch.io/0x55671114d774ee99d653d6c12460c780a67f1d18.png',
				tags: ['tokens']
			},
			{
				symbol: 'PAPR',
				name: 'PAPR',
				decimals: 18,
				address: '0x246475df8703be0c2ba2f8d0fb7248d95cc1ba26',
				logoURI: 'https://tokens.1inch.io/0x246475df8703be0c2ba2f8d0fb7248d95cc1ba26.png',
				tags: ['tokens']
			},
			{
				symbol: 'PRNTR',
				name: 'PRNTR',
				decimals: 18,
				address: '0x016c8da9d916905a00ef26a2e7dc2ee67b6020cf',
				logoURI: 'https://tokens.1inch.io/0x016c8da9d916905a00ef26a2e7dc2ee67b6020cf.png',
				tags: ['tokens']
			},
			{
				symbol: 'MOONRISE',
				name: 'MoonRise',
				decimals: 9,
				address: '0x7ee7f14427cc41d6db17829eb57dc74a26796b9d',
				logoURI: 'https://tokens.1inch.io/0x7ee7f14427cc41d6db17829eb57dc74a26796b9d.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'WSPP',
				name: 'WolfSafePoorPeople',
				decimals: 0,
				address: '0x46d502fac9aea7c5bc7b13c8ec9d02378c33d36f',
				logoURI: 'https://tokens.1inch.io/0x46d502fac9aea7c5bc7b13c8ec9d02378c33d36f.png',
				tags: ['tokens']
			},
			{
				symbol: 'UNFI',
				name: 'UNFI',
				decimals: 18,
				address: '0x728c5bac3c3e370e372fc4671f9ef6916b814d8b',
				logoURI: 'https://tokens.1inch.io/0x728c5bac3c3e370e372fc4671f9ef6916b814d8b.png',
				tags: ['tokens']
			},
			{
				symbol: 'TFT',
				name: 'TFT on BSC',
				decimals: 7,
				address: '0x8f0fb159380176d324542b3a7933f0c2fd0c2bbf',
				logoURI: 'https://tokens.1inch.io/0x8f0fb159380176d324542b3a7933f0c2fd0c2bbf.png',
				tags: ['tokens']
			},
			{
				symbol: 'POTS',
				name: 'Moonpot',
				decimals: 18,
				address: '0x3fcca8648651e5b974dd6d3e50f61567779772a8',
				logoURI: 'https://tokens.1inch.io/0x3fcca8648651e5b974dd6d3e50f61567779772a8.png',
				tags: ['tokens']
			},
			{
				symbol: 'GNT',
				name: 'GreenTrust',
				decimals: 18,
				address: '0xf750a26eb0acf95556e8529e72ed530f3b60f348',
				logoURI: 'https://tokens.1inch.io/0xf750a26eb0acf95556e8529e72ed530f3b60f348.png',
				tags: ['tokens']
			},
			{
				symbol: 'LAND',
				name: 'Landshare Token',
				decimals: 18,
				address: '0x9d986a3f147212327dd658f712d5264a73a1fdb0',
				logoURI: 'https://tokens.1inch.io/0x9d986a3f147212327dd658f712d5264a73a1fdb0.png',
				tags: ['tokens']
			},
			{
				symbol: 'DARA',
				name: 'Immutable',
				decimals: 18,
				address: '0x0255af6c9f86f6b0543357bacefa262a2664f80f',
				logoURI: 'https://tokens.1inch.io/0x0255af6c9f86f6b0543357bacefa262a2664f80f.png',
				tags: ['tokens']
			},
			{
				symbol: 'SAFUYIELD',
				name: 'SafuYield Protocol',
				decimals: 9,
				address: '0xc74cd0042c837ce59210857504ebb0859e06aa22',
				logoURI: 'https://tokens.1inch.io/0xc74cd0042c837ce59210857504ebb0859e06aa22.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'FEED',
				name: 'Feeder.finance',
				decimals: 18,
				address: '0x67d66e8ec1fd25d98b3ccd3b19b7dc4b4b7fc493',
				logoURI: 'https://tokens.1inch.io/0x67d66e8ec1fd25d98b3ccd3b19b7dc4b4b7fc493.png',
				tags: ['tokens']
			},
			{
				symbol: 'DND',
				name: 'DungeonSwap Token',
				decimals: 18,
				address: '0x14c358b573a4ce45364a3dbd84bbb4dae87af034',
				logoURI: 'https://tokens.1inch.io/0x14c358b573a4ce45364a3dbd84bbb4dae87af034.png',
				tags: ['tokens']
			},
			{
				symbol: 'wBAN',
				name: 'Wrapped Banano',
				decimals: 18,
				address: '0xe20b9e246db5a0d21bf9209e4858bc9a3ff7a034',
				logoURI: 'https://tokens.1inch.io/0xe20b9e246db5a0d21bf9209e4858bc9a3ff7a034.png',
				tags: ['tokens'],
				eip2612: true
			},
			{
				symbol: 'KNC',
				name: 'Kyber Network Crystal',
				decimals: 18,
				address: '0xfe56d5892bdffc7bf58f2e84be1b2c32d21c308b',
				logoURI: 'https://tokens.1inch.io/0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202.png',
				tags: ['tokens']
			},
			{
				symbol: 'BSW',
				name: 'Biswap',
				decimals: 18,
				address: '0x965f527d9159dce6288a2219db51fc6eef120dd1',
				logoURI: 'https://tokens.1inch.io/0x965f527d9159dce6288a2219db51fc6eef120dd1.png',
				tags: ['tokens']
			},
			{
				symbol: 'BFG',
				name: 'BFG Token',
				decimals: 18,
				address: '0xbb46693ebbea1ac2070e59b4d043b47e2e095f86',
				logoURI: 'https://tokens.1inch.io/0xbb46693ebbea1ac2070e59b4d043b47e2e095f86_1.png',
				tags: ['tokens']
			},
			{
				symbol: 'ARV',
				name: 'ARIVA',
				decimals: 8,
				address: '0x6679eb24f59dfe111864aec72b443d1da666b360',
				logoURI: 'https://tokens.1inch.io/0x6679eb24f59dfe111864aec72b443d1da666b360.png',
				tags: ['tokens']
			},
			{
				symbol: 'xYSL',
				name: 'xYSL token',
				decimals: 18,
				address: '0x0047a0deadafb7ee6b1a0d219e70fb6767057d93',
				logoURI: 'https://tokens.1inch.io/0x0047a0deadafb7ee6b1a0d219e70fb6767057d93.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'QA',
				name: 'Quantum Assets Token',
				decimals: 18,
				address: '0x4ef29f3b804c316ba8ba464a765c601fc092a2e9',
				logoURI: 'https://tokens.1inch.io/0x4ef29f3b804c316ba8ba464a765c601fc092a2e9.png',
				tags: ['tokens']
			},
			{
				symbol: 'SWAP',
				name: 'SafeSwap Token',
				decimals: 18,
				address: '0xe56a473043eaab7947c0a2408cea623074500ee3',
				logoURI: 'https://tokens.1inch.io/0xe56a473043eaab7947c0a2408cea623074500ee3.png',
				tags: ['tokens']
			},
			{
				symbol: 'OKBOOMER',
				name: 'OKBoomer',
				decimals: 9,
				address: '0xe9db02a654b74ca04734b26ef3b2a79808d43404',
				logoURI: 'https://tokens.1inch.io/0xe9db02a654b74ca04734b26ef3b2a79808d43404.png',
				tags: ['tokens']
			},
			{
				symbol: 'PETN',
				name: 'Pylon Eco Token',
				decimals: 18,
				address: '0x57457b5d725d85a70a3625d6a71818304e773618',
				logoURI: 'https://tokens.1inch.io/0x57457b5d725d85a70a3625d6a71818304e773618.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'SUSHIBA',
				name: 'Sushiba',
				decimals: 9,
				address: '0xa96658cd0d04a8fdcdc30d1156cc65bbfc7591ed',
				logoURI: 'https://tokens.1inch.io/0xa96658cd0d04a8fdcdc30d1156cc65bbfc7591ed.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'BPAY',
				name: 'BNBPay',
				decimals: 9,
				address: '0xebc76079da0c245fae7225b58a57a54809b40618',
				logoURI: 'https://tokens.1inch.io/0xebc76079da0c245fae7225b58a57a54809b40618.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'TSUGA',
				name: 'Tsukiverse: Galactic Adventures',
				decimals: 18,
				address: '0x58d372a8db7696c0c066f25c9eaf2af6f147b726',
				logoURI: 'https://tokens.1inch.io/0x58d372a8db7696c0c066f25c9eaf2af6f147b726.png',
				tags: ['tokens']
			},
			{
				symbol: 'ROOM',
				name: 'OptionRoom Token',
				decimals: 18,
				address: '0x3c45a24d36ab6fc1925533c1f57bc7e1b6fba8a4',
				logoURI: 'https://tokens.1inch.io/0x3c45a24d36ab6fc1925533c1f57bc7e1b6fba8a4.png',
				tags: ['tokens']
			},
			{
				symbol: 'TCUB',
				name: 'TCUB www.tiger-king.org',
				decimals: 9,
				address: '0xb7fda7374362f66a50665b991aa7ee77b2c6abbe',
				logoURI: 'https://tokens.1inch.io/0xb7fda7374362f66a50665b991aa7ee77b2c6abbe.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'CGU',
				name: 'Crypto Gaming United',
				decimals: 8,
				address: '0x747d74db20cc422f39ab54edb2a3ce21f3c98af1',
				logoURI: 'https://tokens.1inch.io/0x747d74db20cc422f39ab54edb2a3ce21f3c98af1.png',
				tags: ['tokens']
			},
			{
				symbol: 'PIT',
				name: 'Pitbull',
				decimals: 9,
				address: '0xa57ac35ce91ee92caefaa8dc04140c8e232c2e50',
				logoURI: 'https://tokens.1inch.io/0xa57ac35ce91ee92caefaa8dc04140c8e232c2e50.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'ROCK',
				name: 'Bedrock',
				decimals: 18,
				address: '0xc3387e4285e9f80a7cfdf02b4ac6cdf2476a528a',
				logoURI: 'https://tokens.1inch.io/0xc3387e4285e9f80a7cfdf02b4ac6cdf2476a528a.png',
				tags: ['tokens']
			},
			{
				symbol: '$RFG',
				name: 'Refugees Token',
				decimals: 9,
				address: '0x4477b28e8b797ebaebd2539bb24290fdfcc27807',
				logoURI: 'https://tokens.1inch.io/0x4477b28e8b797ebaebd2539bb24290fdfcc27807.png',
				tags: ['tokens']
			},
			{
				symbol: 'DRIVENx',
				name: 'DVX',
				decimals: 18,
				address: '0x6db3972c6a5535708e7a4f7ad52f24d178d9a93e',
				logoURI: 'https://tokens.1inch.io/0x6db3972c6a5535708e7a4f7ad52f24d178d9a93e.png',
				tags: ['tokens']
			},
			{
				symbol: 'CZF',
				name: 'CZFarm',
				decimals: 18,
				address: '0x7c1608c004f20c3520f70b924e2bfef092da0043',
				logoURI: 'https://tokens.1inch.io/0x7c1608c004f20c3520f70b924e2bfef092da0043.png',
				tags: ['tokens']
			},
			{
				symbol: 'HOKK',
				name: 'Hokkaido Inu',
				decimals: 18,
				address: '0xe87e15b9c7d989474cb6d8c56b3db4efad5b21e8',
				logoURI: 'https://tokens.1inch.io/0xe87e15b9c7d989474cb6d8c56b3db4efad5b21e8.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'ccCLO',
				name: 'Callisto Network Token',
				decimals: 18,
				address: '0xccbf1c9e8b4f2cdf3bfba1098b8f56f97d219d53',
				logoURI: 'https://tokens.1inch.io/0xccbf1c9e8b4f2cdf3bfba1098b8f56f97d219d53_2.png',
				tags: ['tokens']
			},
			{
				symbol: 'RVL',
				name: 'Revolotto',
				decimals: 18,
				address: '0x6dc3d0d6ec970bf5522611d8eff127145d02b675',
				logoURI: 'https://tokens.1inch.io/0x6dc3d0d6ec970bf5522611d8eff127145d02b675.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'SQUID',
				name: 'SQUID',
				decimals: 9,
				address: '0x1c3c3941acb8a9be35e50f086fae6a481f7d9df7',
				logoURI: 'https://tokens.1inch.io/0x1c3c3941acb8a9be35e50f086fae6a481f7d9df7.png',
				tags: ['tokens']
			},
			{
				symbol: 'PFY',
				name: 'Portify',
				decimals: 9,
				address: '0x69083b64988933e8b4783e8302b9bbf90163280e',
				logoURI: 'https://tokens.1inch.io/0x69083b64988933e8b4783e8302b9bbf90163280e.png',
				tags: ['tokens']
			},
			{
				symbol: 'CMERGE',
				name: 'Coin Merge',
				decimals: 9,
				address: '0x8d3e3a57c5f140b5f9feb0d43d37a347ee01c851',
				logoURI: 'https://tokens.1inch.io/0x8d3e3a57c5f140b5f9feb0d43d37a347ee01c851.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'PURSE',
				name: 'PURSE TOKEN',
				decimals: 18,
				address: '0x29a63f4b209c29b4dc47f06ffa896f32667dad2c',
				logoURI: 'https://tokens.1inch.io/0x29a63f4b209c29b4dc47f06ffa896f32667dad2c.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'ATL',
				name: 'Atlantis',
				decimals: 18,
				address: '0x1fd991fb6c3102873ba68a4e6e6a87b3a5c10271',
				logoURI: 'https://tokens.1inch.io/0x1fd991fb6c3102873ba68a4e6e6a87b3a5c10271.png',
				tags: ['tokens']
			},
			{
				symbol: 'POR',
				name: 'Portuma',
				decimals: 18,
				address: '0x9000cac49c3841926baac5b2e13c87d43e51b6a4',
				logoURI: 'https://tokens.1inch.io/0x9000cac49c3841926baac5b2e13c87d43e51b6a4.png',
				tags: ['tokens']
			},
			{
				symbol: 'AIRT',
				name: 'AirNFT Token',
				decimals: 18,
				address: '0x016cf83732f1468150d87dcc5bdf67730b3934d3',
				logoURI: 'https://tokens.1inch.io/0x016cf83732f1468150d87dcc5bdf67730b3934d3.png',
				tags: ['tokens']
			},
			{
				symbol: 'BORING',
				name: 'BoringDAO',
				decimals: 18,
				address: '0xffeecbf8d7267757c2dc3d13d730e97e15bfdf7f',
				logoURI: 'https://tokens.1inch.io/0xffeecbf8d7267757c2dc3d13d730e97e15bfdf7f.png',
				tags: ['tokens']
			},
			{
				symbol: 'KTY',
				name: 'Krypto Kitty',
				decimals: 9,
				address: '0x86296279c147bd40cbe5b353f83cea9e9cc9b7bb',
				logoURI: 'https://tokens.1inch.io/0x86296279c147bd40cbe5b353f83cea9e9cc9b7bb.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'SA',
				name: 'Superalgos',
				decimals: 18,
				address: '0xfb981ed9a92377ca4d75d924b9ca06df163924fd',
				logoURI: 'https://tokens.1inch.io/0xfb981ed9a92377ca4d75d924b9ca06df163924fd.png',
				tags: ['tokens']
			},
			{
				symbol: 'RBX',
				name: 'RBX',
				decimals: 18,
				address: '0xace3574b8b054e074473a9bd002e5dc6dd3dff1b',
				logoURI: 'https://tokens.1inch.io/0xace3574b8b054e074473a9bd002e5dc6dd3dff1b.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'INCOME',
				name: 'Income',
				decimals: 18,
				address: '0xdfcf44e9a6d99717fc04addd57fb667286bb7dc0',
				logoURI: 'https://tokens.1inch.io/0xdfcf44e9a6d99717fc04addd57fb667286bb7dc0.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'PULI',
				name: 'PULI INU',
				decimals: 9,
				address: '0xaef0a177c8c329cbc8508292bb7e06c00786bbfc',
				logoURI: 'https://tokens.1inch.io/0xaef0a177c8c329cbc8508292bb7e06c00786bbfc.png',
				tags: ['tokens']
			},
			{
				symbol: 'FLOKI',
				name: 'FLOKI',
				decimals: 9,
				address: '0xfb5b838b6cfeedc2873ab27866079ac55363d37e',
				logoURI: 'https://tokens.1inch.io/0xfb5b838b6cfeedc2873ab27866079ac55363d37e_1.png',
				tags: ['tokens']
			},
			{
				symbol: 'BSHARE',
				name: 'BSHARE',
				decimals: 18,
				address: '0x531780face85306877d7e1f05d713d1b50a37f7a',
				logoURI: 'https://tokens.1inch.io/0x531780face85306877d7e1f05d713d1b50a37f7a.png',
				tags: ['tokens']
			},
			{
				symbol: 'BOMB',
				name: 'bomb.money',
				decimals: 18,
				address: '0x522348779dcb2911539e76a1042aa922f9c47ee3',
				logoURI: 'https://tokens.1inch.io/0x522348779dcb2911539e76a1042aa922f9c47ee3.png',
				tags: ['tokens']
			},
			{
				symbol: 'RVZ',
				name: 'Revoluzion',
				decimals: 9,
				address: '0x7d89c67d3c4e72e8c5c64be201dc225f99d16aca',
				logoURI: 'https://tokens.1inch.io/0x7d89c67d3c4e72e8c5c64be201dc225f99d16aca.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'DOME',
				name: 'Everdome',
				decimals: 18,
				address: '0x475bfaa1848591ae0e6ab69600f48d828f61a80e',
				logoURI: 'https://tokens.1inch.io/0x475bfaa1848591ae0e6ab69600f48d828f61a80e.png',
				tags: ['tokens']
			},
			{
				symbol: 'BBS',
				name: 'BBS [via ChainPort.io]',
				decimals: 18,
				address: '0xa477a79a118a84a0d371a53c8f46f8ce883ec1dd',
				logoURI: 'https://tokens.1inch.io/0xa477a79a118a84a0d371a53c8f46f8ce883ec1dd.png',
				tags: ['tokens']
			},
			{
				symbol: 'deUSDC',
				name: 'deBridge USD Coin',
				decimals: 6,
				address: '0x1ddcaa4ed761428ae348befc6718bcb12e63bfaa',
				logoURI: 'https://tokens.1inch.io/0x1ddcaa4ed761428ae348befc6718bcb12e63bfaa_2.png',
				tags: ['tokens', 'PEG:USD'],
				eip2612: true
			},
			{
				symbol: 'ACCEL',
				name: 'ACCEL',
				decimals: 18,
				address: '0x2cace984dab08bd192a7fd044276060cb955dd9c',
				logoURI: 'https://tokens.1inch.io/0x2cace984dab08bd192a7fd044276060cb955dd9c.png',
				tags: ['tokens']
			},
			{
				symbol: 'FRAX',
				name: 'Frax',
				decimals: 18,
				address: '0x90c97f71e18723b0cf0dfa30ee176ab653e89f40',
				logoURI: 'https://tokens.1inch.io/0x90c97f71e18723b0cf0dfa30ee176ab653e89f40.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'SHIELD',
				name: 'Shield Protocol',
				decimals: 18,
				address: '0x00f97c17f4dc4f3bfd2dd9ce5e67f3a339a8a261',
				logoURI: 'https://tokens.1inch.io/0x00f97c17f4dc4f3bfd2dd9ce5e67f3a339a8a261.png',
				tags: ['tokens']
			},
			{
				symbol: 'VINU',
				name: 'Vita Inu',
				decimals: 18,
				address: '0xfebe8c1ed424dbf688551d4e2267e7a53698f0aa',
				logoURI: 'https://tokens.1inch.io/0xfebe8c1ed424dbf688551d4e2267e7a53698f0aa.png',
				tags: ['tokens']
			},
			{
				symbol: 'MLT',
				name: 'Media Licensing Token',
				decimals: 18,
				address: '0x4518231a8fdf6ac553b9bbd51bbb86825b583263',
				logoURI: 'https://tokens.1inch.io/0x4518231a8fdf6ac553b9bbd51bbb86825b583263.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'ORE',
				name: 'pTokens ORE [via ChainPort.io]',
				decimals: 18,
				address: '0x4ef285c8cbe52267c022c39da98b97ca4b7e2ff9',
				logoURI: 'https://tokens.1inch.io/0x4ef285c8cbe52267c022c39da98b97ca4b7e2ff9.png',
				tags: ['tokens']
			},
			{
				symbol: 'SpacePi',
				name: 'SpacePi Token',
				decimals: 9,
				address: '0x69b14e8d3cebfdd8196bfe530954a0c226e5008e',
				logoURI: 'https://tokens.1inch.io/0x69b14e8d3cebfdd8196bfe530954a0c226e5008e.png',
				tags: ['tokens']
			},
			{
				symbol: 'ASIA',
				name: 'ASIA COIN',
				decimals: 18,
				address: '0xebaffc2d2ea7c66fb848c48124b753f93a0a90ec',
				logoURI: 'https://tokens.1inch.io/0xebaffc2d2ea7c66fb848c48124b753f93a0a90ec.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'MAIN',
				name: 'MAIN',
				decimals: 18,
				address: '0xa5f249f401ba8931899a364d8e2699b5fa1d87a9',
				logoURI: 'https://tokens.1inch.io/0xa5f249f401ba8931899a364d8e2699b5fa1d87a9_1.png',
				tags: ['tokens']
			},
			{
				symbol: 'STARSHIP',
				name: 'StarShip',
				decimals: 9,
				address: '0x52419258e3fa44deac7e670eadd4c892b480a805',
				logoURI: 'https://tokens.1inch.io/0x52419258e3fa44deac7e670eadd4c892b480a805.png',
				tags: ['tokens']
			},
			{
				symbol: 'TOWER',
				name: 'TOWER',
				decimals: 18,
				address: '0xe7c9c6bc87b86f9e5b57072f907ee6460b593924',
				logoURI: 'https://tokens.1inch.io/0xe7c9c6bc87b86f9e5b57072f907ee6460b593924.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'LGX',
				name: 'Legion Token',
				decimals: 18,
				address: '0x9096b4309224d751fcb43d7eb178dcffc122ad15',
				logoURI: 'https://tokens.1inch.io/0x9096b4309224d751fcb43d7eb178dcffc122ad15.png',
				tags: ['tokens']
			},
			{
				symbol: 'WWY',
				name: 'WeWay Token',
				decimals: 18,
				address: '0x9ab70e92319f0b9127df78868fd3655fb9f1e322',
				logoURI: 'https://tokens.1inch.io/0x9ab70e92319f0b9127df78868fd3655fb9f1e322.png',
				tags: ['tokens']
			},
			{
				symbol: 'DERC',
				name: 'DeRace Token',
				decimals: 18,
				address: '0x373e768f79c820aa441540d254dca6d045c6d25b',
				logoURI: 'https://tokens.1inch.io/0x373e768f79c820aa441540d254dca6d045c6d25b.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'STACK',
				name: 'StackOS',
				decimals: 18,
				address: '0x6855f7bb6287f94ddcc8915e37e73a3c9fee5cf3',
				logoURI: 'https://tokens.1inch.io/0x6855f7bb6287f94ddcc8915e37e73a3c9fee5cf3.png',
				tags: ['tokens']
			},
			{
				symbol: 'GMT',
				name: 'Green Metaverse Token',
				decimals: 8,
				address: '0x3019bf2a2ef8040c242c9a4c5c4bd4c81678b2a1',
				logoURI: 'https://tokens.1inch.io/0x3019bf2a2ef8040c242c9a4c5c4bd4c81678b2a1_1.png',
				tags: ['tokens']
			},
			{
				symbol: 'TRY',
				name: 'TryHards',
				decimals: 18,
				address: '0x75d107de2217ffe2cd574a1b3297c70c8fafd159',
				logoURI: 'https://tokens.1inch.io/0x75d107de2217ffe2cd574a1b3297c70c8fafd159.png',
				tags: ['tokens']
			},
			{
				symbol: 'GAIA',
				name: 'GAIA Everworld',
				decimals: 18,
				address: '0x347e430b7cd1235e216be58ffa13394e5009e6e2',
				logoURI: 'https://tokens.1inch.io/0x347e430b7cd1235e216be58ffa13394e5009e6e2.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'VLX',
				name: 'Velas',
				decimals: 18,
				address: '0xe9c803f48dffe50180bd5b01dc04da939e3445fc',
				logoURI: 'https://tokens.1inch.io/0xe9c803f48dffe50180bd5b01dc04da939e3445fc.png',
				tags: ['tokens']
			},
			{
				symbol: 'FRM',
				name: 'Ferrum Network Token',
				decimals: 18,
				address: '0xa719b8ab7ea7af0ddb4358719a34631bb79d15dc',
				logoURI: 'https://tokens.1inch.io/0xa719b8ab7ea7af0ddb4358719a34631bb79d15dc.png',
				tags: ['tokens']
			},
			{
				symbol: 'REVV',
				name: 'REVV',
				decimals: 18,
				address: '0x833f307ac507d47309fd8cdd1f835bef8d702a93',
				logoURI: 'https://tokens.1inch.io/0x833f307ac507d47309fd8cdd1f835bef8d702a93.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'BCMC',
				name: 'Blockchain Monster Coin',
				decimals: 18,
				address: '0xc10358f062663448a3489fc258139944534592ac',
				logoURI: 'https://tokens.1inch.io/0xc10358f062663448a3489fc258139944534592ac.png',
				tags: ['tokens'],
				eip2612: true
			},
			{
				symbol: 'GMEE',
				name: 'GAMEE',
				decimals: 18,
				address: '0x84e9a6f9d240fdd33801f7135908bfa16866939a',
				logoURI: 'https://tokens.1inch.io/0x84e9a6f9d240fdd33801f7135908bfa16866939a.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'ELK',
				name: 'Elk',
				decimals: 18,
				address: '0xeeeeeb57642040be42185f49c52f7e9b38f8eeee',
				logoURI: 'https://tokens.1inch.io/0xeeeeeb57642040be42185f49c52f7e9b38f8eeee.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'MOWA',
				name: 'Moniwar',
				decimals: 18,
				address: '0x411ec510c85c9e56271bf4e10364ffa909e685d9',
				logoURI: 'https://tokens.1inch.io/0x411ec510c85c9e56271bf4e10364ffa909e685d9.png',
				tags: ['tokens']
			},
			{
				symbol: 'YEL',
				name: 'YEL Token',
				decimals: 18,
				address: '0xd3b71117e6c1558c1553305b44988cd944e97300',
				logoURI: 'https://tokens.1inch.io/0xd3b71117e6c1558c1553305b44988cd944e97300.png',
				tags: ['tokens']
			},
			{
				symbol: 'INSUR',
				name: 'Bsc-Peg INSUR Token',
				decimals: 18,
				address: '0x3192ccddf1cdce4ff055ebc80f3f0231b86a7e30',
				logoURI: 'https://tokens.1inch.io/0x3192ccddf1cdce4ff055ebc80f3f0231b86a7e30.png',
				tags: ['tokens']
			},
			{
				symbol: 'MYST',
				name: 'Mysterium',
				decimals: 18,
				address: '0x2ff0b946a6782190c4fe5d4971cfe79f0b6e4df2',
				logoURI: 'https://tokens.1inch.io/0x2ff0b946a6782190c4fe5d4971cfe79f0b6e4df2.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'GUARD',
				name: 'Guardian',
				decimals: 18,
				address: '0xf606bd19b1e61574ed625d9ea96c841d4e247a32',
				logoURI: 'https://tokens.1inch.io/0xf606bd19b1e61574ed625d9ea96c841d4e247a32.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'SHEESHA',
				name: 'Sheesha Finance',
				decimals: 18,
				address: '0x232fb065d9d24c34708eedbf03724f2e95abe768',
				logoURI: 'https://tokens.1inch.io/0x232fb065d9d24c34708eedbf03724f2e95abe768.png',
				tags: ['tokens']
			},
			{
				symbol: 'USDD',
				name: 'Decentralized USD',
				decimals: 18,
				address: '0xd17479997f34dd9156deef8f95a52d81d265be9c',
				logoURI: 'https://tokens.1inch.io/0xd17479997f34dd9156deef8f95a52d81d265be9c.png',
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'XCAD',
				name: 'Chainport.io-Peg XCAD Token',
				decimals: 18,
				address: '0x431e0cd023a32532bf3969cddfc002c00e98429d',
				logoURI: 'https://tokens.1inch.io/0x431e0cd023a32532bf3969cddfc002c00e98429d.png',
				tags: ['tokens']
			},
			{
				symbol: 'BLID',
				name: 'Bolide',
				decimals: 18,
				address: '0x766afcf83fd5eaf884b3d529b432ca27a6d84617',
				logoURI: 'https://tokens.1inch.io/0x766afcf83fd5eaf884b3d529b432ca27a6d84617.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'PALLA',
				name: 'Pallapay',
				decimals: 18,
				address: '0x8f49733210700d38098d7375c221c7d02f700cc8',
				logoURI: 'https://tokens.1inch.io/0x8f49733210700d38098d7375c221c7d02f700cc8.png',
				tags: ['tokens']
			},
			{
				symbol: 'ORBS',
				name: 'Orbs',
				decimals: 18,
				address: '0xebd49b26169e1b52c04cfd19fcf289405df55f80',
				logoURI: 'https://tokens.1inch.io/0xebd49b26169e1b52c04cfd19fcf289405df55f80.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'O3',
				name: 'O3 Swap Token',
				decimals: 18,
				address: '0xee9801669c6138e84bd50deb500827b776777d28',
				logoURI: 'https://tokens.1inch.io/0xee9801669c6138e84bd50deb500827b776777d28.png',
				tags: ['tokens']
			},
			{
				symbol: 'MASK',
				name: 'Mask Network',
				decimals: 18,
				address: '0x2ed9a5c8c13b93955103b9a7c167b67ef4d568a3',
				logoURI: 'https://tokens.1inch.io/0x2ed9a5c8c13b93955103b9a7c167b67ef4d568a3.png',
				tags: ['tokens']
			},
			{
				symbol: 'DATA',
				name: 'Streamr',
				decimals: 18,
				address: '0x0864c156b3c5f69824564dec60c629ae6401bf2a',
				logoURI: 'https://tokens.1inch.io/0x0864c156b3c5f69824564dec60c629ae6401bf2a.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'AXS',
				name: 'Axie Infinity Shard',
				decimals: 18,
				address: '0x715d400f88c167884bbcc41c5fea407ed4d2f8a0',
				logoURI: 'https://tokens.1inch.io/0x715d400f88c167884bbcc41c5fea407ed4d2f8a0.png',
				tags: ['tokens']
			},
			{
				symbol: 'ADS',
				name: 'Adshares',
				decimals: 11,
				address: '0xcfcecfe2bd2fed07a9145222e8a7ad9cf1ccd22a',
				logoURI: 'https://tokens.1inch.io/0xcfcecfe2bd2fed07a9145222e8a7ad9cf1ccd22a.png',
				tags: ['tokens']
			},
			{
				symbol: 'SALE',
				name: 'DxSale.Network',
				decimals: 18,
				address: '0x04f73a09e2eb410205be256054794fb452f0d245',
				logoURI: 'https://tokens.1inch.io/0x04f73a09e2eb410205be256054794fb452f0d245.png',
				tags: ['tokens']
			},
			{
				symbol: 'LIME',
				name: 'iMe Lab',
				decimals: 18,
				address: '0x7bc75e291e656e8658d66be1cc8154a3769a35dd',
				logoURI: 'https://tokens.1inch.io/0x7bc75e291e656e8658d66be1cc8154a3769a35dd.png',
				tags: ['tokens']
			},
			{
				symbol: 'VOLT',
				name: 'Volt Inu',
				decimals: 9,
				address: '0x7db5af2b9624e1b3b4bb69d6debd9ad1016a58ac',
				logoURI: 'https://tokens.1inch.io/0x7db5af2b9624e1b3b4bb69d6debd9ad1016a58ac.png',
				tags: ['tokens']
			},
			{
				symbol: 'HAY',
				name: 'Hay Stablecoin',
				decimals: 18,
				address: '0x0782b6d8c4551b9760e74c0545a9bcd90bdc41e5',
				logoURI: 'https://tokens.1inch.io/0x0782b6d8c4551b9760e74c0545a9bcd90bdc41e5.png',
				tags: ['tokens']
			},
			{
				symbol: 'SNP',
				name: 'Synapse Network',
				decimals: 18,
				address: '0x6911f552842236bd9e8ea8ddbb3fb414e2c5fa9d',
				logoURI: 'https://tokens.1inch.io/0x6911f552842236bd9e8ea8ddbb3fb414e2c5fa9d.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'WOM',
				name: 'Wombat Token',
				decimals: 18,
				address: '0xad6742a35fb341a9cc6ad674738dd8da98b94fb1',
				logoURI: 'https://tokens.1inch.io/0xad6742a35fb341a9cc6ad674738dd8da98b94fb1.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'OWL',
				name: 'OwlDAO token',
				decimals: 18,
				address: '0x9085b4d52c3e0b8b6f9af6213e85a433c7d76f19',
				logoURI: 'https://tokens.1inch.io/0x9085b4d52c3e0b8b6f9af6213e85a433c7d76f19.png',
				tags: ['tokens']
			},
			{
				symbol: 'CGG',
				name: 'pTokens CGG',
				decimals: 18,
				address: '0x1613957159e9b0ac6c80e824f7eea748a32a0ae2',
				logoURI: 'https://tokens.1inch.io/0x1613957159e9b0ac6c80e824f7eea748a32a0ae2.png',
				tags: ['tokens']
			},
			{
				symbol: 'LAND_2',
				name: 'META-UTOPIA LAND',
				decimals: 18,
				address: '0x9131066022b909c65edd1aaf7ff213dacf4e86d0',
				logoURI: 'https://tokens.1inch.io/0x9131066022b909c65edd1aaf7ff213dacf4e86d0.png',
				displayedSymbol: 'LAND',
				tags: ['tokens']
			},
			{
				symbol: 'STG',
				name: 'StargateToken',
				decimals: 18,
				address: '0xb0d502e938ed5f4df2e681fe6e419ff29631d62b',
				logoURI: 'https://tokens.1inch.io/0xb0d502e938ed5f4df2e681fe6e419ff29631d62b.png',
				tags: ['tokens']
			},
			{
				symbol: 'PINKSALE',
				name: 'PinkSale',
				decimals: 18,
				address: '0x602ba546a7b06e0fc7f58fd27eb6996ecc824689',
				logoURI: 'https://tokens.1inch.io/0x602ba546a7b06e0fc7f58fd27eb6996ecc824689.png',
				tags: ['tokens']
			},
			{
				symbol: 'BTCMT',
				name: 'Minto Bitcoin Hashrate Token',
				decimals: 18,
				address: '0x410a56541bd912f9b60943fcb344f1e3d6f09567',
				logoURI: 'https://tokens.1inch.io/0x410a56541bd912f9b60943fcb344f1e3d6f09567.png',
				tags: ['tokens']
			},
			{
				symbol: 'HFT',
				name: 'Hashflow',
				decimals: 18,
				address: '0x44ec807ce2f4a6f2737a92e985f318d035883e47',
				logoURI: 'https://tokens.1inch.io/0x44ec807ce2f4a6f2737a92e985f318d035883e47.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'CAPS',
				name: 'Capsule Coin',
				decimals: 18,
				address: '0xffba7529ac181c2ee1844548e6d7061c9a597df4',
				logoURI: 'https://tokens.1inch.io/0xffba7529ac181c2ee1844548e6d7061c9a597df4.png',
				tags: ['tokens']
			},
			{
				symbol: 'MIM',
				name: 'Magic Internet Money',
				decimals: 18,
				address: '0xfe19f0b51438fd612f6fd59c1dbb3ea319f433ba',
				logoURI: 'https://tokens.1inch.io/0xfe19f0b51438fd612f6fd59c1dbb3ea319f433ba.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'VRGW',
				name: 'Virtual Reality Game World',
				decimals: 18,
				address: '0xfdd2374be7ae7a71138b9f6b93d9ef034a49edb6',
				logoURI: 'https://tokens.1inch.io/0xfdd2374be7ae7a71138b9f6b93d9ef034a49edb6.png',
				tags: ['tokens']
			},
			{
				symbol: 'QUA',
				name: 'Quarashi',
				decimals: 18,
				address: '0xfd0fd32a20532ad690731c2685d77c351015ebba',
				logoURI: 'https://tokens.1inch.io/0xfd0fd32a20532ad690731c2685d77c351015ebba.png',
				tags: ['tokens']
			},
			{
				symbol: 'CR7',
				name: 'CR7 Token',
				decimals: 18,
				address: '0x6c43751fef27c956f7e75d5c345a65df1465f7e0',
				logoURI: 'https://tokens.1inch.io/0x6c43751fef27c956f7e75d5c345a65df1465f7e0.png',
				tags: ['tokens']
			},
			{
				symbol: 'AMA',
				name: 'AMAUROT',
				decimals: 18,
				address: '0xe9cd2668fb580c96b035b6d081e5753f23fe7f46',
				logoURI: 'https://tokens.1inch.io/0xe9cd2668fb580c96b035b6d081e5753f23fe7f46.png',
				tags: ['tokens']
			},
			{
				symbol: 'SAITO',
				name: 'SAITO',
				decimals: 18,
				address: '0x3c6dad0475d3a1696b359dc04c99fd401be134da',
				logoURI: 'https://tokens.1inch.io/0x3c6dad0475d3a1696b359dc04c99fd401be134da.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'GHNY',
				name: 'Grizzly Honey',
				decimals: 18,
				address: '0xa045e37a0d1dd3a45fefb8803d22457abc0a728a',
				logoURI: 'https://tokens.1inch.io/0xa045e37a0d1dd3a45fefb8803d22457abc0a728a.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'AMT',
				name: 'Amazy Move Token',
				decimals: 18,
				address: '0xf625069dce62df95b4910f83446954b871f0fc4f',
				logoURI: 'https://tokens.1inch.io/0xf625069dce62df95b4910f83446954b871f0fc4f.png',
				tags: ['tokens']
			},
			{
				symbol: 'FARA',
				name: 'FaraCrystal',
				decimals: 18,
				address: '0xf4ed363144981d3a65f42e7d0dc54ff9eef559a1',
				logoURI: 'https://tokens.1inch.io/0xf4ed363144981d3a65f42e7d0dc54ff9eef559a1.png',
				tags: ['tokens']
			},
			{
				symbol: 'TFS',
				name: 'Fairspin Token',
				decimals: 18,
				address: '0xf4bea2c219eb95c6745983b68185c7340c319d9e',
				logoURI: 'https://tokens.1inch.io/0xf4bea2c219eb95c6745983b68185c7340c319d9e.png',
				tags: ['tokens']
			},
			{
				symbol: 'DEXShare',
				name: 'DEXShare',
				decimals: 18,
				address: '0xf4914e6d97a75f014acfcf4072f11be5cffc4ca6',
				logoURI: 'https://tokens.1inch.io/0xf4914e6d97a75f014acfcf4072f11be5cffc4ca6.png',
				tags: ['tokens']
			},
			{
				symbol: 'CELL',
				name: 'Cellframe Token',
				decimals: 18,
				address: '0xf3e1449ddb6b218da2c9463d4594ceccc8934346',
				logoURI: 'https://tokens.1inch.io/0xf3e1449ddb6b218da2c9463d4594ceccc8934346.png',
				tags: ['tokens']
			},
			{
				symbol: 'SCLP',
				name: 'Scallop',
				decimals: 18,
				address: '0xf2c96e402c9199682d5ded26d3771c6b192c01af',
				logoURI: 'https://tokens.1inch.io/0xf2c96e402c9199682d5ded26d3771c6b192c01af.png',
				tags: ['tokens']
			},
			{
				symbol: 'FIU',
				name: 'beFITTER Token',
				decimals: 18,
				address: '0xef7d50069406a2f5a53806f7250a6c0f17ad9dcd',
				logoURI: 'https://tokens.1inch.io/0xef7d50069406a2f5a53806f7250a6c0f17ad9dcd.png',
				tags: ['tokens']
			},
			{
				symbol: 'VEMP',
				name: 'vEmpire Gamer Token',
				decimals: 18,
				address: '0xedf3ce4dd6725650a8e9398e5c6398d061fa7955',
				logoURI: 'https://tokens.1inch.io/0xedf3ce4dd6725650a8e9398e5c6398d061fa7955.png',
				tags: ['tokens']
			},
			{
				symbol: 'RAINI',
				name: 'Rainicorn',
				decimals: 18,
				address: '0xeb953eda0dc65e3246f43dc8fa13f35623bdd5ed',
				logoURI: 'https://tokens.1inch.io/0xeb953eda0dc65e3246f43dc8fa13f35623bdd5ed.png',
				tags: ['tokens']
			},
			{
				symbol: 'MMG',
				name: 'MMG Token',
				decimals: 18,
				address: '0xf018aea0a08a5d88674f0837bdac27ab89824dee',
				logoURI: 'https://tokens.1inch.io/0xf018aea0a08a5d88674f0837bdac27ab89824dee.png',
				tags: ['tokens']
			},
			{
				symbol: 'NUM',
				name: 'NUM Token [via ChainPort.io]',
				decimals: 18,
				address: '0xeceb87cf00dcbf2d4e2880223743ff087a995ad9',
				logoURI: 'https://tokens.1inch.io/0xeceb87cf00dcbf2d4e2880223743ff087a995ad9.png',
				tags: ['tokens']
			},
			{
				symbol: 'OMAX',
				name: 'OMAX TOKEN',
				decimals: 18,
				address: '0xeb84be66c8e71f07ea57cf3b21626d7784f32a7f',
				logoURI: 'https://tokens.1inch.io/0xeb84be66c8e71f07ea57cf3b21626d7784f32a7f.png',
				tags: ['tokens']
			},
			{
				symbol: 'BABBC',
				name: 'Binance ABBC',
				decimals: 8,
				address: '0xe83ce6bfb580583bd6a62b4be7b34fc25f02910d',
				logoURI: 'https://tokens.1inch.io/0xe83ce6bfb580583bd6a62b4be7b34fc25f02910d.png',
				tags: ['tokens']
			},
			{
				symbol: 'INUKO',
				name: 'Inuko Coin',
				decimals: 18,
				address: '0xea51801b8f5b88543ddad3d1727400c15b209d8f',
				logoURI: 'https://tokens.1inch.io/0xea51801b8f5b88543ddad3d1727400c15b209d8f.png',
				tags: ['tokens']
			},
			{
				symbol: 'DEC',
				name: 'DarkEnergyCrystals',
				decimals: 3,
				address: '0xe9d7023f2132d55cbd4ee1f78273cb7a3e74f10a',
				logoURI: 'https://tokens.1inch.io/0xe9d7023f2132d55cbd4ee1f78273cb7a3e74f10a.png',
				tags: ['tokens']
			},
			{
				symbol: 'RDT',
				name: 'Ridotto',
				decimals: 18,
				address: '0xe9c64384deb0c2bf06d991a8d708c77eb545e3d5',
				logoURI: 'https://tokens.1inch.io/0xe9c64384deb0c2bf06d991a8d708c77eb545e3d5.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'XCT',
				name: 'Citadel.one',
				decimals: 6,
				address: '0xe8670901e86818745b28c8b30b17986958fce8cc',
				logoURI: 'https://tokens.1inch.io/0xe8670901e86818745b28c8b30b17986958fce8cc.png',
				tags: ['tokens']
			},
			{
				symbol: 'MSU',
				name: 'MetaSoccer Universe',
				decimals: 18,
				address: '0xe8377a076adabb3f9838afb77bee96eac101ffb1',
				logoURI: 'https://tokens.1inch.io/0xe8377a076adabb3f9838afb77bee96eac101ffb1.png',
				tags: ['tokens']
			},
			{
				symbol: 'CZUSD',
				name: 'CZUSD',
				decimals: 18,
				address: '0xe68b79e51bf826534ff37aa9cee71a3842ee9c70',
				logoURI: 'https://tokens.1inch.io/0xe68b79e51bf826534ff37aa9cee71a3842ee9c70.png',
				tags: ['tokens']
			},
			{
				symbol: 'DERI',
				name: 'Deri',
				decimals: 18,
				address: '0xe60eaf5a997dfae83739e035b005a33afdcc6df5',
				logoURI: 'https://tokens.1inch.io/0xe60eaf5a997dfae83739e035b005a33afdcc6df5.png',
				tags: ['tokens']
			},
			{
				symbol: 'Metis',
				name: 'Metis Token',
				decimals: 18,
				address: '0xe552fb52a4f19e44ef5a967632dbc320b0820639',
				logoURI: 'https://tokens.1inch.io/0xe552fb52a4f19e44ef5a967632dbc320b0820639.png',
				tags: ['tokens']
			},
			{
				symbol: 'GAL',
				name: 'Project Galaxy',
				decimals: 18,
				address: '0xe4cc45bb5dbda06db6183e8bf016569f40497aa5',
				logoURI: 'https://tokens.1inch.io/0xe4cc45bb5dbda06db6183e8bf016569f40497aa5.png',
				tags: ['tokens']
			},
			{
				symbol: 'MONS',
				name: 'Monsters Clan Token',
				decimals: 18,
				address: '0xe4c797d43631f4d660ec67b5cb0b78ef5c902532',
				logoURI: 'https://tokens.1inch.io/0xe4c797d43631f4d660ec67b5cb0b78ef5c902532.png',
				tags: ['tokens']
			},
			{
				symbol: 'HPN',
				name: 'HyperonChain',
				decimals: 18,
				address: '0xe3d2ba4ebcc6e9ae3569d6418bc2eaabb8feef60',
				logoURI: 'https://tokens.1inch.io/0xe3d2ba4ebcc6e9ae3569d6418bc2eaabb8feef60.png',
				tags: ['tokens']
			},
			{
				symbol: 'NELO',
				name: 'NELO Metaverse',
				decimals: 9,
				address: '0xe38950f71e2d2fc4ca9dc9c3625d82560b0a5d8f',
				logoURI: 'https://tokens.1inch.io/0xe38950f71e2d2fc4ca9dc9c3625d82560b0a5d8f.png',
				tags: ['tokens']
			},
			{
				symbol: 'Froyo',
				name: 'Froyo',
				decimals: 18,
				address: '0xe369fec23380f9f14ffd07a1dc4b7c1a9fdd81c9',
				logoURI: 'https://tokens.1inch.io/0xe369fec23380f9f14ffd07a1dc4b7c1a9fdd81c9.png',
				tags: ['tokens']
			},
			{
				symbol: 'CEEK',
				name: 'CEEK',
				decimals: 18,
				address: '0xe0f94ac5462997d2bc57287ac3a3ae4c31345d66',
				logoURI: 'https://tokens.1inch.io/0xe0f94ac5462997d2bc57287ac3a3ae4c31345d66.png',
				tags: ['tokens']
			},
			{
				symbol: 'SWAP',
				name: 'SatoshiSwap',
				decimals: 18,
				address: '0xe0f7c8682f865b417aeb80bf237025b4cb5ebaef',
				logoURI: 'https://tokens.1inch.io/0xe0f7c8682f865b417aeb80bf237025b4cb5ebaef.png',
				tags: ['tokens']
			},
			{
				symbol: 'SOL',
				name: 'SOLANA',
				decimals: 18,
				address: '0x570a5d26f7765ecb712c0924e4de545b89fd43df',
				logoURI: 'https://tokens.1inch.io/0x570a5d26f7765ecb712c0924e4de545b89fd43df.png',
				tags: ['tokens']
			},
			{
				symbol: 'DOMI',
				name: 'Domi',
				decimals: 18,
				address: '0xbbca42c60b5290f2c48871a596492f93ff0ddc82',
				logoURI: 'https://tokens.1inch.io/0xbbca42c60b5290f2c48871a596492f93ff0ddc82.png',
				tags: ['tokens']
			},
			{
				symbol: 'MCRT',
				name: 'MagicCraft',
				decimals: 9,
				address: '0x4b8285ab433d8f69cb48d5ad62b415ed1a221e4f',
				logoURI: 'https://tokens.1inch.io/0x4b8285ab433d8f69cb48d5ad62b415ed1a221e4f.png',
				tags: ['tokens']
			},
			{
				symbol: 'WNDR',
				name: 'Wonderman Token',
				decimals: 8,
				address: '0xdfd7b0dd7bf1012dfdf3307a964c36b972300ac8',
				logoURI: 'https://tokens.1inch.io/0xdfd7b0dd7bf1012dfdf3307a964c36b972300ac8.png',
				tags: ['tokens']
			},
			{
				symbol: 'NFTB',
				name: 'NFTB',
				decimals: 18,
				address: '0xde3dbbe30cfa9f437b293294d1fd64b26045c71a',
				logoURI: 'https://tokens.1inch.io/0xde3dbbe30cfa9f437b293294d1fd64b26045c71a.png',
				tags: ['tokens']
			},
			{
				symbol: 'RVF',
				name: 'RocketVaultRocketX',
				decimals: 18,
				address: '0x872a34ebb2d54af86827810eebc7b9dc6b2144aa',
				logoURI: 'https://tokens.1inch.io/0x872a34ebb2d54af86827810eebc7b9dc6b2144aa.png',
				tags: ['tokens']
			},
			{
				symbol: 'AMPL',
				name: 'AMPL secured by Meter Passport',
				decimals: 9,
				address: '0xdb021b1b247fe2f1fa57e0a87c748cc1e321f07f',
				logoURI: 'https://tokens.1inch.io/0xdb021b1b247fe2f1fa57e0a87c748cc1e321f07f.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'BZEN',
				name: 'BITZEN',
				decimals: 9,
				address: '0xdacc0417add48b63cbefb77efbe4a3801aad51ba',
				logoURI: 'https://tokens.1inch.io/0xdacc0417add48b63cbefb77efbe4a3801aad51ba.png',
				tags: ['tokens']
			},
			{
				symbol: 'ULX',
				name: 'Ultron',
				decimals: 18,
				address: '0xd983ab71a284d6371908420d8ac6407ca943f810',
				logoURI: 'https://tokens.1inch.io/0xd983ab71a284d6371908420d8ac6407ca943f810.png',
				tags: ['tokens']
			},
			{
				symbol: 'MILO',
				name: 'Milo Inu',
				decimals: 9,
				address: '0xd9de2b1973e57dc9dba90c35d6cd940ae4a3cbe1',
				logoURI: 'https://tokens.1inch.io/0xd9de2b1973e57dc9dba90c35d6cd940ae4a3cbe1.png',
				tags: ['tokens']
			},
			{
				symbol: 'AIR',
				name: 'AIR',
				decimals: 18,
				address: '0xd8a2ae43fd061d24acd538e3866ffc2c05151b53',
				logoURI: 'https://tokens.1inch.io/0xd8a2ae43fd061d24acd538e3866ffc2c05151b53.png',
				tags: ['tokens']
			},
			{
				symbol: 'QUACK',
				name: 'RichQUACK.com',
				decimals: 9,
				address: '0xd74b782e05aa25c50e7330af541d46e18f36661c',
				logoURI: 'https://tokens.1inch.io/0xd74b782e05aa25c50e7330af541d46e18f36661c.png',
				tags: ['tokens']
			},
			{
				symbol: 'URUS',
				name: 'Aurox Token',
				decimals: 18,
				address: '0xc6dddb5bc6e61e0841c54f3e723ae1f3a807260b',
				logoURI: 'https://tokens.1inch.io/0xc6dddb5bc6e61e0841c54f3e723ae1f3a807260b.png',
				tags: ['tokens']
			},
			{
				symbol: 'EPX',
				name: 'Ellipsis X',
				decimals: 18,
				address: '0xaf41054c1487b0e5e2b9250c0332ecbce6ce9d71',
				logoURI: 'https://tokens.1inch.io/0xaf41054c1487b0e5e2b9250c0332ecbce6ce9d71.png',
				tags: ['tokens']
			},
			{
				symbol: 'ETERNAL',
				name: 'CryptoMines Eternal',
				decimals: 18,
				address: '0xd44fd09d74cd13838f137b590497595d6b3feea4',
				logoURI: 'https://tokens.1inch.io/0xd44fd09d74cd13838f137b590497595d6b3feea4.png',
				tags: ['tokens']
			},
			{
				symbol: 'COINSCOPE',
				name: 'Coinscope',
				decimals: 18,
				address: '0xd41c4805a9a3128f9f7a7074da25965371ba50d5',
				logoURI: 'https://tokens.1inch.io/0xd41c4805a9a3128f9f7a7074da25965371ba50d5.png',
				tags: ['tokens']
			},
			{
				symbol: 'HERO',
				name: 'Metahero',
				decimals: 18,
				address: '0xd40bedb44c081d2935eeba6ef5a3c8a31a1bbe13',
				logoURI: 'https://tokens.1inch.io/0xd40bedb44c081d2935eeba6ef5a3c8a31a1bbe13.png',
				tags: ['tokens']
			},
			{
				symbol: 'WAL',
				name: 'WastedLands',
				decimals: 18,
				address: '0xd306c124282880858a634e7396383ae58d37c79c',
				logoURI: 'https://tokens.1inch.io/0xd306c124282880858a634e7396383ae58d37c79c.png',
				tags: ['tokens']
			},
			{
				symbol: 'PRQ',
				name: 'Parsiq Token',
				decimals: 18,
				address: '0xd21d29b38374528675c34936bf7d5dd693d2a577',
				logoURI: 'https://tokens.1inch.io/0xd21d29b38374528675c34936bf7d5dd693d2a577.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'LOOP',
				name: 'LoopNetwork',
				decimals: 18,
				address: '0xce186ad6430e2fe494a22c9edbd4c68794a28b35',
				logoURI: 'https://tokens.1inch.io/0xce186ad6430e2fe494a22c9edbd4c68794a28b35.png',
				tags: ['tokens']
			},
			{
				symbol: 'MATIC',
				name: 'Matic Token',
				decimals: 18,
				address: '0xcc42724c6683b7e57334c4e856f4c9965ed682bd',
				logoURI: 'https://tokens.1inch.io/0xcc42724c6683b7e57334c4e856f4c9965ed682bd.png',
				tags: ['tokens']
			},
			{
				symbol: 'FIST',
				name: 'FistToken',
				decimals: 6,
				address: '0xc9882def23bc42d53895b8361d0b1edc7570bc6a',
				logoURI: 'https://tokens.1inch.io/0xc9882def23bc42d53895b8361d0b1edc7570bc6a.png',
				tags: ['tokens']
			},
			{
				symbol: 'GAME',
				name: 'Game Coin [via ChainPort.io]',
				decimals: 5,
				address: '0x66109633715d2110dda791e64a7b2afadb517abb',
				logoURI: 'https://tokens.1inch.io/0x66109633715d2110dda791e64a7b2afadb517abb.png',
				tags: ['tokens']
			},
			{
				symbol: 'MCONTENT',
				name: 'MContent',
				decimals: 6,
				address: '0x799e1cf88a236e42b4a87c544a22a94ae95a6910',
				logoURI: 'https://tokens.1inch.io/0x799e1cf88a236e42b4a87c544a22a94ae95a6910.png',
				tags: ['tokens']
			},
			{
				symbol: 'XTM',
				name: 'Torum',
				decimals: 18,
				address: '0xcd1faff6e578fa5cac469d2418c95671ba1a62fe',
				logoURI: 'https://tokens.1inch.io/0xcd1faff6e578fa5cac469d2418c95671ba1a62fe.png',
				tags: ['tokens']
			},
			{
				symbol: 'ECC',
				name: 'Empire Capital Token',
				decimals: 9,
				address: '0xc84d8d03aa41ef941721a4d77b24bb44d7c7ac55',
				logoURI: 'https://tokens.1inch.io/0xc84d8d03aa41ef941721a4d77b24bb44d7c7ac55.png',
				tags: ['tokens']
			},
			{
				symbol: 'LIQ',
				name: 'Liquidus',
				decimals: 18,
				address: '0xc7981767f644c7f8e483dabdc413e8a371b83079',
				logoURI: 'https://tokens.1inch.io/0xc7981767f644c7f8e483dabdc413e8a371b83079.png',
				tags: ['tokens']
			},
			{
				symbol: 'BabyDoge',
				name: 'Baby Doge Coin',
				decimals: 9,
				address: '0xc748673057861a797275cd8a068abb95a902e8de',
				logoURI: 'https://tokens.1inch.io/0xc748673057861a797275cd8a068abb95a902e8de.png',
				tags: ['tokens']
			},
			{
				symbol: 'AVA',
				name: 'Avatly',
				decimals: 18,
				address: '0x83b79f74f225e8f9a29fc67cb1678e7909d7d73d',
				logoURI: 'https://tokens.1inch.io/0x83b79f74f225e8f9a29fc67cb1678e7909d7d73d.png',
				tags: ['tokens']
			},
			{
				symbol: 'STARS',
				name: 'Mogul Stars',
				decimals: 18,
				address: '0xbd83010eb60f12112908774998f65761cf9f6f9a',
				logoURI: 'https://tokens.1inch.io/0xbd83010eb60f12112908774998f65761cf9f6f9a.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'HI',
				name: 'hi Dollar',
				decimals: 18,
				address: '0x77087ab5df23cfb52449a188e80e9096201c2097',
				logoURI: 'https://tokens.1inch.io/0x77087ab5df23cfb52449a188e80e9096201c2097.png',
				tags: ['tokens']
			},
			{
				symbol: 'RISE',
				name: 'EverRise',
				decimals: 18,
				address: '0xc17c30e98541188614df99239cabd40280810ca3',
				logoURI: 'https://tokens.1inch.io/0xc17c30e98541188614df99239cabd40280810ca3.png',
				tags: ['tokens']
			},
			{
				symbol: 'C98',
				name: 'Coin98',
				decimals: 18,
				address: '0xaec945e04baf28b135fa7c640f624f8d90f1c3a6',
				logoURI: 'https://tokens.1inch.io/0xaec945e04baf28b135fa7c640f624f8d90f1c3a6.png',
				tags: ['tokens']
			},
			{
				symbol: 'POLC',
				name: 'Polka City',
				decimals: 18,
				address: '0x6ae9701b9c423f40d54556c9a443409d79ce170a',
				logoURI: 'https://tokens.1inch.io/0x6ae9701b9c423f40d54556c9a443409d79ce170a.png',
				tags: ['tokens']
			},
			{
				symbol: 'DEBT',
				name: 'DEBT',
				decimals: 8,
				address: '0xc632f90affec7121120275610bf17df9963f181c',
				logoURI: 'https://tokens.1inch.io/0xc632f90affec7121120275610bf17df9963f181c.png',
				tags: ['tokens']
			},
			{
				symbol: 'AQUA',
				name: 'AQUA',
				decimals: 18,
				address: '0x72b7d61e8fc8cf971960dd9cfa59b8c829d91991',
				logoURI: 'https://tokens.1inch.io/0x72b7d61e8fc8cf971960dd9cfa59b8c829d91991.png',
				tags: ['tokens']
			},
			{
				symbol: 'LNR',
				name: 'Lunar',
				decimals: 18,
				address: '0xc1a59a17f87ba6651eb8e8f707db7672647c45bd',
				logoURI: 'https://tokens.1inch.io/0xc1a59a17f87ba6651eb8e8f707db7672647c45bd.png',
				tags: ['tokens']
			},
			{
				symbol: 'VEX',
				name: 'Velorex',
				decimals: 9,
				address: '0xc029a12e4a002c6858878fd9d3cc74e227cc2dda',
				logoURI: 'https://tokens.1inch.io/0xc029a12e4a002c6858878fd9d3cc74e227cc2dda.png',
				tags: ['tokens']
			},
			{
				symbol: 'TLOS',
				name: 'pTokens TLOS',
				decimals: 18,
				address: '0xb6c53431608e626ac81a9776ac3e999c5556717c',
				logoURI: 'https://tokens.1inch.io/0xb6c53431608e626ac81a9776ac3e999c5556717c.png',
				tags: ['tokens']
			},
			{
				symbol: 'BETA',
				name: 'Beta Token',
				decimals: 18,
				address: '0xbe1a001fe942f96eea22ba08783140b9dcc09d28',
				logoURI: 'https://tokens.1inch.io/0xbe1a001fe942f96eea22ba08783140b9dcc09d28.png',
				tags: ['tokens']
			},
			{
				symbol: 'MTRG',
				name: 'Wrapped MTRG on BSC by Meter.io',
				decimals: 18,
				address: '0xbd2949f67dcdc549c6ebe98696449fa79d988a9f',
				logoURI: 'https://tokens.1inch.io/0xbd2949f67dcdc549c6ebe98696449fa79d988a9f.png',
				tags: ['tokens']
			},
			{
				symbol: 'RVC',
				name: 'Revenue Coin',
				decimals: 18,
				address: '0xbcbdecf8e76a5c32dba69de16985882ace1678c6',
				logoURI: 'https://tokens.1inch.io/0xbcbdecf8e76a5c32dba69de16985882ace1678c6.png',
				tags: ['tokens']
			},
			{
				symbol: 'XETA',
				name: 'XANA',
				decimals: 18,
				address: '0xbc7370641ddcf16a27eea11230af4a9f247b61f9',
				logoURI: 'https://tokens.1inch.io/0xbc7370641ddcf16a27eea11230af4a9f247b61f9.png',
				tags: ['tokens']
			},
			{
				symbol: 'CALO',
				name: 'CALO',
				decimals: 18,
				address: '0xb6b91269413b6b99242b1c0bc611031529999999',
				logoURI: 'https://tokens.1inch.io/0xb6b91269413b6b99242b1c0bc611031529999999.png',
				tags: ['tokens']
			},
			{
				symbol: 'USX',
				name: 'dForce USD',
				decimals: 18,
				address: '0xb5102cee1528ce2c760893034a4603663495fd72',
				logoURI: 'https://tokens.1inch.io/0xb5102cee1528ce2c760893034a4603663495fd72.png',
				tags: ['tokens']
			},
			{
				symbol: 'TRIVIA',
				name: 'Trivian Token',
				decimals: 3,
				address: '0xb465f3cb6aba6ee375e12918387de1eac2301b05',
				logoURI: 'https://tokens.1inch.io/0xb465f3cb6aba6ee375e12918387de1eac2301b05.png',
				tags: ['tokens']
			},
			{
				symbol: 'GAMMA',
				name: 'GAMMA',
				decimals: 18,
				address: '0xb3cb6d2f8f2fde203a022201c81a96c167607f15',
				logoURI: 'https://tokens.1inch.io/0xb3cb6d2f8f2fde203a022201c81a96c167607f15.png',
				tags: ['tokens']
			},
			{
				symbol: 'Gold',
				name: 'CyberDragon Gold',
				decimals: 18,
				address: '0xb3a6381070b1a15169dea646166ec0699fdaea79',
				logoURI: 'https://tokens.1inch.io/0xb3a6381070b1a15169dea646166ec0699fdaea79.png',
				tags: ['tokens']
			},
			{
				symbol: 'TruePNL',
				name: 'PNL',
				decimals: 18,
				address: '0xb346c52874c7023df183068c39478c3b7b2515bc',
				logoURI: 'https://tokens.1inch.io/0xb346c52874c7023df183068c39478c3b7b2515bc.png',
				tags: ['tokens']
			},
			{
				symbol: 'CPD',
				name: 'Coinspaid',
				decimals: 18,
				address: '0x2406dce4da5ab125a18295f4fb9fd36a0f7879a2',
				logoURI: 'https://tokens.1inch.io/0x2406dce4da5ab125a18295f4fb9fd36a0f7879a2.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'SDAO',
				name: 'Singularity Dao',
				decimals: 18,
				address: '0x90ed8f1dc86388f14b64ba8fb4bbd23099f18240',
				logoURI: 'https://tokens.1inch.io/0x90ed8f1dc86388f14b64ba8fb4bbd23099f18240.png',
				tags: ['tokens']
			},
			{
				symbol: 'GGT',
				name: 'GameGuru',
				decimals: 18,
				address: '0xd2359c576632234d1354b20bf51b0277be20c81e',
				logoURI: 'https://tokens.1inch.io/0xd2359c576632234d1354b20bf51b0277be20c81e.png',
				tags: ['tokens']
			},
			{
				symbol: 'UCO',
				name: 'UnirisToken',
				decimals: 18,
				address: '0xb001f1e7c8bda414ac7cf7ecba5469fe8d24b6de',
				logoURI: 'https://tokens.1inch.io/0xb001f1e7c8bda414ac7cf7ecba5469fe8d24b6de.png',
				tags: ['tokens']
			},
			{
				symbol: 'BOG',
				name: 'Bogged Finance',
				decimals: 18,
				address: '0xb09fe1613fe03e7361319d2a43edc17422f36b09',
				logoURI: 'https://tokens.1inch.io/0xb09fe1613fe03e7361319d2a43edc17422f36b09.png',
				tags: ['tokens']
			},
			{
				symbol: 'PAID',
				name: 'PAID Network',
				decimals: 18,
				address: '0xad86d0e9764ba90ddd68747d64bffbd79879a238',
				logoURI: 'https://tokens.1inch.io/0xad86d0e9764ba90ddd68747d64bffbd79879a238.png',
				tags: ['tokens']
			},
			{
				symbol: 'FTM',
				name: 'Fantom',
				decimals: 18,
				address: '0xad29abb318791d579433d831ed122afeaf29dcfe',
				logoURI: 'https://tokens.1inch.io/0xad29abb318791d579433d831ed122afeaf29dcfe.png',
				tags: ['tokens']
			},
			{
				symbol: 'NFTD',
				name: 'NFTrade Token [via ChainPort.io]',
				decimals: 18,
				address: '0xac83271abb4ec95386f08ad2b904a46c61777cef',
				logoURI: 'https://tokens.1inch.io/0xac83271abb4ec95386f08ad2b904a46c61777cef.png',
				tags: ['tokens']
			},
			{
				symbol: 'ALICE',
				name: 'ALICE',
				decimals: 6,
				address: '0xac51066d7bec65dc4589368da368b212745d63e8',
				logoURI: 'https://tokens.1inch.io/0xac51066d7bec65dc4589368da368b212745d63e8.png',
				tags: ['tokens']
			},
			{
				symbol: 'OLE',
				name: 'OpenLeverage',
				decimals: 18,
				address: '0xa865197a84e780957422237b5d152772654341f3',
				logoURI: 'https://tokens.1inch.io/0xa865197a84e780957422237b5d152772654341f3.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'PEFI',
				name: 'Plant Empires Token',
				decimals: 18,
				address: '0xa83bfcf9e252adf1f39937984a4e113eda6e445b',
				logoURI: 'https://tokens.1inch.io/0xa83bfcf9e252adf1f39937984a4e113eda6e445b.png',
				tags: ['tokens']
			},
			{
				symbol: 'SANTOS',
				name: 'FC Santos Fan Token',
				decimals: 8,
				address: '0xa64455a4553c9034236734faddaddbb64ace4cc7',
				logoURI: 'https://tokens.1inch.io/0xa64455a4553c9034236734faddaddbb64ace4cc7.png',
				tags: ['tokens']
			},
			{
				symbol: 'ankrBNB',
				name: 'Ankr Staked BNB',
				decimals: 18,
				address: '0x52f24a5e03aee338da5fd9df68d2b6fae1178827',
				logoURI: 'https://tokens.1inch.io/0x52f24a5e03aee338da5fd9df68d2b6fae1178827.png',
				tags: ['tokens']
			},
			{
				symbol: 'THE',
				name: 'THENA',
				decimals: 18,
				address: '0xf4c8e32eadec4bfe97e0f595add0f4450a863a11',
				logoURI: 'https://tokens.1inch.io/0xf4c8e32eadec4bfe97e0f595add0f4450a863a11.png',
				tags: ['tokens']
			},
			{
				symbol: 'DFI',
				name: 'DFI (DefiChain)',
				decimals: 18,
				address: '0x361c60b7c2828fcab80988d00d1d542c83387b50',
				logoURI: 'https://tokens.1inch.io/0x361c60b7c2828fcab80988d00d1d542c83387b50.png',
				tags: ['tokens']
			},
			{
				symbol: 'TRIAS',
				name: 'Trias Token',
				decimals: 18,
				address: '0xa4838122c683f732289805fc3c207febd55babdd',
				logoURI: 'https://tokens.1inch.io/0xa4838122c683f732289805fc3c207febd55babdd.png',
				tags: ['tokens']
			},
			{
				symbol: 'ATA',
				name: 'Automata',
				decimals: 18,
				address: '0xa2120b9e674d3fc3875f415a7df52e382f141225',
				logoURI: 'https://tokens.1inch.io/0xa2120b9e674d3fc3875f415a7df52e382f141225.png',
				tags: ['tokens']
			},
			{
				symbol: 'THG',
				name: 'Thetan Gem',
				decimals: 18,
				address: '0x9fd87aefe02441b123c3c32466cd9db4c578618f',
				logoURI: 'https://tokens.1inch.io/0x9fd87aefe02441b123c3c32466cd9db4c578618f.png',
				tags: ['tokens']
			},
			{
				symbol: 'ARKER',
				name: 'ARKER',
				decimals: 18,
				address: '0x9c67638c4fa06fd47fb8900fc7f932f7eab589de',
				logoURI: 'https://tokens.1inch.io/0x9c67638c4fa06fd47fb8900fc7f932f7eab589de.png',
				tags: ['tokens']
			},
			{
				symbol: 'MDX',
				name: 'MDX Token',
				decimals: 18,
				address: '0x9c65ab58d8d978db963e63f2bfb7121627e3a739',
				logoURI: 'https://tokens.1inch.io/0x9c65ab58d8d978db963e63f2bfb7121627e3a739.png',
				tags: ['tokens']
			},
			{
				symbol: 'AFP',
				name: 'PIGS Token',
				decimals: 18,
				address: '0x9a3321e1acd3b9f6debee5e042dd2411a1742002',
				logoURI: 'https://tokens.1inch.io/0x9a3321e1acd3b9f6debee5e042dd2411a1742002.png',
				tags: ['tokens']
			},
			{
				symbol: 'NEST',
				name: 'NEST',
				decimals: 18,
				address: '0x98f8669f6481ebb341b522fcd3663f79a3d1a6a7',
				logoURI: 'https://tokens.1inch.io/0x98f8669f6481ebb341b522fcd3663f79a3d1a6a7.png',
				tags: ['tokens']
			},
			{
				symbol: 'MC',
				name: 'Merit Circle',
				decimals: 18,
				address: '0x949d48eca67b17269629c7194f4b727d4ef9e5d6',
				logoURI: 'https://tokens.1inch.io/0x949d48eca67b17269629c7194f4b727d4ef9e5d6.png',
				tags: ['tokens']
			},
			{
				symbol: 'BAS',
				name: 'BlockApeScissors',
				decimals: 18,
				address: '0x8ddeec6b677c7c552c9f3563b99e4ff90b862ebc',
				logoURI: 'https://tokens.1inch.io/0x8ddeec6b677c7c552c9f3563b99e4ff90b862ebc.png',
				tags: ['tokens']
			},
			{
				symbol: 'ETHPAD',
				name: 'ETHPAD.network',
				decimals: 18,
				address: '0x8db1d28ee0d822367af8d220c0dc7cb6fe9dc442',
				logoURI: 'https://tokens.1inch.io/0x8db1d28ee0d822367af8d220c0dc7cb6fe9dc442.png',
				tags: ['tokens']
			},
			{
				symbol: 'GUILD',
				name: 'BlockchainSpace [via ChainPort.io]',
				decimals: 18,
				address: '0x0565805ca3a4105faee51983b0bd8ffb5ce1455c',
				logoURI: 'https://tokens.1inch.io/0x0565805ca3a4105faee51983b0bd8ffb5ce1455c.png',
				tags: ['tokens']
			},
			{
				symbol: 'GMT',
				name: 'GoMining Token',
				decimals: 18,
				address: '0x7ddc52c4de30e94be3a6a0a2b259b2850f421989',
				logoURI: 'https://tokens.1inch.io/0x7ddc52c4de30e94be3a6a0a2b259b2850f421989.png',
				tags: ['tokens']
			},
			{
				symbol: 'LVL',
				name: 'Level Token',
				decimals: 18,
				address: '0xb64e280e9d1b5dbec4accedb2257a87b400db149',
				logoURI: 'https://tokens.1inch.io/0xb64e280e9d1b5dbec4accedb2257a87b400db149.png',
				tags: ['tokens']
			},
			{
				symbol: 'MULTI',
				name: 'Multichain',
				decimals: 18,
				address: '0x9fb9a33956351cf4fa040f65a13b835a3c8764e3',
				logoURI: 'https://tokens.1inch.io/0x9fb9a33956351cf4fa040f65a13b835a3c8764e3.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'MIX',
				name: 'MixMarvel Token',
				decimals: 18,
				address: '0x398f7827dccbefe6990478876bbf3612d93baf05',
				logoURI: 'https://tokens.1inch.io/0x398f7827dccbefe6990478876bbf3612d93baf05.png',
				tags: ['tokens']
			},
			{
				symbol: 'SIS',
				name: 'Symbiosis',
				decimals: 18,
				address: '0xf98b660adf2ed7d9d9d9daacc2fb0cace4f21835',
				logoURI: 'https://tokens.1inch.io/0xf98b660adf2ed7d9d9d9daacc2fb0cace4f21835.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'BNBx',
				name: 'Liquid Staking BNB',
				decimals: 18,
				address: '0x1bdd3cf7f79cfb8edbb955f20ad99211551ba275',
				logoURI: 'https://tokens.1inch.io/0x1bdd3cf7f79cfb8edbb955f20ad99211551ba275.png',
				tags: ['tokens']
			},
			{
				symbol: 'HORD',
				name: 'Chainport.io-Peg HORD Token',
				decimals: 18,
				address: '0x39d4549908e7adcee9b439429294eeb4c65c2c9e',
				logoURI: 'https://tokens.1inch.io/0x39d4549908e7adcee9b439429294eeb4c65c2c9e.png',
				tags: ['tokens']
			},
			{
				symbol: 'BTBS',
				name: 'BitBase',
				decimals: 18,
				address: '0x6fefd97f328342a8a840546a55fdcfee7542f9a8',
				logoURI: 'https://tokens.1inch.io/0x6fefd97f328342a8a840546a55fdcfee7542f9a8.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'KSWAP',
				name: 'KyotoSwap Token',
				decimals: 18,
				address: '0x29abc4d03d133d8fd1f1c54318428353ce08727e',
				logoURI: 'https://tokens.1inch.io/0x29abc4d03d133d8fd1f1c54318428353ce08727e.png',
				tags: ['tokens']
			},
			{
				symbol: 'wALV',
				name: 'Alvey Chain',
				decimals: 18,
				address: '0x256d1fce1b1221e8398f65f9b36033ce50b2d497',
				logoURI: 'https://tokens.1inch.io/0x256d1fce1b1221e8398f65f9b36033ce50b2d497.png',
				tags: ['tokens']
			},
			{
				symbol: 'ID',
				name: 'SPACE ID',
				decimals: 18,
				address: '0x2dff88a56767223a5529ea5960da7a3f5f766406',
				logoURI: 'https://tokens.1inch.io/0x2dff88a56767223a5529ea5960da7a3f5f766406.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'stkBNB',
				name: 'Staked BNB',
				decimals: 18,
				address: '0xc2e9d07f66a89c44062459a47a0d2dc038e4fb16',
				logoURI: 'https://tokens.1inch.io/0xc2e9d07f66a89c44062459a47a0d2dc038e4fb16.png',
				tags: ['tokens']
			},
			{
				symbol: 'DPS',
				name: 'DEEPSPACE',
				decimals: 9,
				address: '0xf275e1ac303a4c9d987a2c48b8e555a77fec3f1c',
				logoURI: 'https://tokens.1inch.io/0xf275e1ac303a4c9d987a2c48b8e555a77fec3f1c.png',
				tags: ['tokens']
			},
			{
				symbol: 'LGO',
				name: 'Level Governance Token',
				decimals: 18,
				address: '0xbe2b6c5e31f292009f495ddbda88e28391c9815e',
				logoURI: 'https://tokens.1inch.io/0xbe2b6c5e31f292009f495ddbda88e28391c9815e.png',
				tags: ['tokens']
			},
			{
				symbol: 'RDNT',
				name: 'Radiant',
				decimals: 18,
				address: '0xf7de7e8a6bd59ed41a4b5fe50278b3b7f31384df',
				logoURI: 'https://tokens.1inch.io/0xf7de7e8a6bd59ed41a4b5fe50278b3b7f31384df.png',
				tags: ['tokens']
			}
		]
	},
	{
		network: ENetwork.polygon,
		tokens: [
			{
				symbol: 'MATIC',
				name: 'MATIC',
				decimals: 18,
				address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
				logoURI: 'https://tokens.1inch.io/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png',
				tags: ['native']
			},
			{
				symbol: 'AAVE',
				name: 'Aave',
				decimals: 18,
				address: '0xd6df932a45c0f255f85145f286ea0b292b21c90b',
				logoURI: 'https://tokens.1inch.io/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9.png',
				tags: ['tokens']
			},
			{
				symbol: 'MUST',
				name: 'Must',
				decimals: 18,
				address: '0x9c78ee466d6cb57a4d01fd887d2b5dfb2d46288f',
				logoURI: 'https://tokens.1inch.io/0x9c78ee466d6cb57a4d01fd887d2b5dfb2d46288f.png',
				tags: ['tokens']
			},
			{
				symbol: 'UNI',
				name: 'Uniswap',
				decimals: 18,
				address: '0xb33eaad8d922b1083446dc23f610c2567fb5180f',
				logoURI: 'https://tokens.1inch.io/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984.png',
				tags: ['tokens']
			},
			{
				symbol: 'USDT',
				name: 'Tether USD',
				decimals: 6,
				address: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
				logoURI: 'https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png',
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'DAI',
				name: '(PoS) Dai Stablecoin',
				decimals: 18,
				address: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
				logoURI: 'https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png',
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'WBTC',
				name: 'Wrapped BTC',
				decimals: 8,
				address: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6',
				logoURI: 'https://tokens.1inch.io/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599.png',
				tags: ['tokens', 'PEG:BTC']
			},
			{
				symbol: 'LINK',
				name: 'ChainLink Token',
				decimals: 18,
				address: '0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39',
				logoURI: 'https://tokens.1inch.io/0x514910771af9ca656af840dff83e8264ecf986ca.png',
				tags: ['tokens']
			},
			{
				symbol: 'SUPER',
				name: 'SuperFarm',
				decimals: 18,
				address: '0xa1428174f516f527fafdd146b883bb4428682737',
				logoURI: 'https://tokens.1inch.io/0xe53ec727dbdeb9e2d5456c3be40cff031ab40a55.png',
				tags: ['tokens']
			},
			{
				symbol: 'MANA',
				name: 'Decentraland MANA',
				decimals: 18,
				address: '0xa1c57f48f0deb89f569dfbe6e2b7f46d33606fd4',
				logoURI: 'https://tokens.1inch.io/0x0f5d2fb29fb7d3cfee444a200298f468908cc942.png',
				tags: ['tokens']
			},
			{
				symbol: 'WMATIC',
				name: 'Wrapped Matic',
				decimals: 18,
				address: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
				logoURI: 'https://tokens.1inch.io/0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270.png',
				wrappedNative: true,
				tags: ['tokens']
			},
			{
				symbol: 'COMP',
				name: 'Compound',
				decimals: 18,
				address: '0x8505b9d2254a7ae468c0e9dd10ccea3a837aef5c',
				logoURI: 'https://tokens.1inch.io/0xc00e94cb662c3520282e6f5717214004a7f26888.png',
				tags: ['tokens']
			},
			{
				symbol: 'AGA',
				name: 'AGA Token',
				decimals: 4,
				address: '0x033d942a6b495c4071083f4cde1f17e986fe856c',
				logoURI: 'https://tokens.1inch.io/0x2d80f5f5328fdcb6eceb7cacf5dd8aedaec94e20.png',
				tags: ['tokens']
			},
			{
				symbol: 'AGAr',
				name: 'AGA Rewards',
				decimals: 8,
				address: '0xf84bd51eab957c2e7b7d646a3427c5a50848281d',
				logoURI: 'https://tokens.1inch.io/0xb453f1f2ee776daf2586501361c457db70e1ca0f.png',
				tags: ['tokens']
			},
			{
				symbol: 'ARIA20',
				name: 'ARIANEE',
				decimals: 18,
				address: '0x46f48fbdedaa6f5500993bede9539ef85f4bee8e',
				logoURI: 'https://tokens.1inch.io/0x46f48fbdedaa6f5500993bede9539ef85f4bee8e.png',
				tags: ['tokens']
			},
			{
				symbol: 'AZUKI',
				name: 'DokiDokiAzuki',
				decimals: 18,
				address: '0x7cdc0421469398e0f3aa8890693d86c840ac8931',
				logoURI: 'https://tokens.1inch.io/0x910524678c0b1b23ffb9285a81f99c29c11cbaed.png',
				tags: ['tokens']
			},
			{
				symbol: 'CEL',
				name: 'Celsius',
				decimals: 4,
				address: '0xd85d1e945766fea5eda9103f918bd915fbca63e6',
				logoURI: 'https://tokens.1inch.io/0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d.png',
				tags: ['tokens']
			},
			{
				symbol: 'DMT',
				name: 'Dark Matter Token',
				decimals: 18,
				address: '0xd28449bb9bb659725accad52947677cce3719fd7',
				logoURI: 'https://tokens.1inch.io/0xd28449bb9bb659725accad52947677cce3719fd7.png',
				tags: ['tokens']
			},
			{
				symbol: 'ETH',
				name: 'Ether',
				decimals: 18,
				address: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
				logoURI: 'https://tokens.1inch.io/0x7ceb23fd6bc0add59e62ac25578270cff1b9f619.png',
				tags: ['tokens']
			},
			{
				symbol: 'GHST',
				name: 'Aavegotchi GHST Token',
				decimals: 18,
				address: '0x385eeac5cb85a38a9a07a70c73e0a3271cfb54a7',
				logoURI: 'https://tokens.1inch.io/0x3f382dbd960e3a9bbceae22651e88158d2791550.png',
				tags: ['tokens']
			},
			{
				symbol: 'HEX',
				name: 'HEXX',
				decimals: 8,
				address: '0x23d29d30e35c5e8d321e1dc9a8a61bfd846d4c5c',
				logoURI: 'https://tokens.1inch.io/0x2b591e99afe9f32eaa6214f7b7629768c40eeb39.png',
				tags: ['tokens']
			},
			{
				symbol: 'IGG',
				name: 'IG Gold',
				decimals: 6,
				address: '0xe6fc6c7cb6d2c31b359a49a33ef08ab87f4de7ce',
				logoURI: 'https://tokens.1inch.io/0xe6fc6c7cb6d2c31b359a49a33ef08ab87f4de7ce.png',
				tags: ['tokens']
			},
			{
				symbol: 'MONA',
				name: 'Monavale',
				decimals: 18,
				address: '0x6968105460f67c3bf751be7c15f92f5286fd0ce5',
				logoURI: 'https://tokens.1inch.io/0x275f5ad03be0fa221b4c6649b8aee09a42d9412a.png',
				tags: ['tokens']
			},
			{
				symbol: 'OM',
				name: 'OM',
				decimals: 18,
				address: '0xc3ec80343d2bae2f8e680fdadde7c17e71e114ea',
				logoURI: 'https://tokens.1inch.io/0x3593d125a4f7849a1b059e64f4517a86dd60c95d.png',
				tags: ['tokens']
			},
			{
				symbol: 'PICKLE',
				name: 'PickleToken',
				decimals: 18,
				address: '0x2b88ad57897a8b496595925f43048301c37615da',
				logoURI: 'https://tokens.1inch.io/0x429881672b9ae42b8eba0e26cd9c73711b891ca5.png',
				tags: ['tokens']
			},
			{
				symbol: 'PPDEX',
				name: 'Pepedex',
				decimals: 18,
				address: '0x127984b5e6d5c59f81dacc9f1c8b3bdc8494572e',
				logoURI: 'https://tokens.1inch.io/0x127984b5e6d5c59f81dacc9f1c8b3bdc8494572e.png',
				tags: ['tokens']
			},
			{
				symbol: 'SDT',
				name: 'Stake DAO Token',
				decimals: 18,
				address: '0x361a5a4993493ce00f61c32d4ecca5512b82ce90',
				logoURI: 'https://tokens.1inch.io/0x73968b9a57c6e53d41345fd57a6e6ae27d6cdb2f.png',
				tags: ['tokens']
			},
			{
				symbol: 'SUSHI',
				name: 'SushiToken',
				decimals: 18,
				address: '0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a',
				logoURI: 'https://tokens.1inch.io/0x6b3595068778dd592e39a122f4f5a5cf09c90fe2.png',
				tags: ['tokens']
			},
			{
				symbol: 'SX',
				name: 'SportX',
				decimals: 18,
				address: '0x840195888db4d6a99ed9f73fcd3b225bb3cb1a79',
				logoURI: 'https://tokens.1inch.io/0x99fe3b1391503a1bc1788051347a1324bff41452.png',
				tags: ['tokens']
			},
			{
				symbol: 'VISION',
				name: 'Vision Token',
				decimals: 18,
				address: '0x034b2090b579228482520c589dbd397c53fc51cc',
				logoURI: 'https://tokens.1inch.io/0x034b2090b579228482520c589dbd397c53fc51cc.png',
				tags: ['tokens']
			},
			{
				symbol: 'WISE',
				name: 'Wise Token',
				decimals: 18,
				address: '0xb77e62709e39ad1cbeebe77cf493745aec0f453a',
				logoURI: 'https://tokens.1inch.io/0x66a0f676479cee1d7373f3dc2e2952778bff5bd6.png',
				tags: ['tokens']
			},
			{
				symbol: 'WOLF',
				name: 'moonwolf.io',
				decimals: 9,
				address: '0x8f18dc399594b451eda8c5da02d0563c0b2d0f16',
				logoURI: 'https://tokens.1inch.io/0x8f18dc399594b451eda8c5da02d0563c0b2d0f16.png',
				isFoT: true,
				tags: ['tokens']
			},
			{
				symbol: 'iFARM',
				name: 'iFARM',
				decimals: 18,
				address: '0xab0b2ddb9c7e440fac8e140a89c0dbcbf2d7bbff',
				logoURI: 'https://tokens.1inch.io/0xa0246c9032bc3a600820415ae600c6388619a14d.png',
				tags: ['tokens']
			},
			{
				symbol: 'mOCEAN',
				name: 'Ocean Token',
				decimals: 18,
				address: '0x282d8efce846a88b159800bd4130ad77443fa1a1',
				logoURI: 'https://tokens.1inch.io/0x967da4048cd07ab37855c090aaf366e4ce1b9f48.png',
				tags: ['tokens']
			},
			{
				symbol: 'ANY',
				name: 'Anyswap',
				decimals: 18,
				address: '0x6ab6d61428fde76768d7b45d8bfeec19c6ef91a8',
				logoURI: 'https://tokens.1inch.io/0xf99d58e463a2e07e5692127302c20a191861b4d6.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'GFARM2',
				name: 'Gains V2',
				decimals: 18,
				address: '0x7075cab6bcca06613e2d071bd918d1a0241379e2',
				logoURI: 'https://tokens.1inch.io/0x7075cab6bcca06613e2d071bd918d1a0241379e2.png',
				tags: ['tokens']
			},
			{
				symbol: 'Krill',
				name: 'Krill',
				decimals: 18,
				address: '0x05089c9ebffa4f0aca269e32056b1b36b37ed71b',
				logoURI: 'https://tokens.1inch.io/0x05089c9ebffa4f0aca269e32056b1b36b37ed71b.png',
				tags: ['tokens']
			},
			{
				symbol: 'PLOT',
				name: 'PLOT',
				decimals: 18,
				address: '0xe82808eaa78339b06a691fd92e1be79671cad8d3',
				logoURI: 'https://tokens.1inch.io/0x72f020f8f3e8fd9382705723cd26380f8d0c66bb.png',
				tags: ['tokens']
			},
			{
				symbol: 'TEL',
				name: 'Telcoin',
				decimals: 2,
				address: '0xdf7837de1f2fa4631d716cf2502f8b230f1dcc32',
				logoURI: 'https://tokens.1inch.io/0x467bccd9d29f223bce8043b84e8c8b282827790f.png',
				tags: ['tokens']
			},
			{
				symbol: 'amUSDC',
				name: 'Aave Matic Market USDC',
				decimals: 6,
				address: '0x1a13f4ca1d028320a707d99520abfefca3998b7f',
				logoURI: 'https://tokens.1inch.io/0xbcca60bb61934080951369a648fb03df4f96263c.png',
				eip2612: true,
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'amUSDT',
				name: 'Aave Matic Market USDT',
				decimals: 6,
				address: '0x60d55f02a771d515e077c9c2403a1ef324885cec',
				logoURI: 'https://tokens.1inch.io/0x3ed3b47dd13ec9a98b44e6204a523e766b225811.png',
				eip2612: true,
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'amWBTC',
				name: 'Aave Matic Market WBTC',
				decimals: 8,
				address: '0x5c2ed810328349100a66b82b78a1791b101c9d61',
				logoURI: 'https://tokens.1inch.io/0x9ff58f4ffb29fa2266ab25e75e2a8b3503311656.png',
				eip2612: true,
				tags: ['tokens', 'PEG:BTC']
			},
			{
				symbol: 'amWETH',
				name: 'Aave Matic Market WETH',
				decimals: 18,
				address: '0x28424507fefb6f7f8e9d3860f56504e4e5f5f390',
				logoURI: 'https://tokens.1inch.io/0x030ba81f1c18d280636f32af80b9aad02cf0854e.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'amWMATIC',
				name: 'Aave Matic Market WMATIC',
				decimals: 18,
				address: '0x8df3aad3a84da6b69a4da8aec3ea40d9091b2ac4',
				logoURI: 'https://tokens.1inch.io/0x8df3aad3a84da6b69a4da8aec3ea40d9091b2ac4.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'amAAVE',
				name: 'Aave Matic Market AAVE',
				decimals: 18,
				address: '0x1d2a0e5ec8e5bbdca5cb219e649b565d8e5c3360',
				logoURI: 'https://tokens.1inch.io/0xffc97d72e13e01096502cb8eb52dee56f74dad7b.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'amDAI',
				name: 'Aave Matic Market DAI',
				decimals: 18,
				address: '0x27f8d03b3a2196956ed754badc28d73be8830a6e',
				logoURI: 'https://tokens.1inch.io/0x028171bca77440897b824ca71d1c56cac55b68a3.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'CRV',
				name: 'CRV',
				decimals: 18,
				address: '0x172370d5cd63279efa6d502dab29171933a610af',
				logoURI: 'https://tokens.1inch.io/0xd533a949740bb3306d119cc777fa900ba034cd52.png',
				tags: ['tokens']
			},
			{
				symbol: 'BIFI',
				name: 'beefy.finance',
				decimals: 18,
				address: '0xfbdd194376de19a88118e84e279b977f165d01b8',
				logoURI: 'https://tokens.1inch.io/0xca3f508b8e4dd382ee878a314789373d80a5190a.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'FISH',
				name: 'Fish',
				decimals: 18,
				address: '0x3a3df212b7aa91aa0402b9035b098891d276572b',
				logoURI: 'https://tokens.1inch.io/0x3a3df212b7aa91aa0402b9035b098891d276572b.png',
				tags: ['tokens']
			},
			{
				symbol: 'PolyDoge',
				name: 'PolyDoge',
				decimals: 18,
				address: '0x8a953cfe442c5e8855cc6c61b1293fa648bae472',
				logoURI: 'https://tokens.1inch.io/0x8a953cfe442c5e8855cc6c61b1293fa648bae472.png',
				tags: ['tokens']
			},
			{
				symbol: 'IRON',
				name: 'IRON Stablecoin',
				decimals: 18,
				address: '0xd86b5923f3ad7b585ed81b448170ae026c65ae9a',
				logoURI: 'https://tokens.1inch.io/0xd86b5923f3ad7b585ed81b448170ae026c65ae9a.png',
				tags: ['tokens']
			},
			{
				symbol: 'TITAN',
				name: 'IRON Titanium Token',
				decimals: 18,
				address: '0xaaa5b9e6c589642f98a1cda99b9d024b8407285a',
				logoURI: 'https://tokens.1inch.io/0xaaa5b9e6c589642f98a1cda99b9d024b8407285a.png',
				tags: ['tokens']
			},
			{
				symbol: 'DFYN',
				name: 'DFYN Token',
				decimals: 18,
				address: '0xc168e40227e4ebd8c1cae80f7a55a4f0e6d66c97',
				logoURI: 'https://tokens.1inch.io/0xc168e40227e4ebd8c1cae80f7a55a4f0e6d66c97.png',
				tags: ['tokens']
			},
			{
				symbol: 'WOO',
				name: 'Wootrade Network',
				decimals: 18,
				address: '0x1b815d120b3ef02039ee11dc2d33de7aa4a8c603',
				logoURI: 'https://tokens.1inch.io/0x1b815d120b3ef02039ee11dc2d33de7aa4a8c603.png',
				tags: ['tokens']
			},
			{
				symbol: 'WEXpoly',
				name: 'WaultSwap Polygon',
				decimals: 18,
				address: '0x4c4bf319237d98a30a929a96112effa8da3510eb',
				logoURI: 'https://tokens.1inch.io/0x4c4bf319237d98a30a929a96112effa8da3510eb.png',
				tags: ['tokens']
			},
			{
				symbol: 'QI',
				name: 'Qi Dao',
				decimals: 18,
				address: '0x580a84c73811e1839f75d86d75d88cca0c241ff4',
				logoURI: 'https://tokens.1inch.io/0x580a84c73811e1839f75d86d75d88cca0c241ff4.png',
				tags: ['tokens']
			},
			{
				symbol: 'miMATIC',
				name: 'miMATIC',
				decimals: 18,
				address: '0xa3fa99a148fa48d14ed51d610c367c61876997f1',
				logoURI: 'https://tokens.1inch.io/0xa3fa99a148fa48d14ed51d610c367c61876997f1.png',
				tags: ['tokens']
			},
			{
				symbol: 'OMEN',
				name: 'Augury Finance',
				decimals: 18,
				address: '0x76e63a3e7ba1e2e61d3da86a87479f983de89a7e',
				logoURI: 'https://tokens.1inch.io/0x76e63a3e7ba1e2e61d3da86a87479f983de89a7e.png',
				tags: ['tokens']
			},
			{
				symbol: 'KNC',
				name: 'Kyber Network Crystal v2',
				decimals: 18,
				address: '0x1c954e8fe737f99f68fa1ccda3e51ebdb291948c',
				logoURI: 'https://tokens.1inch.io/0x1c954e8fe737f99f68fa1ccda3e51ebdb291948c.png',
				tags: ['tokens']
			},
			{
				symbol: 'BAL',
				name: 'Balancer',
				decimals: 18,
				address: '0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3',
				logoURI: 'https://tokens.1inch.io/0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3.png',
				tags: ['tokens']
			},
			{
				symbol: 'ICE_1',
				name: 'Iron Finance ICE Token',
				decimals: 18,
				address: '0x4a81f8796e0c6ad4877a51c86693b0de8093f2ef',
				logoURI: 'https://tokens.1inch.io/0x4a81f8796e0c6ad4877a51c86693b0de8093f2ef.png',
				displayedSymbol: 'ICE',
				tags: ['tokens']
			},
			{
				symbol: 'PAPR',
				name: 'PAPR',
				decimals: 18,
				address: '0xfbe49330e7b9f58a822788f86c1be38ab902bab1',
				logoURI: 'https://tokens.1inch.io/0xfbe49330e7b9f58a822788f86c1be38ab902bab1.png',
				tags: ['tokens']
			},
			{
				symbol: 'ETHA',
				name: 'ETHA',
				decimals: 18,
				address: '0x59e9261255644c411afdd00bd89162d09d862e38',
				logoURI: 'https://tokens.1inch.io/0x59e9261255644c411afdd00bd89162d09d862e38.png',
				tags: ['tokens']
			},
			{
				symbol: 'ADDY',
				name: 'Adamant',
				decimals: 18,
				address: '0xc3fdbadc7c795ef1d6ba111e06ff8f16a20ea539',
				logoURI: 'https://tokens.1inch.io/0xc3fdbadc7c795ef1d6ba111e06ff8f16a20ea539.png',
				tags: ['tokens']
			},
			{
				symbol: 'UST',
				name: 'Wrapped UST Token (PoS)',
				decimals: 18,
				address: '0x692597b009d13c4049a947cab2239b7d6517875f',
				logoURI: 'https://tokens.1inch.io/0x692597b009d13c4049a947cab2239b7d6517875f.png',
				tags: ['tokens']
			},
			{
				symbol: 'SNK',
				name: 'Snook',
				decimals: 18,
				address: '0x689f8e5913c158ffb5ac5aeb83b3c875f5d20309',
				logoURI: 'https://tokens.1inch.io/0x689f8e5913c158ffb5ac5aeb83b3c875f5d20309.png',
				tags: ['tokens']
			},
			{
				symbol: 'IRIS',
				name: 'Iris',
				decimals: 18,
				address: '0xdab35042e63e93cc8556c9bae482e5415b5ac4b1',
				logoURI: 'https://tokens.1inch.io/0xdab35042e63e93cc8556c9bae482e5415b5ac4b1.png',
				tags: ['tokens']
			},
			{
				symbol: 'xUSD',
				name: 'xDollar Stablecoin',
				decimals: 18,
				address: '0x3a3e7650f8b9f667da98f236010fbf44ee4b2975',
				logoURI: 'https://tokens.1inch.io/0x3a3e7650f8b9f667da98f236010fbf44ee4b2975.png',
				eip2612: true,
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'KOGECOIN',
				name: 'kogecoin.io',
				decimals: 9,
				address: '0x13748d548d95d78a3c83fe3f32604b4796cffa23',
				logoURI: 'https://tokens.1inch.io/0x13748d548d95d78a3c83fe3f32604b4796cffa23.png',
				tags: ['tokens']
			},
			{
				symbol: 'EURS',
				name: 'STASIS EURS Token (PoS)',
				decimals: 2,
				address: '0xe111178a87a3bff0c8d18decba5798827539ae99',
				logoURI: 'https://tokens.1inch.io/0xe111178a87a3bff0c8d18decba5798827539ae99.png',
				tags: ['tokens']
			},
			{
				symbol: '1FLR',
				name: 'Flare Token',
				decimals: 18,
				address: '0x5f0197ba06860dac7e31258bdf749f92b6a636d4',
				logoURI: 'https://tokens.1inch.io/0x5f0197ba06860dac7e31258bdf749f92b6a636d4.png',
				tags: ['tokens']
			},
			{
				symbol: 'APW',
				name: 'APWine Token (PoS)',
				decimals: 18,
				address: '0x6c0ab120dbd11ba701aff6748568311668f63fe0',
				logoURI: 'https://tokens.1inch.io/0x4104b135dbc9609fc1a9490e61369036497660c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'DHT',
				name: 'dHedge DAO Token (PoS)',
				decimals: 18,
				address: '0x8c92e38eca8210f4fcbf17f0951b198dd7668292',
				logoURI: 'https://tokens.1inch.io/0x8c92e38eca8210f4fcbf17f0951b198dd7668292.png',
				tags: ['tokens']
			},
			{
				symbol: 'NACHO',
				name: 'NACHO',
				decimals: 18,
				address: '0xcd86152047e800d67bdf00a4c635a8b6c0e5c4c2',
				logoURI: 'https://tokens.1inch.io/0xcd86152047e800d67bdf00a4c635a8b6c0e5c4c2.png',
				tags: ['tokens']
			},
			{
				symbol: 'INST',
				name: 'Instadapp (PoS)',
				decimals: 18,
				address: '0xf50d05a1402d0adafa880d36050736f9f6ee7dee',
				logoURI: 'https://tokens.1inch.io/0xf50d05a1402d0adafa880d36050736f9f6ee7dee.png',
				tags: ['tokens']
			},
			{
				symbol: 'WIXS',
				name: 'Wrapped Ixs Token',
				decimals: 18,
				address: '0x1ba17c639bdaecd8dc4aac37df062d17ee43a1b8',
				logoURI: 'https://tokens.1inch.io/0x1ba17c639bdaecd8dc4aac37df062d17ee43a1b8.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'agEUR',
				name: 'agEUR',
				decimals: 18,
				address: '0xe0b52e49357fd4daf2c15e02058dce6bc0057db4',
				logoURI: 'https://tokens.1inch.io/0xe0b52e49357fd4daf2c15e02058dce6bc0057db4.png',
				tags: ['tokens']
			},
			{
				symbol: 'NFTI',
				name: 'Scalara NFT Index (PoS)',
				decimals: 18,
				address: '0xc75ea0c71023c14952f3c7b9101ecbbaa14aa27a',
				logoURI: 'https://tokens.1inch.io/0xc75ea0c71023c14952f3c7b9101ecbbaa14aa27a.png',
				tags: ['tokens']
			},
			{
				symbol: 'deUSDC',
				name: 'deBridge USD Coin',
				decimals: 6,
				address: '0x1ddcaa4ed761428ae348befc6718bcb12e63bfaa',
				logoURI: 'https://tokens.1inch.io/0x1ddcaa4ed761428ae348befc6718bcb12e63bfaa_2.png',
				eip2612: true,
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'FRAX',
				name: 'Frax',
				decimals: 18,
				address: '0x45c32fa6df82ead1e2ef74d17b76547eddfaff89',
				logoURI: 'https://tokens.1inch.io/0x45c32fa6df82ead1e2ef74d17b76547eddfaff89.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'FODL',
				name: 'Fodl (PoS)',
				decimals: 18,
				address: '0x5314ba045a459f63906aa7c76d9f337dcb7d6995',
				logoURI: 'https://tokens.1inch.io/0x5314ba045a459f63906aa7c76d9f337dcb7d6995.png',
				tags: ['tokens']
			},
			{
				symbol: 'REQ',
				name: 'Request',
				decimals: 18,
				address: '0xb25e20de2f2ebb4cffd4d16a55c7b395e8a94762',
				logoURI: 'https://tokens.1inch.io/0xb25e20de2f2ebb4cffd4d16a55c7b395e8a94762.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'CHP',
				name: 'CoinPoker Chips (PoS)',
				decimals: 18,
				address: '0x59b5654a17ac44f3068b3882f298881433bb07ef',
				logoURI: 'https://tokens.1inch.io/0x59b5654a17ac44f3068b3882f298881433bb07ef.png',
				tags: ['tokens']
			},
			{
				symbol: 'ABI',
				name: 'Abachi',
				decimals: 9,
				address: '0x6d5f5317308c6fe7d6ce16930353a8dfd92ba4d7',
				logoURI: 'https://tokens.1inch.io/0x6d5f5317308c6fe7d6ce16930353a8dfd92ba4d7.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'NFTY',
				name: 'NFTY Token',
				decimals: 18,
				address: '0x8623e66bea0dce41b6d47f9c44e806a115babae0',
				logoURI: 'https://tokens.1inch.io/0x8623e66bea0dce41b6d47f9c44e806a115babae0.png',
				tags: ['tokens']
			},
			{
				symbol: 'RIOT',
				name: 'RIOT (PoS)',
				decimals: 18,
				address: '0x4ff0b68abc2b9e4e1401e9b691dba7d66b264ac8',
				logoURI: 'https://tokens.1inch.io/0x4ff0b68abc2b9e4e1401e9b691dba7d66b264ac8.png',
				tags: ['tokens']
			},
			{
				symbol: 'SWASH',
				name: 'Swash Token',
				decimals: 18,
				address: '0xba3cb8329d442e6f9eb70fafe1e214251df3d275',
				logoURI: 'https://tokens.1inch.io/0xba3cb8329d442e6f9eb70fafe1e214251df3d275.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'VSQ',
				name: 'VSQ',
				decimals: 9,
				address: '0x29f1e986fca02b7e54138c04c4f503dddd250558',
				logoURI: 'https://tokens.1inch.io/0x29f1e986fca02b7e54138c04c4f503dddd250558.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'ORE',
				name: 'pTokens ORE (PoS)',
				decimals: 18,
				address: '0xd52f6ca48882be8fbaa98ce390db18e1dbe1062d',
				logoURI: 'https://tokens.1inch.io/0xd52f6ca48882be8fbaa98ce390db18e1dbe1062d.png',
				tags: ['tokens']
			},
			{
				symbol: 'FNC',
				name: 'Fancy Games',
				decimals: 18,
				address: '0x7f280dac515121dcda3eac69eb4c13a52392cace',
				logoURI: 'https://tokens.1inch.io/0x7f280dac515121dcda3eac69eb4c13a52392cace.png',
				tags: ['tokens']
			},
			{
				symbol: 'ETH2x-FLI-P',
				name: 'ETH 2x Flexible Leverage Index',
				decimals: 18,
				address: '0x3ad707da309f3845cd602059901e39c4dcd66473',
				logoURI: 'https://tokens.1inch.io/0x3ad707da309f3845cd602059901e39c4dcd66473.png',
				tags: ['tokens']
			},
			{
				symbol: 'ELK',
				name: 'Elk',
				decimals: 18,
				address: '0xeeeeeb57642040be42185f49c52f7e9b38f8eeee',
				logoURI: 'https://tokens.1inch.io/0xeeeeeb57642040be42185f49c52f7e9b38f8eeee.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'cxETH',
				name: 'CelsiusX Wrapped ETH',
				decimals: 18,
				address: '0xfe4546fefe124f30788c4cc1bb9aa6907a7987f9',
				logoURI: 'https://tokens.1inch.io/0xfe4546fefe124f30788c4cc1bb9aa6907a7987f9.png',
				tags: ['tokens']
			},
			{
				symbol: 'GENE',
				name: 'GenomesDAO (PoS)',
				decimals: 18,
				address: '0x34667ed7c36cbbbf2d5d5c5c8d6eb76a094edb9f',
				logoURI: 'https://tokens.1inch.io/0x34667ed7c36cbbbf2d5d5c5c8d6eb76a094edb9f.png',
				tags: ['tokens']
			},
			{
				symbol: 'PGX',
				name: 'Pegaxy Stone',
				decimals: 18,
				address: '0xc1c93d475dc82fe72dbc7074d55f5a734f8ceeae',
				logoURI: 'https://tokens.1inch.io/0xc1c93d475dc82fe72dbc7074d55f5a734f8ceeae.png',
				tags: ['tokens']
			},
			{
				symbol: 'IXT',
				name: 'PlanetIX',
				decimals: 18,
				address: '0xe06bd4f5aac8d0aa337d13ec88db6defc6eaeefe',
				logoURI: 'https://tokens.1inch.io/0xe06bd4f5aac8d0aa337d13ec88db6defc6eaeefe.png',
				tags: ['tokens']
			},
			{
				symbol: 'SAND',
				name: 'SAND',
				decimals: 18,
				address: '0xbbba073c31bf03b8acf7c28ef0738decf3695683',
				logoURI: 'https://tokens.1inch.io/0xbbba073c31bf03b8acf7c28ef0738decf3695683.png',
				tags: ['tokens']
			},
			{
				symbol: 'ICE_2',
				name: 'Decentral Games ICE',
				decimals: 18,
				address: '0xc6c855ad634dcdad23e64da71ba85b8c51e5ad7c',
				logoURI: 'https://tokens.1inch.io/0xc6c855ad634dcdad23e64da71ba85b8c51e5ad7c.png',
				displayedSymbol: 'ICE',
				tags: ['tokens']
			},
			{
				symbol: 'SNX',
				name: 'Synthetix Network Token (PoS)',
				decimals: 18,
				address: '0x50b728d8d964fd00c2d0aad81718b71311fef68a',
				logoURI: 'https://tokens.1inch.io/0x50b728d8d964fd00c2d0aad81718b71311fef68a.png',
				tags: ['tokens']
			},
			{
				symbol: 'BLOK',
				name: 'BLOK',
				decimals: 18,
				address: '0x229b1b6c23ff8953d663c4cbb519717e323a0a84',
				logoURI: 'https://tokens.1inch.io/0x229b1b6c23ff8953d663c4cbb519717e323a0a84.png',
				tags: ['tokens']
			},
			{
				symbol: 'FYN',
				name: 'Affyn',
				decimals: 18,
				address: '0x3b56a704c01d650147ade2b8cee594066b3f9421',
				logoURI: 'https://tokens.1inch.io/0x3b56a704c01d650147ade2b8cee594066b3f9421.png',
				tags: ['tokens']
			},
			{
				symbol: 'KLIMA',
				name: 'Klima DAO',
				decimals: 9,
				address: '0x4e78011ce80ee02d2c3e649fb657e45898257815',
				logoURI: 'https://tokens.1inch.io/0x4e78011ce80ee02d2c3e649fb657e45898257815.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'AVAX',
				name: 'Avalanche Token',
				decimals: 18,
				address: '0x2c89bbc92bd86f8075d1decc58c7f4e0107f286b',
				logoURI: 'https://tokens.1inch.io/0x2c89bbc92bd86f8075d1decc58c7f4e0107f286b.png',
				tags: ['tokens']
			},
			{
				symbol: 'ROUTE (PoS)',
				name: 'Route',
				decimals: 18,
				address: '0x16eccfdbb4ee1a85a33f3a9b21175cd7ae753db4',
				logoURI: 'https://tokens.1inch.io/0x16eccfdbb4ee1a85a33f3a9b21175cd7ae753db4.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'DG',
				name: 'Decentral Games (PoS)',
				decimals: 18,
				address: '0xef938b6da8576a896f6e0321ef80996f4890f9c4',
				logoURI: 'https://tokens.1inch.io/0xef938b6da8576a896f6e0321ef80996f4890f9c4.png',
				tags: ['tokens']
			},
			{
				symbol: 'TOWER',
				name: 'TOWER',
				decimals: 18,
				address: '0x2bc07124d8dac638e290f401046ad584546bc47b',
				logoURI: 'https://tokens.1inch.io/0x2bc07124d8dac638e290f401046ad584546bc47b.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'KASTA',
				name: 'KastaToken',
				decimals: 18,
				address: '0x235737dbb56e8517391473f7c964db31fa6ef280',
				logoURI: 'https://tokens.1inch.io/0x235737dbb56e8517391473f7c964db31fa6ef280.png',
				tags: ['tokens']
			},
			{
				symbol: 'DERC',
				name: 'DeRace Token',
				decimals: 18,
				address: '0xb35fcbcf1fd489fce02ee146599e893fdcdc60e6',
				logoURI: 'https://tokens.1inch.io/0xb35fcbcf1fd489fce02ee146599e893fdcdc60e6.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'STACK',
				name: 'StackOS',
				decimals: 18,
				address: '0x980111ae1b84e50222c8843e3a7a038f36fecd2b',
				logoURI: 'https://tokens.1inch.io/0x980111ae1b84e50222c8843e3a7a038f36fecd2b.png',
				tags: ['tokens']
			},
			{
				symbol: 'PLA',
				name: 'PlayDapp Token (PoS)',
				decimals: 18,
				address: '0x8765f05adce126d70bcdf1b0a48db573316662eb',
				logoURI: 'https://tokens.1inch.io/0x8765f05adce126d70bcdf1b0a48db573316662eb.png',
				tags: ['tokens']
			},
			{
				symbol: 'MSU',
				name: 'MetaSoccer Universe',
				decimals: 18,
				address: '0xe8377a076adabb3f9838afb77bee96eac101ffb1',
				logoURI: 'https://tokens.1inch.io/0xe8377a076adabb3f9838afb77bee96eac101ffb1.png',
				tags: ['tokens']
			},
			{
				symbol: 'BANANA',
				name: 'ApeSwapFinance Banana',
				decimals: 18,
				address: '0x5d47baba0d66083c52009271faf3f50dcc01023c',
				logoURI: 'https://tokens.1inch.io/0x5d47baba0d66083c52009271faf3f50dcc01023c.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'TRY',
				name: 'TryHards',
				decimals: 18,
				address: '0xefee2de82343be622dcb4e545f75a3b9f50c272d',
				logoURI: 'https://tokens.1inch.io/0xefee2de82343be622dcb4e545f75a3b9f50c272d.png',
				tags: ['tokens']
			},
			{
				symbol: 'VOXEL',
				name: 'VOXEL Token',
				decimals: 18,
				address: '0xd0258a3fd00f38aa8090dfee343f10a9d4d30d3f',
				logoURI: 'https://tokens.1inch.io/0xd0258a3fd00f38aa8090dfee343f10a9d4d30d3f.png',
				tags: ['tokens']
			},
			{
				symbol: 'GAIA',
				name: 'GAIA Everworld',
				decimals: 18,
				address: '0x723b17718289a91af252d616de2c77944962d122',
				logoURI: 'https://tokens.1inch.io/0x723b17718289a91af252d616de2c77944962d122.png',
				tags: ['tokens']
			},
			{
				symbol: 'MV',
				name: 'Metaverse (PoS)',
				decimals: 18,
				address: '0xa3c322ad15218fbfaed26ba7f616249f7705d945',
				logoURI: 'https://tokens.1inch.io/0xa3c322ad15218fbfaed26ba7f616249f7705d945.png',
				tags: ['tokens']
			},
			{
				symbol: 'gOHM',
				name: 'Governance OHM',
				decimals: 18,
				address: '0xd8ca34fd379d9ca3c6ee3b3905678320f5b45195',
				logoURI: 'https://tokens.1inch.io/0xd8ca34fd379d9ca3c6ee3b3905678320f5b45195.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: '$ANRX',
				name: 'AnRKey X (PoS)',
				decimals: 18,
				address: '0x554f074d9ccda8f483d1812d4874cbebd682644e',
				logoURI: 'https://tokens.1inch.io/0x554f074d9ccda8f483d1812d4874cbebd682644e.png',
				tags: ['tokens']
			},
			{
				symbol: 'CHAMP',
				name: 'NFT Champions',
				decimals: 8,
				address: '0x8f9e8e833a69aa467e42c46cca640da84dd4585f',
				logoURI: 'https://tokens.1inch.io/0x8f9e8e833a69aa467e42c46cca640da84dd4585f.png',
				tags: ['tokens']
			},
			{
				symbol: 'KOM',
				name: 'Kommunitas',
				decimals: 8,
				address: '0xc004e2318722ea2b15499d6375905d75ee5390b8',
				logoURI: 'https://tokens.1inch.io/0xc004e2318722ea2b15499d6375905d75ee5390b8.png',
				tags: ['tokens']
			},
			{
				symbol: 'PSP',
				name: 'ParaSwap (PoS)',
				decimals: 18,
				address: '0x42d61d766b85431666b39b89c43011f24451bff6',
				logoURI: 'https://tokens.1inch.io/0x42d61d766b85431666b39b89c43011f24451bff6.png',
				tags: ['tokens']
			},
			{
				symbol: 'GNS',
				name: 'Gains Network',
				decimals: 18,
				address: '0xe5417af564e4bfda1c483642db72007871397896',
				logoURI: 'https://tokens.1inch.io/0xe5417af564e4bfda1c483642db72007871397896.png',
				tags: ['tokens']
			},
			{
				symbol: 'FRM',
				name: 'Ferrum Network Token',
				decimals: 18,
				address: '0xd99bafe5031cc8b345cb2e8c80135991f12d7130',
				logoURI: 'https://tokens.1inch.io/0xd99bafe5031cc8b345cb2e8c80135991f12d7130.png',
				tags: ['tokens']
			},
			{
				symbol: 'REVV',
				name: 'REVV',
				decimals: 18,
				address: '0x70c006878a5a50ed185ac4c87d837633923de296',
				logoURI: 'https://tokens.1inch.io/0x70c006878a5a50ed185ac4c87d837633923de296.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'NXTT',
				name: 'NextEarthToken',
				decimals: 18,
				address: '0x0d0b8488222f7f83b23e365320a4021b12ead608',
				logoURI: 'https://tokens.1inch.io/0x0d0b8488222f7f83b23e365320a4021b12ead608.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'GFC',
				name: 'GCOIN',
				decimals: 18,
				address: '0x071ac29d569a47ebffb9e57517f855cb577dcc4c',
				logoURI: 'https://tokens.1inch.io/0x071ac29d569a47ebffb9e57517f855cb577dcc4c.png',
				tags: ['tokens']
			},
			{
				symbol: 'USD+',
				name: 'USD+',
				decimals: 6,
				address: '0x236eec6359fb44cce8f97e99387aa7f8cd5cde1f',
				logoURI: 'https://tokens.1inch.io/0x236eec6359fb44cce8f97e99387aa7f8cd5cde1f.png',
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'ICE_3',
				name: 'IceToken',
				decimals: 18,
				address: '0x4e1581f01046efdd7a1a2cdb0f82cdd7f71f2e59',
				logoURI: 'https://tokens.1inch.io/0x4e1581f01046efdd7a1a2cdb0f82cdd7f71f2e59.png',
				eip2612: true,
				displayedSymbol: 'ICE',
				tags: ['tokens']
			},
			{
				symbol: 'BCMC',
				name: 'Blockchain Monster Coin',
				decimals: 18,
				address: '0xc10358f062663448a3489fc258139944534592ac',
				logoURI: 'https://tokens.1inch.io/0xc10358f062663448a3489fc258139944534592ac.png',
				tags: ['tokens']
			},
			{
				symbol: 'UM',
				name: 'Continuum',
				decimals: 18,
				address: '0x3b1a0c9252ee7403093ff55b4a5886d49a3d837a',
				logoURI: 'https://tokens.1inch.io/0x3b1a0c9252ee7403093ff55b4a5886d49a3d837a.png',
				tags: ['tokens']
			},
			{
				symbol: 'GMEE',
				name: 'GAMEE',
				decimals: 18,
				address: '0xcf32822ff397ef82425153a9dcb726e5ff61dca7',
				logoURI: 'https://tokens.1inch.io/0xcf32822ff397ef82425153a9dcb726e5ff61dca7.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'USDC',
				name: 'USD Coin (PoS)',
				decimals: 6,
				address: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
				logoURI: 'https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png',
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'DFX',
				name: 'DFX Token (PoS)',
				decimals: 18,
				address: '0xe7804d91dfcde7f776c90043e03eaa6df87e6395',
				logoURI: 'https://tokens.1inch.io/0xe7804d91dfcde7f776c90043e03eaa6df87e6395.png',
				tags: ['tokens']
			},
			{
				symbol: 'MCO2',
				name: 'Moss Carbon Credit (PoS)',
				decimals: 18,
				address: '0xaa7dbd1598251f856c12f63557a4c4397c253cea',
				logoURI: 'https://tokens.1inch.io/0xaa7dbd1598251f856c12f63557a4c4397c253cea.png',
				tags: ['tokens']
			},
			{
				symbol: 'WELT',
				name: 'FABWELT',
				decimals: 18,
				address: '0x23e8b6a3f6891254988b84da3738d2bfe5e703b9',
				logoURI: 'https://tokens.1inch.io/0x23e8b6a3f6891254988b84da3738d2bfe5e703b9.png',
				tags: ['tokens']
			},
			{
				symbol: 'MVI',
				name: 'Metaverse Index (PoS)',
				decimals: 18,
				address: '0xfe712251173a2cd5f5be2b46bb528328ea3565e1',
				logoURI: 'https://tokens.1inch.io/0xfe712251173a2cd5f5be2b46bb528328ea3565e1.png',
				tags: ['tokens']
			},
			{
				symbol: 'AURUM',
				name: 'RaiderAurum',
				decimals: 18,
				address: '0x34d4ab47bee066f361fa52d792e69ac7bd05ee23',
				logoURI: 'https://tokens.1inch.io/0x34d4ab47bee066f361fa52d792e69ac7bd05ee23.png',
				tags: ['tokens']
			},
			{
				symbol: 'RAIDER',
				name: 'RaiderToken',
				decimals: 18,
				address: '0xcd7361ac3307d1c5a46b63086a90742ff44c63b3',
				logoURI: 'https://tokens.1inch.io/0xcd7361ac3307d1c5a46b63086a90742ff44c63b3.png',
				tags: ['tokens']
			},
			{
				symbol: 'DDAO',
				name: 'DEFI HUNTERS DAO Token',
				decimals: 18,
				address: '0x90f3edc7d5298918f7bb51694134b07356f7d0c7',
				logoURI: 'https://tokens.1inch.io/0x90f3edc7d5298918f7bb51694134b07356f7d0c7.png',
				tags: ['tokens']
			},
			{
				symbol: 'YEL',
				name: 'YEL Token',
				decimals: 18,
				address: '0xd3b71117e6c1558c1553305b44988cd944e97300',
				logoURI: 'https://tokens.1inch.io/0xd3b71117e6c1558c1553305b44988cd944e97300.png',
				tags: ['tokens']
			},
			{
				symbol: 'DWEB',
				name: 'DecentraWeb (PoS)',
				decimals: 18,
				address: '0x8839e639f210b80ffea73aedf51baed8dac04499',
				logoURI: 'https://tokens.1inch.io/0x8839e639f210b80ffea73aedf51baed8dac04499.png',
				tags: ['tokens']
			},
			{
				symbol: 'MILK',
				name: 'Milk',
				decimals: 18,
				address: '0x1599fe55cda767b1f631ee7d414b41f5d6de393d',
				logoURI: 'https://tokens.1inch.io/0x1599fe55cda767b1f631ee7d414b41f5d6de393d.png',
				tags: ['tokens']
			},
			{
				symbol: 'RAI',
				name: 'Rai Reflex Index (PoS)',
				decimals: 18,
				address: '0x00e5646f60ac6fb446f621d146b6e1886f002905',
				logoURI: 'https://tokens.1inch.io/0x00e5646f60ac6fb446f621d146b6e1886f002905.png',
				tags: ['tokens']
			},
			{
				symbol: 'INSUR',
				name: 'InsurAce (PoS)',
				decimals: 18,
				address: '0x8a0e8b4b0903929f47c3ea30973940d4a9702067',
				logoURI: 'https://tokens.1inch.io/0x8a0e8b4b0903929f47c3ea30973940d4a9702067.png',
				tags: ['tokens']
			},
			{
				symbol: 'GRT',
				name: 'Graph Token (PoS)',
				decimals: 18,
				address: '0x5fe2b58c013d7601147dcdd68c143a77499f5531',
				logoURI: 'https://tokens.1inch.io/0x5fe2b58c013d7601147dcdd68c143a77499f5531.png',
				tags: ['tokens']
			},
			{
				symbol: 'POLX',
				name: 'Polylastic',
				decimals: 18,
				address: '0x187ae45f2d361cbce37c6a8622119c91148f261b',
				logoURI: 'https://tokens.1inch.io/0x187ae45f2d361cbce37c6a8622119c91148f261b.png',
				tags: ['tokens']
			},
			{
				symbol: 'MYST',
				name: 'Mysterium (PoS)',
				decimals: 18,
				address: '0x1379e8886a944d2d9d440b3d88df536aea08d9f3',
				logoURI: 'https://tokens.1inch.io/0x1379e8886a944d2d9d440b3d88df536aea08d9f3.png',
				tags: ['tokens']
			},
			{
				symbol: 'GEO$',
				name: 'GEOPOLY',
				decimals: 18,
				address: '0xf1428850f92b87e629c6f3a3b75bffbc496f7ba6',
				logoURI: 'https://tokens.1inch.io/0xf1428850f92b87e629c6f3a3b75bffbc496f7ba6.png',
				tags: ['tokens']
			},
			{
				symbol: 'PRXY',
				name: 'Proxy',
				decimals: 18,
				address: '0xab3d689c22a2bb821f50a4ff0f21a7980dcb8591',
				logoURI: 'https://tokens.1inch.io/0xab3d689c22a2bb821f50a4ff0f21a7980dcb8591.png',
				tags: ['tokens']
			},
			{
				symbol: 'NEX',
				name: 'Nash Exchange Token (PoS)',
				decimals: 8,
				address: '0xa486c6bc102f409180ccb8a94ba045d39f8fc7cb',
				logoURI: 'https://tokens.1inch.io/0xa486c6bc102f409180ccb8a94ba045d39f8fc7cb.png',
				tags: ['tokens']
			},
			{
				symbol: 'PAR',
				name: 'PAR Stablecoin',
				decimals: 18,
				address: '0xe2aa7db6da1dae97c5f5c6914d285fbfcc32a128',
				logoURI: 'https://tokens.1inch.io/0xe2aa7db6da1dae97c5f5c6914d285fbfcc32a128.png',
				tags: ['tokens']
			},
			{
				symbol: 'CLAM',
				name: 'Otter Clam',
				decimals: 9,
				address: '0xc250e9987a032acac293d838726c511e6e1c029d',
				logoURI: 'https://tokens.1inch.io/0xc250e9987a032acac293d838726c511e6e1c029d.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'mSHEESHA',
				name: 'SHEESHA POLYGON',
				decimals: 18,
				address: '0x88c949b4eb85a90071f2c0bef861bddee1a7479d',
				logoURI: 'https://tokens.1inch.io/0x88c949b4eb85a90071f2c0bef861bddee1a7479d.png',
				tags: ['tokens']
			},
			{
				symbol: 'VHC',
				name: 'Vault Hill City (PoS)',
				decimals: 18,
				address: '0x51b5619f5180e333d18b6310c8d540aea43a0371',
				logoURI: 'https://tokens.1inch.io/0x51b5619f5180e333d18b6310c8d540aea43a0371.png',
				tags: ['tokens']
			},
			{
				symbol: 'DYST',
				name: 'Dystopia token',
				decimals: 18,
				address: '0x39ab6574c289c3ae4d88500eec792ab5b947a5eb',
				logoURI: 'https://tokens.1inch.io/0x39ab6574c289c3ae4d88500eec792ab5b947a5eb.png',
				tags: ['tokens']
			},
			{
				symbol: 'MESH',
				name: 'Meshswap Protocol',
				decimals: 18,
				address: '0x82362ec182db3cf7829014bc61e9be8a2e82868a',
				logoURI: 'https://tokens.1inch.io/0x82362ec182db3cf7829014bc61e9be8a2e82868a.png',
				tags: ['tokens']
			},
			{
				symbol: 'NXD',
				name: 'Nexus Dubai',
				decimals: 18,
				address: '0x228b5c21ac00155cf62c57bcc704c0da8187950b',
				logoURI: 'https://tokens.1inch.io/0x228b5c21ac00155cf62c57bcc704c0da8187950b.png',
				tags: ['tokens']
			},
			{
				symbol: 'XCAD',
				name: 'XCAD Token (PoS)',
				decimals: 18,
				address: '0xa55870278d6389ec5b524553d03c04f5677c061e',
				logoURI: 'https://tokens.1inch.io/0xa55870278d6389ec5b524553d03c04f5677c061e.png',
				tags: ['tokens']
			},
			{
				symbol: 'SAFLE',
				name: 'Safle',
				decimals: 18,
				address: '0x04b33078ea1aef29bf3fb29c6ab7b200c58ea126',
				logoURI: 'https://tokens.1inch.io/0x04b33078ea1aef29bf3fb29c6ab7b200c58ea126.png',
				tags: ['tokens']
			},
			{
				symbol: 'BLANK',
				name: 'GoBlank Token (PoS)',
				decimals: 18,
				address: '0xf4c83080e80ae530d6f8180572cbbf1ac9d5d435',
				logoURI: 'https://tokens.1inch.io/0xf4c83080e80ae530d6f8180572cbbf1ac9d5d435.png',
				tags: ['tokens']
			},
			{
				symbol: 'TUSD',
				name: 'TrueUSD (PoS)',
				decimals: 18,
				address: '0x2e1ad108ff1d8c782fcbbb89aad783ac49586756',
				logoURI: 'https://tokens.1inch.io/0x2e1ad108ff1d8c782fcbbb89aad783ac49586756.png',
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'DOGIRA',
				name: 'Dogira',
				decimals: 9,
				address: '0xdda40cdfe4a0090f42ff49f264a831402adb801a',
				logoURI: 'https://tokens.1inch.io/0xdda40cdfe4a0090f42ff49f264a831402adb801a.png',
				tags: ['tokens']
			},
			{
				symbol: 'UNIX',
				name: 'UniX Gaming (PoS)',
				decimals: 18,
				address: '0x8c4476dfec8e7eedf2de3e9e9461b7c14c828d46',
				logoURI: 'https://tokens.1inch.io/0x8c4476dfec8e7eedf2de3e9e9461b7c14c828d46.png',
				tags: ['tokens']
			},
			{
				symbol: 'XGEM',
				name: 'Exchange Genesis Ethlas Medium',
				decimals: 18,
				address: '0x02649c1ff4296038de4b9ba8f491b42b940a8252',
				logoURI: 'https://tokens.1inch.io/0x02649c1ff4296038de4b9ba8f491b42b940a8252.png',
				tags: ['tokens']
			},
			{
				symbol: 'IQ',
				name: 'Everipedia IQ (PoS)',
				decimals: 18,
				address: '0xb9638272ad6998708de56bbc0a290a1de534a578',
				logoURI: 'https://tokens.1inch.io/0xb9638272ad6998708de56bbc0a290a1de534a578.png',
				tags: ['tokens']
			},
			{
				symbol: 'ORBS',
				name: 'Orbs (PoS)',
				decimals: 18,
				address: '0x614389eaae0a6821dc49062d56bda3d9d45fa2ff',
				logoURI: 'https://tokens.1inch.io/0x614389eaae0a6821dc49062d56bda3d9d45fa2ff.png',
				tags: ['tokens']
			},
			{
				symbol: 'XZAR',
				name: 'South African Tether (PoS)',
				decimals: 18,
				address: '0x30de46509dbc3a491128f97be0aaf70dc7ff33cb',
				logoURI: 'https://tokens.1inch.io/0x30de46509dbc3a491128f97be0aaf70dc7ff33cb.png',
				tags: ['tokens']
			},
			{
				symbol: 'PECO',
				name: 'Polygon Ecosystem Index',
				decimals: 18,
				address: '0xa9536b9c75a9e0fae3b56a96ac8edf76abc91978',
				logoURI: 'https://tokens.1inch.io/0xa9536b9c75a9e0fae3b56a96ac8edf76abc91978.png',
				tags: ['tokens']
			},
			{
				symbol: 'O3',
				name: 'O3 Swap Token',
				decimals: 18,
				address: '0xee9801669c6138e84bd50deb500827b776777d28',
				logoURI: 'https://tokens.1inch.io/0xee9801669c6138e84bd50deb500827b776777d28.png',
				tags: ['tokens']
			},
			{
				symbol: 'LUXY',
				name: 'LUXY',
				decimals: 18,
				address: '0xd4945a3d0de9923035521687d4bf18cc9b0c7c2a',
				logoURI: 'https://tokens.1inch.io/0xd4945a3d0de9923035521687d4bf18cc9b0c7c2a.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'jEUR',
				name: 'Jarvis Synthetic Euro',
				decimals: 18,
				address: '0x4e3decbb3645551b8a19f0ea1678079fcb33fb4c',
				logoURI: 'https://tokens.1inch.io/0x4e3decbb3645551b8a19f0ea1678079fcb33fb4c.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'COT',
				name: 'CosplayToken (PoS)',
				decimals: 18,
				address: '0x8d520c8e66091cfd6743fe37fbe3a09505616c4b',
				logoURI: 'https://tokens.1inch.io/0x8d520c8e66091cfd6743fe37fbe3a09505616c4b.png',
				tags: ['tokens']
			},
			{
				symbol: 'MASK',
				name: 'Mask Network (PoS)',
				decimals: 18,
				address: '0x2b9e7ccdf0f4e5b24757c1e1a80e311e34cb10c7',
				logoURI: 'https://tokens.1inch.io/0x2b9e7ccdf0f4e5b24757c1e1a80e311e34cb10c7.png',
				tags: ['tokens']
			},
			{
				symbol: 'NITRO',
				name: 'Nitro (PoS)',
				decimals: 18,
				address: '0x695fc8b80f344411f34bdbcb4e621aa69ada384b',
				logoURI: 'https://tokens.1inch.io/0x695fc8b80f344411f34bdbcb4e621aa69ada384b.png',
				tags: ['tokens']
			},
			{
				symbol: 'GET',
				name: 'GET Protocol (PoS)',
				decimals: 18,
				address: '0xdb725f82818de83e99f1dac22a9b5b51d3d04dd4',
				logoURI: 'https://tokens.1inch.io/0xdb725f82818de83e99f1dac22a9b5b51d3d04dd4.png',
				tags: ['tokens']
			},
			{
				symbol: 'HOPE',
				name: 'Firebird.Finance',
				decimals: 18,
				address: '0xd78c475133731cd54dadcb430f7aae4f03c1e660',
				logoURI: 'https://tokens.1inch.io/0xd78c475133731cd54dadcb430f7aae4f03c1e660.png',
				tags: ['tokens']
			},
			{
				symbol: 'WLD',
				name: 'wLitiDAO',
				decimals: 18,
				address: '0xa936e1f747d14fc30d08272d065c8aef4ab7f810',
				logoURI: 'https://tokens.1inch.io/0xa936e1f747d14fc30d08272d065c8aef4ab7f810.png',
				tags: ['tokens']
			},
			{
				symbol: 'DATA',
				name: 'Streamr',
				decimals: 18,
				address: '0x3a9a81d576d83ff21f26f325066054540720fc34',
				logoURI: 'https://tokens.1inch.io/0x3a9a81d576d83ff21f26f325066054540720fc34.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'THX',
				name: 'THX Network (PoS)',
				decimals: 18,
				address: '0x2934b36ca9a4b31e633c5be670c8c8b28b6aa015',
				logoURI: 'https://tokens.1inch.io/0x2934b36ca9a4b31e633c5be670c8c8b28b6aa015.png',
				tags: ['tokens']
			},
			{
				symbol: 'MASQ',
				name: 'MASQ (PoS)',
				decimals: 18,
				address: '0xee9a352f6aac4af1a5b9f467f6a93e0ffbe9dd35',
				logoURI: 'https://tokens.1inch.io/0xee9a352f6aac4af1a5b9f467f6a93e0ffbe9dd35.png',
				tags: ['tokens']
			},
			{
				symbol: '$KMC',
				name: '$KMC',
				decimals: 18,
				address: '0x44d09156c7b4acf0c64459fbcced7613f5519918',
				logoURI: 'https://tokens.1inch.io/0x44d09156c7b4acf0c64459fbcced7613f5519918.png',
				tags: ['tokens']
			},
			{
				symbol: 'ADS',
				name: 'Adshares (PoS)',
				decimals: 11,
				address: '0x598e49f01befeb1753737934a5b11fea9119c796',
				logoURI: 'https://tokens.1inch.io/0x598e49f01befeb1753737934a5b11fea9119c796.png',
				tags: ['tokens']
			},
			{
				symbol: 'CIOTX',
				name: 'Crosschain IOTX',
				decimals: 18,
				address: '0x300211def2a644b036a9bdd3e58159bb2074d388',
				logoURI: 'https://tokens.1inch.io/0x300211def2a644b036a9bdd3e58159bb2074d388.png',
				tags: ['tokens']
			},
			{
				symbol: 'MOD',
				name: 'MODEFI (PoS)',
				decimals: 18,
				address: '0x8346ab8d5ea7a9db0209aed2d1806afa0e2c4c21',
				logoURI: 'https://tokens.1inch.io/0x8346ab8d5ea7a9db0209aed2d1806afa0e2c4c21.png',
				tags: ['tokens']
			},
			{
				symbol: 'BONDLY',
				name: 'Bondly (PoS)',
				decimals: 18,
				address: '0x64ca1571d1476b7a21c5aaf9f1a750a193a103c0',
				logoURI: 'https://tokens.1inch.io/0x64ca1571d1476b7a21c5aaf9f1a750a193a103c0.png',
				tags: ['tokens']
			},
			{
				symbol: 'WNT',
				name: 'Wicrypt Network Token',
				decimals: 18,
				address: '0x82a0e6c02b91ec9f6ff943c0a933c03dbaa19689',
				logoURI: 'https://tokens.1inch.io/0x82a0e6c02b91ec9f6ff943c0a933c03dbaa19689.png',
				tags: ['tokens']
			},
			{
				symbol: 'CYC',
				name: 'Cyclone Protocol',
				decimals: 18,
				address: '0xcfb54a6d2da14abecd231174fc5735b4436965d8',
				logoURI: 'https://tokens.1inch.io/0xcfb54a6d2da14abecd231174fc5735b4436965d8.png',
				tags: ['tokens']
			},
			{
				symbol: 'POP',
				name: 'Popcorn (PoS)',
				decimals: 18,
				address: '0xc5b57e9a1e7914fda753a88f24e5703e617ee50c',
				logoURI: 'https://tokens.1inch.io/0xc5b57e9a1e7914fda753a88f24e5703e617ee50c.png',
				tags: ['tokens']
			},
			{
				symbol: 'FBX',
				name: 'FireBotToken',
				decimals: 18,
				address: '0xd125443f38a69d776177c2b9c041f462936f8218',
				logoURI: 'https://tokens.1inch.io/0xd125443f38a69d776177c2b9c041f462936f8218.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'FOX',
				name: 'FOX (PoS)',
				decimals: 18,
				address: '0x65a05db8322701724c197af82c9cae41195b0aa8',
				logoURI: 'https://tokens.1inch.io/0x65a05db8322701724c197af82c9cae41195b0aa8.png',
				tags: ['tokens']
			},
			{
				symbol: 'GCR',
				name: 'Global Coin Research (PoS)',
				decimals: 4,
				address: '0xa69d14d6369e414a32a5c7e729b7afbafd285965',
				logoURI: 'https://tokens.1inch.io/0xa69d14d6369e414a32a5c7e729b7afbafd285965.png',
				tags: ['tokens']
			},
			{
				symbol: 'jCHF',
				name: 'Jarvis Synthetic Swiss Franc',
				decimals: 18,
				address: '0xbd1463f02f61676d53fd183c2b19282bff93d099',
				logoURI: 'https://tokens.1inch.io/0xbd1463f02f61676d53fd183c2b19282bff93d099.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'SALE',
				name: 'DxSale.Network (PoS)',
				decimals: 18,
				address: '0x8f6196901a4a153d8ee8f3fa779a042f6092d908',
				logoURI: 'https://tokens.1inch.io/0x8f6196901a4a153d8ee8f3fa779a042f6092d908.png',
				tags: ['tokens']
			},
			{
				symbol: 'CRBN',
				name: 'Carbon (PoS)',
				decimals: 18,
				address: '0x89ef0900b0a6b5548ab2ff58ef588f9433b5fcf5',
				logoURI: 'https://tokens.1inch.io/0x89ef0900b0a6b5548ab2ff58ef588f9433b5fcf5.png',
				tags: ['tokens']
			},
			{
				symbol: 'JPYC',
				name: 'JPY Coin',
				decimals: 18,
				address: '0x431d5dff03120afa4bdf332c61a6e1766ef37bdb',
				logoURI: 'https://tokens.1inch.io/0x431d5dff03120afa4bdf332c61a6e1766ef37bdb.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'WOMBAT',
				name: 'Wombat',
				decimals: 18,
				address: '0x0c9c7712c83b3c70e7c5e11100d33d9401bdf9dd',
				logoURI: 'https://tokens.1inch.io/0x0c9c7712c83b3c70e7c5e11100d33d9401bdf9dd.png',
				tags: ['tokens']
			},
			{
				symbol: 'LIME',
				name: 'iMe Lab',
				decimals: 18,
				address: '0x7f67639ffc8c93dd558d452b8920b28815638c44',
				logoURI: 'https://tokens.1inch.io/0x7f67639ffc8c93dd558d452b8920b28815638c44.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'MaticX',
				name: 'Liquid Staking Matic (PoS)',
				decimals: 18,
				address: '0xfa68fb4628dff1028cfec22b4162fccd0d45efb6',
				logoURI: 'https://tokens.1inch.io/0xfa68fb4628dff1028cfec22b4162fccd0d45efb6.png',
				tags: ['tokens']
			},
			{
				symbol: 'oXRP',
				name: 'Orbit Bridge Polygon XRP Token',
				decimals: 6,
				address: '0xcc2a9051e904916047c26c90f41c000d4f273456',
				logoURI: 'https://tokens.1inch.io/0xcc2a9051e904916047c26c90f41c000d4f273456.png',
				tags: ['tokens']
			},
			{
				symbol: 'oUSDC',
				name: 'Orbit Bridge Polygon USD Coin',
				decimals: 6,
				address: '0x5bef2617ecca9a39924c09017c5f1e25efbb3ba8',
				logoURI: 'https://tokens.1inch.io/0x5bef2617ecca9a39924c09017c5f1e25efbb3ba8.png',
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'oUSDT',
				name: 'Orbit Bridge Polygon Tether USD',
				decimals: 6,
				address: '0x957da9ebbcdc97dc4a8c274dd762ec2ab665e15f',
				logoURI: 'https://tokens.1inch.io/0x957da9ebbcdc97dc4a8c274dd762ec2ab665e15f.png',
				tags: ['tokens', 'PEG:USD']
			},
			{
				symbol: 'oDAI',
				name: 'Orbit Bridge Polygon Dai',
				decimals: 18,
				address: '0x8ece0a50a025a7e13398212a5bed2ded11959949',
				logoURI: 'https://tokens.1inch.io/0x8ece0a50a025a7e13398212a5bed2ded11959949.png',
				tags: ['tokens']
			},
			{
				symbol: 'oKLAY',
				name: 'Orbit Bridge Polygon Klay',
				decimals: 18,
				address: '0x0a02d33031917d836bd7af02f9f7f6c74d67805f',
				logoURI: 'https://tokens.1inch.io/0x0a02d33031917d836bd7af02f9f7f6c74d67805f.png',
				tags: ['tokens']
			},
			{
				symbol: 'DEFIT',
				name: 'Digital Fitness',
				decimals: 18,
				address: '0x428360b02c1269bc1c79fbc399ad31d58c1e8fda',
				logoURI: 'https://tokens.1inch.io/0x428360b02c1269bc1c79fbc399ad31d58c1e8fda.png',
				tags: ['tokens']
			},
			{
				symbol: 'SNP',
				name: 'Synapse Network',
				decimals: 18,
				address: '0x6911f552842236bd9e8ea8ddbb3fb414e2c5fa9d',
				logoURI: 'https://tokens.1inch.io/0x6911f552842236bd9e8ea8ddbb3fb414e2c5fa9d.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'NCT',
				name: 'Toucan Protocol: Nature Carbon Tonne',
				decimals: 18,
				address: '0xd838290e877e0188a4a44700463419ed96c16107',
				logoURI: 'https://tokens.1inch.io/0xd838290e877e0188a4a44700463419ed96c16107.png',
				tags: ['tokens']
			},
			{
				symbol: 'BCT',
				name: 'Toucan Protocol: Base Carbon Tonne',
				decimals: 18,
				address: '0x2f800db0fdb5223b3c3f354886d907a671414a7f',
				logoURI: 'https://tokens.1inch.io/0x2f800db0fdb5223b3c3f354886d907a671414a7f.png',
				tags: ['tokens']
			},
			{
				symbol: 'stMATIC',
				name: 'Staked MATIC (PoS)',
				decimals: 18,
				address: '0x3a58a54c066fdc0f2d55fc9c89f0415c92ebf3c4',
				logoURI: 'https://tokens.1inch.io/0x3a58a54c066fdc0f2d55fc9c89f0415c92ebf3c4.png',
				tags: ['tokens', 'PEG:MATIC']
			},
			{
				symbol: 'MOONED',
				name: 'MoonEdge',
				decimals: 18,
				address: '0x7e4c577ca35913af564ee2a24d882a4946ec492b',
				logoURI: 'https://tokens.1inch.io/0x7e4c577ca35913af564ee2a24d882a4946ec492b.png',
				tags: ['tokens']
			},
			{
				symbol: 'UNIM',
				name: 'Unicorn Milk',
				decimals: 18,
				address: '0x64060ab139feaae7f06ca4e63189d86adeb51691',
				logoURI: 'https://tokens.1inch.io/0x64060ab139feaae7f06ca4e63189d86adeb51691.png',
				tags: ['tokens']
			},
			{
				symbol: 'CGG',
				name: 'ChainGuardians Governance Token (PoS)',
				decimals: 18,
				address: '0x2ab4f9ac80f33071211729e45cfc346c1f8446d5',
				logoURI: 'https://tokens.1inch.io/0x2ab4f9ac80f33071211729e45cfc346c1f8446d5.png',
				tags: ['tokens']
			},
			{
				symbol: 'LDO',
				name: 'Lido DAO Token (PoS)',
				decimals: 18,
				address: '0xc3c7d422809852031b44ab29eec9f1eff2a58756',
				logoURI: 'https://tokens.1inch.io/0xc3c7d422809852031b44ab29eec9f1eff2a58756.png',
				tags: ['tokens']
			},
			{
				symbol: 'xDG',
				name: 'Decentral Games Governance (PoS)',
				decimals: 18,
				address: '0xc6480da81151b2277761024599e8db2ad4c388c8',
				logoURI: 'https://tokens.1inch.io/0xc6480da81151b2277761024599e8db2ad4c388c8.png',
				tags: ['tokens']
			},
			{
				symbol: 'RBW',
				name: 'Rainbow Token',
				decimals: 18,
				address: '0x431cd3c9ac9fc73644bf68bf5691f4b83f9e104f',
				logoURI: 'https://tokens.1inch.io/0x431cd3c9ac9fc73644bf68bf5691f4b83f9e104f.png',
				tags: ['tokens']
			},
			{
				symbol: 'BOB',
				name: 'BOB',
				decimals: 18,
				address: '0xb0b195aefa3650a6908f15cdac7d92f8a5791b0b',
				logoURI: 'https://tokens.1inch.io/0xb0b195aefa3650a6908f15cdac7d92f8a5791b0b.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'SPHERE',
				name: 'Sphere Finance',
				decimals: 18,
				address: '0x62f594339830b90ae4c084ae7d223ffafd9658a7',
				logoURI: 'https://tokens.1inch.io/0x62f594339830b90ae4c084ae7d223ffafd9658a7.png',
				tags: ['tokens']
			},
			{
				symbol: 'GOGO',
				name: 'GOGOcoin',
				decimals: 18,
				address: '0xdd2af2e723547088d3846841fbdcc6a8093313d6',
				logoURI: 'https://tokens.1inch.io/0xdd2af2e723547088d3846841fbdcc6a8093313d6.png',
				tags: ['tokens']
			},
			{
				symbol: 'BANK',
				name: 'Bankless Token (PoS)',
				decimals: 18,
				address: '0xdb7cb471dd0b49b29cab4a1c14d070f27216a0ab',
				logoURI: 'https://tokens.1inch.io/0xdb7cb471dd0b49b29cab4a1c14d070f27216a0ab.png',
				tags: ['tokens']
			},
			{
				symbol: 'XIDR',
				name: 'XIDR',
				decimals: 6,
				address: '0x2c826035c1c36986117a0e949bd6ad4bab54afe2',
				logoURI: 'https://tokens.1inch.io/0x2c826035c1c36986117a0e949bd6ad4bab54afe2.png',
				tags: ['tokens']
			},
			{
				symbol: 'FCD',
				name: 'FreshCut Diamond',
				decimals: 18,
				address: '0xf78610d0a197842bf98ca45254897edd13c5d182',
				logoURI: 'https://tokens.1inch.io/0xf78610d0a197842bf98ca45254897edd13c5d182.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'RVLT',
				name: 'Revolt 2 Earn',
				decimals: 18,
				address: '0xf0f9d895aca5c8678f706fb8216fa22957685a13',
				logoURI: 'https://tokens.1inch.io/0xf0f9d895aca5c8678f706fb8216fa22957685a13.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'MCHC',
				name: 'MCHCoin (PoS)',
				decimals: 18,
				address: '0xee7666aacaefaa6efeef62ea40176d3eb21953b9',
				logoURI: 'https://tokens.1inch.io/0xee7666aacaefaa6efeef62ea40176d3eb21953b9.png',
				tags: ['tokens']
			},
			{
				symbol: 'MABBC',
				name: 'Matic ABBC',
				decimals: 8,
				address: '0xe83ce6bfb580583bd6a62b4be7b34fc25f02910d',
				logoURI: 'https://tokens.1inch.io/0xe83ce6bfb580583bd6a62b4be7b34fc25f02910d.png',
				tags: ['tokens']
			},
			{
				symbol: 'RBLS',
				name: 'Rebel Bots Token',
				decimals: 8,
				address: '0xe26cda27c13f4f87cffc2f437c5900b27ebb5bbb',
				logoURI: 'https://tokens.1inch.io/0xe26cda27c13f4f87cffc2f437c5900b27ebb5bbb.png',
				tags: ['tokens']
			},
			{
				symbol: 'pFi',
				name: 'PartyFinance',
				decimals: 18,
				address: '0xe46b4a950c389e80621d10dfc398e91613c7e25e',
				logoURI: 'https://tokens.1inch.io/0xe46b4a950c389e80621d10dfc398e91613c7e25e.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'SOL',
				name: 'Wrapped SOL',
				decimals: 9,
				address: '0xd93f7e271cb87c23aaa73edc008a79646d1f9912',
				logoURI: 'https://tokens.1inch.io/0xd93f7e271cb87c23aaa73edc008a79646d1f9912.png',
				tags: ['tokens']
			},
			{
				symbol: 'ASTRAFER',
				name: 'Astrafer',
				decimals: 18,
				address: '0xdfce1e99a31c4597a3f8a8945cbfa9037655e335',
				logoURI: 'https://tokens.1inch.io/0xdfce1e99a31c4597a3f8a8945cbfa9037655e335.png',
				tags: ['tokens']
			},
			{
				symbol: 'XSGD',
				name: 'XSGD',
				decimals: 6,
				address: '0xdc3326e71d45186f113a2f448984ca0e8d201995',
				logoURI: 'https://tokens.1inch.io/0xdc3326e71d45186f113a2f448984ca0e8d201995.png',
				tags: ['tokens']
			},
			{
				symbol: 'eQUAD',
				name: 'Quadrant Protocol',
				decimals: 18,
				address: '0xdab625853c2b35d0a9c6bd8e5a097a664ef4ccfb',
				logoURI: 'https://tokens.1inch.io/0xdab625853c2b35d0a9c6bd8e5a097a664ef4ccfb.png',
				tags: ['tokens']
			},
			{
				symbol: 'renBTC',
				name: 'renBTC',
				decimals: 8,
				address: '0xdbf31df14b66535af65aac99c32e9ea844e14501',
				logoURI: 'https://tokens.1inch.io/0xdbf31df14b66535af65aac99c32e9ea844e14501.png',
				tags: ['tokens']
			},
			{
				symbol: 'GIDDY',
				name: 'Giddy Token',
				decimals: 18,
				address: '0x67eb41a14c0fe5cd701fc9d5a3d6597a72f641a6',
				logoURI: 'https://tokens.1inch.io/0x67eb41a14c0fe5cd701fc9d5a3d6597a72f641a6.png',
				tags: ['tokens']
			},
			{
				symbol: 'CHAIN',
				name: 'Chain Games',
				decimals: 18,
				address: '0xd55fce7cdab84d84f2ef3f99816d765a2a94a509',
				logoURI: 'https://tokens.1inch.io/0xd55fce7cdab84d84f2ef3f99816d765a2a94a509.png',
				tags: ['tokens']
			},
			{
				symbol: 'SFL',
				name: 'Sunflower Land',
				decimals: 18,
				address: '0xd1f9c58e33933a993a3891f8acfe05a68e1afc05',
				logoURI: 'https://tokens.1inch.io/0xd1f9c58e33933a993a3891f8acfe05a68e1afc05.png',
				tags: ['tokens']
			},
			{
				symbol: 'RISE',
				name: 'EverRise',
				decimals: 18,
				address: '0xc17c30e98541188614df99239cabd40280810ca3',
				logoURI: 'https://tokens.1inch.io/0xc17c30e98541188614df99239cabd40280810ca3.png',
				tags: ['tokens']
			},
			{
				symbol: 'BUSD',
				name: 'BUSD Token',
				decimals: 18,
				address: '0x9c9e5fd8bbc25984b178fdce6117defa39d2db39',
				logoURI: 'https://tokens.1inch.io/0x9c9e5fd8bbc25984b178fdce6117defa39d2db39.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'FEAR',
				name: 'Fear NFTs (PoS)',
				decimals: 18,
				address: '0xa2ca40dbe72028d3ac78b5250a8cb8c404e7fb8c',
				logoURI: 'https://tokens.1inch.io/0xa2ca40dbe72028d3ac78b5250a8cb8c404e7fb8c.png',
				tags: ['tokens']
			},
			{
				symbol: 'BTCpx',
				name: 'BTC Proxy',
				decimals: 8,
				address: '0x9c32185b81766a051e08de671207b34466dd1021',
				logoURI: 'https://tokens.1inch.io/0x9c32185b81766a051e08de671207b34466dd1021.png',
				tags: ['tokens']
			},
			{
				symbol: 'CPD',
				name: 'Coinspaid (PoS)',
				decimals: 18,
				address: '0x1ce4a2c355f0dcc24e32a9af19f1836d6f4f98ae',
				logoURI: 'https://tokens.1inch.io/0x1ce4a2c355f0dcc24e32a9af19f1836d6f4f98ae.png',
				tags: ['tokens']
			},
			{
				symbol: 'QUICK',
				name: 'QuickSwap',
				decimals: 18,
				address: '0xb5c064f955d8e7f38fe0460c556a72987494ee17',
				logoURI: 'https://tokens.1inch.io/0xb5c064f955d8e7f38fe0460c556a72987494ee17.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'UCO',
				name: 'UnirisToken (PoS)',
				decimals: 18,
				address: '0x3c720206bfacb2d16fa3ac0ed87d2048dbc401fc',
				logoURI: 'https://tokens.1inch.io/0x3c720206bfacb2d16fa3ac0ed87d2048dbc401fc.png',
				tags: ['tokens']
			},
			{
				symbol: 'XY',
				name: 'XY Token',
				decimals: 18,
				address: '0x55555555a687343c6ce28c8e1f6641dc71659fad',
				logoURI: 'https://tokens.1inch.io/0x55555555a687343c6ce28c8e1f6641dc71659fad.png',
				tags: ['tokens']
			},
			{
				symbol: 'ORARE',
				name: 'One Rare Token',
				decimals: 18,
				address: '0xff2382bd52efacef02cc895bcbfc4618608aa56f',
				logoURI: 'https://tokens.1inch.io/0xff2382bd52efacef02cc895bcbfc4618608aa56f.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'TETU',
				name: 'TETU Reward Token',
				decimals: 18,
				address: '0x255707b70bf90aa112006e1b07b9aea6de021424',
				logoURI: 'https://tokens.1inch.io/0x255707b70bf90aa112006e1b07b9aea6de021424.png',
				tags: ['tokens']
			},
			{
				symbol: 'CADC',
				name: 'CAD Coin',
				decimals: 18,
				address: '0x9de41aff9f55219d5bf4359f167d1d0c772a396d',
				logoURI: 'https://tokens.1inch.io/0x9de41aff9f55219d5bf4359f167d1d0c772a396d.png',
				eip2612: true,
				tags: ['tokens']
			},
			{
				symbol: 'ankrMATIC',
				name: 'Ankr Staked MATIC',
				decimals: 18,
				address: '0x0e9b89007eee9c958c0eda24ef70723c2c93dd58',
				logoURI: 'https://tokens.1inch.io/0x0e9b89007eee9c958c0eda24ef70723c2c93dd58.png',
				tags: ['tokens']
			},
			{
				symbol: 'DAVOS',
				name: 'Davos',
				decimals: 18,
				address: '0xec38621e72d86775a89c7422746de1f52bba5320',
				logoURI: 'https://tokens.1inch.io/0xec38621e72d86775a89c7422746de1f52bba5320.png',
				tags: ['tokens']
			}
		]
	}
];

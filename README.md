<img src="amis-logo3.png" />

[![Join the Gitchat at https://gitter.im/amis-delta-dex/Lobby](https://badges.gitter.im/amis-delta-dex/Lobby.svg)](https://gitter.im/AMIS-DELTA-DEX/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)&nbsp;[![Bug Bounty](https://img.shields.io/badge/bounty-pending-2930e8.svg)](https://github.com/amisolution/ERC20-AMIS/issues/)&nbsp;[![Twitter AirDrop](https://img.shields.io/badge/twitter-airdrop-5430e8.svg)](https://twitter.com/AMIStoken_ERC20)

# ERC20-AMIS Token Future, options and crypto derivatives Project

[![Join the Gitchat at https://gitter.im/ERC20-AMIS/Lobby](https://badges.gitter.im/ERC20-AMIS/Lobby.svg)](https://gitter.im/ERC20-AMIS/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> What is an AMIS Token (AMIS)? The AMIS is a transactional vehicle acting as asset management instrument for decentralized services running on the ethereum blockchain.
Main Features:
Dematerialized, Decentralized, due to replace FIAT transactions in the real economy for the long term, Transborder proof. 
Run on the ethereum blockchain natively since its experimental inception.
Low supply of Tokens 37.000 (37 Tokens created so far) now 20 Mio
Used as multi-purposes mediation instrument to interact with other decentralized exchanges and smart contracts.
Note: The new AMIS contract provides 20 Mio Tokens with 9 decimals; old AMIS contract deactivated from the exchange.
We also introduced AMIS tokens and assets on new blockchain technology such as Bitshares and Waves. We plan to burn the excess of AMIS Ethereum tokens equivalent to the supply issued on these respective blockchains. 

## Table of Contents
- [WhitePaper](#white-paper)
- [Install](#install)
- [Usage](#usage)
- [Gui](#gui)
- [Wallet](#wallet)
- [Exchange](#exchange)
- [Developments](#developments)
- [Wiki](#wiki)
- [Charts](#charts)
- [Api](#api)
- [Helpdesk](#support)
- [Communication](#communication)
- [Contributing](#contributing)
- [CodeOfConduct](#code)
- [License](#license)

## white-paper
Token exchange whitepaper

The last step to completing our rebranding process is upgrading our token to ‘AMIS Token’ (AMIS). This will be a 1:2000000000 token exchange. Meaning that you will have to exchange your old tokens for new tokens. You will receive the equivalent balance of AMIS tokens on your existing account address.

This mini-whitepaper explains how this token exchange is executed.

Rationale behind changing the Token schema

For the benefit of this project it was necessary to fork the scarcity of the asset from old to new AMIS token. This change also impacts the old AMIS Token, as we have to change the token TotalSupply for the following two reasons:

the old AMIS token contract was short in supplying tokens.
the current token contract cannot be renamed, so cannot follow the brand change
However, we wanted to make sure the brand fork did not impact Amis token owners. To that end we’ve created a way to seamlessly exchange old AMIS tokens (AMIS) for new AMIS tokens (AMIS).

How will we proceed

The new AMIS token

A new AMIS token (AMIS) has been created, and its purpose is to function within the AMIS environment. Only new AMIS will be accepted in the AMIS ecosystem, so any old AMIS token holders who wish to interact with the AMIS platform will need to exchange their old AMIS for new AMIS.

The token contract

The new token contract is based on the MiniMe token contract created by Giveth. The MiniMe token-contract is a state-of-the-art ERC20 compatible token contract that provides some extra features:

Balance history is registered and available to be queried
All MiniMe Tokens maintain a history of the balance changes that occur during each block. Two calls are introduced to read the totalSupply and the balance of any address at any block in the past.
function totalSupplyAt(uint _blockNumber) constant returns(uint)
function balanceOfAt(address _holder, uint _blockNumber) constant returns(uint)
The address of the [New AMIS Token address is 0x949bEd886c739f1A3273629b3320db0C5024c719 ](https://etherscan.io/token/0x949bEd886c739f1A3273629b3320db0C5024c719); you can also find it in [Kovan https://kovan.etherscan.io/address/0x7161f09a6ae81b546bebc04b24629c4f3dad746f](https://kovan.etherscan.io/address/0x7161f09a6ae81b546bebc04b24629c4f3dad746f) and [ropsten https://ropsten.etherscan.io/token/0x954c1b6d130adf617652b1e628aae153fc8a1425](https://ropsten.etherscan.io/token/0x954c1b6d130adf617652b1e628aae153fc8a1425) for testing purposes.

The token controller

The controller of a MiniMe token contract manages the token in a seperate smart contract, and is the only address that can manage the token.

In our case, the AMIConverter.sol contract will be set as the controller of the MiniMe Token.

By using this contract as the base token, clones can be easily generated at any given block number, this allows for incredibly powerful functionality, effectively the ability for anyone to give extra features to the token holders without having to migrate to a new contract. Some of the applications that the new AMIS Token based on the MiniMe token contract can be used for are:

Generating a voting token that is burned when you vote.
Generating a “coupon” token that is redeemed when you use it.
Generating a token for a “spinoff” DAO.
Generating a token that can be used to give explicit support to an action or a campaign, like polling.
Generating a token to enable the token holders to collect daily, monthly or yearly payments.
All the applications the standard ERC 20 token can be used for, but with the ability to upgrade in the future as desired. All these applications and more are enabled by the MiniMe Token Contract. The most amazing part being that anyone that wants to add these features can, in a permissionless yet safe manner without affecting the parent token’s intended functionality.

The address of the AMIS Controller is https://etherscan.io/address/0xfd928fAa0F53fd33e45ac689AF49200CA3d87783

Amount of AMIS Token:

If only 37 old AMIS tokens are converted into AMIS, there will only be 20,000,000 new AMIS in circulation.

Most notably there will be no extra tokens minted. A total of 20 000 000 tokens were minted, so at most only 20 000 000 can ever be minted. This number includes the 16% tokens minted in addition to the AMIS Token Sale and these are exchangeable as well.

Exchanging AMIS tokens to New AMIS tokens

There is a function created in the AMISConverter that converts the old AMIS balance of the sender into an equal balance in new AMIS tokens, and sends your old AMIS tokens to a separate vault wallet. You must first create an allowance to the new contract so that it can transfer your old AMIS tokens to another wallet, so that the tokens can be exchanged into new AMIS tokens. The old AMIS is destroyed immediately by sending it to a 0x000 address.

Security of the contract

The contract is created using the most recent solidity compiler to date ( v0.4.9 )

The new token contract code is open source and can be reviewed [here:https://github.com/amisolution/ERC20-AMIS/blob/master/AMIS.sol](https://github.com/amisolution/ERC20-AMIS/blob/master/AMIS.sol)
is available for review on etherscan: 
[AMIS code on Etherscan: https://etherscan.io/address/0x949bEd886c739f1A3273629b3320db0C5024c719#code](https://etherscan.io/address/0x949bEd886c739f1A3273629b3320db0C5024c719#code)

It is based on these codes : 
https://github.com/ConsenSys/Tokens 
and has interaction capabilities with
https://github.com/Giveth/minime/blob/master/MiniMeToken.sol

Options for exchanging my tokens

1. Using the etherdelta platform (easy)
Access the etherdelta trading platform and perform the conversion:
https://etherdelta.github.io/#0xdF36EBfFa7AB074a13e665daBC34ef4b42e59D75-0x949bEd886c739f1A3273629b3320db0C5024c719
Using Etherdelta - you can perform the token exchange in a few steps. Please visit https://github.com/amisolution/ERC20-AMIS/master/README.md and follow the steps to import your old AMIS wallet into the app. It will then guide you to the token exchange process, which should only take a few minutes to execute.

2. Perform the token exchange yourself. (advanced)

These are the steps required to perform the token exchange yourself:

STEP1 : Import the new AMIS contract ABI at http://api.etherscan.io/api?module=contract&action=getabi&address=0x949bEd886c739f1A3273629b3320db0C5024c719&format=raw

STEP 2 : Import the AMISConverter ABI at http://api.etherscan.io/api?module=contract&action=getabi&address=0xfd928fAa0F53fd33e45ac689AF49200CA3d87783format=raw

STEP 3 : From the old AMIS contract , determine your AMIS balance :

AMIScontract.balanceOf.call(account)
STEP 4 : Give an allowance to the new AMISConverter contract for the full balance of your old AMIS account.

AMIScontract.approve(AMISconverter.address,balance)
STEP 5 : Call the convert function in the AMIConverter contract (call from the account that has the allowance from the previous step)

AMISconverter.convert(balance)
This function will move your old AMIS tokens to the vault account, and will mint new AMIS tokens on the same account address where the old AMIS tokens were previously stored. Your conversion should now be ready. Don’t worry, if the transaction fails your AMIS balance is intact.

STEP 6 : Verify your new AMIS balance using the balanceOf function in the AMIS contract.

AMIScontract.balanceOf.call(account)
You now have converted your old AMIS to new AMIS tokens.

Remember that AMIS is unique; each and everyone can verify the official and genuine AMIS token code and the balance by querying the new AMIS Token contract at :

Read AMIS token smart contract balance:
[Etherscan https://etherscan.io/token/0x949bed886c739f1a3273629b3320db0c5024c719#readContract](https://etherscan.io/token/0x949bed886c739f1a3273629b3320db0c5024c719#readContract)

AMIS unique code:
[(https://etherscan.io/address/0x949bEd886c739f1A3273629b3320db0C5024c719#code](https://etherscan.io/address/0x949bed886c739f1a3273629b3320db0c5024c719#code)

AMIS Dex tracker:
[AMIS Dex Tracker is here => https://etherscan.io/dextracker?filter=&q=amis](https://etherscan.io/dextracker?filter=&q=amis)

Important!

Please do not send tokens directly to the new token address using any wallet software ( MyEtherWallet / Mist / MetaMask / Jaxx, Polo, etc. ) they will not be converted to AMIS tokens this way and will be lost when you do so.

Timeline and duration

As soon as we have deployed the new AMIS token contract - we will publish the new token address and the interface to exchange your tokens on our Amis Dex github.io website (https://amisolution.github.io/ERC20-AMIS/amisdex)

There is no time limit on performing the conversion, meaning that this functionality will be permanently available in our contract.

If you have have any other questions, please feel free to contact us in our [AMIS gitchat](https://gitter.im/ERC20-AMIS/Lobby#) channel, in Slack (## Support), or send a tweet to @erc20_amis.

## Install
Install MIST Wallet, create an account, get some ETH and click on contract, check contract watch to query your balance of AMIS; follow this step to watch the AMIS contract:

https://github.com/bokkypoobah/TokenTrader/wiki/AMIS-%E2%80%90-AMIS#how-to-watch-the-token-contract-in-ethereum-wallet--mist

and then proceed with the AMIS Token Monitoring Activity as in:

https://github.com/bokkypoobah/TokenTrader/wiki/AMIS-%E2%80%90-AMIS#how-to-watch-the-token-in-ethereum-wallet--mist

[MEW](https://myetherwallet.com) (MEW), has embedded the custom token feature to allow the query of your AMIS balance, just fill-up the AMIS token address in the appropriate section.

## Usage
Contract usage interaction development ongoing, currently in UX testing mode
Visit us on our blogs @Medium, Blogspot, erc20-amis.amisolution.net and / or [Wordpress](https://erc20amis.wordpress.com/) for more details.
[This page on github.io is here => https://amisolution.github.io/ERC20-AMIS](https://amisolution.github.io/ERC20-AMIS/)

## Gui
On the ethereum blockchain one can use one of these GUIs to interact with decentralized exchange smart contracts
- New Amis Dex GUI based on Etherdelta [Amis Dex new Delta GUI](https://amisolution.github.io/ERC20-AMIS/amisdex)
- Old Amis Dex GUI based on Forkdelta [Amis Dex old Delta GUI](https://ami-solution.github.io/amisdex/)
- Dubiex [Amis Dex GUI](https://amisolution.github.io/dubiex/ui) under dev due to decimal adjustment

On the BitShares blockchain one can interact with the AMIS UIA on the openledger decentralized exchange using one of these web interfaces
- BITSHARES [OpenLedger.info](https://bitshares.openledger.info/market/unknown.OPENAMIS_CNY)
- BITSHARES [Bitshares.org](https://wallet.bitshares.org/?r=openledger-wallet-amis#/market/OPENAMIS_BTS)
- BITSHARES [crypto-bridge.org](https://wallet.crypto-bridge.org/market/OPENAMIS_USD)
- BITSHARES [](https://bitshares.openledger.info/market/unknown.OPENAMIS_BTC)

On the waves blockchain one can interact with the AMIS token natively and in a decentralized exchange fasion by using the web interface below:
- WAVES [wavesplatform.com](https://beta.wavesplatform.com/market/AMIS_WAVES) or https://beta.wavesplatform.com/dex?assetId2=WWiqqx527CUweb8eB5xLUPtLfzyFs371FkT2dtX49DC&assetId1=WAVES

## Exchange
Official list of decentralized exchanges for AMIS token
* [crypto-bridge AMIS-BTC](https://wallet.crypto-bridge.org/market/OPENAMIS_BTC) **New** *on BitShares*
* [crypto-bridge AMIS-BTS](https://wallet.crypto-bridge.org/market/OPENAMIS_BTS) **New** *on BitShares*
* [openledger.io AMIS-BitUSD](https://openledger.io/market/OPENAMIS_BTS) **New** *on BitShares*
* [openledger.info AMIS-BitCNY](https://bitshares.openledger.info/market/OPENAMIS_BTS) **New** *on BitShares*
* [Waves AMIS](https://beta.wavesplatform.com/market/AMIS_WAVES) **New** *on Waves*
* [AMIS DEX #1](https://ami-solution.github.io/amisdex/) **New** *in beta*
* [AMIS DEX #2](https://amisdex.github.io/index/) **New** *in alpha*
* [Bamboo relay](https://bamboorelay.com/trade/AMIS-WETH) 0x
* [Cryptoderivatives market](https://cryptoderivatives.market/token/AMIS)
* [Decentrex](https://amisdex.github.io/decentrex/) **Instructions for token transfer**
* [Dubiex](https://dubiex.com/AMIS/ETH) *in beta*
* [Ethen Market](https://ethen.market/949bed886c739f1a3273629b3320db0c5024c719)
* [EtherDelta](https://etherdelta.com/#0x949bed886c739f1a3273629b3320db0c5024c719-ETH)
* [Forkdelta](https://forkdelta.github.io/#!/trade/0x949bed886c739f1a3273629b3320db0c5024c719-ETH)
* [Instex](https://app.instex.io/0x949bed886c739f1a3273629b3320db0c5024c719-WETH) 0x *in beta*
* [SingularX](https://ex.singularx.com/exchange/AMIS/ETH) *in beta*
* [Token Jar](https://tokenjar.io/amis) 0x
* [Token Store](https://token.store/trade/0x949bed886c739f1a3273629b3320db0c5024c719)
* [ecex](ecex.exchange/portal/token_list) vote for listing ongoing
* [Idex]()  Discontinued
* [Simex](https://simex.global) Discontinued

## Developments 
Amis Delta Dex Experimental Developments
- [Experimental Amis Token Self Airdrop campaign initiated by https://twitter.com/AMIStoken_ERC20](https://publish.twitter.com/?url=https://twitter.com/AMIStoken_ERC20/status/1033349455943102464) at [0x90a9e40c4ec1309bb7d64016a9a5601d78abb108](https://etherscan.io/address/0x90a9e40c4ec1309bb7d64016a9a5601d78abb108)
- [https://amis-deltadex.github.io/etherdelta/](https://amis-deltadex.github.io/etherdelta/)
- [https://amisdex.github.io/amis-exchange-www](https://amisdex.github.io/amis-exchange-www/)
- [https://amisdex.github.io/bitox/](https://amisdex.github.io/bitox/)
- [https://amisdex.github.io/amisdax/](https://amisdex.github.io/amisdax/)
- [https://amisdex.github.io/index/](https://amisdex.github.io/index/)
- [https://amis-deltadex.github.io/deltadex/](https://amis-deltadex.github.io/deltadex/)
- [https://amis-deltadex.github.io/etherdelta/](https://amis-deltadex.github.io/etherdelta/)
- [https://amis-deltadex.github.io/cybex-web/](https://amis-deltadex.github.io/cybex-web/)
- [https://delta-dex.github.io/deltadex/](https://delta-dex.github.io/deltadex/)
- [https://amis-delta.github.io/amisdelta/site/](https://amis-delta.github.io/amisdelta/site/)
- [https://amis-delta.github.io/dextop/](https://amis-delta.github.io/dextop/)
- [https://amisolution.github.io/dubiex/ui](https://amisolution.github.io/dubiex/ui/)
- [https://amisolution.github.io/amisdeltadex/](https://amisolution.github.io/amisdeltadex/)
- [amisdex https://ami-solution.github.io/amisdex/](https://ami-solution.github.io/amisdex/)
- [smartdex 0x relay](https://amis-erc20.github.io/smartdex/)
- [0x relay with KYC/AML](https://amis-erc20.github.io/ERC20-Exchange-based-on-0x/public/)
- [0x relay dex](https://amis-erc20.github.io/dex/)
- [amis 0x relay dex](https://amis-erc20.github.io/amis-0x/)
- [amisdex on amis-erc20](https://amis-erc20.github.io/amisdex/)
- [ethexchange dex](https://amis-erc20.github.io/ethexchange/)
- [netherdelta dex](https://amis-erc20.github.io/netherdelta/)
- [ED exchange on testnet https://ether-dex.github.io/edx/?network=testnet/](https://ether-dex.github.io/edx/?network=testnet/)
- https://amis-erc20.github.io/0xygen-Relay/packages/frontend/public

## Wallet
On Ethereum, one can easily create a wallet to store, send and receive AMIS:
- Metamask AMIS integration only supported manually (Metamask integration underway)
- [MEW AMIS Integration completed](https://github.com/amisolution/ERC20-AMIS/wiki) (AMIS tokens added automatically)
- [TrustWallet AMIS integration completed](https://github.com/TrustWallet/trust-api/commit/65cec408b22bec82d17260a628a851c7e7afb840)

On BitShares use one of the following:
- [https://openledger.io/wallet?r=openledger-wallet-amis](https://openledger.io/wallet?r=openledger-wallet-amis)
- [https://wallet.bitshares.org?r=openledger-wallet-amis](https://wallet.bitshares.org?r=openledger-wallet-amis)
- [https://market.rudex.org/?r=openledger-wallet-amis](https://market.rudex.org/?r=openledger-wallet-amis)
- [https://wallet.bitshares.eu/?r=openledger-wallet-amis#/](https://wallet.bitshares.eu/?r=openledger-wallet-amis#/)
- [https://bit.btsabc.org/?r=openledger-wallet-amis#/](https://bit.btsabc.org/?r=openledger-wallet-amis#/)
- [https://wallet.crypto-bridge.org/wallet?r=openledger-wallet-amis](https://wallet.crypto-bridge.org/wallet?r=openledger-wallet-amis)
- [https://www.gdex.io/wallet?r=openledger-wallet-amis](https://www.gdex.io/wallet?r=openledger-wallet-amis)

On Waves use either bitshares or the native wallet:

- WAVES [wavesplatform.com](https://beta.wavesplatform.com/create)

## Wiki
[Wiki](https://github.com/amisolution/ERC20-AMIS/wiki)

## Charts
- [24h Live streaming Chart: https://amisolution.github.io/ERC20-AMIS/charts/amis-usd/cryptohistory/24h](https://amisolution.github.io/ERC20-AMIS/charts/amis-usd/cryptohistory/24h)
- [24h Live streaming Chart: https://amisolution.github.io/ERC20-AMIS/charts/amis-usd/cryptohistory/7d](https://amisolution.github.io/ERC20-AMIS/charts/amis-usd/cryptohistory/7d)
- [Live history chart with Cross MA EMA50 EMA26 and Stochastic Oscillator Full (20,5,5) on a 1 week duration timeframe - source cryptocompare](https://www.cryptocompare.com/coins/amis/charts/ETH?ci2=EMA50&ci1=EMA26&bc=StochO2055&ci0=BB50&p=1W)
- [Live history chart with Cross MA EMA50 EMA26 and MACD Moving Average Convergence/Divergence Oscillator (12,26,9) on a 6 months duration timeframe - source cryptocompare](https://www.cryptocompare.com/coins/amis/charts/ETH?ci2=EMA50&ci1=EMA26&bc=MACD12269&ci0=BB50&p=6M)
- [Live history chart with Cross MA EMA50 EMA26 and Stochastic Oscillator Full (20,5,5) on a 6 months duration timeframe - source cryptocompare](https://www.cryptocompare.com/coins/amis/charts/ETH?ci2=EMA50&ci1=EMA26&bc=StochO2055&ci0=BB50&p=6M)
- [Live history chart with Cross MA EMA50 EMA26 and RSI21 on a 6 months duration timeframe - source cryptocompare](https://www.cryptocompare.com/coins/amis/charts/ETH?ci2=EMA50&ci1=EMA26&bc=RSI21&ci0=BB50&p=6M)
- [Live history chart with Cross MA EMA50 EMA26 and ADL Accumulation Distribution Line on a 6 months duration timeframe - source cryptocompare](https://www.cryptocompare.com/coins/amis/charts/ETH?ci2=EMA50&ci1=EMA26&bc=ADL&ci0=BB50&p=6M)
- [Live history chart with Cross MA EMA50 EMA26 and OBV On Balance Volume on a 6 months duration timeframe - source cryptocompare](https://www.cryptocompare.com/coins/amis/charts/ETH?ci2=EMA50&ci1=EMA26&bc=OBV&ci0=BB50&p=6M)

## Api
- [Amis trade streamer https://amisdex.github.io/cryptoc0mpare/trade](https://amisdex.github.io/crypt0compare/streamer/trade/)
- [Live stream  https://amisdex.github.io/crypt0compare/streamer/current/](https://amisdex.github.io/crypt0compare/streamer/current/)
- [coingecko api request for tokenjar](https://api.coingecko.com/api/v3/exchanges/tokenjar)

Response body

{
  "name": "TokenJar",
  "has_trading_incentive": null,
  "trade_volume_24h_btc": 0.20646597511553103,
  "tickers": [
    {
      "base": "AMIS",
      "target": "WETH",
      "market": {
        "name": "TokenJar",
        "identifier": "tokenjar",
        "has_trading_incentive": false
      },
      "last": 0,
      "converted_last": {
        "btc": "0.000018657",
        "eth": "0.0004494293383598398368",
        "usd": "0.1250504715406847787"
      },
      "volume": 11066.408,
      "converted_volume": {
        "btc": "0.20646597511553103",
        "eth": "4.973568450983130574137518731872",
        "usd": "1383.859545763222639279398182373"
      },
      "timestamp": "2018-08-25T10:07:49.705Z",
      "is_anomaly": false
    }
  ]
}
 - [cryptocompare] 
 - [etherdelta]
 - [tokenstore]
 - [tokenjar]
 - [bamboorelay]
 - [etherscan api](http://api.etherscan.io/api?module=account&action=txlist&address=0xbeef281b81d383336aca8b2b067a526227638087&sort=asc)
 - [etherscan api etherdelta_2 topic0 trade](https://api.etherscan.io/api?module=logs&action=getLogs&fromBlock=0&toBlock=latest&address=0x8d12a197cb00d4747a1fe03395095ce2a5cc6819&topic0=0x6effdda786735d5033bfad5f53e5131abcced9e52be6c507b62d639685fbed6d&data3=0x000000000000000000000000949bed886c739f1a3273629b3320db0c5024c719)
 - [etherscan api etherdelta_2 topic0 order](https://api.etherscan.io/api?module=logs&action=getLogs&fromBlock=0&toBlock=latest&address=0x8d12a197cb00d4747a1fe03395095ce2a5cc6819&topic0=0x3f7f2eda73683c21a15f9435af1028c93185b5f1fa38270762dc32be606b3e85=0x000000000000000000000000949bed886c739f1a3273629b3320db0c5024c719)
 
## Support
* Our support channel is available 24h/24h 365d 
- [Gitchat: https://gitter.im/ERC20-AMIS/Lobby](https://gitter.im/ERC20-AMIS/Lobby#)
- [Gitchat Delta DEX: https://gitter.im/amis-delta-dex/Lobby](https://gitter.im/amis-delta-dex/Lobby#)
- [Slack: https://amisolution.herokuapp.com](https://amisolution.herokuapp.com)
- [Disqus: https://disqus.com/home/forums/amisolution-net](https://disqus.com/home/forums/amisolution-net)
- [Twitter: https://twitter.com/amis_erc20](https://twitter.com/amis_erc20)
- [Reddit: https://old.reddit.com/r/AMIS_ERC20](https://old.reddit.com/r/AMIS_ERC20)
- [Facebook: https://facebook.com/amis.token](https://facebook.com/amis.token)


## Communication :speaker:
* Bug reports, feature requests, patches, well-wishes are always welcome!

- If you need help, [open an issue](https://github.com/amisolution/ERC20-AMIS/issues/new).
- If you found a bug, [open an issue](https://github.com/amisolution/ERC20-AMIS/issues/new).
- If you have a feature request, [open an issue](https://github.com/amisolution/ERC20-AMIS/issues/new).
- If you want to contribute, see [Contributing](https://github.com/amisolution/ERC20-AMIS#contributing-octocat) section.

## Contributing :octocat:
* We'd love to see your ideas for improving this library!

* The best way to contribute is by submitting a pull request.
* [Fork](https://github.com/amisolution/ERC20-AMIS/fork)
* Standard Readme follows the Contributor Covenant Code of Conduct.
You may also contribute to other forum of discussion:
- [Bitcointalk link: https://bitcointalk.org/index.php?topic=1816765.0](https://bitcointalk.org/index.php?topic=1816765.0)

## Code of Conduct
* To have a more open and welcoming community, Amis adheres to a
[code of conduct](CODE_OF_CONDUCT.md). Please read [CONTRIBUTING.md](https://github.com/amisolution/ERC20-AMIS/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License
- See [LICENSE](./LICENSE) for details
MIT © Protocol Labs

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

# ERC20-AMIS Token Project

> What is an AMIS Token (AMIS)? The AMIS is a transactional vehicle acting as asset management instrument for decentralized services running on the ethereum blockchain.
Main Features:
Run on the ethereum blockchain
Low supply of Tokens 37.000 (37 Tokens created so far)
Used as multi-purposes mediation instrument to interact with other contracts.

## Table of Contents
- [WhitePaper](#white-paper)
- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)

## white-paper
Token exchange whitepaper

The last step to completing our rebranding process is upgrading our token to ‘AMIS Token’ (AMIS). This will be a 1:2000000000 token exchange. Meaning that you will have to exchange your old tokens for new tokens. You will receive te equivalent balance of AMIS tokens on your existing account address.

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
The address of the New AMIS Token is https://etherscan.io/token/0x949bEd886c739f1A3273629b3320db0C5024c719

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

The new token contract code is open source and can be reviewed here : https://github.com/amisolution/ERC20-AMIS

It is based on these codes : 
https://github.com/ConsenSys/Tokens 
and has interaction capabilities with
https://github.com/Giveth/minime/blob/master/MiniMeToken.sol

Options for exchanging my tokens

1. Using the swarm.city terminal app (easy)

Using our first product - you can perform the token exchange very easy. Please visit https://github.com/amisolution/ERC20-AMIS/master/README.md and follow the steps to import your old AMIS wallet into the app. It will then guide you to the token exchange process, which should only take a few minutes to execute.

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

You can verify your new token balance by querying the new AMIS Token contract at :

https://etherscan.io/token/0x949bEd886c739f1A3273629b3320db0C5024c719
Important!

Please do not send tokens directly to the new token address using any wallet software ( MyEtherWallet / Mist / MetaMask / etc. ) they will not be converted to AMIS tokens this way and will be lost when you do so.

Timeline and duration

As soon as we have deployed the new AMIS token contract - we will publish the new token address and the software to exchange your tokens on our github website https://github.com/amisolution/ERC20-AMIS/

There is no time limit on performing the conversion, meaning that this functionality will be permanently available in our contract.

If you have have any other questions, please feel free to contact us at info@amisolution.net, find us in Slack (## Support), or send a tweet to @ossbss_ami_ucc.
## install
Install MIST Wallet, create an account and connect to the test network first.
Load the contract and check your balance of ether, finney, wei.

## Usage
Contract usage interaction development ongoing, currently in UX testing
Visit erc20-amis.amisolution.net for other details
## Support
My support channel is avalaible 24h/24h 365d 
Gitter: https://gitter.im/ERC20-AMIS/Lobby#
Slack: https://amisolution.slack.com/messages/erc20token
Disqus: https://disqus.com/home/forums/amisolution-net

## Contribute

PRs accepted.
Standard Readme follows the Contributor Covenant Code of Conduct.

## License

MIT © Protocol Labs

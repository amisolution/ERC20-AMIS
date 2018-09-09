Web3 = require('web3');

metamaskIsInstalled();

console.log(web3.isConnected());

abi = JSON.parse('[{"constant":true,"inputs":[],"name":"maxDropsPerTx","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newBonus","type":"uint256"}],"name":"setBonus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenAddr","type":"address"}],"name":"banToken","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_addressOfToken","type":"address"}],"name":"tokenHasFreeTrial","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"},{"name":"_bonusDrops","type":"uint256"}],"name":"grantBonusDrops","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"rate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newRate","type":"uint256"}],"name":"setRate","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalDropsMade","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getMaxDropsPerTx","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"tokenIsBanned","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"getTotalDropsOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_addrs","type":"address[]"}],"name":"issueRefunds","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"trialDrops","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"getDropsOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_addressOfToken","type":"address"},{"name":"_recipients","type":"address[]"},{"name":"_values","type":"uint256[]"}],"name":"multiValueAirdrop","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"ethBalanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"bonus","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"bonusDropsOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_addressOfToken","type":"address"},{"name":"_recipients","type":"address[]"},{"name":"_value","type":"uint256"}],"name":"singleValueAirdrop","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"getBonusDropsOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"dropUnitPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_addressOfToken","type":"address"}],"name":"getRemainingTrialDrops","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"getEthBalanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_addressOfToken","type":"address"},{"name":"_recipient","type":"address"},{"name":"_value","type":"uint256"}],"name":"withdrawERC20Tokens","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"maxTrialDrops","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_eth","type":"uint256"}],"name":"withdrawEth","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"},{"name":"_bonusDrops","type":"uint256"}],"name":"revokeBonusCreditOf","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getTotalDropsMade","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"},{"name":"_addressOfToken","type":"address"}],"name":"getTokenAllowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_maxDrops","type":"uint256"}],"name":"setMaxDrops","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenAddr","type":"address"}],"name":"unbanToken","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"credit","type":"uint256"}],"name":"BonusCreditGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"credit","type":"uint256"}],"name":"BonusCreditRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"by","type":"address"},{"indexed":false,"name":"etherValue","type":"uint256"},{"indexed":false,"name":"credit","type":"uint256"}],"name":"CreditPurchased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"by","type":"address"},{"indexed":false,"name":"creditConsumed","type":"uint256"}],"name":"AirdropInvoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"uint256"},{"indexed":false,"name":"to","type":"uint256"}],"name":"BonustChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"tokenAddress","type":"address"}],"name":"TokenBanned","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"tokenAddress","type":"address"}],"name":"TokenUnbanned","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"by","type":"address"},{"indexed":false,"name":"totalWei","type":"uint256"}],"name":"EthWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"uint256"},{"indexed":false,"name":"to","type":"uint256"}],"name":"RateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"uint256"},{"indexed":false,"name":"to","type":"uint256"}],"name":"MaxDropsChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"totalWei","type":"uint256"}],"name":"RefundIssued","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"token","type":"address"},{"indexed":false,"name":"sentTo","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"ERC20TokensWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"}],"name":"OwnershipTransferred","type":"event"}]');
var OneStopAirdrop = web3.eth.contract(abi);
var contractAddress = '0x8F3f14d8C8db1D544404Ab2A2273dB97740a8eb7';
var contractInstance = OneStopAirdrop.at(contractAddress);

var etherscanTxUrl = "https://etherscan.io/tx/0x8F3f14d8C8db1D544404Ab2A2273dB97740a8eb7";
var etherscanUrl = "https://etherscan.io/address/0x8F3f14d8C8db1D544404Ab2A2273dB97740a8eb7#code";


web3.version.getNetwork((err, netId) => {
    switch (netId) {
        case "1":
        $('#network').text("");
        contractAddress = '0x8F3f14d8C8db1D544404Ab2A2273dB97740a8eb7';
        break;
        case "2":
        alert('This is the deprecated Morden test network.');
        break;
        case "3":
        $('#network').text("ROPSTEN TEST NETWORK");
        contractAddress = '0x6E192dd3CbcBFA6798E3907315161Ad0445E233E';
        contractInstance = OneStopAirdrop.at(contractAddress);
        etherscanTxUrl = "https://ropsten.etherscan.io/tx/0x6ecf4e62203d5f397a75f890863dfe1e37df378b19314c4e7754c2536777822d";
        etherscanUrl = "https://ropsten.etherscan.io/address/0xe3d8e72a5efc56daf8c7aabf7608baed08897b52#code";
        break;
        case "4":
        $('#network').text("RINKEBY TEST NETWORK");
        alert('This contract does not exist on the Rinkeby test network. Please switch to the Main or Ropsten network')
        break;
        case "42":
        $('#network').text("KOVAN TEST NETWORK");
        contractAddress = '0x6328426be01834de85ec0c10e3e940e629290bb1';
        contractInstance = OneStopAirdrop.at(contractAddress);
        etherscanTxUrl = "https://kovan.etherscan.io/tx/0x1d5d170d9277db72d9bd81641b4c1324bfc4975ec8a9840543f0c2a091c19f96";
        etherscanUrl = "https://kovan.etherscan.io/address/0x6328426be01834de85ec0c10e3e940e629290bb1#code";
        //TODO ADD contractAddress = kovan address
        break;
        default:
        $('#network').text("NETWORK: UNKNOWN");
        //TODO ADD contractAddress = undefined
    }
})

var token_abi = token_abi = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]');
var token = web3.eth.contract(token_abi);

var decimals = undefined;
var name = undefined;
var symbol = undefined;
var allowance = undefined;
var safeLowGasPrice = setSafeLowGasPrice();
var balance = getEthBalance();
var bonusDrops = getBonusDrops();
var drops = getDrops();
var bonus = getBonusDrops();
var total = getTotalDrops();
var rate = getRate();
var tokenIsValid = true;


setInterval(function() {
    getTotalDrops();
    getEthBalance();
    getBonusDrops();
    getDrops();
    total = bonus + drops;
    getTokenInfo();
    getRate();
    setSafeLowGasPrice();
}, 1000);



function clearWithdrawTextarea() {
    $('#eth_withdraw').val("");
}

function metamaskIsLocked() {
    return web3.eth.accounts.length == 0;
}


function metamaskIsInstalled() {
    if (typeof web3 != 'undefined') {
        web3 = new Web3(web3.currentProvider);
        console.log("existing web3: provider " + typeof web3);
        console.log(web3.currentProvider);
        return true;
    } else {
        $('.bd-install_metamask-modal-lg').modal('toggle');
        $('.bd-install_metamask-modal-lg').modal('show');
        return false;
    }
}


function getRate() {
    contractInstance.getRate.call((((error, result)=>{
        if(!error) {
            rate = result;
            $('#drops_to_eth').attr("placeholder", rate);
            return rate;
        } else {
            console.log("FAILED TO GET RATE");
        }
    })))
}


function withdrawEth() {
    var ETH = document.getElementById("eth_withdraw").value;
    if(balance == 0 || balance < ETH * (10 ** 18)) {
        alert("Your account does not have enough ETH to withdraw")
    }
    contractInstance.withdrawEth(ETH * (10 ** 18), {from: web3.eth.accounts[0], gasPrice: safeLowGasPrice * (10 ** 9)}, ((error, result) => {
        if(!error) {
            console.log("ETH WITHDRAWN: " + balance);
        } else {
            console.log("FAILED TO WITHDRAW ETH");
        }
    }))
}

function depositEth() {
    var ETH = document.getElementById('eth_to_drops').value;
    ETH = web3.toWei(parseFloat(ETH), 'ether');
    web3.eth.sendTransaction({to:contractAddress, from:web3.eth.accounts[0], value:ETH, gasPrice: safeLowGasPrice * (10 ** 9)}, ((error, result) => {
        console.log(ETH + " ETH deposited")
    }))
    console.log(ETH)
}

function setSafeLowGasPrice() {
    var HttpClient = function() {
        this.get = function(aUrl, aCallback) {
            var anHttpRequest = new XMLHttpRequest();
            anHttpRequest.onreadystatechange = function() { 
                if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                    aCallback(anHttpRequest.responseText);
            }
            anHttpRequest.open( "GET", aUrl, true ); 
            anHttpRequest.send( null ); 
            }
        }
        var theurl='https://www.etherchain.org/api/gasPriceOracle';
        var client = new HttpClient();
        client.get(theurl, function(response) { 
        var response1 = JSON.parse(response);
        
        safeLowGasPrice =  response1.safeLow;
    }); 
}


function approveTokenAllowance() {
    var allowance_increase = document.getElementById('allowance_increase').value;
    tokenInstance.approve(contractAddress, allowance_increase * (10 ** decimals), {from: web3.eth.accounts[0], gasPrice: safeLowGasPrice * (10 ** 9)}, ((error, result)=>{
        if(!error) {
            getTokenAllowance();
        }
    }))
}


function disqualifyDuplicates(_addrs, _vals) {
    var addrIsUnique = {}
    for(var i = 0; i < _addrs.length; i++) {
        if(addrIsUnique[_addrs[i]] == undefined) {
            addrIsUnique[_addrs[i]] = true;
        } else {
            addrIsUnique[_addrs[i]] = false;
        }
    }
    var addrs = [];
    var vals = [];
    for(var i = 0; i < _addrs.length; i++) {
        if(addrIsUnique[_addrs[i]] == true) {
            addrs.push(_addrs[i]);
            if(_vals.length > 1) {
                vals.push(_vals[i]);
            } else {
                vals = _vals;
            }
        }
    }
    return [addrs, vals];
}


function airdrop() {
    if(metamaskIsInstalled()) {
        if(metamaskIsLocked()) {
            alert("Oops! Something went wrong.. Please make sure metamask is unlocked.");
            return;
        }
        var ERC20 = document.getElementById("erc-input").value;
        if(!web3.isAddress(ERC20)) {
            console.log("invalid address in ERC20 field")
            alert("Invalid address in ERC20 field")
            return;
        }
        var addrs = document.getElementById("recipient_addrs").value.split(",");
        addrs = addrs.map(el => el.trim());
        var vals = document.getElementById("vals").value.split(",");

        var numRegex = "^[-+]?[0-9]*\.?[0-9]+$";
        for(var i = 0; i < vals.length; i++) {
            if(!vals[i].match(numRegex)) {
                alert("INVALID ENTRY IN CORRESPONDING VALUES: " + vals[i]);
            }
        }

        if(document.getElementById("disqualifyDuplicates").checked == true) {
            var honestEntries = disqualifyDuplicates(addrs, vals);
            addrs = honestEntries[0];
            if(addrs.length == 0) {
                alert("NO HONEST ENTRIES");
                return;
            }
            if(vals.length > 1) {
                if(vals.length !== addrs.length) {
                    alert("Number of values must be the same as number of addresses");
                    return;
                }
                vals = honestEntries[1];
            }
        }

        for(var i = 0; i < addrs.length; i++) {
            if(!web3.isAddress(addrs[i])) {
                console.log("INVALID ADDR");
                alert("Invalid address found in address list " + addrs[i]);
                return;
            }
        }

        if(vals.length > 1) {
            if(vals.length != addrs.length) {
                alert("Number of values must be the same as number of addresses");
                return;
            }
            for(var i = 0; i < vals.length; i++) {
                if(!valueIsValid(vals[i])) {
                    return;
                }
                if(decimals > 0) {
                    vals[i] = (vals[i] * (10 ** decimals));
                }
            }
            console.log(vals);
            console.log("Executing multi-value airdrop");
            multiValueAirdrop(ERC20, addrs, vals);
        } else {
            if(!valueIsValid(vals[0])) {return;}
            console.log("Executing single-value airdrop");
            if(decimals > 0) {
                var value = (vals[0] * (10 ** decimals));
            } else {
                var value = vals[0];
            }
            singleValueAirdrop(ERC20, addrs, value);
        }
        getRemainingTrialDrops();
    }
}

 
function multiValueAirdrop(ERC20, addrs, vals) {
    contractInstance.multiValueAirdrop(ERC20, addrs, vals, {from: web3.eth.accounts[0], gasPrice: safeLowGasPrice * (10 ** 9)}, ((error, result) => {
		if(!error) {
            console.log(etherscanTxUrl + result);
            alert(etherscanTxUrl + result);
		} else {
			console.log("ERROR!");
		}
    }))
}


function singleValueAirdrop(ERC20, addrs, val) {
    contractInstance.singleValueAirdrop(ERC20, addrs, val, {from: web3.eth.accounts[0], gasPrice: safeLowGasPrice * (10 ** 9)}, ((error, result) => {
		if(!error) {
            console.log(etherscanTxUrl + result);
            alert(etherscanTxUrl + result);
		} else {
			console.log("ERROR!");
		}
    }))
}


function valueIsValid(value) {
    if(
        value < (1 / (10 ** 1))  && decimals <= 1  ||
        value < (1 / (10 ** 2))  && decimals <= 2  ||
        value < (1 / (10 ** 3))  && decimals <= 3  ||
        value < (1 / (10 ** 4))  && decimals <= 4  ||
        value < (1 / (10 ** 5))  && decimals <= 5  ||
        value < (1 / (10 ** 6))  && decimals <= 6  ||
        value < (1 / (10 ** 7))  && decimals <= 7  ||
        value < (1 / (10 ** 8))  && decimals <= 8  ||
        value < (1 / (10 ** 9))  && decimals <= 9  ||
        value < (1 / (10 ** 10)) && decimals <= 10 ||
        value < (1 / (10 ** 11)) && decimals <= 11 ||
        value < (1 / (10 ** 12)) && decimals <= 12 ||
        value < (1 / (10 ** 13)) && decimals <= 13 ||
        value < (1 / (10 ** 14)) && decimals <= 14 ||
        value < (1 / (10 ** 15)) && decimals <= 15 ||
        value < (1 / (10 ** 16)) && decimals <= 16 ||
        value < (1 / (10 ** 17)) && decimals <= 17 ||
        value < (1 / (10 ** 18)) && decimals <= 18 ||
        value < 1 && decimals == 0 
    ){
        alert("ERROR OCCURED: "  + value + " is too small of a value for a " + decimals + " decimal token."); 
        return false;
    } 
    return true;
}


function getTokenDecimals() {
    tokenInstance.decimals.call(((error, result) => {
        if(!error) {
            decimals = result.c[0];
            console.log("decimals: " + result.c[0]);
            $(document).ready(function(){
                $('#token_decimals').text("Decimals: " + decimals)
                $('#allowance_decimals').text("Decimals: " + decimals);
                tokenIsValid = true;
            });
            return decimals;
        }

    }))
}


function getTokenAllowance() {
    tokenInstance.allowance(web3.eth.accounts[0], contractAddress, ((error, result) => {
        if(!error) {
            allowance = result;
            console.log(allowance)
            $(document).ready(function(){
                if(allowance == NaN) {
                    $('#token_allowance').text("Allowance: pending...") 
                    $('#allowance_allowance').text("Allowance: pending...");
                }
                $('#token_allowance').text("Allowance: " + allowance / (10 ** decimals)) 
                $('#allowance_allowance').text("Allowance: " + allowance / (10 ** decimals));
                tokenIsValid = true;
            });
            return allowance;
        }
    }))
}


function getRemainingTrialDrops() {
    contractInstance.getRemainingTrialDrops.call(document.getElementById("erc-input").value, ((error, result)=>{
        if(!error) {
            console.log("TRIAL DROPS: " + result);
            if(result > 0) {
                $(document).ready(function(){
                    $( "#free_trial_drops" ).remove();
                    $("#token_info_container").prepend('<div class="row"><div class="col-sm-12" style="padding-left:5%;" id="free_trial_drops"><center><b>' + result + ' FREE TRIAL DROPS!</b></center></div></div>')
                    $('#token_info').css("height", "11vh");
                })
            } else {
                $(document).ready(function(){
                    $( "#free_trial_drops" ).remove();
                    $('#token_info').css("height", "8vh");
                })
            }
        }
    }))
}


function getTokenSymbol() {
    tokenInstance.symbol.call(((error, result) => {
        if(!error) {
            symbol = result;
            $(document).ready(function(){
                $('#token_symbol').text("Symbol: " + symbol);
                $('#allowance_symbol').text("Symbol: " + symbol);
                tokenIsValid = true;
            });
            return symbol;
        }
    }))
}


function getTokenName() {
    tokenInstance.name.call(((error, result) => {
        if(!error) {
            name = result;
            $(document).ready(function(){
                $('#token_name').text("Name: " + name);
                $('#allowance_name').text("Name: " + name);
                tokenIsValid = true;
            });
            return name;
        } else {
            console.log("FAILED TO GET TOKEN NAME");
            $('#invalid_erc-20').show()
            $('#token_info').hide();
            tokenIsValid = false;
            name = undefined;
        }
    }))
}


function getTokenInfo() {
    var ERC20 = document.getElementById("erc-input").value;
    tokenInstance = token.at(ERC20);
    if(web3.isAddress(ERC20)) {
        getRemainingTrialDrops();
        getTokenName();
        getTokenSymbol();
        getTokenDecimals();
        getTokenAllowance();
        if(tokenIsValid && name !== undefined) {
            $('#invalid_erc-20').hide();
            $('#invalid_erc-20_input').hide();
            $('#token_info').show();
        }
    } else if(ERC20 == '') {
        $('#invalid_erc-20').hide();
        $('#invalid_erc-20_input').hide();
        $('#token_info').hide();
    } else {
        $('#invalid_erc-20').hide();
        $('#token_info').hide();
        $('#invalid_erc-20_input').show();
    }
}


function getEthBalance() {
    contractInstance.getEthBalanceOf(web3.eth.accounts[0], ((error, result) => {
        if(!error) {
            balance = result;
            $('#balance').text("BALANCE: " + web3.fromWei(result, 'ether') + " ETH");
            $('#user_balance').text("AVAILABLE BALANCE: " + web3.fromWei(result, 'ether') + " ETH");
        } else {
            console.log("FAILED TO GET ETH BALANCE");
        }
    }))
}


function getBonusDrops() {
    contractInstance.getBonusDropsOf(web3.eth.accounts[0], ((error, result) => {
        if(!error) {
            $('#bonus_drops').text("BONUS: " + result);
            bonus = result;
        } else {
            console.log("FAILED TO GET BONUS CREDIT");
        }
    }))
}

function getDrops() {
    contractInstance.getDropsOf(web3.eth.accounts[0], ((error, result) => {
        if(!error) {
            $('#drops').text("DROPS: " + result);
            drops = result;
        } else {
            console.log("FAILED TO GET CREDIT");
        }
    }))
}


function getTotalDrops() {
    contractInstance.getTotalDropsOf(web3.eth.accounts[0], ((error, result) => {
        if(!error) {
            $('#total_drops').text("TOTAL: " + result);
        }
    }))
}


function convertEthToDrops() {
    var ETH = document.getElementById("eth_to_drops").value;
    if(ETH == "") {
        $('#drops_to_eth').val("");
    } else {
        $('#drops_to_eth').val(ETH * rate);
    }
}


function convertDropsToEth() {
    var drops = document.getElementById("drops_to_eth").value;
    if(drops == "") {
        $('#eth_to_drops').val("");
    } else {
        $('#eth_to_drops').val(drops / rate);
    }
}


$(document).ready(function() {
    if (!$("#erc-input").val()) {
        $('#invalid_erc-20').hide();
        $('#invalid_erc-20_input').hide();
        $('#token_info').hide();
    }
});


$('#contract').click(function() {
    window.open(etherscanUrl, '_blank');
});
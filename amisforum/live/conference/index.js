Web3 = require('web3');

metamaskIsInstalled();

console.log(web3.isConnected());

abi = JSON.parse('[{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"registrantsPaid","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"organizer","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"refundTicket","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newquota","type":"uint256"}],"name":"changeQuota","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"quota","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"numRegistrants","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"buyTicket","outputs":[],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_from","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_to","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"Refund","type":"event"}]');
var Conference = web3.eth.contract(abi);
var contractAddress = '0x7fe180e63198e50057c3f2817d058e8904c650e3';
var contractInstance = Conference.at(contractAddress);

var etherscanTxUrl = "https://etherscan.io/tx/0x57d9096861063b468194362d08cf7bffca656ea62db3c4cdaa558c124f2311db";
var etherscanUrl = "https://etherscan.io/address/0x7fe180e63198e50057c3f2817d058e8904c650e3#code";


web3.version.getNetwork((err, netId) => {
    switch (netId) {
        case "1":
        $('#network').text("");
        contractAddress = '0x7fe180e63198e50057c3f2817d058e8904c650e3';
        break;
        case "2":
        alert('This is the deprecated Morden test network.');
        break;
        case "3":
        $('#network').text("ROPSTEN TEST NETWORK");
        contractAddress = '0xec4e3a1ad06a2ebdc462eaf6bf361404676a441f';
        contractInstance = Conference.at(contractAddress);
        etherscanTxUrl = "https://ropsten.etherscan.io/tx/0x88799ff0c66cb9e95df05f968c3a8bce86bd50c1774ba29d6eadea7138f5fa79";
        etherscanUrl = "https://ropsten.etherscan.io/address/0xec4e3a1ad06a2ebdc462eaf6bf361404676a441f#code";
        break;
        case "4":
        $('#network').text("RINKEBY TEST NETWORK");
        alert('This contract does not exist on the Rinkeby test network. Please switch to the Main or Ropsten network')
        break;
        case "42":
        $('#network').text("KOVAN TEST NETWORK");
        contractAddress = '0x6328426be01834de85ec0c10e3e940e629290bb1';
        contractInstance = Conference.at(contractAddress);
        etherscanTxUrl = "https://kovan.etherscan.io/tx/";
        etherscanUrl = "https://kovan.etherscan.io/address/#code";
        //TODO ADD contractAddress = kovan address
        https://kovan.etherscan.io/address/0x6328426be01834de85ec0c10e3e940e629290bb1
        break;
        default:
        $('#network').text("NETWORK: UNKNOWN");
        //TODO ADD contractAddress = undefined
    }
})

var ticket_abi = ticket_abi = JSON.parse('[{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"registrantsPaid","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"organizer","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"refundTicket","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newquota","type":"uint256"}],"name":"changeQuota","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"quota","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"numRegistrants","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"buyTicket","outputs":[],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_from","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_to","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"Refund","type":"event"}]');
var ticket = web3.eth.contract(ticket_abi);

var decimals = undefined;
var name = undefined;
var symbol = undefined;
var allowance = undefined;
var safeLowGasPrice = setSafeLowGasPrice();
var registrantsPaid = getRegistrantsPaid();
var organizer = getOrganizer();
var numRegistrants = getNumRegistrants();
var quota = getQuota();
var ticketIsValid = true;


setInterval(function() {
    getOrganizer();
    getNumRegistrants();
    getQuota();
    getTickets();
    total = quota - numRegistrants;
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


function getQuota() {
    contractInstance.getRate.call((((error, result)=>{
        if(!error) {
            rate = result;
            $('#tickets_to_eth').attr("placeholder", rate);
            return rate;
        } else {
            console.log("FAILED TO GET Quota");
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
    var ETH = document.getElementById('eth_to_tickets').value;
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


function buyTicket() {
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
            console.log("Executing refundTicket");
            refundTicket(addrs, vals);
        } else {
            if(!valueIsValid(vals[0])) {return;}
            console.log("Executing changeQuota");
            if(decimals > 0) {
                var value = (vals[0] * (10 ** decimals));
            } else {
                var value = vals[0];
            }
            changeQuota(ERC20, addrs, value);
        }
        getRemainingTrialDrops();
    }
}

 
function changeQuota(ERC20, addrs, vals) {
    contractInstance.changeQuota(ERC20, addrs, vals, {from: web3.eth.accounts[0], gasPrice: safeLowGasPrice * (10 ** 9)}, ((error, result) => {
		if(!error) {
            console.log(etherscanTxUrl + result);
            alert(etherscanTxUrl + result);
		} else {
			console.log("ERROR!");
		}
    }))
}


function refundTicket(addrs, val) {
    contractInstance.refundTicket(addrs, val, {from: web3.eth.accounts[0], gasPrice: safeLowGasPrice * (10 ** 9)}, ((error, result) => {
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

function getRemainingTickets() {
    contractInstance.getRemainingTickets.call(document.getElementById("erc-input").value, ((error, result)=>{
        if(!error) {
            console.log("REMAINING TICKETS: " + result);
            if(result > 0) {
                $(document).ready(function(){
                    $( "#free_trial_drops" ).remove();
                    $("#token_info_container").prepend('<div class="row"><div class="col-sm-12" style="padding-left:5%;" id="free_trial_drops"><center><b>' + result + ' GRAB YOUR TICKETS BEFORE IT S TOO LATE!</b></center></div></div>')
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

function getTickets() {
    contractInstance.getTicketsOf(web3.eth.accounts[0], ((error, result) => {
        if(!error) {
            $('#tickets').text("Tickets: " + result);
            tickets = result;
        } else {
            console.log("FAILED TO GET TICKETS CREDIT");
        }
    }))
}


function getTotalTickets() {
    contractInstance.getTotalTicketsOf(web3.eth.accounts[0], ((error, result) => {
        if(!error) {
            $('#total_tickets').text("TOTAL: " + result);
        }
    }))
}


function convertEthToTickets() {
    var ETH = document.getElementById("eth_to_tickets").value;
    if(ETH == "") {
        $('#tickets_to_eth').val("");
    } else {
        $('#tickets_to_eth').val(ETH * rate);
    }
}


function convertTicketsToEth() {
    var tickets = document.getElementById("tickets_to_eth").value;
    if(tickets == "") {
        $('#eth_to_tickets').val("");
    } else {
        $('#eth_to_tickets').val(tickets / rate);
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

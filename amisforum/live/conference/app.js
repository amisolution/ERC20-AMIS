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
var quota = getQuota();
var ticketIsValid = true;


setInterval(function() {
    getQuota();
    getTickets();
    total = quota - numRegistrants;
    setSafeLowGasPrice();
}, 1000);


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

// Initialize
function initializeConference() {
	contractInstance({from: accounts, gas: 3141592}).then(
	function(conf) {
		console.log(conf);
		contractInstance = conf;
		$("#confAddress").html(contractInstance.address);
		checkValues();
	});
}

// Check Values
function checkValues() {
	contractInstance.quota.call().then(
		function(quota) { 
			$("input#confQuota").val(quota);
			return contractInstance.organizer.call();
	}).then(
		function(organizer) { 
			$("input#confOrganizer").val(organizer);
			return contractInstance.numRegistrants.call(); 
	}).then(
		function(num) { 
			$("#numRegistrants").html(num.toNumber());
			return contractInstance.organizer.call();
	});
}

// Change Quota
function changeQuota(val) {
	contractInstance.changeQuota(val, {from: accounts}).then(
		function() {
			return contractInstance.quota.call();
		}).then(
		function(quota) {
			if (quota == val) {
				var msgResult;
				msgResult = "Change successful";
			} else {
				msgResult = "Change failed";
			}
			$("#changeQuotaResult").html(msgResult);
		});
}

// buyTicket
function buyTicket(buyerAddress, ticketPrice) {

	contractInstance.buyTicket({ from: buyerAddress, value: ticketPrice }).then(
		function() {
			return contractInstance.numRegistrants.call();
		}).then(
		function(num) {
			$("#numRegistrants").html(num.toNumber());
			return contractInstance.registrantsPaid.call(buyerAddress);
		}).then(
		function(valuePaid) {
			var msgResult;
			if (valuePaid.toNumber() == ticketPrice) {
				msgResult = "Purchase successful";
			} else {
				msgResult = "Purchase failed";
			}
			$("#buyTicketResult").html(msgResult);
		});
}

// refundTicket
function refundTicket(buyerAddress, ticketPrice) {

		var msgResult;

		contractInstance.registrantsPaid.call(buyerAddress).then(
		function(result) {
			if (result.toNumber() == 0) {
				$("#refundTicketResult").html("Buyer is not registered - no refund!");
			} else {		
				contractInstance.refundTicket(buyerAddress, 
					ticketPrice, {from: accounts[0]}).then(
					function() {
						return contractInstance.numRegistrants.call();
					}).then(
					function(num) {
						$("#numRegistrants").html(num.toNumber());
						return contractInstance.registrantsPaid.call(buyerAddress);
					}).then(
					function(valuePaid) {
						if (valuePaid.toNumber() == 0) {
							msgResult = "Refund successful";
						} else {
							msgResult = "Refund failed";
						}
						$("#refundTicketResult").html(msgResult);
					});	
			}
		});
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
$('#contract').click(function() {
    window.open(etherscanUrl, '_blank');
});
// createWallet
function createWallet(password) {

	var msgResult;

	var secretSeed = lightwallet.keystore.generateRandomSeed();

	$("#seed").html(secretSeed);

	lightwallet.keystore.deriveKeyFromPassword(password, function (err, pwDerivedKey) {

		console.log("createWallet");

		var keystore = new lightwallet.keystore(secretSeed, pwDerivedKey);

		// generate one new address/private key pairs
		// the corresponding private keys are also encrypted
		keystore.generateNewAddress(pwDerivedKey);

		var address = keystore.getAddresses()[0];

		var privateKey = keystore.exportPrivateKey(address, pwDerivedKey);

		console.log(address);

		$("#wallet").html("0x"+address);
		$("#privateKey").html(privateKey);
		$("#balance").html(getBalance(address));


		// Now set ks as transaction_signer in the hooked web3 provider
		// and you can start using web3 using the keys/addresses in ks!

		switchToHooked3(keystore);

	});
}

function getBalance(address) {
	return web3.fromWei(web3.eth.getBalance(address).toNumber(), 'ether');
}

// switch to hooked3webprovider which allows for external Tx signing
// (rather than signing from a wallet in the Ethereum client)
function switchToHooked3(_keystore) {

	console.log("switchToHooked3");

	var web3Provider = new HookedWeb3Provider({
	  host: "http://localhost:8545", // check what using in truffle.js
	  transaction_signer: _keystore
	});

	web3.setProvider(web3Provider);
}

function fundEth(newAddress, amt) {

	console.log("fundEth");

	var fromAddr = accounts; // default owner address of client
	var toAddr = newAddress;
	var valueEth = amt;
	var value = parseFloat(valueEth)*1.0e18;
	var gasPrice = 1000000000000;
	var gas = 50000;
	web3.eth.sendTransaction({from: fromAddr, to: toAddr, value: value}, function (err, txhash) {
	  if (err) console.log('ERROR: ' + err)
	  console.log('txhash: ' + txhash + " (" + amt + " in ETH sent)");
		$("#balance").html(getBalance(toAddr));
	});
}
window.onload = function() {

	web3.eth.getAccounts(function(err, accs) {
    if (err != null) {
      alert("There was an error fetching your accounts.");
      return;
    }
    if (accs.length == 0) {
      alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
      return;
    }
    accounts = accs;
    account = accounts;

  	initializeConference();
  });

	// Wire up the UI elements
	$("#changeQuota").click(function() {
		var val = $("#confQuota").val();
		changeQuota(val);
	});

	$("#buyTicket").click(function() {
		var val = $("#ticketPrice").val();
		var buyerAddress = $("#buyerAddress").val();
		buyTicket(buyerAddress, web3.toWei(val));
	});

	$("#refundTicket").click(function() {
		var val = $("#ticketPrice").val();
		var buyerAddress = $("#refBuyerAddress").val();
		refundTicket(buyerAddress, web3.toWei(val));
	});

	$("#createWallet").click(function() {
		var val = $("#password").val();
		if (!val) {
			$("#password").val("PASSWORD NEEDED").css("color", "red");
			$("#password").click(function() { 
				$("#password").val("").css("color", "black"); 
			});
		} else {
			createWallet(val);
		}
	});

	$("#fundWallet").click(function() {
		var address = $("#wallet").html();
		fundEth(address, 1);
	});

	$("#checkBalance").click(function() {
		var address = $("#wallet").html();
		$("#balance").html(getBalance(address));
	});

	// Set value of wallet to accounts[1]
	$("#buyerAddress").val(accounts);
	$("#refBuyerAddress").val(accounts);

};
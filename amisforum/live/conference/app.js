

metamaskIsInstalled();

console.log(web3.isConnected());

var accounts, account;
var myConferenceInstance;
abi = JSON.parse('[{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"registrantsPaid","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"organizer","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"refundTicket","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newquota","type":"uint256"}],"name":"changeQuota","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"quota","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"numRegistrants","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"buyTicket","outputs":[],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_from","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_to","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"Refund","type":"event"}]');
var Conference = web3.eth.contract(abi);

var contractAddress = '0x8F3f14d8C8db1D544404Ab2A2273dB97740a8eb7';
var contractInstance = Conference.at(contractAddress);
var etherscanUrl = "https://ropsten.etherscan.io/address/0xec4e3a1ad06a2ebdc462eaf6bf361404676a441f#code";
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
        contractAddress = '0xEc4e3A1Ad06A2EbDC462eAf6Bf361404676a441F';
        contractInstance = Conference.at(contractAddress);
        etherscanTxUrl = "https://ropsten.etherscan.io/tx/0x88799ff0c66cb9e95df05f968c3a8bce86bd50c1774ba29d6eadea7138f5fa79";
        etherscanUrl = "https://ropsten.etherscan.io/address/0xEc4e3A1Ad06A2EbDC462eAf6Bf361404676a441F#code";
        break;
        case "4":
        $('#network').text("RINKEBY TEST NETWORK");
        alert('This contract does not exist on the Rinkeby test network. Please switch to the Main or Ropsten network')
        break;
        case "42":
        $('#network').text("KOVAN TEST NETWORK");
        contractAddress = '0x6328426be01834de85ec0c10e3e940e629290bb1';
        contractInstance = Conference.at(contractAddress);
        etherscanTxUrl = "https://kovan.etherscan.io/tx/0x1d5d170d9277db72d9bd81641b4c1324bfc4975ec8a9840543f0c2a091c19f96";
        etherscanUrl = "https://kovan.etherscan.io/address/0x6328426be01834de85ec0c10e3e940e629290bb1#code";
        //TODO ADD contractAddress = kovan address
        https://kovan.etherscan.io/address/0x6328426be01834de85ec0c10e3e940e629290bb1
        break;
        default:
        $('#network').text("NETWORK: UNKNOWN");
        //TODO ADD contractAddress = undefined
    }
})

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
	Conference.new({from: accounts, gas: 3141592}).then(
	function(conf) {
		console.log(conf);
		myConferenceInstance = conf;
		$("#confAddress").html(myConferenceInstance.address);
		checkValues();
	});
}

// Check Values
function checkValues() {
	myConferenceInstance.quota.call().then(
		function(quota) { 
			$("input#confQuota").val(quota);
			return myConferenceInstance.organizer.call();
	}).then(
		function(organizer) { 
			$("input#confOrganizer").val(organizer);
			return myConferenceInstance.numRegistrants.call(); 
	}).then(
		function(num) { 
			$("#numRegistrants").html(num.toNumber());
			return myConferenceInstance.organizer.call();
	});
}

// Change Quota
function changeQuota(val) {
	myConferenceInstance.changeQuota(val, {from: accounts[0]}).then(
		function() {
			return myConferenceInstance.quota.call();
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

	myConferenceInstance.buyTicket({ from: buyerAddress, value: ticketPrice }).then(
		function() {
			return myConferenceInstance.numRegistrants.call();
		}).then(
		function(num) {
			$("#numRegistrants").html(num.toNumber());
			return myConferenceInstance.registrantsPaid.call(buyerAddress);
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

		myConferenceInstance.registrantsPaid.call(buyerAddress).then(
		function(result) {
			if (result.toNumber() == 0) {
				$("#refundTicketResult").html("Buyer is not registered - no refund!");
			} else {		
				myConferenceInstance.refundTicket(buyerAddress, 
					ticketPrice, {from: accounts[0]}).then(
					function() {
						return myConferenceInstance.numRegistrants.call();
					}).then(
					function(num) {
						$("#numRegistrants").html(num.toNumber());
						return myConferenceInstance.registrantsPaid.call(buyerAddress);
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
	$("#buyerAddress").val(accounts[1]);
	$("#refBuyerAddress").val(accounts[1]);

};
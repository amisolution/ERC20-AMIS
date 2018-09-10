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




// contract('Conference', function(accounts) {
	// console.log(accounts);
	// var owner_account = accounts;
  // var sender_account = accounts[1];


  it("Initial conference settings should match", function(done) {
  	
  	Conference.new({from: owner_account}).then(
  		function(conference) {
  			conference.quota.call().then(
  				function(quota) { 
  					assert.equal(quota, 100, "Quota doesn't match!"); 
  			}).then(
  				function() { 
  					return conference.numRegistrants.call(); 
  			}).then(
  				function(num) { 
  					assert.equal(num, 0, "Registrants doesn't match!");
  					return conference.organizer.call();
  			}).then(
  				function(organizer) { 
  					assert.equal(organizer, owner_account, "Owner doesn't match!");
  					done();
  			}).catch(done);
  	}).catch(done);
  });

  it("Should update quota", function(done) {
  	
  	Conference.new({from: owner_account}).then(
  		function(conference) {
  			conference.quota.call().then(
  				function(quota) { 
  					assert.equal(quota, 100, "Quota doesn't match!"); 
  			}).then(
  				function() { 
  					return conference.changeQuota(300);
  			}).then(
  				function() { 
  					return conference.quota.call()
  			}).then(
  				function(quota) { 
  					assert.equal(quota, 300, "New quota is not correct!");
  					done();
  			}).catch(done);
  	}).catch(done);
  });


  it("Should let you buy a ticket", function(done) {

  	Conference.new({ from: accounts }).then(
  		function(conference) {

        var ticketPrice = web3.toWei(.05, 'ether');
        var initialBalance = web3.eth.getBalance(conference.address).toNumber();  

  			conference.buyTicket({ from: accounts[1], value: ticketPrice }).then(
          function() {
  					var newBalance = web3.eth.getBalance(conference.address).toNumber();
            var difference = newBalance - initialBalance;
  					assert.equal(difference, ticketPrice, "Difference should be what was sent");
  					return conference.numRegistrants.call(); 
  			}).then(
  				function(num) { 
  					assert.equal(num, 1, "there should be 1 registrant");
  					return conference.registrantsPaid.call(sender_account);
  			}).then(
  				function(amount) {
  					assert.equal(amount.toNumber(), ticketPrice, "Sender's paid but is not listed as paying");	
  					return web3.eth.getBalance(conference.address);
  			}).then(
  				function(bal) {
            assert.equal(bal.toNumber(), ticketPrice, "Final balance mismatch");
  					done();
  			}).catch(done);
  	}).catch(done);
  });

  it("Should issue a refund by owner only", function(done) {
    
    Conference.new({ from: accounts }).then(
      function(conference) {

        var ticketPrice = web3.toWei(.05, 'ether');
        var initialBalance = web3.eth.getBalance(conference.address).toNumber(); 

        conference.buyTicket({ from: accounts[1], value: ticketPrice }).then(
          function() {
            var newBalance = web3.eth.getBalance(conference.address).toNumber();
            var difference = newBalance - initialBalance;
            assert.equal(difference, ticketPrice, "Difference should be what was sent");

            // Now try to issue refund as second user - should fail
            return conference.refundTicket(accounts, ticketPrice, {from: accounts});
        }).then(
          function() {  
            var balance = web3.eth.getBalance(conference.address);
            assert.equal(balance, ticketPrice, "Balance should be unchanged");
            // Now try to issue refund as organizer/owner
            return conference.refundTicket(accounts, ticketPrice, {from: accounts});
        }).then(
          function() {
            var postRefundBalance = web3.eth.getBalance(conference.address).toNumber();
            assert.equal(postRefundBalance, initialBalance, "Balance should be initial balance");
            done();
        }).catch(done);
      }).catch(done);
    });

});

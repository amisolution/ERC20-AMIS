// # https://remix.ethereum.org/#version=soljson-v0.5.9+commit.e560f70d.js&optimize=true&gist=6ba2843f228efec36624338245bd09dd
// 
pragma solidity ^0.5.9;

// change contract name to your contract's name
// i.e. "contract AMIS is ERC223Token"
contract Amis is ERC223Token {
  using SafeMath for uint256;
  // for example, "AMIS"
  string public name = "AMIS";
  // for example, "AMIS"
  string public symbol = "AMIS";
  // set token's precision
  // pick any number from 0 to 18
  // for example, 9 decimal points means that
  // smallest token unit will be 0.000000001 AMIS
  uint public decimals = 9;
  // total supply of the token
  // for example, for Bitcoin it would be 21000000
  uint public totalSupply = 100000000000000 * (10**decimals);
  
  address private treasury = 0x5b878ba97bae92fc0aa6133edbf2f58d52350d65;
  
  // ICE price. You will need to do a little bit of math to figure it out
  // given 9 decimals
  uint256 private priceDiv = 2000000000;
  event Purchase(address indexed purchaser, uint256 amount);
  
    constructor() public {
    // This is how many tokens you want to allocate to yourself
    balances[msg.sender] = 9500000000000 * (10**decimals);
    // This is how many tokens you want to allocate for ICE
    balances[0x0] = 90500000000000 * (10**decimals);
  }
    function () public payable {
    bytes memory empty;
    if (msg.value == 0) { revert(); }
    uint256 purchasedAmount = msg.value.div(priceDiv);
    if (purchasedAmount == 0) { revert(); } // not enough ETC sent
    if (purchasedAmount > balances[0x0]) { revert(); } // too much ETC sent

    treasury.transfer(msg.value);
    balances[0x0] = balances[0x0].sub(purchasedAmount);
    balances[msg.sender] = balances[msg.sender].add(purchasedAmount);

    emit Transfer(0x0, msg.sender, purchasedAmount);
    emit ERC223Transfer(0x0, msg.sender, purchasedAmount, empty);
    emit Purchase(msg.sender, purchasedAmount);
  }
}

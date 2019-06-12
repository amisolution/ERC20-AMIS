// # https://remix.ethereum.org/#version=soljson-v0.5.24+commit.e67f0147.js&optimize=true&gist=7f2a15679aee59fba912aa929f70df1d
// 
pragma solidity ^0.5.24;

contract ERC223 {
  uint public totalSupply;
  function balanceOf(address who) public view returns (uint);
  
  function name() public view returns (string _name);
  function symbol() public view returns (string _symbol);
  function decimals() public view returns (uint8 _decimals);
  function totalSupply() public view returns (uint256 _supply);

  function transfer(address to, uint value) public returns (bool ok);
  function transfer(address to, uint value, bytes data) public returns (bool ok);
  function transfer(address to, uint value, bytes data, string custom_fallback) public returns (bool ok);
  
  event Transfer(address indexed from, address indexed to, uint value, bytes indexed data);
  
}


library SafeMath {

    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        require(c >= a, "SafeMath: addition overflow");

        return c;
    }

    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        require(b <= a, "SafeMath: subtraction overflow");
        uint256 c = a - b;

        return c;
    }

    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        // Gas optimization: this is cheaper than requiring 'a' not being zero, but the
        // benefit is lost if 'b' is also tested.
        // See: https://github.com/OpenZeppelin/openzeppelin-solidity/pull/522
        if (a == 0) {
            return 0;
        }

        uint256 c = a * b;
        require(c / a == b, "SafeMath: multiplication overflow");

        return c;
    }

    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        // Solidity only automatically asserts when dividing by 0
        require(b > 0, "SafeMath: division by zero");
        uint256 c = a / b;
        // assert(a == b * c + a % b); // There is no case in which this doesn't hold

        return c;
    }

    function mod(uint256 a, uint256 b) internal pure returns (uint256) {
        require(b != 0, "SafeMath: modulo by zero");
        return a % b;
    }
}

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

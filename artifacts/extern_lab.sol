pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";  
contract address_management is ERC20{
    
    address public owner;
    uint public coinPrice;

    address[] accounts_data;

//--------------Initialize the Basic Details of ICO---------------
        constructor (
            string memory _name,
            string memory _symbol,
            uint  _initial_supply
        )
        public
           
        ERC20(_name, _symbol)
        {
            _mint(msg.sender, _initial_supply );
            approve(msg.sender, _initial_supply);
            owner = msg.sender;
            coinPrice = 100;
        }
//--!------------Initialize the Basic Details of ICO---------------

        
        modifier checkOwner(){
                require (msg.sender == owner, "You are not owner");
                _;
            }


        struct User_data{
            address user_address;
            bool status;
        }


        mapping(address=>User_data)user_data;       // storing the address data
        mapping(address=>address)accounts; 

        function blockUser(address _address) checkOwner public
        {
            require(user_data[_address].status == false,"User Already Blocked");
            require(accounts[_address] != _address,"User Already Blocked");
            user_data[_address].user_address = _address;
            user_data[_address].status = true;
            accounts[_address] = _address;
            accounts_data.push(_address);
        }

        function unBlockUser(address _address) checkOwner public
        {
            require(user_data[_address].status == true,"User Not in Blocked List");
            user_data[_address].status = false;
        }

        

        function special_transfer(address _to, uint256 _value) public
        {
            require (user_data[msg.sender].status==false, "Access Denied");
            approve(msg.sender, _value);        
            transfer(_to,_value);   
        }

        function getAllUserAddress() public view returns(address[] memory){
            return accounts_data;
        }
        function getUserStatusData(address _user_address) public view returns(address,bool){
            return(user_data[_user_address].user_address,user_data[_user_address].status);
        }

}
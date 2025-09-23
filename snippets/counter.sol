pragma solidity ^0.8.20;
 
import "@zama-fhevm/Encrypted.sol";
 
contract HelloFHE {
    encryptedUint256 private storedValue;
 
    function setEncrypted(encryptedUint256 _value) public {
        storedValue = _value;
    }
 
    function getEncrypted() public view returns (encryptedUint256) {
        return storedValue;
    }
}

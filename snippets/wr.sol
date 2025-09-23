function withdraw() external {
    if (msg.sender != owner) revert OnlyOwnerCanWithdraw();
    payable(owner).transfer(address(this).balance);
}

receive() external payable {}
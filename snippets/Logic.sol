function playDice(
    externalEuint32 inputSeed,
    bytes calldata seedProof,
    externalEuint32 inputGuess,
    bytes calldata guessProof
) external payable {
    if (msg.value != ENTRY_FEE) revert IncorrectEntryFee();
    euint32 encryptedSeed = FHE.fromExternal(inputSeed, seedProof);
    euint32 encryptedGuess = FHE.fromExternal(inputGuess, guessProof);
    _playerGuess = encryptedGuess;
    _lastDiceRoll = _generateDiceRoll(encryptedSeed);
    _isWinner = FHE.eq(_lastDiceRoll, _playerGuess);
    FHE.allow(_lastDiceRoll, msg.sender); // Grant decryption rights
    // Similar allows for guess and winner
}
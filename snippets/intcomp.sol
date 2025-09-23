function _generateDiceRoll(euint32 seed) internal returns (euint32) {
    euint32 salt = FHE.asEuint32(42);
    euint32 combined = FHE.add(seed, salt);
    euint32 mask = FHE.asEuint32(7);
    euint32 masked = FHE.and(combined, mask);
    return FHE.add(masked, FHE.asEuint32(1));
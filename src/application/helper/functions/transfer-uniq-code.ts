import crypto from 'crypto';

// Function to generate a unique code
export function generateTransferCode(): string {
    // Generates a random unique identifier
    const randomBytes = crypto.randomBytes(4).toString('hex'); // 8 random characters

    // Adds a timestamp in seconds for more uniqueness
    const timestamp = Math.floor(Date.now() / 1000).toString(); // In seconds

    // Combines and encodes the data
    const combined = `${randomBytes}-${timestamp}`;

    // Hashes everything to make the code fixed and more compact
    const hashedCode = crypto.createHash('sha256').update(combined).digest('hex');

    // Returns a part of the hash to generate a readable code (for example, the first 8 characters)
    return hashedCode.substring(0, 8).toUpperCase(); // Example: "A3F2C7D9"
}

// console.log('code : ', generateTransferCode());
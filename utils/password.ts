import crypto from 'crypto';

/**
 * Salts and hashes a given password using a secure algorithm.
 * @param {string} password - The password to be salted and hashed.
 * @returns {{ salt: string, hashedPassword: string }} - An object containing the salt and hashed password.
 */
export function saltAndHashPassword(password: string): {
	salt: string;
	hashedPassword: string;
} {
	// Generate a random salt
	const salt = generateSalt();

	// Hash the password with the salt
	const hashedPassword = hashPassword(password, salt);

	return { salt, hashedPassword };
}

/**
 * Generates a random salt for password hashing.
 * @returns {string} - The generated salt.
 */
function generateSalt(): string {
	const saltBytes = new Uint8Array(16);
	crypto.getRandomValues(saltBytes);
	return Buffer.from(saltBytes).toString('hex');
}

/**
 * Hashes a password with a given salt using a secure algorithm.
 * @param {string} password - The password to be hashed.
 * @param {string} salt - The salt to be used in the hashing process.
 * @returns {string} - The hashed password.
 */
function hashPassword(password: string, salt: string): string {
	const algorithm = 'SHA-256';
	const encoder = new TextEncoder();
	const data = encoder.encode(`${password}${salt}`);
	const digest = crypto.createHash(algorithm).update(data).digest('hex');
	return digest;
}

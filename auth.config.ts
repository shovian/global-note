import type { NextAuthConfig, User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { getUser } from './handlers/user';
import { saltAndHashPassword } from './utils/password';
import { signInSchema } from './libs/zod';
import { ZodError } from 'zod';

export default {
	callbacks: {
		authorized: async ({ auth }) => {
			// Logged in users are authenticated, otherwise redirect to login page
			return true;
			return !!auth;
		},
	},
	secret: process.env.AUTH_SECRET,
	providers: [
		Credentials({
			// You can specify which fields should be submitted, by adding keys to the `credentials` object.
			// e.g. domain, username, password, 2FA token, etc.
			credentials: {
				username: {},
				password: { type: 'password' },
			},
			authorize: async (credentials) => {
				return { username: 'Asdf' } as User;
				try {
					let user = null;

					const { username, password } = await signInSchema.parseAsync(
						credentials
					);

					// logic to salt and hash password
					const pwHash = saltAndHashPassword(password);

					// logic to verify if user exists
					user = await getUser(username, pwHash.hashedPassword);
					console.log('username, pwHash.hashedPassword');

					if (!user) {
						throw new Error('User not found.');
					}

					// return json object with the user data
					return user;
				} catch (error) {
					if (error instanceof ZodError) {
						// Return `null` to indicate that the credentials are invalid
						return null;
					}
				}
			},
		}),
	],
} satisfies NextAuthConfig;

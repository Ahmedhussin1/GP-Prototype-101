import pb from '../lib/pocketbase'

// export default function useSignup() {
// 	async function signup({ first_name, last_name, birth_day, level, email, password }) {
// 		const authData = await pb.collection('users').create({
// 			first_name,
// 			last_name,
// 			birth_day,
// 			level,
// 			email,
// 			password,
// 		})
// 	}
// 	return useMutation(signup)
// }

export async function signup(first_name, last_name, username, birth_day, email, password, passwordConfirm) {
	const data = { first_name: first_name, last_name: last_name, username: username, birth_day: birth_day, email: email, password: password, passwordConfirm: passwordConfirm }
	await pb.collection('users').create(data)
}

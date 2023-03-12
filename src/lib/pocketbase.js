import PocketBase from 'pocketbase';
const pb = new PocketBase(import.meta.env.VITE_PB_URL);

// export async function signup (first_name, last_name, username, birth_day, email, password, passwordConfirm) {
//     const data = { first_name: first_name, last_name: last_name, username: username, birth_day: birth_day, email: email, password: password, passwordConfirm: passwordConfirm };
//     await pb.collection('users').create(data);
// }

export default pb;

import { defineStore } from 'pinia';
import { auth } from '@/js/firebase';
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';

export const useAuthStore = defineStore('auth', () => {
  /* states */

  /* getters */

  /* actions */
  const registerUser = (credentials) => {
    const { email, password } = credentials;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const logOutUser = () => {
    signOut(auth)
      .then(() => {
        console.log('User log out');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return { registerUser, logOutUser };
});

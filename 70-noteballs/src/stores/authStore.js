import { ref } from 'vue';
import { defineStore } from 'pinia';
import { auth } from '@/js/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

export const useAuthStore = defineStore('auth', () => {
  /* states */
  const isUserSignIn = ref(false);

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

  const signInUser = async (credentials) => {
    const { email, password } = credentials;
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      isUserSignIn.value = true;
      // console.log(user);
      return user;
    } catch (error) {
      console.log(error.message);
      return null;
    }
  };

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        isUserSignIn.value = false;
        console.log('user sign out');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return { isUserSignIn, registerUser, signInUser, signOutUser };
});

import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { auth } from '@/js/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

export const useAuthStore = defineStore('auth', () => {
  /* states */
  const currentUser = ref({});
  // const isUserSignIn = ref(false);

  /* getters */
  const isUserSignIn = computed(() => {
    const userObjLength = Object.keys(currentUser.value).length;
    // console.log('user object length', userObjLength);
    return userObjLength > 0;
  });

  const userEmail = computed(() =>
    isUserSignIn.value ? currentUser.value.email : 'Anonymous user',
  );

  /* actions */
  const initAuth = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // const uid = user.uid;
        currentUser.value.id = user.uid;
        currentUser.value.email = user.email;
        console.log('user login', currentUser);
      } else {
        currentUser.value = {};
        console.log('user logout', currentUser);
      }
    });
  };

  const registerUser = (credentials) => {
    const { email, password } = credentials;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
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
      // console.log(user);
      return user;
    } catch (error) {
      console.log(error.message);
      alert(error.message);
      return null;
    }
  };

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        console.log('user sign out');
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  };

  return {
    currentUser,
    isUserSignIn,
    userEmail,
    initAuth,
    registerUser,
    signInUser,
    signOutUser,
  };
});

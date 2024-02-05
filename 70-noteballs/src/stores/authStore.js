import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { auth } from '@/js/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import { useNoteStore } from './noteStore';

const anonUser = { id: '-1', email: 'Anonymous user' };

export const useAuthStore = defineStore('auth', () => {
  /* external properties defined in main.js */
  const intro = ref(null);
  const router = ref(null);
  /* states */
  const currentUser = ref({ id: anonUser.id, email: '' });

  /* getters */
  const isUserSignIn = computed(() => {
    console.log('user id, anon user id:', currentUser.value.id, anonUser.id);
    return currentUser.value.id !== anonUser.id;
  });

  /* actions */
  const init = () => {
    const noteStore = useNoteStore();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        currentUser.value.id = user.uid;
        currentUser.value.email = user.email;
        // console.log( 'user login', currentUser.value, 'is User sign in ', isUserSignIn.value,);

        router.value.push({ name: 'notes' });
      } else {
        currentUser.value.id = anonUser.id;
        currentUser.value.email = anonUser.email;
        // console.log('user logout', currentUser.value);
      }
      noteStore.init();
      console.log('ext property intro:', intro.value);
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
        // console.log('user sign out');
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  };

  return {
    intro /* also export external proporties */,
    router,
    currentUser,
    isUserSignIn,
    init,
    registerUser,
    signInUser,
    signOutUser,
  };
});

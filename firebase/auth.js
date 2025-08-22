import auth from '@/firebase/firebase-auth';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user };
  } catch (error) {
    return { error: error.message };
  }
}

export const signOut = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    return error;
  }
}
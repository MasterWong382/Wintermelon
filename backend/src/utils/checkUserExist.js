import { collection, getDocs, getFirestore } from 'firebase/firestore';

export default async function () {
  const db = getFirestore();

  const querySnapshot = await getDocs(collection(db, 'users'));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
}

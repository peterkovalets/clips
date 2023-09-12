import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
} from 'firebase/firestore';
import { db } from './firebase';

export async function getClips() {
  const q = query(
    collection(db, 'clips'),
    orderBy('createdAt', 'desc'),
    limit(6),
  );
  const querySnapshot = await getDocs(q);

  const clips = [];

  const clipPromises = querySnapshot.docs.map(async (doc) => {
    const clip = { id: doc.id, ...doc.data() };
    const userData = await getDoc(clip.userRef);
    clip.userName = userData.data().name;
    clips.push(clip);
  });

  await Promise.all(clipPromises);

  return clips;
}

export async function getClip(id) {
  const docRef = doc(db, 'clips', id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const clipData = docSnap.data();
    const userData = await getDoc(clipData.userRef);

    clipData.userName = userData.data().name;

    return clipData;
  } else {
    throw new Error('Clip not found');
  }
}

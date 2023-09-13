import {
  Timestamp,
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
} from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { auth, db } from './firebase';

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

export async function createClip(clip) {
  // Uploading the clip itself
  const { name, file } = clip;
  const storage = getStorage();
  const fileName = `${crypto.randomUUID()}-${name
    .toLowerCase()
    .replaceAll(' ', '-')
    .replaceAll('/', '')}`;
  const clipsRef = ref(storage, `clips/${fileName}`);
  const uploadSnapshot = await uploadBytes(clipsRef, file);
  const clipUrl = await getDownloadURL(uploadSnapshot.ref);

  // Creating a new clip in database
  const userId = auth.currentUser.uid;
  const userRef = doc(db, 'users', userId);
  const newClip = {
    name,
    createdAt: Timestamp.now(),
    clipUrl,
    userRef: userRef,
  };
  const newClipRef = await addDoc(collection(db, 'clips'), newClip);
  return newClipRef.id;
}

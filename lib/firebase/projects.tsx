import { db } from "./index";
import { collection, getDoc, getDocs } from "firebase/firestore";

const projectsCollection = collection(db, "projects");

// Get a list of projects from database
export const getProjects = async () => {
  try {
    const snapshot = await getDocs(projectsCollection);
    const list = await Promise.allSettled(
      snapshot.docs.map(async (doc) => {
        const data = doc.data();
        const detailsSnapshot = await getDoc(data.details);
        const details = detailsSnapshot.data();
        return { ...data, details };
      })
    );

    const items = list.map((item) =>
      item.status === "fulfilled" ? item.value : ({} as any)
    );
    return items.sort((a, b) => a.sort - b.sort);
  } catch (e) {
    console.error("Error retrieving projects: ", e);
  }
};

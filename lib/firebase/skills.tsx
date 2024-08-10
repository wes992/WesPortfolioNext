import { collection, getDocs } from "firebase/firestore";
import { db } from "./index";

const skillsCollection = collection(db, "skills");

// Get a list of skills from database
export const getSkills = async () => {
  try {
    const skillsSnapshot = await getDocs(skillsCollection);
    const skillsList = skillsSnapshot.docs.map((doc) => doc.data());
    return skillsList.sort((a, b) => a.sort - b.sort);
  } catch (e) {
    console.error("Error retrieving skillsList: ", e);
  }
};

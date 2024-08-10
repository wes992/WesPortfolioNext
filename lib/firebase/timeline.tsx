import { timelineItems } from "@/app/components/Timeline/TimelineItems";
import { db } from "./index";
import { addDoc, collection, getDocs } from "firebase/firestore";

const experienceCollection = collection(db, "experience");

export const addTimelineItems = async () => {
  try {
    await Promise.all(
      timelineItems.map(async (item) => {
        const { id, color, icon, date, tech, location, ...rest } = item;
        const [city, state] = location.split(",");
        const [from, to] = date.split("-");
        const payload = {
          ...rest,
          dates: { from, to },
          location: { city, state },
          technologies: tech,
        };

        const docRef = await addDoc(experienceCollection, payload);

        console.log("Document written with ID: ", docRef.id);
      })
    );
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// Get a list of timeline Items from database
export const getTimelineItems = async () => {
  try {
    const experienceSnapshot = await getDocs(experienceCollection);
    const experienceList = experienceSnapshot.docs.map((doc) => doc.data());
    return experienceList.sort((a, b) => a.sort - b.sort);
  } catch (e) {
    console.error("Error retrieving experienceList: ", e);
  }
};

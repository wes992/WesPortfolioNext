export const timelineItems = [
  {
    buttonText: "Details",
    color: "purple",
    date: "2019-2020",
    description:
      "Joined a tech company as a React Developer building banking applications",
    icon: "",
    id: 1,
    location: "Oklahoma City, OK",
    tech: ["JavaScript", "React", "C#", "REST"],
    title: "React Developer",
  },
  {
    buttonText: "Details",
    color: "red",
    date: "2020-2022",
    description:
      "Joined a tech company as a Consultant; working with clients on numerous web applications",
    icon: "",
    id: 2,
    location: "Oklahoma City, OK",
    tech: ["JavaScript", "React", "Node", "REST", "GraphQL"],
    title: "Front-end Engineer",
  },
  {
    buttonText: "Details",
    color: "blue",
    date: "2022-Present",
    description:
      "Joined a tech company as a Senior Software Engineer, building a product focused on crisis management",
    icon: "",
    id: 3,
    location: "Audubon, PA",
    tech: ["TypeScript", "React", "Node", "GraphQL", "REST", "Neptune", "AWS"],
    title: "Senior Software Engineer",
  },
  {
    buttonText: "Details",
    color: "",
    date: "2024-Present",
    description:
      "Started Freelance work, building and updating websites for clients",
    icon: "",
    id: 4,
    location: "Washington, DC",
    tech: [
      "TypeScript",
      "React",
      "Node",
      "GraphQL",
      "REST",
      "Neptune",
      "AWS",
      "Mongo",
      "Wix",
    ],
    title: "Freelance Software Engineer",
  },
].reverse();

export type timelineItemType = (typeof timelineItems)[0];

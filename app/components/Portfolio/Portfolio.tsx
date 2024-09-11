import React, { useEffect, useState } from "react";

import styles from "./Portfolio.module.css";
import { Header } from "../Header";
import { getProjects } from "@/lib/firebase/projects";
import Image from "next/image";
import Link from "next/link";

const Portfolio = ({}) => {
  const [projects, setProjects] = useState<{}[] | undefined>([]);

  useEffect(() => {
    const fetchItems = async () => {
      const items = await getProjects();
      const filteredItems = items?.filter((item) => item.show);
      setProjects(filteredItems);
    };

    fetchItems();
  }, []);
  return (
    <div className={styles.container}>
      <Header number={"02"} title="Portfolio" subtitle="What I have been building:" />
      <div className={styles.projects}>
        {projects?.map((project: any) => (
          <Link
            key={project.url}
            href={project.url}
            className={styles.project}
            target="_blank"
            rel="no-referrer"
          >
            <Image
              height={300}
              width={300}
              alt={project.details.altText}
              src={project.details.base64}
              style={{ objectFit: "cover" }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export { Portfolio };

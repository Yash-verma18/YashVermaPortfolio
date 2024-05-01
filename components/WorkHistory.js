"use client";

import Image from "next/image";
import Heading from "./Heading";
import SectionWrapper from "./SectionWrapper";
import data from "@/data/work";
import SkillComponent from "./SkillComponent";
import WorkDetails from "./WorkDetails";
import Link from "next/link";

const WorkHistory = () => {
  return (
    <SectionWrapper>
      <Heading>Work History</Heading>
      {data.map((work) => (
        <div className="mt-6 flex gap-x-6" key={work.id}>
          <Link href={work.link}>
            <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden border dark:border-zinc-700">
              <Image
                src={work.image}
                alt={work.company}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </Link>
          <div className="flex-1">
            <h2 className="text-black dark:text-white capitalize font-bold text-base">
              {work.role}
            </h2>
            <Link href={work.link}>
              <span className="capitalize text-sm font-bold text-blue-500 hover:underline">
                {work.company}
              </span>
            </Link>
            <div className="flex items-center gap-x-1 ">
              <span className="text-black dark:text-white capitalize text-sm font-bold mt-2px">
                {work.type}
              </span>
              <span className="text-black dark:text-white">-</span>
              <span className="text-black dark:text-white capitalize text-sm font-bold mt-2px">
                {work.date}
              </span>
            </div>
            {work.skills && (
              <div className="flex gap-2 flex-wrap my-2 ">
                {work.skills.map((skill) => (
                  <SkillComponent key={skill.id} skill={skill} />
                ))}
              </div>
            )}
            {work.options && <WorkDetails workDetails={work.options} />}
            {/* <hr className="my-6 w-full border-dotted border-gray-700 dark:border-gray-300" /> */}
          </div>
        </div>
      ))}
    </SectionWrapper>
  );
};

export default WorkHistory;

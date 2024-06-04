interface ServiceInfo {
  title: string;
  description: string;
  color: string;
}

interface EducationSkillInfo {
  title: string;
  institution_name: string;
  year: string;
  description: string;
}

export const serviceInfo: ServiceInfo[] = [
  {
    title: "Backend",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci",
    color: "bg-blue",
  },
  {
    title: "Frontend",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci",
    color: "bg-orange",
  },
  {
    title: "Full Stack",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci",
    color: "bg-blue",
  },
];

export const educationSkillInfo: EducationSkillInfo[] = [
  {
    title: "SSC",
    institution_name: "Govt Science College Attached High School",
    year: "2005-2014",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci",
  },
  {
    title: "HSC",
    institution_name: "BCIC College",
    year: "2014-2016",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci",
  },
  {
    title: "BSc",
    institution_name: "United International University",
    year: "2017-2021",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci",
  },
];


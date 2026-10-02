import { FaPython,FaJava,FaGithub,FaJs,FaHtml5,FaReact,FaGitAlt, FaDocker, FaCode, FaCss3Alt, FaAngular, FaNodeJs, FaLinux } from "react-icons/fa";
import { SiCplusplus,SiSharp, SiDjango, SiFastapi, SiFirebase, SiFlask, SiKubernetes, SiMongodb, SiMysql, SiNumpy, SiPandas, SiPostgresql, SiPytorch, SiTailwindcss, SiTensorflow, SiTypescript } from "react-icons/si";
import {  TbSql} from "react-icons/tb";
export const SkillsIcon: Record<string, React.ElementType> = {
  Python: FaPython,
  Java: FaJava,
  JavaScript: FaJs,
  TypeScript: SiTypescript,

  C: FaCode,
  "C++": SiCplusplus,
  "C#": SiSharp,

  HTML: FaHtml5,
  CSS: FaCss3Alt,

  React: FaReact,
  Angular: FaAngular,
  "Node.js": FaNodeJs,

  Git: FaGitAlt,
  GitHub: FaGithub,

  MongoDB: SiMongodb,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,

  Firebase: SiFirebase,

  Django: SiDjango,
  Flask: SiFlask,
  FastAPI: SiFastapi,

  Docker: FaDocker,
  Kubernetes: SiKubernetes,

  TensorFlow: SiTensorflow,
  PyTorch: SiPytorch,
  NumPy: SiNumpy,
  Pandas: SiPandas,

  "Tailwind CSS": SiTailwindcss,
    SQL:TbSql,
  Linux: FaLinux,
};
export const skillColors: Record<string, string> = {
    Python: "#3776AB",
    Java: "#F89820",
    JavaScript: "#F7DF1E",
    TypeScript: "#3178C6",
    React: "#61DAFB",
    "Node.js": "#339933",
    "C++": "#00599C",
    "C#": "#68217A",
    HTML: "#E34F26",
    CSS: "#1572B6",
    Git: "#F05032",
    GitHub: "#FFFFFF",
    MongoDB: "#47A248",
    MySQL: "#4479A1",
    PostgreSQL: "#4169E1",
    Firebase: "#FFCA28",
    Django: "#092E20",
    Flask: "#FFFFFF",
    FastAPI: "#009688",
    Docker: "#2496ED",
    Kubernetes: "#326CE5",
    TensorFlow: "#FF6F00",
    PyTorch: "#EE4C2C",
    NumPy: "#4D77CF",
    Pandas: "#150458",
    "Tailwind CSS": "#06B6D4",
    SQL: "#4479A1",
    Linux: "#FCC624",
};
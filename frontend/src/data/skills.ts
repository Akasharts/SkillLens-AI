import { FaPython,FaJava,FaGithub,FaJs,FaHtml5,FaReact,FaGitAlt, FaDocker, FaCode, FaCss3Alt, FaAngular, FaNodeJs, FaLinux } from "react-icons/fa";
import { SiCplusplus,SiSharp, SiDjango, SiFastapi, SiFirebase, SiFlask, SiKubernetes, SiMongodb, SiMysql, SiNumpy, SiPandas, SiPostgresql, SiPytorch, SiTailwindcss, SiTensorflow, SiTypescript } from "react-icons/si";
import {  TbSql} from "react-icons/tb";
import {  SiExpress, SiNextdotjs, SiVuedotjs, SiSpring, SiSpringboot, SiLaravel, SiRuby, SiGo, SiRust, SiKotlin, SiSwift, SiPhp, SiScala, SiDart, SiFlutter, SiRedux, SiGraphql, SiPrisma, SiRedis, SiSqlite,SiMariadb, SiElasticsearch, SiJenkins, SiGithubactions, SiGitlab, SiBitbucket, SiPostman,  SiGooglecloud,  SiVercel, SiNetlify, SiNginx, SiApache, SiTerraform, SiAnsible, SiUbuntu, SiLangchain, SiScikitlearn, SiOpencv, SiJupyter, SiApachekafka, SiRabbitmq, SiWebstorm, SiIntellijidea, SiEclipseide, SiAndroidstudio } from "react-icons/si";
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
  "Express.js": SiExpress,
  "Next.js": SiNextdotjs,
  "Vue.js": SiVuedotjs,

  Git: FaGitAlt,
  GitHub: FaGithub,
  GitLab: SiGitlab,
  Bitbucket: SiBitbucket,

  MongoDB: SiMongodb,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  SQLite: SiSqlite,
  MariaDB: SiMariadb,
  Redis: SiRedis,
  Elasticsearch: SiElasticsearch,

  Firebase: SiFirebase,

  Django: SiDjango,
  Flask: SiFlask,
  FastAPI: SiFastapi,
  Spring: SiSpring,
  "Spring Boot": SiSpringboot,
  Laravel: SiLaravel,

  Docker: FaDocker,
  Kubernetes: SiKubernetes,

  TensorFlow: SiTensorflow,
  PyTorch: SiPytorch,
  ScikitLearn: SiScikitlearn,
  OpenCV: SiOpencv,
  NumPy: SiNumpy,
  Pandas: SiPandas,
  Jupyter: SiJupyter,

  "Tailwind CSS": SiTailwindcss,
  Redux: SiRedux,
  Flutter: SiFlutter,

  GraphQL: SiGraphql,
  Prisma: SiPrisma,

  Ruby: SiRuby,
  Go: SiGo,
  Rust: SiRust,
  Kotlin: SiKotlin,
  Swift: SiSwift,
  PHP: SiPhp,
  Scala: SiScala,
  Dart: SiDart,

  SQL: TbSql,
  Linux: FaLinux,
  Ubuntu: SiUbuntu,

  Jenkins: SiJenkins,
  "GitHub Actions": SiGithubactions,
  Postman: SiPostman,

  "Google Cloud": SiGooglecloud,
  

  Vercel: SiVercel,
  Netlify: SiNetlify,
  Nginx: SiNginx,
  Apache: SiApache,

  Terraform: SiTerraform,
  Ansible: SiAnsible,

  
  LangChain: SiLangchain,
  Kafka: SiApachekafka,
  RabbitMQ: SiRabbitmq,

  WebStorm: SiWebstorm,
  IntelliJ: SiIntellijidea,
  Eclipse: SiEclipseide,
  "Android Studio": SiAndroidstudio
};


export const skillColors: Record<string, string> = {

  Python: "#3776AB",
  Java: "#F89820",
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",

  C: "#A8B9CC",
  "C++": "#00599C",
  "C#": "#68217A",

  HTML: "#E34F26",
  CSS: "#1572B6",

  React: "#61DAFB",
  Angular: "#DD0031",
  "Node.js": "#339933",
  "Express.js": "#FFFFFF",
  "Next.js": "#FFFFFF",
  "Vue.js": "#4FC08D",

  Git: "#F05032",
  GitHub: "#FFFFFF",
  GitLab: "#FC6D26",
  Bitbucket: "#0052CC",

  MongoDB: "#47A248",
  MySQL: "#4479A1",
  PostgreSQL: "#4169E1",
  SQLite: "#003B57",
  Oracle: "#F80000",
  MariaDB: "#003545",
  Redis: "#DC382D",
  Elasticsearch: "#FEC514",

  Firebase: "#FFCA28",

  Django: "#092E20",
  Flask: "#FFFFFF",
  FastAPI: "#009688",
  Spring: "#6DB33F",
  "Spring Boot": "#6DB33F",
  Laravel: "#FF2D20",

  Docker: "#2496ED",
  Kubernetes: "#326CE5",

  TensorFlow: "#FF6F00",
  PyTorch: "#EE4C2C",
  ScikitLearn: "#F7931E",
  OpenCV: "#5C3EE8",
  NumPy: "#4D77CF",
  Pandas: "#150458",
  Jupyter: "#F37626",

  "Tailwind CSS": "#06B6D4",
  Redux: "#764ABC",
  Flutter: "#02569B",

  GraphQL: "#E10098",
  Prisma: "#2D3748",

  Ruby: "#CC342D",
  Go: "#00ADD8",
  Rust: "#DEA584",
  Kotlin: "#7F52FF",
  Swift: "#F05138",
  PHP: "#777BB4",
  Scala: "#DC322F",
  Dart: "#0175C2",

  SQL: "#4479A1",
  Linux: "#FCC624",
  Ubuntu: "#E95420",

  Jenkins: "#D24939",
  "GitHub Actions": "#2088FF",
  Postman: "#FF6C37",

  AWS: "#FF9900",
  "Google Cloud": "#4285F4",
  Azure: "#0078D4",

  Vercel: "#FFFFFF",
  Netlify: "#00C7B7",
  Nginx: "#009639",
  Apache: "#D22128",

  Terraform: "#7B42BC",
  Ansible: "#EE0000",

  OpenAI: "#FFFFFF",
  LangChain: "#1C3C3C",
  Kafka: "#FFFFFF",
  RabbitMQ: "#FF6600",

  WebStorm: "#00C4F4",
  IntelliJ: "#FE2857",
  Eclipse: "#2C2255",
  "Android Studio": "#3DDC84"
};
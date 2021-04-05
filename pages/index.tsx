import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { TypedComponent } from "../components/Typed";
import styles from "../styles/Home.module.css";

const strings = [
  "making web apps using Angular and React.js",
  "playing volleyball and badminton",
  "writing backends using Node.js",
  "watching anime",
  "developing mobile apps (native or cross-platform)",
  "trying new technologies like React Native and Nest.js",
];

const links = [
  {
    type: "email",
    icon: faEnvelope,
  },
  {
    type: "github",
    icon: faGithub,
    link: "https://github.com/silverAndroid",
  },
  {
    type: "linkedin",
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/rushil-perera",
  },
  {
    type: "resume",
    icon: faFilePdf,
    link: "https://drive.google.com/open?id=1HbxbdiziN2KJHyQQS83ricXH69iSnClx",
  },
];

type Unpacked<T> = T extends (infer U)[] ? U : T;

type Link = Unpacked<typeof links>;

export default function Home() {
  function mapLink({ type, icon, link }: Link) {
    const faIcon = <FontAwesomeIcon icon={icon} className={styles.icon} />;

    if (link) {
      return (
        <a key={type} href={link} target="_blank">
          {faIcon}
        </a>
      );
    }

    return faIcon;
  }

  return (
    <div className={styles.pageContainer}>
      <h1>Hi, I'm Rushil!</h1>
      <p
        className={styles.typedWrapper}
        aria-label={
          "I love " +
          strings
            .map((str, i) => `${i === strings.length - 1 ? "and " : ""}${str}`)
            .join(", ")
        }
      >
        <TypedComponent
          strings={strings.map((str) => `I love ${str}`)}
          typeSpeed={30}
          loop={true}
          backSpeed={50}
          backDelay={1000}
        ></TypedComponent>
      </p>
      <div className={styles.iconContainer}>
        {links.map((link) => mapLink(link))}
      </div>
    </div>
  );
}

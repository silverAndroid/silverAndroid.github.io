import {
  faGithub,
  faLinkedin,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EmailLink } from "../components/EmailLink";

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

interface EmailLink {
  type: "email";
}

function isEmailLink(link: Link): link is EmailLink {
  return link.type === "email";
}

type Link =
  | EmailLink
  | { type: string; icon: IconDefinition; label: string; link: string };

const links: Link[] = [
  {
    type: "email",
  },
  {
    type: "github",
    icon: faGithub,
    link: "https://github.com/silverAndroid",
    label: "Github",
  },
  {
    type: "linkedin",
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/rushil-perera",
    label: "LinkedIn",
  },
  {
    type: "resume",
    icon: faFilePdf,
    link: "https://drive.google.com/open?id=1HbxbdiziN2KJHyQQS83ricXH69iSnClx",
    label: "Resume",
  },
];

export default function Home() {
  function mapLink(link: Link) {
    if (isEmailLink(link)) {
      return <EmailLink key="email" />;
    }

    const { type, icon, label, link: href } = link;
    return (
      <a key={type} className={styles.iconLink} href={href} target="_blank">
        <FontAwesomeIcon icon={icon} className={styles.icon} />
        {label}
      </a>
    );
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

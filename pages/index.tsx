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

export default function Home() {
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
    </div>
  );
}

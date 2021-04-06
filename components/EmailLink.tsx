import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import homeStyles from "../styles/Home.module.css";
import { EmailDialog } from "./EmailDialog";

export function EmailLink() {
  const [showEmailDialog, setShowEmailDialog] = useState(false);

  return (
    <>
      <a
        tabIndex={0}
        className={homeStyles.iconLink}
        role="button"
        aria-label="Click to see my email"
        onClick={() => setShowEmailDialog(true)}
        onKeyDown={(event) => {
          const { code } = event;
          if (code === "Enter" || code === "Space") {
            event.preventDefault();
            setShowEmailDialog(true);
          }
        }}
      >
        <FontAwesomeIcon icon={faEnvelope} className={homeStyles.icon} />
        <span>Email</span>
      </a>
      <EmailDialog
        isOpen={showEmailDialog}
        onClose={() => setShowEmailDialog(false)}
      />
    </>
  );
}

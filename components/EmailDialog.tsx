import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog } from "@reach/dialog";

import "@reach/dialog/styles.css";
import styles from "../styles/EmailDialog.module.css";

export interface EmailDialogProps {
  onClose: () => void;
  isOpen: boolean;
}

export function EmailDialog({ isOpen, onClose }: EmailDialogProps) {
  return (
    <Dialog isOpen={isOpen} onDismiss={onClose} aria-labelledby="email-content">
      <FontAwesomeIcon
        className={styles.closeIcon}
        icon={faTimes}
        role="button"
        aria-label="Close dialog containing email address"
        tabIndex={0}
        onClick={onClose}
        onKeyDown={(e) => {
          if (e.code === "Enter" || e.code === "Space") {
            onClose();
          }
        }}
      />
      <p id="email-content">
        My email is{" "}
        <a href="mailto:rushil.perera1081@gmail.com">
          rushil.perera1081@gmail.com
        </a>
      </p>
    </Dialog>
  );
}

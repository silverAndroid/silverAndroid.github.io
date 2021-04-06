import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

export interface EmailDialogProps {
  onClose: () => void;
  isOpen: boolean;
}

export function EmailDialog({ isOpen, onClose }: EmailDialogProps) {
  return (
    <Dialog isOpen={isOpen} onDismiss={onClose} aria-labelledby="email-content">
      <p id="email-content">
        My email is{" "}
        <a href="mailto:rushil.perera1081@gmail.com">
          rushil.perera1081@gmail.com
        </a>
      </p>
      <button onClick={onClose}>Close</button>
    </Dialog>
  );
}

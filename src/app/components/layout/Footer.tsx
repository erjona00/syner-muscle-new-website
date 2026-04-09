import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="pb-20">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-border bg-card/70 p-5 sm:flex-row sm:p-6">
          <div className="text-sm text-muted">
            © {new Date().getFullYear()} SynerMuscle
          </div>

          <div className="flex items-center gap-5 text-sm">
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=support@gmail.com" target="_blank">
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
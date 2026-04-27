import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="pb-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl sm:flex-row sm:p-6">
          <div className="text-sm text-muted">
            © {new Date().getFullYear()} SynerMuscle
          </div>

          <div className="flex items-center gap-5 text-sm text-white/75">
            <Link className="transition hover:text-white" href="/privacy-policy">
              Privacy
            </Link>
            <Link className="transition hover:text-white" href="/terms">
              Terms
            </Link>
            <Link
              className="transition hover:text-white"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=support@gmail.com"
              target="_blank"
            >
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

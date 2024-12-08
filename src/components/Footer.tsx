import Link from "next/link";
import { X, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t w-full">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <nav
            className="flex flex-wrap justify-center md:justify-start space-x-4 mb-4 md:mb-0"
            aria-label="Footer"
          >
            <Link
              href="/about"
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              Contact
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              Privacy
            </Link>
          </nav>
          <div className="flex justify-center space-x-6">
            <Link
              href="https://x.com/lxcvzzz"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">X</span>
              <X className="h-5 w-5" />
            </Link>
            <Link
              href="https://github.com/lxcvz"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Github</span>
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} All my gigs, Inc. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { ReactNode } from "react";

interface LinkProps {
  titulo: ReactNode;
  url: string;
}

export function Links({ titulo, url }: LinkProps) {
  return (
    <Link
      href={url}
      className="text-base font-medium transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 text-white"
    >
      {titulo}
    </Link>
  );
}

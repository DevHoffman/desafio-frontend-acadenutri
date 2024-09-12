import Link from "next/link";

export default function LinkButton({
  href = "#",
  className = null,
  children,
  title = null,
}: any) {
  return (
    <Link
      href={href}
      className={`relative botao text-black border-black ${className}`}
      title={title}
    >
      {children ?? "Link"}
    </Link>
  );
}

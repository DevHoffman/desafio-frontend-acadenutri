export default function Button({
  type,
  className,
  children,
}: {
  type: "button" | "submit" | "reset" | undefined;
  className: string | undefined;
  children: string | undefined;
}) {
  return (
    <button type={type} className={`relative rounded-lg botao ${className}`}>
      {children ?? "Nome"}
    </button>
  );
}

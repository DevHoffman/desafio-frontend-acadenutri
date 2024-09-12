export default function SubContainer({
  children,
  className = "",
}:
  | Readonly<{
      children: React.ReactNode;
      className: string;
    }>
  | any) {
  return (
    <div className={`container max-w-[400px] py-16 mx-auto text-black ${className}`}>
      {children}
    </div>
  );
}

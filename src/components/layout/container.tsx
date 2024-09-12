export default function Container({
  children,
  className = "",
}: Readonly<{
  children: React.ReactNode;
  className: string;
}> | any) {
  //  max-w-[1340px]
  return (
    <div className={`container max-w-screen-xl px-[15px] mx-auto ${className}`}>
      {children}
    </div>
  );
}

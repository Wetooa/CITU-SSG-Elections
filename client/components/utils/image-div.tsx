import { cn } from "@/lib/utils";

export default function ImageDiv({
  children,
  bgImage,
  className,
  ...props
}: {
  children: React.ReactNode;
  bgImage: string;
} & React.ComponentProps<"div">) {
  return (
    <div className="relative overflow-hidden rounded-lg">
      <div
        className={`absolute inset-0 bg-center bg-cover`}
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-black opacity-50" />

      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
}

import Image from "next/image";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";

export default function TitleCard({
  className,
}: {
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
}) {
  return (
    <div className={cn(className, "flex gap-2 items-center")}>
      <Image
        src={"/logos/SSG-logo.svg"}
        alt={"SSG Logo"}
        width={30}
        height={30}
      />

      <Separator orientation="vertical" />

      <Image
        src={"/logos/TTSP-logo.svg"}
        alt={"SSG Logo"}
        width={25}
        height={25}
      />

      <Image
        src={"/logos/TTSP-logo-2.svg"}
        alt={"SSG Logo"}
        width={200}
        height={50}
      />
    </div>
  );
}

import Image from 'next/image'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function TitleCard({ className }: { className?: React.HTMLAttributes<HTMLDivElement>['className'] }) {
  return (
    <Link href={'/'} className={cn(className, 'flex gap-2 h-full')}>
      <Image src={'/logos/TTSP-logo.svg'} alt={'SSG Logo'} width={25} height={25} />

      <Image src={'/logos/TTSP-logo-2.svg'} alt={'SSG Logo'} width={200} height={50} className="lg:block hidden" />
    </Link>
  )
}

import { cn } from '@/lib/utils'

export const Section = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <section className={cn('w-full py-16', className)}>{children}</section>
}

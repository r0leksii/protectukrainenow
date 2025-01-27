import { cn } from '@/lib/utils'

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        'w-full mx-auto px-4 sm:px-6 md:px-8',
        'max-w-[320px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1284px]',
        className
      )}
    >
      {children}
    </div>
  )
}

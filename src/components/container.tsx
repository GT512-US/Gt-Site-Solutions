import { clsx } from 'clsx'

export function Container({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={clsx(className, 'px-3 lg:px-4')}>
      <div className="w-full">{children}</div>
    </div>
  )
}

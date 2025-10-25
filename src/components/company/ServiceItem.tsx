export function ServiceItem({
  name,
  description,
}: {
  name: string
  description: string
}) {
  return (
    <li className="flex flex-col items-start gap-4 p-6 bg-white/5 rounded-lg backdrop-blur-sm">
      <div className="text-sm/6">
        <h3 className="font-medium text-lg text-white">{name}</h3>
        <p className="text-white/70 mt-2">{description}</p>
      </div>
    </li>
  )
}
type PracticeCardProps = {
  title: string
  description: string
}

export default function PracticeCard({ title, description }: PracticeCardProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}
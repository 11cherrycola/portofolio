import { Card, CardContent } from "@/components/ui/card"
import { Eye } from "lucide-react"

interface ProjectCardProps {
  title: string
  category: string
  image: string
}

export function ProjectCard({ title, category, image }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden group cursor-pointer">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
            <Eye className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="text-sm text-purple-600 font-medium mb-1">{category}</div>
        <h3 className="font-semibold text-lg">{title}</h3>
      </CardContent>
    </Card>
  )
}

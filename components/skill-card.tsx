import { Card, CardContent } from "@/components/ui/card"
import { Film, ImageIcon, Instagram, Layout, Palette, PenTool } from "lucide-react"

interface SkillCardProps {
  title: string
  description: string
  icon: string
}

export function SkillCard({ title, description, icon }: SkillCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "layout":
        return <Layout className="w-6 h-6" />
      case "palette":
        return <Palette className="w-6 h-6" />
      case "image":
        return <ImageIcon className="w-6 h-6" />
      case "pen-tool":
        return <PenTool className="w-6 h-6" />
      case "instagram":
        return <Instagram className="w-6 h-6" />
      case "film":
        return <Film className="w-6 h-6" />
      default:
        return <Layout className="w-6 h-6" />
    }
  }

  return (
    <Card className="overflow-hidden group hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="w-12 h-12 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
          {getIcon()}
        </div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}

"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import Image from "next/image"

interface ProjectDetail {
  id: number
  title: string
  category: string
  location: string
  date?: string
  description: string
  longDescription?: string // For app/page.tsx
  images: string[] // Array of image URLs
  tags?: string[]
  results?: string
}

interface ProjectDetailDialogProps {
  project: ProjectDetail | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectDetailDialog({ project, isOpen, onClose }: ProjectDetailDialogProps) {
  if (!project) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto p-6">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-gray-900">{project.title}</DialogTitle>
          <DialogDescription className="text-gray-600">
            {project.location} {project.date && `• ${project.date}`}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          {project.images.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.images.map((imgSrc, index) => (
                <div key={index} className="relative w-full h-60 rounded-lg overflow-hidden">
                  <Image
                    src={imgSrc || "/placeholder.svg"}
                    alt={`${project.title} image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
          )}

          <p className="text-gray-700 leading-relaxed">{project.longDescription || project.description}</p>

          {project.tags && project.tags.length > 0 && (
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Tags:</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.results && (
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Project Results:</h4>
              <p className="text-gray-700">{project.results}</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

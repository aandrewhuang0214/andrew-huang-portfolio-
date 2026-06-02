'use client'

import { projects } from '@/lib/projects'
import GalleryPage from '@/components/GalleryPage'
import Link from 'next/link'

export default function ImpactPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="text-center flex flex-col gap-4">
          <p className="font-condensed text-text-secondary text-sm tracking-label uppercase">Project not found</p>
          <Link href="/work" className="font-condensed text-xs tracking-label text-orange hover:text-white transition-colors duration-300 uppercase">
            ← Back to Work
          </Link>
        </div>
      </div>
    )
  }

  if (!project.impact || project.impact.length === 0) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="text-center flex flex-col gap-4">
          <p className="font-condensed text-text-secondary text-sm tracking-label uppercase">No impact data available</p>
          <Link
            href={`/work/${params.id}`}
            className="font-condensed text-xs tracking-label text-orange hover:text-white transition-colors duration-300 uppercase"
          >
            ← Back to Project
          </Link>
        </div>
      </div>
    )
  }

  return (
    <GalleryPage
      projectId={project.id}
      projectTitle={project.title}
      label="Impact"
      images={project.impact}
      singleColumn
    />
  )
}

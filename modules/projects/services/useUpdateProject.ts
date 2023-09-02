import { Project } from "@/modules/projects/domains/project"
import apiClient from "@/modules/shared/infrastructure/api/apiClient"
import { projectUpdateEndpoint } from "@/modules/projects/constants"
import { formDataBuilder } from "@/modules/shared/utils"

type ProjectsData = { project: Project }

export const useUpdateProject = () => {
  const updateProject = (project: Project) => {
    const formData = formDataBuilder({ name: project.name })

    return apiClient.post<ProjectsData>(
      `${projectUpdateEndpoint}?id=${project.id}`,
      formData,
      { headers: {'Content-Type': 'multipart/form-data'} }
    )
  }

  return {
    updateProject
  }
}

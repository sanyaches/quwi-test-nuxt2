import { Project } from '@/modules/projects/domains/project'
import apiClient from '@/modules/shared/infrastructure/api/apiClient'
import { projectsEndpoint } from '@/modules/projects/constants'

type ProjectsData = { projects: Project[] }

export const useGetProjects = () => {
  const getProjects = () => {
    return apiClient.get<ProjectsData>(projectsEndpoint)
  }

  return {
    getProjects,
  }
}

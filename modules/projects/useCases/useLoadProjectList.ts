import { useGetProjects } from "@/modules/projects/services/useGetProjects"

export const useLoadProjectList = () => {
  const { getProjects } = useGetProjects()

  const loadProjectList = async () => {
    const res = await getProjects()

    if (!res.data.projects) {
      return
    }

    return res.data.projects
  }

  return {
    loadProjectList
  }
}

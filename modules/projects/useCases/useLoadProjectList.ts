import { useGetProjects } from '@/modules/projects/services/useGetProjects'

export const useLoadProjectList = (onError: (e: unknown) => void | undefined) => {
  const { getProjects } = useGetProjects()

  const loadProjectList = async () => {
    try {
      const res = await getProjects()

      if (!res.data.projects) {
        return []
      }

      return res.data.projects
    } catch (e) {
      onError?.(e)
    }
  }

  return {
    loadProjectList,
  }
}

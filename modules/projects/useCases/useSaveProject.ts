import { ref } from '@nuxtjs/composition-api'
import type { Project } from '@/modules/projects/domains'
import { useToast } from '@/modules/shared/infrastructure/services/useToast'
import { useUpdateProject } from '@/modules/projects/services'

export const useSaveProject = () => {
  const { updateProject } = useUpdateProject()
  const toast = useToast()
  const loading = ref(false)

  const saveProject = async (project: Project) => {
    try {
      loading.value = true

      const res = await updateProject(project)

      return Boolean(res?.data?.project)
    } catch(e) {
      toast.error(`Error during update project. ${e}`)
    } finally {
      loading.value = false
    }
  }

  return {
    saveProject,
    loading,
  }
}

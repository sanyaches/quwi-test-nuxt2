import { ref } from "@nuxtjs/composition-api";
import type { Project } from "@/modules/projects/domains";

import { useUpdateProject } from "@/modules/projects/services";

export const useSaveProject = () => {
  const loading = ref(false)
  const { updateProject } = useUpdateProject()

  const saveProject = async (project: Project) => {
    try {
      loading.value = true

      const res = await updateProject(project)

      return Boolean(res?.data?.project)
    } finally {
      loading.value = false
    }
  };

  return {
    saveProject,
    loading,
  };
}

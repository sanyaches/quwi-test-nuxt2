export const formDataBuilder = (data: Record<string, unknown>) => {
  const formData = new FormData();

  Object.keys(data).forEach((key) => {
      formData.append(key, String(data[key]));
  });

  return formData;
}

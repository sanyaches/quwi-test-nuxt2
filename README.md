https://api.quwi.com/v2 - Base api url

Pages:

1. authorize
1. home with projects (redirect after successful authorization)
1. modal with edit form (edit only name of project)

Endpoints:

- Login: POST {base}/auth/login - returns user info and `token` - for Bearer authorization
- Projects list: GET {base}/projects-manage/index - returns list projects
- Edit project: POST {base}/projects-manage/update?id={project_id} - multipart/form {"name": "new_name"}

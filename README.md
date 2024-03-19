[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=13668010&assignment_repo_type=AssignmentRepo)

![image](https://github.com/melontimmy/CS-519-assignment1/assets/112988308/1949436d-84c2-42c4-b917-5901b6af63d7)

The repo currently automatically deploys using Github action using the respective workflow files to upload each of the Node subfolders, frontend, API1, API2 to the respective Azure services. frontend is hosted on Azure webapps, API1 is uploaded to Azure Functions, and API2 is uploaded to an Azure container registry, which processes it to a Azure container app. All uploaded code uses Node.js. Since these services are currently distinct and do not rely on each other at the moment, they can work independently from each other.

#  DevOps CI/CD Pipeline : GitHub Actions + AWS EC2

![CI/CD Pipeline](https://github.com/MahamIftikhar-code/devops-pipeline/actions/workflows/deploy.yml/badge.svg)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)
![AWS EC2](https://img.shields.io/badge/AWS_EC2-FF9900?style=flat&logo=amazon-aws&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=github-actions&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)

> Automated CI/CD pipeline that tests, builds a Docker image, and deploys to AWS EC2 on every git push.
##  How It Works

| Step | Action |
|------|--------|
| 1 | git push origin main |
| 2 | GitHub Actions: Run Tests |
| 3 | Build Docker Image |
| 4 | Push to Docker Hub |
| 5 | SSH into AWS EC2 |
| 6 | Pull and Run new container |
| 7 | App live on internet! |


 ##  Project Structure

```
devops-pipeline/
├── app.js                # Express app
├── package.json          # Dependencies
├── Dockerfile            # Container config
├── .gitignore
├── .github/
│   └── workflows/
│       └── deploy.yml    # CI/CD pipeline
└── README.md
```

##  Pipeline 

> Add your GitHub Actions screenshot here after first successful run









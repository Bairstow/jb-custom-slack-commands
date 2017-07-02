pipeline {
  agent any
  parameters {
    string(name: "image", defaultValue: "jb-custom-slack-commands:1.0.${env.BUILD_ID}", description: "Custom Slack
    Commands docker image label")
    string(name: "container", defaultValue: "slack-commands-container", description: "Container label")
  }
  stages{
    stage("Build") {
      steps {
        echo "Building ${params.image}..."
        checkout scm
        sh "docker build -t ${params.image} ."
      }
    }
    stage("Deploy") {
      steps {
        echo "Deploying container..."
        sh "docker stop ${params.container} && docker rm ${params.container} || true"
        sh "docker run --name ${params.container} -p=3200:3200 --restart=always -d ${params.image}"
      }
    }
  }
}

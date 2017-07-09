pipeline {
  agent any
  parameters {
    string(name: "image", defaultValue: "jb-custom-slack-commands:1.0.${env.BUILD_ID}", description: "Custom Slack Commands docker image label")
    string(name: "container", defaultValue: "slack-commands-container", description: "Container label")
    string(name: "slackToken", defaultValue: "xw0MCnvAjBbDIT4N3oJQhw7R", description: "Slack token")
    string(name: "port", defaultValue: "3200", description: "Port specification")
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
        echo "Deploying container on port ${params.port}..."
        sh "docker stop ${params.container} && docker rm ${params.container} || true"
        sh "docker run --name ${params.container} -p=3200:${params.port} -e SLACK_TOKEN=${params.slackToken} --restart=always -d ${params.image}"
      }
    }
  }
}

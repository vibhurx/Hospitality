pipeline {
  agent any
  
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    
    stage('Build Backend') {
      steps {
        dir('Backend') {
          sh 'npm install'
        }
      }
    }
    
    stage('Instal dependencis,Build Frontend') {
      steps {
        dir('Frontend') {
          sh 'npm install'
        }
      }
    }
    stage('Build and Push Docker Images') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'c4bc100a-3b78-4d6d-a7c0-d8bf8bf0024d', passwordVariable: 'abcd@1234', usernameVariable: 'vibhur7')]) {
          dir('Frontend') {
            sh "docker build -t my-frontend ."
            sh "docker login -u vibhur7 -p abcd@1234"
            sh "docker push vibhur7/my-frontend"
          }
          dir('Backend') {
            sh "docker build -t my-backend ."
            sh "docker login -u vibhur7 -p abcd@1234"
            sh "docker push vibhur7/my-backend"
          }
        }
      }
    }
  }
}



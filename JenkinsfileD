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
          sh 'npm run build'
        }
      }
    }
    stage('Build and Push Docker Images') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub', passwordVariable: 'abcd@1234', usernameVariable: 'vibhur7')]) {
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
    stage('Deploy to docker') { 
        steps {
            sh "docker -compose up -d
	}
    }
  }
}



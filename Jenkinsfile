pipeline {
  agent any
  
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    
    stage('Build and Test Backend') {
      steps {
        dir('backend') {
          sh 'npm install'
          sh 'npm test'
        }
      }
    }
    
    stage('Build and Test Frontend') {
      steps {
        dir('frontend') {
          sh 'npm install'
          sh 'npm test'
          sh 'npm run build'
        }
      }
    }
    }
}

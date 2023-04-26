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
        dir('Backend') {
          sh 'npm install'
          sh 'npm test'
        }
      }
    }
    
    stage('Build and Test Frontend') {
      steps {
        dir('Frontend') {
          sh 'npm install'
          sh 'npm test'
          sh 'npm run build'
        }
      }
    }
    }
}

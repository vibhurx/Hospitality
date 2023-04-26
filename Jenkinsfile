pipeline {
  agent any
  
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    
    stage('Install dependencies and build Backend') {
      steps {
        dir('Backend') {
          sh 'npm install'
        }
      }
    }
    
    stage('Install dependencis and build Frontend') {
      steps {
        dir('Frontend') {
          sh 'npm install'
          sh 'npm run build'
        }
      }
    }

    stage('Deploy'){
	Enviornment{
	}
	Steps {
	}
    }
}
}

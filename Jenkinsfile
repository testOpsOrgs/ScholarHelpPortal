pipeline {
  agent any
  stages {
    stage('checkout') {
      steps {
        git(url: 'https://github.com/ScholarHelpPortal/ScholarHelpPortal', branch: 'dev')
      }
    }

    stage('log files') {
      parallel {
        stage('log files') {
          steps {
            sh 'ls -la'
          }
        }

        stage('Front-end test') {
          steps {
            sh 'cd UI && npm install && npm test'
          }
        }

      }
    }

  }
}
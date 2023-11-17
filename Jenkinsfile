pipeline {
  agent any
  stages {
    stage('checkout') {
      steps {
        git(url: 'https://github.com/ScholarHelpPortal/ScholarHelpPortal', branch: 'dev')
      }
    }

    stage('log files') {
      steps {
        sh 'ls -la'
      }
    }

  }
}
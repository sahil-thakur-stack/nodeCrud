pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Checking out code...'
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                bat 'docker build -t my-node-app .'
            }
        }

        stage('Run Docker Container') {
            steps {
                echo 'Running Docker container...'
                bat '''
                    docker stop my-node-app-container || exit 0
                    docker rm my-node-app-container || exit 0
                    docker run -d -p 3000:3000 --name my-node-app-container my-node-app
                '''
            }
        }
    }
}

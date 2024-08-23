// root executable for the groovy file to know it's working with a pipeline
pipeline{

// will find any available agent
    agent any

//     Setup environment to pull from the jenkins global for the credentials
    environment{
        // Global Variables from Jenkins
        dockerHub = credentials('dockerHub')

        // Custom Variables for this Jenkinsfile only
        SERVICE = "byteshare-frontend" // #CHECK CONFIG
        VERSION = "${env.BUILD_ID}"
        IMAGE = "${dockerHub_USR}/${SERVICE}:${VERSION}"
        CONTAINER = "${SERVICE}-service" 
    }

// definte all of the stages
    stages{

// First stage is the build & deliver and name it
        stage('Build & Deliver'){

// Steps are all of the executables on shell, use "" when using environment variables
            steps{
                sh "docker login -u ${dockerHub_USR} -p ${dockerHub_PSW}"
                sh "docker build -t ${IMAGE} ."
//pushes image to dockerHub
                sh "docker push ${IMAGE}"
            }

        }

        stage("Stop & Destroy"){
            steps{
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE'){
                    sh "docker stop ${CONTAINER}"
                    sh "docker rm ${CONTAINER}"
                }
            }
        }

        stage('Deploy'){

            steps{
                sh "docker run --name ${CONTAINER} -d -p 5005:5173 ${IMAGE}" // #CHECK CONFIG ports
            }

        }

    }
}
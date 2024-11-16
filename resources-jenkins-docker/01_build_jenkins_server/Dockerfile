FROM jenkins/jenkins:lts-jdk17

USER root
# Turn off Set Wizard UI
ENV JAVA_OPTS="-Djenkins.install.runSetupWizard=false"

# Install necessary plugins
COPY plugins.txt /usr/share/jenkins/ref/plugins.txt
RUN jenkins-plugin-cli -f /usr/share/jenkins/ref/plugins.txt

ARG JENKINS_USER
ARG JENKINS_PASS
ENV JENKINS_USER=$JENKINS_USER
ENV JENKINS_PASS=$JENKINS_PASS

# Copy the init.groovy.d directory to the container directory
COPY init.groovy.d/ /usr/share/jenkins/ref/init.groovy.d/

# Change user from root to jenkins
USER jenkins
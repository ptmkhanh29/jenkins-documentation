# Sử dụng image Jenkins LTS chính thức của Docker Hub làm base image
FROM jenkins/jenkins:lts

# Tắt cài đặt Wizard UI
ENV JAVA_OPTS="-Djenkins.install.runSetupWizard=false"

# Cài đặt plugin cần thiết
COPY plugins.txt /usr/share/jenkins/ref/plugins.txt
RUN jenkins-plugin-cli -f /usr/share/jenkins/ref/plugins.txt

# Define biến môi trường cho Jenkins, nó sẽ nhận 2 arguments JENKINS_USER và JENKINS_PASS
ARG JENKINS_USER
ARG JENKINS_PASS
ENV JENKINS_USER=$JENKINS_USER
ENV JENKINS_PASS=$JENKINS_PASS

# Copy thư mục init.groovy.d vào container để tạo user admin tự động.
COPY init.groovy.d/ /usr/share/jenkins/ref/init.groovy.d/

# Thay đổi user của container từ root thành jenkins để tránh rủi ro bảo mật.
USER jenkins
Cài đặt Jenkins
===============

Để cài đặt Jenkins, bạn cần làm theo các bước sau:

1. Cài đặt Java:
   .. code-block:: bash

      sudo apt update
      sudo apt install openjdk-11-jdk

2. Cài đặt Jenkins:
   .. code-block:: bash

      wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key | sudo apt-key add -
      sudo sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
      sudo apt update
      sudo apt install jenkins

Tiếp tục với các hướng dẫn cho các chương khác...
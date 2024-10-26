Cài đặt Jenkins trên Linux
===========================

Để cài đặt Jenkins trên Linux, bạn cần làm theo các bước sau:

.. code-block:: bash
   :linenos:
   :caption: Câu lệnh cài đặt

   sudo apt update
   sudo apt install openjdk-11-jdk
   wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key | sudo apt-key add -
   echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list
   sudo apt update
   sudo apt install jenkins

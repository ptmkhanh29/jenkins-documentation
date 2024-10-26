Cài đặt Jenkins với Docker
===========================

Để cài đặt Jenkins bằng Docker, bạn có thể sử dụng lệnh sau:

.. code-block:: bash
   :linenos:
   :caption: Câu lệnh cài đặt

   docker run -d -p 8080:8080 -p 50000:50000 jenkins/jenkins:lts

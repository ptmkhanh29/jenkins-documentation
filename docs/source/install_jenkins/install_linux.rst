Cài Đặt Jenkins trên Linux (Debian/Ubuntu)
==========================================

Khác với Window, việc cài đặt Jenkins trên linux dễ dàng hơn nhiều, vì mình không có host Linux riêng biệt nên tạm thời sử dụng WSL2 thay thế.

Đây là hướng dẫn chi tiết để cài đặt Jenkins trên hệ điều hành Linux như Ubuntu.

.. raw:: html

   <div class="subject">
       Cài đặt JDK
   </div>

- Cập nhật danh sách gói

.. code-block:: bash

   sudo apt update

Jenkins yêu cầu Java để chạy, sử dụng JRE hoặc JDK phiên bản 17 trở lên là phù hợp.

.. code-block:: bash

   sudo apt install openjdk-17-jre

Kiểm tra phiên bản Java để đảm bảo cài đặt thành công.

.. code-block:: bash

   java -version

.. image:: images/install_linux/install_linux_1.png
   :alt: Install java on Linux
   :width: 100%
   :align: center


.. raw:: html

   <div class="subject">
       Cài đặt Jenkins
   </div>


- Thêm kho lưu trữ Jenkins

Đầu tiên, thêm khoá GPG của Jenkins vào hệ thống của bạn.

.. code-block:: bash

   curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key | sudo tee \
   /usr/share/keyrings/jenkins-keyring.asc > /dev/null

Sau đó, thêm đường dẫn kho lưu trữ Jenkins vào danh sách nguồn của apt.

.. code-block:: bash

   echo "deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
   https://pkg.jenkins.io/debian-stable binary/" | sudo tee \
   /etc/apt/sources.list.d/jenkins.list > /dev/null

.. image:: images/install_linux/install_linux_2.png
   :alt: Install Jenkins on Linux
   :width: 100%
   :align: center


- Cập nhật lại danh sách gói

.. code-block:: bash

   sudo apt-get update

- Cài đặt Jenkins

.. code-block:: bash

   sudo apt-get install jenkins

.. image:: images/install_linux/install_linux_3.png
   :alt: Install Jenkins on Linux successfully
   :width: 100%
   :align: center


- Khởi động service Jenkins

.. code-block:: bash

   sudo systemctl start jenkins.service

- Kiểm tra trạng thái service của Jenkins

Sử dụng lệnh sau để xem trạng thái hiện tại của dịch vụ Jenkins.

.. code-block:: bash

   sudo systemctl status jenkins

Nếu bạn thấy ``Active: active (running)`` như ảnh thì nghĩa là service của Jenkins đã được khởi động thành công và đang chạy.

.. image:: images/install_linux/install_linux_4.png
   :alt: Check status of Jenkins
   :width: 100%
   :align: center


Bây giờ, bạn có thể truy cập Jenkins qua trình duyệt web của mình tại địa chỉ 
`http://<địa chỉ IP của máy chủ>:8080 <http://<địa chỉ IP của máy chủ>:8080>`_ hoặc `http://localhost:8080 <http://localhost:8080>`_.

Tuy nhiên, lần đầu truy cập các bạn sẽ phải ``Unlock Jenkins``. Như ảnh bên dưới các bạn sẽ cần nhập Administrator password.

.. image:: images/install_linux/install_linux_5.png
   :alt: Access server Jenkins
   :width: 100%
   :align: center


Bạn có thể sử dụng lệnh này để lấy mật khậu khởi tạo ban đầu, lưu ý dùng ``sudo`` để tránh bị lỗi Access denied.

.. code-block:: bash

   sudo cat /var/lib/jenkins/secrets/initialAdminPassword

.. image:: images/install_linux/install_linux_6.png
   :alt: Get password
   :width: 100%
   :align: center

.. raw:: html

   <div style="margin-bottom:20px;"></div>


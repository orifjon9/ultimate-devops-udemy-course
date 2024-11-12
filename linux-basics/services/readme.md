# Linux Services Commands

## 1. `systemctl`
`systemctl` is used to examine and control the systemd system and service manager.

### Description:
- Start a service: `systemctl start <service_name>`
- Stop a service: `systemctl stop <service_name>`
- Restart a service: `systemctl restart <service_name>`
- Enable a service to start on boot: `systemctl enable <service_name>`
- Disable a service from starting on boot: `systemctl disable <service_name>`
- Check the status of a service: `systemctl status <service_name>`

### Example:
```bash
# Start the nginx service
systemctl start nginx

# Check the status of the nginx service
systemctl status nginx
```

## Adding a Service File

To add a new service file, you need to create a unit file in the `/etc/systemd/system/` directory. This file should have a `.service` extension and contain the necessary configuration for your service.

### Example:

1.1. Create a new service file:
```bash
sudo nano /etc/systemd/system/my_service.service
```

1.2. Add the following content to the file:
```ini
[Unit]
Description=My Custom Service
After=network.target

[Service]
ExecStart=/usr/bin/python3 /opt/code/my_my_service.py
Restart=always
User=nobody
Group=nogroup

[Install]
WantedBy=multi-user.target
```

1.3. Reload the systemd manager configuration:
```bash
sudo systemctl daemon-reload
```

1.4. Start and enable the service:
```bash
sudo systemctl start my_service
sudo systemctl enable my_service
```

1.5. Check the status of the service:
```bash
sudo systemctl status my_service
```

## 2. `service`
`service` is used to run a System V init script.

### Description:
- Start a service: `service <service_name> start`
- Stop a service: `service <service_name> stop`
- Restart a service: `service <service_name> restart`
- Check the status of a service: `service <service_name> status`

### Example:
```bash
# Start the apache2 service
service apache2 start

# Check the status of the apache2 service
service apache2 status
```

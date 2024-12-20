# Docker Commands

## `docker run`
Runs a command in a new container.

**Example:**
```sh
docker run hello-world
```
This command runs the `hello-world` image in a new container.

### Options

- `-d`: Run container in background and print container ID.
- `-it`: Run container in interactive mode with a terminal.

**Example with options:**
```sh
docker run -d -it -p 8080:80 ubuntu bash
```
This command runs the `ubuntu` image in a new container in the background, opens an interactive bash shell, and maps port 8080 on the host to port 80 in the container.

## `docker ps`
Lists running containers.

**Example:**
```sh
docker ps
```
This command shows all currently running containers.

### Options

- `-a`: Show all containers (default shows just running).

**Example with options:**
```sh
docker ps -a
```
This command shows all containers, including those that are stopped.

## `docker build`
Builds an image from a Dockerfile.

**Example:**
```sh
docker build -t my-image:latest .
```
This command builds an image named `my-image` with the `latest` tag from the Dockerfile in the current directory.

## `docker pull`
Pulls an image or a repository from a registry.

**Example:**
```sh
docker pull ubuntu:latest
```
This command pulls the latest version of the `ubuntu` image from the Docker registry.

## `docker push`
Pushes an image or a repository to a registry.

**Example:**
```sh
docker push my-image:latest
```
This command pushes the `my-image` with the `latest` tag to the Docker registry.

## `docker exec`
Runs a command in a running container.

**Example:**
```sh
docker exec -it my-container bash
```
This command opens a bash shell in the running container named `my-container`.

## `docker stop`
Stops one or more running containers.

**Example:**
```sh
docker stop my-container
```
This command stops the running container named `my-container`.

## `docker rm`
Removes one or more containers.

**Example:**
```sh
docker rm my-container
```
This command removes the container named `my-container`.

## `docker rmi`
Removes one or more images.

**Example:**
```sh
docker rmi my-image:latest
```
This command removes the image named `my-image` with the `latest` tag.

## `docker logs`
Fetches the logs of a container.

**Example:**
```sh
docker logs my-container
```
This command fetches the logs of the container named `my-container`.

## `docker-compose up`
Starts services defined in a `docker-compose.yml` file.

**Example:**
```sh
docker-compose up
```
This command starts all the services defined in the `docker-compose.yml` file in the current directory.

## `docker-compose down`
Stops and removes containers, networks, images, and volumes defined in a `docker-compose.yml` file.

**Example:**
```sh
docker-compose down
```
This command stops and removes all the resources defined in the `docker-compose.yml` file in the current directory.

## `docker volume`
Manages Docker volumes.

**Example:**
```sh
docker volume create my-volume
```
This command creates a new volume named `my-volume`.

### Options

- `ls`: List all volumes.
- `rm`: Remove one or more volumes.

**Example with options:**
```sh
docker volume ls
```
This command lists all Docker volumes.

## `docker network`
Manages Docker networks.

**Example:**
```sh
docker network create my-network
```
This command creates a new network named `my-network`.

### Options

- `ls`: List all networks.
- `rm`: Remove one or more networks.
- `inspect <network_name>`: inspect the network

**Example with options:**
```sh
docker network ls
```
This command lists all Docker networks.

### Creates a new network with a specified driver, subnet, and gateway.
```
docker network create --driver bridge --subnet 182.18.0.0/24 --gateway 182.18.0.1 wp-mysql-network
```

**Example:**
```sh
docker network create --driver bridge --subnet 182.18.0.0/24 --gateway 182.18.0.1 wp-mysql-network
```
This command creates a new bridge network named `wp-mysql-network` with the subnet `182.18.0.0/24` and the gateway `182.18.0.1`.

**Example 2:**
```sh
docker run -d -e MYSQL_ROOT_PASSWORD=db_pass123 --name mysql-db --network wp-mysql-network mysql:5.6
```
This command runs a new container named `mysql-db` using the `mysql:5.6` image, sets the root password for MySQL to `db_pass123`, and connects the container to the `wp-mysql-network` network.

**Example 3:**
```sh
docker run --network=wp-mysql-network -e DB_Host=mysql-db -e DB_Password=db_pass123 -p 38080:8080 --name webapp --link mysql-db:mysql-db -d kodekloud/simple-webapp-mysql
```
This command runs a new container named `webapp` using the `kodekloud/simple-webapp-mysql` image, sets environment variables for the database host and password, maps port 38080 on the host to port 8080 in the container, links the container to the `mysql-db` container, and connects it to the `wp-mysql-network` network.

## Docker Container Troubleshooting

### `docker inspect`
Displays detailed information on a container or image.

**Example:**
```sh
docker inspect my-container
```
This command shows detailed information about the container named `my-container`.

### `docker logs`
Fetches the logs of a container.

**Example:**
```sh
docker logs my-container
```
This command fetches the logs of the container named `my-container`.

### `docker exec`
Runs a command in a running container.

**Example:**
```sh
docker exec -it my-container bash
```
This command opens a bash shell in the running container named `my-container`.

### `docker stats`
Displays a live stream of container(s) resource usage statistics.

**Example:**
```sh
docker stats my-container
```
This command shows real-time resource usage statistics for the container named `my-container`.

### `docker top`
Displays the running processes of a container.

**Example:**
```sh
docker top my-container
```
This command shows the running processes inside the container named `my-container`.

### `docker events`
Gets real-time events from the server.

**Example:**
```sh
docker events
```
This command streams real-time events from the Docker server.

### `docker diff`
Inspects changes to files or directories on a container’s filesystem.

**Example:**
```sh
docker diff my-container
```
This command shows changes made to the filesystem of the container named `my-container`.
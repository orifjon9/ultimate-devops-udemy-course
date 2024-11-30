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
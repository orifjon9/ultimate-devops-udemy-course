# Jenkins Installation Guide

## Using Jenkins CLI

Jenkins provides a command-line interface (CLI) that allows you to interact with Jenkins from a terminal or script. This can be useful for automating tasks or managing Jenkins from a remote machine.

### Downloading the Jenkins CLI

To use the Jenkins CLI, you need to download the `jenkins-cli.jar` file from your Jenkins server. You can find it at the following URL:
```
http://localhost:8080/jnlpJars/jenkins-cli.jar
```

### Running Jenkins CLI Commands

You can run Jenkins CLI commands using the following syntax:
```sh
java -jar jenkins-cli.jar -s http://localhost:8080/ COMMAND [OPTIONS]
```

### Common Jenkins CLI Commands

Here are some common Jenkins CLI commands:

- **List all jobs:**
    ```sh
    java -jar jenkins-cli.jar -s http://localhost:8080/ list-jobs
    ```

- **Build a job:**
    ```sh
    java -jar jenkins-cli.jar -s http://localhost:8080/ build JOB_NAME
    ```

- **Get the console output of a build:**
    ```sh
    java -jar jenkins-cli.jar -s http://localhost:8080/ console JOB_NAME BUILD_NUMBER
    ```

- **Create a new job by copying an existing job:**
    ```sh
    java -jar jenkins-cli.jar -s http://localhost:8080/ copy-job OLD_JOB_NAME NEW_JOB_NAME
    ```

- **Delete a job:**
    ```sh
    java -jar jenkins-cli.jar -s http://localhost:8080/ delete-job JOB_NAME
    ```

### Authenticating with Jenkins CLI

If your Jenkins instance requires authentication, you can pass your credentials using the `-auth` option:
```sh
java -jar jenkins-cli.jar -s http://localhost:8080/ -auth USER:API_TOKEN COMMAND
```

You can generate an API token from your Jenkins user profile.

### Authenticating with SSH Key

You can also authenticate using an SSH key. First, ensure your public key is added to your Jenkins user profile. Then, use the following syntax to run Jenkins CLI commands:
```sh
java -jar jenkins-cli.jar -s http://localhost:8080/ -i /path/to/your/private_key COMMAND
```

For more information on Jenkins CLI commands and options, you can refer to the [official Jenkins documentation](https://www.jenkins.io/doc/book/managing/cli/).

### Stopping Jenkins

To stop the Jenkins service, you can use the following command:
```sh
sudo systemctl stop jenkins
```

### Removing Jenkins

If you need to remove Jenkins from your system, you can use the following commands:

For Debian-based systems (e.g., Ubuntu):
```sh
sudo apt-get remove --purge jenkins
```

For Red Hat-based systems (e.g., CentOS, Fedora):
```sh
sudo yum remove jenkins
```

For macOS:
```sh
brew uninstall jenkins-lts
```

After removing Jenkins, you may also want to remove any residual configuration files:
```sh
sudo rm -rf /var/lib/jenkins
sudo rm -rf /etc/jenkins
```
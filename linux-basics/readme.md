# Linux basics

## Common Linux Commands

Here are some of the most commonly used Linux commands along with their descriptions and examples:

- `ls`: Lists directory contents.
    - `ls -l` (lists directory contents in long format)
- `cd`: Changes the current directory.
    - `cd /home/user` (changes the current directory to `/home/user`)
- `pwd`: Prints the current working directory.
    - `pwd` (prints the full path of the current directory)
- `cp`: Copies files or directories.
    - `cp file1.txt file2.txt` (copies `file1.txt` to `file2.txt`)
- `mv`: Moves or renames files or directories.
    - `mv oldname.txt newname.txt` (renames `oldname.txt` to `newname.txt`)
    - `mv -r`: Recursively moves files and directories.
    - `mv -r /source/directory /destination/directory` (moves all files and directories from `/source/directory` to `/destination/directory`)
- `rm`: Removes files or directories.
    - `rm file.txt` (removes `file.txt`)
    - `rm -r /tmp/docs` (recursively removes all files and folders in `/tmp/docs`)
- `touch`: Creates an empty file or updates the timestamp of an existing file.
    - `touch newfile.txt` (creates an empty file named `newfile.txt`)
- `mkdir`: Creates a new directory.
    - `mkdir newdir` (creates a directory named `newdir`)
    - `mkdir -p /tests/step1/end /tests/step2` (creates multiple directories recursively)
- `rmdir`: Removes an empty directory.
    - `rmdir emptydir` (removes the directory named `emptydir`)
- `chmod`: Changes file permissions.
    - `chmod 755 script.sh` (sets the permissions of `script.sh` to `rwxr-xr-x`)
- `chown`: Changes file owner and group.
    - `chown user:group file.txt` (changes the owner and group of `file.txt` to `user` and `group`)
- `cat`: Concatenates and displays file content.
    - `cat file.txt` (displays the content of `file.txt`)
- `echo`: Displays a line of text.
    - `echo "Hello, World!"` (prints `Hello, World!` to the terminal)
- `man`: Displays the manual page for a command.
    - `man ls` (displays the manual for the `ls` command)
- `grep`: Searches for patterns in files.
    - `grep "search_term" file.txt` (searches for `search_term` in `file.txt`)
- `find`: Searches for files in a directory hierarchy.
    - `find /home -name "*.txt"` (finds all `.txt` files in `/home` directory)
- `tar`: Archives files.
    - `tar -cvf archive.tar file1 file2` (creates an archive named `archive.tar` containing `file1` and `file2`)
- `zip`: Compresses files.
    - `zip archive.zip file1 file2` (creates a zip archive named `archive.zip` containing `file1` and `file2`)
- `unzip`: Extracts compressed files.
    - `unzip archive.zip` (extracts the contents of `archive.zip`)
- `df`: Displays disk space usage.
    - `df -h` (displays disk space usage in human-readable format)
- `du`: Displays directory space usage.
    - `du -sh /home/user` (displays the size of `/home/user` directory in human-readable format)
- `ps`: Displays currently running processes.
    - `ps aux` (displays detailed information about all running processes)
- `kill`: Terminates processes.
    - `kill 1234` (terminates the process with PID `1234`)
- `top`: Displays real-time system information and processes.
    - `top` (displays an interactive view of system processes)
- `ssh`: Connects to a remote machine via SSH.
    - `ssh user@hostname` (connects to `hostname` as `user`)
- `scp`: Securely copies files between hosts.
    - `scp file.txt user@remote:/path/to/destination` (copies `file.txt` to the remote host)
- `wget`: Downloads files from the web.
    - `wget http://example.com/file.zip -O some-file.zip` (downloads `file.zip` from the specified URL and save it as `some-file.zip`)
- `curl`: Transfers data from or to a server.
    - `curl -O http://example.com/file.zip` (downloads `file.zip` from the specified URL)
- `sudo`: Executes a command as another user, typically the superuser.
    - `sudo apt-get update` (runs `apt-get update` with superuser privileges)

These commands are essential for navigating and managing a Linux system.
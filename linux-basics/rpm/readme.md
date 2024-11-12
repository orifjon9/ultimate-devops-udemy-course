# RPM Cheat Sheet

## Common RPM Commands

### Install a package

```sh
rpm -ivh package.rpm
```

- **Description**: Installs a package.
- **Example**: `rpm -ivh example.rpm`

### Upgrade a package

```sh
rpm -Uvh package.rpm
```

- **Description**: Upgrades a package.
- **Example**: `rpm -Uvh example.rpm`

### Remove a package

```sh
rpm -e package_name
```

- **Description**: Removes a package.
- **Example**: `rpm -e example`

### Query a package

```sh
rpm -q package_name
```

- **Description**: Queries if a package is installed.
- **Example**: `rpm -q example` `rpm -q example1 example2 example3` `rpm -qa | grep example2`

### List all installed packages

```sh
rpm -qa
```

- **Description**: Lists all installed packages.
- **Example**: `rpm -qa`

### Verify a package

```sh
rpm -V package_name
```

- **Description**: Verifies a package.
- **Example**: `rpm -V example`

### Show package information

```sh
rpm -qi package_name
```

- **Description**: Shows detailed information about a package.
- **Example**: `rpm -qi example`

### List files in a package

```sh
rpm -ql package_name
```

- **Description**: Lists all files installed by a package.
- **Example**: `rpm -ql example`

### Check dependencies of a package

```sh
rpm -qR package_name
```

- **Description**: Lists the dependencies of a package.
- **Example**: `rpm -qR example`

### Build a package from a spec file

```sh
rpmbuild -ba specfile.spec
```

- **Description**: Builds a package from a spec file.
- **Example**: `rpmbuild -ba example.spec`

### Rebuild the RPM database

```sh
rpm --rebuilddb
```

- **Description**: Rebuilds the RPM database.
- **Example**: `rpm --rebuilddb`

### Import a GPG key

```sh
rpm --import /path/to/keyfile
```

- **Description**: Imports a GPG key.
- **Example**: `rpm --import /etc/pki/rpm-gpg/RPM-GPG-KEY-example`

## Common YUM Commands

### Install a package

```sh
yum install package_name
```

- **Description**: Installs a package.
- **Example**: `yum install example`

### Update a package

```sh
yum update package_name
```

- **Description**: Updates a package.
- **Example**: `yum update example`

### Remove a package

```sh
yum remove package_name
```

- **Description**: Removes a package.
- **Example**: `yum remove example`

### List all available packages

```sh
yum list available
```

- **Description**: Lists all available packages.
- **Example**: `yum list available`

### List installed packages

```sh
yum list installed
```

- **Description**: Lists all installed packages.
- **Example**: `yum list installed`

### Search for a package

```sh
yum search keyword
```

- **Description**: Searches for a package by keyword.
- **Example**: `yum search example`

### Show package information

```sh
yum info package_name
```

- **Description**: Shows detailed information about a package.
- **Example**: `yum info example`

### Clean YUM cache

```sh
yum clean all
```

- **Description**: Cleans the YUM cache.
- **Example**: `yum clean all`

### Check for updates

```sh
yum check-update
```

- **Description**: Checks for available updates.
- **Example**: `yum check-update`

### List package groups

```sh
yum grouplist
```

- **Description**: Lists all package groups.
- **Example**: `yum grouplist`

### Install a package group

```sh
yum groupinstall "Group Name"
```

- **Description**: Installs a package group.
- **Example**: `yum groupinstall "Development Tools"`

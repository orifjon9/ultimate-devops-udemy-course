# Git Most Used Commands

## 1. git init
Initializes a new Git repository.

**Example:**
```sh
git init
```

## 2. git clone
Clones a repository into a new directory.

**Example:**
```sh
git clone https://github.com/user/repo.git
```

## 3. git status
Displays the state of the working directory and the staging area.

**Example:**
```sh
git status
```

## 4. git add
Adds changes in the working directory to the staging area.

**Example:**
```sh
git add filename
```

### 4.1. git rm
Removes files from the working directory and from the staging area.

**Example:**
```sh
git rm filename
```

## 5. git commit
Records changes to the repository.

**Example:**
```sh
git commit -m "Commit message"
```

### 5.1. git commit -am
Adds changes in the working directory to the staging area and commits them in one step.

**Example:**
```sh
git commit -am "Commit message"
```

### 5.1. git reset --hard HEAD~1
Undoes the last commit and discards the changes.

**Example:**
```sh
git reset --hard HEAD~1
```

## 6. git push
Updates remote refs along with associated objects.

**Example:**
```sh
git push origin main
```

## 7. git pull
Fetches from and integrates with another repository or a local branch.

**Example:**
```sh
git pull origin <branch-name>
```

## 8. git branch
Lists, creates, or deletes branches.

**Example:**
```sh
git branch
git branch new-branch
git branch -d old-branch
```

## 9. git checkout
Switches branches or restores working tree files.

**Example:**
```sh
git checkout main
git checkout -b new-branch
```

## 10. git merge
Joins two or more development histories together.

**Example:**
```sh
git merge feature-branch
```

## 11. git log
Shows the commit logs.

**Example:**
```sh
git log
```

## 12. git log --name-only
Shows the commit logs with the list of changed files.

**Example:**
```sh
git log --name-only
```

## 13. git log --graph --decorate
Shows the commit logs with a graphical representation of the branch structure and decorated with reference names.

**Example:**
```sh
git log --graph --decorate
```

## 14. git reset --soft HEAD~1
Undoes the last commit but keeps the changes staged.

**Example:**
```sh
git reset --soft HEAD~1
```

## 13. git branch commands

### 13.1. Create a new branch
Creates a new branch.

**Example:**
```sh
git branch new-branch
```

### 13.2. Switch to a branch
Switches to the specified branch.

**Example:**
```sh
git checkout branch-name
```

### 13.3. Create and switch to a new branch
Creates a new branch and switches to it.

**Example:**
```sh
git checkout -b new-branch
```

### 13.4. List branches
Lists all branches in the repository.

**Example:**
```sh
git branch
```

### 13.5. Delete a branch
Deletes the specified branch.

**Example:**
```sh
git branch -d branch-name
```

### 13.6. Push a branch
Pushes the specified branch to the remote repository.

**Example:**
```sh
git push origin branch-name
```

## 14. git merge commands

### 14.1. Merge a branch into the current branch
Merges the specified branch into the current branch.

**Example:**
```sh
git merge branch-name
```

### 14.2. Abort a merge
Aborts the current merge process and tries to reconstruct the pre-merge state.

**Example:**
```sh
git merge --abort
```

### 14.3. Continue a merge after resolving conflicts
Continues the merge process after resolving conflicts.

**Example:**
```sh
git merge --continue
```

## 15. git remote

### 15.1. Add a remote repository
Adds a new remote repository.

**Example:**
```sh
git remote add origin https://github.com/user/repo.git
```

### 15.2. Remove a remote repository
Removes the specified remote repository.

**Example:**
```sh
git remote remove origin
```

### 16.1. Push
Forces the update of the remote repository with local changes.

**Example:**
```sh
git push -u origin <branch-name>
git push --force origin <branch-name> # using force push
```
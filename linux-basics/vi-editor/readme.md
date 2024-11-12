# Common vi Editor Commands

## Basic Commands

### Open a File
- **Command:** `vi filename`
- **Description:** Opens the specified file in vi editor.
- **Example:** `vi readme.md`

### Insert Mode
- **Command:** `i`
- **Description:** Switches to insert mode to allow text entry.
- **Example:** Press `i` and start typing.

### Save and Quit
- **Command:** `:wq`
- **Description:** Saves the changes and exits the editor.
- **Example:** Press `Esc`, then type `:wq` and press `Enter`.

### Quit Without Saving
- **Command:** `:q!`
- **Description:** Exits the editor without saving changes.
- **Example:** Press `Esc`, then type `:q!` and press `Enter`.

## Navigation Commands

### Move Cursor
- **Command:** `h`, `j`, `k`, `l`
- **Description:** Moves the cursor left, down, up, and right respectively.
- **Example:** Press `h` to move left.

### Go to Line
- **Command:** `:n`
- **Description:** Moves the cursor to the specified line number.
- **Example:** `:10` moves to line 10.

## Editing Commands

### Delete a Line
- **Command:** `dd`
- **Description:** Deletes the current line.
- **Example:** Press `dd` to delete the line where the cursor is located.

### Copy a Line
- **Command:** `yy`
- **Description:** Copies the current line.
- **Example:** Press `yy` to copy the line where the cursor is located.

### Paste
- **Command:** `p`
- **Description:** Pastes the copied or cut text after the cursor.
- **Example:** Press `p` to paste the copied line.

### Undo
- **Command:** `u`
- **Description:** Undoes the last change.
- **Example:** Press `u` to undo the last action.

### Redo
- **Command:** `Ctrl + r`
- **Description:** Redoes the undone change.
- **Example:** Press `Ctrl + r` to redo the undone action.

## Search Commands

### Search Forward
- **Command:** `/pattern`
- **Description:** Searches forward for the specified pattern.
- **Example:** `/error` searches for the word "error".

### Search Backward
- **Command:** `?pattern`
- **Description:** Searches backward for the specified pattern.
- **Example:** `?error` searches backward for the word "error".

### Next Match
- **Command:** `n`
- **Description:** Moves to the next occurrence of the search pattern.
- **Example:** Press `n` to go to the next match.

### Previous Match
- **Command:** `N`
- **Description:** Moves to the previous occurrence of the search pattern.
- **Example:** Press `N` to go to the previous match.

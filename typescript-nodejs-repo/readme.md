# TypeScript Node.js Repository Setup

Follow these steps to create a TypeScript Node.js repository:

## Prerequisites

- Node.js installed
- npm or yarn installed

## Steps

1. **Set Up the Project**

    Initialize the project:

    ```bash
    mkdir my-typescript-project
    cd my-typescript-project
    npm init -y
    ```

    Install dependencies:

    ```bash
    npm install typescript ts-node @types/node --save-dev
    ```

    Initialize TypeScript configuration:

    ```bash
    npx tsc --init
    ```

    This will generate a `tsconfig.json` file.

    Install a linter (optional but recommended):

    ```bash
    npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
    ```

2. **Set Up `tsconfig.json`**

    Update the `tsconfig.json` file for common settings. Example:

    ```json
    {
      "compilerOptions": {
         "target": "ES2020",
         "module": "CommonJS",
         "outDir": "./dist",
         "rootDir": "./src",
         "strict": true,
         "esModuleInterop": true,
         "skipLibCheck": true
      },
      "include": ["src/**/*.ts"],
      "exclude": ["node_modules", "dist"]
    }
    ```

3. **Set Up ESLint**

    Initialize ESLint:

    ```bash
    npx eslint --init
    ```

    Select:

    - How would you like to use ESLint? - To check syntax, find problems, and enforce code style
    - What type of modules does your project use? - CommonJS
    - Which framework does your project use? - None of these
    - Does your project use TypeScript? - Yes
    - Where does your code run? - Node
    - Install dependencies - Yes

    Update `.eslintrc`: Add or modify the configuration to work with TypeScript:

    ```json
    {
      "env": {
         "es2021": true,
         "node": true
      },
      "extends": [
         "eslint:recommended",
         "plugin:@typescript-eslint/recommended"
      ],
      "parser": "@typescript-eslint/parser",
      "parserOptions": {
         "ecmaVersion": 12,
         "sourceType": "module"
      },
      "plugins": ["@typescript-eslint"],
      "rules": {}
    }
    ```

4. **Create Directory Structure**

    ```bash
    mkdir src
    touch src/index.ts
    ```

    Write a simple example in `src/index.ts`:

    ```typescript
    const greet = (name: string): string => {
      return `Hello, ${name}!`;
    };

    console.log(greet("World"));
    ```

5. **Add NPM Scripts**

    Update `package.json`:

    ```json
    "scripts": {
      "build": "tsc",
      "start": "node dist/index.js",
      "dev": "ts-node src/index.ts",
      "lint": "eslint 'src/**/*.ts'"
    }
    ```

6. **Run the Project**

    Start in development mode:

    ```bash
    npm run dev
    ```

    Build the project:

    ```bash
    npm run build
    ```

    Start the built project:

    ```bash
    npm start
    ```

    Lint the code:

    ```bash
    npm run lint
    ```

7. **Optional Enhancements**

    Install testing framework (e.g., Jest):

    ```bash
    npm install jest ts-jest @types/jest --save-dev
    npx ts-jest config:init
    ```

    Set up Prettier for consistent formatting:

    ```bash
    npm install prettier eslint-config-prettier eslint-plugin-prettier --save-dev
    ```

    Use Husky for pre-commit hooks:

    ```bash
    npm install husky --save-dev
    npx husky install
    ```

8. **Push to GitHub**

    Initialize a Git repository:

    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```

    Create a GitHub repository and link it:

    ```bash
    git remote add origin <your-repo-url>
    git branch -M main
    git push -u origin main
    ```

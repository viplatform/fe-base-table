# fe-node-package-boilerplate

A boilerplate repository for creating npm packages for commonly used components at Virtual Internships. This boilerplate is designed to streamline the process of setting up packages with best practices, using React, TypeScript, Tailwind CSS, and more.

## Features

- **React & TypeScript**: Build reusable and type-safe components.
- **Tailwind CSS**: Quickly style your components with utility-first CSS.
- **Jest & React Testing Library**: Ensure code quality with unit tests and component tests.
- **ESLint & Prettier**: Maintain code consistency and readability.
- **Husky**: Pre-commit hooks to enforce linting and formatting.
- **GitHub Actions**: Automate package publishing workflows.
- **Rollup**: Efficient bundling for npm packages.
- **Storybook (Optional)**: Isolated development and documentation for components.

## Getting Started

Follow these steps to use this boilerplate for creating your own npm package.

### 1. Clone the repository

```bash
git clone https://github.com/viplatform/fe-node-package-boilerplate.git
cd fe-node-package-boilerplate
```

### 2. Install dependencies

```bash
npm install
```

> **Note:** Node.js version 20+ is required.

### 3. (Optional) Initialize Storybook

If you wish to include Storybook in your project:

```bash
npx storybook@latest init
```

- When prompted, select **Vite** as the bundler.

### 4. Customize the project

- In `package.json`, replace `your-package-name` with your desired package name.
- Update the `description` and `author` fields in `package.json` with relevant information.
- Replace all instances of `fe-node-package-boilerplate` with your repository name.

## Usage

Once the setup is complete, you can start building your components and easily publish them to npm.

## Scripts

- `npm run build`: Bundles the package using Rollup.
- `npm test`: Runs unit tests using Jest and React Testing Library.
- `npm run lint`: Lints your codebase with ESLint.
- `npm run format`: Formats code using Prettier.
- `npm run storybook`: (Optional) Starts the Storybook environment for component development.

## License

This project is licensed under the MIT License.

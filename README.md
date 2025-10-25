# Tickit: Intuitive Ticket Management Application 🎫

Tickit is a modern, single-page application built with React that provides a seamless experience for managing support tickets. Designed for clarity, control, and speed, this application empowers users to effortlessly create, track, and resolve tickets, all within a secure, client-side persistent environment.

## 🚀 Features

- **User Authentication**: Secure sign-up and login functionality to protect user data.
- **Dashboard Analytics**: An intuitive dashboard offering real-time insights into ticket statuses (open, in progress, resolved).
- **Comprehensive Ticket Management**: Full CRUD (Create, Read, Update, Delete) operations for tickets.
- **Ticket Status & Priority**: Assign and update statuses (`open`, `in_progress`, `closed`) and priorities (`low`, `medium`, `high`) for organized tracking.
- **Client-Side Persistence**: All user and ticket data is securely stored and managed using browser's local storage.
- **Responsive Design**: A clean, modern user interface that adapts flawlessly to various screen sizes.

## ⚙️ Technologies Used

| Technology           | Description                                           |
| :------------------- | :---------------------------------------------------- | --- |
| **React**            | Frontend UI library                                   |
| **Vite**             | Fast build tool for modern web projects               |
| **React Router DOM** | Declarative routing for React                         |     |
| **Font Awesome**     | Icon library for enhanced UI                          |
| **Local Storage**    | Client-side data persistence for user and ticket data |

## 🏁 Getting Started

Follow these steps to set up and run the Tickit application on your local machine.

### Installation

1.  **Clone the Repository**:

    ```bash
    git clone https://github.com/Ehiz-js/ticket-manager-react.git
    ```

2.  **Navigate to the Project Directory**:

    ```bash
    cd ticket-manager-react
    ```

3.  **Install Dependencies** 📦:
    ```bash
    npm install
    # or yarn install
    ```

### Environment Variables

This project manages user and ticket data client-side using `localStorage`, and thus does not require any specific environment variables to be set for its core functionality.

## ▶️ Usage

Once the application is running, you can interact with it through your web browser.

1.  **Start the Development Server** ▶️:

    ```bash
    npm run dev
    # or yarn dev
    ```

    The application will typically be available at `http://localhost:5173` (or another port indicated in your terminal).

2.  **Sign Up**:

    - On the landing page, click "Get Started" or navigate to `/signup`.
    - Enter your full name, email, and a password, then confirm your password.
    - Click "Sign Up" to create a new account. Your user data will be stored in your browser's local storage.

3.  **Log In**:

    - Navigate to `/login`.
    - Enter your registered email and password.
    - Click "Login". Upon successful login, you'll be redirected to your personal dashboard.

4.  **Dashboard Overview**:

    - After logging in, the dashboard provides a summary of your tickets: total, open, in progress, and resolved.
    - Quick action buttons allow you to "Create Ticket" or "View Tickets."

5.  **Manage Tickets**:

    - **Create Ticket**: Click "Create Ticket" from the dashboard or navigate to the "Tickets" section. Fill out the form with a title, description, status, and priority, then submit.
    - **View Tickets**: Access the "Tickets" section to see a list of all your created tickets.
    - **Edit Ticket**: Click the "Edit" button on any ticket card to modify its details.
    - **Delete Ticket**: Click the "Delete" button on a ticket card. A confirmation prompt will appear before permanent deletion.

6.  **Logout**:
    - Click the "Logout" button in the navigation bar to end your session.

## 👋 Contributing

We welcome contributions to Tickit! To contribute, please follow these steps:

- **Fork the Repository**: Start by forking the project to your GitHub account.
- **Create a New Branch**: For each feature or bug fix, create a new branch from `main` (e.g., `feature/add-ticket-priority` or `bugfix/login-issue`).
- **Make Your Changes**: Implement your changes, ensuring your code adheres to the project's coding style.
- **Commit Your Work**: Write clear and concise commit messages.
- **Push Your Branch**: Push your new branch to your forked repository.
- **Open a Pull Request**: Submit a pull request to the `main` branch of the original repository, describing your changes and their benefits.

## 📝 License

This project is not currently licensed.

## ✍️ Author Info

- **Your Name**
  - LinkedIn: [Ehizojie Azamegbe](https://www.linkedin.com/in/ehizojie-azamegbe-082ba52b9/)
  - Twitter: [devycrafter](https://x.com/devycrafter)

---

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white)

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)

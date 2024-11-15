# PDF Co-Viewer

A **real-time PDF viewer** designed for remote presentations and teaching, allowing synchronized navigation across multiple users. This project is built with the **MERN stack** (MongoDB, Express, React, Node.js) and uses **Socket.io** for real-time communication. It enables an admin (e.g., a presenter or teacher) to control the PDF view for all users connected to the session.

## Features

- **Real-Time Synchronization**: The current PDF page is synchronized across all users in a session.
- **Admin Control**: Only the admin user can navigate the PDF, and changes are reflected on all viewers' screens.
- **Multiple Users**: Connect multiple users to the same session for a shared viewing experience.

## Tech Stack

- **Frontend**: React with Vite
- **Backend**: Node.js with Express and MongoDB for session management
- **Real-Time Communication**: Socket.io for page synchronization

## Project Structure

project-root/
├── backend/ # Backend code
│ ├── controllers/ # Controllers for API logic
│ ├── models/ # Mongoose models
│ ├── routes/ # Express routes
│ ├── socket/ # Socket.io configuration
│ ├── server.js # Express and Socket.io server
│ └── .env # Environment variables (not included in repo)
├── frontend/ # Frontend code
│ ├── src/
│ │ ├── components/ # React components
│ │ ├── hooks/ # Custom React hooks
│ │ ├── main.jsx # React entry point
│ └── vite.config.js # Vite configuration
└── README.md # Project documentation

## Getting Started

### Prerequisites

- **Node.js** and **npm** installed on your system.
- **MongoDB**: Either installed locally or use a cloud instance (e.g., MongoDB Atlas).

### Installation

1.  **Clone the Repository**:

    git clone https://github.com/your-username/pdf-co-viewer.git
    cd pdf-co-viewer

2.  **Backend Setup**:

    - Navigate to the backend directory:

      cd backend

    - Install dependencies:

      npm install

    - Create a `.env` file in the `backend` folder and add your MongoDB URI:

      MONGO_URI=<your_mongodb_uri>

    - Start the backend server:

           npm start

      `

    The backend should now be running on `http://localhost:5000`.

3.  **Frontend Setup**:

    - Open a new terminal window and navigate to the frontend directory:

      cd frontend

    - Install dependencies:

      npm install

    - Start the Vite development server:

      npm run dev

    The frontend should now be running on `http://localhost:3000`.

### Usage

1. **Open the Frontend**:

   - Go to `http://localhost:3000` in your browser to access the PDF viewer interface.

2. **Simulate Multiple Users**:

   - Open multiple tabs or use different devices with the same URL (`http://localhost:3000`).
   - One user should act as the **admin** (configured in `src/components/App.jsx` with `isAdmin` set to `true`).
   - When the admin navigates the PDF, all other connected users' views will automatically synchronize to the same page.

3. **Backend Logs**:
   - The backend terminal will display logs for user connections and page updates.

### Example Environment Variables

In the `backend/.env` file, add:

MONGO_URI=mongodb://localhost:27017/pdf_viewer_db
PORT=5000

### API Endpoints

| Method | Endpoint                   | Description                   |
| ------ | -------------------------- | ----------------------------- |
| GET    | `/api/sessions/:sessionId` | Fetches current session state |
| POST   | `/api/sessions`            | Creates a new session         |

### Troubleshooting

- **MongoDB Connection**: Ensure MongoDB is running and the URI in `.env` is correct.
- **Socket.io Errors**: Check that both frontend and backend are running, and that the Socket.io client script is loading without CORS issues.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License.

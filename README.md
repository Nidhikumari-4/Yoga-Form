# **Yoga-Form**

### This repository contains the source code for the Yoga Form application, which consists of both frontend and backend components. The backend is deployed on **Render**, while the app is hosted on **Vercel**.

## **Links**

Frontend GitHub: https://github.com/Nidhikumari-4/Yoga-Form \
Backend GitHub: https://github.com/Nidhikumari-4/Yoga-Form-Backend \
Hosted App: https://yoga-form-five.vercel.app/

## **ER Diagram**

<img width="3192" alt="er-diagram" src="https://github.com/Nidhikumari-4/Yoga-Form-Backend/assets/77065920/87a1e8ba-65fe-4efd-9a83-6727e805280c">

## Tools and Technologies

Frontend: React.js and Tailwind CSS \
Backend: Express and MongoDB

## Libraries and Packages Used

### Frontend

- React js
- Tailwind Css
- react-hot-toast
- react-modal
- react-hook-form
- axios

### Backend

- Express
- Mongoose
- dotenv
- cors
- nodemon

```
Yoga-Form-Frontend
├── src/
│ ├── index.css ------------------------ # Styling files, including Tailwind CSS setup
│ ├── App.js --------------------------- # Root component
│ └── index.js ------------------------- # Entry point
└── README.md  ------------------------- # Frontend README file
```

```
Yoga-Form-Backend
├── controllers/ ----------------------- # Controllers handling business logic
├── models/ ---------------------------- # MongoDB schema models
├── routes/ ---------------------------- # Backend API routes
├── db/ -------------------------------- # Database functions
├── index.js --------------------------- # Express app setup
└── README.md -------------------------- # Backend README file
```

## **Approach**

### Frontend Development:

- Utilized React.js as the primary framework for building the frontend of the Yoga Form application.
- Employed Tailwind CSS for efficient and responsive styling of the form and its components, ensuring a visually appealing user interface.

### Form Validation:

- Implemented form validation using react-hook-form to ensure accurate and valid user inputs.
- Applied validation rules for fields such as name, email, age, phone, batch, and month to enhance data integrity and user experience.

### Modal Design:

- Utilized react-modal to create intuitive and visually appealing modal interfaces, enhancing user interaction for additional information or actions.

### User Feedback Implementation:

- Integrated react-hot-toast for providing real-time feedback to users, ensuring a smooth and informative experience while interacting with the Yoga Form.

### Backend API Integration:

- Used Axios to establish communication between the frontend and backend, enabling data exchange and fetching from the backend services.

### Backend Service with Express:

- Employed Express.js as the backend service to handle requests and responses, ensuring smooth data flow between the frontend and the database.

### Database Management with MongoDB and Mongoose:

- Connected MongoDB Atlas with Mongoose to manage collections and facilitate seamless data storage and retrieval.

### API Creation and Validation:

- Created an API endpoint that accepts data (name, email, age, phone, batch, month) from the request body.
- Validated the input data to ensure accuracy and consistency, particularly checking for age validation.

### Participant and Enrollment Management:

- Utilized the database to check for existing participants' information.
- If a participant doesn't exist, the API creates a new participant and then creates a new enrollment for that participant, maintaining relational integrity.
- Returns an appropriate response after participant creation and enrollment.

# UChose Insurance App

- This is a tech project to display front-end skills.

## About UChose Insurance

- This app allows a user to select an insurance product and then asks the user to fill out a short insurance form / application, after which the user's data is submitted to a placeholder API. After the user selects a package, the user will progress through the application and ultimately submit their data to a fake API.

# How to use and expand this project

### Data

- This app features two pieces of input data - the insurance product data, and the insurance application questions.

#### Insurance product data

- In `/data/insurance/insurance-packages.ts` the insurance packages the user can choose are defined as an array of JS Objects.

### Insurance application questions stream data

- "Stream" refers to the questionnaire.
- In `/data/insurance/question-stream/question-stream-data.ts` the questions that the user is asked (the stream) and the insurance packages are defined here and are consumed by the front-end.

### Front end components and UI

- Each question in the insurance application has a corresponding user interface component that best captures the info the user submits.

Below are these UI components and other important components used in this project:

1. **NavControls** - allows user to go forward, back or submit in the context of the insurance application
2. **Application summary** - summarizes the data the user inputted
3. **Email question** - captures and validates user's email,
4. **Numeric question** - captures and validates user's age
5. **Product selection** - captures the insurance package the user selected
6. **Radio choice** - captures the user's selection in a 1-answer, multiple-choice radio group
7. **Stage** - this is the parent component that manages when and how each question is displayed, and manages how the navigation controls are displayed.

## Tech Stack

- react
- material ui
- typescript
- axios
- react-number-format

## Setup

1. Clone repo
2. Run `npm i` to install dependencies
3. Run `npm run dev` to launch the app

## Using the app once it's running

1. When the app runs, the insurance questionnaire immediately loads.
2. Choose an insurance package
3. Answer the subsequent questions.
4. Hit the submit button to finish the application!
5. Amusez-vous!

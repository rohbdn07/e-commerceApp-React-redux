## Rbstore, an e-commerce website with Stripe payment.

#### Deploy at Heroku: https://rbstore-ecommerce.herokuapp.com/

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) with Typescript. This project is build up from scratch that means I started making this aplication from zero level.

Creating a e-commerce website with Stripe payment gateway (dev:mode). The online shopping website is for Buying and Selling products online within the network. Users can select, add, and/or delete the shopping items. After clicking 'Checkout' button, users are re-directed to stripe payment page where users can put their card credentials to buy the products. If not, users can cancel and return back to front-landing page with 'Back' button.

Use of 3rd party API (fakestoreapi.com) to generate shopping items.

Moreover, Redux has been in use for state management along with some uses cases of React-Query. NodeJs has been in use to handle API requests for Stripe payment and Login/Register features along with JWT authentication. For styling, SCSS, Bootstrap, Material UI has been in use. In order to give real kind of feeling to users, Stripe payment system has been in use, where user can checkout and use demo credit card to pay for the selected items.

#### Note:

This project is on-going project, that means I add new features in order to practice and develop my skills. Currently, I am working on JWT authentication section in order to provide Login and Register features to users.

To run this project, see the commands below:

#### Front-page desktop screenshot:

![e-commerce-app-desktop-image](https://user-images.githubusercontent.com/57314666/130216547-9ad33103-1d65-44ac-a39b-ffd3f01a3f12.png)

#### Category-section page screenshot:

![category-section01](https://user-images.githubusercontent.com/57314666/140048316-7317fd41-e904-4fa7-a915-b3f60e28fea7.png)

#### Checkout-payment page with Stripe screenshot:

![checkout-payment](https://user-images.githubusercontent.com/57314666/140050542-ac5c1da0-9229-4367-9c65-025f6f93519e.png)

#### Front-page mobile screenshot:

![e-commerce-website-mobile](https://user-images.githubusercontent.com/57314666/130216684-61a5dede-9265-4e5c-913f-d2437a283afb.png)

### Tech Stack

-  MERN STACK
-  React Js, Typescript, Redux, React-Query
-  SCSS, Bootstrap, Material-UI
-  Node Js, Express Js
-  MongoDB
-  Stripe payment gateway

### Installation

First, clone this repo. Then Go to the root of the project folder. Then run following command.

Note: Use your OWN api keys and Stripe secret keys in order to enjoy full features of this application.

### `npm run dev`

This command will run both (Backend and frontend services). For more info, check Package.json.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

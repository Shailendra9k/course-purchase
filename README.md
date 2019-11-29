This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Course Purchase App

The purpose of this app is customer can select a variety of courses with different prices and see total price after adding to cart. 

### Features of App
- Customer can select as many as courses having different prices
- Prices will be raised accordingly in total
- On double clicking a particular course customer can unselect that course which  don't want to buy
- Can see very in CSS effect that makes more beautiful interface
- Customer can even verify either course is selected or unselected with color vairation as on active and inactive state course colors are different

### Technologies Used
- HTML
- CSSS
- JAVASCRIPT
- ES6
- REACT
- NODE
- Git&GitHub

### Structure of project

On using `create-react-app course-purchase` command all dependencies and main folders for this project will be installed and created. 

Main root component is   App.js and all other components are created as per need in separate foleder in src.

### In App.js Component

An array `Courses ` is created with 4 set of objects having two properties `name and price` with their values.

Then a `<Coursesales />` component which we need here is created and called.

### In Coursesales component
 
 The purpose of this component is to access all the courses from App.js using map method and gives the total price of the courses on they are selected.
 
 First, state is initiated for total value in the constructor then it is updated using a method with `this.setState`.
 
 I found need of one more component so created `<Course />` and is called here with some properties.
 
 Finally, total price and slected courses which is mapped using `map` method is returned.
 
### In Course Component
I put initial state of the course to inactive so that user find it user-friendly for selection as once, they select color changes for the selected courses.

Then for the selection of particular course I created method `clicker` so once user click on course it gets selected and on double clicking on same course it get unselected and state for the course from inactive to active also get updated here.

So, this component is responsible for most important logic supporting its parent component.





In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

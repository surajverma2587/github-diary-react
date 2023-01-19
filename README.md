# GitHub Diary Application

## User Story

As a user I should be able save my favourite GitHub repositories

## Acceptance Criteria

- User should be able to search for repositories with a valid GitHub username `https://api.github.com/users/{username}/repos`
- Search form should have validation where github username is required else an error message should be displayed `"Please enter a valid username."`
- Repositories should be presented as many cards keeping in mind responsive layouts
- Each repository must be presented as a card with the following information:
  - Repo name
  - Repo url
  - Description
- If the number of repositories returned from the API is 0 then the user should be presented with an alert `"No repositories found."`
- Each repo card should contain a button `"Add to favourites"`
- When user clicks on "Add to favourites" button the repository information is stored in local storage
- User should be able to navigate using a nav bar
- When the user navigates to the favourites page if there are no favourites then the a message should be displayed `"You have no repositories stored in your favourites."`
- When the user clicks on the delete button in the favourites repository card that particular repository should be removed from local storage
- User must also be presented with a button to clear all favourites

## Pages

- Home page must contain a banner and a search form along with the list of repositories
- Favourites page must contain a list of repositories

## Technical Criteria

- Use function based components
- Use the react hook `useState` and `useEffect`
- Use `axios`
- Use `localstorage`
- Use React Bootstrap component library
- Ensure that the code follows semantic HTML structure
- Ensure that the code is well structured in to re-useable components
- Ensure the codebase follows the React files and folder structure
- Deploy the react application using [GitHub pages](https://github.com/gitname/react-gh-pages)

## Additional Resources

- You can use [Bootstrap 5](https://getbootstrap.com/docs/5.3/getting-started/introduction/) as your CSS framework
- You can use [React Bootstrap](https://react-bootstrap.github.io/getting-started/introduction) as your component library
- You can choose a colour palette from [coolors](https://coolors.co/)
- You can import [font-awesome icons](https://fontawesome.com/icons) using the [CDN](https://cdnjs.com/libraries/font-awesome)
- Axios library [axios](https://www.npmjs.com/package/axios)

## Wireframe Guide

Please use this high level wireframe as a guide for your portfolio and you are free to choose your own colours and/or layout if needed.

TODO

## Example Application

TODO

# GAN Bakery

### Follow these steps to run the project on your local machine

1. Clone this github repo
2. cd gan-bakery
3. run the command `npm ci`
4. After successful installation of all the modules, run the command `npm run start`
5. This will open the project in your browser

## About the project

### Packages used

1. State management
    - react-redux
    - reduxjs/toolkit
2. Routing
    - react-router-dom v6
3. Styling
    - tailwindcss

### Folder Structure

The src folder contains all the source code

1. assets - contains all the static icons and images
2. components - contains all the re-usable React components
    - UI - contains all the UI related components like Buttons, Divider etc.
    - Sections - contains different section that compose a view
    - Other directories are synonymous to the entities being used in the project
3. store - contains all the redux store related files
    - slices - contains the slices used to manage state
4. types - contains all the types pertaining to different entities
    - componentPropTypes - contains the string prop type enums of the components
5. utils - contains all utility methods
6. views - contains all the views that one-to-one mapped to routes of the project defined in routes.js

### Views
1. Homepage

![image](https://github.com/Saatvik07/GAN_Bakery/assets/55968934/0b2df62c-721b-415c-bc3d-3436ae22c35b)

![image](https://github.com/Saatvik07/GAN_Bakery/assets/55968934/c69029ce-f306-4508-aa2a-7671a9e5bf18)

2. Cart

![image](https://github.com/Saatvik07/GAN_Bakery/assets/55968934/16e3edd7-3877-4225-a483-d44036e6eb32)

3. Not Found 

![image](https://github.com/Saatvik07/GAN_Bakery/assets/55968934/cfd8ccb8-512a-49ce-bc03-7675f908028f)


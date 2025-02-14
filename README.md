# namaste-react-2
#  1. Created folder and opened it in VS - namaste-react2
2. Created a repository in github and then through VS cloned it through https and pointed it to the folder created in step 1
3. Changed branch - git branch -M main
5. To add the files or stage - <git add .>
6. To commit - git commit -m "<commit msg>"
7. To push - <git push>
8. creating package -: 
9. command - npm init
10. then follow the steps as is said.
11. need to install a bundler - we will use 'parcel' - command - npm install -D parcel --> This means, we install as a dev dependency. Needed for development.
12. node_modules got generated
13. Created a .gitignore file, and added /node_modules in to it. This will ignore while commiting code.
14. Must commit package and package-lock json. Only these are needed to recreate the entire node_modules.
15. Install react and react-dom - npm install react and npm install react-dom
16. Need to add type=module in <script type=module src="./App.js"></script> // because react import is not a normal file, its a module from the node_modules.
16. Now we can run command - npx parcel index.html --> This will run the server with source file index.html and upload the code, give a dev build.
17. we can put this script in package json -:
"scripts": {
    "start": "parcel index.html", // This will give a dev build.
    "build": "parcel build index.html",
    "test": "jest"
  },
18. To start the project, command - npm run start OR npm start
19. Episode 3, 12th minute, the project starts from scratch.
20. JSX / react element - This is kind of a convention of clubing html and js. Its a HTML or XML like syntax. This is not writting HTML in js
21. stopped at 1:04:17 of EP3
22. component - class based and functional component
23. functional component is nothing but a normal JS fucntional which returns some JSX
24. to render a func component, we enclose with in </> eg. <Heading/>
25. component composition
26. with in {} , we can code any JS expression with in component.
27. JSx sanitizes the data sent through the js expression code with in {}. So the malicious data injection gets prevented.
28. ## EP-4 -:
29. resturant structure
30. Props - just arguments to a function/component
31. passing props and using it
32. Config driven UI-> controlling the UI of the web based on the config/data. A ques on the system design interview.
33. copied the swiggy API for restaurnat list and put the array of object of restaurant list here -:
https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.989770900513944&lng=77.694921495487&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
34. Now we use JS map() to iterate over the array of objects. -- map(), filter(), reduce() - read from here - https://www.youtube.com/watch?v=zdp0zrpKzIE
35. Always pass a key to the map(). WHY -> Coz this helps react to uniquely identify the Array list items, so that in case of any updation, it doesn't have to re-render all the list items. This drastically increases the performance of the fo the project.
ALSO -> React doesnt recommend to use indexes as key. This is anti-parten.
36. ## EP-5 -:
37. file and folder structure
38. keeping components in to components folder.
39. Exporting the component and importing in the file where we intend to use it.
40. Keep the constants (eg. urls or CDNs) in separate file. Like wise for data.
41. 2 types of export - default and named export. One file can have only one default export. In case of multiple, use named export.
42. Named export is nothing but adding the keyword "export" in front of it.
43. React hooks - these are normal JS function or utility functions given by react
44. 2 most importantly used hooks -:
45. useState and useEffect
45. useState = When ever a state variable changes/updates, react re-renders the component.
46. In EP5 - at 2:00Hr, there is detailed explanation of the 2 arguments of useState hook.
47. This episode covers - reconcilliation algorithm, diff algorithm, react fibre, virtual DOM concepts.
48. ## EP-6 -:
49. Monolith architecture
50. Micro services. Separation of concerns or Single responsibility principle.
51. useEffect hook - 2 argument - 1. callback function, dependency array. UE call back happens only after the component is rendered.
52. In useState, we declare the initial variable with 'const', but we change it through the set() ? Because, when the value is changed,
    react re-renders the entire component, hence the varriable is newly created. Its not changing it, rather creating a new variable,
    hence it works. All this is handled by react iteself. ***IMP***
53. Search functionality - use diff state variable to render the search results to populate instead of using the initial state variable.
54. login and logout button using state variable.
55. ## EP-7 -:
56. Be aware of some important pointers of useEffect and useState hooks.
57. Routers 
58. RAFCE and press enter in VS code, then it would create a boiler plate component for us. This is a shortcut.
59. In react19, we need to use react-router library
60. Using createBrowserRouter to create routes and then using routerProvider to provide configs to the routes.
61. errorElement config in createBrowserRouter.
62. useRouterError hook usage - Used to get the error information.
63. Having the router page come with header and footer. This is possible using {outlet} from react-router
64. Using link from react-router to navigate to diff routes or pages with out page refresh.
65. This at point num 64, we read about the concept of Single Page Application.
66. 2 types of routing in webApps - 1> Client side routing, 2> Server side routing.
1> Client-side routing - We make a call to a new html from source html file. That will come and load in the page. This doen't
make any network call, since all the components are loaded during the initial page load. On link call, just that component comes
and sit over here.
2> Server side routing - Here we make a network call, fetch the data and put on those data in to this page. So the entire page reloads.
67. Hence Single page Application is nothing but, client side routing.
68. Created RestaurantMenu component - A page which shows the menu of the restaurant selected. This will call the API and have the resid passed 
    to it. Used useEffect hook for API call, useState hook to iterate over the menu, useParam hook to fetch the parameter passed through url 
    eg: resID from App js file. Took the API and put it in constant js. fetching it through MENU_API const.
69. In Body component, used Link To from react-router-dom to link the restaurant card to the respective menu page uplon clicking it and passing the restaurant id through param.
70. ## EP - 8 -:
71. class component - In class based component-import React. use the keyword "class", give a name to component, this extends from react component so react know its a component.It has a render(), with in this we have the same return which returns a piece of JSX. At the end we export it.
72. creating a local state variable in class based component.
73. state variables are created with in the constructor.
74. Updating state variable is done through this.setState({}). It takes multiple object, where we can update the respective state variables. 
75. calling a class component with in a class component.
76. componentDidMount() and life cycle of class component.
****Below is the lifecycle -: ****
77. Hirarchy of calls in class component -:
    constructor called  ---> render get called
78. if componentDidMount() is there, then it becomes -:
    constructor called  ---> render gets called ---> componentDidmount()
79. In case when a class component is called with in a class component then -:
--  Parent constructor --> parent render --> child constructor --> child render --> child componentDidMount --> Parent componentDidMount.
80. **Inside componentDidMount** - we make the API call. Similarly how we do API call inside the useEffect() hook incase of functional component. So why we do it in DidMount -- because, we first load the component, and once it is loaded succesfully we make the API call and fetch the data.
81. React life cycle method diagram website for udnerstanding -- [click me](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
82. ###lifecycle flow in case of **multiple child** component with in a component -:###
83. parent constructor - parent render --> Child(1) constructor - child(1) render --> child(n) constructor - child(n) render
    --> parent componentDidMount -->child(1) componentDidMount -->child(n) componentDidMount
84. constructor + render = collaboratively is termed as the render phase. --> **This is very fast**
85. componentDidMount = is termed as the commit phase. --> **This is expensive and takes time.Just like API calls**
86. Hence first react does the render phase and then the commit phase. **This is the reason, React works so fast.**
87. Doing an API call from componentDidMount from the class component.
88. create a local state variable with in class component. Updating the state variable using this.setState. Destructured the state variable data and rendered it.
89. **COMPONENT life cycle Methods**
90. /***
**A.Mounting cycle** -:
-- constructor gets called
-- Render() gets called
-- [Here our initial data loads]
-- Component Did Mount gets called
-- [API call happens here]
-- [this.setState is called here and state varaible is updated]
**B.Update cycle**
-- render() called with API data and the HTML loads
-- Then it calls componentDidUpdate()
**C.Unmount cycle**
-- componentWillUnmount()
/
91. componentWillUnmount() - This will get called, when you leave the current page/component. *For example*, lets call a setInterval() in which we pass function to be called after each second. Then it will be recursive. We also need to clear it, so that clearInterval() for the same, we shall write in the componentWillUnmount().
92. **IMP logic for UseEffect hook** --> In case of functional component, if we need to call clearInterval for the setInterval(), we call it with in return of useEffect hook. Code eg:
->  useEffect( () => {
    const timer = setInterval(()=> {
        console.log("call recursively");
    }, 1000);

    return () => {
        console.log("return from useEffect()")
        clearInterval(timer);
    }
})
93. ## EP - 9 - Optimizing the app
94. Creating a **custom hook** - created useRestaurantMenu() custom hook. We just took the code from RestaurantMenu.js component file
- The useState code and API fetching code, and useEffect from RestaurantMenu js file and created the hook. Exported it and imported the same in RestaurantMenu.js
95. Created a custom hook to check the users online/offline status and imported it in body component.
96. It is not mandate or syntax definition that we need to write 'use' in front of a hook. But this is a highly recommended way from react docs to do so. This is a indutry convention which the library suggests.
97. **Breaking down the code in to smaller pieces** (Below are various names for the same)-:
- code chunking
- code splitting
- Dynamic bundling
- Lazy loading
- On demand loading
- Dynamic import
98. For these, we need to import "lazy" and a named component "Suspense" from react.
99. with help of lazy - our component will only get loaded when needed and not with the page load.
100. We can also pass a fallback to <Suspense> component. Till our grocery page loads, it will show what ever we pass in the fallback. We can pass any component, lets say ever shimmerUI in to it. Because, fallback takes a jsx.
101. ## EP - 10 - Using CSS in to our site
102. - Styled components is one which can be used -> Search for the below UI frameworks/libraries-:
103. -styled-components.com
104. chakra UI
105. Bootstrap
106. Tailwind
107. ant design
107. **Tailwind.css** -: 
108. Added tailwind to our application, but skipped the episode as need to learn the main concepts first.
109. ## EP - 11 - Data is the new oil
110. **HOC - Higher order component** - Its a component, that takes a component and returns a component. --> It takes as input a component, enhances
its features by adding some more in to it and returns it. It basically works as an enhancer.
111. HOC are **pure component**, meaning we are not changing the authenticity of the component/function. We are only adding extra feature, and not toucing the exisiting functionality of the component.
112. Created a HOC "withLocalityLabel" in the RestaurantCard js component and used it in Body js.
113. Further creating the catrgories of Menu in restaurant, by filtering from the API data of restaurant. Like eg: recommended, beverages, tandoor items etc.
     and this would have the related items beneth it.
114. --Lifting state up 1:10 time of the episode video
115. -- **controlled and un-controlled components.** --> When the component is having its own state variable and its parent doesnt have control  over it then, its called an un-controlled component. So, lets now take that state up to its parent component(from where its called) and pass
        the state through props and accordingly do changes on the child from parent, then the child component is called as a controlled component.
        Since, its getting controlled by its parent.
        Also, the process of taking the state out of child component to its parent component and passing it through props is a process known as **lifting the state up**
116. **Concept of lifting state up** done inside RestaurantMenu component (parent) and RestaurantCategory component (child) -:
     Instead of having its own state in the child,we lifted it to be in the parent. This made the child a controlled component.
     Next,we wanted to controll from parent, so we passed the SetShowIndex as a function through props to children with parameter as index.
     Then inside the children,upon clicking the category head, we simply called the function. This induces the current index. This is how we
     should explain the lifting state up and controlled and uncontrolled component.
117. **React context** -- Lets think of a data which we need through out the application. Eg: Logged in user info, theme - like light/dark theme
       userContext, context provider, userContext.consumer for class based.
118. ### Creation of context -:
     Create a context using **createContext** which comes from react library (import it). This we did in a new file - **UserContext.js**
119. ### Reading/accessing the context -:
     Access/read the context using **useContext hook**, by importing it from react lib. Just used it in header. Can be used in any files.
120. **Accesing the context inside class based component** - in About us.js - Here we dont have hooks, hence we need to use a component - 
     **<UserContext.Consumer>** our context data </UserContext.Consumer> --> When ever a context is created, react automatically creates a .consumer for it. It uses a call back function, which passes the data. EG. {(data)=>console.log(data)}
121. ### Modifying the context -:
     To update, we need provider- <UserContext.provider> </UserContext.provider>
     We need to wrap the component with in the UseContext.provider and pass the updated context in the value. Check in App.js file
122. ### Updating the context value -:
     To update the context value on the fly - We passed the setUserName state function from the App.js through context.provider. We caught it
     in the Body js. Now useing SetUserName, we updated the context value.


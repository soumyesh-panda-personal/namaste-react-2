# namaste-react-2
#  1. Created folder and opened it in VS - namaste-react2
2. Created a repository in github and then through VS cloned it through https and pointed it to the folder created in step 1
3. Changed branch - git branch -M main
5. To add the files or stage - git add .
6. To commit - git commit -m "<commit msg>"
7. To push - git push
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

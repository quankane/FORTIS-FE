 # How to create inital base for Fortis Fe
 1. First, use CMD and press the command 
 ```
 bash npm create vite@latest  
 ``` 
 2. Choose [x] y and then choose React. Finally choose React + SWC
 3. To download dependencies (on runtime)
 ```
 npm install aos axios formik lodash react react-dom react-router-dom yup
 ```
 4. Then, download dependencies (use when dev and build)
 ```
 npm install -D @eslint/js @types/react @types/react-dom @vitejs/plugin-react-swc autoprefixer eslint eslint-plugin-react-hooks eslint-plugin-react-refresh globals postcss tailwindcss@4.1.13 vite

 ```
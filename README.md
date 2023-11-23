# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# About the project

This project shows about the implementation of voice recognition feature. It is a project that uses react-speech-recognition library to implement voice recognition feature.

# How does the project work
First, it checks whether you are online or not. 

If you are online, it will show the `Start Listening` button.

If you are offline, you cannot use any feature and display a message that you are offline.

If you click the `Start Listening` button, it will start listening to your voice and display the word you said in the screen.

If you click the `Stop Listening` button, it will stop listening to your voice.

If you click the `Reset` button, it will clear the text in the screen.

If you click the `Copy` button, it will copy the text in the screen.


# How to get the project
You can get the project by running the command below:
```bash
git clone https://github.com/remon343/Voice-Recognition.git
```

# How to run the project
First, you need to install the dependencies by running the command below:
```bash 
npm install
```
Then, you can run the project by running the command below:
```bash
npm run dev
```
# How to use the project
You can use the project by clicking the `Start Listening` button and then you can say some Nepali word. The project will show the word you said in the screen. You can show the words you said in the screen. You can also clear the text by clicking the `Reset` button. You can also stop the voice recognition feature by clicking the `Stop Listening` button. You can also copy the text by clicking the `Copy` button.

# How to contribute to the project
You can contribute to the project by forking the project and then creating a pull request. You can also create an issue if you find any bug in the project.


# License : react-speech-recognition
react-speech-recognition is licensed under the [MIT License]

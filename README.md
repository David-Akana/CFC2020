# Natural Disaster Informant and Assistant (N.D.I.A)

[![License](https://img.shields.io/badge/License-Apache2-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0) [![N.D.I.A Website](https://img.shields.io/badge/View-Website-blue)](https://ndia.eu-gb.mybluemix.net/ndia/)

GitHub repository for Project N.D.I.A (Natural Disaster Informant and Assistant), our proposed solution for the Call for Code 2020 Competition on halting the effects of Climate Change.

## Contents

1. [Short description](#short-description)
1. [Demo video](#demo-video)
1. [The architecture](#the-architecture)
1. [Long description](#long-description)
1. [Project roadmap](#project-roadmap)
1. [Getting started](#getting-started)
1. [Running the tests](#running-the-tests)
1. [Live demo](#live-demo)
1. [Built with](#built-with)
1. [Contributing](#contributing)
1. [Authors](#authors)
1. [License](#license)
1. [Acknowledgments](#acknowledgments)

## Short description

### The Ongoing Natural Disaster Conundrum

Natural disasters continue to unfortunately birth major issues to humans, arguably more than ever in this current time. According to [ourworldindata.org](https://ourworldindata.org/natural-disasters), approximately
60,000 people are casualties of these catastrophes and the cost of damage for just 2019 was estimated to fall in the region of an astonishing $150 billion dollars. It is evident now more than ever that finding avenues to address this issue is paramount, and what better way than take advantage of the tools technology has given us to not just mitigate, but also reverse the problems natural disasters have caused.

### How can technology help?

Curbing the effects of natural disasters can be instigated by taking advantage of the field of Artificial Intelligence to predict the possibilities of regions (especially high-risk ones) succombing to these disasters at any moment. It is pivotal to have a head-start when battling these potentially calamitous issues but also be able to provide adequate resources to people if faced with them. Therefore, it is also imperative to provide educational help and the ability to locate assistance with relative ease in the event of an unnoticed disaster taking place.

### The idea

A Natural Disaster Informant and Assistant (N.D.I.A) possessing attributes to help people in combating the dangers of disasters is needed. It should keep users aware of potential disaster occurences based on model predictions and provide immediate information on disasters happening around the globe.  Educational support is also key; safety tips and precautioinary messages to improve preparedness for disasters. Finally, a variety of tools should be given for users to get access to external assistance if a natural disaster transpires.

## Demo video

[![Watch the video](images/video-thumbnail.png)](https://youtu.be/TOHYXlxarAY)

## The architecture

### Native Application Architecture

![N.D.I.A Native Application](images/app-architecture.jpg)

### Web Platform Architecture

![N.D.I.A Web Platform](images/web-platform-architecture.jpg)

1. The user launches the web platform or mobile app and has access to information on natural disasters happening not just in the user's country, but also all around the world using the News Now Platform and Twitter's Search API.
2. The user can ask questions to Watson Assistant and get answers to natural disaster planning and other recovery-related questions.
3. The user can view natural disaster predictions over the next 21 days based from machine learning models that have been trained on previous natural disaster occurences so as to get a head-start in preparations.
4. The user can seek immediate help by sending an e-mail for help or calling the provided natural disaster helplines in the contact center.
5. The user obtains geolocation data of locations which have been affected by natural disasters reported from other users so as to avoid these places. 
6. The user is also able to plot evacuation routes to places of their choice and even locate the nearest hospitals using Google Maps Platform.
7. On the website, users can subscribe to get e-mails on natural disasters as they are reported from other users.

## Long description

[More detail is available here](DESCRIPTION.md)

## Project roadmap

![Roadmap](images/ndia-roadmap.jpg)

## Getting started

These instructions will get you a copy of the React Native application up and running on your local machine for development and testing purposes

### Prerequisites

Before getting started, you'll need to have the following;

* NodeJS - You can get the latest version of Node.js [here](https://nodejs.org/en/)
* Expo - Great for building react native applications. Once you've gotten NodeJS, simply open your command line tool and enter

```bash
npm install expo-cli --global
```
* Google Maps Platform Account - Google provides very helpful APIs for projects involving maps. The project made use of Google's Geocoding, Places, Directions and Maps for JavaSript API. To create an account and be able to gain access to these APIs, [start here](https://cloud.google.com/maps-platform).

* Twitter Developers Account - To get access to Twitter's Search API for getting tweets, register for a Twitter Developer Account and get your API credentials. You can find out more [here](https://developer.twitter.com/en/docs/tweets/search/api-reference/get-search-tweets).

## Running the tests

Before running the project, the dependencies used need to be installed first. Simply go to the application frontend directory on your command line tool and enter

```bash
npm install
```
After some time, you will be indicated that all dependencies have been installed. Ensure that all versions of the dependencies are compatible with Expo.

Then, still on the application frontend directory, run the project by entering

```bash
npm start
```
The project is going to build on your machine's local host and can be viewed on both iOS and Android devices by simply following the instructions given on the command line.

For more information on getting started with Expo, you can visit [their website](https://expo.io/).

## Live demo

You can find a running system of the web platform to test at [ndia.eu-gb.mybluemix.net/ndia/](https://ndia.eu-gb.mybluemix.net/ndia/).

For a live demo of the native application, download Expo on your mobile phone then open [expo.io/@daveeyd/project-ndia](https://expo.io/@daveeyd/project-ndia) on your phone browser. The easiest option is the "Open project using Expo" option, which will automatically redirect you to the Expo app downloaded and show a preview of the app. Alternatively, you can scan the QR Code from the webpage on the Expo app to open the project.

Because of restrictions from Apple when running applications on iOS, the native application is only accessible on Android. However, it can still be run on iOS using your local machine server by following the [test intructions](#running-the-tests).

## Built with

* [Watson Assistant](https://www.ibm.com/cloud/watson-assistant/) - AI Platform used for the chatbot 
* [IBM Cloudant](https://cloud.ibm.com/catalog?search=cloudant#search_results) - The NoSQL database used
* [PostgreSQL](https://cloud.ibm.com/catalog/services/elephantsql) - The PostgreSQL database used
* [Google Maps Platform](https://developers.google.com/maps/documentation) - APIs used for building the maps feature
* [Twitter Search API](https://developer.twitter.com/en/docs/tweets/search/api-reference/get-search-tweets) - API used for getting tweets related to natural disasters
* [News Now](https://newsnow.co.uk/) - News Platform used for getting immediate natural disaster news from around the world

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Kenechi Ojukwu** - [kene111](https://github.com/kene111)
* **David Akana** - [David-Akana](https://github.com/David-Akana)

## License

This project is licensed under the Apache 2 License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* Based on [Billie Thompson's README template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2).

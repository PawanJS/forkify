<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![pull][pull-requests-shield]][pull-requests-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://forkify-by-pawanjs.netlify.app/">
    <img src="./src/img/logo.png" alt="Logo" width="100%" height="100%">
  </a>

  <h3 align="center">Forkify</h3>

  <p align="center">
    A recipe search application made with javascript.
    <br />
    <a href="#about-the-project"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://forkify-by-pawanjs.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/PawanJS/forkify/issues">Report Bug</a>
    ·
    <a href="https://github.com/PawanJS/forkify/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://forkify-by-pawanjs.netlify.app/)

Forkify is a vanilla JavaScript application that interacts with the Forkify API to fetch and display recipe food data. This app uses modern JavaScript tools, such as Webpack to bundle the modules, and Babel to convert ES6, ES7 and ES8 back to ES5. The user can search for a specific recipe, and save to a favorites list via local storage. The user can easily increase or decrease
servings as per his need and can view detailed directions.

### Built With

This app is built with pure vanilla JavaScript along with HTML and SCSS. It uses webpack as module bundler and NPM as package manager.

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [SCSS](https://sass-lang.com/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/javascript)
- [Webpack](https://webpack.js.org/)
- [NPM](https://www.npmjs.com/)

<!-- GETTING STARTED -->

## Getting Started

To get started with project just simply fork this repo or download locally on your System.

To get a local copy up and running follow these simple example steps.

### Prerequisites

Start with the latest version of NPM to avoid any errors:

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at [Forkify API_KEY](https://forkify-api.herokuapp.com/v2)
2. Clone the repo
   ```sh
   git clone https://github.com/PawanJS_/forkify.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```JS
   const KEY = 'ENTER YOUR API';
   ```

<!-- USAGE EXAMPLES -->

## Usage

1. The Forkify Recipe App allows users to search for recipes.

2. Users can view the recipe along with the cook time and also
   increase or decrease the amount of servings they need.

3. Bookmarked recipes are stored in local storage so no database was
   required for this application.

_For more examples, please refer to the [Documentation](https://forkify-api.herokuapp.com/v2)_

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/PawanJS/forkify/issues) for a list of proposed features (and known issues).

### Proposed features

1. Number of pages between the pagination buttons.

2. Ability to sort search results by duration or number of ingredients.

3. Ingredient validation in view, before submitting the form.

4. Improving recipe ingredient input: separate in multiple fields and allow more
   than 6 ingredients.

5. Shopping list feature: button on recipe to add ingredients to a list.

6. Weekly meal planning feature: assign recipes to the next 7 days and show
   on a weekly calendar.

7. Nutrition data on each ingredient from spoonacular API (https://
   spoonacular.com/food-api) and calculate total calories of recipe.

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Pawan JS - [Say Hie](https://www.pawanjs.xyz/contact)

Project Link: [https://github.com/PawanJS/forkify](https://github.com/PawanJS/forkify)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Img Shields](https://shields.io)
- [Netlify](https://www.netlify.com/)
- [Webpack](https://webpack.js.org/)
- [Google Fonts](https://fonts.google.com/)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/PawanJS/forkify?color=green&style=for-the-badge
[contributors-url]: https://github.com/PawanJS/forkify/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/PawanJS/forkify?style=for-the-badge
[forks-url]: https://github.com/PawanJS/forkify/network/members
[pull-requests-shield]: https://img.shields.io/github/issues-pr/PawanJS/forkify?style=for-the-badge
[pull-requests-url]: https://github.com/PawanJS/forkify/pulls
[issues-shield]: https://img.shields.io/bitbucket/issues/PawanJS/forkify?style=for-the-badge
[issues-url]: https://github.com/PawanJS/forkify/issues
[license-shield]: https://img.shields.io/apm/l/vim-mode?label=LICENSE&style=for-the-badge
[license-url]: https://github.com/PawanJS/forkify/blob/master/LICENSE.txt
[product-screenshot]: ./src/img/screenshot.jpg

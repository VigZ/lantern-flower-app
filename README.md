# Flowers Near You

This a simple application built with React.js, that allows a user to enter their location via a search bar (Or use their current location via a button click), then display info cards for the top 20 closest results. There is also a map with custom pins for these locations.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

1. First, you will want to clone this repo to your machine with a ```git clone```.
2. Next, ```cd``` into the root directory of this project and run ```npm install``` or
yarn if you prefer to install the dependencies.
3. You can boot up the application with ```npm run start``` to run the start script and start listening on an open port. (Default is 3000)

## Usage
  On the application page, simply enter in your location to the search bar, then press enter to submit your search. You also have the choice to use your browser's geolocate to via the button to the right of the search bar.

  When the api data is populated, the result items will appear on the right, while a map
  with custom flower pins will appear on the left. Clicking either the item, or the corresponding pin will open a new tab in your browser to the Yelp.com detail page for that resource.

## Known Bugs
I did notice a small graphical bug on one of the buttons that overlay the map component.
It was a great struggle styling and getting the component library to play nice with the rest of the page.

## Testing

Testing is performed with help from the Jest and react-test-renderer libraries.
Simply run the ```npm run test``` command to run the test suites.

### Feedback

I would greatly appreciate any and all feedback you may have. I have my own criticisms of the project, what I would do differently next time, libraries I'd like to try, etc. I'd also love to chat about this project. Thanks!

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thanks to all the forum posts that helped me navigate through arcane errors and
  overflowing divs.

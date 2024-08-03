# title
1.WeTravelers

## Description
2.This site was created for a project that integrates Html, Css and Javascript.
A site that shows photos I took around the holidays are displayed like a scrapbook.

**WeTravelers** is a website for sharing and viewing a gallery of photographs. The site is designed to offer an interactive experience, allowing users to explore various categories of photos taken with a Nikon camera. It also includes a contact form for communicating with the creators of the site.
## Project Structure :

- `index.html`: The HTML structure of the site's main page.
- `styles.css`: CSS stylesheet for page design and presentation.
- `script.js`: JavaScript script to manage form interactivity.

## Main features

- **Photo Gallery**: View a photo gallery divided into different categories.
- **Interactive Navigation**: Select categories via navigation buttons.
- **Contact Form**: Send messages with real-time validation and confirmation message.

1. Open `https://lmario98.github.io/UCD_Final_Project-Javascript/` in your browser to view the website.

### Code Structure

#### `index.html`

The HTML file defines the structure of the page. It includes elements such as the header, navigation, photo gallery, and contact form.

### `styles.css`
The CSS file defines the style of the page, ensuring that all elements have a consistent and attractive look.

### `script.js`
The JavaScript file handles the interactivity of the contact form, including validation and displaying a confirmation message.

#### JavaScript Interactivity Description

The JavaScript code provides several interactive features to the photos in the gallery and implements a simple slider to cycle through the images. Here is a detailed description of the main features:
1.Change title background color on click: When the element with the class .title is clicked, its background color changes to "blueviolet".
2.Adding and removing a "test" class when hovering over photos: For each photo with classes .photo0 to .photo12, a mouseover event is added that adds the test class when the mouse moves over the photo.
A mouseout event removes the test class when the mouse leaves the photo.
3.Photo slider: The showSlides function creates a slider that cycles through elements with the class london-photo0.
All elements with the class london-photo0 are hidden.
Only the current element is shown (cycles every 4 seconds).
4.Interaction with the contact form: A listener is added to the submit event of the contact form to handle field validation.
If the fields are not filled in or the email is invalid, a warning message is shown.
If everything is valid, the form is hidden and a confirmation message is shown.
A real-time validation is implemented for the email, which changes the border color of the email field to red if the email is invalid.

# Quack's Coin Divider

![Quack's Coin Divider Repsonsive Image](assets/images/responsive-screenshot.png)

## What is Quack's Coin Divider?

First let me explain what D&D is,
Dungeons & Dragons is a fantasy tabletop role-playing game originally designed by Gary Gygax and Dave Arneson.
It was first published in 1974 by Tactical Studies Rules, Inc. It has been published by Wizards of the Coast since 1997.
<br >
You can read the full Wikipedia information [Here](https://en.wikipedia.org/wiki/Dungeons_%26_Dragons)

## Why "Quack's Coin Divider"?

What's with the name? <br>
I like to believe that I'm an avid gamer, and in all the games a play, my username (Gamer's Tag) is always 'Quack', and I thought that because I'm creating the site that involves gaming... It only seemed fitting. Also because the application is designed to divide the entered coins, that's where the 'coin divider' part of the name comes in.

The Application can be viewed live by [clicking on this link!](https://quack842.github.io/quacks-coin-divider/)

# Table Of Contents

1. [User Experience (UX)](#user-experience-ux)
    * [Project Goals](#project-goals)
    * [User Goals](#user-goals)
    * [Color Scheme](#color-scheme)
    * [Typography](#typography)
    * [Wireframes](#wireframes)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
    * [Languages](#languages-used)
    * [Frameworkds, Libraries, Website and Programs](#frameworks-libraries-websites-and-programs-used)
4. [Testing](#testing)
    * [Responsive Test](#responsive-test)
    * [Validating The Code](#validating-the-code)
    * [Accessibility](#accessibility)
5. [Deployment](#deployment)
6. [Credits](#credits)
7. [End Product](#end-product)

# User Experience (UX)
[Back To Top](#quacks-coin-divider) <br>
[Back To Table Of Contents](#table-of-contents)

## Project Goals

In Dungeons and Dragons, there is typically a party of 4-6 players. In the game, there will be times where you/your party will fight a monster/creature and when the monster/creature is defeated, they drop loot (This is items that the monster/creature might have on them at the time). However, with a party of 4-6 players, it is difficult to split the coins amongst each other.

<b>For Example:</b>

Let's say you and your party (5 People) kills 4 mosters/creatures and the total coin loot is <b>1</b> <span style="color: #636464;">Platinum</span>, <b>9</b> <span style="color: #055160;">Electrum</span>, <b>15</b> <span style="color: #a47c04;">Gold</span>, <b>143</b> <span style="color: #adb5bd;">Silver</span> and <b>354</b> <span style="color: #664d03;">Copper</span>. It will be difficult to calculate the amount that needs to be split between the players as you can not split the Platinum into 10 gold pieces as you can not split a solid coin into pieces.
So this app will help split the total loot equally amongst each other and the remaining amount can be put in a kitty, or like how D&D work, the players can roll a die 20 for the undivided loot and the highest roll wins.

The piont of this application is 

## User Goals

* The user will be able to navigate easily throughout the site and understand all the contents that is provided.
* It will be clear to the user what they can do and how they can do it.
* The user will be able to add a player, change the name and delete the player.
* After the Player page, the user will be able to enter a value (The coins that was collected) into each of the input boxes that is provided.
* When the user click on 'Calculate' It will show the coins divided amongst the players if possible, otherwise it will show the remaining amount in the 'Undivided Amount' section.
* The user will have the option to roll a die 20 for each of the players that was entered in the beginning.
* The user will also be able to access the website from any device with access to a browser, i.e Smartphone, Tablet and/or a Computer and the website will be responsive to said device.

## Color Scheme

The Main Colors that was chosen for this applicaiton was based off of the colors you'd see on the [D&D Beyond](https://www.dndbeyond.com/) website. This website is a very popular website for dungeons and dragons geeks. The 
![Main Color 1](assets/images/main-color-1.png) ![Main Color 2](assets/images/main-color-2.png)

## Typography

The Main font that is used for this website is Roboto and the secondary font is Oswald. The font, sans-serif, is used as a back-up font for in case the user's browser does not support the main and secondary fonts. The website [Google Fonts](https://fonts.google.com/) was used to select and import the fonts.

The website [Font Awesome](https://fontawesome.com/) was used for the icons that can be seen in the footer and on the Contact Us page.

## Wireframes

The Application [Balsamiq](https://balsamiq.com/) was used to create the basic idea and layout for the My Perfect Holiday & Safari website as suggested by code institute.
<details>
    <summary>Simple Site Map</summary>
    
![Website Layout Main](assets/images/website-main-layout.png) <br>
This Sitemap was designed to get the basic layout and structure of the website.

</details>
<details>
    <summary>Home Page</summary>
    
![Website Layout Home](assets/images/website-layout-home.png) <br>
The Home Page is a simple page with information about the Travel Agency and what they can offer. In The original design, The About Page was included as an extra html page. It was suggested by my Mentor that it might be a better and cleaner idea to combine the Home and About Us page, I agreed to that suggestion and added the About Us Information below the Home Page Information.

</details>
<details>
    <summary>Activities Page</summary>
    
![Website Layout Activites](assets/images/website-layout-activities.png) <br>
On the Activities Page, there are 5 cards that are presented and will flip around and reveal the related information when the card is clicked/hovered over.

In the original design, the Hero image was displayed at the top of the Activities and Contact Us pages. My Mentor asked if the hero image was needed on the other pages as well and challenged me to find a way to show the relation to the pages without a hero image on every single page. I came to the conclusion that having a shadow below the navigation bar will show the relation between the pages without the need of the hero image on each page.

</details>
<details>
    <summary>Contact Us Page</summary>
    
![Website Layout Contact](assets/images/website-layout-contact.png) <br>
On the Contact Us Page, there are two panels, a left and a right panel. The left panel displays the Contact Form and the Right Panel Displays the Contact Information.
</details>
 <br>

# Features
[Back To Top](#my-perfect-holiday--safari) <br>
[Back To Table Of Contents](#table-of-contents)

## Existing Features
    
<details>
    <summary>Navigation Bar - All Pages</summary>
    When the user hover over the 3 different links, the links will grow. When the user click on the link, the page will change to the corresponding page and the link will change color to indicate that said page is currently active. 
   

https://user-images.githubusercontent.com/80696922/181263648-ad7f24d6-144b-4e07-b3e0-cf370d31a701.mp4


</details>     
<details>
    <summary>Back To Top Button - Home Page</summary>
    This button will appear when the user scroll past a certain point. When the user click on this button, they will be taking back to the top of the home page. 
   

https://user-images.githubusercontent.com/80696922/181264734-44541f18-3427-4914-a886-1ff5dceb5093.mp4


</details>     
<details>
    <summary>Flip Cards - Activities Page</summary>
    When the user hover/click on the card, the card will flip reavealing the corresponding details.
   

https://user-images.githubusercontent.com/80696922/181264782-4af08b0c-1cfe-4340-9229-5c505d463266.mp4


</details>    
<details>
    <summary>Interactive Map - Contact Page</summary>
    The user will be able to interact with the map (Just like how one would be able to interact with google maps) on the contact us page.
   

https://user-images.githubusercontent.com/80696922/181264856-7c22e2df-3e74-44ec-a12d-01e829fd64a6.mp4


</details>    
<details>
    <summary>Footer - All Pages</summary>
    The footer has a hover effect on the social links and when a user hover over the links, it will grow, rotate and change color.
   

https://user-images.githubusercontent.com/80696922/181264877-c4883a5d-d3ae-4f4c-a887-0a5177855889.mp4


</details>
<br>

# Technologies Used

[Back To Top](#my-perfect-holiday--safari) <br>
[Back To Table Of Contents](#table-of-contents)

## Languages Used
* [HTML5](https://en.wikipedia.org/wiki/HTML5) <br>
Used for providing the core structure of the website pages. <br>

* [CSS3](https://en.wikipedia.org/wiki/CSS#CSS_3) <br>
Used for styling the HTML documents <br>

* [JavaScript](https://en.wikipedia.org/wiki/JavaScript) <br>
Used to integrate specific features and create dynamic and interactive web content.

## Frameworks, Libraries, Websites and Programs Used
* [Google Fonts](https://fonts.google.com/) <br>
This Website was used to help choose the perfect fonts that will work together and to import the fonts onto the website. <br>

* [Font Awesome](https://fontawesome.com/) <br>
This website helped with using icons to give the website a betting user experience. <br>

* [GitPod](https://www.gitpod.io/) <br>
This website was used as a developers platform for writing code, committing the code and to push it to Github. <br>

* [Github](https://github.com/) <br>
This website is used to store code and make it possible for developers to commit and push code. This website also allows the Developer to share code with other developers.

* [Balsamiq](https://balsamiq.com/) <br>
This application was suggested by Code Institute to use for planning and creating a wireframe for the website. <br>

* [Reverso](https://www.reverso.net/spell-checker/english-spelling-grammar/) <br>
I used this website to help with the spelling and grammer.

* [Unsplash](https://unsplash.com/) <br>
All of the Images used on the website is from this website. <br>

* [Bootstrap](https://getbootstrap.com/) <br>
This website is a well known and used website by developers to help with coding and styling.

* [Box Shadow Generator](https://html-css-js.com/css/generator/box-shadow/) <br>
I used this website to help with creating a box shadow with certain specifications.

* [Maps Generator](https://www.maps.ie/create-google-map/) <br>
When creating the Contact Details, I used this website to help generate the location on a map and to create a iframe so the user can interact with the map.

* [Kruger Shalati Website](https://www.krugershalati.com/about-us/) <br>
The details for the Kruger Shalati Hotel was found under their About Us page on this website. <br>

* [Color Picker](https://coolors.co/) <br>
This website helped make it easier choosing complementary color scheme for the website. <br>

* [CSS Gradient](https://cssgradient.io/) <br>
Used this website to generate a gradient color into code that can be used in HTML5/CSS3. <br>

* [CorelDraw App](https://www.coreldraw.com/en/?link=wm) <br>
This App was used to reduse the size of the images.

# Testing

[Back To Top](#my-perfect-holiday--safari) <br>
[Back To Table Of Contents](#table-of-contents) <br>

## Responsive Test

I used [Responsive Design Checker](https://responsivedesignchecker.com/) to test if my website is responsive on all devices. Chrome DevTools was also used to check for responsiveness 

## Validating The Code
To validate the HTML on the website, I used [W3C Validator](https://validator.w3.org/#validate_by_input).
<details>
    <summary>
        Index Page Validator
    </summary>

![index.html Validator](assets/images/index-validator.png)
</details>

<details>
    <summary>
        Activities Page Validator
    </summary>

![activities.html Validator](assets/images/activities-validator.png)
</details>

<details>
    <summary>
        Contact Us Page Validator
    </summary>

![contact-us.html Validator](assets/images/contact-validator.png)
</details>
<br>

To validate the CSS code one the website, I used [Jigsaw Validator](https://jigsaw.w3.org/css-validator/#validate_by_input).
The CSS Page was tested and there were no errors

<details>
    <summary>
        Styles Page Validator
    </summary>

![contact-us.html Validator](assets/images/styles-validator.png)
</details>
<br>

## Accessibility

The Lighthouse feature on Chrome DevTools was used to test the Accessibility of the three pages:

<details>
    <summary>
        Home Page
    </summary>

![contact-us.html Validator](assets/images/index-lighthouse.png)
</details>

<details>
    <summary>
        Activities Page
    </summary>

![contact-us.html Validator](assets/images/activities-lighthouse.png)
</details>

<details>
    <summary>
        Contact Page
    </summary>

![contact-us.html Validator](assets/images/contact-lighthouse.png)
</details>
<br>

# Deployment

[Back To Top](#my-perfect-holiday--safari) <br>
[Back To Table Of Contents](#table-of-contents) <br>

[GitPod](https://gitpod.io/) Was used for the development of the website. <br>
[GitHub](https://github.com/) was used to Host and Deploy the the website.
The following steps was taking to Deploy the website via Github:

1. Creating the Repository
    * Log into Github.
    * Locate the template that was provided by Code Institute. [Template](https://github.com/Code-Institute-Org/gitpod-full-template)
    * Click on the "Use This Template" on the top of the Repository.
    * Enter the name that was chosen for the website.
    * Clicked on the "Create repository from Template" button.
2. Deploying the Website.
    * In the GitHub repository, click on the "Settings" Tab.
    * Navigate to the "Pages" subsection from the left hand pannel.
    * Select the "main" branch and select the "Save" button.
    * Now a link has been generated for the Live Website.
<br>

# Credits

[Back To Top](#my-perfect-holiday--safari) <br>
[Back To Table Of Contents](#table-of-contents) <br>

When creating the README File, multiple examples was used from other students to help with creating this README file.

### Suggested by my mentor
* [iKlevvv](https://github.com/iKelvvv/MS1)
* [Josswe26](https://github.com/josswe26/pura-vida-spa)

### Code Institute
* [Code Institute README](https://github.com/Code-Institute-Solutions/readme-template) 

### Fellow Slack Students
* [Dragon-fire-fly](https://github.com/dragon-fire-fly/venom/blob/main/README.md#testing)

## Codepen
CodePen is a social development environment for front-end designers and developers. Fellow Front-End Developers can use this website to help with certain code and features. <br>
The following code were used as inspiration with some of the features on the website: <br>

[Card Flip Feature](https://codepen.io/edeesims/pen/wvpYWW) <br>
[Back to top button on home page](https://codepen.io/JavaScriptJunkie/pen/pPRooV)

[Unsplash](https://unsplash.com/) <br>
All of the Images used on the website is from the website, Unsplash. <br>
<br>

# End Product

[Back To Top](#my-perfect-holiday--safari) <br>
[Back To Table Of Contents](#table-of-contents) <br>

<details>
<summary>
Navigation Bar
</summary>
 The Navigation bar is featured across all three pages and allows the user to navigate around the website using the Home, Activities and Contact Us links provided. The Navigation bar is identical on all three pages and this will allow for the user to navigate around with ease. The current page that is selected will be highlighted so the user will know on what page they currently are on. <br>

 ![Navigation Bar](assets/images/navbar-image.png)
</details>
<details>
<summary>
Landing Page
</summary>
 The landing page includes a hero image that is the first image the user will see when the website opens. On the image is a short text that briefly tells the user what to expect about the website. AS the user scrolls down, they will see more information about the Travel Agency and what to expect about the website. <br>

 ![Main Hero Sample](assets/images/main-hero-image.png)
</details>

<details>
<summary>
Activities Page
</summary>
On the Activities page, the user will be able to see what kind of activities are available to help build the perfect holiday. There are about 5 flip cards and each one will have a picture on the front of the card and when the user hovers over the card, it will flip around and reveal items related to the type of activities.
  <br>

 ![Activities Page](assets/images/activities-layout.png)
</details>

<details>
<summary>
Contact Us Page
</summary>
When the user go to the Contact Us Page, they will have two types of contact options. On the Left side of the page is a contact us Form that the user will be able to fill in and it will send the message to the Travel Agency. On The Right hand side of the website, there will be contact details that the user can use to contact the Travel Agency self. The map on the Contact Details shows the exact location and the map is interactive, and allows the user to zoom in, out and move it all about.
  <br>
<img src="assets/images/contact-us-form.png" width="325px"> <img src="assets/images/contact-us-details.png" width="300px">
</details>

<details>
<summary>
Footer
</summary>
The Footer has a simple design that shows the social tags. Each tag links to the relative social media page and all links will open in a new tab and keep the current website open as well, this will make it easy for the user to navigate and the user would not have to worry about navigating back to the website. There is also an on hover effect on the social media links, it will change color, rotate and grow bigger.
  <br>

  ![Footer](assets/images/footer.png)
</details>



# Designing for Recognition


## Installation

If you’d like to continue with this project, you’ll first need to fork the repository using this link:
```
https://github.com/fdnd-agency/designingforrecognition.git
```
or directly on the GitHub website [here](https://github.com/fdnd-agency/designingforrecognition/tree/development)


Once you have the repository on your computer, run the following command in the root folder:
```
npm install
```


After that, you can start the website on localhost with:
```
npm run dev
```

## Project Description
Our Product owner, Tessa Steenkamp, wanted a website to showcase all her research results. She wanted to avoid having her work end up in a booklet that might eventually get lost in a drawer.
The goal of the project is to create an online platform where her research can be easily accessed, organized, and shared

Tessa asked us to keep the existing brand style, but gave us the freedom to design a new and improved layout. As a team, we worked on redesigning the structure, visuals, and user experience of the website using modern web technologies such as SvelteKit and design tools like Figma.

## Design choices
### Colors
For the colors, we used the existing brand colors from the existing house style.
Originally, these colors were defined using HEX codes, but we decided to convert them to HSL instead.

HSL is now supported by all modern browsers and makes it easier to create lighter and darker variations of each color by simply adjusting the lightness value. This was useful because we wanted to build a flexible color palette with multiple shades for each main color.

In addition to HSL, we also added OKLCH colors. OKLCH offers a wider color range and produces much more vivid and accurate colors compared to HSL.
However, since OKLCH is still not supported in all browsers, we added a fallback: the site will only use OKLCH colors if the user’s browser supports them. Otherwise, it will automatically fall back to the HSL version.

This approach keeps the design consistent across all browsers while taking advantage of the newer, more advanced color system where possible

### Designs
We created two design versions:
- The first design used all the original colors from the live website: purple for the header and footer, white for the “About Us” section, dark blue for the filter results, pink for the researchers section, green & pink for highlights.
However, using so many different colors made the layout look too busy.

- In the second design, we simplified the color usage by applying the new color palette with lighter colors. This made the interface look cleaner, more modern, and visually balanced.

##Functionaliteiten uitleg

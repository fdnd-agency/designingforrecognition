# Designing for Recognition

## Project Description
Our Product owner, Tessa Steenkamp, wanted a website to showcase all her research results. She wanted to avoid having her work end up in a booklet that might eventually get lost in a drawer.
The goal of the project is to create an online platform where her research can be easily accessed, organized, and shared

Tessa asked us to keep the existing brand style, but gave us the freedom to design a new and improved layout. As a team, we worked on redesigning the structure, visuals, and user experience of the website using modern web technologies such as SvelteKit and design tools like Figma.  
The redesigned website is available via the [live link](https://designingforrecognition.netlify.app/)

## Technologies Used
![SvelteKit 5](https://img.shields.io/badge/SvelteKit-5-red?logo=svelte&logoColor=white&style=for-the-badge)
![Svelte](https://img.shields.io/badge/Svelte-4A4A55?logo=svelte&logoColor=white&style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white&style=for-the-badge)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white&style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge)
![npm](https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white&style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white&style=for-the-badge)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?logo=netlify&logoColor=white&style=for-the-badge)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=black&style=for-the-badge)
![Figma](https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=white&style=for-the-badge)

## User Guide
The Designing for Recognition website allows users to read academic research published by the Designing for Recognition team.

Users can browse all available papers on the homepage and use the filter functionality to quickly find research by category. Selecting a paper opens a detail page with more information about the selected subject.

The website is fully responsive and works on both desktop and mobile devices. Core functionality is available in all browsers, with enhanced features supported in modern browsers

## Changelog
This was the first iteration of the project, during which the following changes were implemented:
- Complete redesign of the website while preserving the existing brand style
- Improved information structure and user experience
- Implemented responsive design for mobile and desktop
- Applied modern web technologies including SvelteKit
- Added progressive enhancement and performance optimizations

## Functionalities
The Designing for Recognition website offers the following functionalities:
- Research Showcase: Users can explore and view all papers in a structured and easily accessible way.
- Filter: Users can filter papers by category to quickly find what they are looking for.
- Responsive Design: Optimized for both desktop and mobile devices.
- High Performance: Fast loading times and smooth interactions for an efficient user experience.
- Progressive Enhanced: Core functionality works on all browsers, with enhanced features available on modern browsers.


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


## Installation
### Localhost
If you are joining our team or would like to contribute, here’s how to get started:
if you are contributing:
- First, you need to fork the repository on GitHub
  - You can do that on the [GitHub website](https://github.com/fdnd-agency/designingforrecognition/tree/main)

*If you are joining our team you don't need to make a fork*

- Then, clone your fork to your computer
  - You can do this through the terminal or GitHub Desktop
- Once you have your local clone, you need to install the dependencies
  - Run the following command in the root folder of the project:
```
npm install
```

If you don’t have Node.js installed, you can [download](https://nodejs.org/en/download) it from the official Node.js website.  
After installing Node.js, open a new terminal and try running `npm install` again.

If that succeeds, you can start the website on localhost with:
```
npm run dev
```

### Prettier code formatter
We use Prettier to format our code.  
To enable it in your project, follow these steps:
- Install the Prettier – Code Formatter extension in VS Code.
- Go to File > Preferences > Settings.
  - Search for “Format on Save” and enable it.

Now you can format a file by pressing `Ctrl + S`  
You can turn Auto Save on or off, but note that Auto Save does not format the file you’re working in.

If formatting still doesn’t work, it might be due to your personal VS Code settings or conflicting extensions.
In that case, you can always format all files through the terminal:
```
npx prettier . --write
```


## How to contribute
We welcome contributions to this project!
Whether you want to report a bug, improve the code, or take on an issue from [our project board](https://github.com/orgs/fdnd-agency/projects/81), here’s how to get started:

If you are reporting a bug, you can create a new issue in our repository or on our project board.
Please provide a detailed description and include screenshots if possible.

If your contribution involves code, please follow these steps:
- Follow [our installation guide](#installation)
- Create a feature branch, from the dev branch, for your changes
- Don’t forget to format your code with Prettier and follow [our code conventions](https://github.com/fdnd-agency/designingforrecognition/blob/dev/CONTRIBUTING.md#code-conventies)
- When you’re ready, open a pull request with a clear description of what you’re changing.
  - Note: When creating your pull request, make sure to target the `dev branch`, not the main branch.

One of our team members will review your contribution.  
We may request a few adjustments.  
Once everything looks good, we’ll merge your pull request.


## Datamodel

[![](https://mermaid.ink/img/pako:eNqNUsFqwzAM_RWjc1qSukkT30YXGIOxke00AsHUWpptsYvqwLa0_744TdsUNqgOwnrv6UlgtbAyCkEA0m0lS5J1rlkXWfqc3mTLuzRju91kYlr2lD3ep8uXYsQIVhzUA3eNdIS1B8RFpS2rFDsDW0uVLhnhFiWt1kiFljUOgv3l1Ct8NmTecWXHJi6UtHjiXPGXf_H_ysfWi5GOGO1dqcEUPCipUiAsNehBjVRLV0JvmoNdY405iO6pJH3kkGvXs5H61Zj62EamKdcg3uTntquajdt6-LkTSqgV0tI02oIIot4DRAtfIDj3p3Ew8_0kCbrEFx37DSKMpjyex7PADxMexxEP9x789GM7_TwJ5wseJFESz3iw8ABVZQ09HC6nP6D9L0Ewq6A?type=png)](https://mermaid.live/edit#pako:eNqNUsFqwzAM_RWjc1qSukkT30YXGIOxke00AsHUWpptsYvqwLa0_744TdsUNqgOwnrv6UlgtbAyCkEA0m0lS5J1rlkXWfqc3mTLuzRju91kYlr2lD3ep8uXYsQIVhzUA3eNdIS1B8RFpS2rFDsDW0uVLhnhFiWt1kiFljUOgv3l1Ct8NmTecWXHJi6UtHjiXPGXf_H_ysfWi5GOGO1dqcEUPCipUiAsNehBjVRLV0JvmoNdY405iO6pJH3kkGvXs5H61Zj62EamKdcg3uTntquajdt6-LkTSqgV0tI02oIIot4DRAtfIDj3p3Ew8_0kCbrEFx37DSKMpjyex7PADxMexxEP9x789GM7_TwJ5wseJFESz3iw8ABVZQ09HC6nP6D9L0Ewq6A)


## Links
- [CONTRIBUTING.md](https://github.com/fdnd-agency/designingforrecognition/blob/dev/CONTRIBUTING.md)
- [HANDOVER.md](https://github.com/fdnd-agency/designingforrecognition/blob/dev/HANDOVER.md)
- [Color Pallete design choices](https://github.com/fdnd-agency/designingforrecognition/issues/35)
- [Remote Function for Filtering](https://github.com/fdnd-agency/designingforrecognition/issues/58#issuecomment-3589140873)

## Team
| Name | Role | GitHub | School Year | Sprint |
|--------|--------|--------|--------|--------|
| Viresh  | Scrum Master | [@vsheo](https://github.com/vsheo) | 2025–2026 | Sprint 13–18 |
| Mikiyas | Team Lead | [@Mikiyas-hs](https://github.com/Mikiyas-hs) | 2025–2026 | Sprint 13–18 |
| Inez | Creative Lead | [@Pink-Mallow](https://github.com/Pink-Mallow) | 2025–2026 | Sprint 13–15 |



## Link naar de licentie

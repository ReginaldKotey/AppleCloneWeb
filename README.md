Showcasing the iPhone 15 series, it is a stunning webpage that highlights the features of the iPhone 15, complete with sleek animations and an interactive 3D model. Built to demonstrate my web development skills, it merges cutting-edge design with an immersive user experience, creating a showcase of pure awesomeness.

## Code Overview

### App Component
The `App` component serves as the main entry point of the application. It orchestrates the rendering of various sections of the landing page. Here’s a breakdown of its components:

#### Main Methods
- **Render Method**: The `App` component returns the main layout of the page, including the navigation bar, hero section, highlights, model section, features, gaming section, and footer. It uses a main tag with a black background for styling.

### Navbar Component
The `Navbar` component displays the top navigation bar with the Apple logo and links to different sections of the landing page. Here’s a breakdown of its components:

#### Main Methods
- **Render Method**: 
  - Displays the Apple logo on the left.
  - Renders navigation links centered in the navbar.
  - Provides icons for search and shopping cart on the right side.

### Hero Component
The `Hero` component presents the primary promotional section for the iPhone 15 Pro. Its functionality includes a responsive video display and a call-to-action button. Here’s a breakdown of its components:

#### Constructor
- **State Management**: The component uses state to manage the video source based on the window width, defaulting to a larger video or a smaller one depending on the screen size.

#### Main Methods
- **handleVideoSrcSet()**: Updates the video source based on the current window width to ensure optimal playback.
  
- **useEffect()**: Sets up an event listener to update the video source on window resize and cleans it up when the component unmounts.

- **GSAP Animation**: Animates the hero section's opacity and call-to-action button using GSAP when the component mounts.

- **Render Method**: 
  - Displays the title “iPhone 15 Pro”.
  - Renders a responsive video element that plays automatically and is muted.
  - Includes a call-to-action section with a button to buy the product and a pricing description.

### Highlights, Model, Features, Gaming, and Footer Components
These components are placeholders for additional content and functionality on the landing page (details not provided in the initial code). They should be structured similarly to the `Navbar` and `Hero` components, ensuring a cohesive design and interactivity.

![vid1](https://github.com/user-attachments/assets/34742ead-5569-49ea-a1b8-0436a78c47a7)


### Highlights Component
The `Highlights` component showcases key features of the iPhone 15 Pro with a title, links to watch related content, and a video carousel. Here’s a breakdown of its components:

#### Main Methods
- **GSAP Animation**: 
  - Utilizes `useGSAP` to animate the title and link elements on component mount, enhancing the visual appeal of the section.
  
- **Render Method**: 
  - Contains a section with a title "Get the Highlights".
  - Provides two links: one to watch a film and another to watch the event, each accompanied by an icon.
  - Renders a `VideoCarousel` component for displaying video content dynamically.

### Model Component
The `Model` component allows users to interact with a 3D model of the iPhone 15 Pro, providing options to view it in different sizes and colors. Here’s a breakdown of its components:

#### Constructor
- **State Management**: 
  - Uses state to manage the current model size and its properties (title, colors, and image).

#### Main Methods
- **useEffect()**: 
  - Animates the transition between different model sizes using GSAP timelines, allowing for a smooth visual change when switching between the small and large views.

- **GSAP Animation**: 
  - Implements `useGSAP` to animate the heading's opacity and vertical position on component mount.

- **Render Method**: 
  - Displays a section with a heading "Take a closer look".
  - Renders two `ModelView` components for different model sizes and attaches relevant refs for rotation and control.
  - Integrates a `Canvas` component for rendering the 3D model, providing a dynamic visual experience.
  - Displays the model title and includes a color selection and size button interface to enhance user interaction.

---


![vid2](https://github.com/user-attachments/assets/4a22ed45-98eb-4dc1-b058-5f3a13af99ad)

### Features Component
The `Features` component presents the iPhone's key features, emphasizing its titanium design through video and images. Here’s a breakdown of its components:

#### Main Methods
- **GSAP Animation**: 
  - Utilizes `useGSAP` to manage animations on component mount, such as animating the video playback on scroll and fading in text and images.
  
- **Render Method**: 
  - Contains a section with the heading "Explore the Full Story."
  - Displays two subheadings emphasizing the titanium construction of the iPhone.
  - Renders a video element for showcasing the iPhone, which automatically plays when it comes into view.
  - Includes two feature images that animate upon scrolling, accompanied by descriptive text about the iPhone's titanium features.

### Gaming Component
The `Gaming` component highlights the capabilities of the A17 Pro chip, focusing on gaming performance with a video demonstration. Here’s a breakdown of its components:

#### Main Methods
- **GSAP Animation**: 
  - Implements `useGSAP` to animate the chip image and text elements, enhancing the presentation as users scroll.
  
- **Render Method**: 
  - Displays a section with an animated image of the A17 Pro chip.
  - Contains a title and subtitle describing the new GPU redesign.
  - Features a video demonstrating gameplay, set within a frame image for visual context.
  - Provides descriptive text about the gaming performance, emphasizing the immersive experience provided by the new chip.

### Footer Component
The `Footer` component offers additional shopping information and legal disclaimers for Apple. Here’s a breakdown of its components:

#### Render Method
- Displays contact information for Apple Store inquiries and customer support.
- Features a horizontal line for visual separation.
- Includes copyright information and a list of footer links, formatted for easy navigation.

![vid3](https://github.com/user-attachments/assets/c4e17f0c-78d1-43a6-9748-6e428d74b5e7)

## What I Learned

During the development of this project, I deepened my understanding of several key concepts, including:

- **GSAP Animations**: I learned how to implement smooth animations and transitions using GSAP (GreenSock Animation Platform) to enhance the user interface.
- **React Functional Components**: I improved my skills in building reusable components in React, leveraging hooks like `useGSAP` for more dynamic behavior.
- **Three.js Integration**: I explored how to integrate Three.js with React to create 3D models and enhance the visual experience of the application.
- **Video Handling**: I gained insights into handling video elements effectively within a React app, ensuring they are interactive and performant.
- **Responsive Design**: I practiced creating layouts that adapt to various screen sizes, enhancing the user experience on different devices.

## Acknowledgments

A special shout-out to @jsmastery.pro for their invaluable support and guidance throughout this project. Their insights and expertise were instrumental in overcoming challenges and achieving the project's goals. Thank you for your help!


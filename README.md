Book my show clone

Technologies / Libraries
react (for frontend),
tailwind (for designing the UI using tailwind base, components & utilities),
react-slick (carousel),
react-icons (contains all icons such as bootstrap icons, font awesome icons & many more),
react-context-api (State-management in React) / redux => heavy projects
axios (for api)
react-router-dom (for routes)
headlessUI (for effects,transitions on components & left/right arrows for carousel)

Pages:
Home.page.jsx
Movie.page.jsx
Play.page.jsx

HOC(Layouts):
Default.Hoc.jsx => Home.page.jsx, Play.page.jsx
Movie.Hoc.jsx => Movie.page.jsx

Components:
Cast => Cast.Component.jsx

Entertainment => Entertainment.Component.jsx

HeroCarousel => 
                -> HeroCarousel.Component.jsx
                -> Arrows.Components.jsx (Configuration File)

MovieHero =>
                -> MovieHero.Component.jsx
                -> MovieInfo.Component.jsx

Navbar => 
                -> MovieNavbar.Component.jsx
                -> Navbar.Component.jsx

PaymentModal    -> Payment.Component.jsx
PlayFilters     -> PlayFilters.Component.jsx
Poster          -> Poster.Component.jsx
PosterSlider    -> PosterSlider.Component.jsx


react-context-api: Where we can store or update data from any component (i.e., child components) which then can be accessed anywhere in the components.
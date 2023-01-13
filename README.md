# Developer Exchange: Elastic font sizes

<wm-rem></wm-rem>

- What are elastic font sizes? 
- Why do we need elastic font sizes?
- Where do I use elastic font sizes?
- In the field
- Should I change it now?
- About Figma / Sketch
- Funfacts

<wm-tutorial tipps="Use the right arrow key ➡ or swipe to the left in order to go to the next slide. Press F11 for fullscreen mode."></wm-tutorial>

---

## What are elastic font sizes?

- Elastic font sizes are not "absolute" like "px"
- Elastic font sizes are relativ to something
- There are 2 css units right now which are commonly used: EM and REM
- EM is relativ to its parent element font size
- REM is relativ to the root element, e.g. the HTML element

![EM and REM](https://smazee.com/uploads/images/css-unit-4.png)

---

## Where do I use elastic font sizes?

- For the `font-size` attribute of course
- Icons
- Logos, especially if the logo has letters
- In some cases for spacings like margin and paddings as well
- In an ideal world: REM and absolute units like PX should coexist in a project

---

### Why do we need elastic font sizes?

- It is an accessbility feature
- Some people have a low vison disablity
- Some people work with small screens, e.g. small desktop screens
- Interacting with user interfaces makes it harder for them
- Zooming into web application increases Fontsize but user interface as well
- Thus zooming has its limits and could break user interface / confuse the user

---
## In the field: Examples from german bürgerservices

Webpages of citizen services are somewhat required to make their services accessible. Here are some examples:

### Negative examples


- [Walldorf](https://www.walldorf.de/rathaus/buergerservice/termine)
- [Halle](https://www.halle.de/de/Startseite/)
- [Albstadt](https://www.albstadt.de/%C3%96ffnungszeiten#)
- [Reichling](https://www.vg-reichling.de/toolbar/schriftgroesse-aendern/)
- [Worms](https://www.worms.de/neu-de/buergerservice/)
- [Potsdam](https://vv.potsdam.de/vv/oe/173010100000007821.php)
- [Dransfeld](https://www.dransfeld.de/dienstleistung/anzeigen/id/26314/an-ab-und-ummeldungen-einwohnermeldeamt.html?browser=1)


### Positive examples

- [Lübeck](https://www.luebeck.de/de/buergerservice/termine-online/index.html)
- [Berlin](https://service.berlin.de/terminvereinbarung/)
- [Sachen Anhalt](https://buerger.sachsen-anhalt.de/detail?areaId=&pstId=&ouId=184303&infotype=0#)

---


## In the field: Examples from different component libraries

It is also interesting to check out which approaches some component library teams went in the end:

### Positive examples

- [MUI Button](https://mui.com/material-ui/react-button/)
- [Bootsrap Button](https://getbootstrap.com/docs/4.0/components/buttons/)

### Negative examples

- [Vuetify](https://vuetifyjs.com/en/components/buttons/)

---

## In the field: An Hella gutmann exampe

[macs365 got a new homepage!](https://macs365.test01.hgs.cloud/en/homepage)



---

## Should I change it now?

- Short answer no.
- Depends in one hand if you want to support this accessbility and if your setup / component library supports it
- For the time being it is good to be aware of this accessbility feature
- Something we certainly want to integrate in Reusable Frontend components :)

[caniuse](https://caniuse.com/rem)

---

### About Figma / Sketch 

- Figma and Sketch are not able to use / display relative and elastic units
- Rule of thumb: Dont take the values presented in Figma / Sketch 1:1
- Talk to your UX/UI guy or check out the styleguide


--- 

## Funfacts

- Windows 95 and all other old Operating Systems from the Era tried to tackle the issue about font sizes and accessbility as well. An example can be found on this [document on page 14](https://old.nzao.co.nz/sites/default/files/LV%20Computer%20Booklet-NZAO.pdf#page=14).
- I created a [storybook addon](https://storybook.js.org/addons/storybook-addon-rem) recently! A plugin which lets you change the root font size!
- [Aleksandr Hovhannisyan](https://www.aleksandrhovhannisyan.com/blog/use-rems-for-font-size/) wrote an awesome article about [rems for font size](https://www.aleksandrhovhannisyan.com/blog/use-rems-for-font-size/). Check it out if you want to learn more about this CSS unit.

![Storybook Addon REM](https://raw.githubusercontent.com/soelen/storybook-addon-rem/master/.github/images/icon.gif)


---

# Thank you!


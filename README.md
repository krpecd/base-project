# Project installation

1. Install Python 2.7.x (3.x.x is not supported) [https://www.python.org/downloads/](https://www.python.org/downloads/)
2. **Only for Windows machines** - Install Visual C++ Build Tools
3. run `npm install`
4. create `bs-config.js` file in project root folder
5. Set browsersync proxy - example config is in `bs-config.js.example` file (you can set browsersync fully to your needs) [https://www.browsersync.io/docs/options](https://www.browsersync.io/docs/options)


## Gulp tasks
**Default** and **watch** tasks are defined in `gulpfile.js`.
Other tasks are located in `gulp-tasks` folder.


## Compilation of assets
### Project structure for compiling assets
```
project/
├── gulpfile.js
├── bs-config.js
├── package.json
│
├── gulp-tasks/
│   ├── task.js
│   └── another-task.js
│
├── css/
│   └── main.css
│
├── js/
│   ├── main.js
│   └── main.min.js
│
└── src/
    ├── js/
    │   └── main.js
    │
    └── scss/
        ├── components/
        ├── forms/
        ├── pages/
        ├── critical.scss
        └── main.scss
```

### Javascript compilation
JS is compiled from `./src/js/main.js` into `./js` folder

### CSS compilation

**SCSS** is compiled from `./src/scss/main.scss` into `./css` folder

**Critical CSS** is compiled from `./src/scss/critical.scss` into `./css` folder

**Autoprefixer** setting is located in `gulpfile.js` and is the same for **SCSS** and **Critical CSS** compilation.


## Logic and technology for writing scripts
`main.js` is used for importing libraries installed via npm or custom js files located in `./src/js`.

JS is transpiled using browserify and babel. Feel free to use **ES6** syntax :-)

**!!!** All libraries should be installed via npm. (do not forget --save-dev attribute)


## Logic and technology for writing styles

`main.scss` file is used only for importing other stylesheets 

`critical.scss` file is used to import only the critical part of css. For the first viewport.
 
In `layout.scss` are styles neccesary for layout creation. Flexbox Atomic CSS and centered containers.

### Centered containers
Classes for centered container are `c-container-width` f.e. `c-1250`.
Number after dash represent maximum width of container in pixels.
**generating centered container:**
```scss
@mixin center($amount) {
  margin-left: auto;
  margin-right: auto;
  max-width: $amount;
  @media (max-width: $amount + 40 ) {
    padding-left: 15px;
    padding-right: 15px;
  }
}

.c-1250 {
  @include center(1250px);
}
```


### Flexbox Atomic CSS
Is set of classes for creating layout with flexbox.

Class `.container` specifies the  flexbox container e.g. `display: flex;`

**Container classes**
Can be used only on Flex container

List of classes:

`.w`: shorthand for `flex-wrap: wrap;`

`.wr`: shorthand for `flex-wrap: wrap-reverse;`

`.nw`: shothand for `flex-wrap: nowrap;`

`.jcsb`: shothand for `justify-content: space-between;`

`.jcsa`: shothand for `justify-content: space-around;`

`.jcfe`: shothand for `justify-content: flex-end;`

`.jcc`: shothand for `justify-content: center;`

`.aic`: shothand for `align-items: center;`

`.ais`: shothand for `align-items: stretch;`

`.aife`: shothand for `align-items: flex-end;`

`.fdc`: shothand for `flex-direction: column;`


**Item classes**
Can be used only on Flex item

List of classes:

`.asfe`: shorthand for `align-self: flex-end;`

[flexbox cheatsheet](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### Common style writing rules
Try to avoid `!important` rules

Care about **scss-linter output** (in the console) and fix warnings

**Mixins and includes comes always first**
```scss
.header {
  @include header;
  width: 100%;
}
```

**Do not use unnecessary nesting in scss files**
```scss
//bad
.header {
  &__logo {

  }
}

//correct
.header {

}

.header__logo {

}
```

### Folder "components"
Component is a reusable part of website. Component filename should be the same as component classname.

example file: `components/header.scss`
```scss
.header {
  //Styles comes here
}
```

### Folder "forms"
Here comes files for styling form elements. Each element should have its own file e.g. `forms/text-input.scss`

### Folder "pages"
Specific files for styling page. e. g. `pages/homepage.scss`

### Media queries

#### variables
```scss
$min-desktop-lg: '(min-width: 1271px)';
$min-desktop: '(min-width: 1024px)';
$min-tablet: '(min-width: 768px)';
$min-mobile-lg: '(min-width: 480px)';
$min-mobile: '(min-width: 360px)';
```

This variables are for writing **Mobile first** method. If you are using **Desktop first** method. You should use `max-width` and variables with `max-` prefix instead. 

#### media queries usage
**Mobile first method** 
```scss
.header {
  //mobile styles

  @media #{$min-tablet} {
    //Styles for tablet and bigger screens
  }
}
```

**Desktop first method**
```scss
.header {
  //desktop styles

  @media #{$max-desktop} {
    //Styles for smaller screens than desktop
  }
}
```

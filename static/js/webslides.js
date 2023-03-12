/*!
 * Name: WebSlides
 * Version: 1.5.0
 * Date: 2017-09-16
 * Description: Making HTML presentations easy
 * URL: https://github.com/webslides/webslides#readme
 * Credits: @jlantunez, @LuisSacristan, @Belelros
 */
@charset "UTF-8";
/*-----------------------------------------------------------------------------------
	0. CSS Reset & Normalize
	1. Base
		1.1 Wrap/Container
		1.2 Animations
		1.3 Responsive Media (videos, iframe, screenshots...)
		1.4 Basic Grid (2,3,4 columns)
	2. Typography & Lists
		2.1 Headings with background
		2.2 Classes: .text-
		2.3 San Francisco Font (Apple)
	3. Header & Footer
		3.1 Logo
	4. Navigation
		4.1 Navbars
	5. SLIDES (vertically and horizontally centered)
		5.1 Mini container & Alignment
		5.2 Counter / Navigation Slides
		5.3 Background Images/Video
	6. Magic blocks = .flexblock (Flexible blocks with auto-fill and equal height).
		6.1 .flexblock.features
		6.2 .flexblock.clients
		6.3 .flexblock.steps
		6.4 .flexblock.metrics
		6.5 .flexblock.specs
		6.6 .flexblock.reasons
		6.7 .flexblock.gallery
		6.8 .flexblock.plans
		6.9. flexblock.activity
	7. Promos/Offers (pricing, tagline, CTA...)
	8. Work / Resume / CV
	9. Table of contents
	10. Cards
	11. Quotes
	12. Avatars
	13. Tables
	14. Forms
  15. Longform Elements
	16. Safari Bug (flex-wrap)
	17. Slidex index (aka zoom)
  18. Print
  19. Colors
----------------------------------------------------------------------------------- */
/*
=========================================
0. CSS Reset & Normalize
=========================================
*/
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  border: 0;
  font: inherit;
  font-size: 100%;
  margin: 0;
  padding: 0;
  vertical-align: baseline; }

article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary {
  display: block; }

body {
  line-height: 1; }

blockquote,
q {
  quotes: '' ''; }

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: ''; }

table {
  border-collapse: collapse;
  border-spacing: 0;
  margin-bottom: 24px;
  width: 100%; }

html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-box-sizing: border-box;
          box-sizing: border-box; }

*,
*::before,
*::after {
  -webkit-box-sizing: inherit;
          box-sizing: inherit; }

audio,
canvas,
progress,
video {
  display: inline-block;
  vertical-align: baseline; }

embed,
iframe,
object {
  max-width: 100%; }

audio:not([controls]) {
  display: none;
  height: 0; }

[hidden],
template {
  display: none; }

ul {
  list-style: square;
  text-indent: inherit; }

ol {
  list-style: decimal; }

b,
strong {
  font-weight: 600; }

a {
  background-color: transparent; }

a:active,
a:hover {
  outline: 0; }

sup,
sub {
  font-size: .75em;
  height: 0;
  line-height: 2.2em;
  position: relative;
  vertical-align: baseline; }

sup {
  bottom: 1ex; }

sub {
  top: .5ex; }

small {
  font-size: .75em;
  line-height: 1.72; }

big {
  font-size: 1.25em; }

hr {
  border: 0;
  clear: both;
  display: block;
  height: 1px;
  margin: 3.2rem auto;
  text-align: center;
  width: 100%; }

h2 + hr,
h3 + hr {
  margin-bottom: 4.8rem; }

p + hr {
  margin-bottom: 4rem; }

dfn,
cite,
em,
i {
  font-style: italic; }

abbr,
acronym {
  cursor: help; }

mark,
ins {
  padding: 0 4px;
  text-decoration: none;
  text-shadow: none; }

::-moz-selection {
  text-shadow: none; }

::selection {
  text-shadow: none; }

img {
  border: 0;
  height: auto;
  max-width: 100%; }

img:hover {
  opacity: .9; }

svg:not(:root) {
  overflow: hidden; }

figure {
  line-height: 0;
  margin: 0;
  position: relative; }

optgroup {
  font-weight: bold; }

td,
th {
  padding: 0; }

dt {
  font-weight: bold; }

dd {
  margin: 0; }

/*=== Clearing === */
header:before, header:after,
main:before,
main:after,
section:before,
section:after,
aside:before,
aside:after,
footer:before,
footer:after,
.clear:before,
.clear:after,
.wrap:before,
.wrap:after {
  content: '';
  display: table; }

header:after,
main:after,
section:after,
aside:after,
footer:after,
.clear:after,
.wrap:after {
  clear: both; }

/*=========================================
1. Base --> Baseline: 8px = .8rem
=========================================== */
/* -- Disable elastic scrolling/bounce:
webslides.js will add .ws-ready automatically. Don't worry :) -- */
.ws-ready,
.ws-ready body {
  height: 100%;
  overflow: hidden;
  width: 100%; }

.ws-ready.ws-ready-zoom {
  overflow: visible; }
  .ws-ready.ws-ready-zoom body {
    overflow: auto; }

#webslides {
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll; }
  #webslides::-webkit-scrollbar {
    display: none; }

li li {
  margin-left: 1.6rem; }

a,
a:active,
a:focus,
a:visited,
input:focus,
textarea:focus,
button {
  text-decoration: none;
  -webkit-transition: all .3s ease-out;
  transition: all .3s ease-out; }

p a:active {
  position: relative;
  top: 2px; }

nav a[rel='external'] em,
.hidden {
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  width: 1px; }

.shadow {
  position: relative; }
  .shadow:before, .shadow:after {
    bottom: 1.6rem;
    content: '';
    max-width: 300px;
    position: absolute;
    top: 80%;
    width: 50%;
    z-index: -1; }
  .shadow:after {
    right: 2.4rem;
    -webkit-transform: rotate(3deg);
            transform: rotate(3deg); }
  .shadow:before {
    left: 2.4rem;
    -webkit-transform: rotate(-3deg);
            transform: rotate(-3deg); }

/*=== 1.1 WRAP/CONTAINER === */
.wrap,
header nav,
footer nav {
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  position: relative;
  width: 100%;
  z-index: 2; }
  @media (min-width: 1024px) {
    .wrap,
    header nav,
    footer nav {
      width: 90%; } }

.frame,
.shadow {
  padding: 2.4rem; }

.radius {
  border-radius: .4rem; }

.alignright {
  float: right; }

.alignleft {
  float: left; }

.aligncenter {
  margin-left: auto;
  margin-right: auto;
  text-align: center; }

img.aligncenter,
figure.aligncenter {
  display: block;
  margin-bottom: .8rem;
  margin-top: .8rem; }

img.alignleft,
figure.alignleft,
img.alignright,
figure.alignright,
img.aligncenter,
figure.aligncenter {
  margin-bottom: 3.2rem;
  margin-top: 3.2rem; }

img.alignright,
svg.alignright,
figure.alignright {
  margin: .8rem 0 .8rem 2.4rem; }

img.alignleft,
svg.alignleft,
figure.alignleft {
  margin: .8rem 2.4rem .8rem 0; }

/*=== div.size-60, img.size-50, h1.size-40, p.size-30... === */
@media (min-width: 1024px) {
  .size-80 {
    width: 80%; }
  .size-70 {
    width: 70%; }
  .size-60 {
    width: 60%; }
  .size-50 {
    width: 50%; }
  .size-40 {
    width: 40%; }
  .size-30 {
    width: 30%; }
  .size-20 {
    width: 20%; } }

pre,
code {
  font-family: 'Cousine', monospace; }

pre {
  font-size: 1.6rem;
  line-height: 2.4rem;
  overflow: auto;
  padding: 2.4rem;
  text-align: left;
  white-space: pre-wrap;
  width: 100%;
  word-wrap: break-word; }
  pre + p {
    margin-top: 3.2rem; }
  pre code {
    padding: 0; }

code {
  padding: .4rem; }

/* === 1.2 Animations ================
Just 5 basic animations:
.fadeIn, .fadeInUp, .zoomIn, .slideInLeft, and .slideInRight
https://github.com/daneden/animate.css */
/*-- fadeIn -- */
@-webkit-keyframes fadeIn {
  from {
    opacity: 0; }
  to {
    opacity: 1; } }
@keyframes fadeIn {
  from {
    opacity: 0; }
  to {
    opacity: 1; } }

.fadeIn {
  -webkit-animation: fadeIn 1s;
          animation: fadeIn 1s; }

/*-- fadeInUp -- */
@-webkit-keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
            transform: translate3d(0, 100%, 0); }
  to {
    opacity: 1;
    -webkit-transform: none;
            transform: none; } }
@keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
            transform: translate3d(0, 100%, 0); }
  to {
    opacity: 1;
    -webkit-transform: none;
            transform: none; } }

.fadeInUp {
  -webkit-animation: fadeInUp 1s;
          animation: fadeInUp 1s; }

/*-- zoomIn -- */
@-webkit-keyframes zoomIn {
  from {
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
            transform: scale3d(0.3, 0.3, 0.3); }
  50% {
    opacity: 1; } }
@keyframes zoomIn {
  from {
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
            transform: scale3d(0.3, 0.3, 0.3); }
  50% {
    opacity: 1; } }

.zoomIn {
  -webkit-animation: zoomIn 1s;
          animation: zoomIn 1s; }

/*-- slideInLeft -- */
@-webkit-keyframes slideInLeft {
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(-100%, 0, 0);
    visibility: visible; }
  to {
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0); } }
@keyframes slideInLeft {
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(-100%, 0, 0);
    visibility: visible; }
  to {
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0); } }

.slideInLeft {
  -webkit-animation: slideInLeft 1s;
          animation: slideInLeft 1s;
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both; }

/*-- slideInRight -- */
@-webkit-keyframes slideInRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
    visibility: visible; }
  to {
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0); } }
@keyframes slideInRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
    visibility: visible; }
  to {
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0); } }

.slideInRight {
  -webkit-animation: slideInRight 1s;
          animation: slideInRight 1s;
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both; }

/* Animated Background (Matrix) */
@-webkit-keyframes anim {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0); }
  100% {
    -webkit-transform: translateY(-1200px);
            transform: translateY(-1200px); } }
@keyframes anim {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0); }
  100% {
    -webkit-transform: translateY(-1200px);
            transform: translateY(-1200px); } }

/* Duration */
.slow {
  -webkit-animation-duration: 4s;
          animation-duration: 4s; }
  .slow + .slow {
    -webkit-animation-duration: 5s;
            animation-duration: 5s; }

/*=== 1.3 Responsive Media (videos, iframe...) === */
.embed {
  height: 0;
  overflow: hidden;
  /*aspect ratio:16:9*/
  padding-bottom: 56.6%;
  /*aspect ratio: 4:3*/
  /*padding-bottom: 75%;*/
  position: relative;
  /* -- Responsive background video
  https://fvsch.com/code/video-background/ -- */ }
  .embed iframe,
  .embed object,
  .embed embed,
  .embed video {
    height: 100%;
    left: 0;
    margin: 0;
    position: absolute;
    top: 0;
    width: 100%; }
  .fullscreen > .embed {
    bottom: 0;
    height: auto;
    left: 0;
    padding-bottom: 0;
    position: fixed;
    right: 0;
    top: 0;
    /* 1. No object-fit support: */ }
    .fullscreen > .embed > iframe,
    .fullscreen > .embed > object,
    .fullscreen > .embed > embed,
    .fullscreen > .embed > video {
      /* 2. If supporting object-fit, overriding (1): */ }
      @media (min-aspect-ratio: 16 / 9) {
        .fullscreen > .embed > iframe,
        .fullscreen > .embed > object,
        .fullscreen > .embed > embed,
        .fullscreen > .embed > video {
          height: 300%;
          top: -100%; } }
      @media (max-aspect-ratio: 16 / 9) {
        .fullscreen > .embed > iframe,
        .fullscreen > .embed > object,
        .fullscreen > .embed > embed,
        .fullscreen > .embed > video {
          left: -100%;
          width: 300%; } }
      @supports ((-o-object-fit: cover) or (object-fit: cover)) {
        .fullscreen > .embed > iframe,
        .fullscreen > .embed > object,
        .fullscreen > .embed > embed,
        .fullscreen > .embed > video {
          height: 100%;
          left: 0;
          -o-object-fit: cover;
             object-fit: cover;
          top: 0;
          width: 100%; } }

/*=== HTML Browser (Screenshots) ================ */
/* <figure class="browser"> img </figure> */
.browser {
  border-radius: .3rem;
  margin: 0 auto 3.2rem;
  max-width: 1024px;
  overflow: hidden; }
  li .browser {
    margin-bottom: 0; }
  h1 + .browser,
  h2 + .browser,
  p + .browser {
    margin-top: 4.8rem; }
  .browser figcaption {
    padding: 2.4rem; }
  .browser:before {
    content: '\25CF   \25CF   \25CF';
    font-size: .8rem;
    left: 0;
    line-height: 0;
    padding: 1.6rem;
    position: absolute;
    text-align: left;
    top: 0;
    width: 100%; }
    @media (min-width: 768px) {
      .browser:before {
        font-size: 1.6rem; } }

/*=== 1.4. Basic Grid (Flexible blocks)
Auto-fill & Equal height === */
.grid {
  clear: both;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto; }
  .grid:after {
    clear: both; }
  .grid:before {
    content: '';
    display: table; }
  .grid > .column {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
        -ms-flex: auto;
            flex: auto;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    padding: 2.4rem;
    position: relative;
    -webkit-transition: .3s;
    transition: .3s;
    width: 100%; }
  .grid.vertical-align .column {
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center; }
  @media (min-width: 768px) {
    .grid > .column {
      width: 25%; }
    .grid.sm .column:nth-child(1) {
      width: 30%; }
    .grid.sm .column:nth-child(2) {
      width: 70%; }
    .grid.ms .column:nth-child(1) {
      width: 70%; }
    .grid.ms .column:nth-child(2) {
      width: 30%; }
    .grid.sms .column:nth-child(2) {
      width: 50%; } }

/*============================
2. TYPOGRAPHY & LISTS
============================== */
html,
body {
  font-weight: 300;
  line-height: 1;
  text-rendering: optimizeLegibility; }

html,
body,
input,
select,
textarea {
  font-family: 'Roboto', 'San Francisco', helvetica, arial, sans-serif;
  font-size: 62.5%; }

body,
textarea {
  font-size: 1.8rem; }

p,
li,
dt,
dd,
time,
table,
big,
textarea,
label {
  line-height: 3.2rem;
  margin-bottom: 3.2rem; }

li,
p:last-child {
  margin-bottom: 0; }

ul > li,
ol > li {
  margin-left: 3.2rem; }

li li {
  font-size: 100%; }

/*== List .description (Product/Specs) === */
ul.description {
  padding: 0; }
  ul.description + p {
    margin-top: 3.2rem; }
  ul.description li {
    padding-bottom: .8rem;
    padding-top: .8rem;
    position: relative;
    -webkit-transition: .3s;
    transition: .3s; }
  ul.description li:hover {
    padding-left: .4rem; }

ul.description li,
.column ul li {
  list-style: none;
  margin-left: 0; }

.column ol > li {
  margin-left: 1.6rem; }

h1 svg,
h2 svg,
h3 svg,
h4 svg {
  margin-top: -.8rem; }

.text-intro svg,
.text-quote p svg,
.wall p svg,
.try svg {
  margin-top: -.4rem; }

h1 {
  font-size: 4rem;
  line-height: 5.6rem; }
  @media (min-width: 768px) {
    h1 {
      font-size: 6.6rem;
      line-height: 7.2rem; } }

h1 span {
  font-style: italic; }

h2 {
  font-size: 3.2rem;
  line-height: 4.8rem; }
  @media (min-width: 768px) {
    h2 {
      font-size: 4.8rem;
      line-height: 6.4rem; } }

h3 {
  font-size: 2.4rem;
  line-height: 4rem; }
  @media (min-width: 768px) {
    h3 {
      font-size: 4rem;
      line-height: 5.6rem; } }

h4 {
  font-size: 2.2rem;
  line-height: 4rem; }
  @media (min-width: 768px) {
    h4 {
      font-size: 3.2rem;
      line-height: 4.8rem; } }

h5 {
  font-size: 2rem;
  font-weight: 600;
  line-height: 3.2rem; }

h6 {
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 3.2rem; }

h2.alignleft + p.alignright {
  margin-bottom: 0;
  margin-top: 1.2rem; }

h3.alignleft + p.alignright {
  margin-bottom: 0;
  margin-top: .4rem; }

h1 + h1 {
  margin-top: .8rem; }

h1 + h2 {
  margin-top: .8rem; }

h1 + h3 {
  margin-top: .8rem; }

h1 + h4 {
  margin-top: .8rem; }

h1 + h5 {
  margin-top: .8rem; }

h1 + h6 {
  margin-top: .8rem; }

h2 + h1 {
  margin-top: .8rem; }

h2 + h2 {
  margin-top: .8rem; }

h2 + h3 {
  margin-top: .8rem; }

h2 + h4 {
  margin-top: .8rem; }

h2 + h5 {
  margin-top: .8rem; }

h2 + h6 {
  margin-top: .8rem; }

h3 + h1 {
  margin-top: .8rem; }

h3 + h2 {
  margin-top: .8rem; }

h3 + h3 {
  margin-top: .8rem; }

h3 + h4 {
  margin-top: .8rem; }

h3 + h5 {
  margin-top: .8rem; }

h3 + h6 {
  margin-top: .8rem; }

h4 + h1 {
  margin-top: .8rem; }

h4 + h2 {
  margin-top: .8rem; }

h4 + h3 {
  margin-top: .8rem; }

h4 + h4 {
  margin-top: .8rem; }

h4 + h5 {
  margin-top: .8rem; }

h4 + h6 {
  margin-top: .8rem; }

h5 + h1 {
  margin-top: .8rem; }

h5 + h2 {
  margin-top: .8rem; }

h5 + h3 {
  margin-top: .8rem; }

h5 + h4 {
  margin-top: .8rem; }

h5 + h5 {
  margin-top: .8rem; }

h5 + h6 {
  margin-top: .8rem; }

h6 + h1 {
  margin-top: .8rem; }

h6 + h2 {
  margin-top: .8rem; }

h6 + h3 {
  margin-top: .8rem; }

h6 + h4 {
  margin-top: .8rem; }

h6 + h5 {
  margin-top: .8rem; }

h6 + h6 {
  margin-top: .8rem; }

h1 + img,
h2 + img,
h3 + img {
  margin-bottom: 4.8rem;
  margin-top: 4.8rem; }

[class*='content-'] > [class*='content-'] h2,
[class*='content-'] > [class*='content-'] h3,
[class*='content-'] > [class*='content-'] h4 {
  font-size: 2.4rem;
  line-height: 4rem; }

/*== 2.1. Headings with background ==*/
h1[class*='bg-'] {
  padding: 2.4rem; }

h2[class*='bg-'] {
  padding: 2.4rem; }

h3[class*='bg-'] {
  padding: 2.4rem; }

h4[class*='bg-'] {
  padding: 2.4rem; }

h5[class*='bg-'] {
  padding: 2.4rem; }

h6[class*='bg-'] {
  padding: 2.4rem; }

ul[class*='bg-'],
ol[class*='bg-'],
li[class*='bg-'],
p[class*='bg-'] {
  padding: 2.4rem; }

h1 [class*='bg-'],
h2 [class*='bg-'],
h3 [class*='bg-'] {
  padding: .4rem .8rem; }

/*== 2.2. Typography Classes = .text- == */
.text-intro,
[class*='content-'] p {
  font-size: 5.4rem;
  line-height: 7rem; }

/* -- Serif -- */
.text-serif,
h1 span {
  font-family: 'Maitree', times, serif; }

/* -- h1,h2... Promo/Landings -- */
.text-landing {
  letter-spacing: .4rem;
  text-transform: uppercase; }
  @media (min-width: 768px) {
    .text-landing {
      letter-spacing: 1.6rem; } }

/* -- Subtitle (Before h1, h2) p.subtitle + h1/h2 */
.text-subtitle {
  letter-spacing: .2rem;
  margin-bottom: 0;
  text-transform: uppercase; }
  .text-subtitle p.text-subtitle {
    font-size: 1.6rem; }
    .text-subtitle p.text-subtitle svg {
      vertical-align: text-top; }
  .text-subtitle + p {
    margin-top: 3.2rem; }

.text-uppercase {
  text-transform: uppercase; }

.text-lowercase {
  text-transform: lowercase; }

/* -- Emoji (you'll love this) -- */
.text-emoji {
  font-size: 6.8rem;
  line-height: 8.8rem; }
  @media (min-width: 768px) {
    .text-emoji {
      font-size: 12.8rem;
      line-height: 16rem; } }

/* -- Numbers (results, sales... 23,478,289 iphones) -- */
.text-data {
  font-size: 6.4rem;
  line-height: 8rem;
  margin-bottom: .8rem; }
  @media (min-width: 768px) {
    .text-data {
      font-size: 15.2rem;
      line-height: 16.8rem; } }

.text-label {
  display: inline-block;
  font-weight: 600;
  text-transform: uppercase;
  width: 12.8rem; }

/* -- Magazine Two Columns -- */
@media (min-width: 768px) {
  .text-cols {
    -webkit-column-count: 2;
            column-count: 2;
    -webkit-column-gap: 4.8rem;
            column-gap: 4.8rem;
    text-align: left; }
  .text-landing + .text-cols {
    margin-top: 3.2rem; } }

.text-cols p:first-child:first-letter {
  float: left;
  font-size: 11rem;
  font-weight: 600;
  line-height: 1;
  margin: -.4rem 1.6rem 0 0;
  padding: 0;
  text-transform: uppercase; }

/* -- Heading with border -- */
.text-context {
  position: relative; }
  .text-context:before {
    content: '';
    display: block;
    height: .2rem;
    margin-bottom: .6rem;
    width: 12rem; }
    .column .text-context:before {
      width: 100%; }
  .text-context.text-uppercase {
    letter-spacing: .1rem; }

/* -- Separator/Symbols (stars ***...) -- */
.text-symbols {
  font-weight: 600;
  letter-spacing: .8rem;
  text-align: center; }

.text-separator {
  margin-top: 2.4rem; }
  .text-separator:before {
    content: '';
    height: .4rem;
    left: 0;
    margin-top: -1.6rem;
    position: absolute;
    width: 16%; }
  @media (min-width: 568px) {
    .text-separator {
      margin-left: 20%;
      margin-top: 0;
      width: 80%; }
      .text-separator:before {
        margin-top: 1.2rem; } }

/* -- Pull Quote (Right/Left)  -- */
[class*='text-pull'] {
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 4rem;
  margin-bottom: 3.2rem;
  margin-left: 2.4rem;
  margin-right: 2.4rem;
  position: relative; }

[class*='text-pull-'] {
  margin-top: .8rem;
  padding-top: 1.4rem; }
  @media (min-width: 1024px) {
    [class*='text-pull-'] {
      margin-left: -4.8rem;
      margin-right: -4.8rem; } }

@media (min-width: 568px) {
  [class*='text-pull-'] {
    max-width: 40%; }
  .text-pull-right {
    float: right;
    margin-left: 2.4rem;
    margin-right: -2.4rem; }
  .text-pull-left {
    float: left;
    margin-left: -2.4rem;
    margin-right: 2.4rem; } }

img[class*='text-pull-'],
figure[class*='text-pull-'] {
  margin-top: .8rem;
  padding-top: 0; }

/* -- Interviews (Questions & Answers)  --- */
/* -- <dl class="text-interview">
<dt>name</dt>
<dd><p>question or answer</p>
</dd>
--- */
.text-interview dt {
  font-weight: 600;
  margin-bottom: 0;
  text-transform: uppercase; }

@media (min-width: 1024px) {
  .text-interview dt {
    margin-left: -34%;
    position: absolute;
    text-align: right;
    white-space: nowrap;
    width: 30%; } }

/* -- Info Messages (error, warning, success... -- */
.text-info {
  font-size: 1.6rem;
  line-height: 2.4rem; }

/*=========================================
2.1. San Francisco Font (Apple's new font)
=========================================== */
.text-apple,
.bg-apple {
  font-family: 'San Francisco', helvetica, arial, sans-serif; }

/* Ultra Light */
@font-face {
  font-family: 'San Francisco';
  font-weight: 100;
  src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-ultralight-webfont.woff2"); }

/* Thin */
@font-face {
  font-family: 'San Francisco';
  font-weight: 200;
  src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-thin-webfont.woff2"); }

/* Regular */
@font-face {
  font-family: 'San Francisco';
  font-weight: 400;
  src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff2"); }

/* Bold */
@font-face {
  font-family: 'San Francisco';
  font-weight: bold;
  src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-bold-webfont.woff2"); }

/*=========================================
3. Header & Footer
=========================================== */
/* -- If you want an unique, global header/footer,read this:
https://github.com/webslides/webslides/issues/57 -- */
header {
  padding: 2.4rem;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
  width: 100%; }

footer,
#navigation  {
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
  width: 100%; }  
  
header p,
footer p {
  line-height: 4.8rem;
  margin-bottom: 0; }

header[role='banner'] img,
footer img {
  height: 4rem;
  vertical-align: middle; }

footer {
  position: relative; }

header,
footer {
  z-index: 3; }

header,
.ws-ready footer {
  left: 0;
  position: absolute;
  top: 0; }

.ws-ready footer {
  bottom: 0;
  top: auto; }

header[role='banner'] {
  opacity: 0; }
  header[role='banner']:hover {
    opacity: 1; }

@media (max-width: 767px) {
  footer .alignleft,
  footer .alignright {
    display: block;
    float: none; } }

/*=== 3.1. Logo === */
.logo {
  text-transform: lowercase; }
  .logo a {
    background: url("../images/logos/logo.svg") no-repeat 0 0;
    background-size: 4.8rem;
    float: left;
    height: 4.8rem;
    text-indent: -4000px;
    /*If you remove text-indent and add: */
    /*padding-left: 6rem;*/
    vertical-align: middle;
    width: 4.8rem; }

/*=========================================
4. Navigation
=========================================== */
/*=== 4.1. Navbars === */
nav ul {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  /*====align left====*/
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  /* ==== align center ====*/
  /*justify-content: center; */
  /*====align right====*/
  /* justify-content: flex-end; */
  /*====separated columns li a====*/
  /* justify-content: space-between; */
  /*====separated columns centered li a====*/
  /*justify-content: space-around;*/ }
  nav ul li {
    float: left;
    list-style: none;
    position: relative; }

nav ul li:first-child,
nav[role='navigation'] ul li {
  margin-left: 0; }

nav[role='navigation'] li a {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  line-height: 4.8rem;
  max-width: 100%;
  padding: 0 1.6rem;
  position: relative;
  text-decoration: none; }
  nav[role='navigation'] li a svg {
    margin: 1.5rem .4rem 1.5rem 0; }

header nav ul {
  -webkit-box-pack: end;
      -ms-flex-pack: end;
          justify-content: flex-end;
  margin: 0; }

nav.aligncenter ul,
.aligncenter nav ul {
  /* ==== align center ====*/
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center; }

nav.navbar ul li {
  /*====full float li a ====*/
  -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto; }

@media (max-width: 568px) {
  nav.navbar ul {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-flow: column wrap;
            flex-flow: column wrap;
    padding: 0; }
  nav.navbar li a {
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start; } }

/*============================================
5. SLIDES (Full Screen)
Vertically and horizontally centered
============================================== */
/* Fade transition to all slides.
* = All HTML elements will have those styles.*/
section * {
  -webkit-animation: fadeIn .6s ease-in-out;
          animation: fadeIn .6s ease-in-out; }

section .background,
section .light,
section .dark {
  -webkit-animation-duration: 0s;
          animation-duration: 0s; }

/*=== Section = Slide === */
section,
.slide {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  min-height: 100vh;
  /*Fullscreen*/
  /* Prototyping? min-height: 720px (Baseline: 8px = .8rem)*/
  padding: 2.4rem;
  /*Fixed/Visible header? padding-top: 12rem; */
  page-break-after: always;
  position: relative;
  word-wrap: break-word; }
  @media (min-width: 1024px) {
    section,
    .slide {
      padding-bottom: 12rem;
      padding-top: 12rem; } }

/*slide with no padding (full card, .embed youtube video...) */
.fullscreen {
  padding: 0;
  /* Fixed/Visible header?
  padding:8.2rem 0 0 0;
  */ }

/* slide alignment - top */
.slide-top {
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start; }

/* slide alignment - bottom */
.slide-bottom {
  -webkit-box-pack: end;
      -ms-flex-pack: end;
          justify-content: flex-end; }

/*== 5.1. Mini container width:50%
Aligned items [class*="content-"]=== */
[class*='content-'] {
  position: relative;
  text-align: left; }

.wrap[class*='bg-'],
.wrap.frame,
[class*='content-'][class*='bg-'],
[class*='content-'].frame,
[class*='align'][class*='bg-'] {
  padding: 4.8rem; }

form[class*='bg-'] {
  padding: 2.4rem; }

[class*='content-'] > [class*='content-'] p {
  font-size: 1.8rem;
  line-height: 3.2rem; }

.content-center {
  margin: 0 auto;
  text-align: center; }

@media (min-width: 768px) {
  [class*='content-'] {
    width: 75%; }
    [class*='content-']:after, [class*='content-']:before {
      content: '';
      display: table; }
    [class*='content-']:after {
      clear: both; }
  .content-left {
    float: left; }
  .content-right {
    float: right; }
  [class*='content-'] + [class*='content-'] {
    margin-bottom: 4.8rem;
    padding-left: 2.4rem; }
  [class*='content-'] + [class*='size-'] {
    clear: both;
    margin-top: 6.4rem; } }

/*=== 5.3 Slides - Background Images/Videos === */
.background,
[class*='background-'] {
  background-repeat: no-repeat;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0; }

/*=== BG Positions === */
.background {
  background-position: center;
  background-size: cover;
  /*fullscreen video
    <video class="background-video">
  */ }
  .background-top {
    background-position: top;
    background-size: cover; }
  .background-bottom {
    background-position: bottom;
    background-size: cover; }
  .background-center {
    background-position: center; }
  .background-center-top {
    background-position: center top; }
  .background-right-top {
    background-position: right top; }
  .background-left-top {
    background-position: left top; }
  .background-center-bottom, .background-left-bottom, .background-right-bottom, .background-left, .background-right {
    background-position: center bottom; }
  @media (min-width: 1024px) {
    .background-left-bottom {
      background-position: left bottom; }
    .background-right-bottom {
      background-position: right bottom; }
    .background-right {
      background-position: right; }
    .background-left {
      background-position: left; } }
  .background-video {
    height: 100%;
    -o-object-fit: fill;
       object-fit: fill;
    width: 100%; }

/*=== bg image/video overlay === */
/*-- [class*="bg-"] .background.dark, [class*="bg-"] .embed.dark...  -- */
[class*='bg-'] .light,
[class*='bg-'] .light {
  opacity: .8; }

[class*='bg-'] .dark,
[class*='bg-'] .dark {
  opacity: .2; }

[class*='bg-'] .background-video.dark {
  opacity: .5; }

@media (max-width: 1023px) {
  [class*='background-'] {
    -webkit-animation: fadeIn ease-in .2;
            animation: fadeIn ease-in .2;
    opacity: .2; }
  .background-video {
    opacity: .8; } }

/*=== Animated Background Image === */
.background.anim {
  -webkit-animation: anim 80s linear infinite;
          animation: anim 80s linear infinite;
  background-position: center top;
  background-repeat: repeat;
  background-size: 100%;
  height: 200%; }

/*=== Background with a frame === */
/*<span class="background" style="background-image:url('image.jpg')"></span>
<span class="background frame"></span>*/
[class*='background'].frame {
  margin: 2.4rem; }

/* === 5.2 Counter / Navigation Slides  === */
#navigation {
  -webkit-animation: fadeIn 8s;
          animation: fadeIn 8s;
  bottom: 0;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  opacity: 0;
  position: fixed;
  right: 0;
  width: 24.4rem;
  /* hover/visibility */
  z-index: 4; }
  #navigation:hover {
    opacity: 1; }
  #navigation p {
    margin-bottom: 0; }

#counter {
  display: block;
  line-height: 4.8rem;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  text-align: center;
  width: 10rem; }
  #counter a:hover {
    padding: .8rem; }

a#next,
a#previous {
  border-radius: .4rem;
  cursor: pointer;
  font-size: 2.4rem;
  height: 4rem;
  padding: .8rem;
  position: absolute;
  text-align: center;
  width: 4rem; }

a#next {
  right: 3.2rem; }

a#previous {
  left: 3.2rem; }

@media (max-width: 1024px) {
  #navigation {
    -webkit-animation: fadeIn 6s;
            animation: fadeIn 6s;
    background: url("../images/swipe.svg") no-repeat center top;
    background-size: 4.8rem; }
  #navigation a,
  #counter {
    display: none; } }

/*===============================================================
6. Magic blocks with flexbox (Auto-fill & Equal Height)
Blocks Links li>a = .flexblock.blink (.blink required)
================================================================= */
.flexblock {
  clear: both;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  padding: 0; }
  .flexblock:after {
    clear: both; }
  .flexblock:before {
    content: '';
    display: table; }
  .flexblock li,
  .flexblock.blink li > a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    margin: 0;
    padding: 2.4rem;
    position: relative; }
  .flexblock li {
    -webkit-box-flex: 1;
        -ms-flex: auto;
            flex: auto;
    text-align: left;
    -webkit-transition: .3s;
    transition: .3s;
    width: 100%; }
    .flexblock li:hover {
      -webkit-transform: translateY(-0.2rem);
              transform: translateY(-0.2rem); }
    @media (min-width: 600px) {
      .flexblock li {
        width: 50%; } }
    @media (min-width: 1024px) {
      .flexblock li {
        width: 25%; } }
  .flexblock.aligncenter li {
    text-align: center; }
  .flexblock.vertical-align li {
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center; }
  .flexblock.blink li {
    padding: 0; }
  .flexblock li h2 svg,
  .flexblock li h3 svg {
    margin-top: 0; }

h1 + .flexblock,
h2 + .flexblock,
h3 + .flexblock,
div + ul,
div + ol {
  margin-top: 3.2rem; }

.flexblock li h2,
.flexblock li h3,
footer .column h2,
footer .column h3 {
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 3.2rem;
  margin-bottom: 0; }

.flexblock li li,
.flexblock.blink li li {
  padding: 0;
  width: 100%; }

[class*='content-'] .flexblock li p {
  font-size: 1.8rem;
  line-height: 3.2rem; }

.content-right .flexblock.features li,
.content-left .flexblock.features li {
  width: 46%; }

/*====================================================================
6.1 Features <ul class="flexblock features">
====================================================================== */
.flexblock.features > li {
  border-radius: .4rem;
  margin-bottom: 4.8rem;
  width: 100%; }

.flexblock.features li h2 {
  text-transform: uppercase; }

.flexblock.features li span {
  font-weight: 300; }

.flexblock.features li p {
  margin: 0; }

.flexblock.features li p em {
  display: block; }

.flexblock.features li span,
.flexblock.features li svg {
  display: block;
  font-size: 6.4rem;
  line-height: 1;
  margin: 0; }

.flexblock.features li img {
  width: 6.4rem; }

.flexblock.features li span sup {
  font-size: 3rem; }

@media (min-width: 1200px) {
  .flexblock.features li span,
  .flexblock.features li svg,
  .flexblock.features li img {
    float: left;
    margin-right: .8rem; } }

@media (min-width: 768px) {
  .flexblock.features {
    margin-left: -2%;
    margin-right: -2%; }
  .flexblock.features > li {
    margin-left: 2%;
    margin-right: 2%;
    width: 29%; }
  .size-50 .flexblock.features > li {
    width: 46%; }
  .column .flexblock.features > li {
    width: 100%; }
  footer .flexblock.features > li {
    margin-bottom: 0; } }

/*=====================================================================
6.2 Clients Logos <ul class="flexblock clients">
======================================================================= */
.flexblock.clients.blink li > a,
.flexblock.clients li {
  padding: 0; }

.flexblock.clients li figcaption {
  padding: 0 2.4rem 2.4rem; }

.flexblock.clients.border li figcaption {
  padding-top: 2.4rem; }

.clients.blink li > a,
.clients li {
  -webkit-box-pack: inherit;
      -ms-flex-pack: inherit;
          justify-content: inherit; }

.clients li img,
.clients li svg {
  display: block;
  padding: 2.4rem; }

.clients.border li img,
.clients.border li svg {
  display: block;
  margin-left: auto;
  margin-right: auto; }

.clients li:hover {
  z-index: 1; }

/*==================================================
6.3 flexblock.steps <ul class="flexblock steps">
About, Philosophy...
=================================================== */
.steps li {
  width: 100%; }
  .steps li img,
  .steps li span {
    display: block;
    margin: 0 auto .8rem; }
  .steps li span {
    font-size: 6.4rem; }
  @media (min-width: 768px) {
    .steps li {
      width: 50%; } }

@media (min-width: 1024px) {
  .steps li {
    width: 25%; }
  .process {
    border-left-style: solid;
    border-left-width: 15px;
    height: 0;
    left: 0;
    position: absolute;
    top: 60px;
    width: 0; } }

/*=================================================
6.4 Block Numbers - <ul class="flexblock metrics">
=================================================== */
.metrics li {
  text-align: center;
  width: 100%; }
  @media (min-width: 568px) {
    .metrics li {
      width: 50%; } }
  @media (min-width: 1024px) {
    .metrics li {
      width: 25%; } }

.metrics li strong {
  display: block; }

.metrics li span,
.metrics li svg {
  display: block;
  font-size: 6.4rem;
  line-height: 7.2rem;
  margin: 0 auto; }

.card-50 .metrics li {
  width: 50%; }

/*=====================================================
6.5 Specs/Items: <ul class="flexblock specs">
======================================================= */
.specs li {
  text-align: left;
  width: 100%; }
  .specs li:after {
    bottom: -2.4rem;
    content: '';
    display: block;
    height: 1px;
    position: relative; }
  .specs li:hover {
    -webkit-transform: translateX(0.2rem);
            transform: translateX(0.2rem); }
  .specs li span,
  .specs li svg {
    display: block;
    font-size: 6.4rem;
    line-height: 1;
    margin: 0; }
  .specs li img {
    width: 6.4rem; }
  .specs li span {
    font-weight: 300; }
    .specs li span sup {
      font-size: 3rem; }
  @media (min-width: 1024px) {
    .specs li span,
    .specs li svg,
    .specs li img {
      float: left;
      margin-right: 2.4rem; } }

/*=================================================
6.6 Reasons/Why/Numbers (counter-increment)
<ul class="flexblock reasons">
=================================================== */
.flexblock.reasons li {
  counter-increment: list;
  text-align: left;
  width: 100%; }
  .flexblock.reasons li:hover {
    -webkit-transform: translateY(-0.2rem);
            transform: translateY(-0.2rem); }
  .flexblock.reasons li:after {
    bottom: -2.4rem;
    content: '';
    display: block;
    height: 1px;
    position: relative; }
  .flexblock.reasons li:before {
    content: counter(list) ".";
    font-size: 6.4rem;
    line-height: 1; }
  @media (min-width: 768px) {
    .flexblock.reasons li {
      padding-left: 8.8rem;
      /* You need two digits? (1-10)*/
      /*padding-left: 12rem; */ }
      .flexblock.reasons li:before {
        left: 2.4rem;
        position: absolute; } }

/*=================================================
6.7 Gallery - <ul class="flexblock gallery">
Block Thumbnails li+.overlay+image
img size recommended:800x600px
=================================================== */
.flexblock.gallery li {
  margin-bottom: 4.8rem; }
  .flexblock.gallery li:nth-child(n+4) {
    -webkit-box-flex: inherit;
        -ms-flex: inherit;
            flex: inherit; }
  .flexblock.gallery li figcaption {
    padding: 1.6rem;
    position: relative; }
    .flexblock.gallery li figcaption:before {
      content: '';
      height: 0;
      left: 20%;
      margin-left: -.5em;
      position: absolute;
      top: .4rem;
      -webkit-transform: rotate(135deg);
              transform: rotate(135deg);
      -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
      -webkit-transition: .1s;
      transition: .1s;
      width: 0; }
  .flexblock.gallery li:hover figcaption:before {
    top: .3rem; }

.aligncenter .flexblock.gallery li figcaption:before {
  left: 55%;
  margin-left: 0; }

.flexblock.gallery li,
.flexblock.gallery.blink li > a {
  padding: 0; }

.flexblock.gallery h2 {
  text-transform: uppercase; }

.flexblock.gallery h2 + p,
.flexblock.gallery h3 + p {
  margin-top: .8rem; }

.flexblock.gallery p {
  font-size: 1.6rem;
  line-height: 2.4rem;
  margin-bottom: 0; }

.flexblock.gallery li footer {
  margin-top: .8rem;
  padding: 1.2rem 0 0;
  position: relative; }

.flexblock.gallery li img {
  display: block;
  margin-left: auto;
  margin-right: auto; }

@media (min-width: 600px) {
  .flexblock.gallery {
    margin-left: -2%;
    margin-right: -2%; }
    .flexblock.gallery li {
      margin-left: 2%;
      margin-right: 2%;
      width: 46%; } }

@media (min-width: 1024px) {
  .flexblock.gallery li {
    width: 21%; }
  .grid.sm .flexblock.gallery li,
  .grid.ms .flexblock.gallery li {
    width: 29%; }
  .grid.sms .flexblock.gallery li {
    width: 46%; } }

.overlay {
  bottom: 0;
  cursor: pointer;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  height: 100%;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  left: 0;
  opacity: 1;
  position: absolute;
  right: 0;
  top: 0;
  -webkit-transition: all .3s linear;
  transition: all .3s linear;
  width: 100%;
  z-index: 2; }

li .overlay {
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center; }

li .overlay h2 {
  letter-spacing: .2rem;
  margin: 0;
  padding: 0 2.4rem;
  text-align: center;
  text-transform: uppercase;
  width: 100%; }

.overlay p,
.overlay time {
  margin-bottom: 0; }

li:hover .overlay {
  cursor: pointer; }

/*===============================================
6.8 Plans / Pricing <ul class="flexblock plans">
================================================= */
.flexblock.plans > li {
  border-radius: 3px;
  margin-bottom: 4.8rem;
  text-align: center;
  z-index: 1; }

.flexblock.plans li,
.flexblock.plans.blink li > a {
  padding: 0; }

.flexblock.plans.blink li > a div,
.flexblock.plans li div {
  padding-bottom: 3.2rem; }

.flexblock.plans li p,
.flexblock.plans li h2 {
  padding: .8rem 3.2rem; }

.flexblock.plans li h2 {
  float: left;
  font-weight: 400;
  letter-spacing: .1rem;
  text-transform: uppercase;
  width: 100%; }

.flexblock.plans .price {
  clear: both;
  display: block;
  font-size: 4.8rem;
  font-weight: 400;
  line-height: 6.2rem;
  padding: 2.4rem; }
  .flexblock.plans .price sup {
    font-size: 1.8rem;
    margin-right: .4rem; }
  .flexblock.plans .price li ul {
    margin-bottom: 2.4rem; }

.flexblock.plans li ul li {
  display: block;
  padding: .8rem 3.2rem;
  text-align: left;
  width: 100%; }

@media (min-width: 1024px) {
  .flexblock.plans {
    margin-left: -2%;
    margin-right: -2%; }
    .flexblock.plans > li {
      margin-left: 2%;
      margin-right: 2%;
      width: 29%; }
    .flexblock.plans > li:hover,
    .flexblock.plans > li:nth-child(2) {
      position: relative;
      -webkit-transform: scale(1.08);
              transform: scale(1.08);
      z-index: 2; }
    .flexblock.plans:hover li:nth-child(2):not(:hover) {
      position: relative;
      -webkit-transform: scale(1);
              transform: scale(1);
      z-index: 1; } }

/*===========================================
6.9 Block Activity <ul class="activity">
CV / News
============================================= */
.flexblock.activity {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column; }
  .flexblock.activity li {
    -webkit-box-flex: 1;
        -ms-flex: 1;
            flex: 1;
    position: relative;
    width: auto; }
  .flexblock.activity p {
    margin-bottom: 0;
    vertical-align: top; }
  .flexblock.activity img {
    display: block; }
  .flexblock.activity .year,
  .flexblock.activity .title {
    display: inline;
    font-weight: 600; }
  .flexblock.activity .summary {
    width: 100%; }
  .flexblock.activity .title {
    margin-left: 1rem; }
  @media (min-width: 768px) {
    .flexblock.activity p {
      float: left; }
    .flexblock.activity .year {
      width: 15%; }
    .flexblock.activity .title {
      margin-left: 4%;
      margin-right: 4%;
      width: 27%; }
    .flexblock.activity .summary {
      width: 50%; } }

/*=============================================
7. Promos/Offers (pricing, tagline, CTA...)
=============================================== */
.cta {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center; }

.number,
.cta .benefit {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  max-width: 100%;
  padding: .8rem; }

.number {
  text-align: center; }

.cta .benefit {
  max-width: 100%;
  text-align: center; }

.number span {
  display: block;
  font-size: 8rem;
  line-height: 8rem; }

.number span sup {
  font-size: 4rem; }

.cta p {
  margin-bottom: 0; }

@media (min-width: 768px) {
  .number,
  .cta .benefit {
    max-width: 50%;
    padding: 4.8rem; }
  .cta .benefit {
    text-align: left; }
  .number span {
    font-size: 16rem;
    line-height: 16rem; }
    .number span sup {
      font-size: 6rem;
      vertical-align: middle; } }

/* --- Header CTA --- */
.cta-cover {
  display: table;
  width: 100%; }
  .cta-cover h1 strong {
    font-weight: 400; }
  @media (min-width: 1024px) {
    .cta-cover h1 {
      float: left;
      max-width: 80%; }
    .cta-cover h1 strong {
      display: block; }
    .cta-cover .button {
      margin-top: 1.2rem; }
    .cta-cover .try {
      text-align: center; } }
  @media (max-width: 1023px) {
    .cta-cover .alignright {
      float: none; } }

/*=========================================
8. Work/Resumé/CV <ul class="work">
=========================================== */
.work {
  clear: both;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  text-align: left; }
  h1 + .work,
  h2 + .work,
  h3 + .work,
  p + .work {
    margin-top: 4.8rem; }
  .work li {
    -webkit-box-flex: 1;
        -ms-flex: 1;
            flex: 1;
    list-style: none;
    margin: 0;
    position: relative; }
  .work p {
    margin-bottom: 0;
    -webkit-transition: .3s;
    transition: .3s; }
  .work li a {
    display: block;
    float: left;
    height: 100%;
    padding: 2.4rem 0;
    width: 100%; }
  .work li p {
    padding-left: 1.2rem; }
  .work li.work-label p {
    padding-left: 0; }
  .work li a:hover p:first-child {
    padding-left: 1.6rem; }
  .work li p:last-child {
    position: absolute;
    right: 1.2rem;
    top: 2.4rem; }
  .work li.work-label p:last-child {
    right: 0;
    top: 0; }
  .work-label {
    float: left;
    font-weight: 600;
    padding: 0 0 2.4rem;
    width: 100%; }
  .work-title {
    display: block;
    padding-right: 1.2rem;
    width: 75%; }

@media (min-width: 768px) {
  .work-label p,
  .work li p {
    float: left;
    margin-right: 2%;
    width: 25%; }
  .work li.work-label p:last-child,
  .work li p:last-child {
    float: right;
    margin-right: 0;
    padding-right: 1.2rem;
    position: relative;
    right: auto;
    text-align: right;
    top: auto; }
  .work li p.work-date {
    width: 120px; } }

@media (max-width: 768px) {
  .work-client,
  .work-label .work-services {
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    overflow: hidden;
    position: absolute;
    width: 1px; } }

/*===========================================
9. Table of contents
============================================= */
.toc,
.toc ol > li:before,
.chapter {
  position: relative;
  z-index: 2; }

.toc ol {
  counter-reset: item;
  position: relative; }
  .toc ol > li:before {
    content: counters(item, ".") ". ";
    display: table-cell;
    padding-right: .8rem;
    width: 2.4rem; }
  .toc ol li li:before {
    content: counters(item, ".") " "; }

.toc li {
  counter-increment: item;
  display: table;
  font-weight: 400;
  margin-bottom: .8rem;
  margin-left: 0;
  -webkit-transition: .3s;
  transition: .3s;
  width: 100%; }
  .toc li li {
    font-weight: 300;
    margin-bottom: 0;
    margin-left: 0; }
  .toc li .toc-page:before {
    content: '';
    display: block;
    left: 0;
    margin-top: 1.8rem;
    position: absolute;
    right: 4rem; }
  .toc li > a {
    display: inline-block;
    width: 100%; }
  .toc li a:hover span {
    font-weight: 600; }
  .toc li a:hover .toc-page:before {
    border-bottom-width: 2px; }

.chapter {
  display: inline-block;
  font-size: 1.8rem;
  line-height: 3.2rem;
  padding-right: .8rem; }

.toc-page {
  float: right; }

/*===========================================
10. Cards
============================================= */
[class*='card-'],
[class*='card-'] > a {
  clear: both;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  position: relative; }

.fullscreen [class*='card-'],
.fullscreen [class*='card-'] > a {
  min-height: 100vh; }

[class*='card-'] figure img,
[class*='card-'] figure iframe {
  display: block;
  margin: 0 auto; }

[class*='card-'] figure figcaption {
  bottom: 0;
  font-size: 1.4rem;
  left: 0;
  line-height: 2.4rem;
  padding: .8rem 2.4rem;
  position: absolute;
  z-index: 2; }
  [class*='card-'] figure figcaption svg {
    font-size: 1rem; }

@media (min-width: 768px) {
  [class*='card'][class*='bg-'] figure,
  .fullscreen [class*='card'] figure {
    max-height: 100%;
    min-width: 380px;
    text-align: center;
    vertical-align: middle; }
  [class*='card-'][class*='bg-'] figure img,
  [class*='card-'][class*='bg-'] figure iframe,
  .fullscreen [class*='card-'] figure img,
  .fullscreen [class*='card-'] figure iframe {
    height: 100%;
    left: 0;
    -o-object-fit: cover;
       object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1; } }

.flex-content,
[class*='card'] blockquote {
  padding: 2.4rem;
  position: relative; }

[class*='card-'] .flex-content,
[class*='card-'] blockquote {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center; }

.flex-content p {
  position: relative; }

@media (min-width: 768px) {
  .card-50 figure,
  .card-50 blockquote,
  .card-50 .flex-content {
    width: 50%; }
  .card-30 figure,
  .card-70 .flex-content,
  .card-70 blockquote {
    width: 30%; }
  .card-40 figure,
  .card-60 .flex-content,
  .card-60 blockquote {
    width: 40%; }
  .card-60 figure,
  .card-40 .flex-content,
  .card-40 blockquote {
    width: 60%; }
  .card-70 figure,
  .card-30 .flex-content,
  .card-30 blockquote {
    width: 70%; }
  [class*='card']:nth-child(odd) figure {
    -webkit-box-ordinal-group: 1;
        -ms-flex-order: 0;
            order: 0; }
  [class*='card']:nth-child(even) figure {
    -webkit-box-ordinal-group: 2;
        -ms-flex-order: 1;
            order: 1; }
  .flex-content,
  [class*='card'] blockquote {
    padding: 4.8rem; }
  .fullscreen [class*='card'] .flex-content,
  .fullscreen [class*='card'] blockquote {
    padding: 6.4rem; } }

@media (max-width: 767px) {
  [class*='card-'],
  [class*='card-'] > a {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-flow: column;
            flex-flow: column; }
  .card figure,
  .card header {
    width: 100%; } }

/*=========================================
11. Quotes
=========================================== */
blockquote {
  display: inline-block;
  position: relative; }
  blockquote p {
    font-size: 2.4rem;
    line-height: 4rem; }
    blockquote p:last-child {
      margin-bottom: 3.2rem; }

/* -- Interviews dl.text-interview -- */
dd blockquote p:last-child {
  margin-bottom: 0; }

cite {
  display: block;
  text-align: center; }
  cite:before {
    content: '\2014   \2009';
    margin-right: 6px; }

cite span {
  display: block; }

/* -- A big Blockquote -- */
/* .wall will be deprecated soon. Use .text-quote ;) */
.text-quote,
.wall {
  /* Versatility: blockquote, p, h2... */
  position: relative; }
  .text-quote:before,
  .wall:before {
    content: '\201C';
    font-family: arial, sans-serif;
    font-size: 12rem;
    height: 5.6rem;
    left: -.8rem;
    line-height: 1;
    position: absolute;
    text-align: center;
    top: -4rem;
    width: 5.6rem; }
  @media (min-width: 768px) {
    .text-quote,
    .wall {
      padding-left: 6.4rem; }
      .text-quote p,
      .wall p {
        font-size: 3.2rem;
        line-height: 4.8rem; }
      .text-quote:before,
      .wall:before {
        left: .8rem;
        top: -1.6rem; } }

/*=========================================
12. Avatars - uifaces.com
=========================================== */
cite img,
img[class*='avatar-'] {
  display: inline-block;
  margin-right: 6px;
  vertical-align: middle; }

img[class*='avatar-'] {
  border-radius: 50%; }

img.avatar-40 {
  height: 40px;
  width: 40px; }

img.avatar-48 {
  height: 48px;
  width: 48px; }

img.avatar-56 {
  height: 56px;
  width: 56px; }

img.avatar-64 {
  height: 64px;
  width: 64px; }

img.avatar-72 {
  height: 72px;
  width: 72px; }

img.avatar-80 {
  height: 80px;
  width: 80px; }

/*=========================================
13. Tables
=========================================== */
table {
  margin-bottom: 3.2rem;
  margin-top: 3.2rem; }

td,
th,
thead {
  border-spacing: 0;
  padding: .7rem 2.4rem; }

thead th,
th {
  cursor: default;
  font-weight: 600;
  text-align: left;
  text-transform: uppercase;
  white-space: nowrap; }

thead,
td.goals {
  font-weight: 600;
  text-shadow: none; }

tr > td {
  font-weight: 400; }

/*=========================================
14. Forms
=========================================== */
form {
  text-align: left; }
  form + p,
  form input + p,
  form textarea + p {
    margin-top: .8rem; }

input[type='text'],
input[type='email'],
input[type='tel'],
input[type='url'],
input[type='search'],
input[type='password'] {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  border-radius: 0; }

input,
button,
select {
  display: inline-block;
  font-size: 1.6rem;
  font-weight: 400;
  height: 4.8rem;
  margin: 0;
  padding: .7rem;
  position: relative;
  width: 100%; }

input[type='radio'],
input[type='checkbox'] {
  height: auto;
  padding: 4px;
  width: auto; }

button[type='submit'],
textarea {
  width: 100%; }

textarea {
  padding: .7rem; }

button {
  cursor: pointer;
  text-align: center;
  width: auto; }

.button {
  cursor: pointer;
  display: inline-block;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 4.8rem;
  min-width: 16rem;
  padding: 0 1.6rem;
  text-align: center; }
  .button svg {
    font-size: 2.4rem; }

.button.radius,
input.radius {
  border-radius: 2.4rem; }

button,
input[type='submit'] {
  font-weight: 400;
  letter-spacing: .1rem;
  text-transform: uppercase; }

.plans .button {
  margin-left: auto;
  margin-right: auto;
  width: 50%; }

.try {
  display: block;
  font-size: 1.6rem;
  margin-top: 1.6rem; }

fieldset {
  padding: 2.4rem; }

legend {
  border: 0;
  font-weight: 400;
  letter-spacing: .1rem;
  padding: 1.6rem 2.4rem;
  text-align: center;
  text-transform: uppercase;
  width: 100%; }

input:focus,
textarea:focus,
select:focus {
  border-width: 1px; }

a.button:hover,
button[type='submit']:hover,
input[type='submit']:hover {
  -webkit-transform: scale(1.01);
          transform: scale(1.01); }

:disabled,
button:disabled:hover {
  cursor: not-allowed; }

.user input {
  margin-bottom: 0; }
  .user input[type='email'], .user input[type='search'], .user input[type='text'] {
    width: 100%; }
    @media (min-width: 500px) {
      .user input[type='email'], .user input[type='search'], .user input[type='text'] {
        float: left;
        width: 70%; } }

.user button,
.user input[type='submit'] {
  left: 0;
  width: 100%; }
  @media (min-width: 500px) {
    .user button,
    .user input[type='submit'] {
      cursor: pointer;
      width: 30%; } }

/* Buttons/Badges */
@media (min-width: 500px) {
  [class*='button'] + [class*='button'] {
    margin-left: 1.8rem; } }

@media (max-width: 499px) {
  [class*='button'] + [class*='button'] {
    margin-top: .8rem; } }

/*=== App Store Badges === */
/* Change width and height: 216x64px, 162x48px, 135x40... */
[class*='badge-'] {
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: .6rem;
  display: inline-block;
  height: 40px;
  line-height: 4rem;
  text-indent: -4000px;
  width: 135px; }
  [class*='badge-']:hover {
    opacity: .7; }
  @media (min-width: 1024px) {
    [class*='badge-'] {
      height: 48px;
      line-height: 4.8rem;
      width: 162px; } }
  @media (min-width: 500px) {
    [class*='badge-'] + [class*='badge-'] {
      margin-left: 1.8rem; } }
  @media (max-width: 499px) {
    [class*='badge-'] + [class*='badge-'] {
      margin-top: .8rem; } }

.badge-ios {
  background-image: url("../images/bt-appstore.png"); }

.badge-android {
  background-image: url("../images/bt-playstore.png"); }

/*=========================================
15. Longform
=========================================== */
/* -- Posts = .wrap.longform -- */
.longform {
  width: 72rem;
  /* Why 72rem=720px?
  90-95 characters per line = better reading speed */
  /* Mobile: video full width */ }
  .longform .alignleft,
  .longform .alignright {
    max-width: 40%; }
  .longform img.aligncenter,
  .longform figure.aligncenter {
    margin-bottom: 3.2rem;
    margin-top: 3.2rem; }
  .longform ul,
  .longform ol {
    margin-bottom: 3.2rem; }
  .longform ul ol,
  .longform ol ul,
  .longform ul ul,
  .longform ol ol {
    margin-bottom: 0; }
  .longform figcaption p,
  .longform [class*='text-pull-'] p {
    font-size: 1.6rem;
    line-height: 2.4rem; }
  .longform .text-pull.embed {
    margin-left: -2.4rem;
    margin-right: -2.4rem;
    padding-bottom: 60.6%; }
  @media (min-width: 1280px) {
    .longform [class*='text-pull-'] {
      max-width: 32%; }
    .longform .text-pull-right {
      margin-right: -256px; }
    .longform .text-pull-left {
      margin-left: -256px; } }
  @media (min-width: 1024px) {
    .longform .text-quote {
      margin-left: -4.8rem;
      margin-right: -4.8rem; } }

/*=========================================
16. SAFARI BUGS (flex-wrap)
Solution: stackoverflow.com/questions/34250282/flexbox-safari-bug-flex-wrap
=========================================== */
.flexblock:before,
.flexblock:after,
.grid:before,
.grid:after,
.cta:before,
.cta:after {
  width: 0; }

/*==============================================
18. Slides Index: Thumbnails navigation gallery
================================================ */
#webslides-zoomed {
  -ms-flex-line-pack: start;
      align-content: flex-start;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  min-height: 100vh;
  position: relative;
  z-index: 2; }
  #webslides-zoomed.disabled {
    left: -100000px;
    position: absolute; }
  #webslides-zoomed .slide {
    height: 400%;
    width: 400%; }
    @media screen and (orientation: portrait), screen and (max-width: 768px) and (orientation: landscape) {
      #webslides-zoomed .slide {
        height: 200%;
        width: 200%; } }
    @media (max-aspect-ratio: 2 / 3) {
      #webslides-zoomed .slide {
        height: 200%;
        width: 200%; } }
  @media (min-width: 1024px) {
    #webslides-zoomed > .wrap {
      padding-bottom: 12rem;
      padding-top: 12rem; } }
  #webslides-zoomed > .wrap > .grid > .column {
    -ms-flex-item-align: auto;
        align-self: auto;
    -webkit-box-flex: 0;
        -ms-flex: 0 1 auto;
            flex: 0 1 auto;
    -webkit-box-ordinal-group: 1;
        -ms-flex-order: 0;
            order: 0;
    position: relative;
    width: 25%; }
    @media screen and (max-width: 567px) {
      #webslides-zoomed > .wrap > .grid > .column {
        width: 100%; } }
    @media screen and (min-width: 568px) and (max-width: 1024px) {
      #webslides-zoomed > .wrap > .grid > .column {
        width: 50%; } }
    @media screen and (max-width: 567px) and (orientation: portrait) {
      #webslides-zoomed > .wrap > .grid > .column {
        width: 100%; } }
    #webslides-zoomed > .wrap > .grid > .column > .wrap-zoom {
      border-radius: .3rem;
      display: inline-block;
      height: 25vh;
      overflow: hidden;
      position: relative;
      -webkit-transition: .3s;
      transition: .3s; }
      @media screen and (max-width: 567px) {
        #webslides-zoomed > .wrap > .grid > .column > .wrap-zoom {
          height: 50vh; } }
      @media screen and (min-width: 568px) and (max-width: 1023px) {
        #webslides-zoomed > .wrap > .grid > .column > .wrap-zoom {
          height: 33vh; } }
      @media screen and (orientation: portrait) {
        #webslides-zoomed > .wrap > .grid > .column > .wrap-zoom {
          height: 50vw; } }
      #webslides-zoomed > .wrap > .grid > .column > .wrap-zoom:hover {
        -webkit-transform: scale(1.02);
                transform: scale(1.02);
        z-index: 2; }
      #webslides-zoomed > .wrap > .grid > .column > .wrap-zoom.current {
        -webkit-transform: scale(1.08);
                transform: scale(1.08); }
    #webslides-zoomed > .wrap > .grid > .column > .wrap-zoom > .zoom-layer {
      background: transparent;
      cursor: pointer;
      height: 100%;
      position: absolute;
      width: 100%; }
  #webslides-zoomed .column > .wrap-zoom > .slide {
    clip: rect(0 auto auto 0);
    display: -webkit-box !important;
    display: -ms-flexbox !important;
    display: flex !important;
    left: 0;
    position: absolute;
    top: 0;
    -webkit-transform: scale(0.25) translate(-150%, -150vh);
            transform: scale(0.25) translate(-150%, -150vh); }
    @media screen and (orientation: portrait), screen and (max-width: 768px) and (orientation: landscape) {
      #webslides-zoomed .column > .wrap-zoom > .slide {
        -webkit-transform: scale(0.5) translate(-50%, -50%);
                transform: scale(0.5) translate(-50%, -50%); } }
    @media (max-aspect-ratio: 2 / 3) {
      #webslides-zoomed .column > .wrap-zoom > .slide {
        -webkit-transform: scale(0.5) translate(-50%, -50%);
                transform: scale(0.5) translate(-50%, -50%); } }
  #webslides-zoomed .column {
    opacity: 0;
    -webkit-transform: scale(1.2);
            transform: scale(1.2);
    -webkit-transition: opacity .4s, -webkit-transform .4s;
    transition: opacity .4s, -webkit-transform .4s;
    transition: opacity .4s, transform .4s;
    transition: opacity .4s, transform .4s, -webkit-transform .4s;
    -webkit-transition-delay: .2s;
            transition-delay: .2s; }
  #webslides-zoomed.in .column {
    opacity: 1;
    -webkit-transform: scale(1);
            transform: scale(1); }

.text-slide-number {
  display: inline-block;
  margin: .8rem auto;
  text-align: center; }

#webslides {
  -webkit-transition: -webkit-filter .3s;
  transition: -webkit-filter .3s;
  transition: filter .3s;
  transition: filter .3s, -webkit-filter .3s; }
  #webslides.disabled, #webslides.zooming {
    position: fixed;
    width: 100%;
    z-index: 0; }
  #webslides.disabled {
    /*
    filter: blur(10px);
    transform: scale(1.1);
    */
    /* Blur makes scroll no accesible */
    width: calc(100% - 10px); }

/*=========================================
17. PRINT
=========================================== */
@media print {
  @page {
    margin: .5cm;
    size: A4 landscape; }
  * {
    background: transparent !important;
    color: #000 !important;
    -webkit-filter: none !important;
            filter: none !important;
    text-shadow: none !important; }
  html,
  body,
  #webslides {
    height: auto !important;
    overflow: auto !important;
    width: auto !important; }
  #webslides {
    overflow-x: auto !important;
    overflow-y: auto !important; }
  section,
  .slide {
    display: -webkit-box !important;
    display: -ms-flexbox !important;
    display: flex !important;
    height: auto !important; }
  section * {
    -webkit-animation: none;
            animation: none; }
  table,
  figure {
    page-break-inside: avoid; }
  #counter,
  #navigation {
    display: none; } }

/*=========================================
19. Colors
=========================================== */
/* -- Disable elastic scrolling/bounce:
webslides.js will add .ws-ready automatically. Don't worry :) -- */
body {
  background-color: #f7f9fb;
  color: #333; }

:focus {
  -webkit-box-shadow: 0 0 2px #96bbee;
          box-shadow: 0 0 2px #96bbee; }

svg {
  fill: currentColor; }

[class*='bg-'] a,
[class*='bg-gradient-'] a {
  color: #bce; }

.bg-brown a {
  color: #c23; }

a,
.bg-white a,
.bg-light a,
.bg-gradient-white a {
  color: #44d; }

a:hover {
  color: #3af; }

.flexblock li > a,
[class*='bg-'] li > a,
[class*='bg-gradient-'] li > a,
article header a {
  color: inherit; }

hr {
  background: radial-gradient(ellipse at center, rgba(0, 20, 80, 0.2) 0, rgba(255, 255, 255, 0) 75%); }

hr:after {
  background-color: rgba(255, 255, 255, 0.8);
  color: #333; }

abbr,
acronym {
  border-bottom: 1px dotted #f7f9fb; }

mark,
ins {
  background-color: rgba(221, 238, 255, 0.8);
  color: inherit; }

::-moz-selection {
  background-color: rgba(221, 238, 255, 0.8); }

::-webkit-selection {
  background-color: rgba(221, 238, 255, 0.8); }

::selection {
  background-color: rgba(221, 238, 255, 0.8); }

pre {
  background: #fff;
  border: 1px solid rgba(0, 20, 80, 0.1);
  -webkit-box-shadow: 0 8px 16px rgba(0, 20, 80, 0.04), 0 4px 16px rgba(0, 0, 0, 0.08);
          box-shadow: 0 8px 16px rgba(0, 20, 80, 0.04), 0 4px 16px rgba(0, 0, 0, 0.08); }

pre:hover {
  -webkit-box-shadow: 0 8px 16px rgba(0, 40, 160, 0.08), 0 8px 24px rgba(0, 0, 0, 0.08);
          box-shadow: 0 8px 16px rgba(0, 40, 160, 0.08), 0 8px 24px rgba(0, 0, 0, 0.08); }

code,
[class*='bg-'] pre {
  background-color: rgba(255, 255, 255, 0.09); }

.bg-white code {
  background: rgba(0, 20, 80, 0.03); }

/*================================================
Slides - Backgrounds <section class="bg-primary">
================================================== */
/*3 Corp Colors*/
.bg-primary {
  background-color: #44d; }

.bg-secondary {
  background-color: #67d; }

.bg-light {
  background-color: #f7f9fb; }

.bg-black {
  background-color: #111; }

.bg-black-blue {
  background-color: #123; }

.bg-blue {
  background-color: #346; }

.bg-brown {
  background-color: #f9f8f2; }

.bg-gray {
  background-color: #d5d9e2; }

.bg-green {
  background-color: #077; }

.bg-purple {
  background-color: #62b; }

.bg-red {
  background-color: #c23; }

.bg-white {
  background-color: #fff; }

.bg-facebook {
  background-color: #3b5998; }

[class*='bg-'] .bg-white {
  color: #333;
  text-shadow: none; }

/* BG Apple Keynote*/
.bg-apple {
  background: -webkit-gradient(linear, left top, left bottom, from(#000), color-stop(50%, #1a2028), to(#293845));
  background: linear-gradient(to bottom, #000 0%, #1a2028 50%, #293845 100%); }

/*Font Color*/
.bg-trans-dark,
.bg-trans-gradient,
.bg-primary,
.bg-secondary,
.bg-blue,
.bg-green,
.bg-purple,
.bg-red,
.bg-facebook,
.bg-apple,
[class*='bg-black'],
[class*='bg-gradient-'] {
  color: #fff;
  text-shadow: 0 1px 0 #013; }

.bg-light p {
  color: #456; }

.bg-brown p {
  color: #666; }

/*Transparent/Opacity*/
.bg-trans-dark {
  background: rgba(0, 0, 0, 0.8); }

.bg-trans-light {
  background: rgba(0, 0, 0, 0.2); }

/*Covers/Longforms...*/
.bg-trans-gradient {
  background: -webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, 0.8)), to(transparent));
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 100%); }

/*Horizontal Gradient*/
.bg-gradient-h {
  background: linear-gradient(134deg, #32b 0, #62b 100%); }

/*Vertical Gradient*/
.bg-gradient-v {
  background: -webkit-gradient(linear, left bottom, left top, from(#62b), to(#32b));
  background: linear-gradient(to top, #62b 0%, #32b 100%); }

/*Radial Gradient*/
.bg-gradient-r {
  background: radial-gradient(ellipse at center, #62b 0%, #32b 100%); }

/*White Gradient (vertical)*/
.bg-gradient-white {
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0, #f2f4f6), to(#fff));
  background: linear-gradient(180deg, #f2f4f6 0, #fff 100%);
  color: #333;
  text-shadow: none; }

/*Gray Gradient (horizontal)*/
.bg-gradient-gray {
  background: -webkit-gradient(linear, left top, right top, color-stop(0, #f7f9fb), to(#dee2e6));
  background: linear-gradient(90deg, #f7f9fb 0, #dee2e6 100%);
  color: #333;
  text-shadow: none; }

/*Border/Frame*/
.frame {
  border: 0.8rem solid #fff; }

[class*='background'].frame {
  border-width: .2rem; }

/*Layer/Box Shadow*/
.shadow,
.pre {
  position: relative; }

.shadow:before,
.shadow:after {
  -webkit-box-shadow: 0 16px 24px rgba(0, 20, 80, 0.3);
          box-shadow: 0 16px 24px rgba(0, 20, 80, 0.3); }

/*============================
TYPOGRAPHY
============================== */
/* -- Horizontal separator  -- */
.text-separator:before {
  background-color: rgba(170, 0, 0, 0.8); }

/* -- Pull Quote (Right/Left)  -- */
[class*='text-pull-'] {
  border-top: 4px solid rgba(0, 0, 0, 0.5); }

img[class*='text-pull-'],
figure[class*='text-pull-'] {
  border-top: 0; }

/* -- Context  -- */
[class*='bg-'] .text-context:before {
  background-color: #fff; }

.text-context:before,
.bg-white .text-context:before {
  background-color: rgba(0, 20, 80, 0.2); }

/* -- Text shadow  -- */
.text-shadow {
  text-shadow: 0 0 40px rgba(0, 0, 0, 0.5); }

/* -- time, ampersands, prepositions (for, of...), symbols...
[class*='card-'] time,
h1 span {
  color: #abd;
}

/* -- <pre> comment  -- */
.code-comment {
  color: rgba(70, 170, 130, 0.9);
  text-shadow: none; }

/*=========================================
Header/Nav
=========================================== */
header[role='banner'] {
  background-color: #fff; }

.logo a {
  color: inherit; }

nav[role='navigation'] li.active a {
  background-color: #555;
  color: #fff; }

nav[role='navigation'] li a {
  background-color: rgba(50, 50, 50, 0.9);
  color: #fff; }
  nav[role='navigation'] li a:hover {
    background-color: rgba(50, 50, 50, 0.7); }

nav li.twitter a:hover {
  background-color: #1da1f3; }

nav li.facebook a:hover {
  background-color: #3b5998; }

nav li.linkedin a:hover {
  background-color: #1683bb; }

nav li.dribbble a:hover {
  background-color: #ea4c89; }

nav li.github a:hover {
  background-color: #60b044; }

nav li.email a:hover {
  background-color: #dd4b39; }

/*===================================================
.flexblock li hover/active
===================================================== */
.flexblock li.active a,
.metrics li:hover,
.specs li:hover,
.reasons li:hover {
  background-color: rgba(0, 20, 80, 0.03); }

/*=========================================
Features & Clients List
=========================================== */
.features li,
.clients li {
  background-color: rgba(255, 255, 255, 0.9); }

[class*='bg-'] .features li,
[class*='bg-'] .clients li {
  background-color: rgba(255, 255, 255, 0.1); }

.features li:hover,
.clients li:hover {
  -webkit-box-shadow: 0 8px 16px rgba(0, 20, 80, 0.02), 0 4px 16px rgba(0, 0, 0, 0.08);
          box-shadow: 0 8px 16px rgba(0, 20, 80, 0.02), 0 4px 16px rgba(0, 0, 0, 0.08); }

/*============================
.flexblock with border
============================== */
.border {
  border-bottom: 1px solid rgba(0, 20, 80, 0.1);
  border-right: 1px solid rgba(0, 20, 80, 0.1); }

.border li {
  border-left: 1px solid rgba(0, 20, 80, 0.1);
  border-top: 1px solid rgba(0, 20, 80, 0.1); }

.flexblock.border li li {
  border: 0; }

/*===========================================
flexblock.steps
============================================= */
.steps li:nth-child(1) {
  background-color: #e8eef7; }

.steps li:nth-child(2) {
  background-color: #dde5f3; }

.steps li:nth-child(3) {
  background-color: #cdd8ec; }

.steps li:nth-child(4) {
  background-color: #bbcdec; }

.process {
  border-bottom: 15px solid transparent;
  border-top: 15px solid transparent; }

.steps li:hover,
.steps.blink li:hover > a {
  background-color: #b8cef7; }

@media (min-width: 1024px) {
  .process.step-2 {
    border-left-color: #e8eef7; }
  .process.step-3 {
    border-left-color: #dde5f3; }
  .process.step-4 {
    border-left-color: #cdd8ec; }
  .steps li:hover + li [class*='step-'] {
    border-left-color: #b8cef7; } }

/*=========================================================
Items: You can use for settings, drag&drop, close/delete...
=========================================================== */
.specs li:after {
  background: -webkit-gradient(linear, left top, right top, from(rgba(0, 20, 80, 0)), color-stop(50%, rgba(0, 20, 80, 0.2)), to(rgba(0, 20, 80, 0)));
  background: linear-gradient(to right, rgba(0, 20, 80, 0) 0%, rgba(0, 20, 80, 0.2) 50%, rgba(0, 20, 80, 0) 100%); }

.specs li:last-child:after {
  background: none; }

/*=========================================================
Why/Steps/Motivation/Reasons -  Decimal/Numbers
=========================================================== */
.reasons li:after {
  background: -webkit-gradient(linear, left top, right top, from(rgba(0, 20, 80, 0)), color-stop(50%, rgba(0, 20, 80, 0.2)), to(rgba(0, 20, 80, 0)));
  background: linear-gradient(to right, rgba(0, 20, 80, 0) 0%, rgba(0, 20, 80, 0.2) 50%, rgba(0, 20, 80, 0) 100%); }

.reasons li:last-child:after {
  background: none; }

/*=========================================
Overlays
=========================================== */
.overlay {
  background-color: rgba(0, 0, 0, 0.2); }

li:hover .overlay {
  background-color: rgba(0, 0, 0, 0.1); }

.overlay,
.overlay a {
  color: #fff;
  text-shadow: 0 1px 0 #111; }

/*=========================================
Gallery li+.overlay+image
=========================================== */
.gallery li {
  background-color: rgba(0, 20, 80, 0.06);
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.03);
          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.03); }

.gallery li figcaption {
  background-color: #fff; }

.flexblock.gallery li:hover {
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.08);
          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.08); }

.gallery li footer {
  border-top: 1px solid rgba(0, 20, 80, 0.1); }

.gallery li a {
  color: #333;
  text-shadow: none; }

.flesblock.gallery li a footer {
  color: #aaa; }

/*Arrow */
.gallery li figcaption:before {
  border: 0.8rem solid #000;
  border-color: transparent transparent #fff #fff; }

/*=========================================
Plans / Pricing
=========================================== */
.plans > li div,
.flexblock.plans li:hover div {
  background-color: #fff; }

.plans > li:hover,
.plans > li:nth-child(2) {
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1); }

.plans:hover li:nth-child(2):not(:hover) {
  -webkit-box-shadow: none;
          box-shadow: none; }

.plans li h2 {
  background-color: rgba(0, 20, 80, 0.5);
  color: #fff; }

.plans ul li {
  border-bottom: 1px solid rgba(0, 20, 80, 0.1); }
  .plans ul li:last-child {
    border-bottom: 0; }

.plans > li > a {
  color: #333;
  text-shadow: none; }

/*============================
Activity/CV/Timeline/News
============================== */
.activity li {
  border-top: 0.1rem solid rgba(0, 20, 80, 0.1); }

.activity li:hover {
  background-color: rgba(0, 20, 80, 0.02); }

/*=========================================
Resume/Work/CV/Portfolio
=========================================== */
.work-label,
.work li a {
  border-bottom: 1px solid rgba(0, 20, 80, 0.1); }

.work li:nth-child(odd) > a {
  background-color: rgba(0, 20, 80, 0.03); }

.work li a:hover {
  background-color: rgba(0, 20, 80, 0.04); }

/*===========================================
Clients / Services / Logos...
============================================= */
.clients.border figcaption {
  border-top: 1px solid rgba(0, 20, 80, 0.1); }

/*====================
LOGOS
====================== */
/* --- Images (black logo/image) --- */
img.blacklogo {
  background: none;
  -webkit-filter: grayscale(100%) brightness(10%) contrast(100%);
          filter: grayscale(100%) brightness(10%) contrast(100%); }

/* --- Images (gray logo/image) --- */
img.graylogo {
  -webkit-filter: grayscale(100%) brightness(10%) contrast(10%);
          filter: grayscale(100%) brightness(10%) contrast(10%); }

/* --- Images (white Logo/Image) --- */
img.whitelogo {
  -webkit-filter: brightness(0) invert(1);
          filter: brightness(0) invert(1); }

/* --- Logo/Images Hover --- */
li:hover img.blacklogo,
li:hover img.graylogo,
img.blacklogo:hover,
img.graylogo:hover {
  background: none;
  -webkit-filter: grayscale(0%);
          filter: grayscale(0%);
  -webkit-transition: all .6s ease;
  transition: all .6s ease; }

/*=========================================================
Cards
=========================================================== */
[class*='card-'] > a {
  color: inherit; }

/* ---  card ul specs --- */
.description > li {
  border-bottom: 1px solid rgba(0, 20, 80, 0.1); }

.description > li:last-child {
  border-bottom: 0; }

/*== Figure Background === */
[class*='card-'][class*='bg-'] figure {
  background-color: rgba(0, 20, 80, 0.06); }

/*== Ficaption Cards === */
[class*='card'] figcaption,
[class*='card'] figcaption a {
  background: -webkit-gradient(linear, left top, left bottom, from(transparent), to(rgba(0, 0, 0, 0.2)));
  background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.2) 100%);
  color: #fff; }

/*===CTA (Call to Action - Numbers, Price, Promo...)  ===== */
@media (min-width: 768px) {
  .cta .benefit {
    -o-border-image: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.4) 50%, transparent) 1 100%;
       border-image: -webkit-gradient(linear, left top, right top, from(transparent), color-stop(50%, rgba(0, 0, 0, 0.4)), to(transparent)) 1 100%;
       border-image: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.4) 50%, transparent) 1 100%;
    border-left-width: 1px;
    border-style: solid; } }

/*=========================================
Tables
=========================================== */
table td,
th,
thead {
  border: 1px solid rgba(0, 0, 0, 0.5); }

thead {
  background-color: rgba(0, 0, 0, 0.3); }

tr:nth-child(even) > td {
  background: rgba(0, 0, 0, 0.1); }

tr > td {
  border-top: 1px solid rgba(0, 0, 0, 0.5); }

td:hover,
tr:nth-child(even) > td:hover {
  background-color: rgba(255, 255, 255, 0.5); }

/*============================
Browser (Screenshots)
============================== */
.browser {
  border: 1px solid rgba(0, 20, 80, 0.1); }

.browser:hover {
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1); }

/*=== Topbar === */
.browser:before {
  background-color: rgba(0, 20, 80, 0.1);
  border-bottom: 1px solid rgba(0, 20, 80, 0.2);
  color: rgba(255, 255, 255, 0.9); }

.browser:hover:before {
  background-color: rgba(0, 20, 80, 0.12);
  color: #fff; }

/*=========================================
Forms
=========================================== */
input,
textarea {
  background-color: #fafbfc; }

input:focus,
textarea:focus {
  background-color: #fff;
  -webkit-box-shadow: 0 0 5px #51cbee;
          box-shadow: 0 0 5px #51cbee; }

input:focus::-moz-placeholder {
  color: #ddd; }

input:focus::-webkit-input-placeholder {
  color: #ddd; }

a.button,
[class*='badge-'],
button[type='submit'],
input {
  -webkit-box-shadow: 0 10px 16px -8px rgba(0, 20, 80, 0.3);
          box-shadow: 0 10px 16px -8px rgba(0, 20, 80, 0.3); }

button,
input,
select,
textarea,
button[type='submit'],
input[type='submit'],
.button,
.button:hover,
button[type='submit']:hover,
input[type='submit']:hover {
  border: 1px solid #44d; }

button[type='submit'],
input[type='submit'],
.button,
.button:hover,
button[type='submit']:hover,
input[type='submit']:hover {
  background-color: #44d;
  color: #fff;
  text-shadow: 0 1px 0 #123; }

.button:active,
button[type='submit']:active,
input[type='submit']:active {
  background-color: #17d; }

.ghost,
.ghost:hover {
  background: none;
  color: inherit;
  text-shadow: none; }

.bg-primary select,
.bg-primary textarea,
.bg-primary .button,
.bg-primary button,
.bg-primary button:hover,
.bg-primary input,
[class*='bg-gradient-'] .button,
[class*='bg-'] a.button.ghost {
  border-color: #fff; }

[class*='bg-'] a.button {
  color: #fff; }

.bg-white a.button.ghost,
.bg-gradient-white a.button.ghost {
  border: 1px solid #44d;
  color: #333; }

:disabled,
button:disabled:hover {
  background-color: #eee;
  border-color: #eee;
  color: #ccc; }

fieldset {
  background-color: rgba(0, 20, 80, 0.2);
  border: 1px solid #44d; }

legend {
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff; }

/* Inputs/Buttons - hover */
input:hover,
select:hover {
  -webkit-box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
          box-shadow: 0 0 8px rgba(0, 0, 0, 0.3); }

/* App Store Badges */
[class*='badge-'] {
  background-color: #000;
  border: 1px solid #345; }

form .flexblock li:hover {
  background-color: rgba(0, 0, 0, 0.05); }

/*============================
Table of Contents
============================== */
.toc,
.toc ol > li:before,
.chapter {
  background-color: #f7f9fb; }

.toc li .toc-page:before {
  border-bottom: 1px dotted rgba(0, 0, 0, 0.9); }

/*============================
Slides (Counter/Arrows)
============================== */
#counter,
#navigation a {
  color: #abc; }

#webslides:hover #navigation a:hover {
  background-color: rgba(0, 10, 40, 0.8);
  color: #fff; }

/*============================
Footer
============================== */
footer[role='contentinfo'] {
  background-color: #fff; }

/*============================
Slides Index
============================== */
#webslides-zoomed {
  background: rgba(0, 10, 40, 0.8); }

#webslides-zoomed .column > .wrap-zoom {
  background-color: #f7f9fb;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.04);
          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.04);
  color: #333; }
  #webslides-zoomed .column > .wrap-zoom:hover {
    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.08);
            box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.08); }
  #webslides-zoomed .column > .wrap-zoom.current {
    border: 0.6rem solid rgba(0, 20, 255, 0.2); }

.text-slide-number {
  color: #abc; }

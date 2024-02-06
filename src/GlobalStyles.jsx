import { createGlobalStyle } from "styled-components";
import PretendardLight from "assets/fonts/Pretendard-Light.woff2";
import PretendardBold from "assets/fonts/Pretendard-Bold.woff2";
import { COLORS } from "components/common/Colors";

const GlobalStyle = createGlobalStyle`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
 margin: 0;
 padding: 0;
 border: 0;
 font-size: 100%;
 font: inherit;
 vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
 display: block;
}
body {
 line-height: 1;
 background: linear-gradient(185deg, ${COLORS.lilac} 0%, ${COLORS.light} 25%, ${COLORS.pastel} 50%, ${COLORS.lavender} 75%, ${COLORS.advent} 100%);
    -ms-overflow-style: none; 
    scrollbar-width: none; 
}
ol, ul {
 list-style: none;
}
blockquote, q {
 quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
 content: '';
 content: none;
}
table {
 border-collapse: collapse;
 border-spacing: 0;
}
* {
    box-sizing: border-box;
}
@font-face {
	font-family: 'Pretendard';
	src: url(${PretendardLight}) format('woff2');
	font-weight: 300;
}
@font-face {
	font-family: 'Pretendard';
	src: url(${PretendardBold}) format('woff2');
	font-weight: 700;
} 

body {
	min-height: 100vh;
	font-family: 'Pretendard';
  margin: 0;
}

`;

export default GlobalStyle;

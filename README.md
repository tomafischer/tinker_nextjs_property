# Classes
https://www.udemy.com/course/modern-html-css-from-the-beginning

https://github.com/bradtraversy/modern-html-css-course-files

# Tailwind
```html
 <script src="https://cdn.tailwindcss.com"></script>
```

## Plugins
Live Server
Prettier - code formatter by prettier.io
Multiple cursor case preserve
PostCSS Language Support

## sites
https://cssgradient.io/  
# Tips
Use `!` for a default html template

F12, or option+command+i on mac for opening dev tools

Don't use `<br />` for styling

Clases for CSS and ids for javascript

## random photo
```
<img src="https://picsum.photos/1100/300" alt="">
```

## Keyboard Shortcuts
ctrl + shift + p : command pallat
ctrl + b: toggle side bar
ctrl + j: toggle bottum bar

Ctrl+d : select the next occurance
Alt + Commnd  + arrow : move 
Alt + Shift  + arraow : copy
Ctrl + arrow : move by workd
Shift + Home : select to the beginning
Shift + End:  select to the end

## Fonts
poppins
Roboto
Arial
Open Sans

fonts.google.com
300, 400, 500, 600, 700
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700&display=swap" rel="stylesheet">
```
```css
body{
  font-family: 'Poppins', sans-serif;
}
```
# Block vs inline
https://www.geeksforgeeks.org/difference-between-block-elements-and-inline-elements/
| Inline Elements  |	Block Elements |
|--|--|
| Inline elements occupy only sufficient width required. |	 Block Elements occupy the full width irrespective of their sufficiency. |
| Inline elements don’t start in a new line.  |	Block elements always start in a line. |
| Inline elements allow other inline elements to sit behind.	| Block elements doesn’t allow other elements to sit behind |
| Inline elements don’t have top and bottom margin 	| Block elements have top and bottom margin.| 

![Block vs Inline](readme_images/block_vs_inline.png)

# Tailwind
```html
 <script src="https://cdn.tailwindcss.com"></script>
```

# install
in the tailwind folder
``` bash
# init npm  -y puts defaults in and don't ask too many questions
npm init -y

#now we follow the tailwind docu
npm install -D tailwindcss
npx tailwindcss init
### now the visual studio intelisenece should work

## create intput css base on
@tailwind base;
@tailwind components;
@tailwind utilities;


### run tailwind
npx tailwindcss -i ./input.css -o ./output.css --watch
```

# nextjs
```js
type Props = {
  children: React.ReactNode;
}

export default function RootLayout({
  children }: Props) {
  return (
    <html lang="en">
      <body
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}


```
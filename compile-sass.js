const sass = require('node-sass');
const chokidar = require('chokidar');
const fs = require('fs');

const inputFile = 'styles.scss';
const outputFile = 'styles.css';

// Function to compile Sass to CSS
const compileSass = () => {
  sass.render(
    {
      file: inputFile,
      outputStyle: 'expanded',
    },
    (error, result) => {
      if (error) {
        console.error('Sass compilation error:', error);
      } else {
        fs.writeFileSync(outputFile, result.css);
        console.log('Sass compiled successfully!');
      }
    }
  );
};

// Compile Sass initially
compileSass();

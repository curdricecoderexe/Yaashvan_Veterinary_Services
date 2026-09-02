const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');

const replacements = [
  { search: /rounded-\[4rem\]/g, replace: 'rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem]' },
  { search: /rounded-\[3\.5rem\]/g, replace: 'rounded-[2rem] sm:rounded-[3rem] lg:rounded-[3.5rem]' },
  { search: /rounded-\[3rem\]/g, replace: 'rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem]' },
  { search: /p-12 lg:p-20/g, replace: 'p-6 sm:p-10 lg:p-20' },
  { search: /p-12/g, replace: 'p-6 sm:p-8 lg:p-12' },
  { search: /p-10 md:p-16/g, replace: 'p-6 sm:p-8 md:p-16' },
  { search: /p-10 md:p-14/g, replace: 'p-6 sm:p-8 md:p-14' },
  { search: /mb-32/g, replace: 'mb-16 md:mb-24 lg:mb-32' },
  { search: /gap-16 lg:gap-24/g, replace: 'gap-10 lg:gap-24' },
  { search: /gap-12/g, replace: 'gap-8 lg:gap-12' },
  { search: /text-5xl md:text-7xl/g, replace: 'text-4xl sm:text-5xl md:text-7xl' },
  { search: /text-4xl font-heading/g, replace: 'text-3xl sm:text-4xl font-heading' },
  { search: /text-3xl font-heading/g, replace: 'text-2xl sm:text-3xl font-heading' },
  // Adding specific fixes for flex wrap on buttons
  { search: /flex gap-4/g, replace: 'flex flex-wrap gap-4' },
];

fs.readdirSync(pagesDir).forEach(file => {
  if (file.endsWith('Page.jsx')) {
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    let modified = false;
    replacements.forEach(({ search, replace }) => {
      // check if it's already replaced (rough check)
      if (content.match(search)) {
        content = content.replace(search, replace);
        modified = true;
      }
    });

    // We also want to fix the absolute circles that might cause scroll on mobile if they overflow
    if (content.includes('blur-[120px]')) {
      content = content.replace(/w-\[800px\] h-\[800px\]/g, 'w-[400px] sm:w-[800px] h-[400px] sm:h-[800px]');
      content = content.replace(/w-\[600px\] h-\[600px\]/g, 'w-[300px] sm:w-[600px] h-[300px] sm:h-[600px]');
      content = content.replace(/w-\[500px\] h-\[500px\]/g, 'w-[250px] sm:w-[500px] h-[250px] sm:h-[500px]');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${file}`);
    }
  }
});

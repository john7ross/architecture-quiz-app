const ghpages = require('gh-pages');
const path = require('path');

const options = {
  branch: 'gh-pages',
  repo: 'https://github.com/john7ross/architecture-quiz-app.git',
  message: 'Deploy to GitHub Pages',
  dotfiles: true
};
ghpages.publish(path.join(__dirname, 'build'), options, function(err) {
  if (err) {
    console.error('Error deploying to GitHub Pages:', err);
  } else {
    console.log('Successfully deployed to GitHub Pages!');
  }
});

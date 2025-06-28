import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const port = 3000;

  var testBlogPosts = [
    { id: 1, imageName: 'Holi_FP_B118_1004194166.jpg',title: 'First Blog Post', content: 'This is the content of the first blog post.', date: '2023-10-01' },
    { id: 2, imageName: 'Outdoor_99D_B022_100365573.jpg', title: 'Second Blog Post', content: 'This is the content of the second blog post.', date: '2024-10-01' },
    { id: 3, imageName: 'smart home_110110747.jpg', title: 'Third Blog Post', content: 'This is the content of the third blog post.', date: '2024-10-23' }
  ];

// Static files middleware
app.use(express.static('public'));

//middleware that only parses urlencoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
}); 

app.get('/', (req, res) => {
  res.render('index.ejs', { blogPosts: testBlogPosts });
});

app.get('/about', (req, res) => {
  res.render('about.ejs');
});

app.get('/contact', (req, res) => {
  res.render('contact.ejs');
});

app.get('/blog/:id', (req, res) => {
  const { id } = req.params;
  // Here you would typically fetch the blog post from a database
  res.render('blog.ejs', { id });
});


//Add new blog post via POST endppoint
app.post('/blog', (req, res) => {
  console.log(req.body);
  const { title, content, image } = req.body;
  // Here you would typically save the blog post to a database
  testBlogPosts.push({
    id: testBlogPosts.length + 1,
    imageName: image ? image.name : 'default.jpg', // Use uploaded image or default
    title,
    content,
    date: new Date().toISOString().split('T')[0] // Current date in YYYY-MM-DD format
  });
  console.log(`New blog post created: ${title} - ${content}`);
  res.redirect('/');
});

//Update existing blog post via PUT endpoint
app.put('/blog/:id', (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  console.log(`Blog post ${id} updated: ${title} - ${content}`);
  res.redirect(`/blog/${id}`);
});

import Post from '../models/post_model';

export const createPost = (req, res) => {
	const post = new Post();
	post.title = req.body.title;
	
	post.save()
	.then(result => {
	  res.json({ message: 'Post created!' });
	})
	.catch(error => {
	  res.json({ error });
	});
}
export const getPosts = (req, res) => {
	res.send('posts should be returned here');
}
export const getPost = (req, res) => {
	res.send('post should be returned here');
}
export const deletePost = (req, res) => {
  res.send('delete a post here');
};
export const updatePost = (req, res) => {
  res.send('update a post here');
};

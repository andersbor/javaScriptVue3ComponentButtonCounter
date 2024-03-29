appComp.component('blog-post', {
    data() {
        return {
            posts: [
                { id: 1, title: 'My journey with Vue' },
                { id: 2, title: 'Blogging with Vue' },
                { id: 3, title: 'Why Vue is so fun' }
            ]
        }
    },
    props: ['title'], // "parameters" to the component
    template: `
    My blog posts
    <BlogPost
  	v-for="post in posts"
	  :key="post.id"
  	:title="post.title"
	></BlogPost>`
})

appComp.mount("#components-demo")
//object literals

// const blogs = [
//     { title: 'why mac & cheese rules', likes: 30},
//     { title: '10 to projects with JS', likes: 50}
// ];

// console.log(blogs);

let user = {
    name: 'meer',
    age: 30,
    email: 'meer@gmail.com',
    location: 'dhaka',
    blogs: [
        { title: 'why mac & cheese rules', likes: 30},
        { title: '10 to projects with JS', likes: 50}
    ],
    login:  function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('user logged out');
    },
    logBlogs: function(){
        // console.log(this.blogs);
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        });
    }
};

// user.login();
// user.logout();
user.logBlogs();
console.log(this);

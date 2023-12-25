var posts=["2023/12/22/hello-world/","2023/12/23/论文总结1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
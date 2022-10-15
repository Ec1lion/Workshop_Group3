let posts = [
    {
        title:"Google",
        desc:"forda wow",
        date:"Sept. 7, 2022",
        pic: "Google.png",
    },
    {
        title:"Sci Class",
        desc:"is hard",
        date:"Sept. 20, 2022",
        pic:""
    },
    {
        title: "Workshop Day 2",
        desc: "is complicated",
        date: "Oct. 1, 2022",
        pic:"BMICalcSS.png"
    },
];

function addPost(obj){
    document.getElementById("posts-cont").innerHTML +=`
     <div class="posts-right">
       <h1>${obj.title}</h1>
     </div>
     <div class="post-wrap">
     <img class="thumbnail"
     src="${obj.pic}"/>
     <div class="description">
     <h3>${obj.desc}</h3>
    <div>
    `;
}

for (var i = 0; i < posts.length; i++ )
 {
    addPost(posts[i])
}
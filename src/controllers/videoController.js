let videos = [{
    title:"#1 First Video",
    rating:5, 
    comments:2,
    createdAt:"20 minutes ago",
    views:1,
    id:1
},
{
    title:"#2 Video",
    rating:5, 
    comments:2,
    createdAt:"12 minutes ago",
    views:45,
    id:2
},
{
    title:"#3 Video",
    rating:5, 
    comments:2,
    createdAt:"1 minutes ago",
    views:45,
    id:3
},

]

export const trending = (req,res) =>{
    res.render("home",{pageTitle:"Home",videos});
} 
export const watch = (req,res) => {
    const {id}  = req.params;
    //const id = req.params.id
    const video = videos[id-1];
    return res.render("watch",{pageTitle: `Watching ${video.title}`, video})
}
export const getEdit = (req,res) => {
    const {id}  = req.params;
    const video = videos[id-1];
    return res.render("edit",{pageTitle:`Editing ${video.title}`,video});
}

export const postEdit = (req,res) =>{
    const {id}  = req.params;
    const {title} = req.body;
    // videos.title =  title <---- it's not working
    videos[id-1].title = title;
    return res.redirect(`/videos/${id}`)
}

export const getUpload = (req,res) => {
    return res.render("upload",{pageTitle:"Upload Video"})
}

export const postUpload = (req,res) => {
    const {title} = req.body;
   const newVideo = {
    title,
    rating:5, 
    comments:2,
    createdAt:"1 minutes ago",
    views:45,
    id:videos.length+1
   };
   videos.push(newVideo);
    return res.redirect("/");
}


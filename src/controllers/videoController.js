export const trending = (req,res) => res.render("home");

export const see = (req,res) => res.render("watch");

export const edit = (req,res) =>  {
    return res.render("Edit");
}
export const upload = (req,res) => res.send("Upload");
export const deleteVideo = (req,res)=> res.send("Delete")

export const search = (req,res) => res.send("Search")


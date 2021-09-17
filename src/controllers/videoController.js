export const trending = (req,res) => res.send("Home Page Videos");
export const see = (req,res) => {
    return res.send(`watch video ${req.params.id}`);
}
export const edit = (req,res) =>  {
    return res.send("Edit");
}
export const upload = (req,res) => res.send("Upload");
export const deleteVideo = (req,res)=> res.send("Delete")

export const search = (req,res) => res.send("Search")


PennController.ResetPrefix(null)

newTrial(
    newButton("Start the experiment")
        .center()
        .print()
        .wait()
)

Template("pcibex.csv", row =>
    newTrial(
        defaultImage.size(100,75)
        ,
        newTimer("pre-trial", 500).start().wait()
        ,
        newText("description", row.Description)
            .center()
            .print()
        ,
        newCanvas("images", 850, 400)
            .add(   0 , 0 , newImage("target1", row.TargetPicture1) )
            .add(  250, 0 , newImage("target2", row.TargetPicture2) )
            .add(  500, 0 , newImage("target3", row.TargetPicture3) )
            .add( 750 , 0 , newImage("other", "q.png") )
            .center()
            .print()
        ,
        newSelector("selection")
            .add(getImage("target1"), getImage("target2"), getImage("target3"), getImage("other"))
            .shuffle()
            .keys("F", "G","H","J")
            .frame("solid 5px purple")
            .log()
            .once()
            .wait()
        ,
        newTimer("post-trial", 500).start().wait()
    )
    .log("item", row.item)
    .log("condition", row.condition)


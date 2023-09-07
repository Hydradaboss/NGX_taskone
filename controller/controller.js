const sc = require("http-status-codes")


const taskone = async (req,res)=>{
    var date = new Date()
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var currentDayOfWeek = date.getDay();
    const Current = daysOfWeek[currentDayOfWeek]
    var currentDateUTCPlus2 = new Date(date.getTime() + 2 * 60 * 60 * 1000);
    var formattedDate = currentDateUTCPlus2.toLocaleString('en-US', {  hour12: false });
    const returnobj = {
        "slackname":"Backend Developer",
        "Current day": Current,
        "Utc Time": formattedDate,
        "track":"Backend",
        "Github file repo": "",
        "Github link":"",
        "Statuscode": "200"
    }
    try {
        const slack = req.query.slackname
        const track = req.query.track
        if(slack != returnobj.slackname && track != returnobj.track){
            res.send("Wrong Query parameter")
        }
        res.send(returnobj)
    } catch (error) {
        console.log(error)
    }
}

module.exports = taskone
const sc = require("http-status-codes")
const moment = require("moment")


const taskone = async (req,res)=>{
    var date = new Date()
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var currentDayOfWeek = date.getDay();
    const Current = daysOfWeek[currentDayOfWeek]
    const currentUtcTime = moment().utcOffset(0).format('YYYY-MM-DDTHH:mm:ss[Z]');
    const returnobj = {
        "slack_name":"OlaniyiOluwaseyi",
        "current_day": Current,
        "utc_time": currentUtcTime,
        "track":"backend",
        "github_file_url":"https://github.com/Hydradaboss/NGX_taskone/blob/main/app.js",
        "github_repo_url":"https://github.com/Hydradaboss/NGX_taskone",
        "status_code": 200
    }
    try {
        const slack = req.query.slackname
        const track = req.query.track
        if(slack !== returnobj.slackname || track !== returnobj.track){
            res.send("Wrong Query parameter")
        }else{
            res.send(returnobj)}
    } catch (error) {
        console.log(error)
    }
}

module.exports = taskone
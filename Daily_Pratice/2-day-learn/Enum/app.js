var Months;
(function (Months) {
    Months[Months["Jan"] = 0] = "Jan";
    Months[Months["Feb"] = 1] = "Feb";
    Months[Months["Mar"] = 2] = "Mar";
    Months[Months["Apr"] = 3] = "Apr";
    Months[Months["May"] = 4] = "May";
    Months[Months["Jun"] = 5] = "Jun";
    Months[Months["Jul"] = 6] = "Jul";
    Months[Months["Aug"] = 7] = "Aug";
    Months[Months["Sep"] = 8] = "Sep";
    Months[Months["Oct"] = 9] = "Oct";
    Months[Months["Nov"] = 10] = "Nov";
    Months[Months["Dec"] = 11] = "Dec";
})(Months || (Months = {}));
;
function isItSummer(month) {
    var isSummer;
    switch (month) {
        case Months.Jun:
        case Months.Jul:
        case Months.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}
console.log(isItSummer(Months.Sep)); // true
var level;
(function (level) {
    level[level["low"] = 1] = "low";
    level[level["medium"] = 2] = "medium";
    level[level["super"] = 3] = "super";
    level[level["excelent"] = 4] = "excelent";
})(level || (level = {}));
;
var current_level = level.excelent;
console.log('current_level', current_level);
var ApprovalStatus;
(function (ApprovalStatus) {
    ApprovalStatus[ApprovalStatus["draft"] = 0] = "draft";
    ApprovalStatus[ApprovalStatus["submitted"] = 1] = "submitted";
    ApprovalStatus[ApprovalStatus["approved"] = 2] = "approved";
    ApprovalStatus[ApprovalStatus["rejected"] = 3] = "rejected";
})(ApprovalStatus || (ApprovalStatus = {}));
;
var request = {
    id: 1,
    status: ApprovalStatus.rejected,
    description: 'Please approve this request'
};
if (request.status === ApprovalStatus.approved) {
    console.log('Send email to the Applicant...');
}
if (request.status == ApprovalStatus.rejected) {
    console.log('Mail is not send..');
}

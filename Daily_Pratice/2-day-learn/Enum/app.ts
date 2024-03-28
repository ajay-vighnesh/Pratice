enum Months {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
};

function isItSummer(month: Months) {
    let isSummer: boolean;
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


enum level {
    low = 1, medium , super , excelent
};

let current_level = level.excelent;
console.log('current_level',current_level);


enum ApprovalStatus {
    draft,
    submitted,
    approved,
    rejected
};

const request =  {
    id: 1,
    status: ApprovalStatus.rejected,
    description: 'Please approve this request'
};

if(request.status === ApprovalStatus.approved) {
    
    console.log('Send email to the Applicant...');
}

if (request.status == ApprovalStatus.rejected) {
    console.log('Mail is not send..')
}
import Guest from "./models/Guest";

const validateQR = "https://events.pnu.edu.sa/_layouts/15/SPServices/ScanAttendanceService.asmx/ValidateGraduatedStudent";
const submitAttendance = "https://events.pnu.edu.sa/_layouts/15/SPServices/ScanAttendanceService.asmx/ApplyGraduationAttendance";

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
myHeaders.append("Accept", "text/html");

class GuestAPI {
    validateQRCode = async (input: string) => {

        var urlencoded = new URLSearchParams();
        urlencoded.append("ScannedQR_String", "Engineering_222222222_Student");
        urlencoded.append("myKey", "PNU_EVENTS_4466");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            credentials: 'include',
            redirect: 'follow'
        };

        fetch("https://events.pnu.edu.sa/_layouts/15/SPServices/ScanAttendanceService.asmx/ValidateGraduatedStudent", requestOptions)
            .then(response => {
                console.log(response);
                response.text()
            })
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    submitGuest = async () => {

    }
}

export default new GuestAPI();
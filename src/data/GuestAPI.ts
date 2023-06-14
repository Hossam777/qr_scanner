import Guest from "./models/Guest";

const validateQR = "https://events.pnu.edu.sa/_layouts/15/SPServices/ScanAttendanceService.asmx/ValidateGraduatedStudent";
const submitAttendance = "https://events.pnu.edu.sa/_layouts/15/SPServices/ScanAttendanceService.asmx/ApplyGraduationAttendance";

const defaultHeaders = {
    "Content-Type": "application/json",
};

class GuestAPI {
    validateQRCode = async (input: string) => {
        return new Promise((resolve, reject) => {
            fetch(validateQR + 'ScannedQR_String=' + input + '&myKey=PNU_EVENTS_4466', {
                method: "GET",
                headers: defaultHeaders,
            })
                .then(response => {
                    if (response.ok) {
                        console.log(response);
                        return response.json();
                    } else {
                        throw response.status;
                    }
                })
                .then(resolve)
                .catch(reject);
        });
    }
    submitGuest = async () => {

    }
}

export default new GuestAPI();
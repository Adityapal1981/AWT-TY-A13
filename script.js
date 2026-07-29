var events = ["Hackathon", "Coding Contest", "Robotics Workshop"];

for (var i = 0; i < events.length; i++) {
    document.getElementById("eventList").innerHTML += "<li>" + events[i] + "</li>";
}

function checkForm() {

    var name = document.getElementById("name").value;
    var roll = document.getElementById("roll").value;
    var event = document.getElementById("event").value;
    var age = document.getElementById("age").value;
    var attended = document.getElementById("events").value;

    var regex = /^[A-Za-z ]+$/;

    if (name == "" || roll == "" || event == "" || age == "" || attended == "") {
        alert("Fill all fields");
        return false;
    }

    if (regex.test(name) == false) {
        alert("Enter valid name");
        return false;
    }

    if (attended == 0) {
        document.getElementById("result").innerHTML = "Participation Level: Beginner";
    }
    else if (attended <= 3) {
        document.getElementById("result").innerHTML = "Participation Level: Active Participant";
    }
    else if (attended <= 6) {
        document.getElementById("result").innerHTML = "Participation Level: Enthusiast";
    }
    else {
        document.getElementById("result").innerHTML = "Participation Level: Event Champion";
    }

    return false;
}
guests_array = [];

function submit() {
    var guests_name = document.getElementById("guestName").value;
    console.log(guests_name);
    guests_array.push(guests_name);
    var length_guests_array = guests_array.length;
    console.log(length_guests_array);
}

function show() {
    var i = guests_array.join("<br>");
    console.log(i);
    document.getElementById("Names_List").innerHTML = i;
    document.getElementById("GuestList").style.display = "inline-block";

}

function sorting() {
    guests_array.sort();
    var i = guests_array.join("<br>");
    console.log(i);
    document.getElementById("Sorted_Names").innerHTML = i;
}

function search() {
    var s = document.getElementById("s1").value;
    var found = 0;
    for (j = 0; j < guests_array.length; j++) {
        if (s == guests_array[j]) {
            found = found + 1;
        }
    }
    document.getElementById("Search_Results").innerHTML = (s + " found " + found + " time (s). ")
    console.log(s + " found " + found + " time (s). ")
}
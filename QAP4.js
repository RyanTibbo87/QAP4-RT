const MotelCustomer = {
  //List for MotelCustomer
  name: "Ryan Tibbo",
  birthDate: new Date(1995, 7, 2), //Date shown as 1995-7-2
  gender: "Male",
  roomPreference: [
    "Non-smoking",
    "Pets Allowed",
    "Room Size",
    "Number of Beds",
    "Safety and Security",
    "Room Condition",
    "Check-in/Check-out Times",
  ],
  //List for room preference
  paymentMethod: "Credit Card",
  mailingAddress: {
    street: "23 Dunns Lane",
    city: "Conception Bay South",
    province: "NL",
    country: "Canada",
    postalCode: "A1X7W9",
  },
  phoneNumber: "1-709-222-2222",
  checkInDate: new Date(2024, 4, 13), // Makes a new date (YEAR, MONTH, DAY)
  checkOutDate: new Date(2024, 4, 23), // Makes a new date (YEAR, MONTH, DAY)

  calculateAge: function () {
    const today = new Date();
    let age = today.getFullYear() - this.birthDate.getFullYear();
    return age;
  },

  calculateStayDuration: function () {
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const checkInTime = this.checkInDate.getTime();
    const checkOutTime = this.checkOutDate.getTime();
    const durationInMilliseconds = checkOutTime - checkInTime;
    return Math.ceil(durationInMilliseconds / millisecondsPerDay);
  },
};

const customerDescription = `Name: ${MotelCustomer.name} 
Age: ${MotelCustomer.calculateAge()}
Gender: ${MotelCustomer.gender}
Room Preferences: ${MotelCustomer.roomPreference.join(", ")}
Payment Method: ${MotelCustomer.paymentMethod}
Mailing Address: ${MotelCustomer.mailingAddress.street}, ${
  MotelCustomer.mailingAddress.city
}, ${MotelCustomer.mailingAddress.province}, ${
  MotelCustomer.mailingAddress.country
}, ${MotelCustomer.mailingAddress.postalCode}
Phone Number: ${MotelCustomer.phoneNumber}
Check-In Date: ${MotelCustomer.checkInDate.toDateString()}
Check-Out Date: ${MotelCustomer.checkOutDate.toDateString()}
Duration of Stay: ${MotelCustomer.calculateStayDuration()} days`;

console.log(customerDescription); //sends to console
let roomPreferenceSentence = `This motel offers ${MotelCustomer.roomPreference[0]} with ${MotelCustomer.roomPreference[1]}, nice ${MotelCustomer.roomPreference[2]}s, with a ${MotelCustomer.roomPreference[3]} options, great ${MotelCustomer.roomPreference[4]}, ${MotelCustomer.roomPreference[5]}s are lovely to make your stay enjoyable.`;
console.log(roomPreferenceSentence); //sends to console

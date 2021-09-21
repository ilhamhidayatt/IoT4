function setup(){
	
	pinMode(0, INPUT);  //merupakan input dari Motion Sensor
	pinMode(1, OUTPUT); // merupakan output untuk alarm
	pinMode(2, OUTPUT); // merupakan output untuk Home Speaker
	pinMode(3, OUTPUT); // merupakan output untuk LED
	pinMode(4, OUTPUT); // merupakan output untuk LED
	pinMode(5, OUTPUT); // merupakan output untuk healting elemented
	pinMode(6, OUTPUT); // merupakan output untuk motor
	
}

function loop(){ // digunakan untuk menciptakan sebuah kondisi dan mengulangi

	var motion = digitalRead(0); // digunakan untuk mendeklarasikan motion/gerakan sebagai input.
	Serial.println(motion); // mengeluarkan data dari motion.
	
	if (motion == 1023){ 
		digitalWrite(1, HIGH)// Jika Ada Gerakan mouse maka alarm akan menyala
		digitalWrite(2, HIGH)// Jika Ada Gerakan mouse maka Speaker akan menyala
		digitalWrite(3, HIGH)// Jika Ada Gerakan mouse maka LED akan menyala
		digitalWrite(4, HIGH)// Jika Ada Gerakan mouse maka LED akan menyala
		digitalWrite(5, HIGH)// Jika Ada Gerakan mouse maka healting elemented akan menyala
		digitalWrite(6, HIGH)// Jika Ada Gerakan mouse maka motor akan menyala
	}
	
	else {
		digitalWrite(1, LOW);// jika tidak terjadi gerakan dari cursor mouse mendekati sensor gerakan maka alarm akan mati.
		digitalWrite(2, LOW);// jika tidak terjadi gerakan dari cursor mouse mendekati sensor gerakan maka speaker akan mati.
		digitalWrite(3, LOW);// jika tidak terjadi gerakan dari cursor mouse mendekati sensor gerakan maka led akan mati.
		digitalWrite(4, LOW);// jika tidak terjadi gerakan dari cursor mouse mendekati sensor gerakan maka led akan mati.
		digitalWrite(5, LOW);// jika tidak terjadi gerakan dari cursor mouse mendekati sensor gerakan maka healting elemneted akan mati.
		digitalWrite(6, LOW);// jika tidak terjadi gerakan dari cursor mouse mendekati sensor gerakan maka motor akan mati.
}
}
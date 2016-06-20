var zodArray = [
{
	sign: "Aries",
	date: "March 21 - April 19",
	strength: "Strengths: courageous, determined, confident, enthusiastic, optimistic, honest, passionate",
	weakness: "Weaknesses: impatient, moody, short-tempered, impulsive, aggressive",
	image: "img/ari.jpg"
},
{
	sign: "Taurus",
	date: "April 20 - May 20th",
	strength: "Strengths: reliable, patient, practical, devoted, responsible, stable",
	weakness: "Weaknesses: stubborn, possessive, uncompromising",
	image: "img/taur.jpg"
},
{
	sign: "Gemini",
	date: "May 21 - June 20",
	strength: "Strengths: gentle, affectionate, curious, adaptable, ability to learn quickly and exchange ideas",
	weakness: "Weaknesses: nervous, inconsistent, indecisive",
	image: "img/gemi.jpg"
},
{
	sign: "Cancer",
	date: "June 21 - July 22",
	strength: "Strengths: tenacious, highly imaginative, loyal, emotional, sympathetic, persuasive",
	weakness: "Weaknesses: moody, pessimistic, suspicious, manipulative, insecure",
	image: "img/can.jpg"
},
{
	sign: "Leo",
	date: "July 23 - August 22",
	strength: "Strengths: creative, passionate, generous, warm-hearted, cheerful, humorous",
	weakness: "Weaknesses: arrogant, stubborn, self-centered, lazy, inflexible",
	image: "img/leo.jpg"
},
{
	sign: "Virgo",
	date: "August 23 – September 22",
	strength: "Strengths: loyal, analytical, kind, hardworking, practical",
	weakness: "Weaknesses: shyness, worry, overly critical of self and others, all work and no play",
	image: "img/virg.jpg"
},
{
	sign: "Libra",
	date: "September 23 - October 22",
	strength: "Strengths: cooperative,diplomatic, gracious, fair-minded, social",
	weakness: "Weaknesses: indecisive, avoids confrontations, will carry a grudge, self-pity",
	image: "img/libra.jpg"
},
{
	sign: "Scorpio",
	date: "October 23 - November 21",
	strength: "Strengths: resourceful, brave, passionate, stubborn, a true friend",
	weakness: "Weaknesses: distrusting, jealous, secretive, violent",
	image: "img/scor.jpg"
},
{
	sign: "Sagittarius",
	date: "November 22 - December 21",
	strength: "Strengths: generous, idealistic, great sense of humor",
	weakness: "Weaknesses: promises more than can deliver, very impatient, will say anything no matter how undiplomatic",
	image: "img/sag.jpg"
},
{
	sign: "Capricorn",
	date: "December 22 - January 19",
	strength: "Strengths: responsible, disciplined, self-control, good managers",
	weakness: "Weaknesses: know-it-all, unforgiving, condescending, expecting the worst",
	image: "img/cap.jpg"
},
{
	sign: "Aquarius",
	date: "January 20 - February 18",
	strength: "Strengths: progressive, original, independent, humanitarian",
	weakness: "Weaknesses: runs from emotional expression, temperamental, uncompromising, aloof",
	image: "img/aqu.jpg"
},
{
	sign: "Pisces",
	date: "February 19 - March 20",
	strength: "Strengths: compassionate, artistic, intuitive, gentle, wise, musical",
	weakness: "Weaknesses: fearful, overly trusting, sad, desire to escape reality, can be a victim or a martyr",
	image: "img/pisc.jpg"
}]

function getInfo() {
	var horoscope = document.getElementById("horoscope").value 

	for (i = 0; i < zodArray.length; i++) {
		if (horoscope === zodArray[i].sign) {
			document.getElementById("yourSign").innerHTML = zodArray[i].sign
			document.getElementById("zodPic").src = zodArray[i].image
			document.getElementById("yourStrengths").innerHTML = zodArray[i].strength
			document.getElementById("yourWeaknesses").innerHTML = zodArray[i].weakness
		} else {
			document.getElementById("yourSign").innerHtml = "That is not one of the Zodiac signs in existance. Try again!"

		}
	}
}
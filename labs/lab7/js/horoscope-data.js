var mySign = "Leo"
var my_birth_month = "July"
var my_birth_day = 23
var my_lucky_number = 14

var horoscope_description = "Leos are action-oriented and eager to sit down and make things happen. They are also natural-born leaders, often taking charge and pulling to the front of the pack. Those born under the sign are meant to shine and enjoy being in the spotlight. As a result, they love receiving attention and adoration from others."
var belief = true

var sign = document.getElementById('sign')
sign.innerHTML = "My Sign:  " + mySign

var birthday = document.getElementsByClassName('birthday')

birthday[0].innerHTML = "Birthday: " + my_birth_month + " " + my_birth_day

var lucky = document.getElementsByClassName('luckyNum')

lucky[0].innerHTML = "Lucky Number: " + my_lucky_number

var horoscope = document.getElementsByTagName('p')

horoscope[0].innerHTML = "my horoscope... " + horoscope_description

horoscope[1].innerHTML = "Do I believe in astrology? " + belief


var my_mood_rating = 4
var partner1_mood_rating = 3.5
var partner2_mood_rating = 5

var average_mood_rating = my_mood_rating + partner1_mood_rating + partner2_mood_rating / 3


horoscope[2].innerHTML = "Todays mood rating for Leo: " + my_mood_rating + " Out of 5. The average mood rating of Leo, Aries, Gemini is: " + average_mood_rating

var all_signs = ["Aries", "Taurus", "Cancer", "Libra", "Capricorn", "Leo", "Scorpio", "Aquarius", "Gemini", "Virgo", "Sagittarius", "Pisces" ]

var my_sign_in_list = all_signs[5]
var partner1_sign = all_signs[0]
var partner2_sign = all_signs[8]

horoscope[2].innerHTML = "My zodiac sign is: " + my_sign_in_list

horoscope[3].innerHTML = "Shina's zodiac sign is: " + partner1_sign

horoscope[4].innerHTML = "Jimmy's zodiac sign is: " + partner2_sign


var horoscope_description_list = ["Today is a day for new beginnings. Embrace change and seize opportunities.", 
    "Your determination will lead to success today. Stay focused on your goals.", 
    "Communication is key today. Express yourself clearly and listen to others.", 
    "Trust your intuition. It will guide you in making the right decisions.", 
    "Your creativity shines today. Use it to inspire and lead others.",
    "Pay attention to the details. Your meticulous work will pay off.",
    "Balance is essential. Find harmony in all aspects of your life."]


horoscope_description_list[0] = "You are awesome, you're going to do great today."


var chosen_description = horoscope_description_list[0]

var partner1_chosen_description = horoscope_description_list[1]

var partner2_chosen_description = horoscope_description_list[2]

horoscope_description_list[0] = "You are awesome, you're going to do great today."

horoscope[5].innerHTML = "Leo Horoscope: " + chosen_description

horoscope[6].innerHTML = "Aries Horoscope: " + partner1_chosen_description

horoscope[7].innerHTML = "Gemini Horoscope: " + partner2_chosen_description






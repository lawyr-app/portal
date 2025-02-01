const courts = [
  {
    index: 0,
    name: "A.D.J Kotputali",
  },
  {
    index: 1,
    name: "Additional District and Session Court, Vasai",
  },
  {
    index: 2,
    name: "ADJ Court, Makrana",
  },
  {
    index: 3,
    name: "Agriculture Land Tribunal",
  },
  {
    index: 4,
    name: "Aizawl District Court",
  },
  {
    index: 5,
    name: "Alibag District Court",
  },
  {
    index: 6,
    name: "Alipurduar Court, Jalpaiguri",
  },
  {
    index: 7,
    name: "Allahabad High Court",
  },
  {
    index: 8,
    name: "Amaravati High Court, Andhra Pradesh",
  },
  {
    index: 9,
    name: "Andhra Pradesh Administrative Tribunal",
  },
  {
    index: 10,
    name: "Andhra Pradesh Cooperative Tribunal",
  },
  {
    index: 11,
    name: "Anzaw(East Division)",
  },
  {
    index: 12,
    name: "AP State Consumer Forum, Hyderabad",
  },
  {
    index: 13,
    name: "Appellate Tribunal For Electricity, Delhi",
  },
  {
    index: 14,
    name: "Appellate Tribunal for Foreign Exchange (ATFE)",
  },
  {
    index: 15,
    name: "Appellate Tribunal of Value Added Tax, Delhi",
  },
  {
    index: 16,
    name: "Arbitral Tribunal",
  },
  {
    index: 17,
    name: "Arbitration Centre -Karnataka",
  },
  {
    index: 18,
    name: "Arbitration Tribunal, Bhopal",
  },
  {
    index: 19,
    name: "Armed Forces Tribunal (AFT) Chandigarh",
  },
  {
    index: 20,
    name: "Armed Forces Tribunal (AFT) Chennai",
  },
  {
    index: 21,
    name: "Armed Forces Tribunal (AFT) Delhi",
  },
  {
    index: 22,
    name: "Armed Forces Tribunal (AFT) Guwahati",
  },
  {
    index: 23,
    name: "Armed Forces Tribunal (AFT) Jaipur",
  },
  {
    index: 24,
    name: "Armed Forces Tribunal (AFT) Kochi",
  },
  {
    index: 25,
    name: "Armed Forces Tribunal (AFT) Kolkata",
  },
  {
    index: 26,
    name: "Armed Forces Tribunal (AFT) Lucknow",
  },
  {
    index: 27,
    name: "Armed Forces Tribunal (AFT) Mumbai",
  },
  {
    index: 28,
    name: "Armed Forces Tribunal (AFT), Jammu",
  },
  {
    index: 29,
    name: "Armed Forces Tribunal, Circuit Bench, Jodhpur",
  },
  {
    index: 30,
    name: "Bagalkot Court, Karnataka",
  },
  {
    index: 31,
    name: "Baghpat Consumer Dispute Redressal Forum",
  },
  {
    index: 32,
    name: "Bangalore District Court",
  },
  {
    index: 33,
    name: "Bankshall Court, Kolkata",
  },
  {
    index: 34,
    name: "Bankura District Court",
  },
  {
    index: 35,
    name: "Bhilwara District Consumer Forum",
  },
  {
    index: 36,
    name: "Bihar Land Tribunal",
  },
  {
    index: 37,
    name: "Bilaspur District Forum",
  },
  {
    index: 38,
    name: "Bilaspur High Court, Chhattisgarh",
  },
  {
    index: 39,
    name: "Board for Industrial and Financial Reconstruction",
  },
  {
    index: 40,
    name: "Board Of Revenue Rajasthan, Ajmer",
  },
  {
    index: 41,
    name: "Bombay High Court",
  },
  {
    index: 42,
    name: "Bombay High Court",
  },
  {
    index: 43,
    name: "Bombay High Court",
  },
  {
    index: 44,
    name: "Bombay High Court",
  },
  {
    index: 45,
    name: "Bombay High Court Panaji Bench",
  },
  {
    index: 46,
    name: "Calcutta High Court",
  },
  {
    index: 47,
    name: "Calcutta High Court",
  },
  {
    index: 48,
    name: "Central Administrative Tribunal (CAT) Ahmedabad",
  },
  {
    index: 49,
    name: "Central Administrative Tribunal (CAT) Allahabad",
  },
  {
    index: 50,
    name: "Central Administrative Tribunal (CAT) Bangalore",
  },
  {
    index: 51,
    name: "Central Administrative Tribunal (CAT) Chandigarh",
  },
  {
    index: 52,
    name: "Central Administrative Tribunal (CAT) Cuttack",
  },
  {
    index: 53,
    name: "Central Administrative Tribunal (CAT) Delhi",
  },
  {
    index: 54,
    name: "Central Administrative Tribunal (CAT) Ernakulam",
  },
  {
    index: 55,
    name: "Central Administrative Tribunal (CAT) Guwahati",
  },
  {
    index: 56,
    name: "Central Administrative Tribunal (CAT) Gwalior",
  },
  {
    index: 57,
    name: "Central Administrative Tribunal (CAT) Hyderabad",
  },
  {
    index: 58,
    name: "Central Administrative Tribunal (CAT) Indore",
  },
  {
    index: 59,
    name: "Central Administrative Tribunal (CAT) Jabalpur",
  },
  {
    index: 60,
    name: "Central Administrative Tribunal (CAT) Jaipur",
  },
  {
    index: 61,
    name: "Central Administrative Tribunal (CAT) Jodhpur",
  },
  {
    index: 62,
    name: "Central Administrative Tribunal (CAT) Kolkata",
  },
  {
    index: 63,
    name: "Central Administrative Tribunal (CAT) Lucknow",
  },
  {
    index: 64,
    name: "Central Administrative Tribunal (CAT) Madras",
  },
  {
    index: 65,
    name: "Central Administrative Tribunal (CAT) Mumbai",
  },
  {
    index: 66,
    name: "Central Administrative Tribunal (CAT) Nagpur",
  },
  {
    index: 67,
    name: "Central Administrative Tribunal (CAT) Patna",
  },
  {
    index: 68,
    name: "Central Administrative Tribunal (CAT) Ranchi",
  },
  {
    index: 69,
    name: "Central Electricity Regulatory Commission (CERC)",
  },
  {
    index: 70,
    name: "Central Government Industrial Tribunal (CGIT)",
  },
  {
    index: 71,
    name: "Chandigarh State Consumer Disputes Redressal Commission (SCDRC)",
  },
  {
    index: 72,
    name: "Changlang(East Division)",
  },
  {
    index: 73,
    name: "Chief Metropolitan Magistrate Court, Bangalore",
  },
  {
    index: 74,
    name: "Circuit Bench Of Calcutta High Court, Jalpaiguri",
  },
  {
    index: 75,
    name: "Circuit Bench, Aurangabad",
  },
  {
    index: 76,
    name: "City Civil And Sessions Court, Ahmedabad",
  },
  {
    index: 77,
    name: "City Civil and Sessions Court, Chennai",
  },
  {
    index: 78,
    name: "City Civil Court, Bangalore",
  },
  {
    index: 79,
    name: "City Civil Court, Haldwani",
  },
  {
    index: 80,
    name: "City Civil Court, Hyderabad",
  },
  {
    index: 81,
    name: "City Civil Court, Kolkata",
  },
  {
    index: 82,
    name: "City Civil Court, Mumbai",
  },
  {
    index: 83,
    name: "City Civil Court, Secunderabad",
  },
  {
    index: 84,
    name: "Civil & Magistrate Courts, Visakhapatnam",
  },
  {
    index: 85,
    name: "Civil &amp; Criminal Court, Thalassery",
  },
  {
    index: 86,
    name: "Civil and Criminal Court, Mapusa",
  },
  {
    index: 87,
    name: "Civil and Criminal Court, Panaji",
  },
  {
    index: 88,
    name: "Civil Court Deoghar",
  },
  {
    index: 89,
    name: "Civil Court Junior Division, Vasai",
  },
  {
    index: 90,
    name: "Civil Court Koderma, Jharkhand",
  },
  {
    index: 91,
    name: "Civil Court Ramnagar",
  },
  {
    index: 92,
    name: "Civil Court Senior Division, Vasai",
  },
  {
    index: 93,
    name: "Civil Court, Azamgarh",
  },
  {
    index: 94,
    name: "Civil Court, Bagaha",
  },
  {
    index: 95,
    name: "Civil Court, Basti",
  },
  {
    index: 96,
    name: "Civil Court, Bokaro",
  },
  {
    index: 97,
    name: "Civil Court, Dabhoi",
  },
  {
    index: 98,
    name: "Civil Court, Giridih",
  },
  {
    index: 99,
    name: "Civil Court, Gorakhpur",
  },
  {
    index: 100,
    name: "Civil Court, Gyalshing, West Sikkim",
  },
  {
    index: 101,
    name: "Civil Court, Kartala",
  },
  {
    index: 102,
    name: "Civil Court, Katghora",
  },
  {
    index: 103,
    name: "Civil Court, Laxmangarh",
  },
  {
    index: 104,
    name: "Civil Court, Lucknow",
  },
  {
    index: 105,
    name: "Civil Court, Mathura",
  },
  {
    index: 106,
    name: "Civil Court, Muzaffarpur",
  },
  {
    index: 107,
    name: "Civil Court, Pali",
  },
  {
    index: 108,
    name: "Civil Court, Patna",
  },
  {
    index: 109,
    name: "Civil Court, Roorkee",
  },
  {
    index: 110,
    name: "Civil Court, Sherghati",
  },
  {
    index: 111,
    name: "Civil Court, Varanasi",
  },
  {
    index: 112,
    name: "Civil Courts, Ranchi",
  },
  {
    index: 113,
    name: "Commercial court",
  },
  {
    index: 114,
    name: "Company Law Board Chennai",
  },
  {
    index: 115,
    name: "Company Law Board Delhi (CLB)",
  },
  {
    index: 116,
    name: "Company Law Board Kolkata",
  },
  {
    index: 117,
    name: "Competition Commission of India",
  },
  {
    index: 118,
    name: "Consumer Commission",
  },
  {
    index: 119,
    name: "Consumer Court Chennai",
  },
  {
    index: 120,
    name: "Consumer Court, Guwahati",
  },
  {
    index: 121,
    name: "Consumer Court, Korba",
  },
  {
    index: 122,
    name: "Consumer Court, Mangaldai",
  },
  {
    index: 123,
    name: "Consumer Court, Mangalore",
  },
  {
    index: 124,
    name: "Consumer Court, Shalimar Bagh",
  },
  {
    index: 125,
    name: "Consumer Disputes Redressal Forum, Ahmedabad",
  },
  {
    index: 126,
    name: "Consumer Disputes Redressal Forum, Vadodara",
  },
  {
    index: 127,
    name: "Consumer District Forum, Mumbai",
  },
  {
    index: 128,
    name: "Consumer District Forum, Pune",
  },
  {
    index: 129,
    name: "Consumer Forum North East, Nand Nagri",
  },
  {
    index: 130,
    name: "Consumer Forum North, Tiz Hazari",
  },
  {
    index: 131,
    name: "Consumer Forum West, Janakpuri",
  },
  {
    index: 132,
    name: "Consumer Forum, Panchkula",
  },
  {
    index: 133,
    name: "Consumer Redressal Forum ,J&amp; K",
  },
  {
    index: 134,
    name: "Court Complex Charkhi Dadri",
  },
  {
    index: 135,
    name: "Court of Small Causes, Bandra",
  },
  {
    index: 136,
    name: "Court of Small Causes, Chennai",
  },
  {
    index: 137,
    name: "Court of Small Causes, Mumbai",
  },
  {
    index: 138,
    name: "Court of Small Causes, Pune",
  },
  {
    index: 139,
    name: "Courts Complex, Sardulgarh",
  },
  {
    index: 140,
    name: "Custom Excise & Service Tax Appellate Tribunal, Chandigarh",
  },
  {
    index: 141,
    name: "Custom Excise &amp; Service Tax Appellate Tribunal, Mumbai",
  },
  {
    index: 142,
    name: "Custom Excise and Service Tax Appellate Tribunal",
  },
  {
    index: 143,
    name: "Customs Excise And Service Tax Appellate Tribunal (CESTAT), Delhi",
  },
  {
    index: 144,
    name: "Customs Excise and Service Tax Appellate Tribunal, Ranchi",
  },
  {
    index: 145,
    name: "Customs, Excise and Service Tax Appellate Tribunal (CESTAT), Allahabad",
  },
  {
    index: 146,
    name: "Customs, Excise and Service Tax Appellate Tribunal, Chennai",
  },
  {
    index: 147,
    name: "Cyber Appellate Tribunal",
  },
  {
    index: 148,
    name: "Cyber Cell, Surat",
  },
  {
    index: 149,
    name: "Dakshin Kannada District Court",
  },
  {
    index: 150,
    name: "Debt Recovery Appellate Tribunal, Chennai",
  },
  {
    index: 151,
    name: "Debt Recovery Appellate Tribunal, Delhi",
  },
  {
    index: 152,
    name: "Debt Recovery Tribunal (DRT), Chennai",
  },
  {
    index: 153,
    name: "Debt Recovery Tribunal (DRT), Nagpur",
  },
  {
    index: 154,
    name: "Debt Recovery Tribunal (DRT), Visakhapatnam",
  },
  {
    index: 155,
    name: "Debts Recovery Appellate Tribunal Allahabad",
  },
  {
    index: 156,
    name: "Debts Recovery Appellate Tribunal, Allahabad",
  },
  {
    index: 157,
    name: "Debts Recovery Tribunal (DRT) Ahmedabad",
  },
  {
    index: 158,
    name: "Debts Recovery Tribunal (DRT) Allahabad",
  },
  {
    index: 159,
    name: "Debts Recovery Tribunal (DRT) Aurangabad",
  },
  {
    index: 160,
    name: "Debts Recovery Tribunal (DRT) Bangalore",
  },
  {
    index: 161,
    name: "Debts Recovery Tribunal (DRT) Chandigarh",
  },
  {
    index: 162,
    name: "Debts Recovery Tribunal (DRT) Chennai",
  },
  {
    index: 163,
    name: "Debts Recovery Tribunal (DRT) Coimbatore",
  },
  {
    index: 164,
    name: "Debts Recovery Tribunal (DRT) Cuttack",
  },
  {
    index: 165,
    name: "Debts Recovery Tribunal (DRT) Delhi",
  },
  {
    index: 166,
    name: "Debts Recovery Tribunal (DRT) Ernakulam",
  },
  {
    index: 167,
    name: "Debts Recovery Tribunal (DRT) Guwahati",
  },
  {
    index: 168,
    name: "Debts Recovery Tribunal (DRT) Hyderabad",
  },
  {
    index: 169,
    name: "Debts Recovery Tribunal (DRT) Jabalpur",
  },
  {
    index: 170,
    name: "Debts Recovery Tribunal (DRT) Jaipur",
  },
  {
    index: 171,
    name: "Debts Recovery Tribunal (DRT) Kolkata",
  },
  {
    index: 172,
    name: "Debts Recovery Tribunal (DRT) Lucknow",
  },
  {
    index: 173,
    name: "Debts Recovery Tribunal (DRT) Lucknow",
  },
  {
    index: 174,
    name: "Debts Recovery Tribunal (DRT) Madurai",
  },
  {
    index: 175,
    name: "Debts Recovery Tribunal (DRT) Mumbai",
  },
  {
    index: 176,
    name: "Debts Recovery Tribunal (DRT) Nagpur",
  },
  {
    index: 177,
    name: "Debts Recovery Tribunal (DRT) Patna",
  },
  {
    index: 178,
    name: "Debts Recovery Tribunal (DRT) Pune",
  },
  {
    index: 179,
    name: "Debts Recovery Tribunal (DRT) Ranchi",
  },
  {
    index: 180,
    name: "Debts Recovery Tribunal (DRT) Vishakhapatnam",
  },
  {
    index: 181,
    name: "Debts Recovery Tribunal (DRT), Chandigarh",
  },
  {
    index: 182,
    name: "Debts Recovery Tribunal, Coimbatore",
  },
  {
    index: 183,
    name: "Debts Recovery Tribunal, Dehradun",
  },
  {
    index: 184,
    name: "Debts Recovery Tribunal, Vellore",
  },
  {
    index: 185,
    name: "Delhi Co-operative Tribunal",
  },
  {
    index: 186,
    name: "Delhi High Court",
  },
  {
    index: 187,
    name: "Department of Commercial Tax Tribunal, Agra",
  },
  {
    index: 188,
    name: "Department of Information Technology, Mumbai",
  },
  {
    index: 189,
    name: "Dhanbad District Court",
  },
  {
    index: 190,
    name: "Distrcit Court, Ariyalur",
  },
  {
    index: 191,
    name: "Distrcit Court, Coimbatore",
  },
  {
    index: 192,
    name: "Distrcit Court, Cuddalore",
  },
  {
    index: 193,
    name: "Distrcit Court, Dharmapuri",
  },
  {
    index: 194,
    name: "Distrcit Court, Dindigul",
  },
  {
    index: 195,
    name: "Distrcit Court, Erode",
  },
  {
    index: 196,
    name: "Distrcit Court, Kanchipuram",
  },
  {
    index: 197,
    name: "Distrcit Court, Kanniyakumari",
  },
  {
    index: 198,
    name: "Distrcit Court, Karur",
  },
  {
    index: 199,
    name: "Distrcit Court, Krishnagiri",
  },
  {
    index: 200,
    name: "Distrcit Court, Nagapattinam",
  },
  {
    index: 201,
    name: "Distrcit Court, Namakkal",
  },
  {
    index: 202,
    name: "Distrcit Court, Perambalur",
  },
  {
    index: 203,
    name: "Distrcit Court, Pudukkottai",
  },
  {
    index: 204,
    name: "Distrcit Court, Ramanathapuram",
  },
  {
    index: 205,
    name: "Distrcit Court, Salem",
  },
  {
    index: 206,
    name: "Distrcit Court, Sivaganga",
  },
  {
    index: 207,
    name: "Distrcit Court, Thanjavur",
  },
  {
    index: 208,
    name: "Distrcit Court, The Nilgiris",
  },
  {
    index: 209,
    name: "Distrcit Court, Theni",
  },
  {
    index: 210,
    name: "Distrcit Court, Thiruvallur",
  },
  {
    index: 211,
    name: "Distrcit Court, Thiruvarur",
  },
  {
    index: 212,
    name: "Distrcit Court, Thoothukudi",
  },
  {
    index: 213,
    name: "Distrcit Court, Tiruchirappalli",
  },
  {
    index: 214,
    name: "Distrcit Court, Tiruppur",
  },
  {
    index: 215,
    name: "Distrcit Court, Tiruvannamalai",
  },
  {
    index: 216,
    name: "Distrcit Court, Villupuram",
  },
  {
    index: 217,
    name: "Distrcit Court, Virudhunagar",
  },
  {
    index: 218,
    name: "District & Session Court, Andaman & Nicobar Islands",
  },
  {
    index: 219,
    name: "District & Session Judge, Shillong",
  },
  {
    index: 220,
    name: "District & Sessions Court, Lakshadweep",
  },
  {
    index: 221,
    name: "District & Sessions Court, Silvassa",
  },
  {
    index: 222,
    name: "District &amp; Sessions Court of Arvalli, Modasa",
  },
  {
    index: 223,
    name: "District &amp; Sessions Court, Nadiad",
  },
  {
    index: 224,
    name: "District &amp; Sessions Court, Nashik",
  },
  {
    index: 225,
    name: "District &amp; Sessions Court, Surajpur",
  },
  {
    index: 226,
    name: "District &amp; Sessions Courts, Visakhapatnam",
  },
  {
    index: 227,
    name: "District and Sessions Court, Dharamshala",
  },
  {
    index: 228,
    name: "District and Sessions Court, Ernakulam",
  },
  {
    index: 229,
    name: "District and Sessions Court, Mumbai",
  },
  {
    index: 230,
    name: "District and Sessions Court, Panaji",
  },
  {
    index: 231,
    name: "District and Sessions Division, Manipur East",
  },
  {
    index: 232,
    name: "District and Sessions Division, Manipur West",
  },
  {
    index: 233,
    name: "District and Sessions Division, Thoubal",
  },
  {
    index: 234,
    name: "District Civil & Sessions Court, Bargarh",
  },
  {
    index: 235,
    name: "District Consumer Court, Ballia",
  },
  {
    index: 236,
    name: "District Consumer Court, Basti",
  },
  {
    index: 237,
    name: "District Consumer Court, Chengalpattu",
  },
  {
    index: 238,
    name: "District Consumer Court, Gorakhpur",
  },
  {
    index: 239,
    name: "District Consumer Court, Jalaun",
  },
  {
    index: 240,
    name: "District Consumer Court, Mysore",
  },
  {
    index: 241,
    name: "District Consumer Disputes Redressal Forum, Akola",
  },
  {
    index: 242,
    name: "District Consumer Disputes Redressal Forum, Howrah",
  },
  {
    index: 243,
    name: "District Consumer Disputes Redressal Forum, Mehrauli",
  },
  {
    index: 244,
    name: "District Consumer Disputes Redressal Forum, Sheikh Sarai",
  },
  {
    index: 245,
    name: "District Consumer Disputes Redressal Forum, Washim",
  },
  {
    index: 246,
    name: "District Consumer Forum, Aurangabad",
  },
  {
    index: 247,
    name: "District Consumer Forum, Bhopal",
  },
  {
    index: 248,
    name: "District Consumer Forum, Hoshangabad",
  },
  {
    index: 249,
    name: "District Consumer Forum, Hyderabad",
  },
  {
    index: 250,
    name: "District Consumer Forum, Jalgaon",
  },
  {
    index: 251,
    name: "District Consumer Forum, Mau",
  },
  {
    index: 252,
    name: "District Consumer Forum, North Goa",
  },
  {
    index: 253,
    name: "District Consumer Forum, Parbhani",
  },
  {
    index: 254,
    name: "District Consumer Forum, Raigarh",
  },
  {
    index: 255,
    name: "District Consumer Forum, Rewa",
  },
  {
    index: 256,
    name: "District Consumer Forum, South Goa",
  },
  {
    index: 257,
    name: "District Consumer Forums Delhi",
  },
  {
    index: 258,
    name: "District Court &amp; Sessions Court, Raipur",
  },
  {
    index: 259,
    name: "District Court Bidar, Karnataka",
  },
  {
    index: 260,
    name: "District Court Comple,x Namchi, South Sikkim",
  },
  {
    index: 261,
    name: "District Court Complex, West Sikkim",
  },
  {
    index: 262,
    name: "District Court Yamuna Nagar (Jagadhri)",
  },
  {
    index: 263,
    name: "District Court, Adilabad",
  },
  {
    index: 264,
    name: "District Court, Afzalpur",
  },
  {
    index: 265,
    name: "District Court, Agra",
  },
  {
    index: 266,
    name: "District Court, Ahmedabad",
  },
  {
    index: 267,
    name: "District Court, Ahmednagar",
  },
  {
    index: 268,
    name: "District Court, Ajmer",
  },
  {
    index: 269,
    name: "District Court, Ajnala",
  },
  {
    index: 270,
    name: "District Court, Akola",
  },
  {
    index: 271,
    name: "District Court, Aland",
  },
  {
    index: 272,
    name: "District Court, Alappuzha",
  },
  {
    index: 273,
    name: "District Court, Aligarh",
  },
  {
    index: 274,
    name: "District Court, Alipore",
  },
  {
    index: 275,
    name: "District Court, Alirajpur",
  },
  {
    index: 276,
    name: "District Court, Allahabad",
  },
  {
    index: 277,
    name: "District Court, Almora",
  },
  {
    index: 278,
    name: "District Court, Alur",
  },
  {
    index: 279,
    name: "District Court, Alwar",
  },
  {
    index: 280,
    name: "District Court, Ambala",
  },
  {
    index: 281,
    name: "District Court, Ambedkar Nagar",
  },
  {
    index: 282,
    name: "District Court, Amloh",
  },
  {
    index: 283,
    name: "District Court, Amravati",
  },
  {
    index: 284,
    name: "District Court, Amreli",
  },
  {
    index: 285,
    name: "District Court, Amritsar",
  },
  {
    index: 286,
    name: "District Court, Amroha",
  },
  {
    index: 287,
    name: "District Court, Anand",
  },
  {
    index: 288,
    name: "District Court, Anand",
  },
  {
    index: 289,
    name: "District Court, Anandpur Sahib",
  },
  {
    index: 290,
    name: "District Court, Ananthapur",
  },
  {
    index: 291,
    name: "District Court, Anantnag",
  },
  {
    index: 292,
    name: "District Court, Ankleshwar",
  },
  {
    index: 293,
    name: "District Court, Ankola",
  },
  {
    index: 294,
    name: "District Court, Annupur",
  },
  {
    index: 295,
    name: "District Court, Araria",
  },
  {
    index: 296,
    name: "District Court, Arkalgud",
  },
  {
    index: 297,
    name: "District Court, Arsikere",
  },
  {
    index: 298,
    name: "District Court, Asansol",
  },
  {
    index: 299,
    name: "District Court, Ashoknagar",
  },
  {
    index: 300,
    name: "District Court, Aurad",
  },
  {
    index: 301,
    name: "District Court, Auraiya",
  },
  {
    index: 302,
    name: "District Court, Aurangabad",
  },
  {
    index: 303,
    name: "District Court, Aurangabad",
  },
  {
    index: 304,
    name: "District Court, Azamgarh",
  },
  {
    index: 305,
    name: "District Court, Bagepalli",
  },
  {
    index: 306,
    name: "District Court, Bageshwar",
  },
  {
    index: 307,
    name: "District Court, Baghpat",
  },
  {
    index: 308,
    name: "District Court, Baheri",
  },
  {
    index: 309,
    name: "District Court, Bahraich",
  },
  {
    index: 310,
    name: "District Court, Balaghat",
  },
  {
    index: 311,
    name: "District Court, Ballia",
  },
  {
    index: 312,
    name: "District Court, Balod",
  },
  {
    index: 313,
    name: "District Court, Balrampur",
  },
  {
    index: 314,
    name: "District Court, Banda",
  },
  {
    index: 315,
    name: "District Court, Bandipora",
  },
  {
    index: 316,
    name: "District Court, Bangarapet",
  },
  {
    index: 317,
    name: "District Court, Banipark",
  },
  {
    index: 318,
    name: "District Court, Banka",
  },
  {
    index: 319,
    name: "District Court, Banswara",
  },
  {
    index: 320,
    name: "District Court, Bantwal",
  },
  {
    index: 321,
    name: "District Court, Barabanki",
  },
  {
    index: 322,
    name: "District Court, Baramulla",
  },
  {
    index: 323,
    name: "District Court, Baran",
  },
  {
    index: 324,
    name: "District Court, Barasat",
  },
  {
    index: 325,
    name: "District Court, Bareilly",
  },
  {
    index: 326,
    name: "District Court, Barmer",
  },
  {
    index: 327,
    name: "District Court, Barnala",
  },
  {
    index: 328,
    name: "District Court, Barpeta",
  },
  {
    index: 329,
    name: "District Court, Barwani",
  },
  {
    index: 330,
    name: "District Court, Basavakalyan",
  },
  {
    index: 331,
    name: "District Court, Basavana Bagevadi",
  },
  {
    index: 332,
    name: "District Court, Bastar at Jagdalpur",
  },
  {
    index: 333,
    name: "District Court, Basti",
  },
  {
    index: 334,
    name: "District Court, Bathinda",
  },
  {
    index: 335,
    name: "District Court, Bathinda",
  },
  {
    index: 336,
    name: "District Court, Beed",
  },
  {
    index: 337,
    name: "District Court, Begusarai",
  },
  {
    index: 338,
    name: "District Court, Belgaum",
  },
  {
    index: 339,
    name: "District Court, Bellary",
  },
  {
    index: 340,
    name: "District Court, Beltangadi",
  },
  {
    index: 341,
    name: "District Court, Belur",
  },
  {
    index: 342,
    name: "District Court, Bettiah (West Champaran)",
  },
  {
    index: 343,
    name: "District Court, Betul",
  },
  {
    index: 344,
    name: "District Court, Bhadohi at Gyanpur",
  },
  {
    index: 345,
    name: "District Court, Bhadravati",
  },
  {
    index: 346,
    name: "District Court, Bhagalpur",
  },
  {
    index: 347,
    name: "District Court, Bhalki",
  },
  {
    index: 348,
    name: "District Court, Bhandara",
  },
  {
    index: 349,
    name: "District Court, Bharatpur",
  },
  {
    index: 350,
    name: "District Court, Bharuch",
  },
  {
    index: 351,
    name: "District Court, Bhatkal",
  },
  {
    index: 352,
    name: "District Court, Bhavani",
  },
  {
    index: 353,
    name: "District Court, Bhavnagar",
  },
  {
    index: 354,
    name: "District Court, Bhilwara",
  },
  {
    index: 355,
    name: "District Court, Bhind",
  },
  {
    index: 356,
    name: "District Court, Bhiwandi",
  },
  {
    index: 357,
    name: "District Court, Bhiwani",
  },
  {
    index: 358,
    name: "District Court, Bhojpur (Ara)",
  },
  {
    index: 359,
    name: "District Court, Bhopal",
  },
  {
    index: 360,
    name: "District Court, Bhubaneswar",
  },
  {
    index: 361,
    name: "District Court, Bhuj",
  },
  {
    index: 362,
    name: "District Court, Bijapur",
  },
  {
    index: 363,
    name: "District Court, Bijnor",
  },
  {
    index: 364,
    name: "District Court, Bikaner",
  },
  {
    index: 365,
    name: "District Court, Bilaspur",
  },
  {
    index: 366,
    name: "District Court, Bilaspur",
  },
  {
    index: 367,
    name: "District Court, Birbhum",
  },
  {
    index: 368,
    name: "District Court, Bolangir",
  },
  {
    index: 369,
    name: "District Court, Bongaigaon",
  },
  {
    index: 370,
    name: "District Court, Budaun",
  },
  {
    index: 371,
    name: "District Court, Budgam",
  },
  {
    index: 372,
    name: "District Court, Bulandshahar",
  },
  {
    index: 373,
    name: "District Court, Buldana",
  },
  {
    index: 374,
    name: "District Court, Bundi",
  },
  {
    index: 375,
    name: "District Court, Burdwan",
  },
  {
    index: 376,
    name: "District Court, Burhanpur",
  },
  {
    index: 377,
    name: "District Court, Buxar",
  },
  {
    index: 378,
    name: "District Court, Byadgi",
  },
  {
    index: 379,
    name: "District Court, Cachar",
  },
  {
    index: 380,
    name: "District Court, Challakere",
  },
  {
    index: 381,
    name: "District Court, Chamba",
  },
  {
    index: 382,
    name: "District Court, Chamoli",
  },
  {
    index: 383,
    name: "District Court, Champawat",
  },
  {
    index: 384,
    name: "District Court, Chamrajnagar",
  },
  {
    index: 385,
    name: "District Court, Chandauli",
  },
  {
    index: 386,
    name: "District Court, Chandigarh",
  },
  {
    index: 387,
    name: "District Court, Chandrapur",
  },
  {
    index: 388,
    name: "District Court, Channagiri",
  },
  {
    index: 389,
    name: "District Court, Channapatna",
  },
  {
    index: 390,
    name: "District Court, Channarayapattana",
  },
  {
    index: 391,
    name: "District Court, Chengalpattu",
  },
  {
    index: 392,
    name: "District Court, Chennai",
  },
  {
    index: 393,
    name: "District Court, Chhatarpur",
  },
  {
    index: 394,
    name: "District Court, Chhindwara",
  },
  {
    index: 395,
    name: "District Court, Chikballapur",
  },
  {
    index: 396,
    name: "District Court, Chikmagalur",
  },
  {
    index: 397,
    name: "District Court, Chiknayakanhalli",
  },
  {
    index: 398,
    name: "District Court, Chincholi",
  },
  {
    index: 399,
    name: "District Court, Chintamani",
  },
  {
    index: 400,
    name: "District Court, Chitapur",
  },
  {
    index: 401,
    name: "District Court, Chitradurga",
  },
  {
    index: 402,
    name: "District Court, Chitrakoot",
  },
  {
    index: 403,
    name: "District Court, Chittoor",
  },
  {
    index: 404,
    name: "District Court, Chittorgarh",
  },
  {
    index: 405,
    name: "District Court, Churu",
  },
  {
    index: 406,
    name: "District Court, Cooch Behar",
  },
  {
    index: 407,
    name: "District Court, Cuddapah",
  },
  {
    index: 408,
    name: "District Court, cuttack",
  },
  {
    index: 409,
    name: "District Court, Dahod",
  },
  {
    index: 410,
    name: "District Court, Dakhin Bastar Dantewada",
  },
  {
    index: 411,
    name: "District Court, Daman",
  },
  {
    index: 412,
    name: "District Court, Damoh",
  },
  {
    index: 413,
    name: "District Court, Dangs",
  },
  {
    index: 414,
    name: "District Court, Darbhanga",
  },
  {
    index: 415,
    name: "District Court, Darjeeling",
  },
  {
    index: 416,
    name: "District Court, Darrang",
  },
  {
    index: 417,
    name: "District Court, Datia",
  },
  {
    index: 418,
    name: "District Court, Dausa",
  },
  {
    index: 419,
    name: "District Court, Davanagere",
  },
  {
    index: 420,
    name: "District Court, Dehradun",
  },
  {
    index: 421,
    name: "District Court, Deoria",
  },
  {
    index: 422,
    name: "District Court, Devadurga",
  },
  {
    index: 423,
    name: "District Court, Dewas",
  },
  {
    index: 424,
    name: "District Court, Dhamtari",
  },
  {
    index: 425,
    name: "District Court, Dhar",
  },
  {
    index: 426,
    name: "District Court, Dharwad",
  },
  {
    index: 427,
    name: "District Court, Dhemaji",
  },
  {
    index: 428,
    name: "District Court, Dholpur",
  },
  {
    index: 429,
    name: "District Court, Dhubri",
  },
  {
    index: 430,
    name: "District Court, Dhule",
  },
  {
    index: 431,
    name: "District Court, Dibrugarh",
  },
  {
    index: 432,
    name: "District Court, Dimapur",
  },
  {
    index: 433,
    name: "District Court, Dindori",
  },
  {
    index: 434,
    name: "District Court, Diu",
  },
  {
    index: 435,
    name: "District Court, Doda",
  },
  {
    index: 436,
    name: "District Court, Dumka",
  },
  {
    index: 437,
    name: "District Court, Dungarpur",
  },
  {
    index: 438,
    name: "District Court, Durg",
  },
  {
    index: 439,
    name: "District Court, Durgapur",
  },
  {
    index: 440,
    name: "District Court, Dwarka",
  },
  {
    index: 441,
    name: "District Court, East Champaran (Motihari)",
  },
  {
    index: 442,
    name: "District Court, East Godavari",
  },
  {
    index: 443,
    name: "District Court, East Medinipur",
  },
  {
    index: 444,
    name: "District Court, Eluru",
  },
  {
    index: 445,
    name: "District Court, Ernakulam",
  },
  {
    index: 446,
    name: "District Court, Etah",
  },
  {
    index: 447,
    name: "District Court, Etawah",
  },
  {
    index: 448,
    name: "District Court, Faizabad",
  },
  {
    index: 449,
    name: "District Court, Faridabad",
  },
  {
    index: 450,
    name: "District Court, Faridabad",
  },
  {
    index: 451,
    name: "District Court, Faridkot",
  },
  {
    index: 452,
    name: "District Court, Farukkhabad",
  },
  {
    index: 453,
    name: "District Court, Fatehabad",
  },
  {
    index: 454,
    name: "District Court, Fatehgarh Sahib",
  },
  {
    index: 455,
    name: "District Court, Fatehpur",
  },
  {
    index: 456,
    name: "District Court, Fazilka",
  },
  {
    index: 457,
    name: "District Court, Ferozepur",
  },
  {
    index: 458,
    name: "District Court, Firozabad",
  },
  {
    index: 459,
    name: "District Court, Gadag-Betigeri",
  },
  {
    index: 460,
    name: "District Court, Gadchiroli",
  },
  {
    index: 461,
    name: "District Court, Ganderbal",
  },
  {
    index: 462,
    name: "District Court, Gandhidham",
  },
  {
    index: 463,
    name: "District Court, Gandhinagar",
  },
  {
    index: 464,
    name: "District Court, Gangawati",
  },
  {
    index: 465,
    name: "District Court, Ganjam",
  },
  {
    index: 466,
    name: "District Court, Gauribidanur",
  },
  {
    index: 467,
    name: "District Court, Gautam Budh Nagar",
  },
  {
    index: 468,
    name: "District Court, Gautambuddha Nagar",
  },
  {
    index: 469,
    name: "District Court, Gaya",
  },
  {
    index: 470,
    name: "District Court, Ghaziabad",
  },
  {
    index: 471,
    name: "District Court, Ghaziabad",
  },
  {
    index: 472,
    name: "District Court, Ghazipur",
  },
  {
    index: 473,
    name: "District Court, Goalpara",
  },
  {
    index: 474,
    name: "District Court, Godhra",
  },
  {
    index: 475,
    name: "District Court, Gokak",
  },
  {
    index: 476,
    name: "District Court, Golaghat",
  },
  {
    index: 477,
    name: "District Court, Gonda",
  },
  {
    index: 478,
    name: "District Court, Gondia",
  },
  {
    index: 479,
    name: "District Court, Gopalganj",
  },
  {
    index: 480,
    name: "District Court, Gorakhpur",
  },
  {
    index: 481,
    name: "District Court, Gubbi",
  },
  {
    index: 482,
    name: "District Court, Gudibanda",
  },
  {
    index: 483,
    name: "District Court, Gulbarga",
  },
  {
    index: 484,
    name: "District Court, Guna",
  },
  {
    index: 485,
    name: "District Court, Gundlupet",
  },
  {
    index: 486,
    name: "District Court, Guntur",
  },
  {
    index: 487,
    name: "District Court, Gurdaspur",
  },
  {
    index: 488,
    name: "District Court, Gurgaon",
  },
  {
    index: 489,
    name: "District Court, Gurgaon",
  },
  {
    index: 490,
    name: "District Court, Guwahati",
  },
  {
    index: 491,
    name: "District Court, Gwalior",
  },
  {
    index: 492,
    name: "District Court, Hailakandi",
  },
  {
    index: 493,
    name: "District Court, Haliyal",
  },
  {
    index: 494,
    name: "District Court, Hamirpur",
  },
  {
    index: 495,
    name: "District Court, Hamirpur",
  },
  {
    index: 496,
    name: "District Court, Hangal",
  },
  {
    index: 497,
    name: "District Court, Hanumangarh",
  },
  {
    index: 498,
    name: "District Court, Hapur",
  },
  {
    index: 499,
    name: "District Court, Harda",
  },
  {
    index: 500,
    name: "District Court, Hardoi",
  },
  {
    index: 501,
    name: "District Court, Haridwar",
  },
  {
    index: 502,
    name: "District Court, Harihar",
  },
  {
    index: 503,
    name: "District Court, Harpanahalli",
  },
  {
    index: 504,
    name: "District Court, Hassan",
  },
  {
    index: 505,
    name: "District Court, Hathras",
  },
  {
    index: 506,
    name: "District Court, Haveri",
  },
  {
    index: 507,
    name: "District Court, Heggadadevana kote",
  },
  {
    index: 508,
    name: "District Court, Himatnagar",
  },
  {
    index: 509,
    name: "District Court, Hingoli",
  },
  {
    index: 510,
    name: "District Court, Hirekerur",
  },
  {
    index: 511,
    name: "District Court, Hiriyur",
  },
  {
    index: 512,
    name: "District Court, Hisar",
  },
  {
    index: 513,
    name: "District Court, Holalkere",
  },
  {
    index: 514,
    name: "District Court, Holenarsipur",
  },
  {
    index: 515,
    name: "District Court, Homnabad",
  },
  {
    index: 516,
    name: "District Court, Honnali",
  },
  {
    index: 517,
    name: "District Court, Honnavar",
  },
  {
    index: 518,
    name: "District Court, Hoogly",
  },
  {
    index: 519,
    name: "District Court, Hosadurga",
  },
  {
    index: 520,
    name: "District Court, Hosanagara",
  },
  {
    index: 521,
    name: "District Court, Hoshangabad",
  },
  {
    index: 522,
    name: "District Court, Hoshiarpur",
  },
  {
    index: 523,
    name: "District Court, Howrah",
  },
  {
    index: 524,
    name: "District Court, Hubli",
  },
  {
    index: 525,
    name: "District Court, Hunsur",
  },
  {
    index: 526,
    name: "District Court, Idukki",
  },
  {
    index: 527,
    name: "District Court, Indi",
  },
  {
    index: 528,
    name: "District Court, Indore",
  },
  {
    index: 529,
    name: "District Court, Islampur",
  },
  {
    index: 530,
    name: "District Court, Jabalpur",
  },
  {
    index: 531,
    name: "District Court, Jagalur",
  },
  {
    index: 532,
    name: "District Court, Jagatsinghpur",
  },
  {
    index: 533,
    name: "District Court, Jaipur",
  },
  {
    index: 534,
    name: "District Court, Jaisalmer",
  },
  {
    index: 535,
    name: "District Court, Jalandhar",
  },
  {
    index: 536,
    name: "District Court, Jalaun at Orai",
  },
  {
    index: 537,
    name: "District Court, Jalgaon",
  },
  {
    index: 538,
    name: "District Court, Jalna",
  },
  {
    index: 539,
    name: "District Court, Jalor",
  },
  {
    index: 540,
    name: "District Court, Jalpaiguri",
  },
  {
    index: 541,
    name: "District Court, Jammu",
  },
  {
    index: 542,
    name: "District Court, Jamnagar",
  },
  {
    index: 543,
    name: "District Court, Jamshedpur",
  },
  {
    index: 544,
    name: "District Court, Jamui",
  },
  {
    index: 545,
    name: "District Court, Janjgir-Champa",
  },
  {
    index: 546,
    name: "District Court, Jashpur Nagar",
  },
  {
    index: 547,
    name: "District Court, Jaunpur",
  },
  {
    index: 548,
    name: "District Court, Jehanabad",
  },
  {
    index: 549,
    name: "District Court, Jevargi",
  },
  {
    index: 550,
    name: "District Court, Jhabua",
  },
  {
    index: 551,
    name: "District Court, Jhajjar",
  },
  {
    index: 552,
    name: "District Court, Jhalawar",
  },
  {
    index: 553,
    name: "District Court, Jhansi",
  },
  {
    index: 554,
    name: "District Court, Jharsuguda",
  },
  {
    index: 555,
    name: "District Court, Jhunjhunu",
  },
  {
    index: 556,
    name: "District Court, Jind",
  },
  {
    index: 557,
    name: "District Court, Jodhpur",
  },
  {
    index: 558,
    name: "District Court, Joida",
  },
  {
    index: 559,
    name: "District Court, Jorhat",
  },
  {
    index: 560,
    name: "District Court, Junagadh",
  },
  {
    index: 561,
    name: "District Court, Jyotibaphule Nagar",
  },
  {
    index: 562,
    name: "District Court, Kabirdham",
  },
  {
    index: 563,
    name: "District Court, Kadur",
  },
  {
    index: 564,
    name: "District Court, Kaimur (Bhabhua)",
  },
  {
    index: 565,
    name: "District Court, Kaithal",
  },
  {
    index: 566,
    name: "District Court, Kakinada",
  },
  {
    index: 567,
    name: "District Court, Kalaburagi",
  },
  {
    index: 568,
    name: "District Court, Kalahandi",
  },
  {
    index: 569,
    name: "District Court, Kalghatgi",
  },
  {
    index: 570,
    name: "District Court, Kalimpong",
  },
  {
    index: 571,
    name: "District Court, Kalyan",
  },
  {
    index: 572,
    name: "District Court, Kamrup",
  },
  {
    index: 573,
    name: "District Court, Kamrup",
  },
  {
    index: 574,
    name: "District Court, Kanakapura",
  },
  {
    index: 575,
    name: "District Court, Kandaghat",
  },
  {
    index: 576,
    name: "District Court, Kangra",
  },
  {
    index: 577,
    name: "District Court, Kannauj",
  },
  {
    index: 578,
    name: "District Court, Kannur",
  },
  {
    index: 579,
    name: "District Court, Kanpur Dehat",
  },
  {
    index: 580,
    name: "District Court, Kanpur Nagar",
  },
  {
    index: 581,
    name: "District Court, Kanshi Ram Nagar",
  },
  {
    index: 582,
    name: "District Court, Kapurthala",
  },
  {
    index: 583,
    name: "District Court, Karauli",
  },
  {
    index: 584,
    name: "District Court, Karikal",
  },
  {
    index: 585,
    name: "District Court, Karimganj",
  },
  {
    index: 586,
    name: "District Court, Karimnagar",
  },
  {
    index: 587,
    name: "District Court, Karkal",
  },
  {
    index: 588,
    name: "District Court, Karkardooma",
  },
  {
    index: 589,
    name: "District Court, Karnal",
  },
  {
    index: 590,
    name: "District Court, Karwar",
  },
  {
    index: 591,
    name: "District Court, Kasaragod",
  },
  {
    index: 592,
    name: "District Court, Kasauli",
  },
  {
    index: 593,
    name: "District Court, Kathua",
  },
  {
    index: 594,
    name: "District Court, Katihar",
  },
  {
    index: 595,
    name: "District Court, Katni",
  },
  {
    index: 596,
    name: "District Court, Katra",
  },
  {
    index: 597,
    name: "District Court, Kaushambi",
  },
  {
    index: 598,
    name: "District Court, kendrapara",
  },
  {
    index: 599,
    name: "District Court, Khagaria",
  },
  {
    index: 600,
    name: "District Court, Khamanon",
  },
  {
    index: 601,
    name: "District Court, Khammam",
  },
  {
    index: 602,
    name: "District Court, Khandwa",
  },
  {
    index: 603,
    name: "District Court, Khanna",
  },
  {
    index: 604,
    name: "District Court, khurda",
  },
  {
    index: 605,
    name: "District Court, Kinnaur",
  },
  {
    index: 606,
    name: "District Court, Kiphire",
  },
  {
    index: 607,
    name: "District Court, Kishtwar",
  },
  {
    index: 608,
    name: "District Court, Kohima",
  },
  {
    index: 609,
    name: "District Court, Kokrajhar",
  },
  {
    index: 610,
    name: "District Court, Kolar",
  },
  {
    index: 611,
    name: "District Court, Kolhapur",
  },
  {
    index: 612,
    name: "District Court, Kolkata City Session Court",
  },
  {
    index: 613,
    name: "District Court, Kollam",
  },
  {
    index: 614,
    name: "District Court, Kollegal",
  },
  {
    index: 615,
    name: "District Court, Koppa",
  },
  {
    index: 616,
    name: "District Court, Koppal",
  },
  {
    index: 617,
    name: "District Court, Koratagere",
  },
  {
    index: 618,
    name: "District Court, Korba",
  },
  {
    index: 619,
    name: "District Court, Koriya",
  },
  {
    index: 620,
    name: "District Court, Kota",
  },
  {
    index: 621,
    name: "District Court, Kottayam",
  },
  {
    index: 622,
    name: "District Court, Kozhikkode",
  },
  {
    index: 623,
    name: "District Court, Krishna",
  },
  {
    index: 624,
    name: "District Court, Krishna",
  },
  {
    index: 625,
    name: "District Court, Krishnarajanagara",
  },
  {
    index: 626,
    name: "District Court, Krishnarajpet",
  },
  {
    index: 627,
    name: "District Court, Kulgam",
  },
  {
    index: 628,
    name: "District Court, Kullu",
  },
  {
    index: 629,
    name: "District Court, Kumta",
  },
  {
    index: 630,
    name: "District Court, Kundapura",
  },
  {
    index: 631,
    name: "District Court, Kundgol",
  },
  {
    index: 632,
    name: "District Court, Kunigal",
  },
  {
    index: 633,
    name: "District Court, Kupwara",
  },
  {
    index: 634,
    name: "District Court, Kurnool",
  },
  {
    index: 635,
    name: "District Court, Kurukshetra",
  },
  {
    index: 636,
    name: "District Court, Kushi Nagar at Padrauna",
  },
  {
    index: 637,
    name: "District Court, Kushtagi",
  },
  {
    index: 638,
    name: "District Court, Lahaul and Spiti",
  },
  {
    index: 639,
    name: "District Court, Lakhimpur",
  },
  {
    index: 640,
    name: "District Court, Lakhimpur Kheri",
  },
  {
    index: 641,
    name: "District Court, Lalitpur",
  },
  {
    index: 642,
    name: "District Court, Latur",
  },
  {
    index: 643,
    name: "District Court, Lingsugur",
  },
  {
    index: 644,
    name: "District Court, Longleng",
  },
  {
    index: 645,
    name: "District Court, Lucknow",
  },
  {
    index: 646,
    name: "District Court, Ludhiana",
  },
  {
    index: 647,
    name: "District Court, Machilipatnam",
  },
  {
    index: 648,
    name: "District Court, Maddur",
  },
  {
    index: 649,
    name: "District Court, Madhepura",
  },
  {
    index: 650,
    name: "District Court, Madhubani",
  },
  {
    index: 651,
    name: "District Court, Madhugiri",
  },
  {
    index: 652,
    name: "District Court, Madikeri",
  },
  {
    index: 653,
    name: "District Court, Madurai",
  },
  {
    index: 654,
    name: "District Court, Magadi",
  },
  {
    index: 655,
    name: "District Court, Mahabubnagar",
  },
  {
    index: 656,
    name: "District Court, Maharajganj",
  },
  {
    index: 657,
    name: "District Court, Mahasamund",
  },
  {
    index: 658,
    name: "District Court, Mahe",
  },
  {
    index: 659,
    name: "District Court, Mahesana",
  },
  {
    index: 660,
    name: "District Court, Mahoba",
  },
  {
    index: 661,
    name: "District Court, Mainpuri",
  },
  {
    index: 662,
    name: "District Court, Malappuram",
  },
  {
    index: 663,
    name: "District Court, Malavalli",
  },
  {
    index: 664,
    name: "District Court, Malda",
  },
  {
    index: 665,
    name: "District Court, Malur",
  },
  {
    index: 666,
    name: "District Court, Mancherial",
  },
  {
    index: 667,
    name: "District Court, Mandi",
  },
  {
    index: 668,
    name: "District Court, Mandla",
  },
  {
    index: 669,
    name: "District Court, Mandleshwar",
  },
  {
    index: 670,
    name: "District Court, Mandsaur",
  },
  {
    index: 671,
    name: "District Court, Mandya",
  },
  {
    index: 672,
    name: "District Court, Mangalore",
  },
  {
    index: 673,
    name: "District Court, Mansa",
  },
  {
    index: 674,
    name: "District Court, Manvi",
  },
  {
    index: 675,
    name: "District Court, Mathura",
  },
  {
    index: 676,
    name: "District Court, Mau",
  },
  {
    index: 677,
    name: "District Court, Medak",
  },
  {
    index: 678,
    name: "District Court, Meerut",
  },
  {
    index: 679,
    name: "District Court, Mirzapur",
  },
  {
    index: 680,
    name: "District Court, Mirzapur",
  },
  {
    index: 681,
    name: "District Court, Moga",
  },
  {
    index: 682,
    name: "District Court, Mohali",
  },
  {
    index: 683,
    name: "District Court, Mokokchung",
  },
  {
    index: 684,
    name: "District Court, Molakalmuru",
  },
  {
    index: 685,
    name: "District Court, Mon",
  },
  {
    index: 686,
    name: "District Court, Moradabad",
  },
  {
    index: 687,
    name: "District Court, Morena",
  },
  {
    index: 688,
    name: "District Court, Morigaon",
  },
  {
    index: 689,
    name: "District Court, Muddebihal",
  },
  {
    index: 690,
    name: "District Court, Mudigere",
  },
  {
    index: 691,
    name: "District Court, Mulbagal",
  },
  {
    index: 692,
    name: "District Court, Mumbai",
  },
  {
    index: 693,
    name: "District Court, Mundargi",
  },
  {
    index: 694,
    name: "District Court, Mundgod",
  },
  {
    index: 695,
    name: "District Court, Munger",
  },
  {
    index: 696,
    name: "District Court, Murshidabad",
  },
  {
    index: 697,
    name: "District Court, Muzaffarnagar",
  },
  {
    index: 698,
    name: "District Court, Muzaffarpur",
  },
  {
    index: 699,
    name: "District Court, Mysore",
  },
  {
    index: 700,
    name: "District Court, Nadia",
  },
  {
    index: 701,
    name: "District Court, Nagamangala",
  },
  {
    index: 702,
    name: "District Court, Nagaon",
  },
  {
    index: 703,
    name: "District Court, Nagaur",
  },
  {
    index: 704,
    name: "District Court, Nagercoil",
  },
  {
    index: 705,
    name: "District Court, Nagpur",
  },
  {
    index: 706,
    name: "District Court, Nahan",
  },
  {
    index: 707,
    name: "District Court, Nainital",
  },
  {
    index: 708,
    name: "District Court, Nalanda (Biharsharif)",
  },
  {
    index: 709,
    name: "District Court, Nalbari",
  },
  {
    index: 710,
    name: "District Court, Nalgonda",
  },
  {
    index: 711,
    name: "District Court, Nanded",
  },
  {
    index: 712,
    name: "District Court, Nandurbar",
  },
  {
    index: 713,
    name: "District Court, Nanjangud",
  },
  {
    index: 714,
    name: "District Court, Narasimharajapura",
  },
  {
    index: 715,
    name: "District Court, Nargund",
  },
  {
    index: 716,
    name: "District Court, Narnaul",
  },
  {
    index: 717,
    name: "District Court, Narsimhapur",
  },
  {
    index: 718,
    name: "District Court, Nashik",
  },
  {
    index: 719,
    name: "District Court, Navalgund",
  },
  {
    index: 720,
    name: "District Court, Navi Mumbai",
  },
  {
    index: 721,
    name: "District Court, Navsari",
  },
  {
    index: 722,
    name: "District Court, Nawadah",
  },
  {
    index: 723,
    name: "District Court, Nawanshahr",
  },
  {
    index: 724,
    name: "District Court, Neemuch",
  },
  {
    index: 725,
    name: "District Court, Nellore",
  },
  {
    index: 726,
    name: "District Court, Nimapada",
  },
  {
    index: 727,
    name: "District Court, Nizamabad",
  },
  {
    index: 728,
    name: "District Court, Nizamabad",
  },
  {
    index: 729,
    name: "District Court, North 24 Parganas",
  },
  {
    index: 730,
    name: "District Court, North Dinajpur",
  },
  {
    index: 731,
    name: "District Court, North Goa",
  },
  {
    index: 732,
    name: "District Court, Nuh",
  },
  {
    index: 733,
    name: "District Court, Nuh",
  },
  {
    index: 734,
    name: "District Court, Ongole",
  },
  {
    index: 735,
    name: "District Court, Osmanabad",
  },
  {
    index: 736,
    name: "District Court, Palakkad",
  },
  {
    index: 737,
    name: "District Court, Palanpur",
  },
  {
    index: 738,
    name: "District Court, Palghar",
  },
  {
    index: 739,
    name: "District Court, Pali",
  },
  {
    index: 740,
    name: "District Court, Palwal",
  },
  {
    index: 741,
    name: "District Court, Panchkula",
  },
  {
    index: 742,
    name: "District Court, Pandavapura",
  },
  {
    index: 743,
    name: "District Court, Panipat",
  },
  {
    index: 744,
    name: "District Court, Panna",
  },
  {
    index: 745,
    name: "District Court, Panvel",
  },
  {
    index: 746,
    name: "District Court, Parbhani",
  },
  {
    index: 747,
    name: "District Court, Patan",
  },
  {
    index: 748,
    name: "District Court, Pathanamthitta",
  },
  {
    index: 749,
    name: "District Court, Pathankot",
  },
  {
    index: 750,
    name: "District Court, Patiala",
  },
  {
    index: 751,
    name: "District Court, Patiala House",
  },
  {
    index: 752,
    name: "District Court, Patna",
  },
  {
    index: 753,
    name: "District Court, Pauri Garhwal",
  },
  {
    index: 754,
    name: "District Court, Pavagada",
  },
  {
    index: 755,
    name: "District Court, Peren",
  },
  {
    index: 756,
    name: "District Court, Phek",
  },
  {
    index: 757,
    name: "District Court, Pilibhit",
  },
  {
    index: 758,
    name: "District Court, Pipili",
  },
  {
    index: 759,
    name: "District Court, Piriyapatna",
  },
  {
    index: 760,
    name: "District Court, Pithoragarh",
  },
  {
    index: 761,
    name: "District Court, Pondicherry",
  },
  {
    index: 762,
    name: "District Court, Poonch",
  },
  {
    index: 763,
    name: "District Court, Porbandar",
  },
  {
    index: 764,
    name: "District Court, Prakasam",
  },
  {
    index: 765,
    name: "District Court, Pratapgarh",
  },
  {
    index: 766,
    name: "District Court, Pratapgarh[1]",
  },
  {
    index: 767,
    name: "District Court, Pulwama",
  },
  {
    index: 768,
    name: "District Court, Pune",
  },
  {
    index: 769,
    name: "District Court, Puri",
  },
  {
    index: 770,
    name: "District Court, Purnea",
  },
  {
    index: 771,
    name: "District Court, Purulia",
  },
  {
    index: 772,
    name: "District Court, Puttur",
  },
  {
    index: 773,
    name: "District Court, Raebareli",
  },
  {
    index: 774,
    name: "District Court, Raichur",
  },
  {
    index: 775,
    name: "District Court, Raigad",
  },
  {
    index: 776,
    name: "District Court, Raigarh",
  },
  {
    index: 777,
    name: "District Court, Raipur",
  },
  {
    index: 778,
    name: "District Court, Raisen",
  },
  {
    index: 779,
    name: "District Court, Rajender Nagar",
  },
  {
    index: 780,
    name: "District Court, Rajgarh",
  },
  {
    index: 781,
    name: "District Court, Rajkot",
  },
  {
    index: 782,
    name: "District Court, Rajnandgaon",
  },
  {
    index: 783,
    name: "District Court, Rajouri",
  },
  {
    index: 784,
    name: "District Court, Rajpipla",
  },
  {
    index: 785,
    name: "District Court, Rajsamand",
  },
  {
    index: 786,
    name: "District Court, Ramanagara",
  },
  {
    index: 787,
    name: "District Court, Ramban",
  },
  {
    index: 788,
    name: "District Court, Rampur",
  },
  {
    index: 789,
    name: "District Court, Ranchi",
  },
  {
    index: 790,
    name: "District Court, Ranga Reddy",
  },
  {
    index: 791,
    name: "District Court, Ranibennur",
  },
  {
    index: 792,
    name: "District Court, Ratlam",
  },
  {
    index: 793,
    name: "District Court, Ratnagiri",
  },
  {
    index: 794,
    name: "District Court, Rayagada",
  },
  {
    index: 795,
    name: "District Court, Reasi",
  },
  {
    index: 796,
    name: "District Court, Rewa",
  },
  {
    index: 797,
    name: "District Court, Rewari",
  },
  {
    index: 798,
    name: "District Court, Rohini",
  },
  {
    index: 799,
    name: "District Court, Rohtak",
  },
  {
    index: 800,
    name: "District Court, Rohtas(Sasaram)",
  },
  {
    index: 801,
    name: "District Court, Ron",
  },
  {
    index: 802,
    name: "District Court, Ropar",
  },
  {
    index: 803,
    name: "District Court, Rudraprayag",
  },
  {
    index: 804,
    name: "District Court, Rupnagar",
  },
  {
    index: 805,
    name: "District Court, S.B.S.Nagar",
  },
  {
    index: 806,
    name: "District Court, Sagar",
  },
  {
    index: 807,
    name: "District Court, Sagar",
  },
  {
    index: 808,
    name: "District Court, Saharanpur",
  },
  {
    index: 809,
    name: "District Court, Saharsha",
  },
  {
    index: 810,
    name: "District Court, Saket",
  },
  {
    index: 811,
    name: "District Court, Sakleshpur",
  },
  {
    index: 812,
    name: "District Court, Samastipur",
  },
  {
    index: 813,
    name: "District Court, Samba",
  },
  {
    index: 814,
    name: "District Court, Sambalpur",
  },
  {
    index: 815,
    name: "District Court, Sangli",
  },
  {
    index: 816,
    name: "District Court, Sangrur",
  },
  {
    index: 817,
    name: "District Court, Sant Kabir Nagar",
  },
  {
    index: 818,
    name: "District Court, Saran (Chapra)",
  },
  {
    index: 819,
    name: "District Court, Sarguja at Ambikpur",
  },
  {
    index: 820,
    name: "District Court, Satara",
  },
  {
    index: 821,
    name: "District Court, Satna",
  },
  {
    index: 822,
    name: "District Court, Savanur",
  },
  {
    index: 823,
    name: "District Court, Sawai Madhopur",
  },
  {
    index: 824,
    name: "District Court, Sealdah",
  },
  {
    index: 825,
    name: "District Court, Sedam",
  },
  {
    index: 826,
    name: "District Court, Sehore",
  },
  {
    index: 827,
    name: "District Court, Seoni",
  },
  {
    index: 828,
    name: "District Court, Shahdol",
  },
  {
    index: 829,
    name: "District Court, Shahjahanpur",
  },
  {
    index: 830,
    name: "District Court, Shajapur",
  },
  {
    index: 831,
    name: "District Court, Shiggaon",
  },
  {
    index: 832,
    name: "District Court, Shikaripura",
  },
  {
    index: 833,
    name: "District Court, Shimla",
  },
  {
    index: 834,
    name: "District Court, Shimoga",
  },
  {
    index: 835,
    name: "District Court, Shirhatti",
  },
  {
    index: 836,
    name: "District Court, Shivajinagar",
  },
  {
    index: 837,
    name: "District Court, Shivpuri",
  },
  {
    index: 838,
    name: "District Court, Shoepur",
  },
  {
    index: 839,
    name: "District Court, Shopian",
  },
  {
    index: 840,
    name: "District Court, Shravasti",
  },
  {
    index: 841,
    name: "District Court, Shrirangapattana",
  },
  {
    index: 842,
    name: "District Court, Sibsagar",
  },
  {
    index: 843,
    name: "District Court, Siddapur",
  },
  {
    index: 844,
    name: "District Court, Siddharth Nagar",
  },
  {
    index: 845,
    name: "District Court, Sidhi",
  },
  {
    index: 846,
    name: "District Court, Sidlaghatta",
  },
  {
    index: 847,
    name: "District Court, Sikar",
  },
  {
    index: 848,
    name: "District Court, Sindagi",
  },
  {
    index: 849,
    name: "District Court, Sindhnur",
  },
  {
    index: 850,
    name: "District Court, Sindhudurg",
  },
  {
    index: 851,
    name: "District Court, Singrauli",
  },
  {
    index: 852,
    name: "District Court, Sira",
  },
  {
    index: 853,
    name: "District Court, Sirmaur",
  },
  {
    index: 854,
    name: "District Court, Sirohi",
  },
  {
    index: 855,
    name: "District Court, Sirsa",
  },
  {
    index: 856,
    name: "District Court, Sirsi",
  },
  {
    index: 857,
    name: "District Court, Sitamarhi",
  },
  {
    index: 858,
    name: "District Court, Sitapur",
  },
  {
    index: 859,
    name: "District Court, Siwan",
  },
  {
    index: 860,
    name: "District Court, Solan",
  },
  {
    index: 861,
    name: "District Court, Solan",
  },
  {
    index: 862,
    name: "District Court, Solapur",
  },
  {
    index: 863,
    name: "District Court, Somvarpet",
  },
  {
    index: 864,
    name: "District Court, Sonbhadra",
  },
  {
    index: 865,
    name: "District Court, Sonepat",
  },
  {
    index: 866,
    name: "District Court, Sonepur",
  },
  {
    index: 867,
    name: "District Court, Sonitpur",
  },
  {
    index: 868,
    name: "District Court, Sorab",
  },
  {
    index: 869,
    name: "District Court, South 24 Parganas",
  },
  {
    index: 870,
    name: "District Court, South Dinajpur",
  },
  {
    index: 871,
    name: "District Court, South Goa",
  },
  {
    index: 872,
    name: "District Court, Sri Ganganagar",
  },
  {
    index: 873,
    name: "District Court, Sri Muktsar Sahib",
  },
  {
    index: 874,
    name: "District Court, Srikakulam",
  },
  {
    index: 875,
    name: "District Court, Srinagar",
  },
  {
    index: 876,
    name: "District Court, Sringeri",
  },
  {
    index: 877,
    name: "District Court, Srinivaspur",
  },
  {
    index: 878,
    name: "District Court, Sultanpur",
  },
  {
    index: 879,
    name: "District Court, Sulya",
  },
  {
    index: 880,
    name: "District Court, Sundargarh",
  },
  {
    index: 881,
    name: "District Court, Surajpur Greater Noida",
  },
  {
    index: 882,
    name: "District Court, Surat",
  },
  {
    index: 883,
    name: "District Court, Surendranagar",
  },
  {
    index: 884,
    name: "District Court, T.Narsipur",
  },
  {
    index: 885,
    name: "District Court, Tarikere",
  },
  {
    index: 886,
    name: "District Court, Tehri Garhwal",
  },
  {
    index: 887,
    name: "District Court, Thane",
  },
  {
    index: 888,
    name: "District Court, Thirthahalli",
  },
  {
    index: 889,
    name: "District Court, Thirunelveli",
  },
  {
    index: 890,
    name: "District Court, Thiruvananthapuram",
  },
  {
    index: 891,
    name: "District Court, Thrissur",
  },
  {
    index: 892,
    name: "District Court, Tikamgarh",
  },
  {
    index: 893,
    name: "District Court, Tinsukia",
  },
  {
    index: 894,
    name: "District Court, Tiptur",
  },
  {
    index: 895,
    name: "District Court, Tis Hazari",
  },
  {
    index: 896,
    name: "District Court, Tonk",
  },
  {
    index: 897,
    name: "District Court, Tuensang",
  },
  {
    index: 898,
    name: "District Court, Tumkur",
  },
  {
    index: 899,
    name: "District Court, Turuvekere",
  },
  {
    index: 900,
    name: "District Court, U S Nagar",
  },
  {
    index: 901,
    name: "District Court, Udaipur",
  },
  {
    index: 902,
    name: "District Court, Udhampur",
  },
  {
    index: 903,
    name: "District Court, Udupi",
  },
  {
    index: 904,
    name: "District Court, Ujjain",
  },
  {
    index: 905,
    name: "District Court, Una",
  },
  {
    index: 906,
    name: "District Court, Unnao",
  },
  {
    index: 907,
    name: "District Court, Uttar Bastar Kanker",
  },
  {
    index: 908,
    name: "District Court, Uttarkashi",
  },
  {
    index: 909,
    name: "District Court, Vadodara",
  },
  {
    index: 910,
    name: "District Court, Vaishali (Hajipur)",
  },
  {
    index: 911,
    name: "District Court, Valsad",
  },
  {
    index: 912,
    name: "District Court, Varanasi",
  },
  {
    index: 913,
    name: "District Court, Vellore",
  },
  {
    index: 914,
    name: "District Court, Vidisha",
  },
  {
    index: 915,
    name: "District Court, Vijayawada",
  },
  {
    index: 916,
    name: "District Court, Virajpet",
  },
  {
    index: 917,
    name: "District Court, Visakhapatnam",
  },
  {
    index: 918,
    name: "District Court, Vizianagaram",
  },
  {
    index: 919,
    name: "District Court, Warangal",
  },
  {
    index: 920,
    name: "District Court, Wardha",
  },
  {
    index: 921,
    name: "District Court, Washim",
  },
  {
    index: 922,
    name: "District Court, Wayanad",
  },
  {
    index: 923,
    name: "District Court, West Godavari",
  },
  {
    index: 924,
    name: "District Court, West Medinipur",
  },
  {
    index: 925,
    name: "District Court, Wokha",
  },
  {
    index: 926,
    name: "District Court, Yadgir",
  },
  {
    index: 927,
    name: "District Court, Yavatmal",
  },
  {
    index: 928,
    name: "District Court, Yelandur",
  },
  {
    index: 929,
    name: "District Court, Yelbarga",
  },
  {
    index: 930,
    name: "District Court, Yellapur",
  },
  {
    index: 931,
    name: "District Court, Yeman",
  },
  {
    index: 932,
    name: "District Court, Zunheboto",
  },
  {
    index: 933,
    name: "District Forum Central, Kashmeri Gate",
  },
  {
    index: 934,
    name: "East Godavari District Court",
  },
  {
    index: 935,
    name: "East Kameng(West Division)",
  },
  {
    index: 936,
    name: "East Siang(East Division)",
  },
  {
    index: 937,
    name: "Employees Provident Fund Appellate Tribunal (EPFT)",
  },
  {
    index: 938,
    name: "Family Court, Ahmedabad",
  },
  {
    index: 939,
    name: "Family Court, Aurangabad",
  },
  {
    index: 940,
    name: "Family Court, Bangalore",
  },
  {
    index: 941,
    name: "Family Court, Chennai",
  },
  {
    index: 942,
    name: "Family Court, Ernakulam",
  },
  {
    index: 943,
    name: "Family Court, Faridabad",
  },
  {
    index: 944,
    name: "Family Court, Guntur",
  },
  {
    index: 945,
    name: "Family Court, Gwalior",
  },
  {
    index: 946,
    name: "Family Court, Hoshangabad",
  },
  {
    index: 947,
    name: "Family Court, Indore",
  },
  {
    index: 948,
    name: "Family Court, Irinjalakuda",
  },
  {
    index: 949,
    name: "Family Court, Jaipur",
  },
  {
    index: 950,
    name: "Family Court, Jodhpur",
  },
  {
    index: 951,
    name: "Family Court, Lucknow",
  },
  {
    index: 952,
    name: "Family Court, Mathura",
  },
  {
    index: 953,
    name: "Family Court, Pune",
  },
  {
    index: 954,
    name: "Family Court, Rewa",
  },
  {
    index: 955,
    name: "Family Court, Surat",
  },
  {
    index: 956,
    name: "Family Court, Vasai",
  },
  {
    index: 957,
    name: "Family Court, Visakhapatnam",
  },
  {
    index: 958,
    name: "Family Courts, Delhi",
  },
  {
    index: 959,
    name: "Family Courts, Mumbai",
  },
  {
    index: 960,
    name: "Family Courts, Nagpur",
  },
  {
    index: 961,
    name: "Faridabad District Consumer Disputes Redressal Forum",
  },
  {
    index: 962,
    name: "Gauhati High Court",
  },
  {
    index: 963,
    name: "Gauhati High Court",
  },
  {
    index: 964,
    name: "Gauhati High Court",
  },
  {
    index: 965,
    name: "Gauhati High Court",
  },
  {
    index: 966,
    name: "Gopalganj District Court",
  },
  {
    index: 967,
    name: "Gujarat Electricity Regulatory Commission",
  },
  {
    index: 968,
    name: "Gujarat High Court",
  },
  {
    index: 969,
    name: "Gujarat Revenue Tribunal, Ahmedabad",
  },
  {
    index: 970,
    name: "High Court Circuit Bench Gulbarga",
  },
  {
    index: 971,
    name: "High Court of Andhra Pradesh",
  },
  {
    index: 972,
    name: "High Court of Bombay at Goa",
  },
  {
    index: 973,
    name: "High Court of Karnataka, Dharwad Bench",
  },
  {
    index: 974,
    name: "High Court of Meghalaya",
  },
  {
    index: 975,
    name: "Himachal Pradesh High Court",
  },
  {
    index: 976,
    name: "Himachal Pradesh State Administrative Tribunal, Shimla",
  },
  {
    index: 977,
    name: "Himachal Pradesh Tax Tribunal, Dharamshala",
  },
  {
    index: 978,
    name: "Hyderabad High Court",
  },
  {
    index: 979,
    name: "Income Tax Appellate Tribunal (ITAT) Ahmedabad",
  },
  {
    index: 980,
    name: "Income Tax Appellate Tribunal (ITAT) Hyderabad",
  },
  {
    index: 981,
    name: "Income Tax Appellate Tribunal (ITAT) Jaipur",
  },
  {
    index: 982,
    name: "Income Tax Appellate Tribunal Delhi (ITAT)",
  },
  {
    index: 983,
    name: "Income Tax Appellate Tribunal, Amritsar",
  },
  {
    index: 984,
    name: "Income Tax Appellate Tribunal, Bangalore",
  },
  {
    index: 985,
    name: "Income Tax Appellate Tribunal, Chandigarh",
  },
  {
    index: 986,
    name: "Income Tax Appellate Tribunal, Chennai",
  },
  {
    index: 987,
    name: "Income Tax Appellate Tribunal, Indore",
  },
  {
    index: 988,
    name: "Income Tax Appellate Tribunal, Jodhpur",
  },
  {
    index: 989,
    name: "Income Tax Appellate Tribunal, Lucknow",
  },
  {
    index: 990,
    name: "Income Tax Appellate Tribunal, Pune",
  },
  {
    index: 991,
    name: "Income Tax Appellate Tribunal, Ranchi",
  },
  {
    index: 992,
    name: "Indore District Forum",
  },
  {
    index: 993,
    name: "Industrial Court, Korba",
  },
  {
    index: 994,
    name: "Industrial Tribunal-cum-Labour Court, Visakhapatnam",
  },
  {
    index: 995,
    name: "Intellectual Property Appellate Board (IPAB) Delhi",
  },
  {
    index: 996,
    name: "Intellectual Property Appellate Board (IPAB) Mumbai",
  },
  {
    index: 997,
    name: "Intellectual Property Appellate Board (IPAB), Chennai",
  },
  {
    index: 998,
    name: "Intellectual Property Appellate Board, Ahmedabad",
  },
  {
    index: 999,
    name: "Intellectual Property Appellate Board, Chennai",
  },
  {
    index: 1000,
    name: "Jaipur District Court",
  },
  {
    index: 1001,
    name: "Jajpur District Court",
  },
  {
    index: 1002,
    name: "Jalandhar Consumer Disputes Redressal Forum",
  },
  {
    index: 1003,
    name: "Jammu and Kashmir High Court",
  },
  {
    index: 1004,
    name: "Jammu and Kashmir Special Tribunal",
  },
  {
    index: 1005,
    name: "Jammu and Kashmir State Commission",
  },
  {
    index: 1006,
    name: "JDA Appellate Tribunal, Jaipur",
  },
  {
    index: 1007,
    name: "Jharkhand High Court",
  },
  {
    index: 1008,
    name: "Jharkhand State Consumer Disputes Redressal Commission, Ranchi",
  },
  {
    index: 1009,
    name: "Judicial Courts Complex, Nabha",
  },
  {
    index: 1010,
    name: "Judicial Magistrate First Class Court, Vasai",
  },
  {
    index: 1011,
    name: "Karnataka Appellate Tribunal, Bangalore",
  },
  {
    index: 1012,
    name: "Karnataka High Court",
  },
  {
    index: 1013,
    name: "Karnataka State Administrative Tribunal",
  },
  {
    index: 1014,
    name: "Karnataka State Consumer Dispute Redressal Commission, Bangalore",
  },
  {
    index: 1015,
    name: "Kerala Administrative Tribunal - Ernakulam Bench",
  },
  {
    index: 1016,
    name: "Kerala High Court",
  },
  {
    index: 1017,
    name: "Kerala High Court",
  },
  {
    index: 1018,
    name: "Khadki Cantonment Court",
  },
  {
    index: 1019,
    name: "Kolkata Consumer Court",
  },
  {
    index: 1020,
    name: "Kurung Kumey(West Division)",
  },
  {
    index: 1021,
    name: "Labour Court Mumbai",
  },
  {
    index: 1022,
    name: "Labour Court, Allahabad",
  },
  {
    index: 1023,
    name: "Labour Court, Bharuch",
  },
  {
    index: 1024,
    name: "Labour Court, Bhilwara",
  },
  {
    index: 1025,
    name: "Labour Court, Bhopal",
  },
  {
    index: 1026,
    name: "Labour Court, Delhi",
  },
  {
    index: 1027,
    name: "Labour Court, Jaipur",
  },
  {
    index: 1028,
    name: "Labour Court, Lucknow",
  },
  {
    index: 1029,
    name: "Labour Court, Noida",
  },
  {
    index: 1030,
    name: "Labour Court, Surat",
  },
  {
    index: 1031,
    name: "Labour Court, Vadodara",
  },
  {
    index: 1032,
    name: "Lohit(East Division)",
  },
  {
    index: 1033,
    name: "London Court of International Arbitration (LCIA)",
  },
  {
    index: 1034,
    name: "Lower Dibang Valley(East Division)",
  },
  {
    index: 1035,
    name: "Lower Subansiri(West Division)",
  },
  {
    index: 1036,
    name: "Lucknow Bench of Allahabad High Court",
  },
  {
    index: 1037,
    name: "M. P. High Court, Indore Bench",
  },
  {
    index: 1038,
    name: "Machilipatnam Consumer Court",
  },
  {
    index: 1039,
    name: "Madhya Pradesh Board Of Revenue, Gwalior",
  },
  {
    index: 1040,
    name: "Madhya Pradesh High Court",
  },
  {
    index: 1041,
    name: "Madhya Pradesh High Court, Gwalior Bench",
  },
  {
    index: 1042,
    name: "Madhya Pradesh State Consumer Disputes Redressal Commission",
  },
  {
    index: 1043,
    name: "Madras High Court",
  },
  {
    index: 1044,
    name: "Madras High Court",
  },
  {
    index: 1045,
    name: "Madurai Bench of the Madras High Court",
  },
  {
    index: 1046,
    name: "Magistrate court, Chalakudy",
  },
  {
    index: 1047,
    name: "Maharashtra Administrative Tribunal",
  },
  {
    index: 1048,
    name: "Maharashtra Revenue Tribunal, Mumbai",
  },
  {
    index: 1049,
    name: "Maharashtra Revenue Tribunal, Nagpur",
  },
  {
    index: 1050,
    name: "Maharashtra State Co-operative Appellate Court, Mumbai",
  },
  {
    index: 1051,
    name: "Maharashtra State Co-operative Tribunal",
  },
  {
    index: 1052,
    name: "Maharashtra State Consumer Disputes Redressal Commission",
  },
  {
    index: 1053,
    name: "Manipur High Court",
  },
  {
    index: 1054,
    name: "Meerut District Consumer Disputes Redressal Forum",
  },
  {
    index: 1055,
    name: "Metropolitan Court, Ahmedabad",
  },
  {
    index: 1056,
    name: "Metropolitan Criminal Court, Hyderabad",
  },
  {
    index: 1057,
    name: "Metropolitan Magistrate Courts, Chennai",
  },
  {
    index: 1058,
    name: "Metropolitan Magistrate Courts, Kolkata",
  },
  {
    index: 1059,
    name: "Metropolitan Magistrate Courts, Mumbai",
  },
  {
    index: 1060,
    name: "Morwadi Court, Pimpri-Chinchwad",
  },
  {
    index: 1061,
    name: "Motor Accident Cases Tribunal, Guwahati",
  },
  {
    index: 1062,
    name: "Motor Accident Claims Tribunal (MACT)",
  },
  {
    index: 1063,
    name: "Motor Accident Claims Tribunal (MACT), Jalandhar",
  },
  {
    index: 1064,
    name: "Motor Accident Claims Tribunal (MACT), Udaipur",
  },
  {
    index: 1065,
    name: "Motor Accident Claims Tribunal, Mumbai",
  },
  {
    index: 1066,
    name: "Motor Accident Claims Tribunal, Pune",
  },
  {
    index: 1067,
    name: "Motor Accident Claims Tribunal, Thiruvananthapuram",
  },
  {
    index: 1068,
    name: "Motor Accidents Claims Tribunal",
  },
  {
    index: 1069,
    name: "Motor Accidents Claims Tribunal, Faridabad",
  },
  {
    index: 1070,
    name: "Mumbai Centre for International Arbitration (MCIA)",
  },
  {
    index: 1071,
    name: "Mumbai High Court, Aurangabad Bench",
  },
  {
    index: 1072,
    name: "Mumbai Suburban District Court",
  },
  {
    index: 1073,
    name: "Munsiff Court, Amini",
  },
  {
    index: 1074,
    name: "Munsiff Court, Androth",
  },
  {
    index: 1075,
    name: "Munsiff Court, Kodungallur",
  },
  {
    index: 1076,
    name: "Nagpur Bench, Bombay High Court",
  },
  {
    index: 1077,
    name: "Nagpur District Consumer Forum",
  },
  {
    index: 1078,
    name: "Nainital Consumer Dispute Redressal Forum",
  },
  {
    index: 1079,
    name: "National Commission (NCDRC)",
  },
  {
    index: 1080,
    name: "National Company Law Appellate Tribunal (NCLAT)",
  },
  {
    index: 1081,
    name: "National Company Law Tribunal (NCLT), Allahabad",
  },
  {
    index: 1082,
    name: "National Company Law Tribunal (NCLT), Bengaluru",
  },
  {
    index: 1083,
    name: "National Company Law Tribunal (NCLT), Mumbai",
  },
  {
    index: 1084,
    name: "National Company Law Tribunal (NCLT), New Delhi",
  },
  {
    index: 1085,
    name: "National Company Law Tribunal, Ahmedabad",
  },
  {
    index: 1086,
    name: "National Company Law Tribunal, Chandigarh",
  },
  {
    index: 1087,
    name: "National Company Law Tribunal, Chennai",
  },
  {
    index: 1088,
    name: "National Company Law Tribunal, Hyderabad",
  },
  {
    index: 1089,
    name: "National Company Law Tribunal, Jaipur Bench",
  },
  {
    index: 1090,
    name: "National Company Law Tribunal, Kolkata",
  },
  {
    index: 1091,
    name: "National Consumer Disputes Redressal Commission (NCDRC)",
  },
  {
    index: 1092,
    name: "National Consumer Disputes Redressal Commission (NCDRC)",
  },
  {
    index: 1093,
    name: "National Green Tribunal (NGT)",
  },
  {
    index: 1094,
    name: "National Green Tribunal (NGT), Shimla Bench",
  },
  {
    index: 1095,
    name: "National Green Tribunal, Bhopal",
  },
  {
    index: 1096,
    name: "National Green Tribunal, Chennai",
  },
  {
    index: 1097,
    name: "National Green Tribunal, Eastern Zonal Bench",
  },
  {
    index: 1098,
    name: "National Green Tribunal, Jodhpur Bench",
  },
  {
    index: 1099,
    name: "National Green Tribunal, West Zone Bench",
  },
  {
    index: 1100,
    name: "North Tripura Judicial District",
  },
  {
    index: 1101,
    name: "Orissa High Court",
  },
  {
    index: 1102,
    name: "Pandharpur District Court",
  },
  {
    index: 1103,
    name: "Papum Pare(West Division)",
  },
  {
    index: 1104,
    name: "Patna Consumer Forum",
  },
  {
    index: 1105,
    name: "Patna High Court",
  },
  {
    index: 1106,
    name: "Presidency Small Causes Court, Kolkata",
  },
  {
    index: 1107,
    name: "Prevention of Money Laundering Appellate Tribunal",
  },
  {
    index: 1108,
    name: "Punjab and Haryana High Court",
  },
  {
    index: 1109,
    name: "Punjab and Haryana High Court",
  },
  {
    index: 1110,
    name: "Punjab and Haryana High Court",
  },
  {
    index: 1111,
    name: "Railway Claims Tribunal Bench, Bhopal",
  },
  {
    index: 1112,
    name: "Railways Claims Tribunal, Gorakhpur",
  },
  {
    index: 1113,
    name: "Rajasthan Civil Services Appellate Tribunal",
  },
  {
    index: 1114,
    name: "Rajasthan Consumer Court, Jaipur",
  },
  {
    index: 1115,
    name: "Rajasthan High Court",
  },
  {
    index: 1116,
    name: "Rajasthan High Court Bench Jaipur",
  },
  {
    index: 1117,
    name: "Rajasthan High Court Principal Seat Jodhpur",
  },
  {
    index: 1118,
    name: "Rajasthan Tax Board, Ajmer",
  },
  {
    index: 1119,
    name: "Rera appellate tribunal",
  },
  {
    index: 1120,
    name: "RERA Appellate Tribunal",
  },
  {
    index: 1121,
    name: "RERA Appellate Tribunal",
  },
  {
    index: 1122,
    name: "RERA Appellate Tribunal",
  },
  {
    index: 1123,
    name: "RERA Appellate Tribunal",
  },
  {
    index: 1124,
    name: "Rera tribunal",
  },
  {
    index: 1125,
    name: "RERA Tribunal",
  },
  {
    index: 1126,
    name: "RERA Tribunal",
  },
  {
    index: 1127,
    name: "RERA Tribunal",
  },
  {
    index: 1128,
    name: "RERA Tribunal",
  },
  {
    index: 1129,
    name: "Revenue Tribual, Pune",
  },
  {
    index: 1130,
    name: "Rourkela District Court",
  },
  {
    index: 1131,
    name: "Sales Tax Tribunal, Mumbai",
  },
  {
    index: 1132,
    name: "Sanga Reddy District Court",
  },
  {
    index: 1133,
    name: "Sanganer Court",
  },
  {
    index: 1134,
    name: "Sangareddy Court",
  },
  {
    index: 1135,
    name: "School Tribunal, Aurangabad",
  },
  {
    index: 1136,
    name: "School Tribunal, Pune",
  },
  {
    index: 1137,
    name: "SDJM Court, Malkangiri",
  },
  {
    index: 1138,
    name: "Sealdah Civil &amp; Criminal Court",
  },
  {
    index: 1139,
    name: "Securities Appellate Tribunal, Kolkata",
  },
  {
    index: 1140,
    name: "Securities Appellate Tribunal, Mumbai",
  },
  {
    index: 1141,
    name: "Sessions Court, Bangalore",
  },
  {
    index: 1142,
    name: "Sessions Court, Jaipur",
  },
  {
    index: 1143,
    name: "Sikkim High Court",
  },
  {
    index: 1144,
    name: "Siliguri Sub Division Court",
  },
  {
    index: 1145,
    name: "South Tripura Judicial District",
  },
  {
    index: 1146,
    name: "Special Court Anti Corruption Bureau, Kurnool",
  },
  {
    index: 1147,
    name: "Special Secretary Revenue Department",
  },
  {
    index: 1148,
    name: "State Administrative Tribunal, Cuttack",
  },
  {
    index: 1149,
    name: "State Commission Delhi",
  },
  {
    index: 1150,
    name: "State Commission, Vijayawada",
  },
  {
    index: 1151,
    name: "State Consumer Commission, Haryana",
  },
  {
    index: 1152,
    name: "State Consumer Dispute Redressal Commission, Cuttack",
  },
  {
    index: 1153,
    name: "State Consumer Disputes Redressal Commission",
  },
  {
    index: 1154,
    name: "State Consumer Disputes Redressal Commission, Jaipur",
  },
  {
    index: 1155,
    name: "State Consumer Disputes Redressal Commission, Kerala",
  },
  {
    index: 1156,
    name: "State Consumer Disputes Redressal Commission, Raipur",
  },
  {
    index: 1157,
    name: "State Consumer Disputes Redressal Commission, UP",
  },
  {
    index: 1158,
    name: "State Consumer Disputes Redressal Commission(SCDRC), Bihar",
  },
  {
    index: 1159,
    name: "State Consumer Disputes Redressal Forum, Jodhpur",
  },
  {
    index: 1160,
    name: "State Transport Appellate Tribunal, Gwalior",
  },
  {
    index: 1161,
    name: "Sub Divisional Court, Barrackpore",
  },
  {
    index: 1162,
    name: "Sub Divisional Court, Kalyani",
  },
  {
    index: 1163,
    name: "Supreme Court Of India",
  },
  {
    index: 1164,
    name: "Tamil Nadu State Consumer Disputes Redressal Commission",
  },
  {
    index: 1165,
    name: "Tawang(West Division)",
  },
  {
    index: 1166,
    name: "Telangana High Court",
  },
  {
    index: 1167,
    name: "Telangana State Consumer Disputes Redressal Commission",
  },
  {
    index: 1168,
    name: "Telecom Disputes Settlement and Appellate Tribunal",
  },
  {
    index: 1169,
    name: "Tirap(East Division)",
  },
  {
    index: 1170,
    name: "Trial Courts, Bangalore",
  },
  {
    index: 1171,
    name: "Trial Courts, Mumbai",
  },
  {
    index: 1172,
    name: "Tripura High Court",
  },
  {
    index: 1173,
    name: "UP Cooperative Tribunal",
  },
  {
    index: 1174,
    name: "Upper Dibang Valley(East Division)",
  },
  {
    index: 1175,
    name: "Upper Siang(East Division)",
  },
  {
    index: 1176,
    name: "Upper Subansiri(West Division)",
  },
  {
    index: 1177,
    name: "Uttarakhand High Court",
  },
  {
    index: 1178,
    name: "Uttarakhand Information Commission",
  },
  {
    index: 1179,
    name: "Vashi Civil Court",
  },
  {
    index: 1180,
    name: "Visakhapatnam District Consumer Forum",
  },
  {
    index: 1181,
    name: "Wakf Tribunal, Hyderabad",
  },
  {
    index: 1182,
    name: "West Bengal State Administrative Tribunal, Kolkata",
  },
  {
    index: 1183,
    name: "West Kameng(West Division)",
  },
  {
    index: 1184,
    name: "West Siang (West Division)",
  },
  {
    index: 1185,
    name: "West Tripura Judicial District",
  },
];

export { courts };

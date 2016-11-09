export var DB = (function () {
    function DB() {
    }
    DB.db = [{
            "dmc": 0,
            "r": 255,
            "g": 255,
            "b": 255,
            "rgb": "FFFFFF",
            "name": "blanc White"
        },
        {
            "dmc": 208,
            "r": 148,
            "g": 91,
            "b": 128,
            "rgb": "945B80",
            "name": "Lavender-VY DK"
        },
        {
            "dmc": 209,
            "r": 206,
            "g": 148,
            "b": 186,
            "rgb": "CE94BA",
            "name": "Lavender-DK"
        },
        {
            "dmc": 210,
            "r": 236,
            "g": 207,
            "b": 225,
            "rgb": "ECCFE1",
            "name": "Lavender-MD"
        },
        {
            "dmc": 211,
            "r": 243,
            "g": 218,
            "b": 228,
            "rgb": "F3DAE4",
            "name": "Lavender-LT"
        },
        {
            "dmc": 221,
            "r": 156,
            "g": 41,
            "b": 74,
            "rgb": "9C294A",
            "name": "Shell Pink-VY DK"
        },
        {
            "dmc": 223,
            "r": 219,
            "g": 128,
            "b": 115,
            "rgb": "DB8073",
            "name": "Shell Pink-LT"
        },
        {
            "dmc": 224,
            "r": 255,
            "g": 199,
            "b": 176,
            "rgb": "FFC7B0",
            "name": "Shell Pink-VY LT"
        },
        {
            "dmc": 225,
            "r": 255,
            "g": 240,
            "b": 228,
            "rgb": "FFF0E4",
            "name": "Shell Pink-ULT VY L"
        },
        {
            "dmc": 300,
            "r": 143,
            "g": 57,
            "b": 38,
            "rgb": "8F3926",
            "name": "Mahogany-VY DK"
        },
        {
            "dmc": 301,
            "r": 209,
            "g": 102,
            "b": 84,
            "rgb": "D16654",
            "name": "Mahogany-MD"
        },
        {
            "dmc": 304,
            "r": 188,
            "g": 0,
            "b": 97,
            "rgb": "BC0061",
            "name": "Christmas Red-MD"
        },
        {
            "dmc": 307,
            "r": 255,
            "g": 231,
            "b": 109,
            "rgb": "FFE76D",
            "name": "Lemon"
        },
        {
            "dmc": 309,
            "r": 214,
            "g": 43,
            "b": 91,
            "rgb": "D62B5B",
            "name": "Rose-DP"
        },
        {
            "dmc": 310,
            "r": 0,
            "g": 0,
            "b": 0,
            "rgb": "000000",
            "name": "Black"
        },
        {
            "dmc": 311,
            "r": 0,
            "g": 79,
            "b": 97,
            "rgb": "004F61",
            "name": "Navy Blue-MD"
        },
        {
            "dmc": 312,
            "r": 58,
            "g": 84,
            "b": 103,
            "rgb": "3A5467",
            "name": "Navy Blue-LT"
        },
        {
            "dmc": 315,
            "r": 163,
            "g": 90,
            "b": 91,
            "rgb": "A35A5B",
            "name": "Antique Mauve-VY DK"
        },
        {
            "dmc": 316,
            "r": 220,
            "g": 141,
            "b": 141,
            "rgb": "DC8D8D",
            "name": "Antique Mauve-MD"
        },
        {
            "dmc": 317,
            "r": 167,
            "g": 139,
            "b": 136,
            "rgb": "A78B88",
            "name": "Pewter Grey"
        },
        {
            "dmc": 318,
            "r": 197,
            "g": 198,
            "b": 190,
            "rgb": "C5C6BE",
            "name": "Steel Grey - LT"
        },
        {
            "dmc": 319,
            "r": 85,
            "g": 95,
            "b": 82,
            "rgb": "555F52",
            "name": "Pistachio Grn-VY DK"
        },
        {
            "dmc": 320,
            "r": 138,
            "g": 153,
            "b": 120,
            "rgb": "8A9978",
            "name": "Pistachio Green-MD"
        },
        {
            "dmc": 321,
            "r": 231,
            "g": 18,
            "b": 97,
            "rgb": "E71261",
            "name": "Christmas Red"
        },
        {
            "dmc": 322,
            "r": 81,
            "g": 109,
            "b": 135,
            "rgb": "516D87",
            "name": "Navy Blue-VY LT"
        },
        {
            "dmc": 326,
            "r": 188,
            "g": 22,
            "b": 65,
            "rgb": "BC1641",
            "name": "Rose-VY DP"
        },
        {
            "dmc": 327,
            "r": 61,
            "g": 0,
            "b": 103,
            "rgb": "3D0067",
            "name": "Violet-DK"
        },
        {
            "dmc": 333,
            "r": 127,
            "g": 84,
            "b": 130,
            "rgb": "7F5482",
            "name": "Blue Violet-VY DK"
        },
        {
            "dmc": 334,
            "r": 115,
            "g": 140,
            "b": 170,
            "rgb": "738CAA",
            "name": "Baby Blue-MD"
        },
        {
            "dmc": 335,
            "r": 219,
            "g": 36,
            "b": 79,
            "rgb": "DB244F",
            "name": "Rose"
        },
        {
            "dmc": 336,
            "r": 36,
            "g": 73,
            "b": 103,
            "rgb": "244967",
            "name": "Navy Blue"
        },
        {
            "dmc": 340,
            "r": 162,
            "g": 121,
            "b": 164,
            "rgb": "A279A4",
            "name": "Blue Violet-MD"
        },
        {
            "dmc": 341,
            "r": 145,
            "g": 180,
            "b": 197,
            "rgb": "91B4C5",
            "name": "Blue Violet-LT"
        },
        {
            "dmc": 347,
            "r": 194,
            "g": 36,
            "b": 67,
            "rgb": "C22443",
            "name": "Salmon-VY DK"
        },
        {
            "dmc": 349,
            "r": 220,
            "g": 61,
            "b": 91,
            "rgb": "DC3D5B",
            "name": "Coral-DK"
        },
        {
            "dmc": 350,
            "r": 237,
            "g": 69,
            "b": 90,
            "rgb": "ED455A",
            "name": "Coral-MD"
        },
        {
            "dmc": 351,
            "r": 255,
            "g": 128,
            "b": 135,
            "rgb": "FF8087",
            "name": "Coral"
        },
        {
            "dmc": 352,
            "r": 255,
            "g": 157,
            "b": 144,
            "rgb": "FF9D90",
            "name": "Coral-LT"
        },
        {
            "dmc": 353,
            "r": 255,
            "g": 196,
            "b": 184,
            "rgb": "FFC4B8",
            "name": "Peach Flesh"
        },
        {
            "dmc": 355,
            "r": 189,
            "g": 73,
            "b": 47,
            "rgb": "BD492F",
            "name": "Terra Cotta-DK"
        },
        {
            "dmc": 356,
            "r": 226,
            "g": 114,
            "b": 91,
            "rgb": "E2725B",
            "name": "Terra Cotta-MD"
        },
        {
            "dmc": 367,
            "r": 95,
            "g": 112,
            "b": 91,
            "rgb": "5F705B",
            "name": "Pistachio Green-DK"
        },
        {
            "dmc": 368,
            "r": 181,
            "g": 206,
            "b": 162,
            "rgb": "B5CEA2",
            "name": "Pistachio Green-LT"
        },
        {
            "dmc": 369,
            "r": 243,
            "g": 250,
            "b": 209,
            "rgb": "F3FAD1",
            "name": "Pistachio Grn-VY LT"
        },
        {
            "dmc": 370,
            "r": 184,
            "g": 138,
            "b": 87,
            "rgb": "B88A57",
            "name": "Mustard - MD"
        },
        {
            "dmc": 371,
            "r": 196,
            "g": 155,
            "b": 100,
            "rgb": "C49B64",
            "name": "Mustard"
        },
        {
            "dmc": 372,
            "r": 203,
            "g": 162,
            "b": 107,
            "rgb": "CBA26B",
            "name": "Mustard - LT"
        },
        {
            "dmc": 400,
            "r": 157,
            "g": 60,
            "b": 39,
            "rgb": "9D3C27",
            "name": "Mahogany-DK"
        },
        {
            "dmc": 402,
            "r": 255,
            "g": 190,
            "b": 164,
            "rgb": "FFBEA4",
            "name": "Mahogany-VY LT"
        },
        {
            "dmc": 407,
            "r": 194,
            "g": 101,
            "b": 76,
            "rgb": "C2654C",
            "name": "Sportsman Flsh-VY D"
        },
        {
            "dmc": 413,
            "r": 109,
            "g": 95,
            "b": 95,
            "rgb": "6D5F5F",
            "name": "Pewter Grey - DK"
        },
        {
            "dmc": 414,
            "r": 167,
            "g": 139,
            "b": 136,
            "rgb": "A78B88",
            "name": "Steel Grey - DK"
        },
        {
            "dmc": 415,
            "r": 221,
            "g": 221,
            "b": 218,
            "rgb": "DDDDDA",
            "name": "Pearl Grey"
        },
        {
            "dmc": 420,
            "r": 140,
            "g": 91,
            "b": 43,
            "rgb": "8C5B2B",
            "name": "Hazel Nut Brown-DK"
        },
        {
            "dmc": 422,
            "r": 237,
            "g": 172,
            "b": 123,
            "rgb": "EDAC7B",
            "name": "Hazel Nut Brown-LT"
        },
        {
            "dmc": 433,
            "r": 151,
            "g": 84,
            "b": 20,
            "rgb": "975414",
            "name": "Brown-MD"
        },
        {
            "dmc": 434,
            "r": 178,
            "g": 103,
            "b": 70,
            "rgb": "B26746",
            "name": "Brown-LT"
        },
        {
            "dmc": 435,
            "r": 187,
            "g": 107,
            "b": 57,
            "rgb": "BB6B39",
            "name": "Brown-VY LT"
        },
        {
            "dmc": 436,
            "r": 231,
            "g": 152,
            "b": 115,
            "rgb": "E79873",
            "name": "Tan"
        },
        {
            "dmc": 437,
            "r": 238,
            "g": 171,
            "b": 121,
            "rgb": "EEAB79",
            "name": "Tan-LT"
        },
        {
            "dmc": 444,
            "r": 255,
            "g": 176,
            "b": 0,
            "rgb": "FFB000",
            "name": "Lemon-DK"
        },
        {
            "dmc": 445,
            "r": 255,
            "g": 255,
            "b": 190,
            "rgb": "FFFFBE",
            "name": "Lemon-LT"
        },
        {
            "dmc": 451,
            "r": 179,
            "g": 151,
            "b": 143,
            "rgb": "B3978F",
            "name": "Shell Grey - DK"
        },
        {
            "dmc": 452,
            "r": 210,
            "g": 185,
            "b": 175,
            "rgb": "D2B9AF",
            "name": "Shell Grey - MD"
        },
        {
            "dmc": 453,
            "r": 235,
            "g": 207,
            "b": 185,
            "rgb": "EBCFB9",
            "name": "Shell Grey - LT"
        },
        {
            "dmc": 469,
            "r": 116,
            "g": 114,
            "b": 92,
            "rgb": "74725C",
            "name": "Avocado Green"
        },
        {
            "dmc": 470,
            "r": 133,
            "g": 143,
            "b": 108,
            "rgb": "858F6C",
            "name": "Avocado Green-LT"
        },
        {
            "dmc": 471,
            "r": 176,
            "g": 187,
            "b": 140,
            "rgb": "B0BB8C",
            "name": "Avocado Green-VY LT"
        },
        {
            "dmc": 472,
            "r": 238,
            "g": 255,
            "b": 182,
            "rgb": "EEFFB6",
            "name": "Avocado Green-ULT L"
        },
        {
            "dmc": 498,
            "r": 187,
            "g": 0,
            "b": 97,
            "rgb": "BB0061",
            "name": "Christmas Red-LT"
        },
        {
            "dmc": 500,
            "r": 43,
            "g": 57,
            "b": 41,
            "rgb": "2B3929",
            "name": "Blue Green-VY DK"
        },
        {
            "dmc": 501,
            "r": 67,
            "g": 85,
            "b": 73,
            "rgb": "435549",
            "name": "Blue Green-DK"
        },
        {
            "dmc": 502,
            "r": 134,
            "g": 158,
            "b": 134,
            "rgb": "869E86",
            "name": "Blue Green"
        },
        {
            "dmc": 503,
            "r": 195,
            "g": 206,
            "b": 183,
            "rgb": "C3CEB7",
            "name": "Blue Green-MD"
        },
        {
            "dmc": 504,
            "r": 206,
            "g": 221,
            "b": 193,
            "rgb": "CEDDC1",
            "name": "Blue Green-LT"
        },
        {
            "dmc": 517,
            "r": 16,
            "g": 127,
            "b": 135,
            "rgb": "107F87",
            "name": "Wedgewood-MD"
        },
        {
            "dmc": 518,
            "r": 102,
            "g": 148,
            "b": 154,
            "rgb": "66949A",
            "name": "Wedgewood-LT"
        },
        {
            "dmc": 519,
            "r": 194,
            "g": 209,
            "b": 207,
            "rgb": "C2D1CF",
            "name": "Sky Blue"
        },
        {
            "dmc": 520,
            "r": 55,
            "g": 73,
            "b": 18,
            "rgb": "374912",
            "name": "Fern Green-DK"
        },
        {
            "dmc": 522,
            "r": 159,
            "g": 169,
            "b": 142,
            "rgb": "9FA98E",
            "name": "Fern Green"
        },
        {
            "dmc": 523,
            "r": 172,
            "g": 183,
            "b": 142,
            "rgb": "ACB78E",
            "name": "Fern Green-LT"
        },
        {
            "dmc": 524,
            "r": 205,
            "g": 182,
            "b": 158,
            "rgb": "CDB69E",
            "name": "Fern Green-VY LT"
        },
        {
            "dmc": 535,
            "r": 85,
            "g": 85,
            "b": 89,
            "rgb": "555559",
            "name": "Ash Grey - VY LT"
        },
        {
            "dmc": 543,
            "r": 239,
            "g": 214,
            "b": 188,
            "rgb": "EFD6BC",
            "name": "Beige Brown-UL VY L"
        },
        {
            "dmc": 550,
            "r": 109,
            "g": 18,
            "b": 97,
            "rgb": "6D1261",
            "name": "Violet-VY LT"
        },
        {
            "dmc": 552,
            "r": 146,
            "g": 85,
            "b": 130,
            "rgb": "925582",
            "name": "Violet-MD"
        },
        {
            "dmc": 553,
            "r": 160,
            "g": 100,
            "b": 146,
            "rgb": "A06492",
            "name": "Violet"
        },
        {
            "dmc": 554,
            "r": 243,
            "g": 206,
            "b": 225,
            "rgb": "F3CEE1",
            "name": "Violet-LT"
        },
        {
            "dmc": 561,
            "r": 59,
            "g": 96,
            "b": 76,
            "rgb": "3B604C",
            "name": "Jade-VY DK"
        },
        {
            "dmc": 562,
            "r": 97,
            "g": 134,
            "b": 97,
            "rgb": "618661",
            "name": "Jade-MD"
        },
        {
            "dmc": 563,
            "r": 182,
            "g": 212,
            "b": 180,
            "rgb": "B6D4B4",
            "name": "Jade-LT"
        },
        {
            "dmc": 564,
            "r": 214,
            "g": 230,
            "b": 204,
            "rgb": "D6E6CC",
            "name": "Jade-VY LT"
        },
        {
            "dmc": 580,
            "r": 0,
            "g": 103,
            "b": 0,
            "rgb": "006700",
            "name": "Moss Green-DK"
        },
        {
            "dmc": 581,
            "r": 151,
            "g": 152,
            "b": 49,
            "rgb": "979831",
            "name": "Moss Green"
        },
        {
            "dmc": 597,
            "r": 128,
            "g": 151,
            "b": 132,
            "rgb": "809784",
            "name": "Turquoise"
        },
        {
            "dmc": 598,
            "r": 208,
            "g": 223,
            "b": 205,
            "rgb": "D0DFCD",
            "name": "Turquoise-LT"
        },
        {
            "dmc": 600,
            "r": 208,
            "g": 57,
            "b": 106,
            "rgb": "D0396A",
            "name": "Cranberry-VY DK"
        },
        {
            "dmc": 601,
            "r": 222,
            "g": 57,
            "b": 105,
            "rgb": "DE3969",
            "name": "Cranberry-DK"
        },
        {
            "dmc": 602,
            "r": 231,
            "g": 84,
            "b": 122,
            "rgb": "E7547A",
            "name": "Cranberry-MD"
        },
        {
            "dmc": 603,
            "r": 255,
            "g": 115,
            "b": 140,
            "rgb": "FF738C",
            "name": "Cranberry"
        },
        {
            "dmc": 604,
            "r": 255,
            "g": 189,
            "b": 202,
            "rgb": "FFBDCA",
            "name": "Cranberry-LT"
        },
        {
            "dmc": 605,
            "r": 255,
            "g": 207,
            "b": 214,
            "rgb": "FFCFD6",
            "name": "Cranberry-VY LT"
        },
        {
            "dmc": 606,
            "r": 255,
            "g": 0,
            "b": 0,
            "rgb": "FF0000",
            "name": "Bright Orange-Red"
        },
        {
            "dmc": 608,
            "r": 255,
            "g": 91,
            "b": 0,
            "rgb": "FF5B00",
            "name": "Bright Orange"
        },
        {
            "dmc": 610,
            "r": 151,
            "g": 104,
            "b": 84,
            "rgb": "976854",
            "name": "Drab Brown - VY DK"
        },
        {
            "dmc": 611,
            "r": 158,
            "g": 109,
            "b": 91,
            "rgb": "9E6D5B",
            "name": "Drab Brown - DK"
        },
        {
            "dmc": 612,
            "r": 203,
            "g": 152,
            "b": 103,
            "rgb": "CB9867",
            "name": "Drab Brown - MD"
        },
        {
            "dmc": 613,
            "r": 219,
            "g": 176,
            "b": 122,
            "rgb": "DBB07A",
            "name": "Drab Brown - LT"
        },
        {
            "dmc": 632,
            "r": 162,
            "g": 77,
            "b": 52,
            "rgb": "A24D34",
            "name": "Negro Flesh-MD"
        },
        {
            "dmc": 640,
            "r": 163,
            "g": 163,
            "b": 157,
            "rgb": "A3A39D",
            "name": "Beige Grey - VY DK"
        },
        {
            "dmc": 642,
            "r": 174,
            "g": 176,
            "b": 170,
            "rgb": "AEB0AA",
            "name": "Beige Grey - DK"
        },
        {
            "dmc": 644,
            "r": 224,
            "g": 224,
            "b": 215,
            "rgb": "E0E0D7",
            "name": "Beige Grey-MD"
        },
        {
            "dmc": 645,
            "r": 113,
            "g": 113,
            "b": 113,
            "rgb": "717171",
            "name": "Beaver Grey - VY DK"
        },
        {
            "dmc": 646,
            "r": 121,
            "g": 121,
            "b": 121,
            "rgb": "797979",
            "name": "Beaver Grey-DK"
        },
        {
            "dmc": 647,
            "r": 190,
            "g": 190,
            "b": 185,
            "rgb": "BEBEB9",
            "name": "Beaver Grey - MD"
        },
        {
            "dmc": 648,
            "r": 202,
            "g": 202,
            "b": 202,
            "rgb": "CACACA",
            "name": "Beaver Grey-LT"
        },
        {
            "dmc": 666,
            "r": 213,
            "g": 39,
            "b": 86,
            "rgb": "D52756",
            "name": "Christmas Red-LT"
        },
        {
            "dmc": 676,
            "r": 255,
            "g": 206,
            "b": 158,
            "rgb": "FFCE9E",
            "name": "Old Gold-LT"
        },
        {
            "dmc": 677,
            "r": 255,
            "g": 231,
            "b": 182,
            "rgb": "FFE7B6",
            "name": "Old Gold-VY LT"
        },
        {
            "dmc": 680,
            "r": 209,
            "g": 140,
            "b": 103,
            "rgb": "D18C67",
            "name": "Old Gold-DK"
        },
        {
            "dmc": 699,
            "r": 0,
            "g": 91,
            "b": 6,
            "rgb": "005B06",
            "name": "Chirstmas Green"
        },
        {
            "dmc": 700,
            "r": 0,
            "g": 96,
            "b": 47,
            "rgb": "00602F",
            "name": "Christmas Green-BRT"
        },
        {
            "dmc": 701,
            "r": 79,
            "g": 108,
            "b": 69,
            "rgb": "4F6C45",
            "name": "Christmas Green-LT"
        },
        {
            "dmc": 702,
            "r": 79,
            "g": 121,
            "b": 66,
            "rgb": "4F7942",
            "name": "Kelly Green"
        },
        {
            "dmc": 703,
            "r": 121,
            "g": 144,
            "b": 76,
            "rgb": "79904C",
            "name": "Chartreuse"
        },
        {
            "dmc": 704,
            "r": 165,
            "g": 164,
            "b": 103,
            "rgb": "A5A467",
            "name": "Chartreuse-BRT"
        },
        {
            "dmc": 712,
            "r": 245,
            "g": 240,
            "b": 219,
            "rgb": "F5F0DB",
            "name": "Cream"
        },
        {
            "dmc": 718,
            "r": 219,
            "g": 55,
            "b": 121,
            "rgb": "DB3779",
            "name": "Plum"
        },
        {
            "dmc": 720,
            "r": 200,
            "g": 36,
            "b": 43,
            "rgb": "C8242B",
            "name": "Orange Spice-DK"
        },
        {
            "dmc": 721,
            "r": 255,
            "g": 115,
            "b": 97,
            "rgb": "FF7361",
            "name": "Orange Spice-MD"
        },
        {
            "dmc": 722,
            "r": 255,
            "g": 146,
            "b": 109,
            "rgb": "FF926D",
            "name": "Orange Spice-LT"
        },
        {
            "dmc": 725,
            "r": 255,
            "g": 200,
            "b": 124,
            "rgb": "FFC87C",
            "name": "Topaz"
        },
        {
            "dmc": 726,
            "r": 255,
            "g": 224,
            "b": 128,
            "rgb": "FFE080",
            "name": "Topaz-LT"
        },
        {
            "dmc": 727,
            "r": 255,
            "g": 235,
            "b": 168,
            "rgb": "FFEBA8",
            "name": "Topaz-VY LT"
        },
        {
            "dmc": 729,
            "r": 243,
            "g": 176,
            "b": 128,
            "rgb": "F3B080",
            "name": "Old Gold-MD"
        },
        {
            "dmc": 730,
            "r": 132,
            "g": 102,
            "b": 0,
            "rgb": "846600",
            "name": "Olive Green-VY DK"
        },
        {
            "dmc": 731,
            "r": 140,
            "g": 103,
            "b": 0,
            "rgb": "8C6700",
            "name": "Olive Green-DK"
        },
        {
            "dmc": 732,
            "r": 145,
            "g": 104,
            "b": 0,
            "rgb": "916800",
            "name": "Olive Green"
        },
        {
            "dmc": 733,
            "r": 206,
            "g": 155,
            "b": 97,
            "rgb": "CE9B61",
            "name": "Olive Green-MD"
        },
        {
            "dmc": 734,
            "r": 221,
            "g": 166,
            "b": 107,
            "rgb": "DDA66B",
            "name": "Olive Green-LT"
        },
        {
            "dmc": 738,
            "r": 244,
            "g": 195,
            "b": 139,
            "rgb": "F4C38B",
            "name": "Tan-VY LT"
        },
        {
            "dmc": 739,
            "r": 244,
            "g": 233,
            "b": 202,
            "rgb": "F4E9CA",
            "name": "Tan-ULT VY LT"
        },
        {
            "dmc": 740,
            "r": 255,
            "g": 131,
            "b": 19,
            "rgb": "FF8313",
            "name": "Tangerine"
        },
        {
            "dmc": 741,
            "r": 255,
            "g": 142,
            "b": 4,
            "rgb": "FF8E04",
            "name": "Tangerine-MD"
        },
        {
            "dmc": 742,
            "r": 255,
            "g": 183,
            "b": 85,
            "rgb": "FFB755",
            "name": "Tangerine-LT"
        },
        {
            "dmc": 743,
            "r": 255,
            "g": 230,
            "b": 146,
            "rgb": "FFE692",
            "name": "Yellow-MD"
        },
        {
            "dmc": 744,
            "r": 255,
            "g": 239,
            "b": 170,
            "rgb": "FFEFAA",
            "name": "Yellow-PALE"
        },
        {
            "dmc": 745,
            "r": 255,
            "g": 240,
            "b": 197,
            "rgb": "FFF0C5",
            "name": "Yellow-LT PALE"
        },
        {
            "dmc": 746,
            "r": 246,
            "g": 234,
            "b": 219,
            "rgb": "F6EADB",
            "name": "Off White"
        },
        {
            "dmc": 747,
            "r": 240,
            "g": 247,
            "b": 239,
            "rgb": "F0F7EF",
            "name": "Sky Blue-VY LT"
        },
        {
            "dmc": 754,
            "r": 251,
            "g": 227,
            "b": 209,
            "rgb": "FBE3D1",
            "name": "Peach Flesh-LT"
        },
        {
            "dmc": 758,
            "r": 255,
            "g": 177,
            "b": 147,
            "rgb": "FFB193",
            "name": "Terra Cotta-VY LT"
        },
        {
            "dmc": 760,
            "r": 249,
            "g": 160,
            "b": 146,
            "rgb": "F9A092",
            "name": "Salmon"
        },
        {
            "dmc": 761,
            "r": 255,
            "g": 201,
            "b": 188,
            "rgb": "FFC9BC",
            "name": "Salmon-LT"
        },
        {
            "dmc": 762,
            "r": 232,
            "g": 232,
            "b": 229,
            "rgb": "E8E8E5",
            "name": "Pearl Grey - VY LT"
        },
        {
            "dmc": 772,
            "r": 231,
            "g": 249,
            "b": 203,
            "rgb": "E7F9CB",
            "name": "Pine Green--LT"
        },
        {
            "dmc": 775,
            "r": 247,
            "g": 246,
            "b": 248,
            "rgb": "F7F6F8",
            "name": "Baby Blue-VY LT"
        },
        {
            "dmc": 776,
            "r": 255,
            "g": 177,
            "b": 174,
            "rgb": "FFB1AE",
            "name": "Pink-MD"
        },
        {
            "dmc": 778,
            "r": 255,
            "g": 199,
            "b": 184,
            "rgb": "FFC7B8",
            "name": "Antique Mauve-VY LT"
        },
        {
            "dmc": 780,
            "r": 181,
            "g": 98,
            "b": 46,
            "rgb": "B5622E",
            "name": "Topaz-ULT VY DK"
        },
        {
            "dmc": 781,
            "r": 181,
            "g": 107,
            "b": 56,
            "rgb": "B56B38",
            "name": "Topaz-VY DK"
        },
        {
            "dmc": 782,
            "r": 204,
            "g": 119,
            "b": 66,
            "rgb": "CC7742",
            "name": "Topaz-DK"
        },
        {
            "dmc": 783,
            "r": 225,
            "g": 146,
            "b": 85,
            "rgb": "E19255",
            "name": "Topaz-MD"
        },
        {
            "dmc": 791,
            "r": 71,
            "g": 55,
            "b": 93,
            "rgb": "47375D",
            "name": "Cornflower Blue-VYD"
        },
        {
            "dmc": 792,
            "r": 97,
            "g": 97,
            "b": 128,
            "rgb": "616180",
            "name": "Cornflower Blue-DK"
        },
        {
            "dmc": 793,
            "r": 147,
            "g": 139,
            "b": 164,
            "rgb": "938BA4",
            "name": "Cornflower Blue-MD"
        },
        {
            "dmc": 794,
            "r": 187,
            "g": 208,
            "b": 218,
            "rgb": "BBD0DA",
            "name": "Cornflower Blue-LT"
        },
        {
            "dmc": 796,
            "r": 30,
            "g": 58,
            "b": 95,
            "rgb": "1E3A5F",
            "name": "Royal Blue-DK"
        },
        {
            "dmc": 797,
            "r": 30,
            "g": 66,
            "b": 99,
            "rgb": "1E4263",
            "name": "Royal Blue"
        },
        {
            "dmc": 798,
            "r": 103,
            "g": 115,
            "b": 141,
            "rgb": "67738D",
            "name": "Delft-DK"
        },
        {
            "dmc": 799,
            "r": 132,
            "g": 156,
            "b": 182,
            "rgb": "849CB6",
            "name": "Delft-MD"
        },
        {
            "dmc": 800,
            "r": 233,
            "g": 238,
            "b": 233,
            "rgb": "E9EEE9",
            "name": "Delft-PALE"
        },
        {
            "dmc": 801,
            "r": 123,
            "g": 71,
            "b": 20,
            "rgb": "7B4714",
            "name": "Coffee Brown-DK"
        },
        {
            "dmc": 806,
            "r": 30,
            "g": 130,
            "b": 133,
            "rgb": "1E8285",
            "name": "Peacock Blue-DK"
        },
        {
            "dmc": 807,
            "r": 128,
            "g": 167,
            "b": 160,
            "rgb": "80A7A0",
            "name": "Peacock Blue"
        },
        {
            "dmc": 809,
            "r": 190,
            "g": 193,
            "b": 205,
            "rgb": "BEC1CD",
            "name": "Delft"
        },
        {
            "dmc": 813,
            "r": 175,
            "g": 195,
            "b": 205,
            "rgb": "AFC3CD",
            "name": "Blue-LT"
        },
        {
            "dmc": 814,
            "r": 162,
            "g": 0,
            "b": 88,
            "rgb": "A20058",
            "name": "Garnet-DK"
        },
        {
            "dmc": 815,
            "r": 166,
            "g": 0,
            "b": 91,
            "rgb": "A6005B",
            "name": "Garnet-MD"
        },
        {
            "dmc": 816,
            "r": 179,
            "g": 0,
            "b": 91,
            "rgb": "B3005B",
            "name": "Garnet"
        },
        {
            "dmc": 817,
            "r": 219,
            "g": 24,
            "b": 85,
            "rgb": "DB1855",
            "name": "Coral Red-VY DK"
        },
        {
            "dmc": 818,
            "r": 255,
            "g": 234,
            "b": 235,
            "rgb": "FFEAEB",
            "name": "Baby Pink"
        },
        {
            "dmc": 819,
            "r": 248,
            "g": 247,
            "b": 221,
            "rgb": "F8F7DD",
            "name": "Baby Pink-LT"
        },
        {
            "dmc": 820,
            "r": 30,
            "g": 54,
            "b": 85,
            "rgb": "1E3655",
            "name": "Royal Blue-VY DK"
        },
        {
            "dmc": 822,
            "r": 242,
            "g": 234,
            "b": 219,
            "rgb": "F2EADB",
            "name": "Beige Grey-LT"
        },
        {
            "dmc": 823,
            "r": 0,
            "g": 0,
            "b": 73,
            "rgb": "000049",
            "name": "Navy Blue-DK"
        },
        {
            "dmc": 824,
            "r": 71,
            "g": 97,
            "b": 116,
            "rgb": "476174",
            "name": "Blue-VY DK"
        },
        {
            "dmc": 825,
            "r": 85,
            "g": 108,
            "b": 128,
            "rgb": "556C80",
            "name": "Blue-DK"
        },
        {
            "dmc": 826,
            "r": 115,
            "g": 138,
            "b": 153,
            "rgb": "738A99",
            "name": "Blue-MD"
        },
        {
            "dmc": 827,
            "r": 213,
            "g": 231,
            "b": 232,
            "rgb": "D5E7E8",
            "name": "Blue-VY LT"
        },
        {
            "dmc": 828,
            "r": 237,
            "g": 247,
            "b": 238,
            "rgb": "EDF7EE",
            "name": "Blue-ULT VY LT"
        },
        {
            "dmc": 829,
            "r": 130,
            "g": 90,
            "b": 8,
            "rgb": "825A08",
            "name": "Golden Olive-VY DK"
        },
        {
            "dmc": 830,
            "r": 136,
            "g": 95,
            "b": 18,
            "rgb": "885F12",
            "name": "Golden Olive-DK"
        },
        {
            "dmc": 831,
            "r": 144,
            "g": 103,
            "b": 18,
            "rgb": "906712",
            "name": "Golden Olive-MD"
        },
        {
            "dmc": 832,
            "r": 178,
            "g": 119,
            "b": 55,
            "rgb": "B27737",
            "name": "Golden Olive"
        },
        {
            "dmc": 833,
            "r": 219,
            "g": 182,
            "b": 128,
            "rgb": "DBB680",
            "name": "Golden Olive-LT"
        },
        {
            "dmc": 834,
            "r": 242,
            "g": 209,
            "b": 142,
            "rgb": "F2D18E",
            "name": "Golden Olive-VY LT"
        },
        {
            "dmc": 838,
            "r": 94,
            "g": 56,
            "b": 27,
            "rgb": "5E381B",
            "name": "Beige Brown-VY DK"
        },
        {
            "dmc": 839,
            "r": 109,
            "g": 66,
            "b": 39,
            "rgb": "6D4227",
            "name": "Beige Brown-DK"
        },
        {
            "dmc": 840,
            "r": 128,
            "g": 85,
            "b": 30,
            "rgb": "80551E",
            "name": "Beige Brown-MD"
        },
        {
            "dmc": 841,
            "r": 188,
            "g": 134,
            "b": 107,
            "rgb": "BC866B",
            "name": "Beige Brown-LT"
        },
        {
            "dmc": 842,
            "r": 219,
            "g": 194,
            "b": 164,
            "rgb": "DBC2A4",
            "name": "Beige Brown-VY LT"
        },
        {
            "dmc": 844,
            "r": 107,
            "g": 103,
            "b": 102,
            "rgb": "6B6766",
            "name": "Beaver Brown -ULT D"
        },
        {
            "dmc": 868,
            "r": 153,
            "g": 92,
            "b": 48,
            "rgb": "995C30",
            "name": "Hazel Nut Brown-VYD"
        },
        {
            "dmc": 869,
            "r": 153,
            "g": 92,
            "b": 48,
            "rgb": "995C30",
            "name": "Hazel Nut Brn-VY DK"
        },
        {
            "dmc": 890,
            "r": 79,
            "g": 86,
            "b": 76,
            "rgb": "4F564C",
            "name": "Pistachio Grn-ULT D"
        },
        {
            "dmc": 891,
            "r": 241,
            "g": 49,
            "b": 84,
            "rgb": "F13154",
            "name": "Carnation-DK"
        },
        {
            "dmc": 892,
            "r": 249,
            "g": 90,
            "b": 97,
            "rgb": "F95A61",
            "name": "Carnation-MD"
        },
        {
            "dmc": 893,
            "r": 243,
            "g": 149,
            "b": 157,
            "rgb": "F3959D",
            "name": "Carnation-LT"
        },
        {
            "dmc": 894,
            "r": 255,
            "g": 194,
            "b": 191,
            "rgb": "FFC2BF",
            "name": "Carnation-VY LT"
        },
        {
            "dmc": 895,
            "r": 89,
            "g": 92,
            "b": 78,
            "rgb": "595C4E",
            "name": "Hunter Green-VY DK"
        },
        {
            "dmc": 898,
            "r": 118,
            "g": 55,
            "b": 19,
            "rgb": "763713",
            "name": "Coffee Brown-VY DK"
        },
        {
            "dmc": 899,
            "r": 233,
            "g": 109,
            "b": 115,
            "rgb": "E96D73",
            "name": "Rose-MD"
        },
        {
            "dmc": 900,
            "r": 206,
            "g": 43,
            "b": 0,
            "rgb": "CE2B00",
            "name": "Burnt Orange-DK"
        },
        {
            "dmc": 902,
            "r": 138,
            "g": 24,
            "b": 77,
            "rgb": "8A184D",
            "name": "Granet-VY DK"
        },
        {
            "dmc": 904,
            "r": 78,
            "g": 95,
            "b": 57,
            "rgb": "4E5F39",
            "name": "Parrot Green-VY DK"
        },
        {
            "dmc": 905,
            "r": 98,
            "g": 119,
            "b": 57,
            "rgb": "627739",
            "name": "Parrot Green-DK"
        },
        {
            "dmc": 906,
            "r": 143,
            "g": 163,
            "b": 89,
            "rgb": "8FA359",
            "name": "Parrot Green-MD"
        },
        {
            "dmc": 907,
            "r": 185,
            "g": 200,
            "b": 102,
            "rgb": "B9C866",
            "name": "Parrot Green-LT"
        },
        {
            "dmc": 909,
            "r": 49,
            "g": 105,
            "b": 85,
            "rgb": "316955",
            "name": "Emerald Green-VY DK"
        },
        {
            "dmc": 910,
            "r": 48,
            "g": 116,
            "b": 91,
            "rgb": "30745B",
            "name": "Emerald Green-DK"
        },
        {
            "dmc": 911,
            "r": 49,
            "g": 128,
            "b": 97,
            "rgb": "318061",
            "name": "Emerald Green-MD"
        },
        {
            "dmc": 912,
            "r": 115,
            "g": 158,
            "b": 115,
            "rgb": "739E73",
            "name": "Emerald Green-LT"
        },
        {
            "dmc": 913,
            "r": 153,
            "g": 188,
            "b": 149,
            "rgb": "99BC95",
            "name": "Nile Green-MD"
        },
        {
            "dmc": 915,
            "r": 170,
            "g": 24,
            "b": 91,
            "rgb": "AA185B",
            "name": "Plum-DK"
        },
        {
            "dmc": 917,
            "r": 171,
            "g": 22,
            "b": 95,
            "rgb": "AB165F",
            "name": "Plum-MD"
        },
        {
            "dmc": 918,
            "r": 168,
            "g": 68,
            "b": 76,
            "rgb": "A8444C",
            "name": "Red Copper-DK"
        },
        {
            "dmc": 919,
            "r": 180,
            "g": 75,
            "b": 82,
            "rgb": "B44B52",
            "name": "Red Copper"
        },
        {
            "dmc": 920,
            "r": 197,
            "g": 94,
            "b": 88,
            "rgb": "C55E58",
            "name": "Copper-MD"
        },
        {
            "dmc": 921,
            "r": 206,
            "g": 103,
            "b": 91,
            "rgb": "CE675B",
            "name": "Copper"
        },
        {
            "dmc": 922,
            "r": 237,
            "g": 134,
            "b": 115,
            "rgb": "ED8673",
            "name": "Copper-LT"
        },
        {
            "dmc": 924,
            "r": 86,
            "g": 99,
            "b": 100,
            "rgb": "566364",
            "name": "Grey Green--VY DK"
        },
        {
            "dmc": 926,
            "r": 96,
            "g": 116,
            "b": 115,
            "rgb": "607473",
            "name": "Grey Green-LT"
        },
        {
            "dmc": 927,
            "r": 200,
            "g": 198,
            "b": 194,
            "rgb": "C8C6C2",
            "name": "Grey Green-LT"
        },
        {
            "dmc": 928,
            "r": 225,
            "g": 224,
            "b": 216,
            "rgb": "E1E0D8",
            "name": "Grey Green--VY LT"
        },
        {
            "dmc": 930,
            "r": 102,
            "g": 122,
            "b": 140,
            "rgb": "667A8C",
            "name": "Antique Blue-DK"
        },
        {
            "dmc": 931,
            "r": 124,
            "g": 135,
            "b": 145,
            "rgb": "7C8791",
            "name": "Antique Blue-MD"
        },
        {
            "dmc": 932,
            "r": 182,
            "g": 186,
            "b": 194,
            "rgb": "B6BAC2",
            "name": "Antique Blue-LT"
        },
        {
            "dmc": 934,
            "r": 62,
            "g": 59,
            "b": 40,
            "rgb": "3E3B28",
            "name": "Black Avocado Green"
        },
        {
            "dmc": 935,
            "r": 67,
            "g": 63,
            "b": 47,
            "rgb": "433F2F",
            "name": "Avocado Green-DK"
        },
        {
            "dmc": 936,
            "r": 69,
            "g": 69,
            "b": 49,
            "rgb": "454531",
            "name": "Avocado Green--VY D"
        },
        {
            "dmc": 937,
            "r": 73,
            "g": 86,
            "b": 55,
            "rgb": "495637",
            "name": "Avocado Green-MD"
        },
        {
            "dmc": 938,
            "r": 99,
            "g": 39,
            "b": 16,
            "rgb": "632710",
            "name": "Coffee Brown-ULT DK"
        },
        {
            "dmc": 939,
            "r": 0,
            "g": 0,
            "b": 49,
            "rgb": "000031",
            "name": "Navy Blue-Vy DK"
        },
        {
            "dmc": 943,
            "r": 0,
            "g": 162,
            "b": 117,
            "rgb": "00A275",
            "name": "Aquamarine-MD"
        },
        {
            "dmc": 945,
            "r": 255,
            "g": 206,
            "b": 164,
            "rgb": "FFCEA4",
            "name": "Flesh-MD"
        },
        {
            "dmc": 946,
            "r": 244,
            "g": 73,
            "b": 0,
            "rgb": "F44900",
            "name": "Burnt Orange-MD"
        },
        {
            "dmc": 947,
            "r": 255,
            "g": 91,
            "b": 0,
            "rgb": "FF5B00",
            "name": "Burnt Orange"
        },
        {
            "dmc": 948,
            "r": 255,
            "g": 243,
            "b": 231,
            "rgb": "FFF3E7",
            "name": "Peach Flesh-VY LT"
        },
        {
            "dmc": 950,
            "r": 239,
            "g": 162,
            "b": 127,
            "rgb": "EFA27F",
            "name": "Sportsman Flesh"
        },
        {
            "dmc": 951,
            "r": 255,
            "g": 229,
            "b": 188,
            "rgb": "FFE5BC",
            "name": "Flesh"
        },
        {
            "dmc": 954,
            "r": 170,
            "g": 213,
            "b": 164,
            "rgb": "AAD5A4",
            "name": "Nile Green"
        },
        {
            "dmc": 955,
            "r": 214,
            "g": 230,
            "b": 204,
            "rgb": "D6E6CC",
            "name": "Nile Green-LT"
        },
        {
            "dmc": 956,
            "r": 255,
            "g": 109,
            "b": 115,
            "rgb": "FF6D73",
            "name": "Geranium"
        },
        {
            "dmc": 957,
            "r": 255,
            "g": 204,
            "b": 208,
            "rgb": "FFCCD0",
            "name": "Gernanium-PALE"
        },
        {
            "dmc": 958,
            "r": 0,
            "g": 160,
            "b": 130,
            "rgb": "00A082",
            "name": "Sea Green-DK"
        },
        {
            "dmc": 959,
            "r": 171,
            "g": 206,
            "b": 177,
            "rgb": "ABCEB1",
            "name": "Sea Green-MD"
        },
        {
            "dmc": 961,
            "r": 243,
            "g": 108,
            "b": 123,
            "rgb": "F36C7B",
            "name": "Dusty Rose-DK"
        },
        {
            "dmc": 962,
            "r": 253,
            "g": 134,
            "b": 141,
            "rgb": "FD868D",
            "name": "Dusty Rose-MD"
        },
        {
            "dmc": 963,
            "r": 255,
            "g": 233,
            "b": 233,
            "rgb": "FFE9E9",
            "name": "Dusty Rose-ULT VY L"
        },
        {
            "dmc": 964,
            "r": 208,
            "g": 224,
            "b": 210,
            "rgb": "D0E0D2",
            "name": "Sea Green-LT"
        },
        {
            "dmc": 966,
            "r": 206,
            "g": 213,
            "b": 176,
            "rgb": "CED5B0",
            "name": "Baby Green-MD"
        },
        {
            "dmc": 970,
            "r": 255,
            "g": 117,
            "b": 24,
            "rgb": "FF7518",
            "name": "Pumpkin-LT"
        },
        {
            "dmc": 971,
            "r": 255,
            "g": 106,
            "b": 0,
            "rgb": "FF6A00",
            "name": "Pumpkin"
        },
        {
            "dmc": 972,
            "r": 255,
            "g": 146,
            "b": 0,
            "rgb": "FF9200",
            "name": "Canary-DP"
        },
        {
            "dmc": 973,
            "r": 255,
            "g": 194,
            "b": 67,
            "rgb": "FFC243",
            "name": "Canary-BRT"
        },
        {
            "dmc": 975,
            "r": 158,
            "g": 67,
            "b": 18,
            "rgb": "9E4312",
            "name": "Golden Brown-DK"
        },
        {
            "dmc": 976,
            "r": 246,
            "g": 141,
            "b": 57,
            "rgb": "F68D39",
            "name": "Golden Brown-MD"
        },
        {
            "dmc": 977,
            "r": 255,
            "g": 164,
            "b": 73,
            "rgb": "FFA449",
            "name": "Golden Brown-LT"
        },
        {
            "dmc": 986,
            "r": 58,
            "g": 82,
            "b": 65,
            "rgb": "3A5241",
            "name": "Forest Green-VY DK"
        },
        {
            "dmc": 987,
            "r": 83,
            "g": 97,
            "b": 73,
            "rgb": "536149",
            "name": "Forest Green-DK"
        },
        {
            "dmc": 988,
            "r": 134,
            "g": 145,
            "b": 110,
            "rgb": "86916E",
            "name": "Forest Green-MD"
        },
        {
            "dmc": 989,
            "r": 134,
            "g": 153,
            "b": 110,
            "rgb": "86996E",
            "name": "Forest Green"
        },
        {
            "dmc": 991,
            "r": 47,
            "g": 91,
            "b": 73,
            "rgb": "2F5B49",
            "name": "Aquamarine-DK"
        },
        {
            "dmc": 992,
            "r": 146,
            "g": 183,
            "b": 165,
            "rgb": "92B7A5",
            "name": "Aquamarine"
        },
        {
            "dmc": 993,
            "r": 192,
            "g": 224,
            "b": 200,
            "rgb": "C0E0C8",
            "name": "Aquamarine-LT"
        },
        {
            "dmc": 995,
            "r": 0,
            "g": 123,
            "b": 134,
            "rgb": "007B86",
            "name": "Electric Blue-DK"
        },
        {
            "dmc": 996,
            "r": 170,
            "g": 222,
            "b": 225,
            "rgb": "AADEE1",
            "name": "Electric Blue-MD"
        },
        {
            "dmc": 3011,
            "r": 123,
            "g": 91,
            "b": 64,
            "rgb": "7B5B40",
            "name": "Khaki Green-DK"
        },
        {
            "dmc": 3012,
            "r": 170,
            "g": 134,
            "b": 103,
            "rgb": "AA8667",
            "name": "Khaki Green-MD"
        },
        {
            "dmc": 3013,
            "r": 208,
            "g": 195,
            "b": 164,
            "rgb": "D0C3A4",
            "name": "Khaki Green-LT"
        },
        {
            "dmc": 3021,
            "r": 115,
            "g": 91,
            "b": 93,
            "rgb": "735B5D",
            "name": "Brown Grey - VY DK"
        },
        {
            "dmc": 3022,
            "r": 172,
            "g": 172,
            "b": 170,
            "rgb": "ACACAA",
            "name": "Brown Grey - MD"
        },
        {
            "dmc": 3023,
            "r": 198,
            "g": 190,
            "b": 173,
            "rgb": "C6BEAD",
            "name": "Brown Grey - LT"
        },
        {
            "dmc": 3024,
            "r": 210,
            "g": 208,
            "b": 205,
            "rgb": "D2D0CD",
            "name": "Brown Grey - VY LT"
        },
        {
            "dmc": 3031,
            "r": 84,
            "g": 56,
            "b": 23,
            "rgb": "543817",
            "name": "Mocha Brown-VY DK"
        },
        {
            "dmc": 3032,
            "r": 188,
            "g": 156,
            "b": 120,
            "rgb": "BC9C78",
            "name": "Mocha Brown-MD"
        },
        {
            "dmc": 3033,
            "r": 239,
            "g": 219,
            "b": 190,
            "rgb": "EFDBBE",
            "name": "Mocha Brown-VY LT"
        },
        {
            "dmc": 3041,
            "r": 190,
            "g": 155,
            "b": 167,
            "rgb": "BE9BA7",
            "name": "Antique Violet-MD"
        },
        {
            "dmc": 3042,
            "r": 225,
            "g": 205,
            "b": 200,
            "rgb": "E1CDC8",
            "name": "Antique Violet-LT"
        },
        {
            "dmc": 3045,
            "r": 216,
            "g": 151,
            "b": 105,
            "rgb": "D89769",
            "name": "Yellow Beige-DK"
        },
        {
            "dmc": 3046,
            "r": 229,
            "g": 193,
            "b": 139,
            "rgb": "E5C18B",
            "name": "Yellow Beige-MD"
        },
        {
            "dmc": 3047,
            "r": 255,
            "g": 236,
            "b": 211,
            "rgb": "FFECD3",
            "name": "Yellow Beige-LT"
        },
        {
            "dmc": 3051,
            "r": 85,
            "g": 73,
            "b": 0,
            "rgb": "554900",
            "name": "Green Grey-DK"
        },
        {
            "dmc": 3052,
            "r": 137,
            "g": 141,
            "b": 114,
            "rgb": "898D72",
            "name": "Green Grey--MD"
        },
        {
            "dmc": 3053,
            "r": 187,
            "g": 179,
            "b": 148,
            "rgb": "BBB394",
            "name": "Green Grey"
        },
        {
            "dmc": 3064,
            "r": 194,
            "g": 101,
            "b": 76,
            "rgb": "C2654C",
            "name": "Sportsman Flsh-VY D"
        },
        {
            "dmc": 3072,
            "r": 233,
            "g": 233,
            "b": 223,
            "rgb": "E9E9DF",
            "name": "Beaver Grey - VY LT"
        },
        {
            "dmc": 3078,
            "r": 255,
            "g": 255,
            "b": 220,
            "rgb": "FFFFDC",
            "name": "Golden Yellow-VY LT"
        },
        {
            "dmc": 3325,
            "r": 202,
            "g": 226,
            "b": 229,
            "rgb": "CAE2E5",
            "name": "Baby Blue-LT"
        },
        {
            "dmc": 3326,
            "r": 255,
            "g": 157,
            "b": 150,
            "rgb": "FF9D96",
            "name": "Rose-LT"
        },
        {
            "dmc": 3328,
            "r": 188,
            "g": 64,
            "b": 85,
            "rgb": "BC4055",
            "name": "Salmon-DK"
        },
        {
            "dmc": 3340,
            "r": 255,
            "g": 123,
            "b": 103,
            "rgb": "FF7B67",
            "name": "Apricot-MD"
        },
        {
            "dmc": 3341,
            "r": 255,
            "g": 172,
            "b": 162,
            "rgb": "EBACA2",
            "name": "Apricot"
        },
        {
            "dmc": 3345,
            "r": 97,
            "g": 100,
            "b": 82,
            "rgb": "616452",
            "name": "Hunter Green-DK"
        },
        {
            "dmc": 3346,
            "r": 120,
            "g": 134,
            "b": 107,
            "rgb": "78866B",
            "name": "Hunter Green"
        },
        {
            "dmc": 3347,
            "r": 128,
            "g": 152,
            "b": 115,
            "rgb": "809873",
            "name": "Yellow Green-MD"
        },
        {
            "dmc": 3348,
            "r": 225,
            "g": 249,
            "b": 190,
            "rgb": "E1F9BE",
            "name": "Yellow Green-LT"
        },
        {
            "dmc": 3350,
            "r": 201,
            "g": 79,
            "b": 91,
            "rgb": "C94F5B",
            "name": "Dusty Rose-ULT DK"
        },
        {
            "dmc": 3354,
            "r": 255,
            "g": 214,
            "b": 209,
            "rgb": "FFD6D1",
            "name": "Dusty Rose-LT"
        },
        {
            "dmc": 3362,
            "r": 96,
            "g": 95,
            "b": 84,
            "rgb": "605F54",
            "name": "Pine Green-DK"
        },
        {
            "dmc": 3363,
            "r": 116,
            "g": 127,
            "b": 96,
            "rgb": "747F60",
            "name": "Pine Green-MD"
        },
        {
            "dmc": 3364,
            "r": 161,
            "g": 167,
            "b": 135,
            "rgb": "A1A787",
            "name": "Pine Green"
        },
        {
            "dmc": 3371,
            "r": 83,
            "g": 37,
            "b": 16,
            "rgb": "532510",
            "name": "Black Brown"
        },
        {
            "dmc": 3607,
            "r": 231,
            "g": 79,
            "b": 134,
            "rgb": "E74F86",
            "name": "Plum-LT"
        },
        {
            "dmc": 3608,
            "r": 247,
            "g": 152,
            "b": 182,
            "rgb": "F798B6",
            "name": "Plum-VY LT"
        },
        {
            "dmc": 3609,
            "r": 255,
            "g": 214,
            "b": 229,
            "rgb": "FFD6E5",
            "name": "Plum-ULT LT"
        },
        {
            "dmc": 3685,
            "r": 161,
            "g": 53,
            "b": 79,
            "rgb": "A1354F",
            "name": "Mauve-DK"
        },
        {
            "dmc": 3687,
            "r": 203,
            "g": 78,
            "b": 97,
            "rgb": "CB4E61",
            "name": "Mauve"
        },
        {
            "dmc": 3688,
            "r": 250,
            "g": 151,
            "b": 144,
            "rgb": "FA9790",
            "name": "Mauve-MD"
        },
        {
            "dmc": 3689,
            "r": 255,
            "g": 213,
            "b": 216,
            "rgb": "FFD5D8",
            "name": "Mauve-LT"
        },
        {
            "dmc": 3705,
            "r": 255,
            "g": 85,
            "b": 91,
            "rgb": "FF555B",
            "name": "Melon-DK"
        },
        {
            "dmc": 3706,
            "r": 255,
            "g": 128,
            "b": 109,
            "rgb": "FF806D",
            "name": "Melon-MD"
        },
        {
            "dmc": 3708,
            "r": 254,
            "g": 212,
            "b": 219,
            "rgb": "FED4DB",
            "name": "Melon-LT"
        },
        {
            "dmc": 3712,
            "r": 230,
            "g": 101,
            "b": 107,
            "rgb": "E6656B",
            "name": "Salmon-MD"
        },
        {
            "dmc": 3713,
            "r": 253,
            "g": 229,
            "b": 217,
            "rgb": "FDE5D9",
            "name": "Salmon-VY LT"
        },
        {
            "dmc": 3716,
            "r": 255,
            "g": 211,
            "b": 212,
            "rgb": "FFD3D4",
            "name": "Dusty Rose-VY LT"
        },
        {
            "dmc": 3721,
            "r": 184,
            "g": 75,
            "b": 77,
            "rgb": "B84B4D",
            "name": "Shell Pink-DK"
        },
        {
            "dmc": 3722,
            "r": 184,
            "g": 89,
            "b": 88,
            "rgb": "B85958",
            "name": "Shell Pink-MD"
        },
        {
            "dmc": 3726,
            "r": 195,
            "g": 118,
            "b": 123,
            "rgb": "C3767B",
            "name": "Antique Mauve-DK"
        },
        {
            "dmc": 3727,
            "r": 255,
            "g": 199,
            "b": 196,
            "rgb": "FFC7C4",
            "name": "Antique Mauve-LT"
        },
        {
            "dmc": 3731,
            "r": 209,
            "g": 93,
            "b": 103,
            "rgb": "D15D67",
            "name": "Dusty Rose-VY DK"
        },
        {
            "dmc": 3733,
            "r": 255,
            "g": 154,
            "b": 148,
            "rgb": "FF9A94",
            "name": "Dusty Rose"
        },
        {
            "dmc": 3740,
            "r": 156,
            "g": 125,
            "b": 133,
            "rgb": "9C7D85",
            "name": "Antique Violet-DK"
        },
        {
            "dmc": 3743,
            "r": 235,
            "g": 235,
            "b": 231,
            "rgb": "EBEBE7",
            "name": "Antique Violet-VY L"
        },
        {
            "dmc": 3746,
            "r": 149,
            "g": 102,
            "b": 162,
            "rgb": "9566A2",
            "name": "Blue Violet-DK"
        },
        {
            "dmc": 3747,
            "r": 230,
            "g": 236,
            "b": 232,
            "rgb": "E6ECE8",
            "name": "Blue Violet-VY LT"
        },
        {
            "dmc": 3750,
            "r": 12,
            "g": 91,
            "b": 108,
            "rgb": "0C5B6C",
            "name": "Antique Blue-VY DK"
        },
        {
            "dmc": 3752,
            "r": 194,
            "g": 209,
            "b": 206,
            "rgb": "C2D1CE",
            "name": "Antique Blue-VY LT"
        },
        {
            "dmc": 3753,
            "r": 237,
            "g": 247,
            "b": 247,
            "rgb": "EDF7F7",
            "name": "Ant. Blue-ULT VY LT"
        },
        {
            "dmc": 3755,
            "r": 158,
            "g": 176,
            "b": 206,
            "rgb": "9EB0CE",
            "name": "Baby Blue"
        },
        {
            "dmc": 3756,
            "r": 248,
            "g": 248,
            "b": 252,
            "rgb": "F8F8FC",
            "name": "Baby Blue-ULT VY LT"
        },
        {
            "dmc": 3760,
            "r": 102,
            "g": 142,
            "b": 152,
            "rgb": "668E98",
            "name": "Wedgewood"
        },
        {
            "dmc": 3761,
            "r": 227,
            "g": 234,
            "b": 230,
            "rgb": "E3EAE6",
            "name": "Sky Blue-LT"
        },
        {
            "dmc": 3765,
            "r": 24,
            "g": 128,
            "b": 134,
            "rgb": "188086",
            "name": "Peacock Blue-VY DK"
        },
        {
            "dmc": 3766,
            "r": 24,
            "g": 101,
            "b": 111,
            "rgb": "18656F",
            "name": "Peacock Blue-LT"
        },
        {
            "dmc": 3768,
            "r": 92,
            "g": 110,
            "b": 108,
            "rgb": "5C6E6C",
            "name": "Grey Green-DK"
        },
        {
            "dmc": 3770,
            "r": 255,
            "g": 250,
            "b": 224,
            "rgb": "FFFAE0",
            "name": "Flesh-VY LT"
        },
        {
            "dmc": 3772,
            "r": 173,
            "g": 83,
            "b": 62,
            "rgb": "AD533E",
            "name": "Negro Flesh"
        },
        {
            "dmc": 3773,
            "r": 231,
            "g": 134,
            "b": 103,
            "rgb": "E78667",
            "name": "Sportsman Flsh-MD"
        },
        {
            "dmc": 3774,
            "r": 255,
            "g": 220,
            "b": 193,
            "rgb": "FFDCC1",
            "name": "Sportsman Flsh-VY L"
        },
        {
            "dmc": 3776,
            "r": 221,
            "g": 109,
            "b": 91,
            "rgb": "DD6D5B",
            "name": "Mahogony-LT"
        },
        {
            "dmc": 3777,
            "r": 191,
            "g": 64,
            "b": 36,
            "rgb": "BF4024",
            "name": "Terra Cotta-VY DK"
        },
        {
            "dmc": 3778,
            "r": 237,
            "g": 122,
            "b": 100,
            "rgb": "ED7A64",
            "name": "Terra Cotta-LT"
        },
        {
            "dmc": 3779,
            "r": 255,
            "g": 177,
            "b": 152,
            "rgb": "FFB198",
            "name": "Ter. Cotta-ULT VY L"
        },
        {
            "dmc": 3781,
            "r": 113,
            "g": 71,
            "b": 42,
            "rgb": "71472A",
            "name": "Mocha Brown-DK"
        },
        {
            "dmc": 3782,
            "r": 206,
            "g": 175,
            "b": 144,
            "rgb": "CEAF90",
            "name": "Mocho Brown-LT"
        },
        {
            "dmc": 3787,
            "r": 139,
            "g": 109,
            "b": 115,
            "rgb": "8B6D73",
            "name": "Brown Grey - DK"
        },
        {
            "dmc": 3790,
            "r": 140,
            "g": 117,
            "b": 109,
            "rgb": "8C756D",
            "name": "Beige Grey - ULT DK"
        },
        {
            "dmc": 3799,
            "r": 81,
            "g": 76,
            "b": 83,
            "rgb": "514C53",
            "name": "Pewter Grey - VY DK"
        }
    ];
    return DB;
}());
//# sourceMappingURL=db.js.map
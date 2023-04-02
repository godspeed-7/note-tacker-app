import { rest } from "msw";

export const usersData = {
    "results": [
        {
            "gender": "female",
            "name": {
                "title": "Ms",
                "first": "Ege",
                "last": "Bolatlı"
            },
            "location": {
                "street": {
                    "number": 6825,
                    "name": "Atatürk Sk"
                },
                "city": "Karabük",
                "state": "Samsun",
                "country": "Turkey",
                "postcode": 61384,
                "coordinates": {
                    "latitude": "70.9633",
                    "longitude": "152.0114"
                },
                "timezone": {
                    "offset": "+2:00",
                    "description": "Kaliningrad, South Africa"
                }
            },
            "email": "ege.bolatli@example.com",
            "login": {
                "uuid": "43d8a0fa-95aa-4277-b364-b5a5221b64b3",
                "username": "crazypanda436",
                "password": "gunners",
                "salt": "wQNkDE0p",
                "md5": "5edba1add27306cdced65cb76860da83",
                "sha1": "ba228e1493f0df518c984b24c04312080de0f87a",
                "sha256": "88ff9290f65b4a3e9d3630b1607346ee0f2170d913887b066a8d0e3d43e11948"
            },
            "dob": {
                "date": "1980-02-19T07:06:00.728Z",
                "age": 42
            },
            "registered": {
                "date": "2009-10-06T12:05:55.116Z",
                "age": 12
            },
            "phone": "(117)-427-2837",
            "cell": "(373)-561-5410",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/16.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/16.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/16.jpg"
            },
            "nat": "TR"
        }
    ],
    "info": {
        "seed": "710af0ce96bced71",
        "results": 1,
        "page": 1,
        "version": "1.4"
    }
}

export const handlers = [

  rest.get("https://randomuser.me/api", (req, res, ctx) => {
    return res(
      ctx.json(usersData)
    );
  }),

//   rest.get("https://randomuser1.me/api", (req, res, ctx) => {
//     return res(
//         ctx.status(400),
//         ctx.json({
//           error: "No Records Found",
//         })
//       );
//   }),
];

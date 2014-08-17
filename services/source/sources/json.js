exports = module.exports = [
    {
        "active": true,
        "origin": "json",
        "name": "Mashable (must-reads)",
        "url": "http://mashable.com/category/must-reads/?format=json",
        "listref": "data",
        "linkref": "url",
        "category": ['technology', 'mashable'],
        "format": "desktop",
        "body": true,
        "template": {
            "elements": [
                {
                    "name": "guid",
                    "type": "url",
                    "required": true,
                    "items": [
                        {
                            "selector": "link"
                        }
                    ]
                },
                {
                    "name": "title",
                    "required": true,
                    "items": [
                        {
                            "selector": "title"
                        }
                    ]
                },
                {
                    "name": "url",
                    "type": "url",
                    "required": true,
                    "items": [
                        {
                            "selector": "link"
                        }
                    ]
                },
                {
                    "name": "image",
                    "type": "url",
                    "items": [
                        {
                            "selector": "responsive_images[1].image"
                        },
                        {
                            "selector": "responsive_images[0].image"
                        }
                    ],
                    "fallback": "http://rack.1.mshcdn.com/assets/header_share_logo.v2-11a2e0632ddb46b143c85e63f590734d.png"
                }
            ]
        }
    }
];

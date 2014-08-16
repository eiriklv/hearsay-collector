exports = module.exports = [
    {
        active: false,
        origin: 'site',
        name: 'Wired Science',
        url: 'http://www.wired.com/science',
        linkref: 'url',
        category: ['technology', 'science'],
        format: 'desktop',
        body: true,
        template: {
            containers: [
                {
                    selector: 'article',
                    elements: [
                        {
                            name: 'guid',
                            type: 'url',
                            items: [
                                {
                                    selector: 'h2 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'url',
                            type: 'url',
                            items: [
                                {
                                    selector: 'h2 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'title',
                            required: true,
                            items: [
                                {
                                    selector: 'h2 a'
                                }
                            ]
                        },
                        {
                            name: 'description',
                            items: [
                                {
                                    selector: 'div.excertp p',
                                    delimiter: '\n'
                                }
                            ]
                        },
                        {
                            name: 'image',
                            type: 'url',
                            fallback: 'http://www.wired.com/wp-content/themes/wired/assets/images/post_wired_logo_150x60.gif',
                            items: [
                                {
                                    selector: 'div.thumbnail a img',
                                    attribute: 'src'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        active: false,
        origin: 'site',
        name: 'Gamer.no',
        url: 'http://www.gamer.no',
        linkref: 'url',
        category: ['technology', 'gaming'],
        format: 'desktop',
        body: false,
        template: {
            containers: [
                {
                    selector: 'article',
                    elements: [
                        {
                            name: 'guid',
                            type: 'url',
                            items: [
                                {
                                    selector: 'h2 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'url',
                            type: 'url',
                            items: [
                                {
                                    selector: 'h2 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'title',
                            required: true,
                            items: [
                                {
                                    selector: 'h2 a'
                                }
                            ]
                        },
                        {
                            name: 'description',
                            items: [
                                {
                                    selector: 'p',
                                    delimiter: '\n'
                                }
                            ]
                        },
                        {
                            name: 'image',
                            type: 'url',
                            fallback: 'http://img.gfx.no/1428/1428622/gamer_logo_169.300x169mc.jpg',
                            items: [
                                {
                                    selector: 'figure a img',
                                    attribute: 'src'
                                },
                                {
                                    selector: 'figure a div.delay-image-load',
                                    attribute: 'data-src-normal'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        active: false,
        origin: 'site',
        name: 'IGN Norge',
        url: 'http://no.ign.com',
        linkref: 'url',
        category: ['technology', 'gaming'],
        format: 'desktop',
        body: true,
        template: {
            containers: [
                {
                    selector: 'li article',
                    elements: [
                        {
                            name: 'guid',
                            type: 'url',
                            items: [
                                {
                                    selector: 'h3 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'url',
                            type: 'url',
                            items: [
                                {
                                    selector: 'h3 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'title',
                            required: true,
                            items: [
                                {
                                    selector: 'h3 a'
                                }
                            ]
                        },
                        {
                            name: 'image',
                            type: 'url',
                            fallback: 'http://oystatic.ignimgs.com/src/core/img/widgets/global/page/ign-logo-100x100.jpg',
                            items: [
                                {
                                    selector: 'div.img-thumb a img',
                                    attribute: 'src'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        active: false,
        origin: 'site',
        name: 'Pressfire.no',
        url: 'http://www.pressfire.no/',
        linkref: 'url',
        category: ['technology', 'gaming'],
        format: 'desktop',
        body: true,
        template: {
            containers: [
                {
                    selector: '#top-article',
                    elements: [
                        {
                            name: 'guid',
                            type: 'url',
                            items: [
                                {
                                    selector: 'div.top-article-meta h2 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'url',
                            type: 'url',
                            items: [
                                {
                                    selector: 'div.top-article-meta h2 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'title',
                            required: true,
                            items: [
                                {
                                    selector: 'div.top-article-meta h2 a'
                                }
                            ]
                        },
                        {
                            name: 'image',
                            type: 'url',
                            fallback: 'http://www.pressfire.no/gfx/pressfire-logo.png',
                            items: [
                                {
                                    selector: 'div.image-article-meta a img',
                                    attribute: 'src'
                                }
                            ]
                        }
                    ]
                },
                {
                    selector: 'div.large-article',
                    elements: [
                        {
                            name: 'guid',
                            type: 'url',
                            items: [
                                {
                                    selector: 'div.large-meta h2 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'url',
                            type: 'url',
                            items: [
                                {
                                    selector: 'div.large-meta h2 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'title',
                            required: true,
                            items: [
                                {
                                    selector: 'div.large-meta h2 a'
                                }
                            ]
                        },
                        {
                            name: 'image',
                            type: 'url',
                            fallback: 'http://www.pressfire.no/gfx/pressfire-logo.png',
                            items: [
                                {
                                    selector: 'div.image-article-meta a img',
                                    attribute: 'src'
                                },
                                {
                                    selector: 'div.article-image-container a img',
                                    attribute: 'src'
                                }
                            ]
                        }
                    ]
                },
                {
                    selector: 'div.small-article',
                    elements: [
                        {
                            name: 'guid',
                            type: 'url',
                            items: [
                                {
                                    selector: 'div.article-meta h2 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'url',
                            type: 'url',
                            items: [
                                {
                                    selector: 'div.article-meta h2 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'title',
                            required: true,
                            items: [
                                {
                                    selector: 'div.article-meta h2 a'
                                }
                            ]
                        },
                        {
                            name: 'image',
                            type: 'url',
                            fallback: 'http://www.pressfire.no/gfx/pressfire-logo.png',
                            items: [
                                {
                                    selector: 'div.article-image-container a img',
                                    attribute: 'src'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        active: false,
        origin: 'site',
        name: 'Tv2 Nettavisen',
        url: 'http://www.nettavisen.no/',
        linkref: 'url',
        category: ['news'],
        format: 'desktop',
        body: false,
        template: {
            containers: [
                {
                    selector: '.article-content',
                    elements: [
                        {
                            name: 'guid',
                            type: 'url',
                            required: true,
                            items: [
                                {
                                    selector: 'h5 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h4 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h3 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h2 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h1 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'url',
                            type: 'url',
                            required: true,
                            items: [
                                {
                                    selector: 'h5 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h4 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h3 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h2 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h1 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'title',
                            required: true,
                            items: [
                                {
                                    selector: 'h5 a'
                                },
                                {
                                    selector: 'h4 a'
                                },
                                {
                                    selector: 'h3 a'
                                },
                                {
                                    selector: 'h2 a'
                                },
                                {
                                    selector: 'h1 a'
                                }
                            ]
                        },
                        {
                            name: 'description',
                            items: [
                                {
                                    selector: 'span.df-img-container-inner a img',
                                    attribute: 'alt'
                                }
                            ]
                        },
                        {
                            name: 'image',
                            type: 'url',
                            fallback: 'http://someimageurl.comm/1.png',
                            items: [
                                {
                                    selector: 'span.df-img-container-inner a img',
                                    attribute: 'src'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        active: false,
        origin: 'site',
        name: 'sol.no',
        url: 'http://www.sol.no/',
        linkref: 'url',
        category: ['news'],
        format: 'desktop',
        body: false,
        template: {
            containers: [
                {
                    selector: '.article-content',
                    elements: [
                        {
                            name: 'guid',
                            type: 'url',
                            required: true,
                            items: [
                                {
                                    selector: 'h5 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h4 a',
                                    attribute: 'href'
                                },{
                                    selector: 'h3 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h2 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h1 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'url',
                            type: 'url',
                            required: true,
                            items: [
                                {
                                    selector: 'h5 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h4 a',
                                    attribute: 'href'
                                },{
                                    selector: 'h3 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h2 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h1 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'title',
                            required: true,
                            items: [
                                {
                                    selector: 'h5 a'
                                },
                                {
                                    selector: 'h4 a'
                                },
                                {
                                    selector: 'h3 a'
                                },
                                {
                                    selector: 'h2 a'
                                },
                                {
                                    selector: 'h1 a'
                                }
                            ]
                        },
                        {
                            name: 'description',
                            items: [
                                {
                                    selector: 'span.df-img-container-inner a img',
                                    attribute: 'alt'
                                }
                            ]
                        },
                        {
                            name: 'image',
                            type: 'url',
                            fallback: null,
                            items: [
                                {
                                    selector: 'span.df-img-container-inner a img',
                                    attribute: 'data-echo'
                                },
                                {
                                    selector: 'span.df-img-container-inner a img',
                                    attribute: 'data-src'
                                },
                                {
                                    selector: 'span.df-img-container-inner a img',
                                    attribute: 'src'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        active: false,
        origin: 'site',
        name: 'Aftenposten Forside',
        url: 'http://www.aftenposten.no/',
        linkref: 'url',
        category: ['news'],
        format: 'desktop',
        body: true,
        template: {
            containers: [
                {
                    selector: '.df-article-content',
                    elements: [
                        {
                            name: 'guid',
                            type: 'url',
                            required: true,
                            items: [
                                {
                                    selector: 'h5 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h4 a',
                                    attribute: 'href'
                                },{
                                    selector: 'h3 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h2 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h1 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'url',
                            type: 'url',
                            required: true,
                            items: [
                                {
                                    selector: 'h5 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h4 a',
                                    attribute: 'href'
                                },{
                                    selector: 'h3 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h2 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h1 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'title',
                            required: true,
                            items: [
                                {
                                    selector: 'h5 a'
                                },
                                {
                                    selector: 'h4 a'
                                },
                                {
                                    selector: 'h3 a'
                                },
                                {
                                    selector: 'h2 a'
                                },
                                {
                                    selector: 'h1 a'
                                }
                            ]
                        },
                        {
                            name: 'image',
                            type: 'url',
                            fallback: null,
                            items: [
                                {
                                    selector: '.df-img-container-inner a img',
                                    attribute: 'data-src'
                                },
                                {
                                    selector: '.df-img-container-inner a img',
                                    attribute: 'src'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
];
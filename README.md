[![Netlify Status](https://api.netlify.com/api/v1/badges/346758d9-9bca-4a36-9500-f5a723e74ab8/deploy-status)](https://app.netlify.com/sites/musing-booth-904e7f/deploys)

# Website for a Florida holiday rental

The owners wanted to be able to showcase their property, and allow potential guests to view the property location on a map, as well as any available dates on an integrated calendar. Viewers can contact the property owners via a contact form.

This is a Gatsby JS website, with Netlify CMS for easy maintenance and non-coding content management.
It was kicked off with the [Gastby starter blog](https://github.com/gatsbyjs/gatsby-starter-blog) to help easily configure the Netlify CMS.

I chose Gatsby JS for this project as I wanted the performance benefits of Gatsby's image rendering plugins, as well as the excellent integration with Netlify for hassle-free hosting. I also wanted to try Netlify's CMS as I knew the property owners would appreciate being able to update their content in their own time. I felt that Netlify CMS had some benefits over other traditional CMS such as cost and simplicity. The admin area interface is perhaps a bit limiting, but with a fairly small site such as this, I thought it would be fine for our needs, and would hopefully be simple to learn for the client.

The site is [currently live](https://www.afamilydisneyescape.com/) - although the images are placeholders while the owners get newer shots taken. Some of the current images are not high quality enough, particulary for the full-width banner on larger screens

### Features

- Responsive across all devices
- Image gallery with lightbox
- Contact form
- Live calendar
- Google map
- CMS admin area

### Technology/packages used

- React
- Gatsby JS
- Netlify CMS
- Google Calendar API
- Google Maps API
- React Bootstrap
- GraphQL

## Run locally

To run locally, clone repo and ensure Gatsby CLI is set up. Then run `gatsby develop`

To enable the integration with a Google Calendar you will need `.env-development` and `.env-production` files with the following keys:

```
GATSBY_GOOGLE_CAL_API=<API KEY>

```

### Lessons learned/limitations

_Netlify CMS_:

- The 'preview' is very hard to configure - in the end I gave up as it wasn't vital for this fairly small project.
- The ability to add lists of various widgets was pretty neat and I think this could be a powerful feature
- The integration with Gatsby was relatively pain-free, and I like the seamless integration with Github

_GraphQL_

- I liked the way the CMS writes to markdown files. Using GraphQL to then read the markdown files was new for me. It was mostly good, but I struggles at times by the limitations of one page query and one 'html' block in each markdown file. This was probably down to my limited understanding of GraphQL more than an issue with Gatsby itself.

_Netlify for hosting_

- This was fantastic. Continuous integration, clear build logs, easy to add environment variables, and hassle-free form handling. All for free!

_Gatsby JS_

- Typescript: Gatsby comes with TS support out of the box, which is nice, although I think next time I will make more of an effort to enforce it. I would definitely like to Type-safe my graphQL queries for example
- The image handling is excellent - but was not seamless to get up and running, as there are some quirks about how things need to be configured which wasn't clear in the docs
  - I ran into some issues where I was trying to pass an image to a child component via it's prop. I wanted to be able to source the image file from netlify CMS and pass it to my layout via a prop to use as a banner image. This caused some inconsistent errors and build failures. In the end I swapped to hard coding the file name - this is not great and is something I need to fix.

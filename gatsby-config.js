module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    desc: 'My blog test',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        excerpt_separator: `<!-- end -->`,
      },
    },
  ],
}

// Use pathPrefix if needed in a subdomain
// pathPrefix: '/level-up-gatsby-tut',

// Need this is p.json
// "deploy": "gatsby build --prefix-paths && gh-pages -d public"
